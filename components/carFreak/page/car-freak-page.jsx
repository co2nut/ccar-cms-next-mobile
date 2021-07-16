import { Button, Col, Empty, Form, Icon, message, Radio, Row, Tooltip, Modal } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { v4 } from 'uuid';
import { earthGreyIcon, followingGreyIcon, earthYellowIcon,followingYellowIcon, writePostIconUi } from '../../../icon';
import CarFreakLayout from '../components/car-freak-layout';
import Post from '../components/post';
import PostModal from '../components/post-modal';
import WritePostModal from '../components/write-post-modal';
import { carFreakGlobalSearch, carFreakBackground, patchReduxPosts } from '../config';
import client from '../../../feathers';
import WindowScrollLoadWrapper from '../../general/WindowScrollLoadWrapper';
import LayoutV2 from '../../general/LayoutV2';
import { arrayLengthCount, notEmptyLength, getObjectId, getUserName } from '../../../common-function';
import InfiniteScrollWrapper from '../../general/InfiniteScrollWrapper';
import {
    updateActiveMenu
} from '../../../redux/actions/app-actions';
import WritePostDrawer from '../components/WritePostDrawer';
import PostMobileView from '../components/PostMobileView';
import { routePaths } from '../../../route';
import PostDrawer from '../components/PostDrawer';
import PostModalCarousel from '../components/PostModalCarousel';
import WriteEventModal from '../components/write-event-modal';
import WritePostModalWithImageEdit from '../components/car-freaks/WritePostModalWithImageEdit';
import { DokaModal } from '../../react-doka';
import Post2 from '../components/post-2';

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


const PAGE_SIZE = 12;

const CarFreakPage = (props) => {

    const [chats, setChats] = useState([])
    const [chatInfo, setChatInfo] = useState({});
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState('');
    const [selectedPost, setSelectedPost] = useState({});
    const [writePostChatType, setWritePostChatType] = useState('carfreaks');
    const [writeModalVisible, setWriteModalVisible] = useState(false);
    const [scope, setScope] = useState('public');
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [chatPage, setChatPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [followingList, setFollowingList] = useState([]);

    const [totalChat, setTotalChat] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [htmlWindow, setHtmlWindow] = useState({});
    const [htmlDocument, setHtmlDocument] = useState({});
    const [writeEventVisible, setWriteEventVisible] = useState(false);
    const [eventEditMode, setEventEditMode] = useState(false);
    const [notFollowingList, setNotFollowingList] = useState([]);
    const [editPicVisible, setEditPicVisible] = useState(false);

    useEffect(() => {
        props.updateActiveMenu('6');
    }, [])

    useEffect(() => {
        if (window) {
            setHtmlWindow(window);
        }
        if (document) {
            setHtmlDocument(document);
        }
    }, [])

    useEffect(() => {
        if (chatPage == 1) {
            getChatData(0, scope);
        } else {
            setChatPage(1);
        }
    }, [scope])


    useEffect(() => {

        if (_.isPlainObject(chatInfo) && !_.isEmpty(chatInfo)) {
            let newChatInfo = _.find(chats, function (chat) {
                return chat._id == chatInfo._id;
            })
            setChatInfo(newChatInfo || {})
        }

    }, [chats])

    useEffect(() => {
        getChatData((chatPage - 1) * PAGE_SIZE, scope)
    }, [chatPage])


    useEffect(() => {
        getFollowingList();
        getUserChatLikes(_.map(chats, '_id'))
    }, [props.user.authenticated])

    function confirmDelete(v) {
        if (v._id) {
            client.service('chats')
                .remove(v._id).then((res) => {
                    message.success('Record Deleted')
                    handleRemovePost(v)
                }).catch((err) => {
                    console.log('Unable to delete Chat.');
                })
        }
    }

    function getChatData(skip, type) {

        skip = skip || 0
        let title = ''
        let following = ''


        if (type == 'following') {
            following = {
                userId: {
                    $in: _.compact((_.isArray(followingList) && notEmptyLength(followingList) ? followingList : []).concat(_.get(props.user, ['info', 'user', '_id']) || null)),
                }
            }
        }
        setIsLoading(true)
        client.service('chats')
            .find({
                query: {
                    // ...title,
                    ...following,
                    chatType: {
                        $in: ['carfreaks']
                    },
                    parentType: {
                        $ne: 'club'
                    },
                    $populate: [
                        {
                            path: 'userId',
                            ref: 'users',
                            select: 'avatar _id fullName firstName lastName freakId userurlId'
                        }, 'eventId', 'clubId'],
                    $limit: PAGE_SIZE,
                    $sort: { _id: -1 },
                    $skip: skip,
                }
            })
            .then((res) => {

                let newData = _.cloneDeep(chats)
                if (chatPage > 1) {
                    newData = newData.concat(res.data)
                } else {
                    newData = res.data;
                }
                setChats(newData)
                setTotalChat(res.total)
                setIsLoading(false)
                if (arrayLengthCount(newData) < totalChat) {
                    setHasMore(true);
                }
                getUserChatLikes(_.map(_.get(res, ['data']), '_id'), true)

            })
    }

    function getUserChatLikes(ids, concat) {

        if (_.isArray(ids) && !_.isEmpty(ids) && _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            client.service('chatlikes')
                .find({
                    query: {
                        chatId: {
                            $in: ids || [],
                        },
                        userId: _.get(props.user, ['info', 'user', '_id'])
                    }
                })
                .then((res) => {
                    setUserChatLikes(concat ? _.concat(userChatLikes, res.data) : res.data)
                })
        }
    }

    function getFollowingList() {

        if (_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            client.service('follows').find({
                query: {
                    followerId: _.get(props.user, ['info', 'user', '_id']),
                    $populate: 'userId',
                    type: 'user',
                }
            }).then(res => {
                setFollowingList(notEmptyLength(res.data) ? _.compact(_.map(res.data, function (v) {
                    return _.get(v, ['userId']) || null;
                })) : [])
            }).catch(err => {
                message.error(err.message)
            });
        }
    }


    function handleOnAddPost(post) {
        if (_.isPlainObject(post) && !_.isEmpty(post)) {
            let posts = _.concat([post], chats)
            setChats(posts);
        }

    }

    function handlePostChange(post) {

        if (_.get(post, ['_id'])) {
            // client.service('chats').find({
            //     query: {
            //         _id: post._id,
            //         $populate: 'userId',
            //     }
            // }).then(res => {
            // post = _.isArray(res.data) && !_.isEmpty(res.data) ? res.data[0] : {};
            if (_.isPlainObject(post) && !_.isEmpty(post)) {
                let posts = _.map(chats, function (chat) {
                    return chat._id == _.get(post, ['_id']) ? post : chat;
                });
                setChats(posts);
            }
            // }).catch(err => {
            //     console.log(err);
            //     message.error(err.message)
            // });
        }

    }
    function handleRemovePost(post) {
        let posts = _.filter(chats, function (chat) {
            return chat._id != _.get(post, ['_id']);
        });

        setChats(posts);
    }

    return (
        <React.Fragment>
            <LayoutV2 backgroundImage={`url("${carFreakBackground}")`} searchTypes={carFreakGlobalSearch} enterSearchCarFreaks hideOpenApp showCompareCarButton={false} >

            <Tablet>
                <CarFreakLayout>
                    <Row gutter={[15, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="width-100 flex-justify-end flex-items-align-center">
                                    <span className='d-inline-block margin-right-md' >
                                        <RadioGroup value={scope} className="public-following round-border-radio-button" buttonStyle="outline">
                                            <Radio.Button className="round-border-right" value="following" onClick={(e) => {
                                                setScope('following')
                                            }}>
                                                <Tooltip title="Following" placement="top">
                                                    {
                                                        scope == 'following' ?
                                                            <img src={followingYellowIcon} style={{ height: 20, width: 20 }}></img>
                                                            :
                                                            <img src={followingGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                    }

                                                </Tooltip>
                                            </Radio.Button>
                                            <Radio.Button className="round-border-left" value="public" onClick={(e) => {
                                                setScope('public')
                                            }}>
                                                <Tooltip title="Public" placement="top">
                                                    {
                                                        scope == 'public' ?
                                                            <img src={earthYellowIcon} style={{ height: 20, width: 20 }}></img>
                                                            :
                                                            <img src={earthGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                    }
                                                </Tooltip>
                                            </Radio.Button>
                                        </RadioGroup>
                                    </span>
                                    <span className='d-inline-block' >
                                        <div onClick={(e) => {
                                            setEditMode(false);
                                            setWriteModalVisible(true);
                                            setSelectedPost(null);
                                        }}  >
                                            <img src={writePostIconUi} style={{ height: 40, width: 60 }} />
                                        </div>
                                    </span>
                                </div>
                            </Col>

                            <WindowScrollLoadWrapper
                                scrollRange={_.get(document, 'body.scrollHeight') || 1000 * 0.5}
                                onScrolledBottom={() => {
                                    if (arrayLengthCount(_.get(props.carfreak, `carFreakPosts`) || []) < totalChat) {
                                        setChatPage(chatPage + 1)
                                    }
                                }}
                            >
                                {
                                    _.isArray(_.get(props.carfreak, `carFreakPosts`) || []) && notEmptyLength(_.get(props.carfreak, `carFreakPosts`) || []) ?
                                        _.map(_.get(props.carfreak, `carFreakPosts`) || [], function (v, i) {
                                            return (
                                                <Col xs={24} sm={24} md={24} lg={6} xl={6} key={`post-${v4()}`}>
                                                    <Post2
                                                        data={v}
                                                        onRedirectToPost={(post) => {
                                                            if (htmlWindow) {
                                                                if (_.get(post, ['chatType']) == 'event') {
                                                                    const win = htmlWindow.open(`/event-post/${_.get(post, ['_id'])}`, '_blank');
                                                                    if (win != null) {
                                                                        win.focus();
                                                                    }
                                                                } else {
                                                                    setChatInfo(post);
                                                                    setVisible(true);
                                                                    setEditMode('');
                                                                }
                                                            }
                                                        }}
                                                        onEditClick={(post) => {
                                                            setEditMode('edit');
                                                            if (_.get(post, `chatType`) == 'event') {

                                                            } else {
                                                                setWriteModalVisible(true);
                                                                setSelectedPost(post);
                                                            }
                                                        }}
                                                        onRemoveClick={(post) => {
                                                            confirmDelete(post)
                                                        }}
                                                    />
                                                </Col>
                                            )
                                        })
                                        :
                                        <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                }
                            </WindowScrollLoadWrapper>

                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                                <div className="width-100 flex-justify-center" style={{ height: 50 }}>
                                    {
                                        isLoading ?
                                            <Icon type="loading" style={{ fontSize: 50 }} />
                                            :
                                            null
                                    }
                                </div>
                            </Col>
                        </Row>
                    </CarFreakLayout>
                </Tablet>

                <Mobile>
                    <CarFreakLayout
                        scope={scope}
                        onScopeChange={(scope) => {
                            setScope(scope || 'public');
                        }}
                        onWritePostClick={(type) => {
                            setWritePostChatType(type)
                            setEditMode(null);
                            setWriteModalVisible(true);
                            setSelectedPost(null);
                        }}>
                        <Row>
                            <InfiniteScrollWrapper onScrolledBottom={() => {
                                if (arrayLengthCount(chats) < totalChat) {
                                    setChatPage(chatPage + 1)
                                }
                            }}
                                hasMore={!isLoading && arrayLengthCount(chats) < totalChat}
                            >
                                {
                                    _.isArray(chats) && notEmptyLength(chats) ?
                                        _.map(chats, function (v, i) {
                                            return (
                                                <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`post-${_.get(v, `_id`)}`}>
                                                    <PostMobileView data={v}
                                                        className="background-white"
                                                        postLike={_.find(userChatLikes, { chatId: v._id })}
                                                        showClub
                                                        onRedirectToPost={(post) => {
                                                            if (_.get(post, ['chatType']) == 'event') {

                                                                // const win = htmlWindow.open(`/event-post/${_.get(post, ['_id'])}`, '_blank');
                                                                // if (win != null) {
                                                                //     win.focus();
                                                                // }
                                                            } else {
                                                                console.log('redirect');
                                                                setChatInfo(post);
                                                                setVisible(true);
                                                                setEditMode('');
                                                            }
                                                        }}
                                                        onEditClick={(post) => {
                                                            setEditMode('edit');
                                                            setWriteModalVisible(true);
                                                            setWritePostChatType('carfreaks')
                                                            setSelectedPost(post);
                                                        }}

                                                        onUpdatePost={(data) => {
                                                            handlePostChange(data);
                                                        }}
                                                        onRemoveClick={(post) => {
                                                            confirmDelete(post)
                                                        }}
                                                        onPostLikeChange={(liked, data) => {
                                                            if (liked) {
                                                                setUserChatLikes(_.concat(userChatLikes, [data]));
                                                            } else {
                                                                setUserChatLikes(_.filter(userChatLikes, function (like) {
                                                                    return _.get(like, ['chatId']) != _.get(data, ['chatId']);
                                                                }))
                                                            }
                                                        }}
                                                    />
                                                </Col>
                                            )
                                        })
                                        :
                                        <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                }
                            </InfiniteScrollWrapper>
                        </Row>
                    </CarFreakLayout>
                </Mobile>

            </LayoutV2>

            <PostModalCarousel
                visible={visible}
                onCancel={() => {
                    setVisible(false);
                }}
                posts={_.compact([chatInfo])}
                postClassName="background-black round-border box-neon"
                onEditClick={(post) => {
                    setVisible(false);
                    setSelectedPost(post);
                    if (_.get(post, `chatType`) == 'event') {
                        setEventEditMode(true);
                        setWriteEventVisible(true);
                    } else {
                        setEditMode(true);
                        setWriteModalVisible(true);
                    }
                }}
                onRemoveClick={(post) => {
                    confirmDelete(post)
                    setVisible(false);
                }}
            />

            <WriteEventModal
                visible={writeEventVisible}
                editMode={eventEditMode}
                data={_.get(selectedPost, ['eventId']) || {}}
                onCancel={() => {
                    setEventEditMode(false);
                    setWriteEventVisible(false);
                }}
                type="club"
                clubId={getObjectId(_.get(selectedPost, ['eventId', 'clubId']))}
                creator={_.get(selectedPost, ['eventId', 'clubId'])}
                notify
                onUpdate={(event) => {
                    if (_.isPlainObject(event) && !_.isEmpty(event)) {
                        let newData = _.cloneDeep(selectedPost);
                        newData.eventId = {
                            ...event,
                            clubId: _.get(newData, ['eventId', 'clubId']),
                        }
                        patchUserCarFreakPosts(_.compact([newData]), 'update');
                    }
                }}
            ></WriteEventModal>

            <WritePostModalWithImageEdit
                hideChatType
                data={selectedPost}
                editMode={editMode}
                chatType={'carfreaks'}
                visible={writeModalVisible}
                onUpdatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'update');
                }}
                onCreatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'append');
                }}
                onCancel={(v) => {
                    setWriteModalVisible(false);
                    setSelectedPost({});
                }}
            ></WritePostModalWithImageEdit>
            {/* <WritePostModal
                currentRecord={selectedPost}
                editMode={editMode}
                chatType={'carfreaks'}
                visibleMode={writeModalVisible}
                onUpdatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'update');
                }}
                onCreatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'append');
                }}
                changeVisibleMode={(v) => {
                    setWriteModalVisible(v);
                    if (!v) {
                        setSelectedPost({});
                    }
                }} /> */}

            <Modal
                visible={editPicVisible}
                onCancel={() => {
                    setEditPicVisible(false);
                }}

            >
                <div className="" style={{ height: 500 }}>
                    {/* <DokaImageEditor
                        
                        utils={[
                            'markup',
                            'crop',
                            'filter',
                            'color',
                            //  'resize',
                            // 'sticker'
                        ]}
                        markupShapeStyle={[.0, null]}
                        // cropAspectRatio={0.75}
                        cropAspectRatioOptions={[
                            { label: 'Free', value: null, },
                            { label: 'Portrait', value: 1.5, },
                            { label: 'Square', value: '1:1', },
                            { label: 'Landscape', value: 0.75, },
                        ]}
                        src={"https://ccar.s3.ap-southeast-1.amazonaws.com/images/bd71c2842c671b366c9a3fa923f52d6547c54fba908674444beba342218ccb67.jpg"}
                        imageCropAspectRatio={1}
                    ></DokaImageEditor> */}


                    <DokaModal
                        src={"https://ccar.s3.ap-southeast-1.amazonaws.com/images/bd71c2842c671b366c9a3fa923f52d6547c54fba908674444beba342218ccb67.jpg"}
                    />
                </div>
            </Modal>

            <PostDrawer
                data={chatInfo}
                visible={visible}
                editMode={editMode}
                postLike={_.find(userChatLikes, { chatId: _.get(chatInfo, ['_id']) })}
                onCancel={() => {
                    setVisible(false);
                    setChatInfo({});
                }
                }
                onPostLikeChange={(liked, data) => {
                    if (liked) {
                        setUserChatLikes(_.concat(userChatLikes, [data]));
                    } else {
                        setUserChatLikes(_.filter(userChatLikes, function (like) {
                            return _.get(like, ['chatId']) != _.get(data, ['chatId']);
                        }))
                    }
                }}
                onEditClick={(post) => {
                    setEditMode('edit');
                    setWriteModalVisible(true);
                    setWritePostChatType('carfreaks')
                    setSelectedPost(post);
                }}

                onRemoveClick={(post) => {
                    confirmDelete(post)
                    setVisible(false);
                }}

                onUpdatePost={(data) => {
                    handlePostChange(data);
                }}
            />

            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={writePostChatType || 'socialboard'}
                visible={writeModalVisible}
                notify
                onUpdatePost={(data) => {
                    handlePostChange(data);
                }}
                onCreatePost={(data) => {

                    if (_.get(data, `chatType`) == 'carfreaks') {
                        handleOnAddPost(data)
                    }
                    if (_.get(data, `chatType`) == 'socialboard') {
                        props.router.push(routePaths.socialBoard.as().pathname)
                    }
                }}
                onClose={(v) => {
                    setWriteModalVisible(false);
                    setSelectedPost({});
                }} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(CarFreakPage)));