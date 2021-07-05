import { Button, Col, Divider, Drawer, Form, Icon, Input, message, Modal, Radio, Row, Spin, Tooltip, Upload, message as AntMessage, Empty } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import axios from 'axios';
import Compress from "browser-image-compression";
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ReactSortable } from "react-sortablejs";
import { v4 } from 'uuid';
import client from '../../../feathers';
import SocialInput from './social-input';
import { loading, loginMode } from '../../../redux/actions/app-actions';
import { setUser } from '../../../redux/actions/user-actions';
import { arrayLengthCount, formatNumber, getObjectId, getPlural, getUserName, notEmptyLength, sortByDateDesc } from '../../../common-function';
import UserAvatar from '../../general/UserAvatar';
import Scrollbars from 'react-custom-scrollbars';
import Loading from '../../general/Loading';
import PostMenuModal from './PostMenuModal';
import FollowButton from '../../profile/FollowButton';
import LightBoxCarousel from '../../general/LightBoxCarousel';
import { imageNotFound } from '../../profile/config';
import LightBoxGallery from '../../general/LightBoxGallery';
import ParseTag from '../../general/ParseTag';
import LikePostButton from './like-post-button';
import { commentIcon, shareIcon } from '../../live/config';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import ShareButtonDialog from '../../general/ShareButtonDialog';
import CommentBox1 from './comment-box-1';
import { chatRestrictTime, compressImages } from '../config';
import ScrollLoadWrapper from '../../general/ScrollLoadWrapper';
import WindowScrollLoadWrapper from '../../general/WindowScrollLoadWrapper';
import moment from 'moment';
import uploadImages from '../../../api/uploadImages';

const { TextArea } = Input;


const messagePageSize = 6;
const titleInputRef = React.createRef();
const contentInputRef = React.createRef();
const IMAGE_LIMIT = 10;

const IMAGE_HEIGHT = 300;
const postCommentRef = React.createRef();
let emojiPosition = { top: -360, right: 0 }
const PostDrawer = (props) => {


    const [visible, setVisible] = useState(false);
    const [post, setPost] = useState({});
    const [totalLike, setTotalLike] = useState(0);
    const [messageTotal, setMessageTotal] = useState(0);
    const [messages, setMessages] = useState([]);
    const [messagePage, setMessagePage] = useState(1);
    const [canSendMessage, setCanSendMessage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [typeMessage, setTypeMessage] = useState('');
    const [commentImages, setCommentImages] = useState([]);
    const [resetIndicator, setResetIndicator] = useState('');


    const [pinnedCommentIds, setPinnedCommentIds] = useState([]);
    const [pinnedComments, setPinnedComments] = useState([]);

    useEffect(() => {

        if (_.get(post, `_id`) == _.get(props.data, `_id`)) {
            setPost(props.data);
            setPinnedCommentIds(_.get(props.data, ['pinnedComments']) || [])
        } else {
            if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
                setPinnedCommentIds(_.get(props.data, ['pinnedComments']) || [])
                setPost(props.data);
            } else {
                setPost({});
                setMessages([]);
                setPinnedCommentIds([]);
            }
        }

    }, [props.data])

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible]);

    useEffect(() => {
        getData(props.data, _.map(pinnedCommentIds || [], '_id'), (messagePage - 1) * messagePageSize);
    }, [messagePage])

    useEffect(() => {
        if (messagePage == 1) {
            getData(props.data, _.map(pinnedCommentIds || [], '_id'));
        } else {
            setMessagePage(1);
        }
        getPinnedDataMessage(_.map(pinnedCommentIds || [], '_id'))
    }, [pinnedCommentIds])

    useEffect(() => {
        console.log(post);
    }, [post])

    function closeModal() {
        if (props.onCancel) {
            props.onCancel()
        }
        setVisible(false)
        setMessages([]);
        setCanSendMessage(true);
    }

    function handleSubmit(text, images) {

        if (!_.get(props.user, ['authenticated']) && !_.get(props.user, ['info', 'user', '_id'])) {
            AntMessage.error('Please Login First!');
            props.loginMode(true);
            return;
        }
        if (_.get(post, ['_id']) && (text || _.isArray(images) && !_.isEmpty(images))) {

            setIsLoading(true);
            client.authenticate()
                .then(async (res) => {
                    if (_.isArray(images) && !_.isEmpty(images)) {
                        images = await uploadImages(images);
                    }
                    client.service('chatmessages')
                        .create({
                            chatId: post._id,
                            userId: res.user._id,
                            message: text,
                            mediaList: images,
                        })
                        .then((res1) => {

                            setIsLoading(false);
                            if (props.onUpdatePost) {
                                props.onUpdatePost({ ...post, totalReply: messageTotal + 1 })
                            }
                            setTypeMessage('');
                            setCommentImages([]);
                            setResetIndicator(v4());
                            res1.userId = res.user;
                            //for new message appear at top after submit
                            let newData = [res1]
                            setMessages(newData.concat(messages))
                            // setMessages(messages.concat([res1]));
                            setMessageTotal(messageTotal + 1);

                        }).catch((err) => {
                            console.log(err);
                            console.log('Unable to send messages.')
                        })

                })
                .catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                    return AntMessage.error("Something went wrong.")
                })
        }

    };

    function getData(post, excludeIds = [], skip = 0) {

        if (_.get(post, ['_id'])) {
            setIsLoading(true);

            if (!_.isNumber(skip)) {
                skip = 0;
            }
            let query = {
                chatId: post._id,
                $populate: 'userId',
                $limit: messagePageSize,
                $sort: { _id: -1 },
                $skip: skip
            };

            if (_.isArray(excludeIds) && !_.isEmpty(excludeIds)) {
                query._id = {
                    $nin: excludeIds || [],
                }
            }

            client.service('chatmessages').find(
                {
                    query: {
                        ...query
                    }
                }
            ).then((res) => {

                setIsLoading(false);
                setMessages(messagePage == 1 ? _.get(res, `data`) : _.concat(messages, _.get(res, `data`) || []))
                setMessageTotal(res.total)

            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            });

        }
    }

    function handleCommentChange(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let newMessages = _.map(messages, function (v) {
                return _.get(v, ['_id']) == _.get(data, ['_id']) ? data : v;
            });

            setMessages(newMessages);

            newMessages = _.map(pinnedComments, function (v) {
                return _.get(v, ['_id']) == _.get(data, ['_id']) ? data : v;
            });

            setPinnedComments(newMessages);
        }
    }

    function handleRemoveComment(data) {
        if (_.isPlainObject(data) && !_.isEmpty(data)) {
            let newMessages = _.filter(messages, function (v) {
                return _.get(v, ['_id']) != _.get(data, ['_id']);
            });

            setMessages(newMessages);

            let newPinnedMessages = _.filter(pinnedComments, function (v) {
                return _.get(v, ['_id']) != _.get(data, ['_id']);
            }) || [];

            if (!_.isEqual(newPinnedMessages, pinnedComments)) {
                setPinnedComments(newPinnedMessages);
            }

            if (props.onUpdatePost) {
                props.onUpdatePost({ ...post, pinnedComments: newPinnedMessages, totalReply: (messageTotal + arrayLengthCount(newPinnedMessages)) - 1 });
            }
        }
    }


    function getPinnedDataMessage(ids) {

        if (_.isEmpty(post) === true) {
            return
        }

        let query = {
            _id: {
                $in: ids || [],
            },
            chatId: post._id,
            $populate: 'userId',
            $sort: { createdAt: -1 },

        }

        client.service('chatmessages').find(
            {
                query: {
                    ...query,
                }
            }
        ).then((res) => {
            setPinnedComments(_.isArray(res.data) && notEmptyLength(res.data) ? res.data : []);
        })
    }

    function handlePinCommentChange(ids) {
        ids = _.isArray(ids) && !_.isEmpty(ids) ? ids : [];
        setPinnedCommentIds(ids);
        if (props.onUpdatePost) {
            props.onUpdatePost({ ...post, pinnedComments: ids })
        }
    }


    return (
        <React.Fragment>
            <Drawer
                className="header-no-padding body-no-padding"
                title={
                    <div className="flex-justify-space-between flex-items-align-center padding-y-sm background-ccar-button-yellow">
                        <Button type="link" className="black headline" onClick={(e) => { closeModal() }}><Icon type="left" /> Back </Button>
                    </div>}
                visible={visible}
                onClose={(e) => { closeModal() }}
                maskClosable={false}
                mask
                width="100%"
                closable={false}
            >
                <ScrollLoadWrapper autoHeight autoHeightMin={typeof (window) != undefined ? window.innerHeight * 0.8 : 500} autoHeightMax={typeof (window) != undefined ? window.innerHeight * 0.8 : 500} onScrolledBottom={() => { if (arrayLengthCount(messages) < messageTotal) { setMessagePage(messagePage + 1) } }}>
                    <div className="flex-items-align-center flex-justify-space-between padding-md">
                        <span className='flex-items-align-center' >
                            <UserAvatar redirectProfile data={_.get(post, ['userId'])} size={50} className="margin-right-md" />
                            <span className="d-inline-block">
                                <div className="caption font-weight-bold text-truncate-twoline">
                                    {getUserName(_.get(post, `userId`), 'freakId')}
                                </div>
                                <div className="small-text font-weight-thin text-truncate">
                                    {moment(_.get(post, `createdAt`)).fromNow()}
                                </div>
                            </span>
                        </span>
                        <span className='flex-items-align-center' >
                            <FollowButton type="user" followerId={_.get(props.user, ['info', 'user', '_id'])} userId={getObjectId(_.get(post, `userId`))}
                                followButton={() => {
                                    return <span className='d-inline-block round-border background-ccar-button-yellow padding-y-sm padding-x-md caption black' >
                                        Follow
                                    </span>
                                }}
                                followingButton={() => {
                                    return <span className='d-inline-block round-border background-white padding-y-sm padding-x-md caption black' style={{ border: 'solid 1px', borderColor: '#FFCC32' }} >
                                        Following
                                    </span>
                                }}
                                handleSuccess={(data) => {
                                    message.success(data.type == 'remove' ? 'Unfollowed' : 'Followed')
                                }}
                                handleError={(err) => {
                                    message.error(err.message)
                                }}
                            />

                            <PostMenuModal post={post}
                                onEditPostClick={() => {
                                    if (props.onEditClick) {
                                        props.onEditClick(post)
                                    }
                                }}
                                onRemovePostClick={() => {
                                    if (props.onRemoveClick) {
                                        props.onRemoveClick(post);
                                    }
                                }}
                            >
                                <Icon type="more" className="black" style={{ fontSize: 20 }} />
                            </PostMenuModal>
                        </span>
                    </div>
                    {
                        _.get(post, `chatType`) == 'carfreaks' ?
                            <div className="margin-bottom-sm">
                                <LightBoxCarousel height={IMAGE_HEIGHT} images={_.compact(_.map(_.get(post, ['mediaList']), function (v) {
                                    return _.get(v, ['url']) || null;
                                }))} />
                            </div>
                            :
                            null
                    }
                    <div className="padding-x-md padding-y-sm">
                        <ParseTag data={(_.get(post, ['title']) || '')} className="font-weight-bold headline width-100 pre-wrap" expandable
                            lines={1}
                            more={<span className="small-text">Show More</span>}
                            less={<span className="small-text">Show Less</span>} />
                    </div>
                    <div className="padding-x-md">
                        <ParseTag data={(_.get(post, ['content']) || '')} className="font-weight-thin caption width-100 pre-wrap" expandable
                            lines={2}
                            more={<span className="small-text">Show More</span>}
                            less={<span className="small-text">Show Less</span>} />
                    </div>
                    <div className="width-100 flex-justify-start flex-items-align-center padding-x-md padding-y-sm" >
                        <LikePostButton className='d-inline-block margin-right-md'
                            chatId={post._id}
                            likeOn="chat"
                            onClick={(liked) => { setTotalLike(liked ? parseInt(totalLike) + 1 : parseInt(totalLike) - 1) }}
                            onSuccessUpdate={(liked, data) => {
                                if (props.onPostLikeChange) {
                                    props.onPostLikeChange(liked, data);
                                }
                                if (props.onUpdatePost) {
                                    props.onUpdatePost({ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 });
                                }
                            }}
                            activeButton={
                                <div className="flex-items-align-center caption font-weight-thin">
                                    <img src={carFreakLikeIcon} style={{ width: 30, height: 20 }} className="margin-right-sm cursor-pointer" />
                                    {getPlural('Like', 'Likes', post.totalLike || 0, true)}
                                </div>
                            }
                            className='d-inline-block margin-right-md'>
                            <div className="flex-items-align-center caption font-weight-thin">
                                <img src={carFreakLikeGreyIcon} style={{ width: 30, height: 20 }} className="margin-right-sm cursor-pointer" />
                                {getPlural('Like', 'Likes', post.totalLike || 0, true)}
                            </div>
                        </LikePostButton>
                        <span className='flex-items-align-center cursor-pointer margin-right-sm' onClick={(e) => {

                            if (postCommentRef.current.focus) {
                                postCommentRef.current.focus();
                            }
                        }}>
                            <span className='margin-right-sm' >
                                <img src={commentIcon} style={{ width: 17, height: 17 }} />
                            </span>
                            <span className=' caption font-weight-thin' >
                                {getPlural('Comment', 'Comments', _.get(post, ['totalReply']) || 0, true)}
                            </span>
                        </span>
                        <ShareButtonDialog link={`/car-freaks/${getObjectId(post)}`}>
                            <span className='margin-right-sm' >
                                <img src={shareIcon} style={{ width: 17, height: 17 }} />
                            </span>
                            <span className='caption font-weight-thin margin-right-sm grey-darken-1' >
                                Share
                            </span>
                        </ShareButtonDialog>
                    </div>
                    <div className="padding-x-md padding-y-sm">
                        {
                            _.isArray(pinnedComments) && !_.isEmpty(pinnedComments) ?
                                _.map(pinnedComments, function (v, index) {
                                    return (
                                        <CommentBox1
                                            key={`pinnedcomment-${getObjectId(v)}`}
                                            data={v}
                                            pinnedComments={pinnedComments}
                                            pinnable={props.pinnable}
                                            theme="pin"
                                            imageUpload={_.get(post, `chatType`) == 'socialboard'}
                                            imageUploadMultiple={_.get(post, `chatType`) == 'socialboard'}
                                            onChange={(data) => {
                                                handleCommentChange(data);
                                            }}
                                            onRemove={(data) => {
                                                handleRemoveComment(data);
                                            }}
                                            onUpdatePinComments={(data) => {
                                                handlePinCommentChange(data);
                                            }}
                                        />
                                    )
                                })
                                :
                                null

                        }
                        {
                            _.isArray(messages) && notEmptyLength(messages) ?
                                messages.map(function (v, i) {
                                    return (
                                        <React.Fragment >
                                            <CommentBox1 data={v}
                                                key={`comment-${getObjectId(v)}`}
                                                pinnedComments={pinnedComments}
                                                pinnable={props.pinnable}
                                                imageUpload={_.get(post, `chatType`) == 'socialboard'}
                                                imageUploadMultiple={_.get(post, `chatType`) == 'socialboard'}
                                                onChange={(data) => {
                                                    handleCommentChange(data);
                                                }}
                                                onRemove={(data) => {
                                                    handleRemoveComment(data);
                                                }}
                                                onUpdatePinComments={(data) => {
                                                    handlePinCommentChange(data);
                                                }}
                                            />
                                        </React.Fragment>
                                    )
                                })
                                :
                                null
                        }
                    </div>
                </ScrollLoadWrapper>
                <div className="width-100 background-white" style={{ position: 'sticky', bottom: 0 }}>
                    <Divider style={{ margin: '5px 0px' }} />
                    <div className="flex-justify-space-around flex-items-align-center padding-bottom-sm">
                        <span className='d-inline-block width-80' >
                            <SocialInput
                                clubId={getObjectId(_.get(post, `clubId`))}
                                placeholder="What's on your mind?"
                                maxLength={1000}
                                inputRef={postCommentRef}
                                size="small"
                                onChange={(v, finalText) => {
                                    setTypeMessage(finalText)
                                }}
                                onImageChange={(images) => {
                                    setCommentImages(images)
                                }}
                                imageUpload={_.get(post, `chatType`) == 'socialboard'}
                                imageUploadMultiple={_.get(post, `chatType`) == 'socialboard'}
                                hideEmojiPicker
                                autoFocus={true}
                                excludeEnter
                                resetIndicator={resetIndicator}
                            />
                        </span>
                        <span className={`'d-inline-block caption font-weight-bold ${isLoading ? 'cursor-not-allowed yellow-lighten-2' : 'cursor-pointer ccar-button-yellow '}`} onClick={(e) => {
                            if (!isLoading) {
                                handleSubmit(typeMessage, commentImages)
                            }
                        }} >
                            {isLoading ? 'Sending' : 'Send'}
                        </span>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});


const mapDispatchToProps = {
    loginMode: loginMode,
    loading: loading,
    setUser: setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(PostDrawer)));