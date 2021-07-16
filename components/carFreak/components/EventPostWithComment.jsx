import { Col, Collapse, Divider, Dropdown, Form, Icon, Menu, message, Popconfirm, Row, Empty } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { formatNumber, getObjectId, getPlural, getUserName, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import client from '../../../feathers';
import { calendarIcon, carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import { loading, loginMode } from '../../../redux/actions/app-actions';
import ParseTag from '../../general/ParseTag';
import UserAvatar from '../../general/UserAvatar';
import { chatRestrictTime, patchReduxPosts } from '../config';
import CommentBox1 from './comment-box-1';
import LikePostButton from './like-post-button';
import SocialInput from './social-input';
import LightBoxCarousel from '../../general/LightBoxCarousel';
import { generateDummyObj } from '../../../dummy';
import ClubAvatar from './club/club-avatar';
import ShowMoreText from 'react-show-more-text';
import ScrollLoadWrapper from '../../general/ScrollLoadWrapper';
import { commentIcon } from '../../live/config';
import ShareButtonDialog from '../../general/ShareButtonDialog';
import { fetchCarFreakPosts } from '../../../redux/actions/carfreak-action';
import PostMenu from './post-menu';
import EventDetailsBox from './club/event-details-box';
import Scrollbars from 'react-custom-scrollbars';


const defaultHeight = 'auto';
const headerHeight = 100;
const imageHeight = 200;
const titleHeight = 40;
const footerHeight = 100;
const actionHeight = 40;

let uid = v4();

const PAGE_SIZE = 6;
const commentInputRef = React.createRef();

const PostWithComment = (props) => {

    const [post, setPost] = useState({});
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const [canSendMessage, setCanSendMessage] = useState(true);
    const [messageTotal, setMessageTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {

        if (_.get(post, `_id`) == _.get(props.data, `_id`)) {
            setPost(props.data);
        } else {
            if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
                setMessageTotal(0);
                getData(props.data);
                setPost(props.data);
            } else {
                setPost({});
                setMessages([]);
            }
        }

    }, [props.data])



    function patchUserCarFreakPosts(post = {}, mode = 'add') {

        let data = patchReduxPosts(_.get(props.carfreak, `carFreakPosts`), [post], mode);
        if (!_.isEqual(data, _.get(props.carfreak, `carFreakPosts`))) {
            props.fetchCarFreakPosts(data);
        }
        if (mode == 'update' && props.onUpdate) {
            props.onUpdate(post)
        }
    }


    function getData(post) {

        if (_.get(post, ['_id'])) {
            client.authenticate()
                .then((res) => {
                    setIsLoading(true);

                    client.service('chatmessages').find(
                        {
                            query: {
                                chatId: post._id,
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
                        setIsLoading(false);
                    });

                }).catch(err => {
                    setIsLoading(false);
                });
        }
    }

    function handleSubmit(text) {

        if (!_.get(props.user, ['authenticated']) && !_.get(props.user, ['info', 'user', '_id'])) {
            message.error('Please Login First!');
            props.loginMode(true);
            return;
        }
        if (_.get(post, ['_id']) && text) {
            if (canSendMessage) {
                client.authenticate()
                    .then((res) => {
                        client.service('chatmessages')
                            .create({
                                chatId: post._id,
                                userId: res.user._id,
                                message: text,
                            })
                            .then((res1) => {
                                setText('');
                                setCanSendMessage(false);
                                res1.userId = res.user;
                                setMessages(messages.concat([res1]));
                                setMessageTotal(messageTotal + 1);
                                setTimeout(() => {
                                    setCanSendMessage(true);
                                }, chatRestrictTime);
                                patchUserCarFreakPosts({ ...post, totalReply: parseInt(post.totalReply) + 1 }, 'update')

                            }).catch((err) => {
                                console.log('Unable to send messages.')
                            })

                    })
                    .catch((err) => {
                        return message.error("Please Login.")
                    })
            } else {
                message.warning('You are typing too fast...')
            }
        }

    };

    function handleCommentChange(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let newMessages = _.map(messages, function (v) {
                return _.get(v, ['_id']) == _.get(data, ['_id']) ? data : v;
            });

            setMessages(newMessages);
        }
    }


    function handleRemoveComment(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let newMessages = _.filter(messages, function (v) {
                return _.get(v, ['_id']) != _.get(data, ['_id']);
            });

            setMessages(newMessages);
        }
    }

    return (
        notEmptyLength(objectRemoveEmptyValue(post)) ?
            <div className={`${props.className || ''} height-100 padding-md`} style={{ ...props.style }} key={props.key || `postWithComment-${getObjectId(post)}`}>

                <div className="flex-justify-space-between flex-items-align-start margin-bottom-md">
                    <span className='flex-justify-start flex-items-align-center ' >
                        <span className='d-inline-block margin-right-md relative-wrapper flex-items-no-shrink' >
                            {
                                _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                    <ClubAvatar redirectProfile
                                        data={_.get(post, ['clubId'])}
                                        size={50}
                                        avatarClassName="cursor-pointer" />
                                    :
                                    <UserAvatar redirectProfile
                                        data={_.get(post, ['userId'])}
                                        size={50}
                                        avatarClassName="cursor-pointer"
                                    />
                            }
                            {
                                _.get(post, ['chatType']) == 'event' ?
                                    <span className={`d-inline-block`} style={{ position: 'absolute', top: 30, right: -5 }} >
                                        <img src={calendarIcon} style={{ height: 25, width: 25 }} />
                                    </span>
                                    :
                                    null
                            }
                        </span>
                        <span className='d-inline-block ' >
                            <div>
                                <span className={`font-weight-bold subtitle1 text-overflow-break d-inline-block ${props.textColor || 'black'} `} >
                                    {
                                        _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                            _.get(post, ['clubId', 'clubName']) || ''
                                            :
                                            getUserName(_.get(post, ['userId']), 'freakId')
                                    }
                                </span>
                                {
                                    _.get(post, ['location']) ?
                                        <React.Fragment>
                                            <span className={`margin-x-sm ${props.textColor || 'black'} `} >
                                                in
                                            </span>
                                            <span className={`d-inline-block font-weight-bold subtitle1 ${props.textColor || 'black'} `} >
                                                {_.get(post, ['location'])}
                                            </span>
                                        </React.Fragment>
                                        :
                                        null
                                }
                            </div>
                            <div className={`"headline ${props.textColor || 'grey-darken-2'}`}>
                                {moment(_.get(post, ['createdAt'])).format('MMMM DD')} | {moment(_.get(post, ['createdAt'])).fromNow()}
                            </div>
                        </span>
                    </span>
                    <span className='d-inline-block' style={{ width: 30 }} >
                        {
                            _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(post, ['userId', '_id']) ?
                                <span className='d-inline-block' id={`post-menu-${uid}`} >
                                    <Dropdown getPopupContainer={() => document.getElementById(`post-menu-${uid}`)}
                                        overlay={
                                            <Menu>
                                                {
                                                    _.get(post, ['eventId', 'status']) == 'expired' ?
                                                        null
                                                        :
                                                        <Menu.Item onClick={(e) => {
                                                            if (props.onEditClick) {
                                                                props.onEditClick(post)
                                                            }
                                                        }}><span >Edit</span></Menu.Item>
                                                }
                                                <Menu.Item>
                                                    <Popconfirm
                                                        title="Are you sure to delete this post?"
                                                        onConfirm={(e) => {
                                                            if (props.onRemoveClick) {
                                                                props.onRemoveClick(post);
                                                            }
                                                        }}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <span>Delete</span>
                                                    </Popconfirm>
                                                </Menu.Item>
                                            </Menu>
                                        }>
                                        <Icon type="more" rotate={90} className={`${props.textColor || 'black'}`} style={{ fontSize: 30 }} />
                                    </Dropdown>
                                </span>
                                :
                                null
                        }
                    </span>
                </div>

                <Scrollbars autoHide autoHeight autoHeightMax={350}>

                    <EventDetailsBox data={_.get(post, ['eventId'])} textColor="white" readOnly={props.readOnly} hideAction hideDescription={props.hideDescription === true ? true : false} hideGuestList={props.hideGuestList === true ? true : false}
                        onEventJoinActionClick={(e) => {
                            if (props.onEventJoinActionClick) {
                                props.onEventJoinActionClick(e);
                            }
                        }}
                    />
                    <div className="flex-justify-start flex-items-align-center cursor-pointer">
                        <LikePostButton
                            chatId={_.get(post, ['_id'])}
                            likeOn="chat"
                            readOnly={props.readOnly}
                            onClick={(liked) => {
                                patchUserCarFreakPosts({ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 }, 'update')
                            }}
                            activeButton={
                                <div className={`flex-items-align-center ${props.textColor || 'black'}`}>
                                    <img src={carFreakLikeIcon} style={{ width: 30, height: 20 }} className={`margin-right-sm cursor-pointer `} />
                                    {getPlural('Like', 'Likes', post.totalLike, true)}
                                </div>
                            }
                            className='d-inline-block margin-right-md'>
                            <div className={`flex-items-align-center ${props.textColor || 'black'}`}>
                                <img src={carFreakLikeGreyIcon} style={{ width: 30, height: 20 }} className={`margin-right-sm cursor-pointer `} />
                                {getPlural('Like', 'Likes', post.totalLike, true)}
                            </div>
                        </LikePostButton>
                        <span className='flex-items-align-center cursor-pointer' onClick={(e) => {

                            if (props.onReplyClick) {
                                props.onReplyClick();
                            }
                        }}  >
                            <span className={`margin-right-sm ${props.textColor || 'black'}`} >
                                {formatNumber(messageTotal, 'auto', true, 0, true)}
                            </span>
                            <span className={`headline ${props.textColor || 'black'}`} >
                                {getPlural('Reply', 'Replies', messageTotal, false)}
                            </span>
                        </span>
                    </div>
                    <div className="width-100 margin-top-md">
                        <div className="padding-left-xl margin-y-sm">
                            {
                                _.map(messages, function (v) {
                                    return (
                                        <div>
                                            <CommentBox1
                                                textColor={props.textColor}
                                                data={v}
                                                onChange={(data) => {
                                                    handleCommentChange(data);
                                                }}
                                                onRemove={(data) => {
                                                    handleRemoveComment(data);
                                                }}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <SocialInput
                            textColor={props.textColor}
                            placeholder="What's on your mind?"
                            maxLength={1000}
                            inputRef={commentInputRef}
                            clubId={getObjectId(_.get(post, ['eventId', 'clubId']))}
                            size="small"
                            excludeEnter
                            emojiPosition={{ bottom: 0, right: 33 }}
                            onSubmit={(finalText) => {
                                handleSubmit(finalText);
                            }}
                            autoFocus={true}
                        />
                    </div>

                </Scrollbars>
            </div >
            :
            null
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    carfreak: state.carfreak,
});


const mapDispatchToProps = {
    loading: loading,
    loginMode,
    fetchCarFreakPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(PostWithComment)));