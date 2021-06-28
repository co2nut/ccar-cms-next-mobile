import { Form, message } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../../feathers';
import { carFreakLikeGreyIcon, carFreakLikeIcon } from '../../../icon';
import { loading, loginMode } from '../../../redux/actions/app-actions';
import { fetchUserPostLikeIds } from '../../../redux/actions/carfreak.action';



const TIME_OUT = 1000;

const LikePostButton = (props) => {

    const [likeOn, setLikeOn] = useState('chat')
    const [isActived, setIsActived] = useState(false)
    const [timeoutFunc, setTimeoutFunc] = useState();

    useEffect(() => {
        setLikeOn(props.likeOn || 'chat');
    }, [props.likeOn])


    useEffect(() => {
    }, [isActived])

    useEffect(() => {
        setIsActived(_.indexOf(props.carfreak.userPostLikeIds, props[`${props.likeOn}Id`]) != -1)
    }, [props.carfreak.userPostLikeIds, props[`${props.likeOn}Id`]])


    function patchUserPostLikeIds(ids = [], addMode = true) {

        let newPostLikes = props.carfreak.userPostLikeIds || [];

        if (_.isArray(ids) && !_.isEmpty(ids)) {
            if (addMode) {
                newPostLikes = _.union(newPostLikes, ids || []);
            } else {
                newPostLikes = _.pullAll(newPostLikes, ids || []);
            }
            console.log(newPostLikes);
            props.fetchUserPostLikeIds(newPostLikes);
        }

    }

    function onClickLike() {


        if (!props.readOnly) {
            if (!_.get(props.user, ['authenticated']) && !_.get(props.user, ['info', 'user', '_id'])) {
                message.error('Please Login First!');
                props.loginMode(true);
                return;
            }

            switch (likeOn) {
                case 'chat':
                    break;
                case 'message':
                    break;
                case 'reply':
                    break;
                default:
                    message.error('Content Not Found.')
                    return;
            }

            if (props[`${likeOn}Id`]) {
                let actived = !isActived;
                setIsActived(actived);

                if (timeoutFunc) {
                    clearTimeout(timeoutFunc);
                }

                if (props.onClick) {
                    props.onClick(actived)
                }


                patchUserPostLikeIds([props[`${likeOn}Id`]], actived);

                setTimeoutFunc(setTimeout(() => {
                    //Only run if the like status no same
                    let query =
                    {
                        userId: _.get(props.user, ['info', 'user', '_id']),
                        type: actived ? 'add' : 'remove',
                        likeOn: likeOn,
                    };

                    query[`${likeOn}Id`] = props[`${likeOn}Id`];

                    axios.post(`${client.io.io.uri}updateLike`,
                        query
                        , {
                            headers: { 'Authorization': client.settings.storage.storage.storage['feathers-jwt'] },
                        }).then((res) => {
                            console.log(res);
                            if (props.onSuccessUpdate) {
                                props.onSuccessUpdate(actived, _.get(res, ['data']));
                            }
                            setTimeoutFunc();
                        }).catch((err) => {
                            setTimeoutFunc();
                            console.log(err);
                            console.log('not able to like');
                        })
                }, TIME_OUT))
            } else {
                message.error('Post Not Found')
            }

        } else {
            if (props.onClick) {
                props.onClick(isActived)
            }
        }
    }

    return (

        <span className={`${props.className ? props.className : ''}`} onClick={(e) => {
            onClickLike()
        }}>
            {
                !isActived ?
                    props.children ?
                        props.children
                        :
                        <span className='flex-items-align-center cursor-pointer' >
                            <span className='margin-right-sm' >
                                <img src={carFreakLikeGreyIcon} style={{ width: 35, height: 25 }} className="cursor-pointer" />
                                {/* <Icon type="like" /> */}
                            </span>
                            <span className='small-text' >
                                {
                                    props.text ? props.text(false) || 'Like' : 'Like'
                                }
                            </span>
                        </span>
                    :
                    props.activeButton ?
                        props.activeButton
                        :
                        <span className='flex-items-align-center cursor-pointer' >
                            <span className='margin-right-sm' >
                                <img src={carFreakLikeIcon} style={{ width: 35, height: 25 }} className="cursor-pointer" />
                                {/* <Icon type="like" theme="filled" className="blue" /> */}
                            </span>
                            <span className='small-text' >
                                {
                                    props.text ? props.text(true) || 'Liked' : 'Liked'
                                }
                            </span>
                        </span>
            }
        </span>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    carfreak: state.carfreak,
});

const mapDispatchToProps = {
    loading: loading,
    loginMode,
    fetchUserPostLikeIds: fetchUserPostLikeIds,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(LikePostButton)));