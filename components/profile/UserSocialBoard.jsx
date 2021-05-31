import { Button, Col, Empty, Form, Icon, message, Row, Affix, Dropdown, Menu, Avatar } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../feathers';
import SocialBoardCard from '../carFreak/components/social-board-card';
import WritePostModal from '../carFreak/components/write-post-modal';
import { arrayLengthCount, getObjectId, notEmptyLength, windowScroll } from '../../common-function';
import WindowScrollLoadWrapper from '../general/WindowScrollLoadWrapper';
import { loading } from '../../redux/actions/app-actions';
import { withRouter } from 'next/router';
import InfiniteScrollWrapper from '../general/InfiniteScrollWrapper';
import PostDrawer from '../carFreak/components/PostDrawer';
import { createCarFreakIcon, createSocialBoardIcon } from '../../icon';
import WritePostDrawer from '../carFreak/components/WritePostDrawer';
import { routePaths } from '../../route';

var moment = require('moment');

const POSTSIZE = 11;
const UserSocialBoard = (props) => {

    const [chats, setChats] = useState([])
    const [profile, setProfile] = useState({})
    const [posts, setPosts] = useState([]);
    const [postTotal, setPostTotal] = useState(0);
    const [postPage, setPostPage] = useState(1);
    const [postLoading, setPostLoading] = useState(false);
    const [editMode, setEditMode] = useState()
    const [writeModalVisible, setWriteModalVisible] = useState(false)
    const [selectedPost, setSelectedPost] = useState({})
    const [menuOpened, setMenuOpened] = useState(false)
    const [chatInfo, setChatInfo] = useState({});
    const [visible, setVisible] = useState(false);
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [followingList, setFollowingList] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [writePostChatType, setWritePostChatType] = useState('socialboard');

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }
    }, [props.data])

    useEffect(() => {
        if (_.get(profile, ['_id'])) {
            windowScroll(0, 0)
            if (postPage == 1) {
                getPosts(0)
            } else {
                setPostPage(1);
            }
        } else {
            setPosts([])
            setPostTotal(0);
            setPostPage(1);
        }
    }, [profile])

    useEffect(() => {

        if (_.isPlainObject(chatInfo) && !_.isEmpty(chatInfo)) {
            let newChatInfo = _.find(chats, function (chat) {
                return chat._id == chatInfo._id;
            })
            setChatInfo(newChatInfo || {})
        }

    }, [chats])

    useEffect(() => {
        getFollowingList();
        getUserChatLikes(_.map(chats, '_id'))
    }, [props.user.authenticated])

    useEffect(() => {
        getPosts((postPage - 1) * POSTSIZE);
    }, [postPage])

    useEffect(() => {

    }, [posts, postLoading, postTotal])

    function getPosts(skip) {
        if (_.get(profile, ['_id'])) {
            if (_.isNumber(skip)) {
                skip = parseInt(skip)
            } else {
                skip = 0;
            }
            setPostLoading(true);
            client.service('chats').find({
                query: {
                    createdBy: _.get(profile, ['_id']),
                    chatType: 'socialboard',
                    $and: [
                        {
                            parentType: { $ne: 'club' }
                        },
                        {
                            parentType: { $ne: 'clubEvent' }
                        },
                    ],
                    $sort: {
                        createdAt: -1,
                    },
                    $limit: POSTSIZE,
                    $populate: 'userId',
                    $skip: skip,
                }
            }).then(res => {
                setPostLoading(false);
                if (notEmptyLength(res.data)) {
                    setPosts(postPage == 1 ? res.data : posts.concat(res.data));
                }
                setPostTotal(res.total)
            }).catch(err => {
                setPostLoading(false);
                message.error(err.message)
            });
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

    function confirmDelete(v) {
        if (v._id) {
            client.service('chats')
                .remove(v._id).then((res) => {
                    message.success('Record Deleted')
                    handleRemoveSocialBoardPost(v)
                }).catch((err) => {
                    console.log('Unable to delete Chat.');
                })
        }

    }

    function handleSocialBoardPostChange(post) {
        let newPosts = _.map(posts, function (chat) {
            return chat._id == _.get(post, ['_id']) ? post : chat;
        });

        if(getObjectId(chatInfo) == getObjectId(post)){
            setChatInfo(post)
        }

        setPosts(newPosts);
    }

    function handleSocialBoardAddPost(post) {
        if (_.isPlainObject(post) && !_.isEmpty(post)) {
            let newPosts = _.concat([post], posts)
            setPosts(newPosts);
        }
    }

    function handleRemoveSocialBoardPost(post) {
        let newPosts = _.filter(posts, function (chat) {
            return chat._id != _.get(post, ['_id']);
        });

        setPosts(newPosts);
    }

    return (
        <div>
            <Row className={`${props.className || ''}`}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <InfiniteScrollWrapper
                        onScrolledBottom={() => {
                            if (arrayLengthCount(posts) < postTotal) {
                                setPostPage(postPage + 1);
                            }
                        }}
                        hasMore={!postLoading && arrayLengthCount(posts) < postTotal}
                    >
                        {
                            _.isArray(posts) && !_.isEmpty(posts) ?
                                <Row gutter={[10, 20]} className="padding-md">
                                    {
                                        _.map(posts, function (post) {
                                            return <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                <SocialBoardCard data={post}
                                                    onRedirectToPost={(post) => {
                                                        setChatInfo(post);
                                                        setVisible(true);
                                                    }}
                                                    onEditClick={(post) => {
                                                        setWriteModalVisible(true);
                                                        setSelectedPost(post);
                                                        setEditMode('edit');
                                                    }}

                                                    onRemoveClick={(post) => {
                                                        confirmDelete(post)
                                                    }}
                                                />
                                            </Col>

                                        })
                                    }
                                </Row>
                                :
                                <Empty></Empty>
                        }
                    </InfiniteScrollWrapper>

                    {
                        menuOpened ?
                            <div className="background-black-opacity-50 absolute-center" style={{ zIndex: 2 }} >
                            </div>
                            :
                            null
                    }
                    {
                        _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(profile, ['_id']) ?
                            // <Affix offsetBottom={50} style={{ right: 15 }}>
                            //     <div className="flex-justify-end flex-items-align-center margin-right-sm">
                            //         <div className="border-ccar-yellow" onClick={(e) => {
                            //             setEditMode(null);
                            //             setWriteModalVisible(true);
                            //             setSelectedPost(null);
                            //         }}  >
                            //             <img src="https://img.icons8.com/ios-filled/60/FFCC32/plus.png" />
                            //         </div>
                            //     </div>
                            //     </Affix>

                            <Affix offsetBottom={70} style={{ position: 'absolute', right: 15 }} >
                                <Dropdown trigger="click" placement="topLeft"
                                    overlay={
                                        <Menu className="background-transparent box-shadow-none " onClick={(e) => {
                                            setMenuOpened(true)
                                            setWriteModalVisible(true)
                                            setWritePostChatType(_.get(e, `key`))
                                        }}
                                        >
                                            <Menu.Item key="carfreaks" style={{ padding: '10px 0px' }} >
                                                <div className=" flex-justify-space-between flex-items-align-center" style={{ width: 200 }} >
                                                    <span className='d-inline-block subtitle1 ccar-button-yellow' >
                                                        CarFreaks
                                </span>
                                                    <span className='d-inline-block avatar padding-sm background-white' >
                                                        <img src={createCarFreakIcon} style={{ height: 30, width: 30 }} />
                                                    </span>
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item key="socialboard" className="white" style={{ padding: '10px 0px' }}>
                                                <div className="flex-justify-space-between flex-items-align-center" style={{ width: 200 }} >
                                                    <span className='d-inline-block subtitle1 ccar-button-yellow' >
                                                        Social Board
                                        </span>
                                                    <span className='d-inline-block avatar padding-sm background-white' >
                                                        <img src={createSocialBoardIcon} style={{ height: 30, width: 30 }} />
                                                    </span>
                                                </div>
                                            </Menu.Item>
                                        </Menu>}
                                    onVisibleChange={(v) => { setMenuOpened(v) }}>

                                    <span className='d-inline-block width-100' >
                                        <Avatar size={50} className="background-ccar-button-yellow" icon={menuOpened ? <Icon type="close" className="white" /> : <Icon type="plus" className="white" />}
                                        />
                                    </span>
                                </Dropdown>
                            </Affix>
                            :
                            null
                    }
                </Col>

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
                        setWriteModalVisible(true);
                        setSelectedPost(post);
                        setEditMode('edit');
                    }}

                    onRemoveClick={(post) => {
                        confirmDelete(post)
                        setVisible(false);
                    }}

                    onUpdatePost={(data) => {
                        handleSocialBoardPostChange(data);
                    }}
                />

                <WritePostDrawer
                    data={selectedPost}
                    editMode={editMode}
                    chatType={writePostChatType || 'socialboard'}
                    visible={writeModalVisible}
                    notify
                    onUpdatePost={(data) => {
                        handleSocialBoardPostChange(data)
                    }}
                    onCreatePost={(data) => {
                        if (_.get(data, `chatType`) == 'carfreaks') {
                            props.router.push(`${routePaths.profile.to}?tabKey=carfreaks`, routePaths.profile.as(profile, { tabKey: 'carfreaks' }), { shallow: true })
                        }
                        if (_.get(data, `chatType`) == 'socialboard') {
                            setPosts(_.compact(_.concat([data], posts)))
                        }
                    }}
                    onClose={(v) => {
                        setWriteModalVisible(false);
                        setSelectedPost({});
                        setMenuOpened(false)
                    }} />
            </Row>
        </div>

    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    sellerProfile: state.sellerProfile,
});

const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserSocialBoard)));