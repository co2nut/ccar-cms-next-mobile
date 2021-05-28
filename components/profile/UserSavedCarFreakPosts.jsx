import { Col, Form, Icon, message, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../feathers';
import UserPosts from './UserPosts';
import { arrayLengthCount, notEmptyLength } from '../../common-function';
import WindowScrollLoadWrapper from '../general/WindowScrollLoadWrapper';
import { loading } from '../../redux/actions/app-actions';
import { setUser } from '../../redux/actions/user-actions';
import { updateSellerProfile } from '../../redux/actions/sellerProfile-actions';
import { withRouter } from 'next/router';
import InfiniteScrollWrapper from '../general/InfiniteScrollWrapper';
import PostDrawer from '../carFreak/components/PostDrawer';
import WritePostModal from '../carFreak/components/write-post-modal';

var moment = require('moment');

const POSTSIZE = 11;
const UserSavedCarFreakPosts = (props) => {

    const [profile, setProfile] = useState({})
    const [postLikes, setPostLikes] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postTotal, setPostTotal] = useState(0);
    const [postPage, setPostPage] = useState(1);
    const [postLoading, setPostLoading] = useState(false);
    const [chatInfo, setChatInfo] = useState({});
    const [chats, setChats] = useState([])
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState()
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [followingList, setFollowingList] = useState([]);
    const [selectedPost, setSelectedPost] = useState({})
    const [writeModalVisible, setWriteModalVisible] = useState(false)

    useEffect(() => {
        getUserChatLikes(_.map(posts, '_id'))
    }, [props.user.authenticated])

    useEffect(() => {

        if (_.isPlainObject(chatInfo) && !_.isEmpty(chatInfo)) {
            let newChatInfo = _.find(chats, function (chat) {
                return chat._id == chatInfo._id;
            })
            setChatInfo(newChatInfo || {})
        }
    }, [chats])

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }
    }, [props.data])

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

    useEffect(() => {
        getFollowingList();
        getUserChatLikes(_.map(chats, '_id'))
    }, [props.user.authenticated])

    useEffect(() => {
        if (_.get(profile, ['_id'])) {
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
        getPosts((postPage - 1) * POSTSIZE);
    }, [postPage])

    function getPosts(skip) {
        if (_.get(profile, ['_id'])) {
            if (_.isNumber(skip)) {
                skip = parseInt(skip)
            } else {
                skip = 0;
            }
            setPostLoading(true);
            client.service('savedpost').find({
                query: {
                    userId: _.get(profile, ['_id']),
                    chatType: 'carfreaks',
                    $sort: {
                        createdAt: -1,
                    },
                    $limit: POSTSIZE,
                    $populate: [
                        {
                            path: 'chatId',
                            ref: 'chats',
                            populate: [
                                {
                                    path: 'userId',
                                    ref: 'users'
                                },
                            ]
                        },
                    ],
                    $skip: skip,
                }
            }).then(res => {
                setPostLoading(false);
                if (notEmptyLength(res.data)) {
                    setPosts(postPage == 1 ? _.map(res.data, 'chatId') : posts.concat(_.map(res.data, 'chatId')));
                    getUserChatLikes(_.map(res.data, 'chatId._id'), true)
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
                    setPostLikes(concat ? _.concat(postLikes, res.data) : res.data)
                })
        }
    }

    return (
        <div>
<Row className='margin-top-md'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <InfiniteScrollWrapper
                    onScrolledBottom={() => {
                        if (arrayLengthCount(posts) < postTotal && !postLoading) {
                            setPostPage(postPage + 1);
                        }
                    }}
                    hasMore={!postLoading && arrayLengthCount(posts) < postTotal }
                >
                    <UserPosts 
                        posts={posts}
                        showAddPostCard={false}
                        postLikes={postLikes}
                        onUpdatePost={(data) => {
                            if (_.isPlainObject(data) && !_.isEmpty(data)) {
                                let newPosts = _.map(posts, function (post) {
                                    return post._id == data._id ? data : post;
                                })
                                setPosts(newPosts);
                            }
                        }}
                        onUpdatePostLikes={(data) => {
                            if (_.isArray(data) && !_.isEmpty(data)) {
                                setPostLikes(data);
                            }
                        }}
                        onEditClick={(post) => {
                            setWriteModalVisible(true);
                            setSelectedPost(post);
                            setEditMode('edit');
                        }}
                            onRemoveClick={(post) => {
                            confirmDelete(post)
                        }}
                        onRedirectToPost={(posts) => {
                            if (_.get(posts, ['chatType']) == 'event') {

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
                    />
                </InfiniteScrollWrapper>
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
                    setEditMode('edit');
                    setWriteModalVisible(true);
                    setSelectedPost(post);
                }}

                onRemoveClick={(post) => {
                    confirmDelete(post)
                    setVisible(false);
                }}

                onUpdatePost={(data) => {
                    handleSocialBoardPostChange(data);
                }}
            />
        </Row>

        <WritePostModal
        currentRecord={selectedPost}
        editMode={editMode}
        hideImage
        chatType={'socialboard'}
        visibleMode={writeModalVisible}
        onUpdatePost={(data) => {
            handleSocialBoardPostChange(data)
        }}
        onCreatePost={(data) => {
            handleSocialBoardAddPost(data)
        }}
        changeVisibleMode={(v) => {
            setWriteModalVisible(v);
            if (!v) {
                setSelectedPost({});
            }
        }} />
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
    setUser: setUser,
    updateSellerProfile: updateSellerProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserSavedCarFreakPosts)));