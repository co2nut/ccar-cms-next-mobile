import { Col, Empty, Form, Row, Affix, Button, Dropdown, message, Menu, Avatar, Icon } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayLengthCount, getObjectId, notEmptyLength } from '../../common-function';
import {
    loading,
    loginMode, updateActiveMenu
} from '../../redux/actions/app-actions';
import PostModal from '../carFreak/components/post-modal';
import PostDrawer from '../carFreak/components/PostDrawer';
import WritePostModal from '../carFreak/components/write-post-modal';
import WritePostDrawer from '../carFreak/components/WritePostDrawer';
import UserPost from './UserPost';
import client from '../../feathers';
import { createCarFreakIcon, createSocialBoardIcon } from '../../icon';

var moment = require('moment');


const defaultHeight = 100;

const UserPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [postLikes, setPostLikes] = useState([]);

    useEffect(() => {

        if (_.isArray(props.posts) && notEmptyLength(props.posts)) {
            setPosts(props.posts)
        } else {
            setPosts([]);
        }

    }, [props.posts])
    
    useEffect(() => {

        if (_.isArray(props.postLikes) && notEmptyLength(props.postLikes)) {
            setPostLikes(props.postLikes)
        } else {
            setPostLikes([]);
        }
    }, [props.postLikes])


    return (
        <React.Fragment>

            <Row type='flex' gutter={props.gutter ? props.gutter : [10, 10]}>
                {
                    posts.map(function (post, i) {
                        return (
                            <Col key={'colPost' + getObjectId(post)} xs={props.xs ? props.xs : 8} sm={props.sm ? props.sm : 8} md={props.md ? props.md : 12} lg={props.lg ? props.lg : 6} xl={props.xl ? props.xl : 6}>
                                <UserPost height={defaultHeight} post={post} onClick={(post) => {
                                    if (props.onRedirectToPost) {
                                        props.onRedirectToPost(post)
                                    }
                                }} />
                            </Col>
                        )
                    })
                }
                {
                    !props.showAddPostCard && arrayLengthCount(posts) <= 0 ?
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="width-100" style={{ height: 400 }}>
                                <Empty></Empty>
                            </div>
                        </Col>
                        :
                        null
                }
            </Row>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    sellCars: state.sellCars,
    productsList: state.productsList,
    app: state.app,
    user: state.user,
    sellerProfile: state.sellerProfile,
});


const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
    loading: loading,
    loginMode: loginMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserPosts)));