import { Form, Icon } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formatNumber, getObjectId, getPlural, getUserName, isValidNumber, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import { loading } from '../../../redux/actions/app-actions';
import ParseTag from '../../general/ParseTag';
import UserAvatar from '../../general/UserAvatar';
import LikePostButton from './like-post-button';
import PostMenu from './post-menu';
import PostMenuModal from './PostMenuModal';


const defaultHeight = 'auto';


const SocialBoardCard = (props) => {

    const [post, setPost] = useState({});
    const [height, setHeight] = useState(defaultHeight);
    const [postLike, setPostLike] = useState({});
    const [totalLike, setTotalLike] = useState(0);


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

        if (props.redirectPost && _.isPlainObject(post) && !_.isEmpty(post)) {
            props.router.push(`/social-board/${_.get(post, ['_id'])}`, undefined, { shallow: false });
        }
    }

    return (
        notEmptyLength(objectRemoveEmptyValue(post)) ?
            <React.Fragment>
                <div className="relative-wrapper">
                    <div className={` thin-border box-shadow-heavy round-border background-white padding-md ${props.className ? props.className : ''}`} style={{ ...props.style, height: height }} onClick={(e) => {
                        if (!document.getElementById(`like-${getObjectId(post)}`).contains(e.target)) {
                            redirectToPost(post)
                        }
                    }}>
                        <div className=" flex-items-align-center flex-justify-start ">
                            <span className='d-inline-block margin-right-md' >
                                <UserAvatar redirectProfile size={50} data={_.get(post, ['userId'])} />
                            </span>
                            <span className='d-inline-block width-70' >
                                <div className="flex-justify-start flex-items-align-center caption text-truncate">
                                    <span className="black" >
                                        {getUserName(_.get(post, ['userId']), 'freakId')}
                                    </span>
                                    {
                                        _.get(post, ['location']) ?
                                            <React.Fragment>
                                                <span className="grey">
                                                    in
                                        </span>
                                                <span className="black">
                                                    {`${_.get(post, ['location']) || ''}`}
                                                </span>
                                            </React.Fragment>
                                            :
                                            null
                                    }
                                </div>
                                <div className="flex-justify-space-between flex-items-align-center text-truncate">
                                    <span className='d-inline-block font-weight-thin small-text' >
                                        {moment(_.get(post, ['createdAt']) || null).format('MMM Do')} | {moment(_.get(post, ['createdAt']) || null).fromNow()}
                                    </span>
                                </div>
                            </span>
                        </div>
                        <div className="margin-y-md">
                            <ParseTag data={_.get(post, `title`)} className="font-weight-bold headline text-truncate-twoline" />
                        </div>
                        <div className="flex-justify-space-between flex-items-align-center">
                            <span className='d-inline-block small-text font-weight-thin' >
                                {getPlural('Comment', 'Comments', _.get(post, `totalReply`), true)}
                            </span>
                            <span className='d-inline-block ' id={`like-${getObjectId(post)}`} >
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

                            </span>
                        </div>
                    </div>
                    <span className='d-inline-block' style={{ position: 'absolute', top: 30, right: 20 }} >
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
                            }}
                        >
                            <Icon type="more" className="black" style={{ fontSize: 20 }} />
                        </PostMenuModal>
                    </span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialBoardCard)));