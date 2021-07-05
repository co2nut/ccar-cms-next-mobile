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
import { isValidNumber, notEmptyLength } from '../../../../common-function';
import Axios from 'axios';
import ClubAvatar from './club-avatar';
import JoinClubButton from './join-club-button';
import { convertNameString } from '../../config';
import moment from 'moment';
import ScrollLoadWrapper from '../../../general/ScrollLoadWrapper';


const PAGE_SIZE = 36;

const MyClubInvitationModal = (props) => {


    const [visible, setVisible] = useState(false);
    const [invites, setInvites] = useState([])
    const [inviteTotal, setInviteTotal] = useState(0);
    const [invitePage, setInvitePage] = useState(1);

    useEffect(() => {
        if (_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            setVisible(props.visible === true);
        } else {
            message.error('Please Login First');
            props.loginMode(true);
        }
    }, [props.visible])


    useEffect(() => {

        getInvites((invitePage - 1) * PAGE_SIZE);

    }, [invitePage])

    useEffect(() => {

        if (props.user.authenticated && visible) {
            if (invitePage == 1) {
                getInvites();
            } else {
                setInvitePage(1);
            }
        } else {
            setInvites([]);
        }
    }, [props.user.authenticated, visible])


    function getInvites(skip) {

        if (_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id'])) {

            skip = isValidNumber(parseInt(skip)) ? parseInt(skip) : 0;

            Axios.get(`${client.io.io.uri}getInviteList`, {
                params: {
                    match: {
                        invitee: _.get(props.user, ['info', 'user', '_id']),
                        status: ''
                    },
                    limit: PAGE_SIZE,
                    skip: skip,
                }
            }).then(res => {
                setInvites(_.isArray(_.get(res, ['data', 'data'])) && !_.isEmpty(_.get(res, ['data', 'data'])) ? invitePage == 1 ? _.get(res, ['data', 'data']) : _.concat(invites, _.get(res, ['data', 'data'])) : invites);
                setInviteTotal(_.get(res, ['data', 'total']) || 0);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    function handleStatusChange(join) {
        if (_.isPlainObject(join) && !_.isEmpty(join)) {
            let selectedInvite = _.find(_.cloneDeep(invites), function (item) {
                return _.get(item, ['invitee', '_id']) == _.get(join, ['userId']) && _.get(item, ['clubId', '_id']) == _.get(join, ['clubId']);
            })

            if (_.get(selectedInvite, ['status']) != _.get(join, ['status'])) {
                selectedInvite.status = join.status;

                let newInvites = _.map(_.cloneDeep(invites), function (item) {
                    return _.get(item, ['invitee', '_id']) == _.get(selectedInvite, ['invitee', '_id']) && _.get(item, ['clubId', '_id']) == _.get(selectedInvite, ['clubId', '_id']) ? selectedInvite : item;
                });
                setInvites(newInvites);
            }
        }
    }

    function handleReject(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data) && _.get(data, ['invitee', '_id']) && _.get(data, ['clubId', '_id'])) {

            let promises = [];
            promises.push(client.authenticate());
            promises.push(axios.post(`${client.io.io.uri}deleteInvites`, {
                match: {
                    type: 'club',
                    invitee: _.get(data, ['invitee', '_id']),
                    clubId: _.get(data, ['clubId', '_id']),
                }

            }))
            //Write in follow model
            Promise.all(promises).then(([auth, inviteRes]) => {

                message.success('Rejected');
                inviteRes = {
                    clubId: _.get(data, ['clubId', '_id']),
                    userId: _.get(data, ['invitee', '_id']),
                    status: 'rejected',

                }
                handleStatusChange(inviteRes)
            }).catch(error => {
                console.log(error);
                message.error('Decline Failed')

            })

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
                <ScrollLoadWrapper autoHeight autoHeightMax={300} onScrolledBottom={() => {
                    if (((invitePage - 1) * PAGE_SIZE) < inviteTotal) {
                        setInvitePage(invitePage + 1);
                    }
                }}>
                    <div className="padding-x-sm">
                        <div className="text-align-center subtitle1 margin-bottom-md font-weight-black">
                            My Club Invitation(s)
                        </div>
                        {
                            _.isArray(invites) && notEmptyLength(invites) ?
                                <React.Fragment>
                                    <div className="width-100">
                                        {
                                            _.map(invites, function (invite) {
                                                return (
                                                    <div className="flex-justify-space-between flex-items-align-center margin-bottom-md">
                                                        <span className='d-inline-block flex-items-no-shrink' style={{ maxWidth: '50%' }} >
                                                            <div className="flex-items-align-center">
                                                                <span className='d-inline-block padding-right-sm'>
                                                                    <ClubAvatar data={_.get(invite, ['clubId'])} size={50} redirectProfile></ClubAvatar>
                                                                </span>
                                                                <span className='d-inline-block' >
                                                                    <div className="font-weight-bold black">
                                                                        {_.get(invite, ['clubId', 'clubName']) || ''}
                                                                    </div>
                                                                    {
                                                                        _.isArray(_.get(invite, ['invitedBy'])) && !_.isEmpty(_.get(invite, ['invitedBy'])) ?
                                                                            <div style={{ fontSize: '12px' }} className="grey-darken-2">
                                                                                Invited by {convertNameString(_.get(invite, ['invitedBy']))}
                                                                            </div>
                                                                            :
                                                                            null
                                                                    }
                                                                    <div style={{ fontSize: '10px' }} className="grey-darken-2">
                                                                        Requested {moment(_.get(invite, ['createdAt'])).fromNow()}
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </span>
                                                        <span className='d-inline-block flex-items-no-shrink' style={{ maxWidth: '50%' }} >
                                                            <div className="flex-items-align-center">
                                                                <span className='d-inline-block padding-right-xs' >
                                                                    {
                                                                        _.get(invite, ['status']) != 'rejected' ?
                                                                            <JoinClubButton notify club={_.get(invite, ['clubId'])} userId={_.get(props.user, ['info', 'user', '_id'])}
                                                                                joinButton={(joinAction) => {
                                                                                    return <Button className="padding-x-md background-ccar-button-yellow black caption " size="small">{joinAction == 'approved' ? 'Accept' : 'Join'}</Button>
                                                                                }}
                                                                                onSuccess={(joinRes) => {
                                                                                    if (_.isPlainObject(joinRes) && !_.isEmpty(joinRes)) {
                                                                                        handleStatusChange(joinRes.data);
                                                                                    }
                                                                                }}
                                                                            ></JoinClubButton>
                                                                            :
                                                                            null
                                                                    }
                                                                </span>
                                                                {
                                                                    _.get(invite, ['status']) == 'rejected' ?
                                                                        <span className="padding-x-md red cursor-not-allowed">Rejected</span>
                                                                        :
                                                                        !_.get(invite, ['status']) ?
                                                                            <Button className="padding-x-md border-red-lighten-1 background-white black caption" size="small" onClick={(e) => { handleReject(invite) }}>Decline</Button>
                                                                            :
                                                                            null
                                                                }
                                                            </div>
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </React.Fragment>
                                :
                                null
                        }
                    </div>
                </ScrollLoadWrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(MyClubInvitationModal)));