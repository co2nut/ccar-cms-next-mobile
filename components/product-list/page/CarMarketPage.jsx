import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Tag, Collapse, Button, Col, Divider, Drawer, Empty, Icon, Pagination, Radio, Row, Select, Spin, Tooltip, Form } from 'antd'
import axios from 'axios'
import _ from 'lodash'
import { withRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { convertParameterToProductListUrl, notEmptyLength, isValidNumber, convertRangeFormatBack, objectRemoveEmptyValue, formatNumber } from '../../../common-function'
import LayoutV2 from '../../../components/general/LayoutV2'
import ProductList from '../../../components/product-list/ProductList'
import ProductListFilterForm from '../../../components/product-list/ProductListFilterForm'
import client from '../../../feathers'
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions'
import { getCarBrand } from '../../../params/carBrandsList'
import GridProductSkeleton from '../../skeleton-loader/GridProductSkeleton'
import queryString from 'query-string';
import carAdsFilter from '../../../api/carAdsFilter'
import brandFilterTotal from '../../../api/brandFilterTotal'
import { setProductListLoading } from '../../../redux/actions/productsList-actions'
import MakeModal from '../filter-modal/MakeModal';
import StateModal from '../filter-modal/StateModal';
import Scrollbars from 'react-custom-scrollbars';
import DetailFilterForm from '../DetailFilterForm';

const priceRangeOptions = [[50000, '<'], [50000, 100000], [100000, 200000], [200000, 400000], [400000, 600000], [600000, 800000], [800000, 1000000], [1000000, '>='], ];
const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const modals = ['make', 'model', 'state', 'area', 'bodyType', 'color', 'fuelType'];
const antIcon = <img src="/assets/Ccar-logo.png" style={{ fontSize: 60 }} />;
const PAGESIZE = 30;
const searchBarRef = React.createRef();
let timeoutFunction;

const SWITCH_OFF_COLOR = '#9E9E9E';
const SWITCH_ON_COLOR = '#FFCC32';

const CarMarketPage = (props) => {
    const [mainConfig, setMainConfig] = useState(props.config || {
        page: 1,
        sorting: {},
        view: 'gridView',
    })
    const [view, setView] = useState('gridView')
    const [currentFilterGroup, setCurrentFilterGroup] = useState(props.filterGroup || {})
    const [availableFilterOption, setAvailableFilterOption] = useState(props.availableOptions || {})
    const [total, setTotal] = useState(props.productListTotal || 0)
    const [productList, setProductList] = useState(props.productList || [])
    const [spinning, setSpinning] = useState(false)
    const [isEmptyData, setIsEmptyData] = useState(false);
    const [initRan, setInitRan] = useState({
        filterGroup: false,
        config: false,
    });
    const [visible, setVisible] = useState()
    const [drawerType, setDrawerType] = useState('brand')
    const [expandKey, setExpandKey] = useState();
    const [origAvailableFilterOption, setOrigAvailableFilterOption] = useState({})

    useEffect(() => {
        props.updateActiveMenu('2');
        getOrigAvailableOptions();
    }, [])

    useEffect(() => {
        setInitRan({
            filterGroup: true,
            config: true,
        })

    }, [])

    useEffect(() => {
        if (initRan.filterGroup && initRan.config) {
            getDataFromUrl();
        }
    }, [props.router.query])


    useEffect(() => {

        if (initRan.filterGroup && initRan.config) {
            props.setProductListLoading(true);
            if (window) {
                window.scroll(0, 0)
            }
            clearTimeout(timeoutFunction);
            timeoutFunction = setTimeout(() => {
                carAdsFilter({
                    filterGroup: currentFilterGroup,
                    config: mainConfig
                }, PAGESIZE).then(res => {
                    props.setProductListLoading(false);
                    setProductList(_.get(res, ['data']) || []);
                    setTotal(_.get(res, ['total']) || 0);

                }).catch(err => {
                    props.setProductListLoading(false);
                });
                brandFilterTotal(modals, {
                    filterGroup: currentFilterGroup,
                    config: mainConfig
                }).then(res => {
                    setAvailableFilterOption(res);
                }).catch(err => {
                });
            }, 500);
        }
    }, [currentFilterGroup, mainConfig])

    useEffect(() => {
        setTimeout(() => {

            let productList2 = _.cloneDeep(productList)

            let inputProductList = _.map(productList2, function (v) {
                v.productAdsId = v._id
                return { productAdsId: v.productAdsId }
            });

            if (_.isEmpty(inputProductList) === false) {
                axios.post(`${client.io.io.uri}processImpression`,
                    {
                        params: {
                            productList: inputProductList,
                            source: 'web',
                        }
                    }).then((res) => { })
            }
        },
            3000);

    }, [productList])

    const showDrawer = () => {
        visible == true ? setVisible(false) : setVisible(true)
    }

    const onClose = () => {
        visible == false ? setVisible(true) : setVisible(false)
    }

    function pushParameterToUrl(data, config) {

        try {
            let path = convertParameterToProductListUrl(data, config)
            let asPath = path.split('?')[0].split('/');
            asPath = _.map(asPath, function (item, i) {
                if (i > 1) {
                    item = `[parameter${i - 1}]`
                }
                return item;
            })
            asPath = asPath.join('/')
            setProductList([]);
            props.setProductListLoading(true);
            props.router.push(asPath, path, { shallow: true })
        } catch (error) {

        }

    }

    function getUrlData() {
        try {
            let querySearch = props.router.asPath.split('?')[1];
            let query = queryString.parse(querySearch);
            if (!query) {
                query = {};
            }

            let filterGroup = query.data ? JSON.parse(query.data) : {};
            let sorting = query.sorting ? JSON.parse(query.sorting) : {};
            let config = {
                page: query.page,
                sorting: sorting,
                view: query.view,
            }

            if (!isValidNumber(parseInt(config.page))) {
                config.page = 1;
            }

            if (!_.get(config, ['sorting', 'carspec.year']) && !_.get(config, ['sorting', 'mileageFilter']) && !_.get(config, ['sorting', 'searchPrice'])) {
                config.sorting = {};
            }
            if (_.get(config, ['view']) != 'gridView' && _.get(config, ['view']) != 'listView') {
                config.view = 'gridView';
            }
            setMainConfig(config);


            //Only state need to check manually;
            let state = props.router.asPath.split('?')[0].split('/');
            state = state[state.length - 1]

            let stateArr = state.split('_');

            filterGroup.state = _.isArray(stateArr) && !_.isEmpty(stateArr) ? _.get(stateArr, [1]) || '' : '';
            filterGroup.area = _.isArray(stateArr) && !_.isEmpty(stateArr) ? _.get(stateArr, [2]) || '' : '';

            if (filterGroup.priceRange) {
                filterGroup.priceRange = convertRangeFormatBack(filterGroup.priceRange)
            }
            if (filterGroup.yearRange) {
                filterGroup.yearRange = convertRangeFormatBack(filterGroup.yearRange)
            }
            if (filterGroup.mileageRange) {
                filterGroup.mileageRange = convertRangeFormatBack(filterGroup.mileageRange)
            }
            if (filterGroup.engineCapactityRange) {
                filterGroup.engineCapactityRange = convertRangeFormatBack(filterGroup.engineCapactityRange)
            }

            setCurrentFilterGroup({
                ...currentFilterGroup,
                ...filterGroup,
            });

        } catch (error) {
            console.log('error', error);
        }
    }

    function pushParameterToUrl(data, config) {
        let path = convertParameterToProductListUrl(data, config)
        if (path != `${props.router.asPath}${props.router.query}`) {
          props.router.push(path)
          setExpandKey(null)
        }
      }

    function getDataFromUrl() {
        window.scrollTo(0, 0);
        props.loading(true);
        let andFilter = { $and: [] }
        let data = getUrlData();
        if (!notEmptyLength(data)) {
          return;
        }
    
        if (notEmptyLength(data.filterGroup) && notEmptyLength(data.filterGroup.yearRange)) {
          data.filterGroup.yearRange = convertToRangeFormat(data.filterGroup.yearRange);
          data.filterGroup.yearRange = convertFilterRange(data.filterGroup.yearRange, 'carspec.year')
          if (notEmptyLength(data.filterGroup.yearRange)) {
            andFilter.$and = [...andFilter.$and, ...data.filterGroup.yearRange]
            data.filterGroup = Object.assign(data.filterGroup, andFilter)
          }
          delete data.filterGroup.yearRange;
        }
    
        if (notEmptyLength(data.filterGroup) && notEmptyLength(data.filterGroup.priceRange)) {
          data.filterGroup.priceRange = convertToRangeFormat(data.filterGroup.priceRange);
          data.filterGroup.priceRange = convertFilterRange(data.filterGroup.priceRange, 'searchPrice')
          if (notEmptyLength(data.filterGroup.priceRange)) {
            andFilter.$and = [...andFilter.$and, ...data.filterGroup.priceRange]
            data.filterGroup = Object.assign(data.filterGroup, andFilter)
          }
          delete data.filterGroup.priceRange;
        }
    
        if (notEmptyLength(data.filterGroup) && notEmptyLength(data.filterGroup.mileageRange)) {
          data.filterGroup.mileageRange = convertToRangeFormat(data.filterGroup.mileageRange);
          data.filterGroup.mileageRange = convertFilterRange(data.filterGroup.mileageRange, 'mileageFilter')
          if (notEmptyLength(data.filterGroup.mileageRange)) {
            andFilter.$and = [...andFilter.$and, ...data.filterGroup.mileageRange]
            data.filterGroup = Object.assign(data.filterGroup, andFilter)
          }
          delete data.filterGroup.mileageRange;
        }
    
        if (notEmptyLength(data.filterGroup) && notEmptyLength(data.filterGroup.engineCapacityRange)) {
          data.filterGroup.engineCapacityRange = convertToRangeFormat(data.filterGroup.engineCapacityRange);
          data.filterGroup.engineCapacityRange = convertFilterRange(data.filterGroup.engineCapacityRange, 'carspec.engineCapacity')
          if (notEmptyLength(data.filterGroup.engineCapacityRange)) {
            andFilter.$and = [...andFilter.$and, ...data.filterGroup.engineCapacityRange]
            data.filterGroup = Object.assign(data.filterGroup, andFilter)
          }
          delete data.filterGroup.engineCapacityRange;
        }
    
        data.filterGroup = objectRemoveEmptyValue(data.filterGroup);
        let match = { $match: { ...data.filterGroup } }
        axios.get(`${client.io.io.uri}carAdsFilterV3`,
          {
            params: {
              match,
              sorting: data.mainConfig.sorting || {},
              limit: PAGESIZE,
              skip: ((_.get(data.mainConfig, ['page']) || 1) - 1) * PAGESIZE,
            }
          })
          .then((res) => {
    
            props.loading(false);
            if (notEmptyLength(res.data.data)) {
              setProductList(res.data.data)
              setTotal(res.data.total);
            } else {
              setProductList([])
              setTotal(0);
            }
          })
          .catch((err) => {
            props.loading(false);
            // message.error(err.message);
          })
    
        let promises = [];
        _.forEach(modals, function (modal) {
          promises.push(
            axios.get(`${client.io.io.uri}brandFilterTotalV3`, {
              params: { filterType: modal, match },
              headers: { 'Authorization': client.settings.accessToken }
            })
          )
        })
    
        Promise.all(promises).then((responses) => {
          if (_.isArray(responses) && !_.isEmpty((responses))) {
            let options = {}
            _.forEach(responses, function (response, index) {
              options[`${modals[index]}List`] = response.data.uniqueInfo[`${modals[index]}List`];
            })
    
            setAvailableFilterOption(options)
          }
        }).catch((err) => {
          // message.error(err.message);
        })
    
      }

      async function getOrigAvailableOptions(match) {
        if (!_.isPlainObject(match) && _.isEmpty(match)) {
          match = {};
        }
        let promises = [];
        _.forEach(modals, function (modal) {
          promises.push(
            axios.get(`${client.io.io.uri}brandFilterTotalV3`, {
              params: { filterType: modal, match },
              headers: { 'Authorization': client.settings.accessToken }
            })
          )
        })
    
        let responses = await Promise.all(promises);
    
        if (_.isArray(responses) && !_.isEmpty((responses))) {
          let options = {}
          _.forEach(responses, function (response, index) {
            options[`${modals[index]}List`] = response.data.uniqueInfo[`${modals[index]}List`];
          })
          setOrigAvailableFilterOption(options)
        }
      }

      const _renderFilterTags = (filterGroup) => {
        try {
          const showTags = ['make', 'model', 'state', 'condition', 'yearRange', 'priceRange', 'mileageRange', 'transmission', 'color', 'bodyType', 'fuelType', 'engineCapacityRange'];
          if (_.isPlainObject(filterGroup) && !_.isEmpty(filterGroup)) {
            filterGroup = _.pick(objectRemoveEmptyValue(filterGroup), showTags);
            if(filterGroup.yearRange){
              filterGroup.yearRange = convertRangeFormatToText(filterGroup.yearRange);
            }
            if(filterGroup.priceRange){
              filterGroup.priceRange = convertRangeFormatToText(filterGroup.priceRange, 'price');
            }
            if(filterGroup.mileageRange){
              filterGroup.mileageRange = convertRangeFormatToText(filterGroup.mileageRange, 'mileage');
            }
            if(filterGroup.engineCapacityRange){
              filterGroup.engineCapacityRange = convertRangeFormatToText(filterGroup.engineCapacityRange, 'engineCapacity');
            }
            filterGroup = Object.entries(filterGroup) || [];
            return (
              <Scrollbars autoHide autoHeight> 
                <div className=" flex-items-align-center flex-justify-start">
                  {
                    _.map(filterGroup || [], function (item) {
                      return (
                        <Tag key={`${item[0]}-tag`} className=" capitalize margin-right-md" closable onClose={() => { 
                          let cloneFilterGroup = _.cloneDeep(currentFilterGroup) || {};
                          delete cloneFilterGroup[item[0]];
                          pushParameterToUrl(cloneFilterGroup, { ...mainConfig, page: 1 })
                        }} color="orange">{item[1] || 'N/A'}</Tag>
                      )
                    })
                  }
                </div>
              </Scrollbars>
            )
          }
    
          return null;
        } catch (error) {
          console.log(error);
        }
      }

    const _renderGridViewRes = (data) => {
        if (notEmptyLength(data)) {
            return (
                <ProductList data={data} /> 
            )
        } else {
            return (
                <div style={{ height: '30em' }}>
                    <Empty
                        style={{ position: 'absolute', top: '50%', transform: 'translate(50%,-50%)', right: '50%' }}
                        image="/empty.png"
                        imageStyle={{ height: 60 }}
                        description={<span>No Result</span>} 
                    >
                    </Empty>
                </div>
            )
        }
    }

    const menuView = (
        <MakeModal 
          options={_.isArray(_.get(availableFilterOption, ['makeList'])) && !_.isEmpty(_.get(availableFilterOption, ['makeList'])) && !currentFilterGroup.make ? _.get(availableFilterOption, ['makeList']) : _.get(origAvailableFilterOption, ['makeList']) || []}
          onSelect={(brand, model) => {
            setCurrentFilterGroup({
              ...currentFilterGroup,
              make: _.toLower(_.get(brand, 'value') || ''),
              model: _.toLower(_.get(model, 'model') || ''),
              selectFilter: (brand.value).concat([])
            })
            pushParameterToUrl({ ...currentFilterGroup, make: _.toLower(_.get(brand, 'value') || ''), model: _.toLower(_.get(model, 'model') || ''), }, mainConfig)
          }}
        />
      );
    
      const stateView = (
        <StateModal
          options={_.isArray(_.get(availableFilterOption, ['stateList'])) && !_.isEmpty(_.get(availableFilterOption, ['stateList'])) && !currentFilterGroup.state ? _.get(availableFilterOption, ['stateList']) : _.get(origAvailableFilterOption, ['stateList']) || []}
          onSelect={(state) => {
            if (_.get(state, ['value'])) {
              setCurrentFilterGroup({
                ...currentFilterGroup,
                state: _.toLower(state.value),
              })
              pushParameterToUrl({ ...currentFilterGroup, state: _.toLower(state.value) }, mainConfig)
            }
          }}
        /> 
      )
    
    //   const yearView = (
    //     <YearRangeFiltering onChange={(data) => {
    //       if (_.isPlainObject(data) && !_.isEmpty(data)) {
    //         setCurrentFilterGroup({
    //           ...currentFilterGroup,
    //           ...data
    //         })
    //         pushParameterToUrl({ ...currentFilterGroup, ...data }, mainConfig)
    //       }
    //     }} />
    //   )
    
      const priceView = (
        <Row style={{ marginTop: '10px' }}>
          {/* <div className="d-flex scroller-type margin-x-sm" style={{ overflow: 'scroll' }}> */}
          {
            _.map(priceRangeOptions, function (priceRange) {
              return (
                <Col span={8} style={{ marginBottom: '10px' }}>
                  <Button className="margin-x-sm" onClick={(e) => {
                    pushParameterToUrl({ ...currentFilterGroup, priceRange: priceRange }, { ...mainConfig, page: 1 })
                  }}>
                    {
                      !priceRange[1] || priceRange[1] == '<' || priceRange[1] == '<=' ?
                        `0-${formatNumber(priceRange[0], 'auto', false, 0)}`
                        :
                        priceRange[1] == '==' ?
                          `Equal ${formatNumber(priceRange[0], 'auto', false, 0)}`
                          :
                          priceRange[1] == '>' || priceRange[1] == '>=' ?
                            `Over ${formatNumber(priceRange[0], 'auto', false, 0)}`
                            :
                            `${formatNumber(priceRange[0], 'auto', false, 0)} - ${formatNumber(priceRange[1], 'auto', false, 0)} `
                    }
                  </Button>
                </Col>
              )
            })
          }
          {/* </div> */}
        </Row>
      )

      // const detailView = (
      //   <div style={{ marginTop: '10px' }}>
      //     <DetailFilterForm options={availableFilterOption} onChange={(data) => {
      //       if (_.isPlainObject(data) && !_.isEmpty(data)) {
      //         setCurrentFilterGroup({
      //           ...currentFilterGroup,
      //           ...data
      //         })
      //         pushParameterToUrl({ ...currentFilterGroup, ...data }, mainConfig)
      //       }
      //     }} />
      //   </div>
      // )
    
      const conditionView =
        (
          <Form.Item style={{ margin: '0px', marginBottom: '0px', padding: '2px 2px 0px 0px' }}>
            <Radio.Group className='condition-form ' style={{ textAlign: 'center', width: '100%', padding: '0px' }}
              value={currentFilterGroup.condition ? currentFilterGroup.condition : 'all'}
              onChange={(e) => { setCurrentFilterGroup({ ...currentFilterGroup, condition: e.target.value }); pushParameterToUrl({ ...currentFilterGroup, condition: _.toLower(e.target.value) }, { ...mainConfig, page: 1 }) }} >
              <Row gutter={[10, 0]} type="flex" align="middle" justify="space-around" className='fill-parent'>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Radio.Button className="w-100" style={{ backgroundColor: "", padding: 0 }} value="used" onClick={(e) => { if (currentFilterGroup.condition == 'used') { setCurrentFilterGroup({ ...currentFilterGroup, condition: '' }) } }}>
                    <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold" }}>USED</p>
                  </Radio.Button>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Radio.Button className="w-100" style={{ backgroundColor: "", padding: 0 }} value="recon" onClick={(e) => { if (currentFilterGroup.condition == 'recon') { setCurrentFilterGroup({ ...currentFilterGroup, condition: '' }) } }}>
                    <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold" }}>RECON</p>
                  </Radio.Button>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <Radio.Button className="w-100" style={{ backgroundColor: "", padding: 0 }} value="new" onClick={(e) => { if (currentFilterGroup.condition == 'new') { setCurrentFilterGroup({ ...currentFilterGroup, condition: '' }) } }}>
                    <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold" }}>NEW</p>
                  </Radio.Button>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
        )

        const sortingView = () => {
            const compA = (searchTypeObj) => { return <div style={{ width: '20px', height: '20px', float: 'right', backgroundColor: '#000000' }} className="cursor-pointer thin-border round-border" onClick={(e) => { pushParameterToUrl(currentFilterGroup, { sorting: { ...searchTypeObj }, page: 1 }) }} /> }
            const compB = (searchTypeObj) => { return <div style={{ width: '20px', height: '20px', float: 'right' }} className="cursor-pointer thin-border round-border" onClick={(e) => { pushParameterToUrl(currentFilterGroup, { sorting: { ...searchTypeObj }, page: 1 }) }} /> }
        
            return (
              <div className="width-100" >
                <div className="margin-top-sm">
                  <h4>Sort</h4>
                  <Row>
                    <Col span={20}><p>Price: Low to High</p></Col>
                    <Col span={4} style={{ textAlign: 'right' }}>
                      {_.get(mainConfig, ['sorting', 'searchPrice']) == 1 ? compA({ 'searchPrice': null }) : compB({ 'searchPrice': 1 })}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20}><p>Price: High to Low</p></Col>
                    <Col span={4}>
                      {_.get(mainConfig, ['sorting', 'searchPrice']) == -1 ? compA({ 'searchPrice': null }) : compB({ 'searchPrice': -1 })}
                    </Col>
                  </Row>
        
                  <Row>
                    <Col span={20}><p> Year: Old to New </p></Col>
                    <Col span={4}>
                      {_.get(mainConfig, ['sorting', 'carspec.year']) == 1 ? compA({ 'carspec.year': null }) : compB({ 'carspec.year': 1 })}
                    </Col>
                  </Row>
        
                  <Row>
                    <Col span={20}><p> Year: New to Old </p></Col>
                    <Col span={4}>
                      {_.get(mainConfig, ['sorting', 'carspec.year']) == -1 ? compA({ 'carspec.year': null }) : compB({ 'carspec.year': -1 })}
                    </Col>
                  </Row>
        
                  <Row>
                    <Col span={20}><p> Mileage: Low to High </p></Col>
                    <Col span={4}>
                      {_.get(mainConfig, ['sorting', 'mileageFilter']) == 1 ? compA({ 'mileageFilter': null }) : compB({ 'mileageFilter': 1 })}
                    </Col>
                  </Row>
        
                  <Row>
                    <Col span={20}><p>Mileage: High to Low</p></Col>
                    <Col span={4}>
                      {_.get(mainConfig, ['sorting', 'mileageFilter']) == -1 ? compA({ 'mileageFilter': null }) : compB({ 'mileageFilter': -1 })}
                    </Col>
                  </Row>
                </div>
              </div>
            )
          }

    return (
        <LayoutV2>
            <div className="section-version3">
                <div className='container-version3 padding-x-sm' style={{touchAction:'pan-y'}}>
                    <Spin indicator={antIcon} spinning={spinning} indicator={
                            <img src="/loading.gif" style={{ width: 100, height: 100, position: 'sticky', position: '-webkit-sticky', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto' }} />
                        }>
                            <Row gutter={[{ xs: 8, sm: 8, md: 15, lg: 15, xl: 15 }, 16]}>
                                <Col className="gutter-row" xs={24} sm={24} md={24} lg={18} xl={18}>

                                    <Row className="margin-bottom-md">
                                        <Col span={20}>
                                            <span style={{fontSize:'16px'}}>{total} </span>
                                                {props.router.query.parameter1 ?
                                            <span style={{fontSize:'16px'}} className='capitalize'>{getCarBrand(_.toLower(props.router.query.parameter1)).value || props.router.query.parameter1} </span> : ''}
                                            <span style={{fontSize:'16px'}}>Cars for Sale</span>
                                        </Col>
                                        <Col span={4} style={{ textAlign: 'right' }}>
                                        <   div onClick={() => { setExpandKey(expandKey == '7' ? null : '7') }}>
                                                <img style={{ width: '40%', height: '20px' }} src="/assets/sorting-2.png"></img>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={24}>
                                            <span className='flex-items-align-center flex-justify-space-around collapsible-drawer'>
                                            <span className='flex-items-align-center' >
                                            <span className="margin-right-lg" onClick={() => { setExpandKey(expandKey == '1' ? null : '1') }} >Brand <Icon type="down" /> </span>
                                            <span className="margin-right-lg" onClick={() => { setExpandKey(expandKey == '2' ? null : '2') }} >State <Icon type="down" /> </span>
                                            <span className="margin-right-lg" onClick={() => { setExpandKey(expandKey == '3' ? null : '3') }} >Year <Icon type="down" /> </span>
                                            <span className="margin-right-lg" onClick={() => { setExpandKey(expandKey == '4' ? null : '4') }} >Price <Icon type="down" /> </span>
                                            <span onClick={() => { setExpandKey(expandKey == '5' ? null : '5') }} >Detail <Icon type="down" /> </span>
                                            </span>
                                            </span>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '10px' }}>
                  <Col span={9}>
                    <Button style={{ padding: '0px 10px' }} onClick={() => { setExpandKey(expandKey == '6' ? null : '6') }}> {currentFilterGroup.condition ? currentFilterGroup.condition.toUpperCase() : 'Condition'}<Icon type="down" /> </Button>
                  </Col>

                  <Col span={15}>
                    <Col style={{ paddingRight: '5px' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                      <div className="w-100 text-truncate-twoline flex-items-align-center" style={{ height: 38, padding: 2, borderRadius: 5, backgroundColor: currentFilterGroup.readyStock ? "rgb(156,31,20)" : "#EDECEA", color: currentFilterGroup.readyStock ? "#ffffff" : "##000000A6" }} value="readyStock" onClick={(e) => { setCurrentFilterGroup({ ...currentFilterGroup, readyStock: !currentFilterGroup.readyStock }); pushParameterToUrl({ ...currentFilterGroup, readyStock: currentFilterGroup.readyStock ? false : true }, { ...mainConfig, page: 1 }) }}>
                        <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold", marginBottom: '0px' }}> READY </p>
                        <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold", marginBottom: '0px' }}> STOCK</p>
                      </div>
                    </Col>
                    <Col style={{ paddingRight: '5px' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                      <div className="w-100" style={{ alignItems: 'center', paddingTop: '15%', height: 38, borderRadius: 5, backgroundColor: currentFilterGroup.registrationUrl ? "rgb(252,101,134)" : "#EDECEA", color: currentFilterGroup.readyStock ? "#ffffff" : "##000000A6" }} value="registrationUrl" onClick={(e) => { setCurrentFilterGroup({ ...currentFilterGroup, registrationUrl: !currentFilterGroup.registrationUrl }); pushParameterToUrl({ ...currentFilterGroup, registrationUrl: currentFilterGroup.registrationUrl ? false : true }, { ...mainConfig, page: 1 }) }}>
                        <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold", marginBottom: '0px' }}>REG</p>
                      </div>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                      <div className="w-100" style={{ alignItems: 'center', height: 38, paddingLeft: '25%', paddingTop: '10%', borderRadius: 5, backgroundColor: currentFilterGroup.car360View ? "rgb(85,204,212)" : "#EDECEA" }} value="360" onClick={(e) => { setCurrentFilterGroup({ ...currentFilterGroup, car360View: !currentFilterGroup.car360View }); pushParameterToUrl({ ...currentFilterGroup, car360View: !currentFilterGroup.car360View }, { ...mainConfig, page: 1 }) }}>
                        <img style={{ width: '60%' }} src="/assets/profile/icon-list/carmarket-bar-icon/360.png" />
                      </div>
                    </Col>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Collapse className="collapse-no-header border-none collapse-body-no-padding collapse-body-overflow-visible" activeKey={expandKey}>
                      <Collapse.Panel key="1" showArrow={false} collapsible={true}>
                        <div style={{ marginTop: '10px' }} className="width-100">
                          {menuView}
                        </div>
                      </Collapse.Panel>
                      <Collapse.Panel key="2" showArrow={false} collapsible={true}>
                        <div className="width-100" >
                          {stateView}
                        </div>
                      </Collapse.Panel>
                      <Collapse.Panel key="3" showArrow={false} collapsible={true}>
                        <div className="width-100" >
                          {/* {yearView} */}
                        </div>
                      </Collapse.Panel>
                      <Collapse.Panel key="4" showArrow={false} collapsible={true}>
                        <div className="width-100" >
                          {priceView}
                        </div>
                      </Collapse.Panel>
                      <Collapse.Panel key="6" showArrow={false} collapsible={true}>
                        <div className="width-100" >
                          {conditionView}
                        </div>
                      </Collapse.Panel>
                      <Collapse.Panel key="7" showArrow={false} collapsible={true}>
                        {sortingView()}
                      </Collapse.Panel>
                    </Collapse>
                  </Col>
                </Row>

                <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />

                {_renderFilterTags(currentFilterGroup)}


                <Collapse className="collapse-no-header border-none collapse-body-no-padding collapse-body-overflow-visible" activeKey={expandKey}>
                  <Collapse.Panel key="5" showArrow={false}>
                    <div className="width-100" >
                      {/* {detailView} */}
                    </div>
                  </Collapse.Panel>
                </Collapse>

                                    {/* <Row gutter={[0, 20]}>
                                        <Col xs={24} sm={24} md={7} lg={6} xl={6} >
                                            <Radio.Group
                                                className="wrap-businessType-radio"
                                                onChange={(e) => { setCurrentFilterGroup({ ...currentFilterGroup, condition: e.target.value }); pushParameterToUrl({ ...currentFilterGroup, condition: _.toLower(e.target.value) }, { ...mainConfig, page: 1 }) }}
                                                value={currentFilterGroup.condition ? currentFilterGroup.condition : ''}>
                                                <Radio.Button value="">All</Radio.Button>
                                                <Radio.Button value="used">Used</Radio.Button>
                                                <Radio.Button value="recon">Recon</Radio.Button>
                                                <Radio.Button value="new">New</Radio.Button>
                                            </Radio.Group>
                                        </Col>
                                        <Col xs={24} sm={24} md={6} lg={5} xl={5}>
                                            <label>Sort by: </label>
                                            <Select defaultValue="createdAt:-1" style={{ width: 120 }}
                                                dropdownMatchSelectWidth={false}
                                                onChange={(e) => {
                                                    let sorting = {};
                                                    let str = e.split(':') || [];
                                                    sorting[str[0]] = parseInt(str[1]);
                                                    setCurrentFilterGroup({ ...currentFilterGroup });
                                                    pushParameterToUrl(currentFilterGroup, { ...mainConfig, sorting: sorting, page: 1 })
                                                }}
                                                value={
                                                    _.isPlainObject(mainConfig.sorting) && !_.isEmpty(objectRemoveEmptyValue(mainConfig.sorting)) ?
                                                        `${_.get(Object.entries(mainConfig.sorting), [0, 0])}:${mainConfig.sorting[_.get(Object.entries(mainConfig.sorting), [0, 0])]}`
                                                        :
                                                        ''}
                                            >
                                                <Select.Option value="createdAt:-1">Best Value</Select.Option>
                                                <Select.Option value="searchPrice:1">Price (Low to High)</Select.Option>
                                                <Select.Option value="searchPrice:-1">Price (High to Low)</Select.Option>
                                                <Select.Option value="carspec.year:-1">Year (New to Old)</Select.Option>
                                                <Select.Option value="carspec.year:1">Year (Old to New)</Select.Option>
                                                <Select.Option value="mileageFilter:1">Mileage (Low to High)</Select.Option>
                                                <Select.Option value="mileageFilter:-1">Mileage (High to Low)</Select.Option>
                                            </Select>
                                        </Col>

                                        <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{ paddingTop: '15px' }}>
                                            <Row>
                                                <Col xs={10} sm={14} md={14} lg={14} xl={14} ><label>Reg Card:</label></Col>
                                                <Col xs={12} sm={12} md={10} lg={10} xl={10} >
                                                    <Switch offColor={SWITCH_OFF_COLOR} onColor={SWITCH_ON_COLOR} height={20} width={40} checkedIcon={null} uncheckedIcon={null} checked={currentFilterGroup.registrationUrl} onChange={(checked) => { setCurrentFilterGroup({ ...currentFilterGroup, registrationUrl: checked }); pushParameterToUrl({ ...currentFilterGroup, registrationUrl: checked }, { ...mainConfig, page: 1 }) }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{ paddingTop: '15px' }}>
                                            <Row>
                                                <Col xs={12} sm={14} md={14} lg={14} xl={14} ><label>360&deg; View:</label></Col>
                                                <Col xs={10} sm={10} md={10} lg={10} xl={10} >
                                                    <Switch offColor={SWITCH_OFF_COLOR} onColor={SWITCH_ON_COLOR} height={20} width={40} checkedIcon={null} uncheckedIcon={null} checked={currentFilterGroup.car360View} onChange={(checked) => { setCurrentFilterGroup({ ...currentFilterGroup, car360View: checked }); pushParameterToUrl({ ...currentFilterGroup, car360View: checked }, { ...mainConfig, page: 1 }) }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={0} sm={0} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }} style={{ float: 'right' }}>
                                            <Radio.Group onChange={(e) => { setView(e.target.value) }} value={view} className="wrap-gridView-btn" style={{ float: 'right', marginRight: '10px' }}>
                                                <Tooltip title="List View"><Radio.Button value="listView"><BarsOutlined style={{ fontSize: '16px' }} /> </Radio.Button></Tooltip>
                                                <Tooltip title="Grid View"><Radio.Button value="gridView"><AppstoreOutlined style={{ fontSize: '16px' }} /> </Radio.Button></Tooltip>
                                            </Radio.Group>
                                        </Col>
                                    </Row> */}

                                    <Row style={{ marginBottom: '10px', marginTop:'10px' }} >
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="background-white margin-bottom-xl">
                                            <Row>
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <div className="d-flex scroller-type"   >
                                                        {_renderGridViewRes(notEmptyLength(productList) ? productList : [])}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col style={{ textAlign: 'center' }} xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Pagination defaultCurrent={1} current={mainConfig.page} pageSize={PAGESIZE} total={total} onChange={(page) => { pushParameterToUrl(currentFilterGroup, { ...mainConfig, page: page }) }} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Spin>
                    </div>
            </div>
        </LayoutV2>
    )
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});


const mapDispatchToProps = {
    loading: loading,
    setProductListLoading: setProductListLoading,
    updateActiveMenu: updateActiveMenu,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarMarketPage))