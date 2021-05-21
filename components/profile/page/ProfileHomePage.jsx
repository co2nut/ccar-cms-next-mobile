import { Card, Form, message } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { notEmptyLength } from '../../../common-function';
import { filterCarBrandMode, filterCarModelMode, filterCarSearchKeywords, loading, loginMode, quickSearchProductsList, updateActiveMenu } from '../../../redux/actions/app-actions';
import { fetchProductsList, updateActiveIdProductList } from '../../../redux/actions/productsList-actions';
import { setUser } from '../../../redux/actions/user-actions';
import LayoutV2 from '../../general/LayoutV2';
import DealerProfile from '../DealerProfile';
import ProfileNotFound from '../ProfileNotFound';
import UserProfile from '../UserProfile';
import client from '../../../feathers';


const { Meta } = Card;


const ProfileHomePage = (props) => {


    const [userType, setUserType] = useState('user');
    const [profile, setProfile] = useState({});
    const [isOwn, setIsOwn] = useState(false);

    useEffect(() => { 
 
    } , [])

    useEffect(() => {
        getProfile();
    }, [props.router.query.id])

    useEffect(() => {
    }, [isOwn])

    useEffect(() => {
 
        setIsOwn(_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) == _.get(profile, ['_id']))
    }, [props.user.authenticated, profile])

    useEffect(() => {
        if (_.isPlainObject(profile) && !_.isEmpty(profile)) {
            setUser(profile);
        }

    }, [profile])

    function getProfile() {
        props.loading(true);
        client.service('users').find({
            query: {
                userurlId: props.router.query.id,
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
            setIsOwn(_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) == props.router.query.id)
            setUserType(_.get(res, ['data', 0, 'role']) ? _.get(res, ['data', 0, 'role']) == 'mobile-user' || _.get(res, ['data', 0, 'role']) == 'normaluser' ? 'user' : 'dealer' : '')
        }).catch(err => {
            props.loading(false);
            message.error(err.message)
        });
    }


    return (
        <LayoutV2>
            <div className="section-version3">
                <div className="container-version3" style={{ touchAction: 'pan-y' }}>
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
                            }} 
                            />
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
    fetchProductsList: fetchProductsList,
    updateActiveIdProductList: updateActiveIdProductList,
    filterCarBrandMode: filterCarBrandMode,
    filterCarModelMode: filterCarModelMode,
    filterCarSearchKeywords: filterCarSearchKeywords,
    quickSearchProductsList: quickSearchProductsList,

    loading: loading,
    setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ProfileHomePage)));
