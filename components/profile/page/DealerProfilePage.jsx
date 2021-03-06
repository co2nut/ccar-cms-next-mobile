import { Form, message } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import DealerProfile from '../DealerProfile';
import ProfileNotFound from '../ProfileNotFound';
import UserProfile from '../UserProfile';
import LayoutV2 from '../../general/LayoutV2';
import { notEmptyLength } from '../../../common-function';
import { setUser } from '../../../redux/actions/user-actions';
import { loading, loginMode, updateActiveMenu } from '../../../redux/actions/app-actions';
import { withRouter } from 'next/router';
import client from '../../../feathers';
import { UploadOutlined } from '@ant-design/icons';
 

const UserProfileIndex = (props) => {


    const [userType, setUserType] = useState('user');
    const [profile, setProfile] = useState({});
    const [isOwn, setIsOwn] = useState(false);


    useEffect(() => {
        props.updateActiveMenu('10');
        getProfile();
    }, [props.router.query])

    useEffect(() => {
        setIsOwn(_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) == profile._id)
    }, [profile, props.user.authenticated])

    useEffect(() => { 
        if(_.isPlainObject(profile) && !_.isEmpty(profile)){
            setUser(profile);
        }
    
    } , [profile])

    function getProfile() {
        props.loading(true);

        // let freakname
        client.service('users').find({
            query: {
                "companyurlId" :  props.router.query.companyname,
                "userurlId" :  props.router.query.freakname,
                // _id: props.router.query.id,
                $populate: [
                    {
                        path: 'companyId',
                        ref: 'companys'
                    }
                ],
            }
        }).then(res => {
            props.loading(false);
            setProfile(_.isArray(res.data) && notEmptyLength(res.data) ? res.data[0] : {})
            setUserType(_.get(res, ['data', 0, 'role']) ? _.get(res, ['data', 0, 'role']) == 'mobile-user' || _.get(res, ['data', 0, 'role']) == 'normaluser' ? 'user' : 'dealer' : '')
        }).catch(err => {
            props.loading(false);
            message.error(err.message)
        });
    }
 
    return (
        <LayoutV2 hideOpenApp>
            <div className="section-version3">
                <div className="container-version3" style={{touchAction:'pan-y'}}>
                    {
                        userType == 'user' ?
                            <UserProfile data={profile} isOwn={isOwn} onChangeCoverPhoto={(url) => {
                                setProfile({ ...profile, profileCoverPhoto: url })
                            }}
                            />
                            :
                            userType == 'dealer' ?
                                <DealerProfile data={profile} isOwn={isOwn} onChangeCoverPhoto={(url) => {
                                    setProfile({ ...profile, profileCoverPhoto: url })
                                }} />
                                :
                                <ProfileNotFound /> 
                    }
                </div>
            </div>
        </LayoutV2 >
    );
}

const mapStateToProps = state => ({
    sellCars: state.sellCars,
    productsList: state.productsList,
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loginMode: loginMode,
    updateActiveMenu: updateActiveMenu,
    loading: loading,
    setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserProfileIndex)));
