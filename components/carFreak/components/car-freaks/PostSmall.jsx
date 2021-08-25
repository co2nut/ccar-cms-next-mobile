import { Form, Icon } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formatNumber, getObjectId, getPlural, getUserName } from '../../../../common-function';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../../icon';
import { fetchCarFreakPosts } from '../../../../redux/actions/carfreak-action';
import ParseTag from '../../../general/ParseTag';
import ShareButtonDialog from '../../../general/ShareButtonDialog';
import UserAvatar from '../../../general/UserAvatar';
import { imageNotFound } from '../../../profile/config';
import { patchReduxPosts } from '../../config';
import ClubAvatar from '../club/club-avatar';
import LikePostButton from '../like-post-button';
import PostMenu from '../post-menu';



const PostSmall = (props) => {

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

    function patchUserCarFreakPosts(posts = [], mode = 'update') {

        let data = patchReduxPosts(_.get(props.carfreak, `carFreakPosts`), posts, mode);
        if (!_.isEqual(data, _.get(props.carfreak, `carFreakPosts`))) {
            props.fetchCarFreakPosts(data);
        }
    }

    const renderTextStyle = () => {

        switch (props.theme) {
            case 'light':
                return 'black';
                break;
            case 'dark':
                return 'white';
                break;
            default:
                return 'black';
                break;
        }
        return
    }


    return (
        <React.Fragment>

            <div className={`width-100 relative-wrapper padding-md round-border ${props.className || ''}`} style={{ ...props.style }} >
                <div className="margin-bottom-md cursor-pointer relative-wrapper" onClick={(e) => { redirectToPost() }}>
                    <img src={_.get(post, `mediaList[0].url`) || imageNotFound} style={{ width: '100%', height: 200 }} className="img-cover round-border" />
                    {
                        !props.hideAction ?
                            <span className='d-inline-block' style={{ position: 'absolute', top: 10, right: 10 }} >
                                <PostMenu
                                    post={post}
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
                                    <Icon type="more" className={`cursor-pointer ${renderTextStyle()}`} rotate={90} style={{ fontSize: '24px', fontWeight: '700', }} />
                                </PostMenu>
                            </span>
                            :
                            null
                    }
                </div>
                <div className="flex-items-align-center flex-justify-space-between">
                    <span className="flex-items-align-center width-50">
                        {
                            _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                <ClubAvatar redirectProfile
                                    data={_.get(post, ['clubId'])}
                                    size={40}
                                    avatarClassName="cursor-pointer margin-right-sm"
                                />
                                :
                                <UserAvatar redirectProfile
                                    data={_.get(post, ['userId'])}
                                    size={40}
                                    avatarClassName="cursor-pointer margin-right-sm"
                                />
                        }

                        <div className={`text-truncate ${renderTextStyle()}`}>
                            {
                                _.get(post, ['parentType']) == 'club' || _.get(post, ['parentType']) == 'clubEvent' ?
                                    _.get(post, `clubId.clubName`)
                                    :
                                    getUserName(_.get(post, `userId`), 'freakId')
                            }
                        </div>
                    </span>
                    <span className='width-50 flex-items-align-center flex-justify-end' >
                        <LikePostButton
                            chatId={post._id}
                            likeOn="chat"
                            activeButton={
                                <span className={`margin-right-sm cursor-pointer ${renderTextStyle()}`}> <img src={carFreakLikeIcon} className="margin-right-xs" style={{ width: '25px' }} />
                                    {formatNumber(_.get(post, ['totalLike']) || 0, 'auto')}
                                </span>
                            }
                            onClick={(liked) => {
                                patchUserCarFreakPosts([{ ...post, totalLike: liked ? parseInt(post.totalLike) + 1 : parseInt(post.totalLike) - 1 }], 'update')
                            }}
                        >
                            <span className={`margin-right-sm cursor-pointer ${renderTextStyle()}`}> <img src={carFreakLikeGreyIcon} className="margin-right-xs" style={{ width: '25px' }} />
                                {formatNumber(_.get(post, ['totalLike']) || 0, 'auto')}
                            </span>
                        </LikePostButton>
                        <span className={`margin-right-sm cursor-pointer ${renderTextStyle()}`} onClick={(e) => { redirectToPost() }} > <img className="margin-right-xs" src="https://img.icons8.com/ios-filled/20/ffcc32/topic.png" />
                            {formatNumber(_.get(post, ['totalReply']) || 0, 'auto')}
                        </span>
                    </span>
                </div>

                <div className="margin-top-sm cursor-pointer" onClick={(e) => { redirectToPost() }}>
                    <ParseTag data={_.get(post, `title`)} hashTagClassName={`font-weight-bold ${renderTextStyle()}`} style={{ fontWeight: 700, fontSize: '16px', marginBottom: '5px' }} className={`text-truncate ${renderTextStyle()}`} />
                    <ParseTag data={_.get(post, `content`)} hashTagClassName={`font-weight-bold ${renderTextStyle()}`} style={{ fontWeight: 500 }} className={`text-truncate-twoline pre-wrap ${renderTextStyle()}`} />
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
    fetchCarFreakPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(PostSmall)));