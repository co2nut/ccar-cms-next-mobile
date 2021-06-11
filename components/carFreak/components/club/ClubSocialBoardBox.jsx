import { Button, Col, Divider, Empty, Form, Icon, message, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../../../feathers';
import { clubProfileViewTypes, isNotAllowedSocialInteraction, validateViewType } from '../../config';
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

    const [posts, setPosts] = useState([]);
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

    useEffect(() => {
        setViewType(validateViewType(props.viewType))
    }, [props.viewType])


    useEffect(() => {
        getUserChatLikes(_.map(posts, '_id'))
    }, [props.user.authenticated])

    useEffect(() => {
        setClub(_.isPlainObject(props.club) && !_.isEmpty(props.club) ? props.club : {});
    }, [props.club])

    useEffect(() => {
        setPosts([]);
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

                    let newData = [];
                    newData = _.cloneDeep(posts)
                    if (postPage > 1) {
                        newData = newData.concat(res.data)
                    } else {
                        newData = res.data;
                    }
                    setPosts(newData);
                    setPostTotal(res.total);
                    setIsLoading(false);
                    getUserChatLikes(_.map(_.get(res, ['data']), '_id'), true)

                })
        }
    }

    function confirmDelete(v) {
        if (v._id) {
            client.service('chats')
                .remove(v._id).then((res) => {
                    message.success('Record Deleted')

                    let newPosts = _.filter(_.cloneDeep(posts), function (item) {
                        return item._id != _.get(res, ['_id']);
                    });

                    setPosts(newPosts || []);
                }).catch((err) => {
                    console.log('Unable to delete Chat.');
                })
        }
    }

    return (
        <React.Fragment>
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
                            if (arrayLengthCount(posts) < postTotal) {
                                setPostPage(postPage + 1);
                            }
                        }}>
                            <div className="padding-md">
                                {
                                    _.isArray(posts) && !_.isEmpty(posts) ?
                                        _.map(posts, function (post) {
                                            return (
                                                <div className="margin-bottom-md" key={`post-${getObjectId(post)}`}>
                                                    <SocialBoardCard data={post}
                                                        postLike={_.find(userChatLikes, { chatId: getObjectId(post) })}
                                                        onRedirectToPost={(data) => {
                                                            if (_.isPlainObject(data) && !_.isEmpty(data) && _.get(data, ['_id'])) {
                                                                console.log('redirect');
                                                                setChatInfo(data);
                                                                setVisible(true);
                                                                setEditMode('');
                                                            }
                                                        }}
                                                        onEditClick={(data) => {
                                                            setWriteModalVisible(true);
                                                            setSelectedPost(data);
                                                            setEditMode('edit');
                                                        }}

                                                        onRemoveClick={(data) => {
                                                            confirmDelete(data)
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
            />

            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={writePostChatType || 'socialboard'}
                visible={writeModalVisible}
                parentType="club"
                clubId={_.get(club, `_id`)}
                notify
                onUpdatePost={(data) => {
                    if (_.isPlainObject(data) && !_.isEmpty(data)) {
                        let newPosts = _.map(posts, function (item) {
                            return item._id == _.get(data, ['_id']) ? data : item;
                        });
                        setPosts(newPosts);
                    }
                }}
                onCreatePost={(data) => {
                    if (_.get(data, `chatType`) == 'socialboard') {
                        if (_.isPlainObject(data) && !_.isEmpty(data)) {
                            setPosts([data].concat(posts));
                        }
                    }
                    if (_.get(data, `chatType`) == 'carfreaks') {
                        props.router.push(routePaths.carFreaks.as().pathname)
                    }
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
                        props.router.push(`${routePaths.socialClubDetails.to}?tab=events`, routePaths.socialClubDetails.as(club, {tab : 'events'}), {shallow : true})
                    }
                }}
            ></WriteEventModal>


            <ClubJoinModal visible={joinClubModalVisible} club={club} onCancel={() => { setJoinClubModalVisible(false) }} ></ClubJoinModal>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ClubSocialBoardBox)));