import { Button, Col, Collapse, Divider, Empty, Form, Icon, Menu, Pagination, Radio, Row, Spin, Tag } from 'antd'
import axios from 'axios'
import _ from 'lodash'
import { withRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import brandFilterTotal from '../../../api/brandFilterTotal'
import carAdsFilter from '../../../api/carAdsFilter'
import { convertParameterToProductListUrl, convertProductRouteParamsToFilterObject, convertRangeFormatToText, formatNumber, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function'
import LayoutV2 from '../../../components/general/LayoutV2'
import ProductList from '../../../components/product-list/ProductList'
import client from '../../../feathers'
import { getCarBrand } from '../../../params/carBrandsList'
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions'
import { setProductListLoading } from '../../../redux/actions/productsList-actions'
import ProductListSkeletonList from '../../skeleton-loader/ProductListSkeletonList'
import CarMarketBrandFiltering from '../CarMarketBrandFiltering'
import DetailFilteringForm from '../DetailFilteringForm'
import PriceRangeFiltering from '../PriceRangeFiltering'
import StateFiltering from '../StateFiltering'
import YearRangeFilter from '../YearRangeFilter'

const priceRangeOptions = [[50000, '<='], [50000, 100000], [100000, 200000], [200000, 400000], [400000, 600000], [600000, 800000], [800000, 1000000], [1000000, '>='],];
const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const modals = ['make', 'model', 'state', 'area', 'bodyType', 'color', 'fuelType'];
const antIcon = <img src="/assets/Ccar-logo.png" style={{ fontSize: 60 }} />;
const PAGESIZE = 30;
const searchBarRef = React.createRef();
let timeoutFunction;

const SWITCH_OFF_COLOR = '#9E9E9E';
const SWITCH_ON_COLOR = '#FFCC32';

const CarMarketPage = (props) => {

    const [mainConfig, setMainConfig] = useState({
        page: 1,
        sorting: {},
        view: 'gridView',
    })
    const [view, setView] = useState('gridView')
    //Filter Group will trigger API
    const [currentFilterGroup, setCurrentFilterGroup] = useState({})
    //Filter Group wont trigger API
    const [availableFilterOption, setAvailableFilterOption] = useState({})
    const [total, setTotal] = useState(0)
    const [productList, setProductList] = useState([])
    const [spinning, setSpinning] = useState(false)
    const [isEmptyData, setIsEmptyData] = useState(false);
    const [visible, setVisible] = useState()
    const [startWatching, setStartWatching] = useState(false)
    const [productLoading, setProductLoading] = useState(true);
    const [origAvailableFilterOption, setOrigAvailableFilterOption] = useState({});
    const [expandKey, setExpandKey] = useState();

    useEffect(() => {
        props.updateActiveMenu('2');
        getOrigAvailableOptions();
    }, [])

    useEffect(() => {
        getUrlData();
    }, [props.router.query])


    // useEffect(() => {

    //     setFilterGroupValues(currentFilterGroup);

    //     if (startWatching) {
    //         console.log('here', currentFilterGroup);
    //         if (window) {
    //             window.scroll(0, 0)
    //         }
    //         clearTimeout(timeoutFunction);
    //         timeoutFunction = setTimeout(() => {
    //             carAdsFilter({
    //                 filterGroup: currentFilterGroup,
    //                 config: mainConfig
    //             }, PAGESIZE).then(res => {
    //                 setProductList(_.get(res, ['data']) || []);
    //                 setTotal(_.get(res, ['total']) || 0);

    //             }).catch(err => {
    //             });
    //             brandFilterTotal(modals, {
    //                 filterGroup: currentFilterGroup,
    //                 config: mainConfig
    //             }).then(res => {
    //                 setAvailableFilterOption(res);
    //             }).catch(err => {
    //             });
    //         }, 500);
    //     }
    // }, [currentFilterGroup, mainConfig, startWatching])

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

        setCurrentFilterGroup(data);
        setMainConfig(config);
        setProductLoading(true);
        try {
            let path = convertParameterToProductListUrl(data, config)
            let asPath = path.split('?')[0].split('/');
            let parameter = _.get(path.split('?'), '[1]') || '';
            asPath = _.map(asPath, function (item, i) {
                if (i > 1) {
                    item = `[parameter${i - 1}]`
                }
                return item;
            })
            asPath = `${asPath.join('/')}${parameter ? `?${parameter}` : ''}`

            setProductList([]);
            props.router.push(asPath, path, { shallow: true })
        } catch (error) {

        }

    }

    function getUrlData() {
        try {
            setProductLoading(true);
            let query = props.router.query;
            if (!query) {
                query = {};
            }

            let extraFilterGroup = query.data ? JSON.parse(query.data) : {};
            query = {
                ...query,
                ...extraFilterGroup,
            }
            delete query.data;
            console.log(query);
            let routeParams = convertProductRouteParamsToFilterObject(query);
            console.log(routeParams);
            //Condition is not params, is static path
            if (_.isPlainObject(routeParams) && !_.isEmpty(routeParams)) {
                routeParams.filterGroup = routeParams.filterGroup || {};
                routeParams.filterGroup.condition = props.router.pathname.split('/')[1];
                routeParams.filterGroup.condition = _.toLower(routeParams.filterGroup.condition.replace('cars-on-sale', '').split('-')[0] || '');
            }

            setMainConfig(_.get(routeParams, `config`) || { page: 1, sorting: {}, view: 'gridView' });

            setCurrentFilterGroup({
                ...currentFilterGroup,
                ...(_.get(routeParams, `filterGroup`) || {}),
            });

            setTimeout(() => {
                setStartWatching(true);
            }, 500);

            carAdsFilter({
                filterGroup: routeParams.filterGroup,
                config: routeParams.config
            }, PAGESIZE).then(res => {
                setProductLoading(false);
                setProductList(_.get(res, ['data']) || []);
                setTotal(_.get(res, ['total']) || 0);

            }).catch(err => {
                setProductLoading(false);
            });
            // brandFilterTotal(modals, {
            //     filterGroup: routeParams.filterGroup,
            //     config: routeParams.config
            // }).then(res => {
            //     setAvailableFilterOption(res);
            // }).catch(err => {
            // });

        } catch (error) {
            console.log('error', error);
        }
    }


    async function getOrigAvailableOptions(match) {
        brandFilterTotal(modals).then(res => {
            setOrigAvailableFilterOption(res)
        }).catch(err => {
        });
    }

    const _renderFilterTags = (filterGroup) => {
        try {
            const showTags = ['make', 'model', 'state', 'area', 'condition', 'yearRange', 'priceRange', 'mileageRange', 'transmission', 'color', 'bodyType', 'fuelType', 'engineCapacityRange'];
            if (_.isPlainObject(filterGroup) && !_.isEmpty(filterGroup)) {
                filterGroup = _.pick(objectRemoveEmptyValue(filterGroup), showTags);
                if (filterGroup.yearRange) {
                    filterGroup.yearRange = convertRangeFormatToText(filterGroup.yearRange);
                }
                if (filterGroup.priceRange) {
                    filterGroup.priceRange = convertRangeFormatToText(filterGroup.priceRange, 'price');
                }
                if (filterGroup.mileageRange) {
                    filterGroup.mileageRange = convertRangeFormatToText(filterGroup.mileageRange, 'mileage');
                }
                if (filterGroup.engineCapacityRange) {
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

        return (
            productLoading ?
                <div className="width-100">
                    <ProductListSkeletonList />
                </div>
                :
                _.isArray(data) && !_.isEmpty(data) ?
                    <ProductList data={data} />
                    :
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


    const menu = (
        <Menu>
            <Menu.Item>
                <CarMarketBrandFiltering
                    options={_.get(origAvailableFilterOption, `makeList`)}
                    onSelect={(brand, model) => {
                        if (_.get(brand, ['value'])) {
                            setExpandKey(null)
                            setCurrentFilterGroup({
                                ...currentFilterGroup,
                                make: _.toLower(brand.value),
                                model: _.toLower(_.get(model, `model`))
                            })
                            pushParameterToUrl({ ...currentFilterGroup, make: _.toLower(brand.value), model: _.toLower(_.get(model, `model`)) }, mainConfig)
                        }
                    }}
                />
            </Menu.Item>
        </Menu>
    );

    const state = (
        <Menu>
            <Menu.Item>
                <StateFiltering
                    options={_.reverse(_.sortBy(_.get(origAvailableFilterOption, `stateList`), 'count'))}
                    onSelect={(state, area) => {
                        if (_.get(state, ['value'])) {
                            setExpandKey(null)
                            setCurrentFilterGroup({
                                ...currentFilterGroup,
                                state: _.toLower(state.value),
                                area: _.toLower(_.get(area, `value`) || ''),
                            })
                            pushParameterToUrl({ ...currentFilterGroup, state: _.toLower(state.value), area: _.toLower(_.get(area, `value`) || ''), }, mainConfig)
                        }
                    }}
                />
            </Menu.Item>
        </Menu>
    )

    const year = (
        <Menu>
            <Menu.Item style={{ width: '' }}>
                <YearRangeFilter onChange={(data) => {
                    if (_.isPlainObject(data) && !_.isEmpty(data)) {
                        setExpandKey(null)
                        setCurrentFilterGroup({
                            ...currentFilterGroup,
                            ...data
                        })
                        pushParameterToUrl({ ...currentFilterGroup, ...data }, mainConfig)
                    }
                }} />
            </Menu.Item>
        </Menu>
    )

    const price = (
        <Menu>
            <Menu.Item>
                <Row>
                    {/* <div className="d-flex scroller-type margin-x-sm" style={{ overflow: 'scroll' }}> */}
                    {
                        _.map(priceRangeOptions, function (priceRange) {
                            return (
                                <Col span={8} style={{ marginBottom: '10px' }}>
                                    <Button className="margin-x-sm small-text width-90" onClick={(e) => {
                                        setExpandKey(null)
                                        pushParameterToUrl({ ...currentFilterGroup,  priceRange: priceRange }, { page: 1 })
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
                {/* <PriceRangeFiltering /> */}
            </Menu.Item>
        </Menu>
    )

    const detail = (
        <Menu>
            <Menu.Item>
                <DetailFilteringForm options={origAvailableFilterOption} onChange={(data) => {
                    if (_.isPlainObject(data) && !_.isEmpty(data)) {
                        setCurrentFilterGroup({
                            ...currentFilterGroup,
                            ...data
                        })
                        pushParameterToUrl({ ...currentFilterGroup, ...data }, mainConfig)
                    }
                }} />
            </Menu.Item>
        </Menu>
    )

    const condition = (
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
        const compA = (searchTypeObj) => { return <div style={{ width: '20px', height: '20px', float: 'right', backgroundColor: '#000000' }} className="cursor-pointer thin-border round-border" onClick={(e) => { pushParameterToUrl(currentFilterGroup, {...mainConfig, sorting: { ...searchTypeObj }, page: 1 }) }} /> }
        const compB = (searchTypeObj) => { return <div style={{ width: '20px', height: '20px', float: 'right' }} className="cursor-pointer thin-border round-border" onClick={(e) => { pushParameterToUrl(currentFilterGroup, {...mainConfig, sorting: { ...searchTypeObj }, page: 1 }) }} /> }

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


    const _renderDrawer = (data) => {
        switch (drawerType) {
            case 'brand':
                return menu;
                break;
            case 'state':
                return state;
            case 'year':
                return year;
            case 'price':
                return price;
            case 'detail':
                return detail;
            case 'condition':
                return condition;
            default:
                return menu;
                break;
        }

    }
    return (
        <LayoutV2>
            <div className="section-version3">
                <div className='container-version3 padding-x-sm' style={{ touchAction: 'pan-y' }}>
                    <Spin indicator={antIcon} spinning={spinning} indicator={
                        <img src="/loading.gif" style={{ width: 100, height: 100, position: 'sticky', position: '-webkit-sticky', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto' }} />
                    }>
                        <Row gutter={[{ xs: 8, sm: 8, md: 15, lg: 15, xl: 15 }, 16]}>
                            <Col className="gutter-row" xs={24} sm={24} md={24} lg={18} xl={18}>

                                <Row className="margin-bottom-md">
                                    <Col span={20}>
                                        <span style={{ fontSize: '16px' }}>{total} </span>
                                        <span style={{ fontSize: '16px' }}>Cars for Sale</span>
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
                                                    {menu}
                                                </div>
                                            </Collapse.Panel>
                                            <Collapse.Panel key="2" showArrow={false} collapsible={true}>
                                                <div className="width-100" >
                                                    {state}
                                                </div>
                                            </Collapse.Panel>
                                            <Collapse.Panel key="3" showArrow={false} collapsible={true}>
                                                <div className="width-100" >
                                                    {/* {yearView} */}
                                                </div>
                                            </Collapse.Panel>
                                            <Collapse.Panel key="4" showArrow={false} collapsible={true}>
                                                <div className="width-100" >
                                                    {price}
                                                </div>
                                            </Collapse.Panel>
                                            <Collapse.Panel key="6" showArrow={false} collapsible={true}>
                                                <div className="width-100" >
                                                    {condition}
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
                                            {detail}
                                        </div>
                                    </Collapse.Panel>
                                </Collapse>

                                <Row style={{ marginBottom: '10px', marginTop: '10px' }} >
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