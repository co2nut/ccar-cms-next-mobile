import { Button, Col, Empty, Form, Icon, message, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../feathers';
import SocialBoardCard from '../carFreak/components/social-board-card';
import WritePostModal from '../carFreak/components/write-post-modal';
import { arrayLengthCount, getObjectId, notEmptyLength } from '../../common-function';
import { loading } from '../../redux/actions/app-actions';
import { withRouter } from 'next/router';
import InfiniteScrollWrapper from '../general/InfiniteScrollWrapper';
import post from '../carFreak/components/post';


var moment = require('moment');

const POSTSIZE = 11;
const UserSocialBoard = (props) => {

    const [profile, setProfile] = useState({})
    const [posts, setPosts] = useState([]);
    const [postTotal, setPostTotal] = useState(0);
    const [postPage, setPostPage] = useState(1);
    const [postLoading, setPostLoading] = useState(false);
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [chatInfo, setChatInfo] = useState({});
    const [editMode, setEditMode] = useState()
    const [writeModalVisible, setWriteModalVisible] = useState(false)
    const [selectedPost, setSelectedPost] = useState({})
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }
    }, [props.data])

    useEffect(() => {
        getUserChatLikes(_.map(posts, '_id'))
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

    useEffect(() => { 
    
    } , [posts, postLoading, postTotal])

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
                    chatType: 'socialboard',
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
                }
                setPostTotal(res.total)
            }).catch(err => {
                setPostLoading(false);
                message.error(err.message)
            });
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

    function handleSocialBoardPostChange(post) {
        let newPosts = _.map(posts, function (chat) {
            return chat._id == _.get(post, ['_id']) ? post : chat;
        });

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
                            <Row gutter={[10, 20]} className="padding-x-md">
                                {
                                    _.map(posts, function (post) {
                                        return <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <SocialBoardCard data={post} redirectPost 
                                            // postLike={_.find(userChatLikes, { chatId: getObjectId(post) })}
                                            //     onRedirectToPost={(data) => {
                                            //         if (_.isPlainObject(data) && !_.isEmpty(data) && _.get(data, ['_id'])) {
                                            //             console.log('redirect');
                                            //             setChatInfo(data);
                                            //             setVisible(true);
                                            //             setEditMode('');
                                            //         }
                                            //         }}
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
            </Col>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserSocialBoard)));