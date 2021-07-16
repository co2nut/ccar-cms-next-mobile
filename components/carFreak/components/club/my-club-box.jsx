
import { Card, Col, Empty, Form, Row, Dropdown, Menu, Avatar, Icon, Modal} from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayLengthCount, isValidNumber, notEmptyLength } from '../../../../common-function';
import client from '../../../../feathers';
import ScrollLoadWrapper from '../../../general/ScrollLoadWrapper';
import { imageNotFound } from '../../../profile/config';
import OtherClubsBox from './other-clubs-box';
import Link from 'next/link';
import { routePaths } from '../../../../route';
import { earthGreyIcon, followingGreyIcon, createCarFreakIcon, createSocialBoardIcon } from '../../../../icon';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

const PAGE_SIZE = 30;

const MyClubBox = (props) => {

    const [myClubs, setMyClubs] = useState([])
    const [myClubTotal, setMyClubTotal] = useState(0);
    const [myClubPage, setMyClubPage] = useState(1);
    const [menuOpened, setMenuOpened] = useState(false)
    const [myJoinedClubs, setMyJoinedClubs] = useState([])
    const [myJoinedClubTotal, setMyJoinedClubTotal] = useState(0);
    const [myJoinedClubPage, setMyJoinedClubPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {
        if (props.userId) {
            if (myClubPage == 1) {
                getMyClubs(0);
            } else {
                setMyClubPage(1);
            }

            if (myJoinedClubPage == 1) {
                getMyJoinedClubs(0);
            } else {
                setMyJoinedClubPage(1);
            }
        }
    }, [props.userId])

    useEffect(() => {
        client.service('chats').removeListener('created');

        client.service('clubs').on('created', (record) => {
            if (record.userId == props.userId) {
                setMyClubs([record].concat(myClubs || []));
                setMyClubTotal(myClubTotal + 1);
            } else {
                if (props.userId) {
                    client.service('clubjoin').find({
                        query: {
                            userId: props.userId,
                            clubId: _.get(record, ['_id']),
                            status: 'approved',
                            role: 'member',
                            $limit: 1,
                        }
                    }).then(res => {
                        if (_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data']))) {
                            setMyJoinedClubs([record].concat(myJoinedClubs || []));
                            setMyJoinedClubTotal(myJoinedClubTotal + 1);
                        }
                    })
                }
            }
        })
    })

    useEffect(() => {
        getMyClubs((myClubPage - 1) * PAGE_SIZE);
    }, [myClubPage])

    useEffect(() => {
        getMyJoinedClubs((myJoinedClubPage - 1) * PAGE_SIZE);
    }, [myJoinedClubPage])

    function getMyClubs(skip) {

        if (props.userId) {

            skip = isValidNumber(parseInt(skip)) ? parseInt(skip) : 0;
            client.service('clubjoin').find({
                query: {
                    userId: props.userId,
                    status: 'approved',
                    role: 'admin',
                    $populate: ['clubId'],
                    $limit: PAGE_SIZE,
                    $skip: skip,
                    $sort: {
                        createdAt: -1,
                    }
                }
            }).then(res => {
                setMyClubs(_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data'])) ? myClubPage == 1 ? _.map(_.get(res, ['data']), 'clubId') : _.concat(myClubs, _.map(_.get(res, ['data']), 'clubId')) : []);
                setMyClubTotal(_.get(res, ['total']) || 0);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    function getMyJoinedClubs(skip) {

        if (props.userId) {

            skip = isValidNumber(parseInt(skip)) ? parseInt(skip) : 0;
            client.service('clubjoin').find({
                query: {
                    userId: props.userId,
                    status: 'approved',
                    role: 'member',
                    $populate: ['clubId'],
                    $limit: PAGE_SIZE,
                    $skip: skip,
                    $sort: {
                        createdAt: -1,
                    }
                }
            }).then(res => {
                setMyJoinedClubs(_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data'])) ? myJoinedClubPage == 1 ? _.map(_.get(res, ['data']), 'clubId') : _.concat(myJoinedClubs, _.map(_.get(res, ['data']), 'clubId')) : []);
                setMyJoinedClubTotal(_.get(res, ['total']) || 0);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    return (
        <React.Fragment>
            <Tablet>
            <Row gutter={[20, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <React.Fragment>
                        <Card
                            title="My Club(s)" 
                        >
                            {
                                _.isArray(myClubs) && notEmptyLength(myClubs) ?
                                    <ScrollLoadWrapper autoHide autoHeight autoHeightMax={300} onScrolledBottom={() => {
                                        if (arrayLengthCount(myClubs) < myClubTotal) {
                                            setMyClubPage(myClubPage + 1)
                                        }
                                    }}>
                                        <div className="flex-justify-space-around flex-items-align-center flex-wrap">
                                            {
                                                _.map(myClubs, function (club) {
                                                    return (
                                                        <Link shallow={false}  href={routePaths.socialClubDetails.to || '/'} as={typeof (routePaths.socialClubDetails.as) == 'function' ? routePaths.socialClubDetails.as(club) : '/'} >
                                                            <a>
                                                                <span className='d-inline-block relative-wrapper avatar flex-items-no-shrink margin-md cursor-pointer' style={{ height: 150, width: 150, overflow: 'hidden' }}>
                                                                    <img className=" img-cover fill-parent absolute-center" src={_.get(club, ['clubAvatar']) || imageNotFound} />
                                                                    <div className="fill-parent background-black-opacity-50 flex-items-align-center flex-justify-center padding-md absolute-center stack-element-opacity-100">
                                                                        <span className='d-inline-block white h6 text-truncate-threeline' >
                                                                            {_.get(club, ['clubName']) || ''}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </ScrollLoadWrapper>
                                    :
                                    <Empty></Empty>
                            }
                        </Card>

                        <Card
                            title="My Joined Club(s)"
                            className="margin-top-lg"
                        >
                            {
                                _.isArray(myJoinedClubs) && notEmptyLength(myJoinedClubs) ?
                                    <ScrollLoadWrapper autoHide autoHeight autoHeightMax={300} onScrolledBottom={() => {
                                        if (arrayLengthCount(myJoinedClubs) < myJoinedClubTotal) {
                                            setMyJoinedClubPage(myJoinedClubPage + 1)
                                        }
                                    }}>
                                        <div className="flex-justify-space-around flex-items-align-center flex-wrap">
                                            {
                                                _.map(myJoinedClubs, function (club) {
                                                    return (
                                                        <Link shallow={false}  href={routePaths.socialClubDetails.to || '/'} as={typeof (routePaths.socialClubDetails.as) == 'function' ? routePaths.socialClubDetails.as(club) : '/'} >
                                                            <a>
                                                                <span className='d-inline-block relative-wrapper avatar flex-items-no-shrink margin-md cursor-pointer' style={{ height: 150, width: 150, overflow: 'hidden' }} >
                                                                    <img className=" img-cover fill-parent absolute-center" src={_.get(club, ['clubAvatar']) || imageNotFound} />
                                                                    <div className="fill-parent background-black-opacity-50 flex-items-align-center flex-justify-center padding-md absolute-center stack-element-opacity-100">
                                                                        <span className='d-inline-block white h6 text-truncate-threeline' >
                                                                            {_.get(club, ['clubName']) || ''}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </ScrollLoadWrapper>
                                    :
                                    <Empty></Empty>
                            }
                        </Card>
                    </React.Fragment>
                </Col>
                <Col xs={6} sm={6} md={0} lg={6} xl={6}>
                    <Card
                        title="Other CarFreaks Clubs"
                    >
                        <OtherClubsBox userId={props.userId} />
                    </Card>
                </Col>
            </Row>
            </Tablet>
            
<Mobile>
{
                menuOpened ?
                    <div className="background-black-opacity-50 absolute-center" style={{ zIndex: 2 }} >
                    </div>
                    :
                    null
            }

            <Dropdown trigger="click" placement="topLeft"
                getPopupContainer={() => typeof (document) != undefined ? document.getElementById('writePostAffix') : null}
                overlay={
                    <Menu className="background-transparent box-shadow-none "
                    onClick={(e) => {
                        setMenuOpened(false)
                    }}>
                        <Menu.Item key="carfreaks" style={{ padding: '10px 0px' }} >
                            <div className=" flex-justify-space-between flex-items-align-center" style={{ width: 200 }} >
                                <span className='d-inline-block subtitle1 ccar-button-yellow' >
                                    CarFreaks
                                </span>
                                <span className='d-inline-block avatar padding-sm background-white' >
                                    <img src={createCarFreakIcon} style={{ height: 30, width: 30 }} />
                                </span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="socialboard" className="white" style={{ padding: '10px 0px' }}>
                                    <div className="flex-justify-space-between flex-items-align-center" style={{ width: 200 }} >
                                        <span className='d-inline-block subtitle1 ccar-button-yellow' >
                                            Social Board
                                        </span>
                                        <span className='d-inline-block avatar padding-sm background-white' >
                                            <img src={createSocialBoardIcon} style={{ height: 30, width: 30 }} />
                                        </span>
                                    </div>
                        </Menu.Item>
                    </Menu>
                    }
                    onVisibleChange={(v) => { setMenuOpened(v) }}
                    >
                        <span className='d-inline-block width-100' id="writePostAffix" >
                            <Avatar size={50} className="background-ccar-button-yellow" icon={menuOpened ? <Icon type="close" className="white" /> : <Icon type="plus" className="white" />}
                        />
                        </span>
                    </Dropdown>
</Mobile>
            
        </React.Fragment >
    )

}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    userlikes: state.userlikes,
    carFreak: state.carFreak,
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(MyClubBox)));