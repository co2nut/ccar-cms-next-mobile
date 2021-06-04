import {
  DownOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined, UpOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Divider, Icon, Input, message, Modal, Row, Tooltip, Tabs } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { bindActionCreators } from "redux";
import { flame, soldOutIcon } from '../../../icon';
import { loading, quickSearchProductsList, showContactList, updateActiveMenu } from '../../../redux/actions/app-actions';
import { updateActiveIdProductList } from '../../../redux/actions/productsList-actions';
import { calMonth, formatMoney } from '../../../functionContent';
import client from '../../../feathers';
import { setUser } from '../../../redux/actions/user-actions';
import { imageNotFoundIcon } from '../../../params/common';
import LayoutV2 from '../../general/LayoutV2';
import UserAvatar from '../../general/UserAvatar';
import AddCompareProductButton from '../../general/add-compare-product-button';
import CalculatorModal from '../../general/calculator-modal';
import Car360ViewButton from '../../general/car-360-view-button';
import LightBoxGallery from '../../general/LightBoxGallery';
import { convertParameterToProductListUrl, formatNumber, getUserName, notEmptyLength } from '../../../common-function';
import SellerBusinessCard from '../../seller/SellerBusinessCard';
import WhatsAppButton from '../../general/whatapps-button';
import WhatsAppViewProduct from '../../general/ws-button-product';
import ContactList from '../../general/contactList';
import Wishlist from '../../general/Wishlist';
import ShareButtonDialog from '../../general/ShareButtonDialog';
import ShareViewProduct from '../../general/share-view-product';
import { getStateIcon } from '../../../params/stateList';
import RegisterCard from '../../general/registerCard';
import KeyCarDetails from '../KeyCarDetails';
import KeyFeatures from '../key-features';
import Link from 'next/link';
import Description from '../Description';
import Equipment from '../equipment';
import Specification from '../specification';
import { routePaths } from '../../../route';
import { flameRed, rayaFlame, rayaFood, rayaLamp, rayaMosque, rayaPeople } from '../../../icon';
import WriteReviewButton from '../../rating/WriteReviewButton';

const { TextArea } = Input;

const adverImg = "/advertisement.jpg"

const Div = (props) => {
  const childrenProps = { ...props };
  delete childrenProps.show;
  return <div {...childrenProps} />;
};

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}  

class ViewCarDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0,
      productDetails: props.data || { condition: '', companys: {}, carspecsAll: {}, registrationUrl: {} },
      show: true,
      contactList: {},
      visible: false,
      submitting: false,
      value: '',
      rating: {
      },
      scrollYPosition: 0,
      dealerTotalAds: 0,
      window: {},
      soldOutModalVisible: false,
    }
  }

  componentDidMount() {
    this.setState({
      window: window,
      soldOutModalVisible: _.get(this.state.productDetails, ['status']) == 'sold',
    })
  }

  UNSAFE_componentWillMount() {
    this.props.updateActiveMenu('2');
    this.setState({

      typingTimeout: setTimeout(() => {
        axios.post(`${client.io.io.uri}processCTR`,
          {
            params: {
              adsId: this.state.productDetails._id,
              source: 'web',
            }
          })
        let inputProductList = [{ productAdsId: this.state.productDetails._id }]
        axios.post(`${client.io.io.uri}processImpression`,
          {
            params: {
              productList: inputProductList,
              source: 'web',
            }
          }).then((res) => { })


      }, 3000)
    })
  }
  componentDidUpdate(prevProps, prevState) {

    if (typeof (window) != undefined) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });

      return () => {

        window.removeEventListener('scroll', this.handleScroll);
      };
    }

    if (!_.isEqual(prevState.productDetails, this.state.productDetails)) {
      if (_.get(this.state.productDetails, ['status']) == 'sold') {
        this.setState({
          soldOutModalVisible: true,
        })
      }
    }


  }

  onClickShow = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  handleScroll = (e) => {
    this.setState({
      scrollYPosition: this.state.window.scrollY,
    })

  };

  _renderImages() {
    var imgList = this.state.productDetails.carUrl ?
      this.state.productDetails.carUrl.map((v, i) => {
        return (
          <Row key={i}>
            <Col span={24}>
              <div className="dot-img" onClick={() => { this.setState({ currentImg: i }); this.onClickShow() }}>
                {this.state.currentImg === i ?
                  <div className="dot-img-overlay">
                  </div> : null}
                <img src={v.url} />
              </div>
            </Col>
          </Row>
        );
      }) : '';

    return (
      <div className="wrap-dot-img" id="wrap-dot-img">
        {imgList}
      </div>
    )
  }


  dotScrollToBottom() {
    // this.onClickShow()
    // const objDiv = document.getElementById("wrap-dot-img");
    // objDiv.scrollTop = objDiv.scrollTop + 30;
    let plusOne = this.state.currentImg + 1
    if (plusOne < this.state.productDetails.carUrl.length) {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = objDiv.scrollTop + 30;
      this.setState({ currentImg: plusOne })
    } else {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = 0;
      this.setState({ currentImg: 0 })
    }
  }

  dotScrollToTop() {
    // this.onClickShow()
    // const objDiv = document.getElementById("wrap-dot-img");
    // objDiv.scrollTop = objDiv.scrollTop - 30;
    let minusOne = this.state.currentImg - 1
    if (minusOne >= 0) {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = objDiv.scrollTop - 30;
      this.setState({ currentImg: this.state.currentImg - 1 })
    } else {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = objDiv.scrollHeight;
      this.setState({ currentImg: this.state.productDetails.carUrl.length - 1 })
    }
  }

  scrollToLeftBtn() {
    let minusOne = this.state.currentImg - 1
    if (minusOne >= 0) {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = objDiv.scrollTop - 104;
      this.setState({ currentImg: this.state.currentImg - 1 })
    } else {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = objDiv.scrollHeight;
      this.setState({ currentImg: this.state.productDetails.carUrl.length - 1 })
    }
  }

  scrollToRightBtn() {
    let plusOne = this.state.currentImg + 1
    if (plusOne < this.state.productDetails.carUrl.length) {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = objDiv.scrollTop + 104;
      this.setState({ currentImg: plusOne })
    } else {
      this.onClickShow()
      const objDiv = document.getElementById("wrap-dot-img");
      objDiv.scrollTop = 0;
      this.setState({ currentImg: 0 })
    }
  }

  breadcrumbSearchCondition = (v) => {

    let path = convertParameterToProductListUrl({ condition: v });
    this.props.router.push(path);

  }

  breadcrumbSearchMake = (v) => {

    let path = convertParameterToProductListUrl({ make: v.toLowerCase() });
    this.props.router.push(path);
  }

  breadcrumbSearchModel = (v) => {

    let path = convertParameterToProductListUrl({ model: v.toLowerCase() });
    this.props.router.push(path);
  }

  _renderCondition = (v) => {
    if (v.condition === 'new') {
      return (
        <div className="wrap-condition wrap-condition-new">
          <p style={{textTransform:'uppercase'}}>{v.condition}</p>
        </div>
      )
    } else if (v.condition === 'used') {
      return (
        <div className="wrap-condition wrap-condition-used">
          <p style={{textTransform:'uppercase'}}>{v.condition}</p>
        </div>
      )
    } else if (v.condition === 'recon') {
      return (
        <div className="wrap-condition wrap-condition-recon">
          <p style={{textTransform:'uppercase'}}>{v.condition}</p>
        </div>
      )
    } else {
      return (
        <div className="wrap-condition wrap-condition-default">
          <p style={{textTransform:'uppercase'}}>{v.condition}</p>
        </div>
      )
    }
  }

  _renderImagesMobile(){
    var imgList = this.state.productDetails.carUrl ?
    this.state.productDetails.carUrl.map((v, i) => {
      return (
          <span key={i} style={{paddingRight:'5px'}}>
            <div onClick={() => { this.setState({ currentImg: i }); this.onClickShow() }}>
              {/* {this.state.currentImg === i ?
                <div className="dot-img-overlay">
                </div> 
                : null} */}
              <img style={{width:'50px', height:'40px'}} src={v.url} />
            </div>
          </span>
      );
    }) : '';
  return (
    <div style={{overflowX:'scroll', padding:'5px'}}>
      <div style={{display:'flex'}} className="wrap-dot-img-mobile" id="wrap-dot-img-mobile">
        {imgList}
      </div>
    </div>
  )
}

_renderLayout = (v) => { 
  if (!v.priority) { return ('wrap-product-detail') }
  if (v.priority === 'addonSpotlight' || v.priority === 'addonKingadType3') { return ('wrap-product-detail-spotlight') }
  else if (v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2') { return ('wrap-product-detail-spicydeal') }
  else { return ('wrap-product-detail')}
}

  _renderPrice = () => {

    let v = this.state.productDetails

    if (_.isEmpty(v) === true) { return }

    if (_.isEmpty(v.carspecsAll) === true &&
      _.isEmpty(v.companys) === true &&
      _.isEmpty(v.condition) === true &&
      _.isEmpty(v.registrationUrl) === true
    ) { return }


    let normalPrice =
      (<div className="wrap-product-ads-price">
        <Row><Col xs={14} sm={14} md={16} lg={16} xl={16}><span style={{ color: '#20abcc' }} className='installmentPrice'>RM {formatMoney((calMonth(v.price)).toString())}/month</span></Col></Row>
        <h4 style={{ marginLeft: '10px' }}>RM {formatMoney((v.price).toString())}</h4>
      </div>)

    function renderShowPrice(price, discountedPrice) {

      const pattern = /\.(\d*?)0+(\D*)$/gm;
      return (
        <div className="wrap-product-ads-price">
          <span style={{ color: '#000000' }} className='gridMoneyText'>RM {formatMoney((price).toString())}</span>
          <span className="wrap-condition wrap-product-ads-discount-spicydeal" >{(((100 * (price - discountedPrice) / price) * -1).toFixed(1).toString()).replace(pattern, '') + '%'}</span>
          <h4 style={{color: '#d62828' }}>RM {formatMoney((discountedPrice).toString())}</h4>
          <div className="wrap-product-ads-price">
            <Row><Col xs={14} sm={14} md={16} lg={16} xl={16}><span style={{ color: '#20abcc' }} className='installmentPrice'>RM {formatMoney((calMonth(discountedPrice)).toString())}/month</span></Col></Row>
          </div>
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


      return (
        <div className="wrap-product-ads-countdown-spicydeal">
          <span className='gridAddonMainText' style={{ marginLeft: '10px', color: '#000000' }} ><span>SuperDeal Ends in</span></span>
          <Row>
            <Col xs={14} sm={14} md={16} lg={16} xl={16}>
              <p className='gridAddonDayHourSubText'>

                <span style={{ color: '#000000' }} className='gridAddonDayHourText'>D </span>
                <span className='gridAddonDayHour'>{formatCountdown(daysFormatted, 2)}</span>
                <span style={{ color: '#000000' }} className='gridAddonDayHourText'> H </span>
                <span className='gridAddonDayHour'>{formatCountdown(hoursFormatted, 2)}</span>
                <span style={{ color: '#000000' }} className='gridAddonDayHourText'> M </span>
                <span className='gridAddonDayHour'>{formatCountdown(minutesFormatted, 2)}</span>
              </p>
            </Col>
          </Row>
        </div>
      )

    }

    if (v.priority === 'addonKingadType') { return renderShowPrice(v.price, v.addonKingadType.discountedPrice) }
    else if (v.priority === 'addonKingadType2') { return renderCountdown(v.addonKingadType2.endDate) }
    else if (v.priority === 'addonSpicydeal') {
      if (v.addonSpicydeal.showPrice === 'show') { return renderShowPrice(v.price, v.addonSpicydeal.discountedPrice) }
      if (v.addonSpicydeal.showPrice === 'hide') { return renderCountdown(v.addonSpicydeal.endDate) }
    }
    else { return (normalPrice) }
  }

  _renderPriceAffix = () => {
    const currentDateTime = moment().format();
    const addon = _.find(this.state.productDetails.addon, { 'addonType': 'spicydeal' });

    if (addon) {
      if (currentDateTime < addon.endDate) {
        if (addon.addonType === 'spicydeal' && addon.showPrice === 'show') {
          return (
            <div className="wrap-viewProducts-price-affix">
              <label style={{ color: 'rgb(190,150,46)' }}>RM {formatMoney((addon.discountedPrice ? addon.discountedPrice : 0).toString())}</label>
              <p>RM {formatMoney((calMonth(addon.discountedPrice ? addon.discountedPrice : 0)).toString())}/month</p>
            </div>
          )
        } else if (addon.addonType === 'spicydeal' && addon.showPrice === 'hide') {
          return (
            <div className="wrap-viewProducts-price-affix">

            </div>
          )
        } else {
          return (
            <div className="wrap-viewProducts-price-affix">
              <label style={{ color: 'rgb(190,150,46)' }}>RM {formatMoney((this.state.productDetails.price ? this.state.productDetails.price : 0).toString())}</label>
              <p>RM {formatMoney((calMonth(this.state.productDetails.price ? this.state.productDetails.price : 0)).toString())}/month</p>
            </div>
          )
        }
      } else {
        return (
          <div className="wrap-viewProducts-price-affix">
            <label style={{ color: 'rgb(190,150,46)' }}>RM {formatMoney((this.state.productDetails.price ? this.state.productDetails.price : 0).toString())}</label>
            <p>RM {formatMoney((calMonth(this.state.productDetails.price ? this.state.productDetails.price : 0)).toString())}/month</p>
          </div>
        )
      }
    } else {
      return (
        <div className="wrap-viewProducts-price-affix">
          <label style={{ color: 'rgb(190,150,46)' }}>RM {formatMoney((this.state.productDetails.price ? this.state.productDetails.price : 0).toString())}</label>
          <p>RM {formatMoney((calMonth(this.state.productDetails.price ? this.state.productDetails.price : 0)).toString())}/month</p>
        </div>
      )
    }
  }

  render() {
    const { comments, submitting, value } = this.state;
    let stateName = getStateIcon(_.get(this.state.productDetails, ['companys', 'state']) || imageNotFoundIcon)
    let userstate = _.get(this.state.productDetails, ['createdBy', 'userstate']) || ''
    if (_.isEmpty(userstate) === false) { stateName = getStateIcon(userstate) || imageNotFoundIcon }

    let contactList = []
    try { contactList = this.state.productDetails.createdBy.contactList } catch (err) { contactList = [] }
    if (!contactList) { contactList = [] }

    return (
      <LayoutV2 hideOpenApp>
        
        <div className="section">
          <div style={{marginTop:'30px', touchAction:'pan-y', minHeight:'550px'}}>

          <Tabs size="small" defaultActiveKey="1" onChange={callback}>
            <TabPane tab="INFO" key="1">

                <div className="relative-wrapper width-100" style={{ height: '20em' }}>
                  <LightBoxGallery
                    images={_.isArray(_.get(this.state.productDetails, ['carUrl'])) && !_.isEmpty(_.get(this.state.productDetails, ['carUrl'])) ? _.map(_.get(this.state.productDetails, ['carUrl']) || [], 'url') : []}
                    onChange={(currentIndex) => {
                    this.setState({
                      currentImg: currentIndex,
                    })
                  }}
                    currentIndex={this.state.currentImg}
                  >
                  {
                    (data, setCurrentIndex, setVisible) => {
                      return (
                        <div show={this.state.show} className="code-box-shape" >
                          <img className="fade-in cursor-pointer absolute-center-img-no-stretch" onClick={() => { setVisible(true) }} id="my-element" src={_.get(data, ['images', data.currentIndex])} alt={`${_.get(this.state.productDetails, 'carspec.make') || ''} ${_.get(this.state.productDetails, 'carspec.model') || ''} Image ${data.currentIndex + 1}`} />
                        </div>
                      )
                    }
                  }
                  </LightBoxGallery>

                  <img src={stateName} style={{ width: 60, height: '30px', position: 'absolute', top: 0, right: 0 }} alt={`${_.get(this.state.productDetails, ['companys', 'state']) || 'State Icon'}`} />
                  <span className="d-inline-block width-20" style={{ position: 'absolute', top: 0, left: 0 }} >
                    {this._renderCondition(this.state.productDetails)}
                  </span>

                  <div className="logo-viewProduct">
                    {
                      this.state.productDetails.priority === 'addonSpicydeal' || this.state.productDetails.priority === 'addonKingadType' || this.state.productDetails.priority === 'addonKingadType2' ?
                        <img src={rayaFlame} style={{ width: 50, height: 50 }} />
                      :
                      this.state.productDetails.priority === 'addonSpotlight' || this.state.productDetails.priority === 'addonKingadType3' ?
                        <img src={rayaFood} style={{ width: 50, height: 50 }} />
                      :
                        <img src="/assets/Ccar-Spotlight.gif" style={{ width: 40, height: 40 }} />
                    }
                  </div>
                  {
                    _.get(this.state.productDetails, ['readyStock']) == 'Yes'
                    ? <span className="text-align-right avatar background-green readyStockDot"></span>
                    : null
                  }
                </div>

                <Row>
                  <Col span={24}>
                    {this._renderImagesMobile()}
                  </Col>
                </Row>

                <div className={this._renderLayout(this.state.productDetails)}>
                <Row className="padding-x-sm">
                  <Col span={24}>
                      <span className="flex-items-align-center flex-justify-space-between">
                        <span className="d-inline-block flex-justify-start">
                        <p style={{marginBottom:'0px', fontWeight:'500', color:'#000000'}}> {this.state.productDetails.createdBy.namePrefix} {this.state.productDetails.createdBy.fullName}</p>
                        </span>
                        <span className="d-inline-block flex-justify-end">
                          <Wishlist type="product" productId={this.state.productDetails._id} saverId={this.props.user.authenticated ? this.props.user.info.user._id : null}
                            savedButton={
                              () => <Button className="padding-x-sm" style={{ border:'none', height: '16px' }}><Icon type="heart" theme="filled" style={{ color: '#F9A825' }} /> <span style={{ color: '#F9A825' }}>Saved</span></Button>
                            }
                            saveButton={
                              () => <Button style={{ border:'none', height: '16px' }} className="padding-x-sm" ><HeartOutlined /></Button>
                            }
                            handleError={(e) => { message.error(e.message) }}
                            handleSuccess={(e) => { message.success(e.type === 'remove' ? 'Removed from wishlist' : 'Saved to wishlist') }}
                          />
                        </span>
                      </span>
                        <p style={{marginBottom:'0px', color:'#757575', fontWeight:'700'}}> {this.state.productDetails.companys.name}</p>
                        <div className="text-truncate-twoline">
                            <h4 style={{ marginBottom: '0px'}}>
                                {this.state.productDetails.title}
                            </h4>
                        </div>
                    </Col>
                  </Row>

                <div>
                    {
                      this.state.productDetails.priority === 'addonSpicydeal' || this.state.productDetails.priority === 'addonKingadType' || this.state.productDetails.priority === 'addonKingadType2' ?
                        <img src={rayaMosque}  style={{ width: 150, height: 150, position : 'absolute', top : 15 , right : 0}} />
                        :
                      this.state.productDetails.priority === 'addonSpotlight' || this.state.productDetails.priority === 'addonKingadType3' ?
                        <img src={rayaPeople} style={{ width: 150, height: 150, position : 'absolute', top : 15 , right : 0 }} />
                        :
                      null
                    }
                  <div className="padding-x-sm">
                  <Row>
                    <Col span={15} >
                        {this._renderPrice()}
                    </Col>

                    <Col span={24} className="margin-top-md">
                        <span style={{minWidth:'50px'}} className="d-inline-block margin-xs">
                          <WhatsAppButton readOnly={_.get(this.state, 'productDetails.status') != 'approved'} mobileNumber={this.state.productDetails} />
                        </span>
                        <span style={{minWidth:'50px'}} className="d-inline-block margin-xs">
                          <ContactList companys={this.state.productDetails.companys} contactPerson={notEmptyLength(this.state.productDetails.createdBy) ? this.state.productDetails.createdBy : null} />
                        </span>
                        <span className="d-inline-block">
                        <AddCompareProductButton readOnly={_.get(this.state, 'productDetails.status') != 'approved'} data={this.state.productDetails} saveButton={() => {
                            return (
                              <Button type="normal" className="padding-x-sm margin-xs ads-purchase-compare-btn" style={{ minWidth: '50px' }}><img src="/assets/CarListingIconMobile/car-compare.png" style={{ width: '25px', height: '25px' }} alt="compare" /></Button>
                            );
                          }}
                            savedButton={() => {
                              return (
                                <Button type="normal" className="padding-x-sm margin-xs ads-purchase-button" style={{ minWidth: '50px', background: 'rgb(89, 54, 26)' }}><img src="/assets/CarListingIconMobile/car-compare.png" style={{ width: '25px', height: '25px' }} alt="compare" /></Button>
                              );
                            }}
                          />
                        </span>
                        <span className="d-inline-block">
                          <Car360ViewButton id={this.state.productDetails.xmlUrl ? this.state.productDetails._id : null} >
                            <Button type="normal" className={`padding-x-sm margin-xs ${this.state.productDetails.xmlUrl ? 'cursor-pointer' : 'cursor-not-allowed '}`} style={{ background: this.state.productDetails.xmlUrl ? 'rgb(85,204,212)' : 'rgb(237, 236, 234)', borderColor: this.state.productDetails.xmlUrl ? 'rgb(85,204,212)' : 'rgb(237, 236, 234)', minWidth: '50px' }}><img src="/assets/profile/icon-list/Ccar-360_1.gif" style={{ width: '25px', height: '25px' }} alt="Car 360 View Icon" /></Button>
                          </Car360ViewButton>
                        </span>
                        <span className="d-inline-block" style={{ width: '50px' }}>
                        <RegisterCard key='register' button={
                            [<Tooltip key='tooltipsregister' title="Registration Card">
                              <Button type="normal"
                                className={`w-100 ads-purchase-button margin-xs ${_.isArray(_.get(this.state.productDetails, ['registrationUrl'])) && !_.isEmpty(_.get(this.state.productDetails, ['registrationUrl'])) ? 'cursor-pointer' : 'cursor-not-allowed '}`}
                                style={{ padding: 0, background: _.isArray(_.get(this.state.productDetails, ['registrationUrl'])) && !_.isEmpty(_.get(this.state.productDetails, ['registrationUrl'])) ? 'rgb(209 ,110, 132)' : 'rgb(237, 236, 234)', borderColor: _.isArray(_.get(this.state.productDetails, ['registrationUrl'])) && !_.isEmpty(_.get(this.state.productDetails, ['registrationUrl'])) ? 'rgb(209 ,110, 132)' : 'rgb(237, 236, 234)' }}>
                                <img src="/assets/CarListingIconMobile/registration-card.png" alt="Registration Card Icon" /></Button></Tooltip>]
                          } registrationUrl={this.state.productDetails.registrationUrl ? this.state.productDetails.registrationUrl : []} />
                        </span>
                        <span style={{minWidth:'50px'}} className="d-inline-block margin-xs">
                            <CalculatorModal data={{ price: this.state.productDetails.price, downpayment: this.state.productDetails.price * 0.1, loanPeriod: 9, interestRate: 3 }} />
                        </span>
                    </Col>
                </Row>
                
                <div className="margin-top-md">
                    <KeyCarDetails productDetails={this.state.productDetails}/>  
                </div>

                {this.state.productDetails.features.length > 0 ?
                <div className="margin-top-md">
                    <h4>Key Features</h4>
                    <KeyFeatures productDetails={this.state.productDetails}/> 
                </div>
                :
                null}

                <div className="margin-top-md">
                    <span className="h6" style={{display:'inline-block'}}>Reviews</span>
                    <span> 
                      <Description
                        readOnly={_.get(this.state, 'productDetails.status') != 'approved'} productDetails={this.state.productDetails}>
                      </Description>
                    </span>
                </div>

                <div className="padding-lg relative-wrapper"> 
                    <SellerBusinessCard data={this.state.productDetails.companys} data1={this.state.productDetails.createdBy} />  
                </div>
              </div>
              </div>
              </div>

          </TabPane>

          <TabPane tab="SELLER'S COMMENT" key="2">
                <Row gutter={[10, 10]} style={{marginTop:'10px'}}>
                  <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Description productDetails={this.state.productDetails} />
                  </Col>
                </Row>
            </TabPane> 

            <TabPane tab="EQUIPMENT" key="3">
                <Row gutter={[10, 10]} style={{marginTop:'10px'}}>
                  <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Equipment productDetails={this.state.productDetails} />
                  </Col>
                </Row>
            </TabPane>

            <TabPane tab="SPECIFICATION" key="4">
                <Row gutter={[10, 10]} style={{marginTop:'10px'}}>
                  <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Specification productDetails={this.state.productDetails} />
                  </Col>
                </Row>
            </TabPane>

          </Tabs>

          </div>
        </div>

        <div className='width-100' style={{ position: '-webkit-sticky', position: 'sticky', bottom: 0, zIndex: 999999 }}>
          <div className="background-white broder-top-grey thin-border padding-y-sm">
              <Row className="padding-top-sm fixed-container" style={{ backgroundColor: '#ffffff' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <span className='flex-items-align-center text-align-center' >
                    <Col span={8}>
                      {contactList.length > 0 
                        ? 
                        <ContactList mobileResponsive='yes' companys={this.state.productDetails.companys} contactPerson={notEmptyLength(this.state.productDetails.createdBy) ? this.state.productDetails.createdBy : null} />
                         :
                        <a href={`tel:${this.state.productDetails.createdBy.contactNoPrimary}`}><img src="https://img.icons8.com/android/24/25D366/phone.png" /></a>
                      }
                    </Col>
                    <Col span={8}>
                      <WhatsAppViewProduct mobileNumber={this.state.productDetails} />
                    </Col>
                    <Col span={8}>
                      <ShareViewProduct title={`CCAR.my | ${this.state.productDetails.title}`} /> 
                    </Col>
                  </span>
                </Col>
              </Row>
          </div>
        </div>

        <style jsx="true" global="true">{`
                `}</style>


        <Modal
          closable
          visible={this.state.soldOutModalVisible}
          onCancel={() => {
            this.setState({
              soldOutModalVisible: false,
            })
          }}
          centered
          footer={null}
        >
          <div className="padding-md flex-justify-center flex-items-align-center">
            <img src={soldOutIcon} style={{ width: 200, height: 200 }} />
          </div>
          <div className="padding-y-sm h6 flex-justify-center flex-items-align-center">
            This car has been sold.
          </div>
          <div className="padding-y-sm flex-justify-center flex-items-align-center">
            <span className='d-inline-block width-50' >
              <Link href={routePaths.dealerProfile.to || '/'} as={typeof (routePaths.dealerProfile.as) == 'function' ? routePaths.dealerProfile.as(_.get(this.state.productDetails, `createdBy`)) : '/'} >
                <a>
                  <Button block className="black background-ccar-button-yellow" >More Information</Button>
                </a>
              </Link>
            </span>
          </div>
          <div className="padding-y-sm text-align-center text-overflow-break">
            Posted by <b>{_.trim(`${_.get(this.state.productDetails, ['createdBy.namePrefix']) || ''} ${getUserName(_.get(this.state.productDetails, ['createdBy']) || {}) || ''}`)}</b>
          </div>
        </Modal>
      </LayoutV2 >
    );
  }
}

const mapStateToProps = state => ({
  productsList: state.productsList,
  app: state.app,
  compare: state.compare,
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateActiveIdProductList: updateActiveIdProductList,
    quickSearchProductsList: quickSearchProductsList,

    showContactList: showContactList,
    updateActiveMenu: updateActiveMenu,
    setUser: setUser,
    loading,

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewCarDetailsPage));
