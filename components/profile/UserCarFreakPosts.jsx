import { Col, Form, Icon, message, Row, Affix, Dropdown, Menu, Avatar } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayLengthCount, getObjectId, notEmptyLength, windowScroll } from '../../common-function';
import client from '../../feathers';
import { loading } from '../../redux/actions/app-actions';
import { updateSellerProfile } from '../../redux/actions/sellerProfile-actions';
import WindowScrollLoadWrapper from '../general/WindowScrollLoadWrapper';
import UserPosts from './UserPosts';
import InfiniteScrollWrapper from '../general/InfiniteScrollWrapper';
import PostDrawer from '../carFreak/components/PostDrawer';
import WritePostDrawer from '../carFreak/components/WritePostDrawer';
import { createCarFreakIcon, createSocialBoardIcon } from '../../icon';
import { routePaths } from '../../route';

var moment = require('moment');

const POSTSIZE = 11;
const UserCarFreakPosts = (props) => {

    const [profile, setProfile] = useState({})
    const [postLikes, setPostLikes] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postTotal, setPostTotal] = useState(0);
    const [postPage, setPostPage] = useState(1);
    const [postLoading, setPostLoading] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false)
    const [chatInfo, setChatInfo] = useState({});
    const [chats, setChats] = useState([])
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState()
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});
    const [writePostChatType, setWritePostChatType] = useState('carfreaks');
    const [writeModalVisible, setWriteModalVisible] = useState(false)

    useEffect(() => {
        getUserChatLikes(_.map(posts, '_id'))
    }, [props.user.authenticated])

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

    }, [posts, postTotal, postLoading])

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
            client.service('chats').find({
                query: {
                    createdBy: _.get(profile, ['_id']),
                    chatType: 'carfreaks',
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
                    setPostTotal(res.total)
                    getUserChatLikes(_.map(res.data, '_id'), true)
                }
            }).catch(err => {
                setPostLoading(false);
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

    function confirmDelete(v) {
        if (v._id) {
            client.service('chats')
                .remove(v._id).then((res) => {
                    message.success('Record Deleted')
                    setPosts(_.filter(posts, (post) => {
                        return getObjectId(post) != getObjectId(res)
                    }))
                }).catch((err) => {
                    console.log('Unable to delete Chat.');
                })
        }

    }


    function handlePostChange(post) {
        let newPosts = _.map(posts, function (chat) {
            return chat._id == _.get(post, ['_id']) ? post : chat;
        });

        if(getObjectId(chatInfo) == getObjectId(post)){
            setChatInfo(post)
        }

        setPosts(newPosts);
    }
    return (
        <div>
            {
                menuOpened ?
                    <div className="background-black-opacity-50 absolute-center" style={{ zIndex: 2 }} >
                    </div>
                    :
                    null
            }
            <Row className='margin-top-md'>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                    <InfiniteScrollWrapper
                        onScrolledBottom={() => {
                            if (arrayLengthCount(posts) < postTotal && !postLoading) {
                                setPostPage(postPage + 1);
                            }
                        }}
                        hasMore={!postLoading && arrayLengthCount(posts) < postTotal}

                    >
                        <UserPosts
                            posts={posts}
                            postLikes={postLikes}
                            redirectPost
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
                        />
                    </InfiniteScrollWrapper>

                    <Affix offsetBottom={70} style={{ position: 'absolute', right: 15 }} >
                        <Dropdown trigger="click" placement="topLeft"
                            getPopupContainer={() => typeof (document) != undefined ? document.getElementById('writePostAffix') : null}
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

                            <span className='d-inline-block width-100' id="writePostAffix" >
                                <Avatar size={50} className="background-ccar-button-yellow" icon={menuOpened ? <Icon type="close" className="white" /> : <Icon type="plus" className="white" />}
                                />
                            </span>
                        </Dropdown>
                    </Affix>
                </Col>
            </Row>

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
                    handlePostChange(data);
                }}
            />

            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={writePostChatType || 'carfreaks'}
                visible={writeModalVisible}
                notify
                onUpdatePost={(data) => {
                    handlePostChange(data);
                }}
                onCreatePost={(data) => {

                    if (_.get(data, `chatType`) == 'carfreaks') {
                        setPosts(_.compact(_.concat([data], posts)));
                    }
                    if (_.get(data, `chatType`) == 'socialboard') {
                        props.router.push(`${routePaths.profile.to}?tabKey=socialboard`, routePaths.profile.as(profile, { tabKey: 'socialboard' }), { shallow: true })
                    }
                }}
                onClose={(v) => {
                    setMenuOpened(false)
                    setWriteModalVisible(false);
                    setSelectedPost({});
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
    updateSellerProfile: updateSellerProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserCarFreakPosts)));