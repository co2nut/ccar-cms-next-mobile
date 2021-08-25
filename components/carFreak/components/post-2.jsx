import { Empty, Form, Icon, Modal, Row, Col, Divider } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { calendarIcon, carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import PostMenu from './post-menu';
import { withRouter } from 'next/router';
import { formatNumber, getObjectId, getPlural, getUserName, isValidNumber, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import { loading } from '../../../redux/actions/app-actions';
import { generateDummyObj } from '../../../dummy';
import { imageNotFound } from '../../profile/config';
import ClubAvatar from './club/club-avatar';
import UserAvatar from '../../general/UserAvatar';
import ShareButtonDialog from '../../general/ShareButtonDialog';
import LikePostButton from './like-post-button';
import { fetchCarFreakPosts } from '../../../redux/actions/carfreak-action';
import { patchReduxPosts } from '../config';
import ParseTag from '../../general/ParseTag';

const Post2 = (props) => {

    const [post, setPost] = useState({});

    useEffect(() => {

        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setPost(props.data);
        } else {
            setPost({});
        }

    }, [props.data])


    function redirectToPost() {
        if (props.onRedirectToPost) {
            props.onRedirectToPost(post)
        }
    }

    function patchUserCarFreakPosts(posts = [], mode = 'add') {

        let data = patchReduxPosts(_.get(props.carfreak, `carFreakPosts`), posts, mode);
        if (!_.isEqual(data, _.get(props.carfreak, `carFreakPosts`))) {
            props.fetchCarFreakPosts(data);
        }
    }


    return (
        <React.Fragment>

            <div className="width-100 relative-wrapper background-black-opacity-50 padding-md round-border" >
                <div className="padding-x-md flex-items-align-center relative-wrapper">
                    <span className="d-inline-block margin-right-md">
                        {
                            _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                <ClubAvatar redirectProfile
                                    data={_.get(post, ['clubId'])}
                                    size={50}
                                    avatarClassName="cursor-pointer"
                                />
                                :
                                <UserAvatar redirectProfile
                                    data={_.get(post, ['userId'])}
                                    size={50}
                                    avatarClassName="cursor-pointer"
                                />
                        }
                    </span>
                    <span className='d-inline-block margin-right-md white text-truncate'>
                        <div className="white text-truncate">
                            {
                                _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                    _.get(post, `clubId.clubName`)
                                    :
                                    getUserName(_.get(post, `userId`), 'freakId')
                            }
                        </div>
                    </span>
                    {
                        !props.hideAction ?
                            <span className='d-inline-block' style={{ position: 'absolute', top: 10, right: 10 }} >
                                <PostMenu post={post}
                                    onEditPostClick={() => {
                                        if (props.onEditClick) {
                                            props.onEditClick(post)
                                        }
                                    }}
                                    onRemovePostClick={() => {
                                        if (props.onRemoveClick) {
                                            props.onRemoveClick(post);
                                        }
                                    }}
                                >
                                    <Icon type="more" className="white cursor-pointer" rotate={90} style={{ fontSize: '24px', fontWeight: '700', }} />
                                </PostMenu>
                            </span>
                            :
                            null
                    }
                </div>

                <div className="margin-top-md cursor-pointer" onClick={(e) => { redirectToPost() }}>
                    <img src={_.get(post, `chatType`) == 'event' ? _.get(post, `eventId.coverPhoto`) || imageNotFound : _.get(post, `mediaList[0].url`) || imageNotFound} style={{ width: '100%', height: 300 }} className="img-cover" />
                </div>

                <div className="margin-top-md">
                    <LikePostButton
                        chatId={post._id}
                        likeOn="chat"
                        activeButton={
                            <span className="margin-right-sm cursor-pointer " style={{ color: 'white' }}> <img src={carFreakLikeIcon} className="margin-right-xs" style={{ width: '25px' }} />
                                {getPlural('Like', 'Likes', _.get(post, ['totalLike']) || 0, true)}
                            </span>
                        }
                        onClick={(liked) => {
                            patchUserCarFreakPosts([{ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 }], 'update')
                        }}
                    >
                        <span className="margin-right-sm cursor-pointer " style={{ color: 'white' }}> <img src={carFreakLikeGreyIcon} className="margin-right-xs" style={{ width: '25px' }} />
                            {getPlural('Like', 'Likes', _.get(post, ['totalLike']) || 0, true)}
                        </span>
                    </LikePostButton>
                    <span className="margin-right-sm cursor-pointer" style={{ color: 'white' }} onClick={(e) => { redirectToPost() }} > <img className="margin-right-xs" src="https://img.icons8.com/ios-filled/20/ffcc32/topic.png" />
                        {getPlural('Comment', 'Comments', _.get(post, ['totalReply']) || 0, true)}
                    </span>
                    <ShareButtonDialog link={`/car-freaks/${getObjectId(post)}`}>
                        <span className=" cursor-pointer" style={{ color: 'white' }}> <img src="https://img.icons8.com/ios-filled/20/ffcc32/forward-arrow.png" /> Share</span>
                    </ShareButtonDialog>
                </div>

                <div className="margin-top-md">
                    {
                        _.get(post, `chatType`) == 'event' ?
                            <React.Fragment>
                                <p className="red font-weight-bold headline">
                                    {`${moment(_.get(post, ['eventId', 'startAt'])).format('dddd, YYYY-MM-DD, hh:mm')}`}
                                </p>
                                <p style={{ color: 'white', fontWeight: 500 }} className="text-truncate-twoline pre-wrap">{_.get(post, `eventId.name`)}</p>
                                <p style={{ color: 'white', fontWeight: 500 }} className="text-truncate-twoline pre-wrap">{_.get(post, `eventId.location`)}</p>

                            </React.Fragment>
                            :
                            <React.Fragment>
                                <ParseTag data={_.get(post, `title`)} hashTagClassName="font-weight-bold white" style={{ color: 'white', fontWeight: 700, fontSize: '16px', marginBottom: '10px' }} className="text-truncate" />
                                <ParseTag data={_.get(post, `content`)} hashTagClassName="font-weight-bold white" style={{ color: 'white', fontWeight: 500 }} className="text-truncate-twoline pre-wrap" />
                            </React.Fragment>
                    }
                </div>
            </div>

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
    fetchCarFreakPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(Post2)));