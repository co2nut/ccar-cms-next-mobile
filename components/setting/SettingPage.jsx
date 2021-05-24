import { Col, Row, Button, Drawer, Avatar, message } from 'antd';
import React, { useEffect, useState }from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import LayoutV2 from '../general/LayoutV2';
import Link from 'next/link';
import UserAvatar from '../general/UserAvatar';
import { routePaths } from '../../route';
import { withRouter } from 'next/router';
import _ from 'lodash';
import { notEmptyLength } from '../../common-function';
import client from '../../feathers';
import { filterCarBrandMode, filterCarModelMode, filterCarSearchKeywords, loading, loginMode, quickSearchProductsList, updateActiveMenu } from '../../redux/actions/app-actions';
import { fetchProductsList, updateActiveIdProductList } from '../../redux/actions/productsList-actions';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }


const SettingPage = (props) => {
    const [step, setStep] = useState('')
    const [profile, setProfile] = useState()
    const [navItems, setNavItems] = useState()

    // useEffect(() => {
    //     let path = props.router.asPath.split('/')[4];
    //     setStep(path);
    // }, [props.router.asPath])

    // useEffect(() => {
    //     getProfile();
    // }, [props.router.query.id])

    // function getProfile() {
    //     props.loading(true);
    //     console.log(_.get(props.user, ['info', 'user', 'userurlId']));
    //     console.log(props.router.query.id);
    //     if (_.get(props.user, ['info', 'user', 'userurlId']) == props.router.query.id) {
    //         client.service('users').find({
    //             query: {
    //                 userurlId: props.router.query.id,
    //                 $populate: [
    //                     {
    //                         path: 'companyId',
    //                         ref: 'companys'
    //                     }
    //                 ],
    //             }
    //         }).then(res => {
    //             props.loading(false);
    //             setProfile(_.isArray(res.data) && notEmptyLength(res.data) ? res.data[0] : {})
    //             if (props.onGetProfile) {
    //                 props.onGetProfile(_.isArray(res.data) && notEmptyLength(res.data) ? res.data[0] : {})
    //             }
    //         }).catch(err => {
    //             props.loading(false);
    //             message.error(err.message)
    //         });
    //     } else {
    //         message.error('Profile Not Found.');
    //         // props.router.push('/');
    //     }
    // }

        return (
            <LayoutV2>
                <div className="section-version3">
                    <div style={{touchAction:'pan-y'}} className="container-version3 background-white">

                        <div className="text-align-center" style={{height:'200px', backgroundColor:'#E39E14'}}>
                            <Avatar size={80} style={{marginTop:'60px'}}/>
                        </div>

                        <div className="thickBorderTop padding-lg background-white" style={{borderRadius:'50px 50px 0px 0px', marginTop:'-50px'}}>

                            <div className="margin-top-lg text-align-center">
                                {_.get(profile, ['freakId']) || ''} 
                            </div>

                            <div className="margin-top-lg">
                            {/* <Link href="/about-us">
                                <a> */}
                                    <div className="thickBorder round-border margin-y-md padding-sm" 
                                    onClick={() => {
                                        if (_.get(profile, ['userurlId'])) {
                                        props.router.push(`/profile/${profile.userurlId}/details/settings`);
                                    }}}
                                    >
                                        Notifications
                                    </div>
                                {/* </a>
                            </Link> */}

                            <Link href="/termOfUse">
                                <a>
                                    <div className="thickBorder round-border margin-y-md padding-sm">
                                        Policies
                                    </div>
                                </a>
                            </Link>

                            <Link href="/about-us">
                                <a>
                                    <div className="thickBorder round-border margin-y-md padding-sm">
                                        About
                                    </div>
                                </a>
                            </Link>

                            <Link href="/contact-us">
                                <a>
                                    <div className="thickBorder round-border margin-y-md padding-sm">
                                        Support
                                    </div>
                                </a>
                            </Link>
                            </div>
                       
                        </div>
                        
                    </div>
                </div>
            </LayoutV2>
        )
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
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SettingPage));