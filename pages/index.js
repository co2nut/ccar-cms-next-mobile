import { Button, Col, Divider, Empty, message, Row } from 'antd'
import axios from 'axios'
import _ from 'lodash'
import { withRouter } from 'next/dist/client/router'
import BannerAnim, { Element } from 'rc-banner-anim'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { convertParameterToProductListUrl } from '../common-function'
import GlobalSearchBar from '../components/general/global-search-bar'
import LayoutV2 from '../components/general/LayoutV2'
import ReduxPersistWrapper from '../components/general/ReduxPersistWrapper'
import SocialNewTabs from '../components/news/social-new-tabs'
import SocialVideoTabs from '../components/news/social-video-tabs'
import BrandList from '../components/product-list/brand-list'
import GridProductList from '../components/product-list/grid-product-list'
import client from '../feathers'
import { fetchProductsListHome } from '../redux/actions/productsList-actions'
import { useMediaQuery } from 'react-responsive';
import { loading, updateActiveMenu } from '../redux/actions/app-actions';
import GridProductList2 from '../components/product-list/GridProductList2'
import { routePaths } from '../route'
import SocialNewsTab2 from '../components/news/social-news-tab-2'
import SocialVideoTab2 from '../components/news/SocialVideoTab2'
import { fetchCarFreakPosts } from  '../redux/actions/carfreak-action'
import PostSmall from '../components/carFreak/components/car-freaks/PostSmall'
import PostModalCarousel from '../components/carFreak/components/PostModalCarousel'

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



const BgElement = Element.BgElement;

const searchBarRef = React.createRef(); 
const Index = (props) => {

  const [quickFilterType, setQuickFilterType] = useState('carMarket');
  const [brandList, setBrandList] = useState(props.brands || []);
  const [productLoading, setProductLoading] = useState(false);
  const [carFreakLoading, setCarFreakLoading] = useState({});
  const [userChatLikes, setUserChatLikes] = useState([]);
  const [postIndex, setPostIndex] = useState(0);
  const [postModalVisible, setPostModalVisible] = useState(false);

  useEffect(() => {
    props.updateActiveMenu('1');
}, [])

  useEffect(() => {


    axios.get(`${client.io.io.uri}brandFilterTotalV3`, {
      params: {
        filterType: 'make'
      },
    }).then(brandRes => {
      let brands = _.isArray(_.get(brandRes, ['data', 'uniqueInfo', 'makeList'])) && !_.isEmpty(_.get(brandRes, ['data', 'uniqueInfo', 'makeList'])) ? _.get(brandRes, ['data', 'uniqueInfo', 'makeList']) : [];
      brands = _.reverse(_.sortBy(brands, ['count', 'value']));
      brands = _.map(brands, 'value').slice(10)
      setBrandList(brands)
    })

    setProductLoading(true);
    axios.get(`${client.io.io.uri}displayKingAds`).then(kingAdsRes => {
      setProductLoading(false);
      kingAdsRes = _.get(kingAdsRes, ['data']) || [];
      props.fetchProductsListHome(kingAdsRes);
    })

    setCarFreakLoading(true);
    client.service('chats').find({
      query: {
        chatType: 'carfreaks',
        parentType: {
          $ne: 'club'
        },
        $limit: 4,
        $sort: {
          createdAt: -1,
        },
        $populate: ['userId'],
      }
    }).then(res => {
      setCarFreakLoading(false);
      props.fetchCarFreakPosts(_.get(res, `data`) || []);
      getUserChatLikes(_.map(_.get(res, `data`) || [], '_id'), true);
    })

  }, [])

  function getUserChatLikes(ids, concat) {

    if (_.isArray(ids) && !_.isEmpty(ids) && _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
      client.service('chatlikes')
        .find({
          query: {
            chatId: {
              $in: ids || [],
            },
            userId: _.get(props.user, ['info', 'user', '_id'])
          }
        })
        .then((res) => {
          setUserChatLikes(concat ? _.concat(userChatLikes, res.data) : res.data)
        })
    }
  }

  
  const _renderCarousel = () => {

    return (
      <div>
        <Tablet>
          <BannerAnim className="carousel" prefixCls="banner-user-tab" autoPlay>
            <Element
              prefixCls="banner-user-elem"
              key="0"
            >
              {/* <BgElement
                onClick={(e) => { window.location = 'https://ccar.my/banner/CCARAYA-T&C.pdf' }}
                key="bg"
                className="bg"
                style={{
                  backgroundImage: 'url(/banner/Raya-Tab-Banner-01.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  maxInlineSize: '-webkit-fill-available'
                }}
              /> */}
              <div className="width-100 relative-wrapper" style={{height : 250}}>
                <img src={'/banner/Tab-Banner-June-01.jpg'} className="absolute-center"/>
              </div>
            </Element>
            <Element
              prefixCls="banner-user-elem"
              key="1"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  backgroundImage: 'url(/banner/Tab-Banner-360-01.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  maxInlineSize: '-webkit-fill-available'
                }}
              />
            </Element>

            <Element
              prefixCls="banner-user-elem"
              key="1"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  backgroundImage: 'url(/banner/Tab-Banner-01.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  maxInlineSize: '-webkit-fill-available'
                }}
              />
            </Element>
          </BannerAnim>
        </Tablet>

        <Mobile>
          <BannerAnim arrow={false} type="across" prefixCls="banner-user" autoPlay>
            <Element
              prefixCls="banner-user-elem"
              key="0"
              // onClick={(e) => {window.location='https://www.facebook.com/ccar.malaysia/shop/?referral_code=page_shop_tab&preview=1&ref=page_internal'}}
            >
              <div className="width-100 relative-wrapper" style={{height : 100}}>
                <img src={'/banner/Mobile-Banner-June-01.jpg'} className="absolute-center"/>
              </div>
            </Element>

            <Element
              prefixCls="banner-user-elem"
              key="1"
            >
              <div className="width-100 relative-wrapper" style={{height : 100}}>
                <img src={'/banner/Mobile-Banner-360-01.jpg'} className="absolute-center"/>
              </div>
            </Element>

            <Element
              prefixCls="banner-user-elem"
              key="2"
            >
              <div className="width-100 relative-wrapper" style={{height : 100}}>
                <img src={'/banner/Mobile-Banner-01.jpg'} className="absolute-center"/>
              </div>
            </Element>
            </BannerAnim>
        </Mobile>
      </div>
    );
  }

  const _renderProductList = () => {
    return (
      <React.Fragment>
        <Row gutter={[10, 10]}>
          {
            // productLoading ?
            //   <GridProductSkeletonList size={12} xs={0} sm={0} md={8} lg={8} xl={6} />
            //   :
              props.productsList.productsListHome.length > 0 ?
                <GridProductList2 data={props.productsList.productsListHome} xs={0} sm={0} md={8} lg={8} xl={6} />
                :
                <div style={{ height: '30em' }}>
                  <Empty
                    style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
                    image="/empty.png"
                    imageStyle={{
                      height: 60,
                    } 
                    }
                    description={
                      <span>
                        No Result
                      </span>
                    }
                  >
                  </Empty>
                </div>
          }
        </Row>
      </React.Fragment>
    )
  }

  const _renderProductListRes = () => {
    return (
      <React.Fragment>
          {props.productsList.productsListHome.length > 0 ?
              <GridProductList data={props.productsList.productsListHome.slice(0,6)} xs={18} sm={18} md={0} lg={0} xl={0}/>
              :
              <div style={{ height: '30em' }}>
              <Empty
                  style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
                  image="/empty.png"
                  imageStyle={{
                  height: 60,
                  }}
                  description={
              <span> 
                  No Result
              </span>
          }
          >
              </Empty>
              </div>
          }
      </React.Fragment>
  )
}

const _renderProductListSecond = () => {
  return (
      <React.Fragment>
          {props.productsList.productsListHome.length > 0 ?
              <GridProductList data={props.productsList.productsListHome.slice(6,12)} xs={18} sm={18} md={0} lg={0} xl={0}/>
              :
              <div style={{ height: '30em' }}>
              <Empty
                  style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
                  image="/empty.png"
                  imageStyle={{
                  height: 60,
                  }}
                  description={
              <span>
                  No Result
              </span>
          }
          >
              </Empty>
              </div>
          }
      </React.Fragment>
  )
}

  const _renderQuickFilter = () => {

    return (
      <React.Fragment>
        <Row>
          {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="flex-justify-space-between flex-items-align-center">
                        <span className='d-inline-block h6 ' >
                            Quick Filter
                        </span>

                    </div>
                </Col> */}
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="width-100">
              <BrandList limit={10} size={66.6} data={brandList} onClickBrand={(brand) => {
                if (_.get(brand, ['value'])) {
                  let path = '/';
                  if (quickFilterType == 'carMarket') {
                    path = convertParameterToProductListUrl({ make: _.toLower(brand.value) }, null);
                  } else {
                    path = `/newcar/maker/${_.toLower(brand.value)}`
                  }
                  props.router.push(path);
                } else { 
                  message.error('Brand Not Found!')
                }
              }} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="flex-justify-start flex-items-align-center width-100">
              <span className='d-inline-block width-100' >
                <Divider style={{ margin: 0 }}></Divider>
              </span>
              <span className='d-inline-block flex-items-no-shrink text-align-right margin-left-md' onClick={() => {

                let path = '/';
                if (quickFilterType == 'carMarket') {
                  path = convertParameterToProductListUrl(null, null);
                } else {
                  path = `/newcar/filter`
                }
                props.router.push(path);
              }} >
                <Button className="background-ccar-button-yellow border-ccar-button-yellow black padding-x-lg" >More</Button>
              </span>
            </div>
          </Col>

        </Row>
      </React.Fragment>
    )
  }

  return (
    <ReduxPersistWrapper cookie={props.cookie}>

      <LayoutV2>

        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} >
            {_renderCarousel()}
          </Col>
        </Row>

        <Tablet>
        <div className="section-version3">
            <div className="container-version3">
              <Row>
                <Col span={24} className="overlay-search-bar-res">
                  <Row >
                    <Col xs={{ span: 12, offset: 6 }} sm={{ span: 12, offset: 6 }} md={{ span: 10, offset: 7 }} lg={{ span: 10, offset: 7 }} xl={{ span: 10, offset: 7 }} >
                      <div ref={searchBarRef}>
                        <GlobalSearchBar searchTypes={props.searchTypes || ['productAds', 'carspec', 'dealerWithAds']} />
                      </div>
                    </Col> 
                  </Row>
                </Col>
              </Row>

              <Row gutter={[0, 0]} className="background-white margin-y-md ">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="padding-x-xs">
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="flex-justify-space-between flex-items-align-center padding-y-md padding-x-md">
                        <span className='d-inline-block h6 font-weight-bold grey-darken-1' >CarMarket</span>
                        <span className='d-inline-block ' >
                          <a href={convertParameterToProductListUrl()}> <span className="blue">Show More</span> </a>
                        </span>
                      </div>
                    </Col>
                    <Col xs={0} sm={0} md={24} lg={24} xl={24} >
                      {_renderProductList()}
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="background-white margin-y-md ">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="padding-x-xs">
                  <Row>
                    <Col span={24} >
                      <div className="flex-justify-space-between flex-items-align-center padding-y-md padding-x-md">
                        <span className='d-inline-block h6 font-weight-bold grey-darken-1' >CarFreaks</span>
                        <span className='d-inline-block ' >
                          <a href={routePaths.carFreaks.to}> <span className="blue">Show More</span> </a>
                        </span>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      {
                        carFreakLoading ?
                          null
                          :
                          _.isArray(_.get(props.carfreak, `carFreakPosts`)) && !_.isEmpty(_.get(props.carfreak, `carFreakPosts`)) ?
                            <Row gutter={[10, 10]}>
                              {
                                _.map(_.get(props.carfreak, `carFreakPosts`), function (post) {
                                  return (
                                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                                      <PostSmall 
                                        hideAction
                                        className="thin-border box-shadow-light-center"
                                        theme="light"
                                        style={{ height: 370 }}
                                        data={post}
                                        onRedirectToPost={(post) => {
                                          setPostModalVisible(true)
                                          setPostIndex(_.findIndex(_.get(props.carfreak , `carFreakPosts`), ['_id', getObjectId(post)]))
                                        }}
                                      />
                                    </Col>
                                  )
                                })
                              }
                            </Row>
                            :
                            null
                      }
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="background-white ">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="padding-x-xs">
                  <Row>
                    <Col span={24} >
                      <div className="flex-justify-space-between flex-items-align-center padding-y-md padding-x-md">
                        <span className='d-inline-block h6 font-weight-bold grey-darken-1' >Social News</span>
                        <span className='d-inline-block ' >
                          <a href={routePaths.socialNewsAndVideo.to}> <span className="blue">Show More</span> </a>
                        </span>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <SocialNewsTab2 />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="background-white">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="padding-x-xs">
                  <Row>
                    <Col span={24} >
                      <div className="flex-justify-space-between flex-items-align-center padding-y-md padding-x-md">
                        <span className='d-inline-block h6 font-weight-bold grey-darken-1' >Social Video</span>
                        <span className='d-inline-block ' >
                          <a href={"/socialNewsAndVideo?type=videos"}> <span className="blue">Show More</span> </a>
                        </span>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <SocialVideoTab2 /> 
                    </Col>
                  </Row>
                </Col>
              </Row>

            </div>
          </div>
        </Tablet>

        <Mobile>
        <div className="section-version3">
          <div className="container-version3 padding-xs" style={{touchAction:'pan-y'}}>
          <Row className="margin-top-sm" style={{ marginBottom: '10px'}}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="padding-x-xs background-white yellow-divider">
              <Row>
                <Col span={8}>
                  <span className='d-inline-block font-weight-bold grey-darken-3' style={{ marginLeft: '10px', fontSize:'15px' }} >CARMARKET</span>
                </Col>
                <Col className="yellow-divider" span={12}>
                  <Divider style={{marginTop:'13px', marginBottom:'13px'}}></Divider>
                </Col>
                <Col span={4} style={{paddingLeft:'5px'}}>
                  <a style={{fontSize:'12px'}} href="/cars-on-sale"> See More </a>
                </Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="padding-xs">
                          {_renderProductListRes()}
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop:'10px'}}>
                        <div className="padding-xs">
                          {_renderProductListSecond()}
                        </div>
                      </Col>
                    </Row>
                   </Col>
                  </Row>

                  <Row style={{ marginBottom: '10px'}} >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} className=" background-white ">
                      <Row>
                        <Col span={8}>
                          <span className='d-inline-block font-weight-bold grey-darken-3' style={{ marginLeft: '10px', fontSize:'15px' }} >SOCIAL NEWS</span>
                        </Col>
                        <Col className="yellow-divider" span={12}>
                          <Divider style={{marginTop:'13px', marginBottom:'13px'}}></Divider>
                        </Col>
                        <Col span={4} style={{paddingLeft:'5px', paddingTop:'2px'}}>
                          <a style={{fontSize:'12px'}} href="/socialNewsAndVideo"> See More </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                          <SocialNewTabs />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="margin-top-sm" style={{ marginBottom: '10px' }} >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} className=" background-white ">
                      <Row>
                        <Col span={9}>
                          <span className='d-inline-block font-weight-bold grey-darken-3' style={{ marginLeft: '10px', fontSize:'15px' }} >SOCIAL VIDEOS</span>
                        </Col>
                        <Col className="yellow-divider" span={11}>
                          <Divider style={{marginTop:'13px', marginBottom:'13px'}}></Divider>
                        </Col>
                        <Col span={4} style={{paddingLeft:'5px', paddingTop:'2px'}}>
                          <a style={{fontSize:'12px'}} href="/socialNewsAndVideo?type=videos"> See More </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                          <SocialVideoTabs />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
        </div>
      </div>
        </Mobile>
        
        <PostModalCarousel
        posts={_.get(props.carfreak, `carFreakPosts`) || []}
        postIndex={postIndex}
        postClassName="background-black-opacity-50 round-border"
        visible={postModalVisible}
        onCancel={() => {
          setPostModalVisible(false);
        }}
      />
      </LayoutV2>
    </ReduxPersistWrapper>
  )
}


export async function getStaticProps(context) {


  return {
    props: {
      cookie: _.get(context, ['req', 'headers', 'cookie']) || null,
      seoData: {
        description: ''
      }
    }
  }
}

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
  productsList: state.productsList,
});


const mapDispatchToProps = {
  fetchProductsListHome: fetchProductsListHome,
  updateActiveMenu: updateActiveMenu,
  fetchCarFreakPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))