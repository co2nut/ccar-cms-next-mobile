import { Form } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { formatNumber, isValidNumber } from '../../../../common-function';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../../icon';
import ParseTag from '../../../general/ParseTag';
import UserAvatar from '../../../general/UserAvatar';
import { commentIcon } from '../../../live/config';
import { imageNotFound } from '../../../profile/config';
import LikePostButton from '../like-post-button';


const defaultHeight = 350;
const headerHeight = 100;
const imageHeight = 200;
const titleHeight = 40;
const footerHeight = 100;
const actionHeight = 40;


const Post = (props) => {

    const [post, setPost] = useState({});
    const [chatType, setChatType] = useState('carfreaks');
    const [postLike, setPostLike] = useState({});
    const [totalLike, setTotalLike] = useState(0);
    const [height, setHeight] = useState(defaultHeight);


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
        _.isPlainObject(post) && !_.isEmpty(post) ?
            <div className={`${props.className || ''} thin-border box-shadow-normal-center round-border padding-sm`} style={{ height: height }}>
                <img src={_.get(post, `mediaList[0].url`) || imageNotFound} className="round-border thin-border img-cover background-black" style={{ width: '100%', height: '70%' }} />
                <Scrollbars autoHide autoHeight autoHeightMax={height * 0.3}>
                    <div className="flex-justify-space-between flex-items-align-center padding-y-sm">
                        <UserAvatar size={30} showNameRight data={_.get(post, `userId`)} className="width-50 flex-justify-start" avatarClassName="flex-items-no-shrink" />
                        <span className="flex-justify-end flex-items-align-center width-50">
                            <LikePostButton
                                chatId={_.get(post, ['_id'])}
                                likeOn="chat"
                                postLike={postLike}
                                activeButton={
                                    <React.Fragment>
                                        <span className='margin-right-sm' >
                                            <img src={carFreakLikeIcon} style={{ width: 25, height: 20 }} className="cursor-pointer" />
                                        </span>
                                        <span className='headline margin-right-sm' >
                                            {totalLike || 0}
                                        </span>
                                    </React.Fragment>
                                }
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
                            >
                                <span className='flex-items-align-center cursor-pointer' >
                                    <span className='margin-right-sm' >
                                        <img src={carFreakLikeGreyIcon} style={{ width: 25, height: 20 }} className="cursor-pointer" />
                                    </span>
                                    <span className='headline margin-right-sm' >
                                        {totalLike || 0}
                                    </span>
                                </span>
                            </LikePostButton>
                            <span className='flex-items-align-center cursor-pointer' onClick={(e) => {
                                redirectToPost(post)
                            }}  >
                                <span className='margin-right-sm' >
                                    <img src={commentIcon} style={{ width: 20, height: 20 }} />
                                </span>
                                <span className='headline' >
                                    {_.get(post, `totalReply`) || 0}
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className="padding-y-sm ">
                        <ParseTag data={_.get(post, `title`) || ''} className="text-truncate-twoline headline font-weight-bold"></ParseTag>
                    </div>
                </Scrollbars>
            </div>
            :
            null
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(Post)));