import { Button, Col, Divider, Empty, Form, Icon, message, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../../../feathers';
import { clubProfileViewTypes, isNotAllowedSocialInteraction, patchReduxPosts, validateViewType } from '../../config';
import EventPost from '../event-post';
import PostCollapse from '../post-collapse';
import WriteEventModal from '../write-event-modal';
import WritePostModal1 from '../write-post-modal-1';
import ClubBackdrop from './club-backdrop';
import { loading } from '../../../../redux/actions/app-actions';
import WindowScrollLoadWrapper from '../../../general/WindowScrollLoadWrapper';
import { arrayLengthCount, getObjectId } from '../../../../common-function';
import { useMediaQuery } from 'react-responsive';
import ClubJoinModal from './ClubJoinModal';
import UserAvatar from '../../../general/UserAvatar';
import { eventIcon, tagPeopleIcon } from '../../../../icon';
import SocialBoardCard from '../social-board-card';
import WritePostDrawer from '../WritePostDrawer';
import PostDrawer from '../PostDrawer';
import { routePaths } from '../../../../route';
import { fetchCarFreakPosts, fetchUserPostLikeIds } from '../../../../redux/actions/carfreak.action';

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


const PAGE_SIZE = 10;
const BOX_HEIGHT = 300;

const ClubSocialBoardBox = (props) => {

    const [postTotal, setPostTotal] = useState(0);
    const [postPage, setPostPage] = useState(1);

    const [club, setClub] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const [joinClubModalVisible, setJoinClubModalVisible] = useState(false);

    const [selectedPost, setSelectedPost] = useState({});
    const [writePostChatType, setWritePostChatType] = useState('socialboard');
    const [writeModalVisible, setWriteModalVisible] = useState(false);

    const [writeEventVisible, setWriteEventVisible] = useState(false);
    const [eventEditMode, setEventEditMode] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    const [viewType, setViewType] = useState('non-member');

    const [userChatLikes, setUserChatLikes] = useState([]);
    const [chatInfo, setChatInfo] = useState({});
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState('');
    const [writePostVisible, setWritePostVisible] = useState(false);
    const [writePostEditMode, setWritePostEditMode] = useState(false);

    useEffect(() => {
        setViewType(validateViewType(props.viewType))
    }, [props.viewType])


    useEffect(() => {

        if (_.isPlainObject(chatInfo) && !_.isEmpty(chatInfo)) {
            let newChatInfo = _.find(_.get(props.carfreak, 'carFreakPosts') || [], function (chat) {
                return chat._id == chatInfo._id;
            })
            setChatInfo(newChatInfo || {})
        }

    }, [props.carfreak.carFreakPosts])

    useEffect(() => {
        if (props.user.authenticated) {
            getUserChatLikes(_.map(_.get(props.carfreak, 'carFreakPosts') || [], '_id')).then(userLikes => {
                props.fetchUserPostLikeIds(_.map(_.get(userLikes, ['data']) || [], 'chatId'))
            })
        } else {
            props.fetchUserPostLikeIds([])
        }

    }, [props.user.authenticated])

    useEffect(() => {
        setClub(_.isPlainObject(props.club) && !_.isEmpty(props.club) ? props.club : {});
    }, [props.club])

    useEffect(() => {
        fetchCarFreakPosts([])
        setUserChatLikes([]);
        if (postPage == 1) {
            getPosts(0);
        } else {
            setPostPage(1);
        }
    }, [club])

    useEffect(() => {
        getPosts((postPage - 1) * PAGE_SIZE);
    }, [postPage])

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

    function patchUserCarFreakPosts(posts = [], mode = 'init') {

        let data = patchReduxPosts(_.get(props.carfreak, `carFreakPosts`), posts, mode);
        if (!_.isEqual(data, _.get(props.carfreak, `carFreakPosts`))) {
            props.fetchCarFreakPosts(data);
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


    function getPosts(skip) {
        skip = skip || 0

        if (_.get(club, `_id`)) {
            let query = {
                chatType: 'socialboard',
                parentType: {
                    $in: ['club', 'clubEvent']
                },
                clubId: _.get(club, `_id`),
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
                        ]
                    },
                    {
                        path: 'clubId',
                        ref: 'clubs'
                    }
                ],
                $limit: PAGE_SIZE,
                $sort: { _id: -1 },
                $skip: skip,
            }


            setIsLoading(true)
            client.service('chats')
                .find({
                    query: {
                        ...query,
                    }
                })
                .then((res) => {

                    patchUserCarFreakPosts(res.data, postPage == 1 ? 'init' : 'concat');
                    setPostTotal(res.total)
                    getUserChatLikes(_.map(_.get(res, ['data']), '_id')).then(userLikes => {
                        patchUserPostLikeIds(_.map(_.get(userLikes, ['data']) || [], 'chatId'));
                        setIsLoading(false)
                    })

                })
        }
    }


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

    return (
        <React.Fragment>

<Tablet>
                <ClubBackdrop viewType={viewType} club={club}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="flex-justify-end flex-items-align-center">
                                <span className='d-inline-block ' >
                                    <Button size="medium" className="border-ccar-yellow" onClick={(e) => {
                                        if (isNotAllowedSocialInteraction(club, viewType)) {
                                            setJoinClubModalVisible(true);
                                        } else if (viewType != clubProfileViewTypes[3] || viewType != clubProfileViewTypes[2]) {
                                            setWritePostEditMode(false);
                                            setWritePostVisible(true);
                                        }
                                    }}  ><Icon type="edit" /> Write a Post</Button>
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <WindowScrollLoadWrapper scrollRange={document.body.scrollHeight * 0.5} onScrolledBottom={() => {
                                if (arrayLengthCount(posts) < postTotal) {
                                    setPostPage(postPage + 1);
                                }
                            }}>
                                <div className="padding-md">
                                    {
                                        _.isArray(posts) && !_.isEmpty(posts) ?
                                            _.map(posts, function (post) {
                                                return (
                                                    <div className="margin-bottom-md">
                                                        <PostCollapse
                                                            data={post}
                                                            readOnly={isNotAllowedSocialInteraction(club, viewType)}
                                                            postLike={_.find(userChatLikes, { chatId: post._id })}
                                                            onEditClick={(data) => {
                                                                if (_.isPlainObject(data) && !_.isEmpty(data)) {
                                                                    setWritePostEditMode(true);
                                                                    setSelectedPost(data);
                                                                    setWritePostVisible(true);
                                                                }
                                                            }}
                                                            clubId={_.get(club, `_id`)}
                                                            onRemoveClick={(data) => {
                                                                confirmDelete(data)
                                                            }}
                                                            onLikeClick={() => {
                                                                if(isNotAllowedSocialInteraction(club, viewType)){
                                                                    setJoinClubModalVisible(true)
                                                                }
                                                            }}
                                                            onReplyClick={() => {
                                                                if(isNotAllowedSocialInteraction(club, viewType)){
                                                                    setJoinClubModalVisible(true)
                                                                }
                                                            }}
                                                        ></PostCollapse>
                                                    </div>
                                                )
                                            })
                                            :
                                            <div className="padding-md flex-items-align-center flex-justify-center">
                                                <Empty></Empty>
                                            </div>
                                    }
                                </div>
                            </WindowScrollLoadWrapper>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                            <div className="flex-justify-center flex-items-align-center" style={{ height: 30 }}>
                                {
                                    isLoading ?
                                        <Icon type="loading" style={{ fontSize: 30 }} />
                                        :
                                        null
                                }
                            </div>

                        </Col>
                    </Row>
                </ClubBackdrop>
            </Tablet>

            <Mobile>
            <ClubBackdrop viewType={viewType} club={club}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="thin-border relative-wrapper width-100 padding-md">
                            <div style={{ display: 'inline-block' }} className='width-20 height-100'>
                                <Row gutter={[0, 20]} className="width-100">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <UserAvatar data={_.get(props.user, ['info', 'user'])} size={50} />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ display: 'inline-block', verticalAlign: 'top' }} className='width-70 height-100 margin-top-md padding-left-md' onClick={(e) => {
                                if (isNotAllowedSocialInteraction(club, viewType)) {
                                    setJoinClubModalVisible(true);
                                } else if (viewType != clubProfileViewTypes[3] || viewType != clubProfileViewTypes[2]) {
                                    setWritePostChatType('socialboard')
                                    setEditMode(null);
                                    setWriteModalVisible(true);
                                    setSelectedPost(null);
                                }
                            }}  >
                                <Row gutter={[0, 20]} className="width-100">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: 0 }}>
                                        <p style={{ marginBottom: 0 }}> What's on your mind? </p>
                                    </Col>
                                </Row>
                            </div>
                            <Divider style={{ margin: 0 }} />
                            <div style={{ textAlign: 'center', marginTop: '5px' }}>
                                <span style={{ marginRight: '10px' }}>
                                    Tag People <img src={tagPeopleIcon} style={{ marginLeft: '5px' }} />
                                </span>
                                <Divider type="vertical" style={{ height: '18px' }} />
                                <span style={{ marginLeft: '20px' }} onClick={(e) => {
                                    setEventEditMode(false);
                                    setWriteEventVisible(true);
                                    setSelectedEvent({});
                                }} >
                                    Event <img src={eventIcon} style={{ marginLeft: '5px' }} />
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <WindowScrollLoadWrapper scrollRange={document.body.scrollHeight * 0.5} onScrolledBottom={() => {
                            if (arrayLengthCount(_.get(props.carfreak, `carFreakPosts`)) < postTotal) {
                                setPostPage(postPage + 1);
                            }
                        }}>
                            <div className="padding-md">
                                {
                                    _.isArray(_.get(props.carfreak, `carFreakPosts`)) && !_.isEmpty(_.get(props.carfreak, `carFreakPosts`)) ?
                                        _.map(_.get(props.carfreak, `carFreakPosts`), function (post) {
                                            return (
                                                <div className="margin-bottom-md" key={`post-${getObjectId(post)}`}>
                                                    <SocialBoardCard data={post}
                                                        readOnly={isNotAllowedSocialInteraction(club, viewType)}
                                                        postLike={_.find(userChatLikes, { chatId: getObjectId(post) })}
                                                        onRedirectToPost={(data) => {

                                                            if(isNotAllowedSocialInteraction(club, viewType)){
                                                                setJoinClubModalVisible(true)
                                                            }else{
                                                                setChatInfo(data);
                                                                setVisible(true);
                                                                setEditMode('');
                                                            }
                                                        }}
                                                        onLikeClick={() => {
                                                            if(isNotAllowedSocialInteraction(club, viewType)){
                                                                setJoinClubModalVisible(true)
                                                            }
                                                        }}
                                                        onEditClick={(data) => {
                                                            if(isNotAllowedSocialInteraction(club, viewType)){
                                                                setJoinClubModalVisible(true)
                                                            }else{
                                                                setWriteModalVisible(true);
                                                                setSelectedPost(data);
                                                                setEditMode('edit');
                                                            }
                                                        }}

                                                        onRemoveClick={(data) => {
                                                            if(isNotAllowedSocialInteraction(club, viewType)){
                                                                setJoinClubModalVisible(true)
                                                            }else{
                                                                confirmDelete(data)
                                                            }
                                                        }}
                                                        onUpdatePost={(data) => {
                                                            patchUserCarFreakPosts(_.compact([data]), 'update');
                                                        }}
                                                    />
                                                </div>
                                            )
                                        })
                                        :
                                        <div className="padding-md flex-items-align-center flex-justify-center">
                                            <Empty></Empty>
                                        </div>
                                }
                            </div>
                        </WindowScrollLoadWrapper>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                        <div className="flex-justify-center flex-items-align-center" style={{ height: 30 }}>
                            {
                                isLoading ?
                                    <Icon type="loading" style={{ fontSize: 30 }} />
                                    :
                                    null
                            }
                        </div>

                    </Col>
                </Row>
            </ClubBackdrop>
            </Mobile>
            

            <PostDrawer
                data={chatInfo}
                visible={visible}
                editMode={editMode}
                pinnable={arrayLengthCount(_.get(chatInfo , `pinnedComments`)) < 3 && getObjectId(_.get(chatInfo, ['userId'])) && _.get(props.user, ['info', 'user', '_id']) == getObjectId(_.get(chatInfo, ['userId']))}
                onCancel={() => {
                    setVisible(false);
                    setChatInfo({});
                }
                }
                onEditClick={(data) => {
                    setEditMode('edit');
                    setWriteModalVisible(true);
                    setSelectedPost(data);
                }}
                onUpdatePost={(data) => {
                    patchUserCarFreakPosts(_.compact([data]), 'update');
                }}
                onRemoveClick={(data) => {
                    confirmDelete(data)
                    setVisible(false);
                }}
            />

            <WritePostModal1
                visible={writePostVisible}
                editMode={writePostEditMode}
                onCancel={() => {
                    setWritePostVisible(false);
                }}
                parentType="club"
                clubId={_.get(club, `_id`)}
                data={selectedPost}
                notify
                onCreatePost={(post) => {
                    if (_.isPlainObject(post) && !_.isEmpty(post)) {
                        setPosts([post].concat(posts));
                    }
                }}
                hideChatType
                chatType="socialboard"
                onUpdatePost={(data) => {
                    if (_.isPlainObject(data) && !_.isEmpty(data)) {
                        let newPosts = _.map(posts, function (item) {
                            return item._id == _.get(data, ['_id']) ? data : item;
                        });
                        setPosts(newPosts);
                    }
                }}
            >
            </WritePostModal1>
            
            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={writePostChatType || 'socialboard'}
                visible={writeModalVisible}
                parentType="club"
                clubId={_.get(club, `_id`)}
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
                    setSelectedEvent({});
                    setEventEditMode(false);
                    setWriteEventVisible(false);
                }}
                type="club"
                clubId={eventEditMode ? _.get(selectedPost, ['eventId', 'clubId', '_id']) : getObjectId(club)}
                creator={eventEditMode ? _.get(selectedPost, ['eventId', 'clubId']) : club}
                notify
                onCreate={(event) => {
                    if (_.isPlainObject(event) && !_.isEmpty(event)) {
                        props.router.push(`${routePaths.socialClubDetails.to}?tab=events`, routePaths.socialClubDetails.as(club, { tab: 'events' }), { shallow: true })
                    }
                }}
            ></WriteEventModal>


            <ClubJoinModal
                onChange={(res) => {
                    if (_.get(res, ['type']) == 'approved') {
                        window.location.reload();
                    }
                }}
                visible={joinClubModalVisible} club={club} onCancel={() => { setJoinClubModalVisible(false) }} ></ClubJoinModal>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    carfreak: state.carfreak,
});


const mapDispatchToProps = {
    loading: loading,
    fetchUserPostLikeIds,
    fetchCarFreakPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ClubSocialBoardBox)));