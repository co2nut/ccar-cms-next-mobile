
import { Col, Dropdown, Form, Icon, Menu, Popconfirm, Row, Collapse } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ShowMoreText from 'react-show-more-text';
import EventAttendanceBox from './event-attendance-box';
import EventJoinActionButtons from './event-join-action-buttons';
import UserAvatar from '../../../general/UserAvatar';
import { checkObjectId, getUserName } from '../../../../common-function';
import ShareButtonDialog from '../../../general/ShareButtonDialog';
import client from '../../../../feathers';


const defaultHeight = 200;
const { Panel } = Collapse;

const EventDetailsBoxUi = (props) => {

    const [event, setEvent] = useState({})
    const [eventPost, setEventPost] = useState({})
    const [height, setHeight] = useState(defaultHeight)
    const [expandReplyKey, setExpandReplyKey] = useState();

    useEffect(() => {
        setEvent(_.isPlainObject(props.data) && !_.isEmpty(props.data) ? props.data : {});
    }, [props.data])

    useEffect(() => {
        getEventPost()
    }, [event])

    function redirectEvent(data) {
        // if(_.isPlainObject(data) && !_.isEmpty(data) && _.get(data , ['_id'])){
        //     props.router.push(`/event/${_.get(data, ['_id'])}`)
        // }
    }

    function getEventPost() {
        if (_.isPlainObject(event) && !_.isEmpty(event) && _.get(event, ['_id'])) {
            client.service('chats')
                .find({
                    query: {
                        eventId: _.get(event, ['_id']),
                        chatType: 'event',
                        $limit: 1,
                    }
                }).then(res => {
                    setEventPost(_.get(res, ['data', 0]) || {});
                })
        }
    }

    return (
        <div className={`width-100 flex-justify-start flex-items-align-center relative-wrapper background-white ${props.className || ''}`} onClick={(e) => {
            setExpandReplyKey(expandReplyKey ? null : '1')
        }}  >
            <Row gutter={[10, 10]} className="width-100" align="middle">
                <Col span={24}>
                    <span className='d-inline-block margin-right-sm width-20'  >
                        <UserAvatar data={_.get(event, ['createdBy'])} />
                    </span>
                    <span className='d-inline-block grey-darken-2 text-truncate-twoline width-70'>
                        Created By {`${getUserName(_.get(event, ['createdBy']))}`}
                    </span>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="width-100 height-100 relative-wrapper" style={{ height: 170 }} onClick={() => {
                        redirectEvent(event);
                    }}>
                        <img src={_.get(event, ['coverPhoto'])} className=" fill-parent img-cover" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="flex-justify-start flex-items-align-center padding-y-xs" onClick={() => {
                        redirectEvent(event);
                    }}>
                        <span className="red font-weight-thin margin-right-md subtitle1">
                            {`${moment(_.get(event, ['startAt'])).format('dddd, YYYY-MM-DD, hh:mm')}`}
                            {/* {`${moment(_.get(event, ['startAt'])).format('dddd, YYYY-MM-DD, hh:mm')}${moment(_.get(event, ['startAt'])).format('YYYY-MM-DD hh:mm') != moment(_.get(event, ['endAt'])).format('YYYY-MM-DD hh:mm') ? `- ${moment(_.get(event, ['endAt'])).format('dddd, YYYY-MM-DD, hh:mm')}` : ''}`} */}
                        </span>
                        {
                            _.get(event, ['scope']) == 'private' ?
                                <span className='d-inline-block background-ccar-button-yellow round-border black headline padding-x-md' style={{ height: 25 }} >
                                    Private
                                </span>
                                :
                                null
                        }
                    </div>
                    <div className="subtitle1 grey-darken-2 font-weight-bold text-truncate-twoline padding-y-xs" onClick={() => {
                        redirectEvent(event);
                    }}>
                        {_.get(event, ['name'])}
                    </div>
                    <div className="subtitle1 grey-darken-2 text-truncate-twoline padding-y-xs" onClick={() => {
                        redirectEvent(event);
                    }}>
                        {_.get(event, ['location'])}
                    </div>
                    <div className=" flex-items-align-center flex-justify-start padding-y-xs" onClick={() => {
                        redirectEvent(event);
                    }}>
                    </div>
                    <div className="flex-items-align-center flex-justify-start padding-y-xs">
                        {
                            _.get(event, ['status']) == 'ongoing' ?
                                <EventJoinActionButtons notify eventId={_.get(event, ['_id'])} userId={_.get(props.user, ['info', 'user', '_id'])} />
                                :
                                _.get(event, ['status']) == 'expired' ?
                                    <span className='d-inline-block border-red-lighten-4 red subtitle1 padding-x-lg round-border' >
                                        Past
                                    </span>
                                    :
                                    null
                        }
                    </div>

                    <div className="width-100 margin-top-md">
                        <Collapse className="collapse-no-header border-none collapse-body-no-padding collapse-body-overflow-visible" activeKey={expandReplyKey} >
                            <Collapse.Panel key="1" showArrow={false}>
                                <div className="width-100">
                                    <div className="padding-left-sm">
                                        <div className="subtitle1">
                                            Description
                                        </div>
                                        {
                                            !props.hideGuestList ?
                                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <div className="padding-right-lg">
                                                <EventAttendanceBox data={event}/>
                                            </div>
                                            </Col>
                                        :
                                        null
                                        }
                                        </div>
                                    </div>
                                </Collapse.Panel>
                            </Collapse>
                        </div>
                </Col>
            </Row>

            {
                !props.hideAction ?
                    <span className='d-inline-block' style={{ position: 'absolute', top: 10, right: 10 }} >
                        <Dropdown overlay={
                            <Menu>
                                {
                                    _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && checkObjectId(_.get(event, ['createdBy']), _.get(props.user, ['info', 'user', '_id'])) ?
                                        [
                                            <Menu.Item onClick={(e) => {
                                                if (props.manualControl) {
                                                    if (props.onEditClick) {
                                                        props.onEditClick(event)
                                                    }
                                                }
                                            }}><span >Edit</span></Menu.Item>,
                                            <Menu.Item>
                                                <Popconfirm
                                                    title="Are you sure to delete this event?"
                                                    onConfirm={(e) => {
                                                        if (props.manualControl) {
                                                            if (props.onRemoveClick) {
                                                                props.onRemoveClick(event);
                                                            }
                                                        }
                                                    }}
                                                    okText="Yes"
                                                    cancelText="No"
                                                >
                                                    <span>Delete</span>
                                                </Popconfirm>
                                            </Menu.Item>
                                        ]
                                        :
                                        null
                                }
                                {
                                    _.get(event, 'scope') == 'public' ?
                                        <Menu.Item>
                                            <ShareButtonDialog link={`/event-post/${_.get(eventPost, ['_id'])}`}>
                                                <span>Share Link</span>
                                            </ShareButtonDialog>
                                        </Menu.Item>
                                        :
                                        null
                                }
                            </Menu>
                        }>
                            <Icon type="more" className="black" style={{ fontSize: 20}} />
                        </Dropdown>

                    </span>
                    :
                    null
            }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(EventDetailsBoxUi)));