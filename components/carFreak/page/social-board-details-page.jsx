
import { Col, Input, message, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { notEmptyLength } from '../../../common-function';
import client from '../../../feathers';
import { loading } from '../../../redux/actions/app-actions';
import LayoutV2 from '../../general/LayoutV2';
import CarFreakLayout from '../components/car-freak-layout';
import SocialBoardDetailsBox from '../components/social-board-details-box';
import TrendingSocialBoardBox from '../components/trending-social-board-box';
import { carFreakGlobalSearch } from '../config';
import { useMediaQuery } from 'react-responsive';
import PostDrawer from '../components/PostDrawer';
import WritePostDrawer from '../components/WritePostDrawer';
import { routePaths } from '../../../route';

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

const banner = 'hands-on-wheel.jpg'
const ads = '20-Car-Dealership-Promotion-Ideas.jpg'
const { Search } = Input;
const PAGE_SIZE = 36;

const SocialBoardDetailsPage = (props) => {

    const [post, setPost] = useState({})
    const [userChatLikes, setUserChatLikes] = useState([]);

    const [editMode, setEditMode] = useState('');
    const [selectedPost, setSelectedPost] = useState({});
    const [writeModalVisible, setWriteModalVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        getPost();
    }, [props.router.query.id])

    useEffect(() => {
        if (props.user.authenticated && _.get(post, '_id')) {
            getUserChatLikes(_.compact([_.get(post, '_id')]), false);
        }

    }, [props.user.authenticated])

    useEffect(() => {

        if (_.isPlainObject(post) && !_.isEmpty(post)) {
            getUserChatLikes([post._id], false)
        } else {
        }

    }, [post])


    function getPost() {

        if (_.get(props, ['router', 'query', 'id'])) {
            props.loading(true);
            client.service('chats')
                .find({
                    query: {
                        _id: props.router.query.id,
                        chatType: 'socialboard',
                        $populate: 'userId',
                        $limit: 1,
                    }
                })
                .then((res) => {

                    props.loading(false);
                    setPost(notEmptyLength(res.data) ? res.data[0] : {});
                }).catch(err => {
                    props.loading(false);
                    message.error(err.message)
                });
        } else {
            setPost({});
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
                    message.success('Record Deleted');
                    setPost({})
                    props.router.push(routePaths.socialBoard.as().pathname)
                }).catch((err) => {
                    console.log('Unable to delete Chat.');
                })
        }

    }

    return (
        <LayoutV2 searchTypes={carFreakGlobalSearch} enterSearchCarFreaks hideOpenApp >


            <PostDrawer
                data={post}
                visible={true}
                postLike={_.find(userChatLikes, { chatId: _.get(post, ['_id']) })}
                onCancel={() => {
                    props.router.push(routePaths.socialBoard.as().pathname)
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
                }}

                onUpdatePost={(data) => {
                    setPost(data);
                }}
            />

            <WritePostDrawer
                data={selectedPost}
                editMode={editMode}
                chatType={'carfreaks'}
                visible={writeModalVisible}
                notify
                onUpdatePost={(data) => {
                    setPost(data);
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
    loading
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SocialBoardDetailsPage));