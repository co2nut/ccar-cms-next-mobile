import { Empty, Form, Icon, message } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { calendarIcon, carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import { commentIcon } from '../../live/config';
import ClubAvatar from './club/club-avatar';
import LikePostButton from './like-post-button';
import PostMenu from './post-menu';
import { withRouter } from 'next/router';
import ParseTag from '../../general/ParseTag';
import UserAvatar from '../../general/UserAvatar';
import { arrayLengthCount, formatNumber, getObjectId, getPlural, getUserName, isValidNumber, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import { loading } from '../../../redux/actions/app-actions';
import FollowButton from '../../profile/FollowButton';
import Carousel, { Dots, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import LightBoxCarousel from '../../general/LightBoxCarousel';
import PostMenuModal from './PostMenuModal';
import { imageNotFound } from '../../profile/config';


const defaultHeight = 450;
const headerHeight = 100;
const imageHeight = 200;
const titleHeight = 40;
const footerHeight = 100;
const actionHeight = 40;


const PostMobileView = (props) => {

    const [post, setPost] = useState({});
    const [chatType, setChatType] = useState('carfreaks');
    const [postLike, setPostLike] = useState({});
    const [totalLike, setTotalLike] = useState(0);
    const [height, setHeight] = useState(defaultHeight);
    const [imageIndex, setImageIndex] = useState(0);


    useEffect(() => {

        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setPost(props.data);
        } else {
            setPost({});
        }

    }, [props.data])

    useEffect(() => {

        if (_.isPlainObject(props.postLike) && !_.isEmpty(props.postLike)) {
            setPostLike(props.postLike);
        } else {
            setPostLike({});
        }

    }, [props.postLike])

    useEffect(() => {
        setTotalLike(!_.isNaN(parseInt(_.get(post, ['totalLike']))) ? formatNumber(_.get(post, ['totalLike']), null, true, 0, 0) : 0);
        setChatType(_.get(post, ['chatType']))
    }, [post])


    useEffect(() => {
        if (!props.style || !isValidNumber(props.style.height) || !(parseFloat(props.style.height) >= defaultHeight)) {
            setHeight(defaultHeight);
        } else {
            setHeight(props.style.height);
        }

    }, [props.style])

    function redirectToPost(post) {
        if (props.onRedirectToPost) {
            props.onRedirectToPost(post)
        }
    }

    return (
        notEmptyLength(objectRemoveEmptyValue(props.data)) ?
            <React.Fragment>
                <div style={{ maxHeight: defaultHeight }}>
                    <div className="flex-justify-space-between flex-items-align-center padding-y-sm" style={{ maxHeight: defaultHeight * 0.15 }}>
                        <span className='flex-items-align-center' >
                            <span className='d-inline-block margin-x-md' >
                                {
                                    _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                        <ClubAvatar redirectProfile
                                            data={_.get(post, ['clubId'])}
                                            size={40}
                                            style={{ maxWidth: 100 }}
                                        />
                                        :
                                        <UserAvatar redirectProfile
                                            data={_.get(post, ['userId'])}
                                            size={40}
                                        />
                                }
                            </span>
                            <span className='d-inline-block ' >
                                <div className="caption font-weight-bold">
                                    {getUserName(_.get(post, `userId`), 'freakId')}
                                </div>
                                <div className="small-text grey">
                                    {moment(_.get(post , `createdAt`)).fromNow()}
                                </div>
                            </span>
                        </span>

                        <span className='d-inline-block ' >
                            <FollowButton type="user" followerId={_.get(props.user, ['info', 'user', '_id'])} userId={getObjectId(_.get(post, `userId`))}
                                followButton={() => {
                                    return <span className='d-inline-block round-border background-ccar-button-yellow padding-y-sm padding-x-md caption black' >
                                        Follow
                                    </span>
                                }}
                                followingButton={() => {
                                    return <span className='d-inline-block round-border background-white padding-y-sm padding-x-md caption black' style={{ border: 'solid 1px', borderColor: '#FFCC32' }} >
                                        Following
                                  </span>
                                }}
                                handleSuccess={(data) => {
                                    message.success(data.type == 'remove' ? 'Unfollowed' : 'Followed')
                                }}
                                handleError={(err) => {
                                    message.error(err.message)
                                }}
                            />
                        </span>
                    </div>
                    {
                        arrayLengthCount(_.get(post, `mediaList`)) > 1 ?
                            <div className="show-carousel-dots-inside carousel-background-black" style={{ height: defaultHeight * 0.55 }} onClick={(e) => {
                                redirectToPost(post)
                            }} >
                                <Carousel
                                    addArrowClickHandler
                                    value={imageIndex}
                                    dots
                                    dotPosition="bottom"
                                    keepDirectionWhenDragging
                                    slides={
                                        _.isArray(_.get(post, ['mediaList'])) && !_.isEmpty(_.get(post, ['mediaList'])) ?
                                            _.map(_.get(post, ['mediaList']), function (image, index) {
                                                return (
                                                    <img src={image.url} className="img-cover cursor-pointer" style={{ height: defaultHeight * 0.55, width: '100%' }} ></img>
                                                )
                                            })
                                            :
                                            []}
                                    animationSpeed={100}
                                    onChange={(value) => {
                                        setImageIndex(value);
                                    }}
                                />
                            </div>
                            :
                            <img src={_.get(post, `mediaList[0].url`) || imageNotFound} className="img-cover cursor-pointer" style={{ height: defaultHeight * 0.55, width: '100%' }} onClick={(e) => {
                                redirectToPost(post)
                            }}  ></img>
                    }
                    <div className="padding-sm" style={{ maxHeight: defaultHeight * 0.2 }} onClick={(e) => {
                        redirectToPost(post)
                    }} >
                        <ParseTag data={`${_.get(post, ['title']) || ''}`} className="font-weight-bold headline width-100 pre-wrap text-truncate-twoline" expandable={false} />
                    </div>
                    <div className="padding-sm flex-justify-space-between flex-items-align-center" style={{ maxHeight: defaultHeight * 0.1 }}>
                        <span className='flex-items-align-center' >
                            <LikePostButton
                                chatId={_.get(post, ['_id'])}
                                likeOn="chat"
                                postLike={postLike}
                                onClick={(actived) => {
                                    setTotalLike(actived ? parseInt(totalLike) + 1 : parseInt(totalLike) - 1);
                                }}
                                onSuccessUpdate={(liked, data) => {
                                    if (props.onPostLikeChange) {
                                        props.onPostLikeChange(liked, data);
                                    }
                                    if (props.onUpdatePost) {
                                        props.onUpdatePost({ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 });
                                    }
                                }}
                                activeButton={
                                    <div className="flex-items-align-center caption font-weight-thin">
                                        <img src={carFreakLikeIcon} style={{ width: 30, height: 20 }} className="margin-right-sm cursor-pointer" />
                                        {getPlural('Like', 'Likes', totalLike || 0, true)}
                                    </div>
                                }
                                className='d-inline-block margin-right-md'>
                                <div className="flex-items-align-center caption font-weight-thin">
                                    <img src={carFreakLikeGreyIcon} style={{ width: 30, height: 20 }} className="margin-right-sm cursor-pointer" />
                                    {getPlural('Like', 'Likes', totalLike || 0, true)}
                                </div>
                            </LikePostButton>
                            <span className='flex-items-align-center cursor-pointer' onClick={(e) => {
                                redirectToPost(post)
                            }}  >
                                <span className='margin-right-sm' >
                                    <img src={commentIcon} style={{ width: 17, height: 17 }} />
                                </span>
                                <span className=' caption font-weight-thin' >
                                    {getPlural('Comment', 'Comments', _.get(post, ['totalReply']) || 0, true)}
                                </span>
                            </span>
                        </span>

                        <span className='d-inline-block ' >
                            <PostMenuModal post={post}
                                onEditPostClick={() => {
                                    if (props.onEditClick) {
                                        props.onEditClick(post)
                                    }
                                }}
                                onRemovePostClick={() => {
                                    if (props.onRemoveClick) {
                                        props.onRemoveClick(post);
                                    }
                                }} />
                        </span>
                    </div>
                </div>
            </React.Fragment>
            :
            null
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(PostMobileView)));