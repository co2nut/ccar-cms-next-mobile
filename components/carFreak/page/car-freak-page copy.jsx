
import { Button, Col, Empty, Form, Icon, message, Radio, Row, Tooltip } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'next/dist/client/router';
import { v4 } from 'uuid';
import client from '../../../feathers';
import { earthGreyIcon, followingGreyIcon } from '../../../icon';
import LayoutV2 from '../../Layout-V2';
import { notEmptyLength } from '../../profile/common-function';
import CarFreakLayout from '../components/car-freak-layout';
import Post from '../components/post';
import PostModal from '../components/post-modal';
import WritePostModal from '../components/write-post-modal';
import { carFreakGlobalSearch } from '../config';
import WindowScrollLoadWrapper from '../../commonComponent/window-scroll-load-wrapper';

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

    const [chats, setChats] = useState([])
    const [chatInfo, setChatInfo] = useState({});
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState('');
    const [selectedPost, setSelectedPost] = useState({});
    const [writeModalVisible, setWriteModalVisible] = useState(false);
    const [scope, setScope] = useState('public');
    const [userChatLikes, setUserChatLikes] = useState([]);
    const [chatPage, setChatPage] = useState(1);

    const [followingList, setFollowingList] = useState([]);

    const [totalChat, setTotalChat] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

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
                            select: 'avatar _id fullName firstName lastName freakId'
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
            <LayoutV2 backgroundImage={`url("/banner/1 ??? 1.png")`} searchTypes={carFreakGlobalSearch} enterSearchCarFreaks >

                <Desktop>
                    <CarFreakLayout>
                        <Row gutter={[15, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="width-100 flex-justify-end flex-items-align-center">
                                    <span className='d-inline-block margin-right-md' >
                                        <Button size="large" className="border-ccar-yellow" onClick={(e) => {
                                            setEditMode(null);
                                            setWriteModalVisible(true);
                                            setSelectedPost(null);
                                        }}  ><Icon type="edit" /> Write a Post</Button>
                                    </span>
                                    <span className='d-inline-block' >
                                        <RadioGroup className=" round-border-radio-button" value={scope} buttonStyle="solid">
                                            <Radio.Button className="round-border-right" value="public" onClick={(e) => {
                                                setScope('public')
                                            }}>
                                                <Tooltip title="Public" placement="top">
                                                    <img src={earthGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                </Tooltip>
                                            </Radio.Button>
                                            <Radio.Button className="round-border-left" value="following" onClick={(e) => {
                                                setScope('following')
                                            }}>
                                                <Tooltip title="Following" placement="top">
                                                    <img src={followingGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                </Tooltip>
                                            </Radio.Button>
                                        </RadioGroup>
                                    </span>
                                </div>
                            </Col>
                            <WindowScrollLoadWrapper scrollRange={document.body.scrollHeight * 0.5} onScrolledBottom={() => {
                                if (chatPage * PAGE_SIZE < totalChat) {
                                    setChatPage(chatPage + 1);
                                }
                            }}>
                                {
                                    _.isArray(chats) && notEmptyLength(chats) ?
                                        <React.Fragment>
                                            {
                                                _.map(chats, function (v, i) {
                                                    return (
                                                        <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`post-${v4()}`}>
                                                            <Post data={v}
                                                                className="background-white thin-border round-border box-shadow-strong"
                                                                postLike={_.find(userChatLikes, { chatId: v._id })}
                                                                onRedirectToPost={(post) => {
                                                                    if (_.get(post, ['chatType']) == 'event') {

                                                                        const win = window.open(`/event-post/${_.get(post, ['_id'])}`, '_blank');
                                                                        if (win != null) {
                                                                            win.focus();
                                                                        }
                                                                    } else {
                                                                        setChatInfo(post);
                                                                        setVisible(true);
                                                                        setEditMode('');
                                                                    }
                                                                }}
                                                                onEditClick={(post) => {
                                                                    setEditMode('edit');
                                                                    setWriteModalVisible(true);
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
                                            }

                                        </React.Fragment>
                                        :
                                        !isLoading ?
                                            <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                            : <div></div>
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
                </Desktop>

                <Tablet>
                    <CarFreakLayout>
                        <Row gutter={[15, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="width-100 flex-justify-end flex-items-align-center">
                                    <span className='d-inline-block margin-right-md' >
                                        <Button size="large" className="border-ccar-yellow" onClick={(e) => {
                                            setEditMode(null);
                                            setWriteModalVisible(true);
                                            setSelectedPost(null);
                                        }}  ><Icon type="edit" /> Write a Post</Button>
                                    </span>
                                    <span className='d-inline-block' >
                                        <RadioGroup className=" round-border-radio-button" value={scope} buttonStyle="solid">
                                            <Radio.Button className="round-border-right" value="public" onClick={(e) => {
                                                setScope('public')
                                            }}>
                                                <Tooltip title="Public" placement="top">
                                                    <img src={earthGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                </Tooltip>
                                            </Radio.Button>
                                            <Radio.Button className="round-border-left" value="following" onClick={(e) => {
                                                setScope('following')
                                            }}>
                                                <Tooltip title="Following" placement="top">
                                                    <img src={followingGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                </Tooltip>
                                            </Radio.Button>
                                        </RadioGroup>
                                    </span>
                                </div>
                            </Col>
                            {
                                _.isArray(chats) && notEmptyLength(chats) ?
                                    <React.Fragment>
                                        {
                                            _.map(chats, function (v, i) {
                                                return (
                                                    <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`post-${v4()}`}>
                                                        <Post data={v}
                                                            className="background-white thin-border round-border box-shadow-strong"
                                                            postLike={_.find(userChatLikes, { chatId: v._id })}
                                                            onRedirectToPost={(post) => {
                                                                setChatInfo(post);
                                                                setVisible(true);
                                                                setEditMode('');
                                                            }}
                                                            onEditClick={(post) => {
                                                                setEditMode('edit');
                                                                setWriteModalVisible(true);
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
                                        }

                                    </React.Fragment>
                                    :
                                    !isLoading ?
                                        <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                        : <div></div>
                            }

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
                    <CarFreakLayout>
                        <Row gutter={[15, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="width-100 flex-justify-end flex-items-align-center">
                                    <span className='d-inline-block margin-right-md' >
                                        <Button size="large" className="border-ccar-yellow" onClick={(e) => {
                                            setEditMode(null);
                                            setWriteModalVisible(true);
                                            setSelectedPost(null);
                                        }}  ><Icon type="edit" /> Write a Post</Button>
                                    </span>
                                    <span className='d-inline-block' >
                                        <RadioGroup className=" round-border-radio-button" value={scope} buttonStyle="solid">
                                            <Radio.Button className="round-border-right" value="public" onClick={(e) => {
                                                setScope('public')
                                            }}>
                                                <Tooltip title="Public" placement="top">
                                                    <img src={earthGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                </Tooltip>
                                            </Radio.Button>
                                            <Radio.Button className="round-border-left" value="following" onClick={(e) => {
                                                setScope('following')
                                            }}>
                                                <Tooltip title="Following" placement="top">
                                                    <img src={followingGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                </Tooltip>
                                            </Radio.Button>
                                        </RadioGroup>
                                    </span>
                                </div>
                            </Col>
                            {
                                _.isArray(chats) && notEmptyLength(chats) ?
                                    <React.Fragment>
                                        {
                                            _.map(chats, function (v, i) {
                                                return (
                                                    <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`post-${v4()}`}>
                                                        <Post data={v}
                                                            className="background-white thin-border round-border box-shadow-strong"
                                                            postLike={_.find(userChatLikes, { chatId: v._id })}
                                                            onRedirectToPost={(post) => {
                                                                setChatInfo(post);
                                                                setVisible(true);
                                                                setEditMode('');
                                                            }}
                                                            onEditClick={(post) => {
                                                                setEditMode('edit');
                                                                setWriteModalVisible(true);
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
                                        }

                                    </React.Fragment>
                                    :
                                    !isLoading ?
                                        <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                        : <div></div>
                            }

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
                </Mobile>


            </LayoutV2>
            <PostModal
                chatInfo={chatInfo}
                visibleMode={visible}
                editMode={editMode}
                postLike={_.find(userChatLikes, { chatId: _.get(chatInfo, ['_id']) })}
                changeVisibleMode={(v) => {
                    setVisible(v);
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

                onUpdatePost={(data) => {
                    handlePostChange(data);
                }}
            />

            <WritePostModal
                currentRecord={selectedPost}
                editMode={editMode}
                chatType={'carfreaks'}
                visibleMode={writeModalVisible}
                onUpdatePost={(data) => {
                    handlePostChange(data);
                }}
                onCreatePost={(data) => {
                    handleOnAddPost(data)
                }}
                changeVisibleMode={(v) => {
                    setWriteModalVisible(v);
                    if (!v) {
                        setSelectedPost({});
                    }
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(CarFreakPage)));