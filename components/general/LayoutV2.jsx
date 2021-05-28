import { CaretUpOutlined } from '@ant-design/icons';
import { Affix, Button, Col, Divider, Dropdown, Layout, Menu, Row, Icon, message, Drawer, Badge, Avatar, notification, Popover } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { v4 } from 'uuid';
import { arrayLengthCount, convertParameterToProductListUrl, notEmptyLength } from '../../common-function';
import client from '../../feathers';
import { checkEnv, checkEnvReturnWebAdmin } from '../../functionContent';
import { ccarLogo, bellInactive, wishList, wishlistIconActived, ccarWebLogo2, menuLogin } from '../../icon';
import { loading, loginMode, quickSearchProductsList, registerMode, setApplyMileage, setApplyPrice, setApplyYear, setDisableWindowScroll, setMenuHeight, setNotificationToken, setNotificationTokenTimeOutDate, updateActiveMenu } from '../../redux/actions/app-actions';
import { fetchCompareNewCarLimit } from '../../redux/actions/newcars-actions';
import { clearProductFilterOptions, fetchCompareCarLimit } from '../../redux/actions/productsList-actions';
import { logoutSuccessful, setUser } from '../../redux/actions/user-actions';
import CompareFloatingButton from '../compare/CompareFloatingButton';
import LoginModal from '../login/login';
import GlobalSearchBar from './global-search-bar';
import UserAvatar from './UserAvatar';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { initFirebaseToken } from '../../webPush';
import firebase from 'firebase/app';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import ScrollLoadWrapper from './ScrollLoadWrapper';
import Scrollbars from 'react-custom-scrollbars';
import moment from 'moment';
import WindowScrollDisableWrapper from './WindowScrollDisableWrapper';
import { routePaths } from '../../route';


const NOTIFICATION_BOX_WIDTH = 400
const NOTIFICATION_MAX_LIMIT = 200
const NOTIFICATION_PAGE_SIZE = 10;

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
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

const NotWebDevice = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isMobile || isTablet ? children : null;
}


var frontUrl = checkEnvReturnWebAdmin(client.io.io.uri)
var currentEnv = checkEnv(client.io.io.uri)
class LayoutV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchWords: [],
            searchValue: null,
            value: undefined,
            typingTimeout: 0,
            scrollYPosition: 0,
            run: true,
            dataSource: [],
            newKppJson: [],
            visible: false,
            scrollRange: 100,
            scrollY: 0,
            backgroundStyle: {
                backgroundImage: null,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
            },
            window: {},
            showProfileMenu: false,
            notificationBoxRef: {},
            notificationLoading: false,
            notificationPage: 1,
            notificationTotal: 0,
            notifications: [],
            seenNotifications: [],
            notificationBoxVisible: false,
            notificationTabKey: 'carfreaks',
            loginType:'user',
        }

    }


    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    handleExpiredToken = () => {
        if (_.get(this.props, ['user', 'authenticated'])) {
            client.authenticate().then(res => {
                this.props.setUser(res.user);
            }).catch(err => {
                this.props.router.push('/logout');
                this.props.loginMode(true);
                message.error('Your authentication session is expired. Please login again.');
            });
        }
    }

    getUserNotifications(skip) {

        try {
            if (_.get(this.props.user, ['authenticated']) && _.get(this.props.user, ['info', 'user', '_id'])) {
                this.setState({
                    notificationLoading: true,
                }, () => {
                    axios.get(`${client.io.io.uri}getUserNotifications`, {
                        params: {
                            userId: this.props.user.info.user._id,
                            limit: NOTIFICATION_PAGE_SIZE,
                            skip: skip || 0
                        }
                    }).then(res => {

                        this.setState({
                            notificationLoading: false,
                            notifications: this.state.notificationPage == 1 ? _.get(res, 'data.data') || [] : _.concat(this.state.notifications, _.get(res, 'data.data') || []),
                            notificationTotal: _.get(res, 'data.total') || 0,
                        })

                    }).catch(err => {
                        this.setState({
                            notificationLoading: false,
                        })
                    });
                })
            } else {
                this.setState({
                    notifications: [],
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    getUserSeenNotifications() {

        try {
            if (_.get(this.props.user, ['authenticated']) && _.get(this.props.user, ['info', 'user', '_id'])) {
                client.service('notificationseen').find({
                    query: {
                        userId: this.props.user.info.user._id
                    }
                }).then(res => {
                    this.setState({
                        seenNotifications: _.get(res, ['data']) || [],
                    })

                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.setState({
                    seenNotifications: [],
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    async setFirebaseToken(reauthenticate) {
        try {

            const token = await initFirebaseToken();
            if (token != this.props.app.notificationToken || !this.props.app.notificationTokenTimeOutDate || moment().diff(moment(this.props.app.notificationTokenTimeOutDate), 'days', true) > 1 || reauthenticate) {

                this.props.setNotificationToken(token);
                this.props.setNotificationTokenTimeOutDate(moment().add(1, 'days'));
                let self = this;
                this.subscribeNotificationTopics(token).then(() => {
                    if (self.state.notificationPage == 1) {
                        self.getUserNotifications(0);
                    } else {
                        self.setState({
                            notificationPage: 1,
                        })
                    }
                });

            }
            this.listenOnNotification();
        } catch (error) {
            console.log(error);
        }
    }

    listenOnNotification() {

        const messaging = firebase.messaging();
        messaging.onMessage((message) => {
            this._renderNotification(message);
            if (_.get(message, 'data._id') && _.get(this.props.user, ['authenticated']) && _.get(this.props.user, ['info', 'user', '_id'])) {
                client.service('notifications').find({
                    query: {
                        _id: message.data._id,
                        $limit: 1,
                    }
                }).then(res => {
                    if (_.get(res, 'data[0]')) {
                        this.setState({
                            notifications: [res.data[0], ...this.state.notifications]
                        })
                    }
                })
            }
            //
        });
    }

    subscribeNotificationTopics(token) {

        if (_.get(this.props.user, ['authenticated']) && _.get(this.props.user, ['info', 'user', '_id'])) {
            return axios.post(`${client.io.io.uri}pushNotificationTokenToUser`, {
                userId: _.get(this.props.user, ['info', 'user', '_id']),
                token: token
            })
        } else {
            return axios.post(`${client.io.io.uri}subscribePublicNotification`, {
                token: token,
            })
        }
    }

    _renderNotification = (data) => {

        notification.open({
            message: _.get(data, 'notification.title') || '',
            description: _.get(data, 'notification.body') || '',
            duration: 10,
            placement: 'bottomRight',
            icon: <Avatar src={_.get(data, 'data.avatar') || ccarLogo} />,
            key: v4(),
            className: 'cursor-pointer',
            onClick: () => {
                if (_.get(data, 'data.path')) {
                    this.props.router.push(_.get(data, 'data.path') || '/')
                }
            },

        })
    }

    sendTestMessage(text) {
        axios.post(`${client.io.io.uri}sendTestNotification`, {
            params: {
                text: text || '',
            }
        }).then(res => {

        }).catch(err => {
        });
    }

    componentDidMount() {
        if (typeof window != 'undefined') {
            this.setState({
                window: window,
            })
        }

        window.scrollTo(0, 0);
        this.handleExpiredToken();
        this.setFirebaseToken();
        if (_.get(this.props.user, ['authenticated']) && _.get(this.props.user, ['info', 'user', '_id'])) {
            this.getUserSeenNotifications();
            if (this.state.notificationPage == 1) {
                this.getUserNotifications(0);
            } else {
                this.setState({
                    notificationPage: 1,
                })
            }
        }
        this.props.loading(false);
        // if(this.props.location.pathname.indexOf('viewCar') > 0){
        //   window.location.href="ccarmy:/" + this.props.location.pathname
        // }
        // this.props.setMenuHeight(document.getElementById('menu-bar').getBoundingClientRect().height);
        if (this.props.backgroundImage) {
            this.setState({
                backgroundStyle: {
                    ...this.state.backgroundStyle,
                    backgroundImage: this.props.backgroundImage,
                }
            })
        }

        if (this.props.scrollRange) {
            this.setState({
                scrollRange: this.props.scrollRange,
            })
        }

        axios.get(`${client.io.io.uri}getCmsParameters`).then(res => {
            if (notEmptyLength(res.data.data)) {
                let self = this;
                _.forEach(res.data.data, function (item) {
                    switch (item.table) {
                        case 'compareNewCar':
                            // self.props.fetchCompareNewCarLimit(-1);
                            break;
                        case 'compareLimit':
                            self.props.fetchCompareCarLimit(isValidNumber(parseInt(_.get(item, ['compareLimit']))) ? parseInt(_.get(item, ['compareLimit'])) : 5);
                            break;

                        default:
                            break;
                    }
                })
            }
        }).catch(err => {
            // message.error(err.message)
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.scrollRange != this.props.scrollRange) {
            this.setState({
                scrollRange: this.props.scrollRange,
            })
        }

        if (!_.isEqual(prevState.window, this.state.window)) {
            this.state.window.addEventListener('scroll', this.handleScroll, { passive: true });

            return () => {
                this.state.window.removeEventListener('scroll', this.handleScroll);
            };
        }

        if (prevProps.user.authenticated != this.props.user.authenticated) {
            this.setFirebaseToken(true);
            this.getUserSeenNotifications();
            if (this.state.notificationPage == 1) {
                this.getUserNotifications(0);
            } else {
                this.setState({
                    notificationPage: 1,
                })
            }
        }

        if (prevState.notificationBoxVisible != this.state.notificationBoxVisible) {
            if (this.state.notificationBoxRef.current) {
                this.state.notificationBoxRef.current.scrollToTop();
            }

        }

        if (prevState.notificationPage != this.state.notificationPage && arrayLengthCount(this.state.notifications) < NOTIFICATION_MAX_LIMIT) {
            this.getUserNotifications((this.state.notificationPage - 1) * NOTIFICATION_PAGE_SIZE)
        }
    }

    handleScroll = (e) => {
        this.setState({
            scrollY: window.scrollY,
        })
        let scrollBarHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
        if (window.scrollY + scrollBarHeight + this.state.scrollRange >= document.body.scrollHeight) {
            if (this.props.onScrolledBottom) {
                this.props.onScrolledBottom();
            }
        }

    };

    _renderUser = (profileMenu) => {
        let self = this;
        if (_.get(this.props, ['user', 'authenticated'])) {
            return (
                <span className='d-inline-block margin-x-md flex-items-align-center' >
                    {/* <span className='d-inline-block margin-right-md' >
                        <Badge count={1}>
                            <Avatar
                                icon={!this.props.user.info || !this.props.user.info.user || !this.props.user.info.user.avatar ? 'user' : null}
                                src={!this.props.user.info || !this.props.user.info.user || !this.props.user.info.user.avatar ? null : this.props.user.info.user.avatar} />
                        </Badge>
                    </span> */}
                    <Dropdown placement="bottomRight" overlayClassName="padding-top-lg" visible={self.state.showProfileMenu} onVisibleChange={(v) => {
                        if (self.state.showProfileMenu != v) {
                            self.setState({
                                showProfileMenu: v,
                            })
                        }
                    }} overlayStyle={{ width: '250px' }} overlay={() => {
                        return (
                            <Menu>
                                {
                                    _.map(profileMenu, function (menu, index) {
                                        return (
                                            <Menu.Item key={`profile-menu-${++index}`} className='padding-sm'>
                                                <Link shallow={false} href={menu.to || '/'} as={typeof (menu.as) == 'function' ? menu.as(_.get(self.props.user, ['info', 'user'])) : '/'}   >
                                                    <a>
                                                        {
                                                            menu.render ?
                                                                menu.render()
                                                                :
                                                                <div className="flex-justify-start flex-items-align-center">
                                                                    <span className='d-inline-block margin-x-sm'>
                                                                        {menu.icon}
                                                                    </span>
                                                                    <span className='d-inline-block black headline subtitle1   cursor-pointer margin-x-sm' >
                                                                        {menu.text}
                                                                    </span>
                                                                </div>
                                                        }
                                                    </a>

                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                                {
                                    _.get(this.props.user, ['info', 'user', 'role']) != 'mobile-user' && _.get(this.props.user, ['info', 'user', 'role']) != 'normaluser' ?
                                        <Menu.Item key={`profile-menu-dealership`} className='padding-sm' onClick={(e) => {

                                        }}>
                                            <div className="flex-justify-start flex-items-align-center">
                                                <Button className=" background-ccar-button-yellow black border-ccar-button-yellow text-align-center" block target="_blank" href={frontUrl} >Manage My Ads</Button>
                                            </div>
                                        </Menu.Item>
                                        :
                                        null
                                }
                            </Menu>
                        )
                    }}>
                        <span className='d-inline-block cursor-pointer' style={{ maxWidth: '200px' }} >
                            <UserAvatar showNameRight avatarClassName="flex-items-no-shrink" textClassName="white text-truncate subtitle1" size={35} data={_.get(this.props.user, ['info', 'user'])} />
                        </span>
                    </Dropdown>


                    <span className='d-inline-block margin-left-md' >
                        {this._renderNotificationBox()}
                    </span>
                </span>
            );
        } else {
            return (
                <span className='flex-items-align-center margin-x-md white subtitle1 cursor-pointer ' onClick={() => { this.props.loginMode(true) }}>
                    <img src="/assets/CarListingIcon/login@3x-2.png" style={{ width: 20 }} className="margin-right-xs" />
                    Login
                </span>
            )
        }
    }

    _renderUserRes = (profileMenu) => {
        let self = this;
        if (_.get(this.props, ['user', 'authenticated'])) {
            return (
                <span className='margin-bottom-xs flex-items-align-center' >
                    <Dropdown placement="bottomRight" overlayClassName="padding-top-lg" overlayStyle={{ width: '250px' }} overlay={() => {
                        return (
                            <Menu>
                                {
                                    _.map(profileMenu, function (menu, index) {
                                        return (
                                            <Menu.Item key={`profile-menu-${++index}`} className='padding-sm'>
                                                <Link shallow={false} href={menu.to || '/'} as={typeof (menu.as) == 'function' ? menu.as(_.get(self.props.user, ['info', 'user'])) : '/'}    >
                                                    <a>
                                                        <div className="flex-justify-start flex-items-align-center">
                                                            <span className='d-inline-block margin-x-sm'>
                                                                {menu.icon}
                                                            </span>
                                                            <span className='d-inline-block black headline subtitle1 cursor-pointer margin-x-sm' >
                                                                {menu.text}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                                {
                                    _.get(this.props.user, ['info', 'user', 'role']) != 'mobile-user' && _.get(this.props.user, ['info', 'user', 'role']) != 'normaluser' ?
                                        <Menu.Item key={`profile-menu-dealership`} className='padding-sm' onClick={(e) => {

                                        }}>
                                            <div className="flex-justify-start flex-items-align-center">
                                                <Button className=" background-ccar-button-yellow black border-ccar-button-yellow text-align-center" block shape="round" target="_blank" href={frontUrl} >Manage My Ads</Button>
                                            </div>
                                        </Menu.Item>
                                        :
                                        null
                                }
                            </Menu>
                        )
                    }}>
                        <div>
                            <div className=' cursor-pointer' >
                                <Badge >
                                    <Avatar
                                        icon={!this.props.user.info || !this.props.user.info.user || !this.props.user.info.user.avatar ? 'user' : null}
                                        src={!this.props.user.info || !this.props.user.info.user || !this.props.user.info.user.avatar ? null : this.props.user.info.user.avatar} />
                                </Badge>
                            </div>
                            <div style={{ color: "#1890ff" }} className=' subtitle1 cursor-pointer'>
                                My Profile
                            </div>
                        </div>
                    </Dropdown>
                </span>
            );
        } else {
            return (
                // <span style={{ color: "#1890ff" }} className='flex-items-align-center subtitle1 cursor-pointer ' >
                <span>
                    {/* <img src="/assets/CarListingIcon/login@3x-2.png" style={{ width: 20 }} className="margin-right-xs" /> */}
                    <Button className=" background-ccar-button-yellow black border-ccar-button-yellow text-align-center cursor-pointer round-border" onClick={() => { this.props.loginMode(true) }}>
                        Login
                    </Button>
                </span>
            )
        }
    }

    _renderFooter = () => {
        return (
            <React.Fragment>
                <Layout.Footer className="footer">
                    <div className="fixed-container">
                        <div>
                            <Row>
                                <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20} style={{ color: 'white', textAlign: 'left' }}>
                                            <p style={{ marginBottom: '0px', marginTop: '12px', fontWeight: '700' }}> #1 Car Social Platform </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={0} sm={0} md={12} lg={12} xl={12} style={{ textAlign: 'right', color: 'white' }}>
                                    {/* <span> Available on:</span> */}
                                    <span> <a href="https://play.google.com/store/apps/details?id=com.ccarmy" target="_blank"> <img style={{ padding: '5px', width: 40 }} src="/assets/Social Media/Google Play@3x.png" /></a> </span>
                                    <span> <a href="https://apps.apple.com/my/app/ccar-my/id1526288072" target="_blank"><img style={{ padding: '5px', width: 40 }} src="/assets/Social Media/Apple Store @3x.png" /></a></span>
                                    <span> <a href="https://appgallery.huawei.com/#/app/C102692397" target="_blank"><img style={{ padding: '5px', width: 38 }} src="/assets/Social Media/huawei.png" /></a></span>

                                    {/* <span> Find us at: </span> */}
                                    <span> <a href="https://www.facebook.com/CCARmy-101790904962298/" target="_blank"> <img style={{ padding: '5px', width: 40 }} src="/assets/Social Media/Facebook @3x.png" /></a> </span>
                                    <span> <a href="https://www.instagram.com/ccar.my/" target="_blank"> <img style={{ padding: '5px', width: 35 }} src="/assets/Social Media/instagram.png" /></a> </span>
                                    <span> <a href="https://www.youtube.com/channel/UCxicQ1-VsdNWEdGZCqU-35g" target="_blank"> <img style={{ padding: '5px', width: 40 }} src="/assets/Social Media/youtube.png" /> </a> </span>
                                </Col>

                                <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                                    <Row>
                                        <Col span={8} className="justify-flex-start" >
                                            <p style={{ fontSize: '10px', color: 'white', fontWeight: '700', marginTop: '4px', marginBottom: '0px', float: 'left' }}> #1 Car Social Platform </p>
                                        </Col>
                                        <Col span={16} style={{ fontSize: '15px' }}>
                                            <Row>
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ fontSize: '10px', color: 'white' }}>
                                                    <div style={{ float: 'right' }}>
                                                        {/* <span> Available on:</span> */}
                                                        <span> <a href="https://play.google.com/store/apps/details?id=com.ccarmy" target="_blank"> <img style={{ padding: '2px', width: 25 }} src="/assets/Social Media/Google Play@3x.png" /></a> </span>
                                                        <span> <a href="https://apps.apple.com/my/app/ccar-my/id1526288072" target="_blank"><img style={{ padding: '2px', width: 25 }} src="/assets/Social Media/Apple Store @3x.png" /></a></span>
                                                        <span> <a href="" target="_blank"><img style={{ padding: '2px', width: 23 }} src="/assets/Social Media/huawei.png" /></a></span>

                                                        {/* <span> Find us at: </span> */}
                                                        <span> <a href="https://www.facebook.com/CCARmy-101790904962298/" target="_blank"> <img style={{ padding: '2px', width: 25 }} src="/assets/Social Media/Facebook @3x.png" /></a> </span>
                                                        <span> <a href="https://www.instagram.com/ccar.my/" target="_blank"> <img style={{ padding: '2px', width: 20 }} src="/assets/Social Media/instagram.png" /></a> </span>
                                                        <span> <a href="https://www.youtube.com/channel/UCxicQ1-VsdNWEdGZCqU-35g" target="_blank"> <img style={{ padding: '2px', width: 25 }} src="/assets/Social Media/youtube.png" /> </a> </span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Divider orientation="left" style={{ border: 'solid 1px #FFCC32', fontWeight: 'normal', margin: '4px 0px' }} />

                                    <Row style={{ color: '#E3C57D' }}>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ fontSize: '15px' }}>
                                            <div className="flex-justify-start white flex-items-align-center main-footer ">
                                                CCAR.MY <Icon type="copyright" /> 2020
                                                </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ fontSize: '15px', textAlign: 'right' }}>
                                            <div className="flex-justify-end flex-items-align-center main-footer">
                                                {/* Terms of Use | Privacy Policy */}
                                                <Link shallow={false} href={routePaths.termsOfUse.to || '/'} as={typeof (routePaths.termsOfUse.as) == 'function' ? routePaths.termsOfUse.as() : '/'}   >Terms of Use | Privacy Policy</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Layout.Footer>
            </React.Fragment>
        )
    }

    _renderNotificationBox = () => {

        const tabs = [
            {
                value: 'carfreaks',
                text: 'CarFreaks',
            },
            {
                value: 'carAds',
                text: 'CarMarket',
            },
            {
                value: 'other',
                text: 'Others',
            },
        ]

        let self = this;

        return (
            <Popover
                onVisibleChange={(v) => {
                    if (self.state.notificationBoxVisible != v) {
                        this.setState({
                            notificationBoxVisible: v,
                        })
                    }
                }}
                overlayClassName="pop-over-body-no-padding pop-over-title-no-padding"
                overlayStyle={{ position: 'fixed' }}
                trigger="click"
                arrowPointAtCenter
                placement="bottomLeft"
                title={
                    <div className=" h6 font-weight-bold grey-darken-1 padding-x-md padding-y-xs" style={{ width: NOTIFICATION_BOX_WIDTH }}>
                        Notifications
                     </div>
                }
                content={
                    <div style={{ width: NOTIFICATION_BOX_WIDTH }}>
                        {/* <div className="flex-justify-start flex-items-align-center">
                            {
                                _.map(tabs, function (tab) {
                                    return (
                                        <span className={`d-inline-block margin-right-md cursor-pointer ${self.state.notificationTabKey == tab.value ? 'ccar-button-yellow' : 'grey-darken-1'}`} onClick={(e) => {
                                            self.setState({
                                                notificationTabKey: tab.value
                                            })
                                        }} >
                                            {tab.text}
                                        </span>
                                    )
                                })
                            }
                        </div> */}
                        {
                            _.isArray(self.state.notifications) && !_.isEmpty(self.state.notifications) ?
                                <ScrollLoadWrapper getRef={(ref) => {
                                    self.setState({
                                        notificationBoxRef: ref,
                                    })
                                }}
                                    autoHide
                                    scrollRangeUsePercentage scrollRange={50} autoHide autoHeight autoHeightMax={400}
                                    onScrolledBottom={() => {
                                        if (arrayLengthCount(this.state.notifications) < this.state.notificationTotal && !this.state.notificationLoading) {
                                            self.setState({
                                                notificationPage: this.state.notificationPage + 1,
                                            })
                                        }
                                    }}>
                                    <div >
                                        {
                                            _.map(this.state.notifications, function (notification) {
                                                if (_.isPlainObject(notification) && !_.isEmpty(notification)) {
                                                    return (
                                                        <Link href={notification.path || '/'}>
                                                            <a>
                                                                <div className={`flex-justify-start flex-items-align-center hover-background-yellow-lighten-2 padding-x-md cursor-pointer grey-darken-1 width-100 ${_.some(self.state.seenNotifications, ['notificationId', notification._id]) ? '' : 'background-light-blue-lighten-5'}`} onClick={(e) => {
                                                                    if (!_.some(self.state.seenNotifications, ['notificationId', notification._id])) {
                                                                        client.service('notificationseen').create({
                                                                            userId: _.get(self.props.user, ['info', 'user', '_id']),
                                                                            notificationId: notification._id,
                                                                        }, {
                                                                            query: {
                                                                                userId: _.get(self.props.user, ['info', 'user', '_id']),
                                                                                notificationId: notification._id,
                                                                            },
                                                                        }).then(res => {
                                                                            self.setState({
                                                                                seenNotifications: _.concat([res], self.state.seenNotifications),
                                                                            })
                                                                        })
                                                                    }
                                                                }}
                                                                >
                                                                    <img src={notification.avatar || ccarLogo} style={{ width: 50, height: 50 }} className="margin-right-md avatar" />
                                                                    <span className='d-inline-block width-80' >
                                                                        <div className=" body2 text-truncate-twoline grey-darken-3">
                                                                            {_.get(notification, 'title') || ''}
                                                                        </div>
                                                                        <div className="overline text-truncate ">
                                                                            {_.get(notification, 'body') || ''}
                                                                        </div>
                                                                        <div className="small-text text-truncate margin-top-sm">
                                                                            {moment(notification.createdAt).fromNow()}
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    )
                                                }
                                                return null;
                                            })
                                        }
                                    </div>
                                </ScrollLoadWrapper>
                                :
                                <div className="flex-justify-center flex-items-align-center" style={{ height: 300 }}>
                                    <span className="d-inline-block">
                                        <div className="flex-justify-center flex-items-align-center">
                                            <img src={bellInactive} style={{ height: 70, width: 70 }} />
                                        </div>
                                        <div className="h6 grey-darken-1 margin-top-sm">
                                            No notification yet
                                        </div>
                                        <div className="caption grey-darken-1 flex-justify-center">
                                            When you get notification,
                                        </div>
                                        <div className="caption grey-darken-1 flex-justify-center">
                                            they'll show up here
                                        </div>
                                        <div className="flex-justify-center margin-top-sm">
                                            <Button className=" background-ccar-button-yellow">Refresh</Button>
                                        </div>

                                    </span>
                                </div>
                        }
                    </div>
                }

            >
                <Desktop>
                    <span className="flex-justify-start flex-items-align-center" id="notification-menu-item">
                        <Badge dot><Icon type="bell" theme="filled" className="white cursor-pointer" style={{ fontSize: 20 }} /></Badge>
                    </span>
                </Desktop>

                <Tablet>
                    <span className="flex-justify-start flex-items-align-center" id="notification-menu-item">
                        <Badge dot><Icon type="bell" theme="filled" className="white cursor-pointer" style={{ fontSize: 25 }} /></Badge>
                    </span>
                </Tablet>
            </Popover>
        )
    }

    render() {
        let self = this;

        const outterMenu = [
            {
                icon: '',
                text: 'CarMarket',
                ...routePaths.carsOnSale,
            },
            {
                icon: '',
                text: 'All-NewCar',
                ...routePaths.newCar,
            },
            {
                icon: '',
                text: <span className='d-inline-block white background-red  padding-x-md' style={{ borderRadius: '5px' }} >
                    LIVE
    </span>,
                ...routePaths.live
            },
        ];



        let innerMenu = [
            {
                icon: '',
                text: 'Car Review',
                ...routePaths.carReview,
            },
            {
                icon: '',
                text: 'Social News & Videos',
                ...routePaths.socialNewsAndVideo,
            },
            {
                icon: '',
                text: 'CarFreaks',
                ...routePaths.carFreaks,
            },
            {
                icon: '',
                text: 'Petrol Price',
                ...routePaths.petrolPrice,
            },
            {
                icon: '',
                text: 'Driving School',
                ...routePaths.kpp,
            },
            {
                icon: '',
                text: 'About Us',
                ...routePaths.aboutUs,
            },
            {
                icon: '',
                text: 'Contact Us',
                ...routePaths.contactUs,
            },

        ];

        if (currentEnv !== 'prod') {
            let insurances = [
                {
                    icon: '',
                    text: 'Road Tax & Insurance',
                    path: '/roadtax-insurance'
                },
                {
                    icon: '',
                    text: 'Extended Warranty',
                    path: '/extended-warranty'
                },
                {
                    icon: '',
                    text: 'Latest Car Plate No.',
                    path: '/latest-car-plate-no'
                },
            ]
            innerMenu = innerMenu.concat(insurances)
        }

        let profileMenu = [
            {
                icon: <span className='flex-items-align-center flex-justify-center avatar background-grey-darken-3' style={{ width: '20px', height: '20px' }} >
                    <Icon type="user" style={{ fontSize: '12px', color: 'white' }} />
                </span>,
                text: 'Profile',
                ...routePaths.profile
            },
            {
                icon: <span className='flex-items-align-center flex-justify-center' >
                    <img src={wishList} style={{ width: '20px', height: '20px' }} />
                </span>,
                text: 'My Wishlist',
                ...routePaths.profile
            },
            {
                icon: (<span className='d-inline-block relative-wrapper' style={{ width: '20px', height: '20px' }} >
                    <img src='/logout icon.svg' className='fill-parent absolute-center'></img>
                </span>),
                text: 'Log out',
                ...routePaths.logout
            },
        ];
        
        return (
            <Layout>
                {/* <WindowScrollDisableWrapper> */}
                <div className="relative-wrapper">
                    <Row style={{ position: 'sticky', top: 0, zIndex: '99', height: '61px' }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                        <Mobile>
                            <div id="menu-bar" className="topnav" style={{ position: 'sticky', top: 0, zIndex: '99', minHeight: '100px', backgroundColor: '#000000' }}>
                                <Row type="flex" align="middle" className='padding-x-md' >
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <div className='flex-justify-start flex-items-align-center topnav-child'  >
                                            <span className='d-inline-block relative-wrapper margin-right-md cursor-pointer' style={{ height: '62px', width: '214px' }} onClick={(e) => { this.props.history.push('/') }}>
                                                <img alt="ccar" className="fill-parent absolute-center" src="/assets/ccar-header-logo.svg" />
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <GlobalSearchBar searchTypes={this.props.searchTypes || ['productAds', 'carspec', 'dealerWithAds']} />
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} offset={2}>
                                        <div style={{ width: '300' }}>
                                            <Button type="primary" onClick={this.showDrawer} style={{ marginBottom: 0, float: 'right' }} >
                                                <Icon type="menu" />
                                            </Button>

                                                <Drawer
                                                className="login-drawer"
                                                title={null}
                                                placement="right"
                                                closable={true}
                                                onClose={this.onClose}
                                                visible={this.state.visible}
                                                width = {'100%'}
                                            >
                                                { _.get(this.props.user, ['authenticated']) ?
                                                <div>
                                                {/* <div className="margin-bottom-xs padding-sm" style={{backgroundImage: `url("${menuLogin}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '15vh', backgroundPosition:'center'}}>
                                                    <div>
                                                        <span style={{marginRight:'10px'}}>
                                                            <img src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png"/>
                                                        </span>
                                                        <span style={{color:'#ffffff', fontWeight:'700'}}>Login to access more features now!</span> 
                                                    </div>
                                                </div> */}

                                                <div className="margin-left-lg margin-top-lg">
                                                    {this._renderUserRes(profileMenu)}
                                                </div>

                                                {/* <div>
                                                    <Button className=" background-ccar-button-yellow black border-ccar-button-yellow text-align-center cursor-pointer round-border" onClick={() => { this.props.loginMode(true) }}>
                                                        Login
                                                    </Button>
                                                </div> */}

                                                {/* <div>
                                                {
                                                    _.get(this.props.user, ['info', 'user', 'role']) != 'mobile-user' && _.get(this.props.user, ['info', 'user', 'role']) != 'normaluser' ?
                                                    <Menu.Item key={`profile-menu-dealership`} className='padding-sm' onClick={(e) => {

                                                    }}>
                                                    <div className="flex-justify-start flex-items-align-center">
                                                        <Button className=" background-ccar-button-yellow black border-ccar-button-yellow text-align-center" block target="_blank" href={frontUrl} >Manage My Ads</Button>
                                                    </div>
                                                    </Menu.Item>
                                                    :
                                                    null
                                                }
                                                </div> */}
                                                

                                                {/* <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '1' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/')}}> Home</div> */}

                                            <div className="padding-md">
                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '2' ? 'yellow' : ''}`} onClick={() => {this.props.router.push(routePaths.carsOnSale.as().pathname)}}> 
                                                            <img src="/assets/menu-icon/buy-car.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}> CarMarket </p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border ">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '3' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/newcar')}}> 
                                                            <img src="/assets/menu-icon/new-car.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>All-NewCar</p>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '6' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/car-freaks')}}> 
                                                            <img src="/assets/menu-icon/carfreaks.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>CarFreaks</p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '4' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/live')}}> 
                                                            <img src="/assets/menu-icon/live.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>LIVE</p> 
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '5' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/socialNews')}}> 
                                                            <img src="/assets/menu-icon/social-news.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Social News </p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '9' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/socialVideos')}}> 
                                                            <img src="/assets/menu-icon/social-videos.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Social Videos </p>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '8' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/kpp')}}> 
                                                            <img src="/assets/menu-icon/driving-school.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Driving School</p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '7' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/petrolprice')}}> 
                                                            <img src="/assets/menu-icon/fuel.png" style={{width:'40%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Petrol Price</p>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <div style={{fontSize:'16px', margin:'10px 10px 10px 0px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`} onClick={() => {this.props.router.push(routePaths.profileWishLists.as(profile).pathname)}}> 
                                                    <img src="/assets/Archive/wishlist.png" style={{width:'10%', marginRight:'10px'}}></img>My Wishlist</div>
                                                <div style={{fontSize:'16px', margin:'10px 10px 10px 0px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/setting')}}> 
                                                    <img src="/assets/Archive/setting.png" style={{width:'10%', marginRight:'10px'}}></img>Setting </div>
                                                <div style={{fontSize:'16px', margin:'10px 10px 10px 0px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/faq')}}> 
                                                    <img src="/assets/Archive/faq.png" style={{width:'10%', marginRight:'10px'}}></img>FAQ</div>

                                                <div style={{fontSize:'16px', margin:'10px 10px 10px 0px'}} onClick={() => { this.props.router.push(routePaths.logout.as().pathname)}}>
                                                    {/* <span className='d-inline-block relative-wrapper' style={{ width: '20px', height: '20px' }} > */}
                                                        <img src='/logout icon.svg'style={{width:'10%', marginRight:'10px'}}></img>
                                                    {/* </span> */}
                                                    Logout
                                                </div>
                                            </div>
                                            </div>

                                            : 
            
                                            <div>
                                                <div className="margin-bottom-xs padding-sm" style={{backgroundImage: `url("${menuLogin}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '15vh', backgroundPosition:'center'}}>
                                                    <div>
                                                        <span style={{marginRight:'10px'}}>
                                                            <img src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png"/>
                                                        </span>
                                                        <span style={{color:'#ffffff', fontWeight:'700'}}>Login to access more features now!</span> 
                                                    </div>
                                                    {/* <div className="flex-justify-center">
                                                        {this._renderUserRes(profileMenu)}
                                                    </div> */}
                                                    <div>
                                                    <Button className=" background-ccar-button-yellow black border-ccar-button-yellow text-align-center cursor-pointer round-border" onClick={() => { this.props.loginMode(true) }}>
                                                        Login
                                                    </Button>
                                                </div>
                                                </div>

                                                {/* <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '1' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/')}}> Home</div> */}

                                            <div className="padding-md">
                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '2' ? 'yellow' : ''}`} onClick={() => {this.props.router.push(routePaths.carsOnSale.as().pathname)}}> 
                                                            <img src="/assets/menu-icon/buy-car.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}> CarMarket </p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border ">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '3' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/newcar')}}> 
                                                            <img src="/assets/menu-icon/new-car.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>All-NewCar</p>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '6' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/car-freaks')}}> 
                                                            <img src="/assets/menu-icon/carfreaks.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>CarFreaks</p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '4' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/live')}}> 
                                                            <img src="/assets/menu-icon/live.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>LIVE</p> 
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '5' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/socialNews')}}> 
                                                            <img src="/assets/menu-icon/social-news.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Social News </p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '9' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/socialVideos')}}> 
                                                            <img src="/assets/menu-icon/social-videos.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Social Videos </p>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="margin-bottom-md">
                                                    <Col span={11} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '8' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/kpp')}}> 
                                                            <img src="/assets/menu-icon/driving-school.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Driving School</p>
                                                        </div>
                                                    </Col>
                                                    <Col span={11} offset={2} className="thickBorder round-border">
                                                        <div style={{fontSize:'14px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '7' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/petrolprice')}}> 
                                                            <img src="/assets/menu-icon/fuel.png" style={{width:'30%'}}></img>
                                                            <p style={{marginBottom:'0px', color:'#000000'}}>Petrol Price</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                
                                                {/* <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '12' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/car-review') }} > Car Review</div>
                                                <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '11' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/about-us')}}> About Us</div>
                                                <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/contact-us')}}> Contact Us</div> */}
                                                
                                            </div>
                                            </div>}

                                            {/* <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '12' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/car-review') }} > Car Review</div>
                                            <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '11' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/about-us')}}> About Us</div>
                                            <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/contact-us')}}> Contact Us</div>
                                            <div style={{fontSize:'16px', margin:'10px'}} className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`} onClick={() => {this.props.router.push('/faq')}}> FAQ</div> */}

                                            </Drawer>
                                            
                                        </div>
                                    </Col>
                                </Row>
                                <Divider style={{ border: 'solid 1px #FFCC32', fontWeight: 'normal', margin: '4px 0px' }} />
                                <Row>
                                    <Col span={24}>
                                        <div className="flex-justify-start" style={{ display: 'flex', overflowX: 'scroll', color: '#ffffff', paddingRight: '2px' }}>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '1' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/') }}> Home</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '2' ? 'yellow' : ''}`} onClick={() => { this.props.router.push(routePaths.carsOnSale.as().pathname) }} > CarMarket</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '3' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/newcar') }} > All-NewCar</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '4' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/live') }} > LIVE</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '6' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/car-freaks') }} > CarFreaks</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '5' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/socialNews') }} > Social News</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '9' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/socialVideos') }} > Social Videos</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '7' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/petrolprice') }} > Petrol Price</span>
                                            <span className={`flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '8' ? 'yellow' : ''}`} onClick={() => { this.props.router.push('/kpp') }} > Driving School</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Mobile>

                        </Col>
                    </Row>


                {
                    _.get(this.props, ['app', 'loading']) ?
                        <div className='background-grey-opacity-50 fill-parent absolute-center' style={{ zIndex: 1002 }}>
                            <Affix offsetTop={(this.state.window.innerHeight || 500) / 2}>
                                <div className="flex-justify-center width-100">
                                    <img src="/loading.gif" style={{ width: 100, height: 100 }} />
                                </div>
                            </Affix>
                        </div>
                        :
                        null
                }

                {/* </Content> */}
                <div style={this.props.backgroundImage ? { minHeight: this.state.window.innerHeight || 500 - 180, ...this.state.backgroundStyle } : { minHeight: this.state.window.innerHeight || 500 - 90 }}>
                    {this.props.children}
                </div>

                {/* <BackTop/> */}

                {this._renderFooter()}
                <div className='width-100' style={{ position: '-webkit-sticky', position: 'sticky', bottom: 0, zIndex: 1002 }}>
                    {
                        this.props.footerOverLay ?
                            this.props.footerOverLay
                            :
                            this.props.hideOpenApp ?
                                null
                                :
                                <React.Fragment>
                                    <NotWebDevice>
                                        <div className="padding-md background-black flex-items-align-center flex-justify-space-between">
                                            <span className=' flex-items-align-center' >
                                                <img src={ccarLogo} style={{ height: 30, width: 30 }} className="margin-right-md flex-items-no-shrink" />
                                                <div className="caption white">
                                                    A place to connect car lovers' souls
                                                </div>
                                            </span>
                                            <span className='d-inline-block ' >
                                                <Button className=" background-ccar-button-yellow black caption" style={{ borderColor: '#FFCC32' }} onClick={(e) => { this.openApp() }}>Open App</Button>
                                            </span>
                                        </div>
                                    </NotWebDevice>
                                </React.Fragment>
                    }
                </div>
                {/* <span className='d-inline-block' style={{ position: 'fixed', bottom: 30, left: 20, zIndex: 1002 }}  >
                    {
                        this.state.scrollY > 300 ?
                            <Affix offsetBottom={100}>
                                <div className="wrap-scrolltoTop">
                                    <Button onClick={() => this.state.window.scrollTo(0, 0)}><CaretUpOutlined /></Button>
                                </div>
                            </Affix>
                            :
                            null
                    }
                </span> */}

                <span className='d-inline-block' style={{ position: 'fixed', bottom: 30, right: 20, zIndex: 1002 }}  >
                    {
                        this.props.showCompareCarButton != undefined && this.props.showCompareCarButton == false && this.props.showCompareCarButton != null ?
                            null
                            :
                            <Affix offsetBottom={95} className='affix-element-show-on-modal-1'>
                                <CompareFloatingButton />
                            </Affix>
                    }
                </span>
                </div>
                {/* <style jsx="true" global="true">{``}</style> */ }
        <LoginModal />
        {/* <RegisterModal/> */ }
        <CookieConsent
            location="bottom"
            buttonText="Got it !"
            cookieName="consent"
            cookieValue={true}
            style={{ background: "#2B373B", zIndex: 1003 }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={365}
            onAccept={() => {
                Cookies.set('consent', v4())
            }}
            acceptOnScroll={true}
        >
            By continuing to browse this website, you accept cookies which are used for several reasons such as personalizing content/ads and analyzing how this website is used.

                    </CookieConsent>
        {/* </WindowScrollDisableWrapper> */ }
            </Layout >
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loading: loading,
        loginMode: loginMode,
        registerMode: registerMode,
        logoutSuccessful: logoutSuccessful,
        updateActiveMenu: updateActiveMenu,
        quickSearchProductsList: quickSearchProductsList,

        setApplyYear: setApplyYear,
        setApplyPrice: setApplyPrice,
        setApplyMileage: setApplyMileage,
        fetchCompareNewCarLimit: fetchCompareNewCarLimit,
        fetchCompareCarLimit: fetchCompareCarLimit,

        setMenuHeight: setMenuHeight,

        clearProductFilterOptions: clearProductFilterOptions,

        setNotificationToken: setNotificationToken,
        setNotificationTokenTimeOutDate: setNotificationTokenTimeOutDate,
        setUser,
        setDisableWindowScroll,


    }, dispatch);
}

function mapStateToProps(state) {
    return {
        app: state.app,
        user: state.user
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter((LayoutV2)));
