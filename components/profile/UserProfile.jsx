import { Col, Divider, Form, Row, Tabs } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    filterCarBrandMode, filterCarModelMode, filterCarSearchKeywords, loading,
    loginMode, quickSearchProductsList,
    setApplyMileage, setApplyPrice, setApplyYear, updateActiveMenu
} from '../../redux/actions/app-actions';
import { fetchProductsList, updateActiveIdProductList } from '../../redux/actions/productsList-actions';
import { updateSellerProfile } from '../../redux/actions/sellerProfile-actions';
import ProfileDetailsBox from './ProfileDetailsBox';
import UserCarFreakPosts from './UserCarFreakPosts';
import UserSavedCarFreakPosts from './UserSavedCarFreakPosts';
import UserSocialBoard from './UserSocialBoard';
import UserSavedSocialBoard from './UserSavedSocialBoard';
import { withRouter } from 'next/router';
import { routePaths } from '../../route';



const { TabPane } = Tabs;

const UserProfile = (props) => {

    const [profile, setProfile] = useState({});
    const [tabKey, setTabKey] = useState('carfreaks');


    //initial render

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }

    }, [props.data, tabKey])

    useEffect(() => {

        console.log('props.router', props.router);
        if (_.get(props.router, `query.tabKey`)) {
            setTabKey(`${props.router.query.tabKey}`)
        }
    }, [props.router])


    useEffect(() => {
        console.log('tabKey', tabKey);

    }, [tabKey])


    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Divider className="no-margin" />
                    <ProfileDetailsBox data={profile} showProfileActions={props.isOwn} type="user"
                        onChangeCoverPhoto={(res) => {
                            if (props.onChangeCoverPhoto) {
                                props.onChangeCoverPhoto(res);
                            }
                        }
                        }
                        onChange={(res) => {
                            if (props.onChange) {
                                props.onChange(res);
                            }
                        }
                        }
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Divider className="no-margin" />
                    <Row type="flex" align="middle" className='background-white'>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                            <Tabs activeKey={tabKey}
                                onChange={(key) => {
                                    props.router.push(`${routePaths.profile.to}?tabKey=${key || ''}`, routePaths.profile.as(profile, { tabKey: key }), { shallow: true })
                                }}
                            >
                                <TabPane tab="CarFreaks" key="carfreaks">
                                    <UserCarFreakPosts data={profile} />
                                </TabPane>
                                <TabPane tab="Social Board" key="socialboard">
                                    <UserSocialBoard data={profile} className="margin-y-lg" />
                                </TabPane>
                                {
                                    _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(profile, ['_id']) ?
                                        <TabPane tab="Saved CarFreaks" key="savedCarFreak">
                                            <UserSavedCarFreakPosts data={profile} className="margin-y-lg" />
                                        </TabPane>
                                        :
                                        null
                                }
                                {
                                    _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(profile, ['_id']) ?
                                        <TabPane tab="Saved Social Board" key="savedSocialBoard">
                                            <UserSavedSocialBoard data={profile} className="margin-y-lg" />
                                        </TabPane>
                                        :
                                        null
                                }
                                {/* <TabPane tab="My Purchase" key="3">
                            Content of Tab Pane 3
                        </TabPane> */}
                                {/* <TabPane tab="Reviews" key="3">
                            Content of Tab Pane 3
                        </TabPane> */}
                            </Tabs>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    sellCars: state.sellCars,
    productsList: state.productsList,
    app: state.app,
    sellerProfile: state.sellerProfile,
    user: state.user,
});


const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
    fetchProductsList: fetchProductsList,
    updateActiveIdProductList: updateActiveIdProductList,
    filterCarBrandMode: filterCarBrandMode,
    filterCarModelMode: filterCarModelMode,
    filterCarSearchKeywords: filterCarSearchKeywords,
    quickSearchProductsList: quickSearchProductsList,

    loading: loading,
    setApplyYear: setApplyYear,
    setApplyPrice: setApplyPrice,
    setApplyMileage: setApplyMileage,
    updateSellerProfile: updateSellerProfile,
    loginMode: loginMode,

};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserProfile)));