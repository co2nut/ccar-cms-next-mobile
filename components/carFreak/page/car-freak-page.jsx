import { Button, Col, Empty, Form, Icon, message, Radio, Row, Tooltip } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { v4 } from 'uuid';
import { earthGreyIcon, followingGreyIcon } from '../../../icon';
import CarFreakLayout from '../components/car-freak-layout';
import Post from '../components/post';
import PostModal from '../components/post-modal';
import WritePostModal from '../components/write-post-modal';
import { carFreakGlobalSearch } from '../config';
import client from '../../../feathers';
import WindowScrollLoadWrapper from '../../general/WindowScrollLoadWrapper';
import LayoutV2 from '../../general/LayoutV2';
import { arrayLengthCount, notEmptyLength } from '../../../common-function';
import InfiniteScrollWrapper from '../../general/InfiniteScrollWrapper';
import {
    updateActiveMenu
} from '../../../redux/actions/app-actions';
import WritePostDrawer from '../components/WritePostDrawer';
import PostMobileView from '../components/PostMobileView';
import { routePaths } from '../../../route';
import PostDrawer from '../components/PostDrawer';


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
                                                        className="background-white thin-border round-border box-shadow-strong"
                                                        postLike={_.find(userChatLikes, { chatId: v._id })}
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