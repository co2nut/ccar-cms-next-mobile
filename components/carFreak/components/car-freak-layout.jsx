import { Form, Row, Col, message, Affix, Button, Dropdown, Avatar, Icon, Menu, Radio, Tooltip } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { loginMode, loading } from '../../../redux/actions/app-actions';
import { routePaths } from '../../../route';
import RadioGroup from 'antd/lib/radio/group';
import { earthGreyIcon, followingGreyIcon, createCarFreakIcon, createSocialBoardIcon } from '../../../icon';

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
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isMobile || isTablet ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

const CarFreakLayout = (props) => {

    const [tabKey, setTabKey] = useState('car-freaks')
    const [menuOpened, setMenuOpened] = useState(false)
    const [scope, setScope] = useState('public')


    useEffect(() => {

        setScope(props.scope)
    }, [props.scope])

    useEffect(() => {

        let pathname = _.get(props.router, ['asPath']) || '';
        pathname = pathname.split('/') || [];
        pathname = pathname[1].split('?');
        pathname = pathname[0];

        switch (pathname) {
            case 'car-freaks':
                setTabKey('car-freaks')
                break;
            case 'social-board':
                setTabKey('social-board')
                break;
            case 'social-club':
                setTabKey('social-club')
                break;
            default:
                break;
        }

    }, [props.router.asPath])

    return (
        <React.Fragment>

            <div className="relative-wrapper">

                <Mobile>
                    <div className="section-version3">
                        <div className="container-version3 padding-x-sm" style={{ touchAction: 'pan-y' }}>
                            <Row gutter={[0, 10]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="width-100 flex-justify-space-between flex-items-align-center margin-top-md">
                                        <span className="flex-items-align-center flex-justify-start">
                                            <Link shallow={false} href={routePaths.carFreaks.to || '/'} as={typeof (routePaths.carFreaks.as) == 'function' ? routePaths.carFreaks.as() : '/'}>
                                                <a>
                                                    <span className={`d-inline-block cursor-pointer margin-right-lg caption font-weight-bold ${tabKey == 'car-freaks' ? 'border-bottom-yellow yellow' : ' black'} `} >
                                                        CarFreaks
                                            </span>
                                                </a>
                                            </Link>
                                            <Link shallow={false} href={routePaths.socialBoard.to || '/'} as={typeof (routePaths.socialBoard.as) == 'function' ? routePaths.socialBoard.as() : '/'}>
                                                <a>
                                                    <span className={`d-inline-block cursor-pointer margin-right-lg caption font-weight-bold ${tabKey == 'social-board' ? 'border-bottom-yellow yellow' : ' black'} `}  >
                                                        Social Board
                                            </span>
                                                </a>
                                            </Link>
                                            <Link shallow={false} href={routePaths.socialClub.to || '/'} as={typeof (routePaths.socialClub.as) == 'function' ? routePaths.socialClub.as() : '/'}>
                                                <a>
                                                    <span className={`d-inline-block cursor-pointer margin-right-lg caption font-weight-bold ${tabKey == 'social-club' ? 'border-bottom-yellow yellow' : ' black'} `} >
                                                        CarFreaks Club
                                            </span>
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                    {
                                        props.hideScope == true ?
                                            null 
                                            :
                                            <div className="flex-justify-end flex-items-align-center margin-top-md">
                                                <span className='d-inline-block' >
                                                    <RadioGroup className=" round-border-radio-button" value={scope} buttonStyle="solid">
                                                        <Radio.Button className="round-border-right" value="public" onClick={(e) => {
                                                            if (props.onScopeChange) {
                                                                props.onScopeChange('public')
                                                            }
                                                        }}>
                                                            <Tooltip title="Public" placement="top">
                                                                <img src={earthGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                            </Tooltip>
                                                        </Radio.Button>
                                                        <Radio.Button className="round-border-left" value="following" onClick={(e) => {
                                                            if (props.onScopeChange) {
                                                                props.onScopeChange('following')
                                                            }
                                                        }}>
                                                            <Tooltip title="Following" placement="top">
                                                                <img src={followingGreyIcon} style={{ height: 20, width: 20 }}></img>
                                                            </Tooltip>
                                                        </Radio.Button>
                                                    </RadioGroup>
                                                </span>
                                            </div>
                                    }
                                </Col>

                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    {
                                        props.children
                                    }

                                </Col>
                            </Row>
                        </div>
                    </div>
                </Mobile>

                {
                    menuOpened ?
                        <div className="background-black-opacity-50 absolute-center" style={{ zIndex: 2 }} >
                        </div>
                        :
                        null
                }
                <Affix offsetBottom={50} style={{ position: 'absolute', right: 15 }} >
                    <Dropdown trigger="click" placement="topLeft"
                        getPopupContainer={() => typeof (document) != undefined ? document.getElementById('writePostAffix') : null}
                        overlay={
                            <Menu className="background-transparent box-shadow-none " onClick={(e) => {
                                setMenuOpened(false)
                                if (props.onWritePostClick) {
                                    props.onWritePostClick(_.get(e, `key`))
                                }
                            }}
                            >
                                <Menu.Item key="carFreaks" style={{ padding: '10px 0px' }} >
                                    <div className=" flex-justify-space-between flex-items-align-center" style={{ width: 200 }} >
                                        <span className='d-inline-block subtitle1 ccar-button-yellow' >
                                            CarFreaks
                                </span>
                                        <span className='d-inline-block avatar padding-sm background-white' >
                                            <img src={createCarFreakIcon} style={{ height: 30, width: 30 }} />
                                        </span>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="socialBoard" className="white" style={{ padding: '10px 0px' }}>
                                    <div className="flex-justify-space-between flex-items-align-center" style={{ width: 200 }} >
                                        <span className='d-inline-block subtitle1 ccar-button-yellow' >
                                            Social Board
                                </span>
                                        <span className='d-inline-block avatar padding-sm background-white' >
                                            <img src={createSocialBoardIcon} style={{ height: 30, width: 30 }} />
                                        </span>
                                    </div>
                                </Menu.Item>
                            </Menu>}
                        onVisibleChange={(v) => { setMenuOpened(v) }}>

                        <span className='d-inline-block width-100' id="writePostAffix" >
                            <Avatar size={50} className="background-ccar-button-yellow" icon={menuOpened ? <Icon type="close" className="white" /> : <Icon type="plus" className="white" />}
                            />
                        </span>
                    </Dropdown>
                </Affix>
            </div>

        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
    loginMode
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(CarFreakLayout)));