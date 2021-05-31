import { Button, Col, Divider, Form, message, Row, Tabs, Affix } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import client from '../../feathers';
import { checkEnvReturnWebAdmin } from '../../functionContent';
import {
    filterCarBrandMode, filterCarModelMode, filterCarSearchKeywords, loading, quickSearchProductsList,
    setApplyMileage, setApplyPrice, setApplyYear, updateActiveMenu
} from '../../redux/actions/app-actions';
import { fetchProductsList, updateActiveIdProductList } from '../../redux/actions/productsList-actions';
import { updateSellerProfile } from '../../redux/actions/sellerProfile-actions';
import CommunityBox from './CommunityBox';
import ProfileDetailsBox from './ProfileDetailsBox';
import RatingBox from './RatingBox';
import RecommendDialog from './RecommendDialog';
import UserCarFreakPosts from './UserCarFreakPosts';
import UserCarOnSale from './UserCarOnSale';
import UserReceivedReview from './UserReceivedReview';
import UserSavedCarFreakPosts from './UserSavedCarFreakPosts';
import UserSocialBoard from './UserSocialBoard';
import UserSavedSocialBoard from './UserSavedSocialBoard';
import { routePaths } from '../../route';



var frontUrl = checkEnvReturnWebAdmin(client.io.io.uri)

const { TabPane } = Tabs;

const adsverImg = '/buy-car-ads.png'

const DealerProfile = (props) => {

    const [profile, setProfile] = useState({});
    const [tabKey, setTabKey] = useState('carsForSale');

    useEffect(() => {

        console.log('props.router', props.router);
        if (_.get(props.router, `query.tabKey`)) {
            setTabKey(`${props.router.query.tabKey}`)
        }
    }, [props.router])

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }

    }, [props.data, tabKey])

    useEffect(() => {
    }, [profile])

    const _renderDealerDetailsBox = () => {
        return (
            <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <CommunityBox data={profile} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <RatingBox data={profile} />
                </Col>
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                    <div>
                        <img className="w-100" src={adsverImg} />
                    </div>
                </Col>
            </Row>
        )
    }

    const _renderMenu = () => {
        return (
            <Row type="flex" align="middle" className='background-white'>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                    <Tabs activeKey={tabKey}
                        onChange={(key) => {
                            props.router.push(`${routePaths.profile.to}?tabKey=${key || ''}`, routePaths.profile.as(profile, { tabKey: key }), { shallow: true })
                        }}
                    >
                        <TabPane tab="Cars For Sale" key="carsForSale">
                            <Row gutter={[20, 10]} className='margin-top-md'>
                                <Col xs={24} sm={24} md={24} lg={24} xl={18}>
                                    <UserCarOnSale data={profile} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="CarFreaks" key="carfreaks">
                            <Row gutter={[20, 10]} className='margin-top-md'>
                                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                                    <UserCarFreakPosts data={profile} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Social Board" key="socialboard">
                            <Row gutter={[20, 10]} className='margin-top-md'>
                                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                                    <UserSocialBoard data={profile} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Reviews" key="reviews">
                            <Row gutter={[20, 10]} className='margin-top-md padding-x-sm'>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    {_renderDealerDetailsBox()}
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <UserReceivedReview data={profile} />
                                </Col>
                            </Row>
                        </TabPane>
                        {
                            _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(profile, ['_id']) ?
                                <TabPane tab="Saved CarFreaks" key="savedCarFreaks">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="padding-x-sm">
                                        <UserSavedCarFreakPosts data={profile} />
                                    </Col>
                                </TabPane>
                                :
                                null
                        }
                        {
                            _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(profile, ['_id']) ?
                                <TabPane tab="Saved Social Board" key="savedSocialBoard">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <UserSavedSocialBoard data={profile} />
                                    </Col>
                                    {/* <Col xs={6} sm={6} md={0} lg={6} xl={6}>
                                        {_renderDealerDetailsBox()}
                                    </Col> */}
                                </TabPane>
                                :
                                null
                        }
                    </Tabs>
                </Col>
            </Row>
        );
    }


    return (
        <React.Fragment>
            <div className="container-version3">
                <div className="margin-bottom-lg margin-top-lg">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <ProfileDetailsBox data={profile} showProfileActions={props.isOwn} type="dealer"
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
                            {_renderMenu()}
                        </Col>
                    </Row>
                </div>
            </div>

            {
                props.user.authenticated && !props.isOwn ?
                    <RecommendDialog
                        avatar={_.get(profile, ['avatar']) || null}
                        title={`${_.get(profile, ['firstName']) || ''} ${_.get(profile, ['lastName']) || ''}`}
                        desc={"Would you like to recommend our shop to others?"}
                        type="user"
                        userId={_.get(profile, ['_id']) || null}
                        handleError={(e) => { message.error(e.message) }}
                    />
                    :
                    null
            }
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(DealerProfile)));