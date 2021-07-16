import { Button, Col, Empty, Form, Icon, message, Radio, Row, Tooltip, Modal } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
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
import { fetchCarFreakPosts, fetchUserPostLikeIds } from '../../../redux/actions/carfreak.action';
import { routePaths } from '../../../route';
import InfiniteScrollWrapper from '../../general/InfiniteScrollWrapper';
import LayoutV2 from '../../general/LayoutV2';
import CarFreakLayout from '../components/car-freak-layout';
import ClubJoinModal from '../components/club/ClubJoinModal';
import EventPost from '../components/event-post';
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

    const [chatInfo, setChatInfo] = useState({});
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState('');
    const [selectedPost, setSelectedPost] = useState({});
    const [writePostChatType, setWritePostChatType] = useState('carfreaks');
    const [writeModalVisible, setWriteModalVisible] = useState(false);
    const [scope, setScope] = useState('public');
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

    const [writeEventVisible, setWriteEventVisible] = useState(false);
    const [eventEditMode, setEventEditMode] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});


    const [joinClubModalVisible, setJoinClubModalVisible] = useState(false);

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
            let newChatInfo = _.find(_.get(props.carfreak, 'carFreakPosts') || [], function (chat) {
                return chat._id == chatInfo._id;
            })
            setChatInfo(newChatInfo || {})
        }

        if (arrayLengthCount(_.get(props.carfreak, 'carFreakPosts') || []) < totalChat) {
            setHasMore(true);
        }
    }, [props.carfreak.carFreakPosts])


    useEffect(() => {
        getChatData((chatPage - 1) * PAGE_SIZE, scope)
    }, [chatPage])


    useEffect(() => {
        if (props.user.authenticated) {
            getFollowingList();
            getUserChatLikes(_.map(_.get(props.carfreak, 'carFreakPosts') || [], '_id')).then(userLikes => {
                props.fetchUserPostLikeIds(_.map(_.get(userLikes, ['data']) || [], 'chatId'))
            })
        } else {
            props.fetchUserPostLikeIds([])
        }

    }, [props.user.authenticated])

    function confirmDelete(v) {
        if (v._id) {
            client.service('chats')
                .remove(v._id).then((res) => {
                    message.success('Record Deleted')
                    patchUserCarFreakPosts([v], 'delete');
                }).catch((err) => {
                    console.log('Unable to delete Chat.');
                })
        }
    }

    function patchUserCarFreakPosts(posts = [], mode = 'init') {

        let data = patchReduxPosts(_.get(props.carfreak, `carFreakPosts`), posts, mode);
        if (!_.isEqual(data, _.get(props.carfreak, `carFreakPosts`))) {
            props.fetchCarFreakPosts(data);
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
                        $in: ['carfreaks', 'event']
                    },
                    parentType: {
                        $ne: 'club'
                    },
                    $populate: [
                        {
                            path: 'userId',
                            ref: 'users',
                            select: 'avatar _id fullName firstName lastName freakId userurlId'
                        },
                        {
                            path: 'eventId',
                            ref: 'events',
                            populate: [
                                {
                                    path: 'createdBy',
                                    ref: 'users'
                                },
                                {
                                    path: 'clubId',
                                    ref: 'clubs'
                                },
                            ]
                        }, 'clubId'],
                    $limit: PAGE_SIZE,
                    $sort: { _id: -1 },
                    $skip: skip,
                }
            })
            .then(async (res) => {
                res.data = await processEventPost(res.data);
                patchUserCarFreakPosts(res.data, chatPage == 1 ? 'init' : 'concat');
                setTotalChat(res.total)
                getUserChatLikes(_.map(_.get(res, ['data']), '_id')).then(userLikes => {
                    patchUserPostLikeIds(_.map(_.get(userLikes, ['data']) || [], 'chatId'));
                    setIsLoading(false)
                })
            }).catch(err => {
                console.log(err);
            });
    }

    async function processEventPost(posts = []) {

        if (_.isArray(posts) && !_.isEmpty(posts)) {
            let eventPosts = [];
            eventPosts = _.filter(posts, (post) => {
                return _.get(post, `chatType`) == 'event';
            })
            return getClubJoins(_.uniq(_.compact(_.map(eventPosts, 'eventId.clubId._id')))).then(res => {
                eventPosts = _.map(eventPosts, (eventPost) => {
                    eventPost.clubJoin = _.find(_.get(res, `data`) || [], ['clubId', _.get(eventPost, `eventId.clubId._id`)]) || {};
                    eventPost.viewType = getViewType(eventPost.clubJoin);
                    eventPost.isNotAllowedSocialInteraction = isNotAllowedSocialInteraction(_.get(eventPost, `eventId.clubId`, eventPost.viewType));
                    return eventPost;
                })

                posts = _.map(posts, (post) => {
                    return _.find(eventPosts, ['_id', getObjectId(post)]) || post;
                })
                return posts;
            })
        } else {
            return posts;
        }

    }

    function patchUserPostLikeIds(ids = [], addMode = true) {

        let newPostLikes = props.carfreak.userPostLikeIds || [];

        if (_.isArray(ids) && !_.isEmpty(ids)) {
            if (addMode) {
                newPostLikes = _.union(newPostLikes, ids || []);
            } else {
                newPostLikes = _.pullAll(newPostLikes, ids || []);
            }
            if (!_.isEqual(newPostLikes, props.carfreak.userPostLikeIds)) {
                props.fetchUserPostLikeIds(newPostLikes);
            }
        }
    }

    function getUserChatLikes(ids = []) {

        if (_.isArray(ids) && !_.isEmpty(ids) && _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            return client.service('chatlikes')
                .find({
                    query: {
                        chatId: {
                            $in: ids || [],
                        },
                        userId: _.get(props.user, ['info', 'user', '_id'])
                    }
                })
        } else {
            return {
                then: () => {
                }
            }
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



    function confirmDeleteEvent(v) {
        if (v._id && _.get(v, ['eventId', '_id'])) {
            client.service('events')
                .remove(_.get(v, ['eventId', '_id'])).then((res) => {
                    confirmDelete(v);
                }).catch((err) => {
                    console.log('Unable to delete Event.');
                })
        }
    }

    function getClubJoins(ids = []) {

        if (_.isArray(ids) && !_.isEmpty(ids) && _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            return client.service('clubjoin').find({
                query: {
                    clubId: {
                        $in: ids || [],
                    },
                    userId: _.get(props.user, ['info', 'user', '_id']),
                }
            })
        } else {
            return {
                then: () => {
                }
            }
        }
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
                                if (arrayLengthCount(_.get(props.carfreak, `carFreakPosts`) || []) < totalChat) {
                                    setChatPage(chatPage + 1)
                                }
                            }}
                                hasMore={!isLoading && arrayLengthCount(_.get(props.carfreak, `carFreakPosts`) || []) < totalChat}
                            >
                                {
                                    _.isArray(_.get(props.carfreak, `carFreakPosts`) || []) && notEmptyLength(_.get(props.carfreak, `carFreakPosts`) || []) ?
                                        _.map(_.get(props.carfreak, `carFreakPosts`) || [], function (v, i) {
                                            return (
                                                <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`post-${_.get(v, `_id`)}`}>
                                                    {
                                                        _.get(v, ['chatType']) == 'event' ?
                                                            <EventPost manualControl data={v}
                                                                readOnly={isNotAllowedSocialInteraction(_.get(v, `eventId.clubId`), _.get(v, `viewType`))}
                                                                onEditClick={(data) => {
                                                                    if (_.isPlainObject(data) && !_.isEmpty(data)) {
                                                                        setSelectedPost(data);
                                                                        setEventEditMode(true);
                                                                        setWriteEventVisible(true);
                                                                    }
                                                                }}
                                                                onRemoveClick={(data) => {
                                                                    confirmDeleteEvent(data)
                                                                }}
                                                                onLikeClick={() => {
                                                                    if (isNotAllowedSocialInteraction(_.get(v, `eventId.clubId`), _.get(v, `viewType`))) {
                                                                        setJoinClubModalVisible(true)
                                                                        setSelectedPost(v);
                                                                    }
                                                                }}
                                                                onUpdatePost={(data) => {
                                                                    patchUserCarFreakPosts(_.compact([data]), 'update');
                                                                }}
                                                                onReplyClick={() => {
                                                                    if (isNotAllowedSocialInteraction(_.get(v, `eventId.clubId`), _.get(v, `viewType`))) {
                                                                        setJoinClubModalVisible(true)
                                                                        setSelectedPost(v);
                                                                    }
                                                                }}
                                                                onEventJoinActionClick={(e) => {
                                                                    if (isNotAllowedSocialInteraction(_.get(v, `eventId.clubId`), _.get(v, `viewType`))) {
                                                                        setJoinClubModalVisible(true)
                                                                        setSelectedPost(v);
                                                                    }
                                                                }}

                                                            />
                                                            :
                                                            <PostMobileView data={v}
                                                                className="background-white"
                                                                showClub
                                                                onRedirectToPost={(post) => {
                                                                    setChatInfo(post);
                                                                    setVisible(true);
                                                                    setEditMode('');
                                                                }}
                                                                onEditClick={(post) => {
                                                                    setEditMode('edit');
                                                                    setWriteModalVisible(true);
                                                                    setWritePostChatType('carfreaks')
                                                                    setSelectedPost(post);
                                                                }}

                                                                onUpdatePost={(data) => {
                                                                    patchUserCarFreakPosts(_.compact([data]), 'update');
                                                                }}
                                                                onRemoveClick={(post) => {
                                                                    confirmDelete(post)
                                                                }}
                                                            />
                                                    }
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
                onCancel={() => {
                    setVisible(false);
                    setChatInfo({});
                }
                }
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
                    patchUserCarFreakPosts(_.compact([data]), 'update');
                }}
            />

            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={writePostChatType || 'socialboard'}
                visible={writeModalVisible}
                notify
                onUpdatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'update');
                }}
                onCreatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'append');
                }}
                onClose={(v) => {
                    setWriteModalVisible(false);
                    setSelectedPost({});
                }} />

            <WriteEventModal
                visible={writeEventVisible}
                editMode={eventEditMode}
                data={_.get(selectedPost, ['eventId']) || {}}
                onCancel={() => {
                    setSelectedPost({});
                    setEventEditMode(false);
                    setWriteEventVisible(false);
                }}
                type="club"
                notify
                onCreate={(event) => {
                    if (_.isPlainObject(event) && !_.isEmpty(event)) {
                        client.service('chats').find({
                            query: {
                                eventId: _.get(event, `_id`),
                                $limit: 1,
                                $populate: [
                                    {
                                        path: 'userId',
                                        ref: 'users'
                                    },
                                    {
                                        path: 'eventId',
                                        ref: 'events',
                                        populate: [
                                            {
                                                path: 'createdBy',
                                                ref: 'users'
                                            },
                                            {
                                                path: 'clubId',
                                                ref: 'clubs'
                                            },
                                        ]
                                    },
                                    {
                                        path: 'clubId',
                                        ref: 'clubs'
                                    }
                                ],
                            }
                        }).then(res => {
                            if (_.isArray(res.data) && !_.isEmpty(res.data)) {
                                setPosts(_.concat(_.get(res, `data[0]`) || [], posts));
                            }
                        }).catch(err => {
                            message.error(err.message)
                        });
                    }
                }}
                onUpdate={(event) => {
                    if (_.isPlainObject(event) && !_.isEmpty(event)) {
                        let newData = _.cloneDeep(selectedPost);
                        newData.eventId = {
                            ...event,
                            clubId: _.get(newData, ['eventId', 'clubId']),
                        }
                        let newPosts = _.map(posts, function (item) {
                            return item._id == _.get(newData, ['_id']) ? newData : item;
                        });
                        setPosts(newPosts);
                    }
                }}
            ></WriteEventModal>

            <ClubJoinModal
                visible={joinClubModalVisible}
                club={_.get(selectedPost, `eventId.clubId`)}
                onCancel={() => {
                    setJoinClubModalVisible(false)
                }}
                onChange={(res) => {
                    if (_.get(res, ['type']) == 'approved') {
                        let effectedPosts = _.filter(_.get(props.carfreak, `carFreakPosts`), (post) => {
                            return _.get(post, `chatType`) == 'event' && getObjectId(_.get(post, `eventId.clubId`)) == getObjectId(_.get(res, `data.clubId`))
                        })
                        effectedPosts = processEventPost(effectedPosts || []);
                        patchUserCarFreakPosts(effectedPosts, 'update')
                    }
                }}
            ></ClubJoinModal>

        </React.Fragment >
    )

}



const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    userlikes: state.userlikes,
    carfreak: state.carfreak,
});

const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
    fetchUserPostLikeIds,
    fetchCarFreakPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(CarFreakPage)));