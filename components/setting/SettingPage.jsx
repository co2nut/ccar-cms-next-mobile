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
            <LayoutV2>
                <div className="section-version3">
                    <div style={{touchAction:'pan-y'}} className="container-version3 background-white">

                        <div className="text-align-center" style={{height:'200px', backgroundColor:'#E39E14'}}>
                            <Avatar size={80} style={{marginTop:'60px'}}
                                src={_.get(profile, ['avatar']) || ''}></Avatar> 
                        </div>

                        <div className="thickBorderTop padding-lg background-white" style={{borderRadius:'50px 50px 0px 0px', marginTop:'-50px'}}>

                            <div className="margin-top-lg text-align-center">
                                {_.get(profile, ['fullName']) || ''} 
                            </div>

                            <div className="margin-top-lg">
                                <div className="thickBorder round-border margin-y-md padding-sm" 
                                    onClick={() => {props.router.push(routePaths.profileSettings.as(_.get(props, ['user', 'info', 'user'])).pathname)}}
                                >
                                    <img src="https://img.icons8.com/fluent-systems-regular/25/ffcc32/appointment-reminders--v1.png" style={{marginRight:'10px'}}/>
                                    Notifications
                                </div>

                            <Link href="/termOfUse">
                                <a>
                                    <div className="thickBorder round-border margin-y-md padding-sm" style={{color:'#000000A6'}}>
                                        <img src="https://img.icons8.com/windows/25/ffcc32/privacy-policy.png" style={{marginRight:'10px'}}/>
                                        Policies
                                    </div>
                                </a>
                            </Link>

                            <Link href="/about-us">
                                <a>
                                    <div className="thickBorder round-border margin-y-md padding-sm" style={{color:'#000000A6'}}>
                                        <img src="https://img.icons8.com/material/24/ffcc32/info--v1.png" style={{marginRight:'10px'}}/>
                                        About
                                    </div>
                                </a>
                            </Link>

                            <Link href="/contact-us">
                                <a>
                                    <div className="thickBorder round-border margin-y-md padding-sm" style={{color:'#000000A6'}}>
                                        <img src="https://img.icons8.com/fluent-systems-filled/25/ffcc32/phone.png" style={{marginRight:'10px'}}/>
                                        Support
                                    </div>
                                </a>
                            </Link>

                            <div style={{fontSize:'16px', margin:'10px 10px 10px 0px', textAlign:'center'}} onClick={() => {props.router.push(routePaths.logout.as().pathname)}}>
                                {/* <img src='/logout icon.svg'style={{width:'10%', marginRight:'10px'}}></img> */}
                                    Logout
                            </div>
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