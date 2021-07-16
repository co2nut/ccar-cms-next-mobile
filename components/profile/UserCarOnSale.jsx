import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Empty, Form, Icon, message, Pagination, Radio, Row, Select, Switch, Tooltip } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import client from '../../feathers';
import { getCarBrand } from '../../params/carBrandsList';
import {
    filterBodyTypes, filterCarBrandMode, filterCarBrands, filterCarModelMode, filterCarModels, filterCarSearchKeywords, filterColors,
    filterDrivenWheels,
    filterFuelTypes,
    filterStates, loading,
    quickSearchProductsList,
    setApplyMileage, setApplyPrice, setApplyYear, updateActiveMenu
} from '../../redux/actions/app-actions';
import { convertParameterToProductListUrl, formatNumber, notEmptyLength, objectRemoveEmptyValue } from '../../common-function';
import GridProductList from '../product-list/grid-product-list';
import ProductList from '../product-list/ProductList';
import { fetchProductsList, updateActiveIdProductList  } from '../../redux/actions/productsList-actions';
import { withRouter } from 'next/router';

const PAGESIZE = 30;
const adsverImg = '/buy-car-ads.png'

const filterTypes = ['make', 'model'];

const UserCarOnSale = (props) => {

    const [moreOptionModalVisible, setMoreOptionModalVisible] = useState(false)
    const [profile, setProfile] = useState({});
    const [productLoading, setProductLoading] = useState(false)
    const [view, setView] = useState('gridView')
    const [productList, setProductList] = useState([])
    const [filterGroup, setFilterGroup] = useState({})
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [mainConfig, setMainConfig] = useState({
        sorting: {},
        page: 1,
    })
    const [total, setTotal] = useState(0)
    const [availableFilterOptions, setAvailableFilterOptions] = useState({});



    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }
    }, [props.data])


    useEffect(() => {

    }, [availableFilterOptions])

    // useEffect(() => {

    //     // Bind the event listener
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [isDropDownOpen])

    useEffect(() => {
        if (_.isPlainObject(profile) && !_.isEmpty(profile)) {
            if (_.get(mainConfig, ['page']) == 1) {
                getData();
                getAvailableOptions();
            } else {
                setMainConfig({ ...mainConfig, page: 1 })
            }
        } else {
            setProductList([]);
        }
    }, [filterGroup, profile])

    useEffect(() => {
        getData();
    }, [mainConfig])

    function scrollToCarOnSale() {
        var elmnt = document.getElementById("user-car-on-sale-container");
        var offset = -100;
        var elementPosition = _.get(elmnt.getBoundingClientRect(), ['top']) || 0;
        var offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    function pushParameterToUrl(data, config) {

        let path = convertParameterToProductListUrl(data, config)
        if (path != `${props.location.pathname}${props.location.search}`) {
            props.loading(true);
            props.router.replace(path)
        }

    }

    // function handleClickOutside(event) {

    //     if ((!containerRef.current || !containerRef.current.contains(event.target))) {
    //         setMoreOptionModalVisible(false)
    //     }
    // }

    function getData() {
        //     let query = queryString.parse(props.location.search);
        //   if (!query) {
        //     query = {};
        //   }
        //     let sorting = query.sorting ? JSON.parse(query.sorting) : { createdAt: -1 };
        //     let config = {
        //         page: query.page,
        //         view: query.view,
        //         sorting: sorting
        //       }
        if (_.get(profile, ['_id'])) {
            let sorting = _.cloneDeep(objectRemoveEmptyValue(mainConfig.sorting));
            if (_.isPlainObject(_.pick(sorting, ['searchPrice', 'mileageFilter', 'carspec.year'])) && !_.isEmpty(_.pick(sorting, ['searchPrice', 'mileageFilter', 'carspec.year']))) {
            } else {
                sorting = {}
            }
            props.loading(true);
            let match = { $match: { ...objectRemoveEmptyValue(filterGroup), 'createdBy': _.get(profile, ['_id']) } }
            axios.get(`${client.io.io.uri}carAdsFilterV3`,
                {
                    params: {
                        match,
                        sorting: sorting,
                        limit: PAGESIZE,
                        skip: (mainConfig.page - 1) * PAGESIZE,
                    }
                }
            ).then((res) => {
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
                    message.error(err.message);
                })
        }

        // if (!filterGroup.state) {
        //      setMainConfig(config);
        //     return null;
        //   }

    }

    function getAvailableOptions() {
        if (_.get(profile, ['_id'])) {
            let promises = [];
            let match = { $match: { ...objectRemoveEmptyValue(filterGroup), 'createdBy': _.get(profile, ['_id']) } }
            _.forEach(filterTypes, function (filterType) {
                promises.push(
                    axios.get(`${client.io.io.uri}brandFilterTotalV3`, {
                        params: { filterType: filterType, match },
                        headers: { 'Authorization': client.settings.storage.storage.storage['feathers-jwt'] }
                    })
                )
            })

            Promise.all(promises).then((responses) => {
                if (_.isArray(responses) && !_.isEmpty((responses))) {
                    let options = {}
                    _.forEach(responses, function (response, index) {
                        options[`${filterTypes[index]}List`] = response.data.uniqueInfo[`${filterTypes[index]}List`];
                    })


                    setAvailableFilterOptions(options)
                }
            }).catch((err) => {
                // message.error(err.message);
            })
        }

    }

    const _renderGridView = () => {
        return (
            <ProductList data={productList} />
        )
    }

    const _renderCarOnSale = () => {
        return (
            <div style={{ minHeight: 800 }}>
                <span className="flex-items-align-center flex-justify-space-around">
                    <span className='flex-justify-center flex-items-align-center margin-x-xs'>
                        <span style={{fontSize:'12px'}} className='d-inline-block '>
                            360&deg; View:
                        </span>
                        <span className="d-inline-block margin-left-xs">
                            <Switch checked={filterGroup.car360View} onChange={(checked) => { scrollToCarOnSale(); setFilterGroup({ ...filterGroup, car360View: checked }) }} />
                        </span>
                    </span>

                    <span className='flex-justify-center flex-items-align-center margin-x-xs'>
                        <span style={{fontSize:'12px'}} className="d-inline-block">
                            Ready Stock: 
                        </span>
                        <span className="d-inline-block margin-left-xs">
                            <Switch checked={filterGroup.readyStock} onChange={(checked) => { props.loading(true); setFilterGroup({ ...filterGroup, readyStock: checked ? 'yes' : null }); }} />
                        </span>
                    </span>

                    <span className='flex-justify-center flex-items-align-center margin-x-xs'>
                        <span style={{fontSize:'12px'}} className="d-inline-block">
                            Reg Card:
                        </span>
                        <span className="margin-left-xs"> 
                            <Switch checked={filterGroup.registrationUrl} onChange={(checked) => { scrollToCarOnSale(); setFilterGroup({ ...filterGroup, registrationUrl: checked }) }} />
                        </span>
                    </span>
                </span>

                <span className="flex-items-align-center flex-justify-space-around margin-top-sm margin-x-xs">
                    <span className='flex-justify-center flex-items-align-center margin-x-xs'>
                        <Select allowClear value={_.get(filterGroup, ['make'])}
                            style={{ width: 120 }}
                            dropdownMatchSelectWidth={false} placeholder="Brand"
                            className="padding-right-sm"
                            onChange={(value) => {
                                setFilterGroup({ ...filterGroup, make: _.toLower(value) || undefined, model: undefined })
                                }}
                            >
                            {
                                _.map(_.isArray(_.get(availableFilterOptions, ['makeList'])) && !_.isEmpty(_.get(availableFilterOptions, ['makeList'])) ? _.sortBy(_.get(availableFilterOptions, ['makeList']), 'value') : [], function (item) {
                                    return (
                                        <Select.Option value={_.get(item, ['value'])} className="capitalize">
                                            {_.get(getCarBrand(_.get(item, ['value'])), ['value']) || _.get(item, ['value']) || ''} ({formatNumber(_.get(item, ['count']), 'auto', true, 0, true) || 0})
                                        </Select.Option>
                                        )
                                    })
                                }
                        </Select>
                    </span>

                    <span className='flex-justify-center flex-items-align-center margin-x-xs'>
                        <Select allowClear value={_.get(filterGroup, ['model'])}
                            style={{ width: 120 }}
                            dropdownMatchSelectWidth={false} placeholder="Model"
                            className="padding-right-sm"
                            onChange={(value) => {
                                setFilterGroup({ ...filterGroup, model: _.toLower(value) || undefined })
                            }}
                            disabled={!filterGroup.make}
                            >
                            {
                                _.map(_.isArray(_.get(availableFilterOptions, ['modelList'])) && !_.isEmpty(_.get(availableFilterOptions, ['modelList'])) ? _.sortBy(_.get(availableFilterOptions, ['modelList']), 'value') : [], function (item) {
                                    return (
                                        <Select.Option value={_.get(item, ['value'])} className="capitalize">
                                            {_.get(item, ['value']) || ''} ({formatNumber(_.get(item, ['count']), 'auto', true, 0, true) || 0})
                                        </Select.Option>
                                        )
                                    })
                                }
                        </Select>
                    </span>

                    <span className='flex-justify-center flex-items-align-center margin-x-xs'>
                    <Select defaultValue="" style={{ width: 120 }}
                                dropdownMatchSelectWidth={false}
                                dropdownStyle={{alignContent:'left'}}
                                onChange={(e) => {
                                    let sorting = {};
                                    let str = e.split(':') || [];
                                    sorting[str[0]] = parseInt(str[1]);
                                    setMainConfig({ ...mainConfig, sorting: sorting, page: 1 })
                                }}
                                value={
                                    _.isPlainObject(mainConfig.sorting) && !_.isEmpty(objectRemoveEmptyValue(mainConfig.sorting)) ?
                                        `${_.get(Object.entries(mainConfig.sorting), [0, 0])}:${mainConfig.sorting[_.get(Object.entries(mainConfig.sorting), [0, 0])]}`
                                        :
                                        ''}
                            >
                                <Select.Option value="">Best Value</Select.Option>
                                <Select.Option value="searchPrice:1">Price (Low to High)</Select.Option>
                                <Select.Option value="searchPrice:-1">Price (High to Low)</Select.Option>
                                <Select.Option value="carspec.year:-1">Year (New to Old)</Select.Option>
                                <Select.Option value="carspec.year:1">Year (Old to New)</Select.Option>
                                <Select.Option value="mileageFilter:1">Mileage (Low to High)</Select.Option>
                                <Select.Option value="mileageFilter:-1">Mileage (High to Low)</Select.Option>
                            </Select>
                    </span>
                </span>

                <Col span={24} className="margin-top-lg">
                    <Row gutter={[10, 10]}>
                            {_renderGridView()}
                    </Row>
                </Col>
            </div>
        )
    }

    return (
        <Row type="flex" align="start" justify="center" gutter={[20, 10]}>
            <Col xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24 }} md={{ order: 1, span: 24 }} lg={{ order: 1, span: 24 }} xl={{ order: 1, span: 24 }} >
                <div id="user-car-on-sale-container" style={{ minHeight: "1000px", padding: '0px' }}>
                    {_renderCarOnSale()}
                </div>
                <Row gutter={[10, 10]}>
                    <Col className="margin-md" style={{ textAlign: 'center' }} span={24}>
                        <Pagination current={mainConfig.page} defaultCurrent={1} pageSize={PAGESIZE} onChange={(page) => { scrollToCarOnSale(); setMainConfig({ ...mainConfig, page: page }) }} total={total} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


const mapStateToProps = state => ({
    sellCars: state.sellCars,
    productsList: state.productsList,
    app: state.app,
    user: state.user,
    sellerProfile: state.sellerProfile,
});

const mapDispatchToProps = {
    loading: loading,
    updateActiveMenu: updateActiveMenu,
    fetchProductsList: fetchProductsList,
    updateActiveIdProductList: updateActiveIdProductList,
    filterCarBrandMode: filterCarBrandMode,
    filterCarModelMode: filterCarModelMode,
    filterCarSearchKeywords: filterCarSearchKeywords,
    quickSearchProductsList: quickSearchProductsList,
    setApplyYear: setApplyYear,
    setApplyPrice: setApplyPrice,
    setApplyMileage: setApplyMileage,

    filterCarBrands: filterCarBrands,
    filterCarModels: filterCarModels,
    filterColors: filterColors,
    filterBodyTypes: filterBodyTypes,
    filterDrivenWheels: filterDrivenWheels,
    filterFuelTypes: filterFuelTypes,
    filterStates: filterStates
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(UserCarOnSale)));