import { Form, Select } from 'antd';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import MyWishList from '../MyWishList';
import ProfileLayout from '../ProfileLayout';
import client from '../../../feathers';

withRouter
const ProfileWishlistPage = (props) => {

    const [profile, setProfile] = useState({})

    useEffect(() => { 

        if(_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', 'userurlId']) ){
            client.service('users').find({
            query: {
                userurlId : _.get(props.user, ['info', 'user', 'userurlId'])
            }
            }).then(res => {
                setProfile(_.get(res , `data[0]`))
            }).catch(err => {
            message.error(err.message)
            });
        }else{
            setProfile({})
        }
    
    } , [props.user.authenticated])

    return (
        <MyWishList data={profile} />
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ProfileWishlistPage)));