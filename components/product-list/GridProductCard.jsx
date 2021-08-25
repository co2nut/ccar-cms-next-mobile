import { Button, Col, Empty, Row, Tooltip } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { imageNotFoundIcon } from '../../params/common';
import { getStateIcon } from '../../params/stateList';
import { arrayLengthCount, notEmptyLength } from '../../common-function';
import { withRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Form } from '@ant-design/compatible';
import { loading } from '../../redux/actions/app-actions';
import { calMonth, formatMoney, renderMileageRange } from '../../functionContent';
import AddCompareProductButton from '../general/add-compare-product-button';
import Car360ViewButton from '../general/car-360-view-button';
import { car360ViewActiveIcon, car360ViewBlackIcon, car360ViewIcon, carRegistrationCardActiveIcon, carRegistrationCardBlackIcon, carRegistrationCardIcon, flameRed, rayaFlame, rayaFood, rayaLamp, rayaMosque, rayaPeople } from '../../icon';
import Loading from '../general/Loading';
import WhatsAppButton from '../general/whatapps-button';
import ContactList from '../general/contactList';
import RegisterCard from '../general/registerCard';
import CalculatorModal from '../general/calculator-modal';
import GridProductSkeleton from '../skeleton-loader/GridProductSkeleton';
import { routePaths } from '../../route';
import Scrollbars from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';

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

const currentDateTime = moment().format()

const defaultHeight = 350;

const GridProductCard = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        processAddonProduct()
        var interval2 = setInterval(() => {
            processAddonProduct()
        }, 60000);
        return () => clearInterval(interval2);
    }, [props.data])

    function processAddonProduct() {
        let currentDateTime = moment().format()
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            if (!_.isEqual(props.data, product)) {
                setProduct({});
                let newProduct = _.cloneDeep(props.data)

                newProduct.addonSpotlight = _.find(newProduct.addon, { 'addonType': 'spotlight' })
                newProduct.addonSpicydeal = _.find(newProduct.addon, { 'addonType': 'spicydeal' })
                newProduct.addonKingadType = _.find(newProduct.addon, { 'addonType': 'kingad', 'showPrice': 'show' })
                newProduct.addonKingadType2 = _.find(newProduct.addon, { 'addonType': 'kingad', 'showPrice': 'hide' })
                newProduct.addonKingadType3 = _.find(newProduct.addon, { 'addonType': 'kingad', 'showPrice': 'highlight' })
                let priority = ''
                newProduct.priority = '';
                if (priority === '') {
                    if (newProduct.addonKingadType) {
                        if (currentDateTime > moment(newProduct.addonKingadType.startDate).format() && currentDateTime < moment(newProduct.addonKingadType.endDate).format()) {
                            priority = 'addonKingadType'
                            newProduct.priority = 'addonKingadType'
                            newProduct.addonKingadType.endDate = moment(newProduct.addonKingadType.endDate).format()
                            newProduct.addonKingadType.startDate = moment(newProduct.addonKingadType.startDate).format()
                        }
                    }
                }

                if (priority === '') {
                    if (newProduct.addonKingadType2) {
                        if (currentDateTime > moment(newProduct.addonKingadType2.startDate).format() && currentDateTime < moment(newProduct.addonKingadType2.endDate).format()) {
                            priority = 'addonKingadType2'
                            newProduct.priority = 'addonKingadType2'
                            newProduct.addonKingadType2.startDate = moment(newProduct.addonKingadType2.startDate).format()
                            newProduct.addonKingadType2.endDate = moment(newProduct.addonKingadType2.endDate).format()
                        }
                    }
                }

                if (priority === '') {
                    if (newProduct.addonKingadType3) {
                        if (currentDateTime > moment(newProduct.addonKingadType3.startDate).format() && currentDateTime < moment(newProduct.addonKingadType3.endDate).format()) {
                            priority = 'addonKingadType3'
                            newProduct.priority = 'addonKingadType3'
                            newProduct.addonKingadType3.startDate = moment(newProduct.addonKingadType3.startDate).format()
                            newProduct.addonKingadType3.endDate = moment(newProduct.addonKingadType3.endDate).format()
                        }
                    }
                }

                if (priority === '') {
                    if (newProduct.addonSpicydeal) {
                        if (currentDateTime > moment(newProduct.addonSpicydeal.startDate).format() && currentDateTime < moment(newProduct.addonSpicydeal.endDate).format()) {
                            priority = 'addonSpicydeal'
                            newProduct.priority = 'addonSpicydeal'
                            newProduct.addonSpicydeal.startDate = moment(newProduct.addonSpicydeal.startDate).format()
                            newProduct.addonSpicydeal.endDate = moment(newProduct.addonSpicydeal.endDate).format()
                        }
                    }
                }

                if (priority === '') {
                    if (newProduct.addonSpotlight) {
                        if (currentDateTime > moment(newProduct.addonSpotlight.startDate).format() && currentDateTime < moment(newProduct.addonSpotlight.endDate).format()) {
                            priority = 'addonSpotlight'
                            newProduct.priority = 'addonSpotlight'
                            newProduct.addonSpotlight.startDate = moment(newProduct.addonSpotlight.startDate).format()
                            newProduct.addonSpotlight.endDate = moment(newProduct.addonSpotlight.endDate).format()
                        }
                    }
                }
                setProduct(newProduct);
            }
        }
    }


    function renderShowPrice(price, discountedPrice) {

        const pattern = /\.(\d*?)0+(\D*)$/gm;
        return (
            <div className="flex-justify-space-between flex-items-align-center ">
                <span className='d-inline-block ' >
                    <span className="red body2 font-weight-bold">
                        RM {formatMoney((discountedPrice).toString())}
                    </span>
                </span>
                <span className='d-inline-block ' >
                    <span className="small-text blue-darken-3 line-through" >
                        RM {formatMoney((price).toString())}
                    </span>
                    <span className="d-inline-block round-border background-white small-text red margin-left-xs padding-x-xs">
                        {(((100 * (price - discountedPrice) / price) * -1).toFixed(1).toString()).replace(pattern, '') + '%'}
                    </span>
                </span>
            </div>
        )
    }

    function renderCountdown(endDate) {

        const duration = moment.duration(moment(endDate).diff(moment()));
        const days = Math.floor(duration.asDays());
        const daysFormatted = days ? `${days}` : 0;
        const hours = duration.hours();
        const minutes = duration.minutes();
        const hoursFormatted = hours ? `${hours}` : 0;
        const minutesFormatted = minutes ? `${minutes}` : 0;


        return (
            <div className="flex-justify-space-between flex-items-align-center">
                <span className='d-inline-block black font-weight-bold body2' >
                    SuperDeal Ends in
                </span>
                <span className='d-inline-block ' >
                    <span className='gridAddonDayHourText'>D </span>
                    <span className='gridAddonDayHour background-red-darken-4 white'>{formatCountdown(daysFormatted, 2)}</span>
                    <span className='gridAddonDayHourText'> H </span>
                    <span className='gridAddonDayHour background-red-darken-4 white'>{formatCountdown(hoursFormatted, 2)}</span>
                    <span className='gridAddonDayHourText'> M </span>
                    <span className='gridAddonDayHour background-red-darken-4 white'>{formatCountdown(minutesFormatted, 2)}</span>
                </span>
            </div>
        )

    }

    const formatCountdown = (value, fixedPoint) => {
        if (value != null) {
            if (isNaN(parseFloat(value))) {
                return value;
            } else {
                value = value.toString().split('.');
                if (value[0]) {
                    if (value[0].length > fixedPoint) {
                        value[0] = value[0].slice(value[0].length - fixedPoint);
                    }

                    if (value[0].length < fixedPoint) {
                        _.forEach(_.range(fixedPoint - value[0].length), function () {
                            value[0] = '0' + value[0];
                        })
                    }
                    return value[0];
                }
                return value;
            }
        } else {
            return value;
        }
    }

    const _renderPrice = (v) => {
        let normalPrice =
            (
                <div className="flex-justify-space-between flex-items-align-center flex-wrap">
                    <span className='d-inline-block ccar-button-yellow body2 font-weight-bold flex-items-no-shrink' >
                        RM {formatMoney((v.price || 0).toString())}
                    </span>
                    <span className='d-inline-block blue-darken-3 caption' >
                        RM {formatMoney((calMonth(v.price)).toString())}/month
                    </span>
                </div>
            )

        if (v.priority === 'addonKingadType') { return renderShowPrice(v.price, v.addonKingadType.discountedPrice) }
        else if (v.priority === 'addonKingadType2') { return renderCountdown(v.addonKingadType2.endDate) }
        else if (v.priority == 'addonSpotlight') {
            return (
                <div className="flex-justify-space-between flex-items-align-center flex-wrap">
                    <span className='d-inline-block red body2 font-weight-bold flex-items-no-shrink' >
                        RM {formatMoney((v.price || 0).toString())}
                    </span>
                    <span className='d-inline-block black caption' >
                        RM {formatMoney((calMonth(v.price)).toString())}/month
                    </span>
                </div>
            )
        }
        else if (v.priority === 'addonSpicydeal') {
            if (v.addonSpicydeal.showPrice === 'show') { return renderShowPrice(v.price, v.addonSpicydeal.discountedPrice) }
            if (v.addonSpicydeal.showPrice === 'hide') { return renderCountdown(v.addonSpicydeal.endDate) }
        }

        else { return (normalPrice) }

    }

    const _renderLayout = (v) => {

        if (!v.priority) { return ('') }
        if (v.priority === 'addonSpotlight' || v.priority === 'addonKingadType3') { return ('product-ads-spotlight-effect') }
        else if (v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2') { return ('product-ads-spicydeal-effect') }
        else { return ('') }
    }

    const _renderCondition = (v) => {

        switch (_.get(v, `condition`)) {
            case 'new':
                return <span className='d-inline-block background-red white small-text round-border padding-y-xs flex-items-align-center flex-justify-center' style={{ width: 50 }} >
                    New
                </span>
                break;
            case 'recon':
                return <span className='d-inline-block white small-text round-border padding-y-xs flex-items-align-center flex-justify-center' style={{ backgroundColor: '#2e8b57', width: 50 }} >
                    Recon
                </span>
                break;
            case 'used':
                return <span className='d-inline-block white small-text round-border padding-y-xs flex-items-align-center flex-justify-center' style={{ backgroundColor: '#786544', width: 50 }} >
                    Used
                </span>
                break;
            default:
                return <span className='d-inline-block white background-ccar-button-yellow small-text round-border padding-y-xs flex-items-align-center flex-justify-center' style={{ width: 50 }} >
                    All
                </span>
                break;
        }
    }

    return (
        <React.Fragment>
            <Desktop>
                <div className="flex-items-align-end" style={{ height: defaultHeight }}>
                    <div className={`height-50 box-shadow-normal-center width-100 round-border-big relative-wrapper ${_renderLayout(product)}`} >
                        <Scrollbars autoHide autoHeightMax={defaultHeight * 0.5} autoHeight>
                            <div style={{ paddingTop: (defaultHeight * 0.1) }}>
                                <div className="padding-x-md padding-y-sm">
                                    <Link shallow={false} href={routePaths.viewCarDetails.to || '/'} as={typeof (routePaths.viewCarDetails.as) == 'function' ? routePaths.viewCarDetails.as(product) : '/'} >
                                        <a>
                                            <div className='text-truncate-twoline'><label className="font-weight-bold black headline">{product.title}</label></div>
                                        </a>
                                    </Link>
                                <div className="padding-y-sm">
                                    {_renderPrice(product)}
                                </div>
                                <div className="padding-y-sm flex-items-align-center">
                                <img src={getStateIcon(_.get(product, `company.state`))} style={{ width: 20, height: 20, }} className="avatar margin-x-xs" />
                                <span className="d-inline-block margin-x-xs small-text">{`>`}</span>
                                <span className="d-inline-block margin-x-xs small-text">{_.get(product, `company.state`) || 'N/A'}</span>
                                <span className="d-inline-block margin-x-xs small-text">{`>`}</span>
                                <span className="d-inline-block margin-x-xs small-text">{_.get(product, `company.name`) || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                </Scrollbars>
                <div className="width-90 grid-product-img-expand background-transparent" style={{ position: 'absolute', top: -(defaultHeight * 0.5), left: 0, right: 0, margin: 'auto', height: defaultHeight * 0.6, }}>
                    <div className="fill-parent relative-wrapper">
                        <Link href={routePaths.viewCarDetails.to || '/'} as={typeof (routePaths.viewCarDetails.as) == 'function' ? routePaths.viewCarDetails.as(product) : '/'}>
                            <a>
                                {
                                    notEmptyLength(product.carUrl)
                                        ? <img src={product.carUrl[0].url} style={{ maxInlineSize: '-webkit-fill-available' }} className="img-cover width-100 height-100 round-border-big box-shadow-thin" key={0} />
                                        : <img src={'/image-not-found.png'} className="head-product-ads-img round-border-big box-shadow-thin" key={-1} />
                                }
                            </a>
                        </Link>
                        <span className='d-inline-block ' style={{ position: 'absolute', top: 10, left: 10 }} >
                            {_renderCondition(product)}
                        </span>
                        {
                            _.get(product, `priority`) === 'addonSpicydeal' ?
                                <img src={flameRed} style={{ position: 'absolute', bottom: 0, right: -20, height: 100, width: 100 }} />
                                :
                                null
                        }
                        <span className='d-inline-block ' style={{ position: 'absolute', top: 10, right: 10 }} >
                            <Car360ViewButton id={product.xmlUrl ? product._id : null}>
                                <Tooltip title="360&deg; View">
                                    <div className={`avatar background-white margin-bottom-sm flex-justify-center flex-items-align-center ${_.get(product, `xmlUrl`) ? 'cursor-pointer' : 'cursor-not-allowed'}`} style={{ height: 25, width: 25 }}>
                                        <img src={_.get(product, `xmlUrl`) ? car360ViewActiveIcon : car360ViewIcon} style={{ height: 15, width: 15 }} />
                                    </div>
                                </Tooltip>
                            </Car360ViewButton>
                            <div className="avatar background-white" style={{ height: 25, width: 25 }}>
                                <RegisterCard key='register' button={
                                    <Tooltip title="Registration Card">
                                        <div className={`avatar background-white margin-bottom-sm flex-justify-center flex-items-align-center ${arrayLengthCount(_.get(product, `registrationUrl`)) > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`} style={{ height: 25, width: 25 }}>
                                            <img src={arrayLengthCount(_.get(product, `registrationUrl`)) > 0 ? carRegistrationCardActiveIcon : carRegistrationCardIcon} style={{ height: 10, width: 15 }} />
                                        </div>
                                    </Tooltip>
                                } registrationUrl={product.registrationUrl} />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </Desktop>

        <Tablet>
            <div className="flex-items-align-end" style={{ height: defaultHeight }}>
            <div className={`height-50 box-shadow-normal-center width-100 round-border-big relative-wrapper ${_renderLayout(product)}`} >
                <div style={{ paddingTop: (defaultHeight * 0.1) }} className="height-100">
                    <div className="padding-x-md padding-y-sm height-100 ">
                        <Link shallow={false} href={routePaths.viewCarDetails.to || '/'} as={typeof (routePaths.viewCarDetails.as) == 'function' ? routePaths.viewCarDetails.as(product) : '/'} >
                            <a>
                                <div className='text-truncate-twoline ' style={{ height: '35%' }}><label className="font-weight-bold black headline">{product.title}</label></div>
                            </a>
                        </Link>
                        <div className="padding-y-sm " style={{ height: '35%' }} >
                            {_renderPrice(product)}
                        </div>
                        <div className="padding-y-sm flex-items-align-center  height-30" >
                            <img src={getStateIcon(_.get(product, `company.state`))} style={{ width: 20, height: 20, }} className="avatar margin-x-xs" />
                            <span className="d-inline-block margin-x-xs small-text ">{`>`}</span>
                            <span className="d-inline-block margin-x-xs small-text text-truncate-twoline">{_.get(product, `company.state`) || 'N/A'}</span>
                            <span className="d-inline-block margin-x-xs small-text">{`>`}</span>
                            <span className="d-inline-block margin-x-xs small-text text-truncate-twoline">{_.get(product, `company.name`) || 'N/A'}</span>
                        </div>
                    </div>
                </div>
                <div className="width-90 grid-product-img-expand background-transparent" style={{ position: 'absolute', top: -(defaultHeight * 0.5), left: 0, right: 0, margin: 'auto', height: defaultHeight * 0.6, }}>
                    <div className="fill-parent relative-wrapper">
                        <Link href={routePaths.viewCarDetails.to || '/'} as={typeof (routePaths.viewCarDetails.as) == 'function' ? routePaths.viewCarDetails.as(product) : '/'}>
                            <a>
                                {
                                    notEmptyLength(product.carUrl)
                                        ? <img src={product.carUrl[0].url} style={{ maxInlineSize: '-webkit-fill-available' }} className="img-cover width-100 height-100 round-border-big box-shadow-thin" key={0} />
                                        : <img src={'/image-not-found.png'} className="head-product-ads-img round-border-big box-shadow-thin" key={-1} />
                                }
                            </a>
                        </Link>
                        <span className='d-inline-block ' style={{ position: 'absolute', top: 10, left: 10 }} >
                            {_renderCondition(product)}
                        </span>
                        {
                            _.get(product, `priority`) === 'addonSpicydeal' ?
                                <img src={flameRed} style={{ position: 'absolute', bottom: 0, right: -20, height: 100, width: 100 }} />
                                :
                                null
                        }
                        <span className='d-inline-block ' style={{ position: 'absolute', top: 10, right: 10 }} >
                            {
                                _.get(product, `xmlUrl`) ?
                                    <Car360ViewButton id={product.xmlUrl ? product._id : null}>
                                        <Tooltip title="360&deg; View">
                                            <div className={`avatar background-ccar-button-yellow  margin-bottom-sm flex-justify-center flex-items-align-center cursor-pointer`} style={{ height: 25, width: 25 }}>
                                                <img src={car360ViewBlackIcon} style={{ height: 15, width: 15 }} />
                                            </div>
                                        </Tooltip>
                                    </Car360ViewButton>
                                    :
                                    null

                            }
                            {
                                arrayLengthCount(_.get(product, `registrationUrl`)) > 0 ?
                                    <RegisterCard key='register' button={
                                        <Tooltip title="Registration Card">
                                            <div className={`avatar background-ccar-button-yellow margin-bottom-sm flex-justify-center flex-items-align-center cursor-pointer`} style={{ height: 25, width: 25 }}>
                                                <img src={carRegistrationCardBlackIcon} style={{ height: 10, width: 15 }} />
                                            </div>
                                        </Tooltip>
                                    } registrationUrl={product.registrationUrl} />
                                    :
                                    null

                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </Tablet>
        </React.Fragment>
       
        
    );
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});

const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(GridProductCard)));