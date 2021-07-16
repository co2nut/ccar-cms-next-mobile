import { CloseOutlined } from '@ant-design/icons';
import { Col, Divider, Dropdown, Empty, Form, Icon, Input, Menu, message as AntMessage, Modal, Row, Carousel } from 'antd';
import _ from "lodash";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayLengthCount, formatNumber, getPlural, getUserName, getWindowInnerHeight, getWindowInnerWidth, notEmptyLength } from '../../../common-function';
import client from '../../../feathers';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import { loading, loginMode } from '../../../redux/actions/app-actions';
import LightBoxCarousel from '../../general/LightBoxCarousel';
import ParseTag from '../../general/ParseTag';
import ScrollLoadWrapper from '../../general/ScrollLoadWrapper';
import UserAvatar from '../../general/UserAvatar';
import { commentIcon } from '../../live/config';
import { chatRestrictTime } from '../config';
import CommentBox1 from './comment-box-1';
import LikePostButton from './like-post-button';
import SocialInput from './social-input';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { routePaths } from '../../../route';
import { generateDummyObj } from '../../../dummy';
import PostWithComment from './PostWithComment';
import EventPostWithComment from './EventPostWithComment';

const messagePageSize = 6;
const { TextArea } = Input;


const postCommentRef = React.createRef();
const carouselRef = React.createRef();


const PostModalCarousel = (props) => {

    const [visible, setVisible] = useState(false);
    const [postIndex, setPostIndex] = useState(0);
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [post, setPost] = useState({});
    const [postLike, setPostLike] = useState({});
    const [message, setMessage] = useState('');
    const [messageTotal, setMessageTotal] = useState(0);
    const [totalLike, setTotalLike] = useState(0);
    const [canSendMessage, setCanSendMessage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [focused, setFocused] = useState(false);


    useEffect(() => {
        if (_.isArray(props.posts) && !_.isEmpty(props.posts)) {
            setPosts(props.posts);
        } else {
            setPosts([])
        }
    }, [props.posts])


    useEffect(() => {
        if (_.isNumber(props.postIndex) && props.postIndex < arrayLengthCount(posts) && props.postIndex > 0) {
            console.log(props.postIndex);
            goToPost(props.postIndex)
        }
    }, [props.postIndex, visible])

    useEffect(() => {

        setVisible(props.visible === true)

        if (props.visible === true) {

            if (postCommentRef.current && !focused) {
                if (postCommentRef.current.focus) {
                    postCommentRef.current.focus();
                }
                setFocused(true)
            }
        }

    }, [props.visible])


    useEffect(() => {

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [carouselRef, posts])

    function handleClickOutside(event) {

        if (arrayLengthCount(posts) > 1) {
            if (document.getElementById('post-modal-body')) {
                if (!document.getElementById('post-modal-body').contains(event.target) && !document.getElementById('post-modal-left-arrow').contains(event.target) && !document.getElementById('post-modal-right-arrow').contains(event.target)) {
                    closeModal()
                }
            }
        }

    }

    function closeModal() {
        if (props.onCancel) {
            props.onCancel();
        }
        setMessage('');
        setMessages([]);
        setCanSendMessage(true);
    }

    function prevPost() {
        if (carouselRef && carouselRef.current) {
            carouselRef.current.prev();
        }
    }

    function nextPost() {
        if (carouselRef && carouselRef.current) {
            carouselRef.current.next();
        }
    }

    function goToPost(i) {
        if (carouselRef && carouselRef.current && _.isNumber(i)) {
            carouselRef.current.goTo(i, true);
        }
    }

    return (
            <Modal
            visible={visible}
            onCancel={() => {
                closeModal()
            }}
            centered
            width={(getWindowInnerWidth() || 1000) * 0.9}
            footer={null}
            maskClosable={true}
            centered
            className="no-padding-modal-body modal-body-background-transparent"
            closable={false}
        >
            {
                arrayLengthCount(posts) > 1 ?
                    visible ?
                        <div className="flex-items-align-center flex-justify-center">
                            <span className='d-inline-block cursor-pointer' id="post-modal-left-arrow" onClick={(e) => {
                                prevPost();
                            }} >
                                <Icon type="left" className="white " style={{ fontSize: 40 }} />
                            </span>
                            <span className='d-inline-block width-80' id="post-modal-body" >
                                <Carousel
                                    ref={carouselRef}
                                    dots={false}
                                >
                                    {
                                        _.isArray(posts) && !_.isEmpty(posts) ?
                                            _.map(posts, function (post, index) {
                                                return (
                                                    <div className="padding-md">
                                                        {
                                                            _.get(post, `chatType`) == 'event' ? 
                                                                <EventPostWithComment
                                                                    data={post}
                                                                    textColor='white'
                                                                    className={props.postClassName || ''}
                                                                    style={{ height: (getWindowInnerHeight() || 1000) * 0.6 }}
                                                                    onEditClick={(post) => {
                                                                        if (props.onEditClick) {
                                                                            props.onEditClick(post)
                                                                        }
                                                                    }}
                                                                    onRemoveClick={(post) => {
                                                                        if (props.onRemoveClick) {
                                                                            props.onRemoveClick(post)
                                                                        }
                                                                    }}
                                                                />
                                                                :
                                                                <PostWithComment
                                                                    data={post}
                                                                    textColor='white'
                                                                    className={props.postClassName || ''}
                                                                    style={{ height: (getWindowInnerHeight() || 1000) * 0.6 }}
                                                                    onEditClick={(post) => {
                                                                        if (props.onEditClick) {
                                                                            props.onEditClick(post)
                                                                        }
                                                                    }}
                                                                    onRemoveClick={(post) => {
                                                                        if (props.onRemoveClick) {
                                                                            props.onRemoveClick(post)
                                                                        }
                                                                    }}
                                                                />

                                                        }
                                                    </div>
                                                )
                                            })
                                            :
                                            []
                                    }
                                </Carousel>
                            </span>
                            <span className='d-inline-block cursor-pointer' id="post-modal-right-arrow" onClick={(e) => {
                                nextPost();
                            }} >
                                <Icon type="right" className="white cursor-pointer" style={{ fontSize: 40 }} />
                            </span>
                        </div>
                        :
                        null
                    :
                    <div className="padding-md">{
                        _.get(posts, `[0].chatType`) == 'event' ?
                            <EventPostWithComment
                                data={_.get(posts, `[0]`) || {}}
                                textColor='white'
                                className={props.postClassName || ''}
                                style={{ height: (getWindowInnerHeight() || 1000) * 0.6 }}
                                onEditClick={(post) => {
                                    if (props.onEditClick) {
                                        props.onEditClick(post)
                                    }
                                }}
                                onRemoveClick={(post) => {
                                    if (props.onRemoveClick) {
                                        props.onRemoveClick(post)
                                    }
                                }}
                            />
                            :
                            <PostWithComment
                                textColor='white'
                                data={_.get(posts, `[0]`) || {}}
                                className={props.postClassName || ''}
                                style={{ height: (getWindowInnerHeight() || 1000) * 0.6 }}
                                onEditClick={(post) => {
                                    if (props.onEditClick) {
                                        props.onEditClick(post)
                                    }
                                }}
                                onRemoveClick={(post) => {
                                    if (props.onRemoveClick) {
                                        props.onRemoveClick(post)
                                    }
                                }}
                            />
                    }
                    </div>
            }
            </Modal>
        
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
    loginMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(PostModalCarousel)));