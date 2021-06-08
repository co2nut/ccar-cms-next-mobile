
import { Card, Col, Divider, Form, message, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import client from '../../../feathers';
import CarFreakLayout from '../components/car-freak-layout';
import ClubDiscussionBox from '../components/club/club-discussion-box';
import ClubEventBox from '../components/club/club-event-box';
import ClubMemberBox from '../components/club/club-member-box';
import ClubProfolioBanner from '../components/club/club-profolio-banner';
import OtherClubsBox from '../components/club/other-clubs-box';
import { carFreakGlobalSearch, getViewType } from '../config';
import LayoutV2 from '../../general/LayoutV2';
import ClubFreaksBox from '../components/club/ClubFreaksBox';
import ClubSocialBoardBox from '../components/club/ClubSocialBoardBox';
import {
    updateActiveMenu
} from '../../../redux/actions/app-actions';
import { generateDummyObj } from '../../../dummy';

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


const PAGE_SIZE = 36;

const tabs = [
    {
        text: 'Freaks',
        value: 'carfreaks',
    },
    {
        text: 'Social Board',
        value: 'socialboard',
    },
    // {
    //     text: 'Discussions',
    //     value: 'discussions',
    // },
    {
        text: 'Members',
        value: 'members',
    },
    {
        text: 'Events',
        value: 'events',
    },
    // {
    //     text: 'Media',
    //     value: 'media',
    // },
];


const SocialClubProfilePage1 = (props) => {

    const [club, setClub] = useState({})
    const [tabKey, setTabKey] = useState(tabs[0].value);
    const [clubJoin, setClubJoin] = useState({});

    useEffect(() => {
        props.updateActiveMenu('6');
    }, [])

    useEffect(() => {
        let query = props.router.query;
        if (!query) {
            query = {};
        }

        setTabKey(_.get(_.find(tabs, function (tab) {
            return tab.value == query.tab;
        }), ['value']) || 'carfreaks');

    }, [props.router.query])

    useEffect(() => {
        getClub()
    }, [props.router.query.id])

    useEffect(() => {

        getClubJoin();

    }, [props.user.authenticated, props.router.query.id])


    function getClubJoin() {

        if (props.router.query.id && _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            client.service('clubjoin').find({
                query: {
                    $limit: 1,
                    $skip: 0,
                    clubId: props.router.query.id,
                    userId: _.get(props.user, ['info', 'user', '_id']),
                }
            }).then(res => {
                setClubJoin(_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data'])) ? _.get(res, ['data', 0]) : {});
            }).catch(err => {
                message.error(err.message)
            });
        }
    }


    function getClub() {

        if (props.router.query.id) {
            client.service('clubs').find({
                query: {
                    $limit: 1,
                    $skip: 0,
                    _id: props.router.query.id,
                    $populate: 'userId'
                }
            }).then(res => {
                setClub(_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data'])) ? _.get(res, ['data', 0]) : {});
            }).catch(err => {
                message.error(err.message)
            });
        }
    }

    const _renderView = (value) => {
        switch (value) {
            case 'carfreaks':
                return <ClubFreaksBox viewType={getViewType(clubJoin)} clubId={_.get(club, ['_id'])} /> 
                break;
            case 'socialboard':
                return <ClubSocialBoardBox viewType={getViewType(clubJoin)} clubId={_.get(club, ['_id'])} />
                break;
            // case 'discussions':
            //     return <ClubDiscussionBox viewType={getViewType(clubJoin)} clubId={_.get(club, '_id')} />
            //     break;
            case 'members':
                return <ClubMemberBox viewType={getViewType(clubJoin)} clubId={_.get(club, ['_id'])} />
                break;
            case 'events':
                return <ClubEventBox viewType={getViewType(clubJoin)} data={club} />
                break;
            case 'media':
                break;
            default:
                break;
        }
    }

    return (
        <React.Fragment>
            <LayoutV2 searchTypes={carFreakGlobalSearch} enterSearchCarFreaks scrollRange={document.body.scrollHeight * 0.5}>
                <Mobile>
                    <CarFreakLayout hideScope hideAddPost> 
                        <Row gutter={[15, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div style={{position:'relative'}}>
                                    <img src={generateDummyObj().dummyImage} className="img-cover width-100" style={{height:200}}/>
                                    <div style={{position:'absolute', transform:'translate(-50%,-50%)', top:'30%', left:'20%'}}>
                                        <img src={generateDummyObj().dummyImage} style={{ width: '100px', height: 100, borderRadius: '50px' }}/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Scrollbars style={{ width: '100%' }} autoHide autoHeight>
                                    <div className="flex-justify-start flex-items-align-center">
                                        {
                                            _.map(tabs || [], function (tab) {
                                                return (
                                                    <span className={`d-inline-block flex-items-no-shrink cursor-pointer margin-x-lg h7 ${tabKey == tab.value ? 'ccar-yellow border-bottom-ccar-yellow' : 'black'}`} onClick={(e) => { setTabKey(tab.value); }} >
                                                        {tab.text}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </Scrollbars>
                                <Divider style={{ margin: '10px 0px 10px 0px' }} type="horizontal"></Divider>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                {_renderView(tabKey)}
                            </Col>
                        </Row>
                    </CarFreakLayout>
                </Mobile>
            </LayoutV2>

        </React.Fragment>
    )

}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    userlikes: state.userlikes,
    carFreak: state.carFreak,
});

const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialClubProfilePage1)));