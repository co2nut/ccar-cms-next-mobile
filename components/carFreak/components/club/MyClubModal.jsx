import { Button, Col, Form, Icon, message, Row, Avatar, Modal } from 'antd';
import _, { set } from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import WriteClubModal from './write-club-modal';
import { loading, loginMode } from '../../../../redux/actions/app-actions';
import { generateDummyArrayObj } from '../../../../dummy';
import Scrollbars from 'react-custom-scrollbars';
import Link from 'next/link';
import { routePaths } from '../../../../route';
import client from '../../../../feathers';
import { imageNotFound } from '../../../profile/config';
import { isValidNumber } from '../../../../common-function';

const MyClubModal = (props) => {


    const [visible, setVisible] = useState(false);

    const [myClubs, setMyClubs] = useState([])
    const [myClubTotal, setMyClubTotal] = useState(0);
    const [myClubPage, setMyClubPage] = useState(1);

    const [myJoinedClubs, setMyJoinedClubs] = useState([])
    const [myJoinedClubTotal, setMyJoinedClubTotal] = useState(0);
    const [myJoinedClubPage, setMyJoinedClubPage] = useState(1);

    useEffect(() => {
        if(_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) ){
            setVisible(props.visible === true);
        }else{
            message.error('Please Login First');
            props.loginMode(true);
        }
    }, [props.visible])


    useEffect(() => { 

        if(props.user.authenticated && visible){
            getMyClubs();
            getMyJoinedClubs();    
        }else{
            setMyClubs([]);
            setMyClubTotal(0);
            setMyJoinedClubs([]);
            setMyJoinedClubTotal(0);
        }
    } , [props.user.authenticated, visible])


    function getMyClubs(skip) {

        if (_.get(props.user, ['info', 'user', '_id'])) {

            skip = isValidNumber(parseInt(skip)) ? parseInt(skip) : 0;
            client.service('clubjoin').find({
                query: {
                    userId: _.get(props.user, ['info', 'user', '_id']),
                    status: 'approved',
                    role: 'admin',
                    $populate: ['clubId'],
                    // $limit: PAGE_SIZE,
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

        if (_.get(props.user, ['info', 'user', '_id'])) {

            skip = isValidNumber(parseInt(skip)) ? parseInt(skip) : 0;
            client.service('clubjoin').find({
                query: {
                    userId: _.get(props.user, ['info', 'user', '_id']),
                    status: 'approved',
                    role: 'member',
                    $populate: ['clubId'],
                    // $limit: PAGE_SIZE,
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
            <Modal
                visible={visible}
                onCancel={() => {
                    if (props.onCancel) {
                        props.onCancel();
                    }
                }}
                footer={null}
                centered
            >
                <Scrollbars autoHeight autoHeightMax={300}>
                    <div className="padding-x-sm">
                        <div className="text-align-center subtitle1 margin-bottom-md font-weight-black">
                            My Clubs
                        </div>
                        <div className="text-align-center caption margin-bottom-sm font-weight-black">
                            My Own Club(s)
                        </div>
                        <Row gutter={[15, 15]}>
                            {
                                _.map(myClubs, (club) => {
                                    return (
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div className="flex-justify-center flex-items-align-center">
                                                <Link shallow={false} href={routePaths.socialClubDetails.to || '/'} as={typeof (routePaths.socialClubDetails.as) == 'function' ? routePaths.socialClubDetails.as(club) : '/'}>
                                                    <a>
                                                        <img src={club.clubAvatar || imageNotFound} style={{ width: '80px', height: '80px', borderRadius: '50px' }} className="img-cover" />
                                                    </a>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <div className="text-align-center caption margin-y-md font-weight-black">
                            My Joined Club(s)
                        </div>
                        <Row gutter={[15, 15]}>
                            {
                                _.map(myJoinedClubs, (club) => {
                                    return (
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div className="flex-justify-center flex-items-align-center">
                                                <Link shallow={false} href={routePaths.socialClubDetails.to || '/'} as={typeof (routePaths.socialClubDetails.as) == 'function' ? routePaths.socialClubDetails.as(club) : '/'}>
                                                    <a>
                                                        <img src={club.clubAvatar || imageNotFound} style={{ width: '80px', height: '80px', borderRadius: '50px' }} className="img-cover" />
                                                    </a>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Scrollbars>
            </Modal>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
    loginMode
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(MyClubModal)));