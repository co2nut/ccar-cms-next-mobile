import { Button, Col, Divider, Form, message, Row } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import YouTube from 'react-youtube';
import { arrayLengthCount, formatDate, formatNumber, getObjectId, getWindowInnerHeight, notEmptyLength, windowScroll } from '../../../common-function';
import client from '../../../feathers';
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions';
import { fetchCarDetails, fetchCarName, fetchCompareNewCarIds, fetchPeerCompareCars } from '../../../redux/actions/newcars-actions';
import { routePaths } from '../../../route';
import LayoutV2 from '../../general/LayoutV2';
import LightBoxGallery from '../../general/LightBoxGallery';
import { imageNotFound } from '../../profile/config';
import ReserveFormButton from '../../reserve/ReserveFormButton';
import CompareNewCarIndex from '../CompareNewCarIndex';
import NewCarMenu from '../NewCarMenu';
import NewCarOverview from '../NewCarOverview';
import SpecificationDrawer from '../SpecificationDrawer';


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

var PAGESIZE = 10

let arr = [
  { name: "string 1", value: "this", other: "that" },
  { name: "string 2", value: "this", other: "that" }
];
let obj = arr;

const PEER_COMPARISON_SIZE = 5;

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVariant: {},
      variants: [],
      peerComparisons: [],
      news: [],
      videos: [],
      specificationVisible: false,
    };

  }


  UNSAFE_componentWillMount() {
    this.getData(0);
    this.props.updateActiveMenu('1')
  }

  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState) {
    if (_.get(prevProps, ['router', 'query', 'make']) != _.get(this.props, ['router', 'query', 'make']) || _.get(prevProps, ['router', 'query', 'model']) != _.get(this.props, ['router', 'query', 'model'])) {
      this.getData(0);
      windowScroll(0, 0);
    }
  }
  getData = (skip) => {
    this.props.loading(true);
    axios.get(`${client.io.io.uri}priceRangeSearchNew`,
      {
        params: {
          match: { make: (_.get(this.props, ['router', 'query', 'make']) || '').toLowerCase(), model: (_.get(this.props, ['router', 'query', 'model']) || '').toLowerCase() },
          limit: PAGESIZE + skip,
          newCar: 'yes',
          skip: skip,
        }
      }
    ).then((res) => {


      if (_.isArray(_.get(res, `data.data`)) && !_.isEmpty(_.get(res, `data.data`))) {

        this.props.loading(true);


        let variantIds = _.map(_.get(res, `data.data[0].variants`) || [], '_id') || [];
        let promises = [];

        //Get All Variant
        promises.push(
          client.service('carspecs').find({
            query: {
              _id: {
                $in: variantIds,
              },
              $populate: 'carmodelId'
            }
          })
        )

        //Get Peer Comparison
        promises.push(
          axios.get(`${client.io.io.uri}priceRangeSearchNew`,
            {
              params: {
                match: { bodyType: _.get(res, `data.data[0].bodyType`) },
                newCar: 'yes',
                limit: PEER_COMPARISON_SIZE,
                skip: 0,
                sorting: "year:-1"
              }
            }
          )
        )

        //Get News
        promises.push(
          axios.get(`${client.io.io.uri}getNews`,
            {
              params: {
                match: {
                  publisher: {
                    $ne: 'youtube'
                  },
                  keywords: _.compact([`${_.get(res, `data.data[0].make`) || ''}`, `${_.get(res, `data.data[0].model`) || ''}`]) || null,
                },
              }
            }
          )
        )

        //Get Videos
        promises.push(
          axios.get(`${client.io.io.uri}getNews`,
            {
              params: {
                match: {
                  publisher: 'youtube',
                  keywords: _.compact([`${_.get(res, `data.data[0].make`) || ''}`, `${_.get(res, `data.data[0].model`) || ''}`]) || null,
                },
              }
            }
          )
        )
        Promise.all(promises).then(([variantsRes, peerComparisonRes, newRes, videoRes]) => {
          this.props.loading(false);
          let currentVariant = _.get(variantsRes, `data[0]`) || {};
          if (_.get(this.props, `router.query.variantId`)) {
            currentVariant = _.find(_.get(variantsRes, `data`) || [], ['_id', this.props.router.query.variantId]) || currentVariant;
          }

          this.setState({
            currentVariant: currentVariant,
            variants: _.get(variantsRes, `data`),
            peerComparisons: _.get(peerComparisonRes, `data.data`),
            news: _.get(newRes, `data.data`),
            videos: _.get(videoRes, `data.data`),
          })


        })
      }
    })
      .catch((err) => {
        this.props.loading(false);
        message.error(err.message);
      })
  }

  _getSpec(spec, fieldName) {
    let index = _.findIndex(spec, ['field', fieldName])
    if (index !== -1) {
      return spec[index]['value']
    }
    return '-'
  }

  _renderView = () => {
    switch (this.state.view) {
      case 'overview':
        return <NewCarOverview changeTabs={this.changeTabs} ></NewCarOverview>  
        break;
      case 'specs':
        return <CompareNewCarIndex /> 
        break;
      default:
        return null;
        break;
    }
  }

  render() {

    return (
      <LayoutV2>

        <Tablet>
        <div className='section'>
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }}> 
              <NewCarMenu  view={this.state.view} onChange={(view) => { this.setState({ view: view }) }} />
              <Divider style={{ marginTop: '0px', height: '2px' }} />
              <div className="margin-top-lg">
                {this._renderView()}
              </div>
            </div>
          </div>
        </Tablet>

        <Mobile>
          <div className="padding-y-md">
            <LightBoxGallery images={[_.get(this.state.currentVariant, `carmodelId.url`) || '']}>
              {
                (data, setCurrentIndex, setVisible) => {
                  return (
                    <div className="background-white relative-wrapper" style={{ height: (getWindowInnerHeight() || 500) * 0.3, width: '100%' }} onClick={(e) => { setVisible(true); setCurrentIndex(0); }}>
                      <img src={_.get(data, `images[${_.get(data, `currentIndex`) || 0}]`) || imageNotFound} className="img-cover-center" />
                    </div>
                  )
                }
              }
            </LightBoxGallery>
            <div className="padding-y-md padding-x-sm">
              <div className="font-weight-black subtitle1 text-overflow-break">
                {_.trim(`${_.get(this.state, `currentVariant.make`) || ''} ${_.get(this.state, `currentVariant.model`) || ''}`)}
              </div>
              <div className="ccar-yellow font-weight-bold headline">
                {_.get(this.state.currentVariant, `price`) ? `RM ${formatNumber(_.get(this.state.currentVariant, `price`))}` : 'N/A'}
              </div>
              <div className="font-weight-normal headline">
                Malaysia Preferences Prices Range
            </div>
            </div>

            <Row type="flex" align="stretch" gutter={[10, 20]}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex-justify-start flex-items-align-start padding-x-sm">
                  <span className='d-inline-block margin-right-md' >
                    <img src="/assets/cardetail/engine.png" style={{ width: 40, height: 40 }} />
                  </span>
                  <span className='d-inline-block ' >
                    <div className="font-weight-black headline">
                      Engine Capacity
                  </div>
                    <div className="caption font-weight-thin">
                      {_.get(this.state.currentVariant, `engineCapacity`)} cc
                  </div>
                  </span>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex-justify-start flex-items-align-start padding-x-sm">
                  <span className='d-inline-block margin-right-md' >
                    <img src="/assets/cardetail/transmission.png" style={{ width: 40, height: 40 }} />
                  </span>
                  <span className='d-inline-block ' >
                    <div className="font-weight-black headline">
                      Transmission
                  </div>
                    <div className="caption font-weight-thin capitalize">
                      {_.get(this.state.currentVariant, `transmission`)}
                    </div>
                  </span>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex-justify-start flex-items-align-start padding-x-sm">
                  <span className='d-inline-block margin-right-md' >
                    <img src="/assets/cardetail/seats.png" style={{ width: 40, height: 40 }} />
                  </span>
                  <span className='d-inline-block ' >
                    <div className="font-weight-black headline">
                      Seat
                  </div>
                    <div className="caption font-weight-thin">
                      {_.get(this.state.currentVariant, `seatCapacity`)}
                    </div>
                  </span>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex-justify-start flex-items-align-start padding-x-sm">
                  <span className='d-inline-block margin-right-md' >
                    <img src="/assets/cardetail/fuel.png" style={{ width: 40, height: 40 }} />
                  </span>
                  <span className='d-inline-block ' >
                    <div className="font-weight-black headline">
                      KM/L | Fuel Type
                  </div>
                    <div className="caption font-weight-thin">
                      {`${this._getSpec(_.get(this.state.currentVariant, `specification`) || [], 'Fuel Consumption (L/100km)')} KM/L | ${_.get(this.state.currentVariant, `fuelType`) || ''}`}
                    </div>
                  </span>
                </div>
              </Col>
            </Row>

            <div className="flex-justify-space-around flex-items-align-center padding-y-md">

              <ReserveFormButton
                type="carspec"
                carspec={this.state.currentVariant}
                reserverId={this.props.user.authenticated ? _.get(this.props.user, ['info', 'user', '_id']) : null}
                // selection={this.state.variants}
                carspecId={_.get(this.state.currentVariant, `_id`)}
                button={() => {
                  return (
                    <Button type="primary" style={{ width: '100%' }}> Ask For Reservation</Button>
                  )
                }}
                handleError={(e) => { message.error(e.message) }} />

              <Button className="padding-x-md border-ccar-button-yellow background-white ccar-button-yellow" onClick={(e) => {
                this.setState({
                  specificationVisible : true,
                })
              }}>View Specification</Button>
            </div>
            {
              arrayLengthCount(this.state.variants) > 1 ?
                <React.Fragment>
                  <div className="margin-top-xs background-grey-lighten-2 padding-y-sm padding-x-md font-weight-black subtitle1">
                    Variant Price List
                </div>

                  <Row gutter={[0, 10]}>
                    <Col xs={24} sm={24} md={8} lg={6} xl={6} >
                      <Col span={10}>
                        <img src={_.get(this.state.currentVariant, `carmodelId.url`)} style={{ width: '100%', padding: '5px', marginLeft: '5px' }}></img>
                      </Col>
                      <Col span={14} >
                        <div className="newcars-wrap-p padding-top-md padding-left-md">
                          <p style={{ textTransform: 'capitalize', textAlign: 'left', fontSize: '14px', fontWeight: '600', marginBottom: '0px', color: "rgba(0, 0, 0, 0.65)" }}> {_.get(this.state.currentVariant, `nameSearchBar`)}</p>
                          <p style={{ textAlign: 'left', color: '#FBB040', fontSize: '12px', fontWeight: 700, marginBottom: '0px', }}>
                            {`${_.get(this.state.currentVariant, `price`) ? 'RM ' + formatNumber(_.get(this.state.currentVariant, `price`)) : 'TBC'}`}
                          </p>
                          <p className="caption grey text-truncate">
                            {this._getSpec(_.get(this.state.currentVariant, `specification`) || [], 'Fuel Consumption (L/100km)')} KM/L | {this._getSpec(_.get(this.state.currentVariant, `specification`) || [], 'Peak Power (hp)')} HP | {this._getSpec(_.get(this.state.currentVariant, `specification`) || [], 'Peak Torque (Nm)')} Nm                                    </p>
                        </div>
                      </Col>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="width-100">
                        <Scrollbars autoHeight autoHide >
                          <div className="width-100 padding-md flex-justify-start flex-items-align-center">
                            {
                              _.map(this.state.variants || [], (variant) => {
                                return (
                                  <span className={`d-inline-block ${getObjectId(variant) == getObjectId(this.state.currentVariant) ? 'thin-border-2 border-ccar-button-yellow' : 'thin-border'} round-border padding-x-md padding-y-sm margin-right-md`} onClick={(e) => {
                                    this.setState({
                                      currentVariant: variant,
                                    })
                                  }} >
                                    <div className="font-weight-bold grey caption text-truncate flex-items-align-center flex-justify-center">
                                      {_.get(variant, `variant`) || _.get(variant, `newVariant`) || 'N/A'}
                                    </div>
                                    <div className="font-weight-bold caption text-truncate flex-justify-center flex-items-align-center" style={{ color: '#FBB040' }}>
                                      {_.get(variant, `price`) ? 'RM' : ''} {formatNumber(_.get(variant, `price`)) || 'N/A'}
                                    </div>
                                  </span>
                                )
                              })
                            }
                          </div>
                        </Scrollbars>
                      </div>
                    </Col>
                  </Row>
                </React.Fragment>
                :
                null
            }
            {
              _.isArray(this.state.peerComparisons) && !_.isEmpty(this.state.peerComparisons) ?
                <React.Fragment>
                  <div className="subtitle1 font-weight-bold margin-y-sm padding-x-md">
                    Peer Comparison
                      </div>
                  <Scrollbars autoHide autoHeight >
                    <div className="flex-justify-start flex-items-align-center margin-bottom-sm">
                      {
                        _.map(this.state.peerComparisons, (peerComp) => {
                          return (
                            <span className='d-inline-block margin-right-md ' >
                              <img src={_.get(peerComp, `uri`) || imageNotFound} className="img-cover" style={{ width: 200, height: 100, objectPosition: '50% 80%' }} />
                              <div className="flex-justify-center flex-items-align-center font-weight-black headline margin-top-md">
                                {_.trim(`${_.get(peerComp, `year`) || ''} ${_.get(peerComp, 'make') || ''} ${_.get(peerComp, 'model') || ''}`)}
                              </div>
                              <p style={{ textAlign: 'center', color: '#FBB040', fontSize: '12px', fontWeight: 700, marginBottom: '0px', }}>
                                {
                                  !peerComp.minPrice && !peerComp.maxPrice ?
                                    'TBC'
                                    :
                                    peerComp.minPrice == peerComp.maxPrice ?
                                      `${peerComp.minPrice ? 'RM ' + formatNumber(peerComp.minPrice) : 'TBC'}`
                                      :
                                      `${peerComp.minPrice ? 'RM ' + formatNumber(peerComp.minPrice) : 'TBC'} - ${peerComp.maxPrice ? 'RM ' + formatNumber(peerComp.maxPrice) : 'TBC'}`
                                }
                              </p>
                              <div className="flex-justify-center flex-items-align-center">
                                <Link passHref href={routePaths.newCarDetails.to} as={routePaths.newCarDetails.as(peerComp)} shallow={true}>
                                  <span className='d-inline-block width-50 background-ccar-button-yellow round-border text-align-center font-weight-black' >
                                    view
                                      </span>
                                </Link>
                              </div>
                            </span>
                          )
                        })
                      }
                    </div>
                  </Scrollbars>
                </React.Fragment>
                :
                null
            }
            {
              _.isArray(this.state.news) && !_.isEmpty(this.state.news) ?
                <React.Fragment>
                  <div className="subtitle1 font-weight-bold margin-y-sm padding-x-md">
                    News
                      </div>
                  <Scrollbars autoHide autoHeight autoHeightMin={230}>
                    <div className="flex-justify-start flex-items-align-center">
                      {
                        _.map(this.state.news, (item) => {
                          return (
                            <span className='d-inline-block margin-right-md thin-border round-border box-shadow-normal' style={{ height: 220 }} >
                              <img src={_.get(item, `thumbnailUrl`) || imageNotFound} style={{ width: 200, height: 100 }} />
                              <div className="padding-sm">
                                <div className="font-weight-bold headline text-truncate-twoline">
                                  {_.get(item, `title`)}
                                </div>
                                <div className="font-weight-thin caption text-truncate-threeline">
                                  {_.get(item, `content`) || _.get(item, `content2`) || _.get(item, `content3`)}
                                </div>
                              </div>
                            </span>
                          )
                        })
                      }
                    </div>
                  </Scrollbars>
                </React.Fragment>
                :
                null
            }

            {
              _.isArray(this.state.videos) && !_.isEmpty(this.state.videos) ?
                <React.Fragment>
                  <div className="subtitle1 font-weight-bold margin-y-sm padding-x-md">
                    Videos
                      </div>
                  <Scrollbars autoHide autoHeight autoHeightMin={250}>
                    <div className="flex-justify-start flex-items-align-center">
                      {
                        _.map(this.state.videos, (item) => {
                          return (
                            <span className='d-inline-block margin-right-md thin-border round-border box-shadow-normal' style={{ height: 245 }}  >
                              <div className="relative-wrapper" style={{ width: 250, height: 150 }}>
                                <YouTube videoId={item.youtubeId} opts={opts} />
                              </div>

                              <div className="flex-items-align-start">
                                <span>
                                  <div className="icon">
                                    <img src={item.channelThumbnailUrl} />
                                  </div>
                                </span>
                                <span>
                                  <div className="title">
                                    <div className="text-truncate-twoline margin-bottom-sm font-weight-bold">
                                      {item.title}
                                    </div>
                                    <span style={{ fontSize: '12px' }}>
                                      {item.authorId ? item.authorId.name : null} | {formatDate(item.publishedAt, "DD-MM-YYYY")}
                                    </span>
                                  </div>

                                </span>
                              </div>
                            </span>
                          )
                        })
                      }
                    </div>
                  </Scrollbars>
                </React.Fragment>
                :
                null
            }
          </div>
        </Mobile>

        <SpecificationDrawer
          visible={this.state.specificationVisible}
          data={[this.state.currentVariant]}
          findById={false}
          onCancel={() => {
            this.setState({
              specificationVisible : false,
            })
          }}

        />
      </LayoutV2>

    );
  }

}

const mapStateToProps = state => ({
  newCars: state.newcars || state.newCars,
  productsList: state.productsList,
  user: state.user,
});

const mapDispatchToProps = {
  loading: loading,
  fetchCarName: fetchCarName,
  fetchCarDetails: fetchCarDetails,

  fetchCompareNewCarIds: fetchCompareNewCarIds,
  fetchPeerCompareCars: fetchPeerCompareCars,
  updateActiveMenu: updateActiveMenu
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(Details)));