import { Button, Col, Divider, Form, Icon, message, Modal, Rate, Row, Upload, Drawer } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import {
    ccarWebLogo400X150, defaultProfileBackground, phone, email, help, address, location,
} from '../../icon';
import ClubAvatar from '../carFreak/components/club/club-avatar';
import client from '../../feathers';
import {
    filterCarBrandMode, filterCarModelMode, filterCarSearchKeywords, loading,
    loginMode, quickSearchProductsList,
    setApplyMileage, setApplyPrice, setApplyYear, updateActiveMenu
} from '../../redux/actions/app-actions';
import { fetchProductsList, updateActiveIdProductList } from '../../redux/actions/productsList-actions';
import { setUser } from '../../redux/actions/user-actions';
import UserAvatar from '../general/UserAvatar';
import { withRouter } from 'next/router';
import { updateSellerProfile } from '../../redux/actions/sellerProfile-actions';
import { formatNumber, getUserName, isObject, isValidNumber, notEmptyLength, roundToHalf } from '../../common-function';
import FollowButton from './FollowButton';
import LightBoxGallery from '../general/light-box-gallery';
import ShareButtonDialog from '../general/ShareButtonDialog';
import FollowingListModal from './FollowingListModal';
import FollowerListModal from './FollowerListModal';



var moment = require('moment');

const CLUB_SIZE = 6;

const ProfileDetailsBox = (props) => {

    const [profile, setProfile] = useState({})
    const [clubs, setClubs] = useState([])
    const [clubTotal, setClubTotal] = useState(0);
    const [followerModalVisible, setFollowerModalVisible] = useState(false);
    const [followingModalVisible, setFollowingModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {

            props.data.newCompanyName = _.get(props.data, ['companyId', 'name']) || ''
            props.data.newArea = _.get(props.data, ['companyId', 'area']) || ''
            props.data.newAddress = (_.get(props.data, ['companyId', 'address']) || '') + ','
                + (_.get(props.data, ['companyId', 'area']) || '') + ','
                + (_.get(props.data, ['companyId', 'postCode']) || '') + ','
                + (_.get(props.data, ['companyId', 'state']) || '')


            let newCompanyName = _.get(props.data, ['usercompanyName']) || ''
            let newArea = _.get(props.data, ['userarea']) || ''
            let newAddress = (_.get(props.data, ['useraddress']) || '') + ','
                + (_.get(props.data, ['userarea']) || '') + ','
                + (_.get(props.data, ['userpostCode']) || '') + ','
                + (_.get(props.data, ['userstate']) || '')

            if (_.isEmpty(newCompanyName) === false) { props.data.newCompanyName = newCompanyName }
            if (_.isEmpty(newArea) === false) { props.data.newArea = newArea }
            if (_.isEmpty(newAddress) === false) { if (newAddress !== ',,,') { props.data.newAddress = newAddress } }

            setProfile(props.data);
        } else {
            setProfile({});
        }

    }, [props.data])

    function showModal() {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    function handleSumbitCoverPhoto(coverPhoto) {
        if (coverPhoto && _.get(profile, ['_id'])) {
            props.loading(true);
            client.authenticate().then((res) => {
                let formData = new FormData();
                var fileName = uuidv4() + "-" + coverPhoto.name.split('.').join("-") + "-" + new Date().getTime();

                formData.append('images', coverPhoto.originFileObj, fileName);

                //Upload Image
                axios.post(`${client.io.io.uri}upload-images-array`,
                    formData
                    , {
                        headers: {
                            'Authorization': client.settings.storage.storage.storage['feathers-jwt'],
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then((res) => {
                    if (notEmptyLength(_.get(res, ['data', 'result']))) {
                        coverPhoto = res.data.result[0].url;
                    } else {
                        coverPhoto = null;
                    }

                    client.service('users').patch(profile._id, { profileCoverPhoto: coverPhoto }).then(res => {
                        props.loading(false);
                        if (props.onChange) {
                            props.onChange(res);
                        }
                        if (props.onChangeCoverPhoto) {
                            props.onChangeCoverPhoto(_.get(res, ['profileCoverPhoto']));
                        }
                    }).catch(err => {
                        props.loading(false);
                        message.error(err.message)
                    });

                })
            }).catch(err => {
                props.loading(false);
                message.error(err.message)
            });

        }
    }

    useEffect(() => {
        if (_.isPlainObject(profile) && !_.isEmpty(profile)) {
            getClubs(_.get(profile, ['_id']));
        } else {
            setClubs([]);
        }

    }, [profile])

    function getClubs(id, skip) {

        if (id) {

            if (!isValidNumber(parseInt(skip))) {
                skip = 0;
            } else {
                skip = parseInt(skip);
            }

            client.service('clubjoin').find({
                query: {
                    userId: id,
                    status: 'approved',
                    $sort: {
                        createdAt: -1,
                    },
                    $limit: CLUB_SIZE,
                    $skip: skip,
                    $populate: ['clubId']
                }
            }).then(res => {
                setClubs(_.isArray(res.data) && !_.isEmpty(res.data) ? _.uniqBy(_.map(res.data, 'clubId') || [], '_id') : []);
                setClubTotal(res.total || 0);
            }).catch(err => {
            });
        }
    }

    const _renderBusinessHour = (data) => {

        if (notEmptyLength(data) && isObject(data)) {

            let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            let groupedDay = [];
            let dayLayout = [];
            let keys = Object.keys(data);

            days.forEach(function (day, index) {
                let temp = {};
                let start = keys.find(function (key) {
                    return key == (day + 'Start');
                })
                let end = keys.find(function (key) {
                    return key == (day + 'End');
                })

                temp.day = day;
                temp.dayCount = index;

                if (start != null) {
                    temp.startTime = data[start];
                } else {
                    temp.startTime = null;
                }

                if (end != null) {
                    temp.endTime = data[end];
                } else {
                    temp.endTime = null;
                }
                groupedDay.push(temp);
            })

            let isSame = true;
            let sameStartDay = null;

            groupedDay.forEach(function (item, index) {

                if (index != 0) {
                    if (moment(groupedDay[index].startTime).format("h:mm a") == moment(groupedDay[index - 1].startTime).format("h:mm a") && moment(groupedDay[index].endTime).format("h:mm a") == moment(groupedDay[index - 1].endTime).format("h:mm a")) {
                        isSame = true;
                    } else {
                        isSame = false;
                    }
                }
                if (!notEmptyLength(dayLayout) || !isSame) {
                    let layout = (
                        <div className="flex-justify-start flex-items-align-center fill-parent">
                            <span className="headline   d-inline-block " style={{ width: '140px' }}>
                                {item.day ? item.day : null}
                            </span>
                            <span className="headline   d-inline-block ">
                                :
                            </span>
                            <span className="headline   d-inline-block text-overflow-break text-align-center" style={{ width: '140px' }}>
                                {item.startTime ? moment(item.startTime).format("h:mm a") : null} - {item.endTime ? moment(item.endTime).format("h:mm a") : null}
                            </span>
                        </div>
                    )
                    isSame = true;
                    sameStartDay = item.day;
                    dayLayout.push(layout);
                } else {
                    dayLayout.pop();
                    let layout = (
                        <div className="flex-justify-start flex-items-align-center fill-parent">
                            <span className="headline   d-inline-block margin-right-md" style={{ width: '140px' }}>
                                {sameStartDay} - {item.day ? item.day : null}
                            </span>
                            <span className="headline   d-inline-block margin-right-sm">
                                :
                            </span>
                            <span className="headline   d-inline-block text-overflow-break text-align-center" style={{ width: '140px' }}>
                                {item.startTime ? moment(item.startTime).format("h:mm a") : null} - {item.endTime ? moment(item.endTime).format("h:mm a") : null}
                            </span>
                        </div>
                    )
                    dayLayout.push(layout);
                }
            })

            return (
                <div className="fill-parent d-inline-block text-overflow-break">
                    {dayLayout}
                </div>
            )
        } else {
            return null;
        }


    }

    return (
        <React.Fragment>
            <div className='relative-wrapper' style={{ backgroundImage: `url("${_.get(profile, ['profileCoverPhoto']) || defaultProfileBackground}")`, backgroundRepeat: 'no-repeat', backgroundSize: _.get(profile, ['profileCoverPhoto']) ? 'cover' : '100% 100%', }} >
                <div className='background-black opacity-60 absolute-center'>
                </div>

                    <Row className="padding-md" style={{ minHeight: '100px' }}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
                            <Row >
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <div className='fill-parent flex-justify-center flex-items-align-center'>
                                        <UserAvatar showPreview data={profile} size={50} />
                                    </div>
                                </Col>
                                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                    <div className='flex-items-no-shrink text-align-start white font-weight-bold subtitle1 margin-x-sm margin-bottom-sm width-100'>
                                        {getUserName(profile, 'freakId')}
                                    </div>

                                {
                                    props.showProfileActions ?
                                    <div>
                                        {/* <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Upload {...props} showUploadList={false} onChange={(e) => { handleSumbitCoverPhoto(e.file); }} multiple={false} accept="image/*">
                                                <Button className='margin-right-md white background-grey-opacity-30' style={{paddingRight:'5px', paddingLeft:'5px'}}> <Icon type="camera" /> Edit Cover Photo </Button>
                                            </Upload>
                                        </Col> */}
                                        <Col className="margin-bottom-md" xs={24} sm={24} md={24} lg={24} xl={24} style={{marginLeft:'8px'}}>
                                            <Button onClick={(e) => {
                                                if (_.get(profile, ['userurlId'])) {
                                                    props.router.push(`/profile/${profile.userurlId}/details`)
                                                }
                                                }} className='round-border white background-grey-opacity-30' style={{paddingRight:'5px', paddingLeft:'5px'}}> 
                                                {/* <Icon type="user"/>  */}
                                                Edit Profile 
                                            </Button>
                                        </Col>                                    
                                    </div>
                                        :
                                        null
                                }
                                    
                                {/* {
                                    props.type == 'dealer' ?
                                        [
                                            <div className="avatar flex-justify-center flex-items-align-center" style={{float:'right', backgroundColor:'#FFCC32', height:'25px', width:'25px'}} onClick={() => { showModal() }}>
                                            <Icon type="info" style={{color:'#000000', marginLeft:'1px'}}/>
                                            </div>,
                                            <div className='round-border background-ccar-button-yellow headline padding-left-sm' style={{width:'45%'}}>
                                                {_.isNaN(parseInt(_.get(profile, ['totalAdsAvailable']))) ? 0 : formatNumber(_.get(profile, ['totalAdsAvailable']), 'auto', true, 0, true)} Ads Available
                                            </div>,
                                             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <div>
                                                <Rate value={_.isNaN(parseFloat(_.get(profile, ['avgRating']))) ? 0 : roundToHalf(parseFloat(_.get(profile, ['avgRating'])))} disabled allowHalf style={{ fontSize: '16px' }} ></Rate>
                                            </div>
                                        </Col>
                                        ]
                                        :
                                        null
                                } */}

                                    {
                                    !props.showProfileActions ?
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop:'10px'}}>
                                            <div className="fill-parent flex-justify-start flex-items-align-start">
                                                {/* <Button className='background-ccar-yellow white border-ccar-yellow margin-right-md'>Chat Now</Button> */}
                                                <FollowButton type="user" userId={_.get(profile, ['_id']) || ''} followerId={_.get(props.user, ['authenticated']) ? _.get(props, ['user', 'info', 'user', '_id']) || null : null}
                                                    handleError={(e) => { message.error(e.message) }}
                                                    handleSuccess={(e) => { message.success(e.type == 'remove' ? 'Unfollowed successful' : 'Followed successful') }}
                                                    className="margin-right-md"
                                                    followButton={() => {
                                                        return (
                                                            <Button className='background-ccar-yellow black border-ccar-yellow'>+ Follow</Button>
                                                        )
                                                    }}
                                                />
                                                <ShareButtonDialog className='padding-x-md' /> 
                                            </div>
                                        </Col>
                                        :
                                        null
                                    }
                                    </Col>
                                </Row>
                        </Col>

                        {/* {
                            _.isArray(clubs) && !_.isEmpty(clubs) ?
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Scrollbars autoHeight style={{ width: '100%' }} >
                                        <div className="width-100 flex-justify-start flex-items-align-center">
                                            {
                                                _.map(clubs, function (club, index) {
                                                    return (
                                                        <span className='d-inline-block flex-items-no-shrink margin-right-md relative-wrapper cursor-pointer'>
                                                            <ClubAvatar redirectProfile showTooltip data={club} size={30} />
                                                            {
                                                                clubTotal > CLUB_SIZE && index + 1 == CLUB_SIZE ?
                                                                <span className='fill-parent flex-items-align-center flex-justify-center small-text white avatar absolute-center background-black-opacity-30' >
                                                                    + {formatNumber(clubTotal - CLUB_SIZE, 'auto', true, 0, true) || 0}
                                                                </span>
                                                                :
                                                                null
                                                            }
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Scrollbars>
                                </Col>
                                :
                                null
                        } */}

                        {
                            props.type == 'dealer' ?
                            [
                                <Col span={24} style={{marginTop:'10px'}}>
                                    <Row className="fill-parent">
                                        <Col span={24}>
                                            <div className="width-100 flex-justify-start flex-items-align-start">
                                                <span className='d-inline-block relative-wrapper margin-right-sm flex-items-no-shrink' style={{ height: '20px', width: '20px' }}>
                                                    <img src={phone} className='fill-parent absolute-center' />
                                                </span>
                                                <span className="d-inline-block white margin-right-md flex-items-align-center flex-justify-start headline  ">
                                                    {`${_.get(profile, ['contactNoPrimary']) || ''}`}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col span={24}>
                                            <div className="width-100  flex-justify-start flex-items-align-start">
                                                <span className='d-inline-block relative-wrapper margin-right-sm' style={{ height: '20px', width: '20px' }}>
                                                    <img src={email} className='fill-parent absolute-center flex-items-no-shrink' />
                                                </span>
                                                <span className="d-inline-block white margin-right-md flex-items-align-center flex-justify-start headline  ">
                                                    {`${_.get(profile, ['email']) || ''}`}
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>,
                            ]
                            :
                            null
                        }

                            <Col xs={18} sm={18} md={18} lg={18} xl={18} style={{marginTop:'10px'}}>
                                <Scrollbars style={{ height: 30, maxWidth: '100%'}} autoHide>
                                    <div className="width-100 flex-justify-start flex-items-align-start text-overflow-break headline white">
                                        {_.get(profile, ['bio']) || ''}
                                    </div>
                                </Scrollbars>
                            </Col>
                            <Col span={6}>
                                {
                                    props.type == 'dealer' ?
                                        [
                                            <div className="avatar flex-justify-center flex-items-align-center" style={{float:'right', backgroundColor:'#FFCC32', height:'25px', width:'25px'}} onClick={() => { showModal() }}>
                                            <Icon type="info" style={{color:'#000000', marginLeft:'1px'}}/>
                                            </div>,
                                        ]
                                        :
                                        null
                                }
                            </Col>

                            <Col span={24} className="margin-bottom-sm margin-top-sm">
                            <div className='flex-justify-center flex-items-align-center fill-parent'>
                                <span className='d-inline-block' >
                                    <div className='white font-weight-light text-align-center'>
                                        {!isValidNumber(_.get(profile, ['totalPost'])) ? 0 : formatNumber(_.get(profile, ['totalPost']), null, false, 0, false)}
                                    </div>
                                    <div className='white subtitle1 text-align-center'>
                                        Posts
                                    </div> 
                                </span>
                                <span className='d-inline-block margin-x-sm height-100' >
                                    <Divider orientation="center" type="vertical" className="background-color-white border-white thin-border" style={{ height: '30px' }}></Divider>
                                </span>
                                <span className='d-inline-block cursor-pointer' onClick={(e) => { setFollowerModalVisible(true) }}  >
                                    <div className='white font-weight-light text-align-center'>
                                        {!isValidNumber(_.get(profile, ['totalFollower'])) ? 0 : formatNumber(_.get(profile, ['totalFollower']), 'auto', true, 0, true)}
                                    </div>
                                    <div className='white subtitle1 text-align-center'>
                                        Followers
                                    </div>
                                </span>
                                <span className='d-inline-block margin-x-sm' >
                                    <Divider orientation="center" type="vertical" className="background-color-white border-white thin-border" style={{ height: '30px' }}></Divider>
                                </span>
                                <span className='d-inline-block cursor-pointer' onClick={() => { setFollowingModalVisible(true) }} >
                                    <div className='white font-weight-light text-align-center'>
                                        {!isValidNumber(_.get(profile, ['totalFollowingUser'])) ? 0 : formatNumber(_.get(profile, ['totalFollowingUser']), 'auto', true, 0, true)}
                                    </div>
                                    <div className='white subtitle1 text-align-center'>
                                        Following
                                    </div>
                                </span>
                            </div>
                        </Col>
                        </Row>

                        <Drawer
                            title={null}
                            placement="right"
                            closable={true}
                            onClose={onClose}
                            visible={visible}
                            width = {'100%'}
                            className="login-drawer"
                            zIndex={2000}
                        >
                        {
                            props.type == 'dealer' ?
                            <div style={{backgroundColor:'rgb(14,48,71)'}} className="padding-md">
                                <div className="relative-wrapper background-black-opacity-40" style={{ height: 150, width: 400, maxWidth: '100%', maxHeight: '20%' }}>
                                    <img src={
                                        _.isArray(_.get(profile, ['companyId', 'bannerUrl'])) && notEmptyLength(_.get(profile, ['companyId', 'bannerUrl'])) ?
                                            profile.companyId.bannerUrl[0].url
                                            :
                                            ccarWebLogo400X150
                                    } className={`fill-parent ${_.isArray(_.get(profile, ['companyId', 'bannerUrl'])) && notEmptyLength(_.get(profile, ['companyId', 'bannerUrl'])) ? 'absolute-center-img-no-stretch' : 'absolute-center'}`} />
                                </div>

                                <div>
                                    <p style={{marginBottom:'0px', color:'#ffffff'}}>Address</p>
                                    <div className="thickBorder white round-border padding-sm">
                                        {`${_.get(profile, ['companyId', 'address']) || ''}, ${_.get(profile, ['companyId', 'area']) || ''}, ${_.get(profile, ['companyId', 'postCode']) || ''}, ${_.get(profile, ['companyId', 'state']) || ''}`}
                                    </div>

                                    <p style={{marginBottom:'0px', marginTop:'5px', color:'#ffffff'}}>Location</p>
                                    <div className="thickBorder round-border padding-sm white">
                                        {`${_.get(profile, ['companyId', 'area']) || ''}`}
                                    </div>

                                    <p style={{marginBottom:'0px', marginTop:'5px', color:'#ffffff'}}>Working Hours</p>
                                    <div className="thickBorder round-border padding-sm white">
                                        {_renderBusinessHour(_.get(profile, ['companyId', 'businessHour']) || [])}
                                    </div>

                                    <p style={{marginBottom:'0px', marginTop:'5px', color:'#ffffff'}}>Mobile No.</p>
                                    <div className="thickBorder round-border padding-sm white">
                                        {`${_.get(profile, ['contactNoPrimary']) || ''}`}
                                    </div>

                                    <p style={{marginBottom:'0px', marginTop:'5px', color:'#ffffff'}}>Office No.</p>
                                    <div className="thickBorder round-border padding-sm white">
                                        {`${_.get(profile, ['officeNo']) || ''}`}
                                    </div>

                                    <p style={{marginBottom:'0px', marginTop:'5px', color:'#ffffff'}}>Email</p>
                                    <div className="thickBorder round-border padding-sm white">
                                        {`${_.get(profile, ['email']) || ''}`}
                                    </div>

                                    <p style={{marginBottom:'0px', marginTop:'5px', color:'#ffffff'}}>Website</p>
                                    <div className="thickBorder round-border padding-sm white">
                                        {`${_.get(profile, ['companyId', 'website']) || ''}`}
                                    </div>

                                </div>
                            </div>
                                    :
                                    null
                            }
                        </Drawer>

                        {/* <Modal 
                            title="Company Details"
                            visible={visible}
                            onCancel={() => { onCancel()}}
                            footer={false}
                            width={'100%'}
                        >
                             {
                                props.type == 'dealer' ?
                                    <Row gutter={[0, 10]}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <div className="relative-wrapper background-black-opacity-40" style={{ height: 150, width: 400, maxWidth: '100%', maxHeight: '20%' }}>

                                                <img src={
                                                    _.isArray(_.get(profile, ['companyId', 'bannerUrl'])) && notEmptyLength(_.get(profile, ['companyId', 'bannerUrl'])) ?
                                                        profile.companyId.bannerUrl[0].url
                                                        :
                                                        ccarWebLogo400X150
                                                } className={`fill-parent ${_.isArray(_.get(profile, ['companyId', 'bannerUrl'])) && notEmptyLength(_.get(profile, ['companyId', 'bannerUrl'])) ? 'absolute-center-img-no-stretch' : 'absolute-center'}`} />
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                                            <div className="fill-parent  flex-justify-start flex-items-align-start">
                                                <span className='d-inline-block relative-wrapper margin-right-sm flex-items-no-shrink' style={{ height: '20px', width: '20px' }}>
                                                    <img src="/assets/profile/address-work.png" className="fill-parent absolute-center" ></img>
                                                </span>
                                                <span className="d-inline-block  flex-items-align-center flex-justify-start headline">
                                                    {`${_.get(profile, ['companyId', 'name']) || ''}`}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <div className="fill-parent  flex-justify-start flex-items-align-start">
                                                <span className='d-inline-block relative-wrapper margin-right-sm flex-items-no-shrink' style={{ height: '20px', width: '20px' }}>
                                                    <img src={address} className='fill-parent absolute-center' />
                                                </span>
                                                <span className="d-inline-block flex-items-align-center flex-justify-start headline  uppercase ">
                                                    {`${_.get(profile, ['companyId', 'address']) || ''}, ${_.get(profile, ['companyId', 'area']) || ''}, ${_.get(profile, ['companyId', 'postCode']) || ''}, ${_.get(profile, ['companyId', 'state']) || ''}`}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <div className="fill-parent  flex-justify-start flex-items-align-start">
                                                <span className='d-inline-block relative-wrapper margin-right-sm flex-items-no-shrink' style={{ height: '20px', width: '20px' }}>
                                                    <img src={location} className='fill-parent absolute-center' />
                                                </span>
                                                <span className="d-inline-block flex-items-align-center flex-justify-start headline uppercase  ">
                                                    {`${_.get(profile, ['companyId', 'area']) || ''}`}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <div className="fill-parent flex-justify-start flex-items-align-start">
                                                <span className='d-inline-block relative-wrapper margin-right-sm flex-items-no-shrink' style={{ height: '20px', width: '20px' }}>
                                                    <img src={help} className='fill-parent absolute-center' />
                                                </span>
                                                <span className="d-inline-block flex-items-align-center flex-justify-start headline car-for-sale ">
                                                    {_renderBusinessHour(_.get(profile, ['companyId', 'businessHour']) || [])}
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    :
                                    null
                            }
                        </Modal> */}
            </div>


            <FollowerListModal userId={_.get(profile, ['_id'])} visible={followerModalVisible} onCancel={() => {
                setFollowerModalVisible(false);
            }}
            />

            <FollowingListModal userId={_.get(profile, ['_id'])} visible={followingModalVisible} onCancel={() => {
                setFollowingModalVisible(false);
            }} />
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
    loginMode: loginMode,

    setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ProfileDetailsBox)));