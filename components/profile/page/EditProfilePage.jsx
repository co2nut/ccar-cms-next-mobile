import { Form, Select } from 'antd';
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import ProfileLayout from '../ProfileLayout';
import ProfileForm from '../ProfileForm';
import client from '../../../feathers';

const { Option } = Select;

const profilePic = "/assets/profile/profilePic.jpg";

const profileImage = "/assets/profile/profile-image.png";

const EditProfilePage = (props) => {

    const [profile, setProfile] = useState({})

    function backProfileHome(profile) {
        if (_.get(profile, ['userurlId'])) {
            props.router.push(`/profile/${profile.userurlId}`)
        } 
    }

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
        <ProfileForm data={profile} onProfileCancel={(e) => {
            backProfileHome()
            }}
                onProfileSuccess={(data) => {
                    setProfile(data);
                    backProfileHome(data)
            }}
        />
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(EditProfilePage)));