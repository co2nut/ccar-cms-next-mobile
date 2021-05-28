import { Col, Empty, Form, Row, Affix, Button, Dropdown, message, Menu, Avatar, Icon } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayLengthCount, notEmptyLength } from '../../common-function';
import {
    loading,
    loginMode, updateActiveMenu
} from '../../redux/actions/app-actions';
import PostModal from '../carFreak/components/post-modal';
import PostDrawer from '../carFreak/components/PostDrawer';
import WritePostModal from '../carFreak/components/write-post-modal';
import WritePostDrawer from '../carFreak/components/WritePostDrawer';
import UserPost from './UserPost';
import client from '../../feathers';
import {createCarFreakIcon, createSocialBoardIcon} from '../../icon';

var moment = require('moment');


const defaultHeight = 100;

const UserPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [postLikes, setPostLikes] = useState([]);
    const [writePostVisible, setWritePostVisible] = useState(false);
    const [postVisible, setPostVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const [top, setTop] = useState(650);
    const [chatInfo, setChatInfo] = useState({});
    const [chats, setChats] = useState([])
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState()
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [writePostChatType, setWritePostChatType] = useState('carfreaks');
    const [writeModalVisible, setWriteModalVisible] = useState(false)
    const [followingList, setFollowingList] = useState([]);
    const [menuOpened, setMenuOpened] = useState(false)

    useEffect(() => {

        if (_.isArray(props.posts) && notEmptyLength(props.posts)) {
            setPosts(props.posts)
        } else {
            setPosts([]);
        }

    }, [props.posts])

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

        if (_.isArray(props.postLikes) && notEmptyLength(props.postLikes)) {
            setPostLikes(props.postLikes)
        } else {
            setPostLikes([]);
        }
    }, [props.postLikes])

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

    return (
        <React.Fragment>
            
            <Row type='flex' gutter={props.gutter ? props.gutter : [10, 10]}>
                {/* {
                    props.showAddPostCard ?
                        <Col xs={props.xs ? props.xs : 24} sm={props.sm ? props.sm : 24} md={props.md ? props.md : 12} lg={props.lg ? props.lg : 6} xl={props.xl ? props.xl : 6}>
                            <div className="width-100 background-white relative-wrapper cursor-pointer" style={{ height: defaultHeight, position: 'relative' }} onClick={(e) => { setWritePostVisible(true) }}>
                                <img src="/assets/upload_photo.png" style={{ width: defaultHeight * 0.5, height: defaultHeight * 0.5 }} className='absolute-center' />
                                <div className="flex-justify-center flex-items-align-center subtitle1 absolute-center" style={{ paddingTop: defaultHeight * 0.5 + 30 }}>
                                    POST / UPLOAD PHOTO
                                </div>
                            </div>
                        </Col>
                        :
                        null
                } */}
                {
                    posts.map(function (post, i) {
                        return (
                            <Col key={'colPost' + i} xs={props.xs ? props.xs : 8} sm={props.sm ? props.sm : 8} md={props.md ? props.md : 12} lg={props.lg ? props.lg : 6} xl={props.xl ? props.xl : 6}>
                                <UserPost height={defaultHeight} post={post} onClick={(post) => { setSelectedPost(post); setPostVisible(true); }} />
                                {/* <UserPost height={defaultHeight} post={post} redirectPost
                                    onEditClick={(post) => {
                                    setWriteModalVisible(true);
                                    setSelectedPost(post);
                                    setEditMode('edit');
                                }}
                                    onRemoveClick={(post) => {
                                        confirmDelete(post)
                                    }}  /> */}
                            </Col>
                        )
                    })
                }
                {
                    !props.showAddPostCard && arrayLengthCount(posts) <= 0 ?
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="width-100" style={{ height: 400 }}>
                                <Empty></Empty>
                            </div>
                        </Col>
                        :
                        null
                }
            </Row>

            {/* <WritePostModal
                visibleMode={writePostVisible}
                changeVisibleMode={(e) => { setWritePostVisible(e) }}
                chatType={'carfreaks'}
                onCreatePost={(data) => {
                    if (props.onCreatePost) {
                        props.onCreatePost(data)
                    }
                }}
            ></WritePostModal>
            <PostModal
                postLike={_.find(postLikes, { chatId: selectedPost._id })}
                onPostLikeChange={(liked, data) => {
                    let newPostLikes = postLikes;
                    if (liked) {
                        newPostLikes = _.concat(newPostLikes, [data]);
                    } else {
                        newPostLikes = _.filter(newPostLikes, function (like) {
                            return _.get(like, ['chatId']) != _.get(data, ['chatId']);
                        })
                    }

                    if (props.onUpdatePostLikes) {
                        props.onUpdatePostLikes(newPostLikes);
                    }
                }}
                visibleMode={postVisible}
                changeVisibleMode={(e) => { setPostVisible(e); setSelectedPost({}) }}
                chatInfo={_.isPlainObject(selectedPost) && !_.isEmpty(selectedPost) ? selectedPost : {}}
                onUpdatePost={(data) => {
                    if (props.onUpdatePost) {
                        props.onUpdatePost(data);
                    }
                }}
            /> */}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    sellCars: state.sellCars,
    productsList: state.productsList,
    app: state.app,
    user: state.user,
    sellerProfile: state.sellerProfile,
});


const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
    loading: loading,
    loginMode: loginMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserPosts)));