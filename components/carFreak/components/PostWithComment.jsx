import { Col, Collapse, Divider, Dropdown, Form, Icon, Menu, message, Popconfirm, Row, Empty } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { formatNumber, getObjectId, getPlural, getUserName, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import client from '../../../feathers';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
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

const defaultHeight = 'auto';
const headerHeight = 100;
const imageHeight = 200;
const titleHeight = 40;
const footerHeight = 100;
const actionHeight = 40;

let uid = v4();

const PAGE_SIZE = 6;
const postCommentRef = React.createRef();

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
        <div>
        <Desktop>
            <div className={`${props.className || ''} height-100 flex-items-align-center`} style={{ ...props.style }} key={props.key || `postWithComment-${getObjectId(post)}`}>
                <span className='d-inline-block width-70 height-100' >
                    <LightBoxCarousel
                        fitContainer
                        images={_.map(_.get(post, `mediaList`) || [], 'url')}
                    />
                    {/* <img src={generateDummyObj().dummyImage} style={{ width: '100%', height: '100%' }} /> */}
                </span>
                <span className='padding-x-md padding-top-sm width-30 height-100' >
                    <div style={{ height: '85%' }}>
                        <ScrollLoadWrapper autoHeight autoHide autoHeightMax="100%">
                            <div className="">
                                <div className="flex-items-align-center flex-justify-space-between">
                                    <span className="flex-items-align-center">
                                        {
                                            _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                                <ClubAvatar redirectProfile
                                                    data={_.get(post, ['clubId'])}
                                                    size={50}
                                                    avatarClassName="cursor-pointer margin-right-md" />
                                                :
                                                <UserAvatar redirectProfile
                                                    data={_.get(post, ['userId'])}
                                                    size={50}
                                                    avatarClassName="cursor-pointer margin-right-md"
                                                />
                                        }
                                        <span className='d-inline-block margin-right-md'>
                                            {
                                                _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?

                                                    <div style={{ color: props.textColor || 'black' }} className=" text-truncate-twoline">{_.get(post, `clubId.clubName`)}</div>
                                                    :
                                                    <div style={{ color: props.textColor || 'black' }} className=" text-truncate-twoline">{getUserName(_.get(post, `userId`), 'freakId')}</div>
                                            }
                                        </span>
                                    </span>
                                    {
                                        !props.hideAction ?
                                            <PostMenu post={post}
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
                                                <Icon type="more" className="white cursor-pointer" rotate={90} style={{ fontSize: '24px', fontWeight: '700', }} />
                                            </PostMenu>
                                            :
                                            null
                                    }                                </div>
                                <ParseTag data={_.get(post, `title`)} hashTagClassName={`font-weight-bold ${props.textColor || 'black'}`} className='width-100 pre-wrap' style={{ color: props.textColor || 'black', fontWeight: 700, fontSize: '16px', marginBottom: 0, marginTop: '5px' }}  ></ParseTag>
                                <ParseTag data={_.get(post, `content`)} hashTagClassName={`font-weight-bold ${props.textColor || 'black'}`} className='width-100 pre-wrap' style={{ color: props.textColor || 'black', }} expandable lines={3}  ></ParseTag>
                                <Divider style={{ margin: 0 }} />
                                <div className="margin-top-sm margin-bottom-sm flex-items-align-center">
                                    <LikePostButton className='d-inline-block margin-right-md'
                                        chatId={post._id}
                                        likeOn="chat"
                                        onClick={(liked) => {
                                            patchUserCarFreakPosts({ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 }, 'update')
                                        }}
                                        activeButton={
                                            <div className="flex-items-align-center" style={{ color: props.textColor || 'black' }}>
                                                <img src={carFreakLikeIcon} style={{ width: 35, height: 25 }} className="margin-right-sm cursor-pointer" />
                                                {getPlural('Like', 'Likes', _.get(post, `totalLike`) || 0, true)}
                                            </div>
                                        }
                                    >
                                        <div className="flex-items-align-center" style={{ color: props.textColor || 'black' }}>
                                            <img src={carFreakLikeGreyIcon} style={{ width: 35, height: 25, }} className="margin-right-sm cursor-pointer" />
                                            {getPlural('Like', 'Likes', _.get(post, `totalLike`) || 0, true)}
                                        </div>
                                    </LikePostButton>
                                    <span className='flex-items-align-center cursor-pointer margin-right-sm' onClick={(e) => {
                                        if (postCommentRef.current.focus) {
                                            postCommentRef.current.focus();
                                        }
                                    }}>
                                        <span className='margin-right-sm' >
                                            <img src={commentIcon} style={{ width: '20px', height: '20px' }} />
                                        </span>
                                        <span className='headline' style={{ color: props.textColor || 'black' }} >
                                            {getPlural('Comment', 'Comments', messageTotal, true)}
                                        </span>
                                    </span>
                                    <ShareButtonDialog link={`/car-freaks/${getObjectId(post)}`}>
                                        <span style={{ color: 'white' }}> <img src="https://img.icons8.com/ios-filled/20/ffcc32/forward-arrow.png" /> Share</span>
                                    </ShareButtonDialog>
                                </div>
                                <Divider style={{ margin: 0 }} />

                                <div className="margin-top-sm width-100">
                                    {
                                        _.isArray(messages) && notEmptyLength(messages) ?
                                            messages.map(function (v, i) {
                                                return (
                                                    <React.Fragment key={'messages' + i}>
                                                        <CommentBox1
                                                            data={v}
                                                            textColor={props.textColor}
                                                            onChange={(data) => {
                                                                handleCommentChange(data);
                                                            }}
                                                            onRemove={(data) => {
                                                                handleRemoveComment(data);
                                                            }}
                                                        />
                                                    </React.Fragment>
                                                )
                                            })
                                            :
                                            <div className="width-100 flex-items-align-center flex-justify-center" style={{ height: 100, }}>
                                                <span style={{ color: props.textColor || 'black' }}>No comment yet...</span>
                                            </div>
                                    }
                                </div>
                                <div className="width-100 flex-justify-center" style={{ height: 20 }}>
                                    {
                                        isLoading ?
                                            <Icon type="loading" style={{ fontSize: 20 }} />
                                            :
                                            null
                                    }
                                </div>
                            </div>

                        </ScrollLoadWrapper>
                    </div>
                    <SocialInput
                        placeholder="What's on your mind?"
                        maxLength={1000}
                        inputRef={postCommentRef}
                        size="small"
                        textColor={props.textColor}
                        emojiPosition={{ right: 33, bottom: 0 }}
                        onSubmit={(finalText) => {
                            handleSubmit(finalText);
                        }}
                        autoFocus={true}
                        excludeEnter
                    />
                </span>
            </div >
        </Desktop>

        <Tablet>
             <div className={`${props.className || ''} height-100 flex-items-align-center`} style={{ ...props.style }} key={props.key || `postWithComment-${getObjectId(post)}`}>
                <span className='d-inline-block width-50 height-100' >
                    <LightBoxCarousel
                        fitContainer
                        images={_.map(_.get(post, `mediaList`) || [], 'url')}
                    />
                    {/* <img src={generateDummyObj().dummyImage} style={{ width: '100%', height: '100%' }} /> */}
                </span>
                <span className='padding-x-md padding-top-sm width-50 height-100' >
                    <div style={{ height: '85%' }}>
                        <ScrollLoadWrapper autoHeight autoHide autoHeightMax="100%">
                            <div className="">
                                <div className="flex-items-align-center flex-justify-space-between">
                                    <span className="flex-items-align-center">
                                        {
                                            _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                                <ClubAvatar redirectProfile
                                                    data={_.get(post, ['clubId'])}
                                                    size={50}
                                                    avatarClassName="cursor-pointer margin-right-md" />
                                                :
                                                <UserAvatar redirectProfile
                                                    data={_.get(post, ['userId'])}
                                                    size={50}
                                                    avatarClassName="cursor-pointer margin-right-md"
                                                />
                                        }
                                        <span className='d-inline-block margin-right-md'>
                                            {
                                                _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?

                                                    <div style={{ color: props.textColor || 'black' }} className=" text-truncate-twoline">{_.get(post, `clubId.clubName`)}</div>
                                                    :
                                                    <div style={{ color: props.textColor || 'black' }} className=" text-truncate-twoline">{getUserName(_.get(post, `userId`), 'freakId')}</div>
                                            }
                                        </span>
                                    </span>
                                    {
                                        !props.hideAction ?
                                            <PostMenu post={post}
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
                                                <Icon type="more" className="white cursor-pointer" rotate={90} style={{ fontSize: '24px', fontWeight: '700', }} />
                                            </PostMenu>
                                            :
                                            null
                                    }                                </div>
                                <ParseTag data={_.get(post, `title`)} hashTagClassName={`font-weight-bold ${props.textColor || 'black'}`} className='width-100 pre-wrap' style={{ color: props.textColor || 'black', fontWeight: 700, fontSize: '16px', marginBottom: 0, marginTop: '5px' }}  ></ParseTag>
                                <ParseTag data={_.get(post, `content`)} hashTagClassName={`font-weight-bold ${props.textColor || 'black'}`} className='width-100 pre-wrap' style={{ color: props.textColor || 'black', }} expandable lines={3}  ></ParseTag>
                                <Divider style={{ margin: 0 }} />
                                <div className="margin-top-sm margin-bottom-sm flex-items-align-center">
                                    <LikePostButton className='d-inline-block margin-right-md'
                                        chatId={post._id}
                                        likeOn="chat"
                                        onClick={(liked) => {
                                            patchUserCarFreakPosts({ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 }, 'update')
                                        }}
                                        activeButton={
                                            <div className="flex-items-align-center" style={{ color: props.textColor || 'black' }}>
                                                <img src={carFreakLikeIcon} style={{ width: 35, height: 25 }} className="margin-right-sm cursor-pointer" />
                                                {getPlural('Like', 'Likes', _.get(post, `totalLike`) || 0, true)}
                                            </div>
                                        }
                                    >
                                        <div className="flex-items-align-center" style={{ color: props.textColor || 'black' }}>
                                            <img src={carFreakLikeGreyIcon} style={{ width: 35, height: 25, }} className="margin-right-sm cursor-pointer" />
                                            {getPlural('Like', 'Likes', _.get(post, `totalLike`) || 0, true)}
                                        </div>
                                    </LikePostButton>
                                    <span className='flex-items-align-center cursor-pointer margin-right-sm' onClick={(e) => {
                                        if (postCommentRef.current.focus) {
                                            postCommentRef.current.focus();
                                        }
                                    }}>
                                        <span className='margin-right-sm' >
                                            <img src={commentIcon} style={{ width: '20px', height: '20px' }} />
                                        </span>
                                        <span className='headline' style={{ color: props.textColor || 'black' }} >
                                            {getPlural('Comment', 'Comments', messageTotal, true)}
                                        </span>
                                    </span>
                                    <ShareButtonDialog link={`/car-freaks/${getObjectId(post)}`}>
                                        <span style={{ color: 'white' }}> <img src="https://img.icons8.com/ios-filled/20/ffcc32/forward-arrow.png" /> Share</span>
                                    </ShareButtonDialog>
                                </div>
                                <Divider style={{ margin: 0 }} />

                                <div className="margin-top-sm width-100">
                                    {
                                        _.isArray(messages) && notEmptyLength(messages) ?
                                            messages.map(function (v, i) {
                                                return (
                                                    <React.Fragment key={'messages' + i}>
                                                        <CommentBox1
                                                            data={v}
                                                            textColor={props.textColor}
                                                            onChange={(data) => {
                                                                handleCommentChange(data);
                                                            }}
                                                            onRemove={(data) => {
                                                                handleRemoveComment(data);
                                                            }}
                                                        />
                                                    </React.Fragment>
                                                )
                                            })
                                            :
                                            <div className="width-100 flex-items-align-center flex-justify-center" style={{ height: 100, }}>
                                                <span style={{ color: props.textColor || 'black' }}>No comment yet...</span>
                                            </div>
                                    }
                                </div>
                                <div className="width-100 flex-justify-center" style={{ height: 20 }}>
                                    {
                                        isLoading ?
                                            <Icon type="loading" style={{ fontSize: 20 }} />
                                            :
                                            null
                                    }
                                </div>
                            </div>

                        </ScrollLoadWrapper>
                    </div>
                    <SocialInput
                        placeholder="What's on your mind?"
                        maxLength={1000}
                        inputRef={postCommentRef}
                        size="small"
                        textColor={props.textColor}
                        emojiPosition={{ right: 33, bottom: 0 }}
                        onSubmit={(finalText) => {
                            handleSubmit(finalText);
                        }}
                        autoFocus={true}
                        excludeEnter
                    />

                </span>
            </div >
        </Tablet>
        </div>
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