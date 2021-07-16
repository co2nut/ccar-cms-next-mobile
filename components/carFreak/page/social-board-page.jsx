import { Button, Col, Empty, Icon, Input, message, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import TrendingSocialBoardBox from '../components/trending-social-board-box';
import { carFreakGlobalSearch } from '../config';
import { loginMode } from '../../../redux/actions/app-actions';
import { fetchCarFreakPosts, fetchEditedPost } from '../../../redux/actions/carfreak.action';
import client from '../../../feathers';
import LayoutV2 from '../../general/LayoutV2';
import { arrayLengthCount, getObjectId, notEmptyLength } from '../../../common-function';
import CarFreakLayout from '../components/car-freak-layout';
import SocialBoardCard from '../components/social-board-card';
import WritePostModal from '../components/write-post-modal';
import { withRouter } from 'next/router';
import { routePaths } from '../../../route';
import WritePostDrawer from '../components/WritePostDrawer';
import PostDrawer from '../components/PostDrawer';
import SocialBoardCardTablet from '../components/social-board-card-tablet';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
// const Mobile = ({ children }) => {
//     const isMobile = useMediaQuery({ maxWidth: 767 })
//     const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
//     return isMobile || isTablet ? children : null
// }
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

const banner = 'hands-on-wheel.jpg'
const ads = '20-Car-Dealership-Promotion-Ideas.jpg'
const { Search } = Input;
const TRENDING_PAGE_SIZE = 4;


const PAGE_SIZE = 36;

const SocialBoardPage = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [editMode, setEditMode] = useState()
    const [writeModalVisible, setWriteModalVisible] = useState(false)
    const [selectedPost, setSelectedPost] = useState({})


    const [socialBoards, setSocialBoards] = useState([]);
    const [socialBoardPage, setSocialBoardPage] = useState(1);
    const [totalSocialBoard, setTotalSocialBoard] = useState(0);
    const [userChatLikes, setUserChatLikes] = useState([]);


    const [chatInfo, setChatInfo] = useState({});
    const [visible, setVisible] = useState(false);

    const [writePostChatType, setWritePostChatType] = useState('socialboard');

    useEffect(() => {
        getSocialBoardData((socialBoardPage - 1) * PAGE_SIZE)
    }, [socialBoardPage])

    useEffect(() => {
        getUserChatLikes(_.map(socialBoards, '_id'))
    }, [props.user.authenticated])

    function getSocialBoardData(skip, type) {

        skip = skip || 0
        let title = ''

        let sortingStr = { $sort: { _id: -1 } }
        setIsLoading(true);
        client.service('chats')
            .find({
                query: {
                    ...title,
                    chatType: 'socialboard',
                    parentType: {
                        $ne: 'club',
                    },
                    $populate: 'userId',
                    $limit: PAGE_SIZE,
                    ...sortingStr,
                    $skip: skip,

                }
            })
            .then((res) => {

                setIsLoading(false);
                setSocialBoards(socialBoards.concat(res.data));
                setTotalSocialBoard(res.total)
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
        let posts = _.map(socialBoards, function (chat) {
            return chat._id == _.get(post, ['_id']) ? post : chat;
        });

        setSocialBoards(posts);
    }

    function handleSocialBoardAddPost(post) {
        if (_.isPlainObject(post) && !_.isEmpty(post)) {
            let posts = _.concat([post], socialBoards)
            setSocialBoards(posts);
        }
    }

    function handleRemoveSocialBoardPost(post) {
        let posts = _.filter(socialBoards, function (chat) {
            return chat._id != _.get(post, ['_id']);
        });

        setSocialBoards(posts);
    }
    return (
        <LayoutV2 searchTypes={carFreakGlobalSearch} enterSearchCarFreaks showCompareCarButton={false} scrollRange={document.body.scrollHeight * 0.5} onScrolledBottom={() => {
            if (arrayLengthCount(socialBoards) < totalSocialBoard) {
                setSocialBoardPage(socialBoardPage + 1);
            }
        }} hideOpenApp>

            <Tablet>
                <CarFreakLayout>
                    <Row gutter={[10, 10]}> 
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="flex-justify-end flex-items-align-center margin-bottom-lg">
                                <span className='d-inline-block margin-right-md' >
                                    <Button size="large" className="border-ccar-yellow" onClick={(e) => {
                                        setEditMode(null);
                                        setWriteModalVisible(true);
                                        setSelectedPost(null);
                                    }}  ><Icon type="edit" /> Write a Post</Button>
                                </span>
                            </div>
                            {
                                _.isArray(socialBoards) && notEmptyLength(socialBoards) ?
                                    <Row gutter={[10, 10]} justify="center">
                                        {
                                            socialBoards.map(function (post, i) {
                                                return (
                                                    <Col key={'chats' + i} className="gutter-row"
                                                        xs={12} sm={12} md={12} lg={12} xl={12}
                                                    >
                                                        <SocialBoardCardTablet data={post} 
                                                            onRedirectToPost={(data) => {
                                                                if (_.isPlainObject(data) && !_.isEmpty(data) && _.get(data, ['_id'])) {
                                                                    props.router.push(`/social-board/${data._id}`, undefined, { shallow : false })
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

                                                        />
                                                    </Col>
                                                )
                                            })

                                        }
                                    </Row>
                                    :

                                    !isLoading ?
                                        <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                        :
                                        <div></div>
                            }
                        </Col>
                        {/* <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                            <TrendingSocialBoardBox redirectToSocialBoard={(data) => {
                                if (_.isPlainObject(data) && !_.isEmpty(data) && data._id) {
                                    props.router.push(`/social-board/${data._id}`, undefined, { shallow : false })
                                }
                            }} />
                        </Col> */}
                    </Row>
                    <div className="width-100 flex-justify-center" style={{ height: 50 }}>
                        {
                            isLoading ?
                                <Icon type="loading" style={{ fontSize: 50 }} />
                                :
                                null
                        }
                    </div>
                </CarFreakLayout>
            </Tablet>

            <Mobile>
                <CarFreakLayout hideScope
                    onWritePostClick={(type) => {
                        setWritePostChatType(type)
                        setEditMode(null);
                        setWriteModalVisible(true);
                        setSelectedPost(null);
                    }}>
                    <Row gutter={[10, 10]}>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                            {
                                _.isArray(socialBoards) && notEmptyLength(socialBoards) ?
                                    <Row gutter={[10, 10]} justify="center">
                                        {
                                            socialBoards.map(function (post, i) {
                                                return (
                                                    <Col key={'chats' + getObjectId(post)} className="gutter-row"
                                                        xs={24} sm={24} md={12} lg={12} xl={12}
                                                    >
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
                                                )
                                            })

                                        }
                                    </Row>
                                    :

                                    !isLoading ?
                                        <div className="width-100 flex-items-align-center flex-justify-center background-white" style={{ height: 400 }}><Empty /></div>
                                        :
                                        <div></div>
                            }
                        </Col>
                        {/* <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                            <TrendingSocialBoardBox redirectToSocialBoard={(data) => {
                                if (_.isPlainObject(data) && !_.isEmpty(data) && data._id) {
                                    props.router.push(`/social-board/${data._id}`, undefined, { shallow : false })
                                }
                            }} />
                        </Col> */}
                    </Row>
                    <div className="width-100 flex-justify-center" style={{ height: 50 }}>
                        {
                            isLoading ?
                                <Icon type="loading" style={{ fontSize: 50 }} />
                                :
                                null
                        }
                    </div>
                </CarFreakLayout>
            </Mobile>

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

            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={writePostChatType || 'socialboard'}
                visible={writeModalVisible}
                notify
                onUpdatePost={(data) => {
                    handleSocialBoardPostChange(data);
                }}
                onCreatePost={(data) => {
                    if (_.get(data, `chatType`) == 'socialboard') {
                        handleSocialBoardAddPost(data)
                    }
                    if (_.get(data, `chatType`) == 'carfreaks') {
                        props.router.push(routePaths.carFreaks.as().pathname)
                    }
                }}
                onClose={(v) => {
                    setWriteModalVisible(false);
                    setSelectedPost({});
                }} />

        </LayoutV2 >
    )

}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    userlikes: state.userlikes
});

const mapDispatchToProps = {
    loginMode,
    fetchCarFreakPosts,
    fetchEditedPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SocialBoardPage));