import { Button, Col, Empty, Form, Icon, message, Modal, Row } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../../../feathers';
import { convertNameString } from '../../config';
import ClubApprovalButton from './club-approval-button';
import { loading } from '../../../../redux/actions/app-actions';
import { setUser } from '../../../../redux/actions/user-actions';
import ScrollLoadWrapper from '../../../general/ScrollLoadWrapper';
import { arrayLengthCount, getUserName, isValidNumber } from '../../../../common-function';
import UserAvatar from '../../../general/UserAvatar';


const PAGE_SIZE = 12;
const TYPING_TIMEOUT = 500;

const ClubApprovalModal = (props) => {

    const [visible, setVisible] = useState(false);
    const [clubJoins, setClubJoins] = useState([]);
    const [clubJoinTotal, setClubJoinTotal] = useState(0);
    const [clubJoinPage, setClubJoinPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [typingTimeout, setTypingTimeout] = useState();
    const [filterGroup, setFilterGroup] = useState({
        keyword: '',
    });

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible])

    useEffect(() => {

        getClubJoinList(props.clubId, (clubJoinPage - 1) * PAGE_SIZE);

    }, [clubJoinPage])

    useEffect(() => {

        if (clubJoinPage == 1) {
            getClubJoinList(props.clubId, (clubJoinPage - 1) * PAGE_SIZE);
        } else {
            setClubJoinPage(1);
        }

    }, [filterGroup])


    useEffect(() => {

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        setTypingTimeout(
            setTimeout(() => {
                setFilterGroup(filterGroup => { return { ...filterGroup, keyword: searchWord } })
            }, TYPING_TIMEOUT)
        )

    }, [searchWord])


    useEffect(() => {

        if (visible && props.clubId) {
            getClubJoinList(props.clubId, 0);
        }

    }, [visible, props.clubId])


    function getClubJoinList(clubId, skip) {

        if (clubId) {

            if (!isValidNumber(parseInt(skip))) {
                skip = 0;
            } else {
                skip = parseInt(skip);
            }

            setIsLoading(true);

            axios.get(`${client.io.io.uri}getClubJoinList`, {
                params: {
                    match: {
                        clubId: clubId,
                        status: 'pending',
                    },
                    sort: {
                        createdAt: -1,
                    },
                }
            }).then(res => {
      
                setClubJoins(_.isArray(_.get(res, ['data', 'data'])) && !_.isEmpty(_.get(res, ['data', 'data'])) ? clubJoinPage == 1 ? _.get(res, ['data', 'data']) : _.concat(clubJoins, [_.get(res, ['data', 'data'])]) : clubJoins);
                setClubJoinTotal(_.get(res, ['total']));
                setIsLoading(false);
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                message.error(err.message)
            });

        }
    }

    function closeModal() {
        setClubJoins([]);
        if (props.onCancel) {
            props.onCancel()
        }
    }

    function handleJoinStatusChange(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let selectedJoin = _.find(_.cloneDeep(clubJoins), function (item) {
                return item._id == data._id;
            })

            if (_.get(selectedJoin, ['status']) != _.get(data, ['status'])) {
                selectedJoin.status = data.status;
                let newJoins = _.map(_.cloneDeep(clubJoins), function (item) {
                    return item._id == selectedJoin._id ? selectedJoin : item;
                });
                setClubJoins(newJoins);
            }
        }
    }

    function handleReject(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data) && _.get(data, ['_id'])) {

            let promises = [];
            promises.push(client.authenticate());
            promises.push(client.service('clubjoin').remove(data._id))
            //Write in follow model
            Promise.all(promises).then(([auth, joinRes]) => {
                message.success('Rejected');
                joinRes.status = 'rejected';
                handleJoinStatusChange(joinRes)
            }).catch(error => {
                console.log(error);
                message.error('Decline Failed')

            })

        }
    }

    return (
        <Modal
            visible={visible}
            footer={null}
            centered
            maskClosable={false}
            onCancel={() => { closeModal() }}
        >
            <Row className="padding-top-lg margin-top-md" gutter={[10, 10]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="flex-justify-space-between flex-items-align-center width-100">
                        <span className='d-inline-block font-weight-black caption' >
                            Request to join club
                        </span>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="width-100 padding-top-sm">
                        <ScrollLoadWrapper autoHide style={{ height: '50vh' }} onScrolledBottom={() => {
                            if (arrayLengthCount(clubJoins) < clubJoinTotal) {
                                setClubJoinPage(clubJoinPage + 1);
                            }
                        }}>
                            {
                                _.isArray(clubJoins) && !_.isEmpty(clubJoins) ?
                                    <Row gutter={[10, 15]} >
                                        {
                                            _.map(clubJoins, function (clubJoin) {
                                                return (
                                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                        <div className="flex-justify-space-between flex-items-align-center w-100 ">
                                                            <span className='flex-justify-start flex-items-align-center' style={{ width: '50%' }} >
                                                                <UserAvatar
                                                                    data={_.get(clubJoin, ['userId'])}
                                                                    size={40}
                                                                    className="margin-right-md"
                                                                    redirectProfile
                                                                    onRedirect={() => { closeModal() }}
                                                                    avatarClassName='flex-items-no-shrink'
                                                                />
                                                                <span className='d-inline-block' >
                                                                    <div className="font-weight-bold caption black">
                                                                        {getUserName(_.get(clubJoin, ['userId']), 'fullName') || ''}
                                                                    </div>
                                                                    {
                                                                        _.isArray(_.get(clubJoin, ['invitedBy'])) && !_.isEmpty(_.get(clubJoin, ['invitedBy'])) ?
                                                                            <div className="small-text grey-darken-2">
                                                                                Invited by {convertNameString(_.get(clubJoin, ['invitedBy']))}
                                                                            </div>
                                                                            :
                                                                            null
                                                                    }
                                                                    <div className="small-text grey-darken-2">
                                                                        Requested {moment(_.get(clubJoin, ['createdAt'])).fromNow()}
                                                                         </div>
                                                                </span>
                                                            </span>
                                                            <span className='d-inline-block flex-items-no-shrink' style={{ width: '50%' }} >
                                                                <div className="flex-items-align-center">
                                                                    <span className='d-inline-block margin-right-md' >
                                                                        <ClubApprovalButton notify data={clubJoin} onSuccess={(data) => {
                                                                            if (_.isPlainObject(data) && !_.isEmpty(data)) {
                                                                                handleJoinStatusChange(data);
                                                                            }
                                                                        }} />
                                                                    </span>
                                                                    {
                                                                        _.get(clubJoin, ['status']) == 'approved' ?
                                                                            null
                                                                            :
                                                                            _.get(clubJoin, ['status']) == 'rejected' ?
                                                                                <span className="padding-x-sm red cursor-not-allowed small-text">Rejected</span>
                                                                                :
                                                                                <Button className="padding-x-sm border-red-lighten-1 background-white black small-text" size="small" onClick={(e) => { handleReject(clubJoin) }}>Decline</Button>
                                                                    }
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                    :
                                    <div className="flex-justify-center flex-align-center padding-md">
                                        <Empty></Empty>
                                    </div>
                            }
                        </ScrollLoadWrapper>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="width-100 flex-justify-center" style={{ height: 20 }}>
                        {
                            isLoading ?
                                <Icon type="loading" style={{ fontSize: 20 }} />
                                :
                                null
                        }
                    </div>
                </Col>

            </Row>
        </Modal>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    sellerProfile: state.sellerProfile,
});

const mapDispatchToProps = {
    loading: loading,
    setUser: setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ClubApprovalModal)));