import { Col, Empty, Form, message, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { arrayLengthCount, notEmptyLength } from '../../../common-function';
import client from '../../../feathers';
import {
    updateActiveMenu
} from '../../../redux/actions/app-actions';
import { fetchCarFreakPosts, fetchUserPostLikeIds } from '../../../redux/actions/carfreak.action';
import { routePaths } from '../../../route';
import InfiniteScrollWrapper from '../../general/InfiniteScrollWrapper';
import LayoutV2 from '../../general/LayoutV2';
import CarFreakLayout from '../components/car-freak-layout';
import PostDrawer from '../components/PostDrawer';
import PostMobileView from '../components/PostMobileView';
import WritePostDrawer from '../components/WritePostDrawer';
import { carFreakGlobalSearch, patchReduxPosts } from '../config';


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
// const Tablet = ({ children }) => {
//     const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
//     return isTablet ? children : null
// }
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isMobile || isTablet ? children : null
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

    useEffect(() => {
        props.updateActiveMenu('6');
    }, [])

    useEffect(() => { 
        console.log(props.carfreak.userPostLikeIds);
    } , [props.carfreak.userPostLikeIds])
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
            .then((res) => {
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
            console.log('get');
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



    return (
        <React.Fragment>
            <LayoutV2 searchTypes={carFreakGlobalSearch} enterSearchCarFreaks hideOpenApp showCompareCarButton={false} >

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
                                                    <PostMobileView data={v}
                                                        className="background-white"
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
                                                            patchUserCarFreakPosts(_.compact([data]), 'update');
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
                            </InfiniteScrollWrapper>
                        </Row>
                    </CarFreakLayout>
                </Mobile>

            </LayoutV2>

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

        </React.Fragment>
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