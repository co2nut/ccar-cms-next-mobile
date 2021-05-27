import { Collapse, Dropdown, Form, Icon, Menu, message, Popconfirm } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import client from '../../../feathers';
import { chatRestrictTime, getTagString } from '../config';
import LikePostButton from './like-post-button';
import ReplyBox1 from './reply-box-1';
import SocialInput from './social-input';
import { loading, loginMode } from '../../../redux/actions/app-actions';
import { getObjectId, getPlural, getUserName, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import UserAvatar from '../../general/UserAvatar';
import ParseTag from '../../general/ParseTag';
import { carFreakLikeGreyIcon, carFreakLikeIcon, carFreakReplyIcon } from '../../../icon';
import ScrollLoadWrapper from '../../general/ScrollLoadWrapper';



const defaultHeight = 'auto';
const headerHeight = 100;
const imageHeight = 200;
const titleHeight = 40;
const footerHeight = 100;
const actionHeight = 40;

let uid = v4();

const PAGE_SIZE = 6;
const commentInputRef = React.createRef();

const CommentBox1 = (props) => {

    const [comment, setComment] = useState({});
    const [height, setHeight] = useState(defaultHeight);
    const [editMode, setEditMode] = useState(false);
    const [totalLike, setTotalLike] = useState(0);
    const [expandReplyKey, setExpandReplyKey] = useState();
    const [text, setText] = useState('')
    const [textEditMode, setTextEditMode] = useState(false);
    const [messages, setMessages] = useState([])
    const [canSendMessage, setCanSendMessage] = useState(true);
    const [messageTotal, setMessageTotal] = useState(0);
    const [loading, setIsLoading] = useState(false);
    const [focusIndicator, setFocusIndicator] = useState(null);
    const [resetIndicator, setResetIndicator] = useState(null);

    const [typeMessage, setTypeMessage] = useState('')
    const [replyTypeMessage, setReplyTypeMessage] = useState('')



    useEffect(() => {

        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setComment(props.data);
        } else {
            setComment({});
        }

    }, [props.data])



    useEffect(() => {
        if (_.isPlainObject(comment) && !_.isEmpty(comment)) {
            setTotalLike(_.get(comment, ['totalLike']) || 0)
            getData();
        } else {
            setTotalLike(0);
            setMessages([]);
        }

    }, [comment])

    // useEffect(() => {
    //     if (!props.style || !isValidNumber(props.style.height) || !(parseFloat(props.style.height) >= defaultHeight)) {
    //         setHeight(defaultHeight);
    //     } else {
    //         setHeight(props.style.height);
    //     }

    // }, [props.style])

    function getData() {

        if (_.get(comment, ['_id'])) {
            setIsLoading(true);

            client.service('chatmessagereplies').find(
                {
                    query: {
                        messageId: comment._id,
                        $populate: 'userId',
                        $limit: PAGE_SIZE,
                        $sort: { _id: -1 },
                        $skip: messages.length
                    }
                }
            ).then((res) => {

                setIsLoading(false);
                if (res.data.length > 0) {
                    let newMessages = messages.concat(res.data)
                    setMessages(newMessages)
                }
                else {
                    setMessages([])
                }
                setMessageTotal(res.total)

            }).catch(err => {
                console.log(error);
                setIsLoading(false);
            })
        }
    }

    function handleSubmit(text) {

        setEditMode(false)
        if (props.onChange) {
            props.onChange({ ...comment, message: text })
        }

        if (_.isPlainObject(comment) && !_.isEmpty(comment) && _.get(comment, ['_id']) && editMode) {
            client.authenticate().then(res => {
                client.service('chatmessages')
                    .patch(comment._id, {
                        message: text,
                    })
                    .then((res1) => {
                        if (props.onUpdate) {
                            res1.userId = res.user;
                            props.onUpdate(res1);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        message.error("Unable to edit comment. T.T")

                    })
            }).catch(err => {
                message.error("Unable to edit comment. T.T")
            });
        }
    }

    function handleRemove(data) {

        if (_.isPlainObject(data) && !_.isEmpty(data) && _.get(data, ['_id'])) {
            client.service('chatmessages')
                .remove(data._id).then((res) => {
                    message.success('Comment Deleted')
                    if (props.onRemove) {
                        props.onRemove(res);
                    }
                }).catch((err) => {
                    console.log('Unable to delete comment.');
                })
        }
    }

    function handleReplySubmit(text) {

        if (!_.get(props.user, ['authenticated']) || !_.get(props.user, ['info', 'user', '_id'])) {
            message.error('Please Login First!');
            props.loginMode(true);
            return;
        }

        if (!_.get(comment, ['_id'])) {
            message.error('Comment Not Found!');
            return;
        }

        if (canSendMessage) {
            client.authenticate().then(res => {
                client.service('chatmessagereplies').create({
                    messageId: comment._id,
                    userId: res.user._id,
                    message: text,
                }).then(res1 => {
                    setText('');
                    setCanSendMessage(false);
                    setResetIndicator(v4())
                    res1.userId = res.user;
                    setMessages(messages.concat([res1]));
                    setMessageTotal(messageTotal + 1);
                    setTimeout(() => {
                        setCanSendMessage(true);
                    }, chatRestrictTime);

                }).catch(err => {
                    console.log(err);
                });
            }).catch(err => {
                console.log(err);
            });
        } else {
            message.warning('You are typing too fast!');
        }

    };

    function handleReplyChange(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let newMessages = _.map(messages, function (v) {
                return _.get(v, ['_id']) == _.get(data, ['_id']) ? data : v;
            });

            setMessages(newMessages);
        }
    }

    function handleReplyRemove(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let newMessages = _.filter(messages, function (v) {
                return _.get(v, ['_id']) != _.get(data, ['_id']);
            });

            setMessages(newMessages);
        }
    }

    function addAlias(value, id) {

        if (value && id) {
            setTextEditMode(true);
            setText(getTagString(value, id) + ' ');

            setTimeout(() => {
                setTextEditMode(false);
                setText('');
                setFocusIndicator(v4());
            }, 500);

        }
    }

    return (
        notEmptyLength(objectRemoveEmptyValue(comment)) ?
            <React.Fragment>
                <div className={`flex-justify-space-between flex-items-align-start ${props.className ? props.className : ''}`} style={{ ...props.style }}>
                    <span className='d-inline-block' style={{ width: 50 }} >
                        <UserAvatar redirectProfile data={_.get(comment, ['userId'])} size={30} />
                    </span>
                    <span className='d-inline-block headline width-80' >
                        <span className='headline font-weight-black padding-right-sm black' >
                            {getUserName(_.get(comment, ['userId']), 'freakId')}
                        </span>
                        {
                            editMode ?
                                <div className="width-100 background-white">
                                    <div className="flex-justify-space-around flex-items-align-center">
                                        <span className='d-inline-block width-80' >
                                            <SocialInput
                                                placeholder="What's on your mind?"
                                                text={`${_.get(comment, ['message']) || ''}`}
                                                editMode
                                                clickOutsideSubmit
                                                maxLength={1000}
                                                size="small"
                                                onChange={(v, finalText) => {
                                                    setTypeMessage(finalText)
                                                }}
                                                clubId={props.clubId}
                                                hideEmojiPicker
                                                autoFocus={true}
                                                excludeEnter
                                                onSubmit={(text) => {
                                                    handleSubmit(text);
                                                    setEditMode(false);
                                                }}
                                            />
                                        </span>
                                        <span className='d-inline-block cursor-pointer blue caption font-weight-bold' onClick={(e) => { handleSubmit(typeMessage) }} >
                                            Save
                                        </span>
                                    </div>
                                </div>
                                :
                                <ParseTag data={_.get(comment, ['message']) || ''} className="width-100 text-overflow-break" />
                        }

                        <div className="width-100 flex-items-align-center padding-y-xs">
                            <span className="margin-right-md small-text font-weight-thin">{moment(comment.createdAt).fromNow()}</span>
                            <LikePostButton className="margin-right-xs" likeOn="message"
                                autoHandle
                                messageId={_.get(comment, ['_id'])} onClick={(actived) => {
                                    setTotalLike(actived ? totalLike + 1 : totalLike - 1)
                                }}
                                activeButton={
                                    <div className="flex-items-align-center small-text font-weight-thin grey">
                                        <img src={carFreakLikeIcon} style={{ width: 20, height: 15 }} className="margin-right-sm cursor-pointer" />
                                        {getPlural('Like', 'Likes', totalLike || 0, true)}
                                    </div>
                                }
                                className='d-inline-block margin-right-md'>
                                <div className="flex-items-align-center small-text font-weight-thin grey">
                                    <img src={carFreakLikeGreyIcon} style={{ width: 20, height: 15 }} className="margin-right-sm cursor-pointer" />
                                    {getPlural('Like', 'Likes', totalLike || 0, true)}
                                </div>
                            </LikePostButton>
                            <span className="small-text margin-right-xs grey font-weight-light cursor-pointer" onClick={() => {
                                setExpandReplyKey('1');
                                addAlias(getUserName(_.get(comment, ['userId']), 'freakId') || '', getObjectId(_.get(comment, ['userId'])) || '')
                            }}>
                                <div className="flex-items-align-center small-text font-weight-thin grey">
                                    <img src={carFreakReplyIcon} style={{ width: 15, height: 15 }} className="margin-right-sm cursor-pointer" />
                                    {getPlural('Reply', 'Replies', messageTotal || 0, true)}
                                </div>
                            </span>
                        </div>
                        <div className="width-100">
                            <Collapse className="collapse-no-header border-none collapse-body-no-padding collapse-body-overflow-visible" activeKey={expandReplyKey} >
                                <Collapse.Panel key="1" showArrow={false}>
                                    <div className="width-100">
                                        <div className="padding-left-xl margin-y-sm">
                                            <ScrollLoadWrapper autoHeight autoHeightMax={200}>
                                            {
                                                _.map(messages, function (v) {
                                                    return (
                                                        <div>
                                                            <ReplyBox1 data={v}
                                                                clubId={props.clubId}
                                                                onChange={(data) => {
                                                                    handleReplyChange(data);
                                                                }}
                                                                onRemove={(data) => {
                                                                    handleReplyRemove(data);
                                                                }}
                                                                handleReply={(name, id) => {
                                                                    if (name && id) {
                                                                        setExpandReplyKey('1');
                                                                        addAlias(name || '', getObjectId(id) || '')
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                            </ScrollLoadWrapper>
                                        </div>
                                    </div>
                                    <div>

                                        <div className="flex-justify-space-around flex-items-align-center">
                                            <span className='d-inline-block width-80' >
                                                <SocialInput
                                                    placeholder="What's on your mind?"
                                                    editMode={textEditMode}
                                                    text={text || ''}
                                                    inputRef={commentInputRef}
                                                    excludeEnter
                                                    maxLength={1000}
                                                    size="small"
                                                    onChange={(text, finalText) => {
                                                        setReplyTypeMessage(finalText)
                                                    }}
                                                    clubId={props.clubId}
                                                    hideEmojiPicker
                                                    autoFocus={true}
                                                    excludeEnter
                                                    focusIndicator={focusIndicator}
                                                    resetIndicator={resetIndicator}
                                                />
                                            </span>
                                            <span className='d-inline-block cursor-pointer ccar-button-yellow caption font-weight-bold' onClick={(e) => { handleReplySubmit(replyTypeMessage) }} >
                                                Send
                                        </span>
                                        </div>
                                    </div>
                                </Collapse.Panel>
                            </Collapse>
                        </div>
                    </span>
                    <span className='d-inline-block' style={{ width: 30 }} >
                        {
                            _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(comment, ['userId', '_id']) ?
                                <span className='d-inline-block' id={`comment-menu-${uid}`} >
                                    <Dropdown getPopupContainer={() => document.getElementById(`comment-menu-${uid}`)}
                                        overlay={
                                            <Menu>
                                                <Menu.Item onClick={(e) => {
                                                    setEditMode(true)
                                                }}><span >Edit</span></Menu.Item>
                                                <Menu.Item>
                                                    <Popconfirm
                                                        title="Are you sure to delete this comment?"
                                                        onConfirm={(e) => {
                                                            handleRemove(comment);
                                                        }}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <span>Delete</span>
                                                    </Popconfirm>
                                                </Menu.Item>
                                            </Menu>
                                        }>
                                        <Icon type="more" className="commentMore" style={{ fontSize: 20 }} />
                                    </Dropdown>
                                </span>
                                :
                                null
                        }
                    </span>
                </div>
            </React.Fragment >
            :
            null
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(CommentBox1)));