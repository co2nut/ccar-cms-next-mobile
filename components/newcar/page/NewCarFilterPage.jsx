import { Affix, Divider, Button, Col, Empty, message, Pagination, Radio, Row, Select, Switch, Table, Tooltip, Icon, Collapse, Tag } from 'antd';
import axios from 'axios';
import _, { isArray } from 'lodash';
import Link from 'next/link';
import { withRouter } from 'next/router';
import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { convertRangeFormatToText, formatNumber, getObjectId, isValidNumber, notEmptyLength, numberToFixed, objectRemoveEmptyValue, queryStringifyNestedObject, windowScroll } from '../../../common-function';
import client from '../../../feathers';
import { carBrandsList } from '../../../params/carBrandsList';
import { bodyTypeOri } from '../../../params/bodyTypeOri';
import { fuelTypeList } from '../../../params/fuelTypeList';
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions';
import { fetchNewCarFilterGroup, fetchPopular, fetchPrice, resetNewCarFilterGroup } from '../../../redux/actions/newcars-actions';
import { routePaths } from '../../../route';
import LayoutV2 from '../../general/LayoutV2';
import BrandFiltering from '../BrandFiltering';
import Scrollbars from 'react-custom-scrollbars';
import MakeModal from '../../product-list/filter-modal/MakeModal';
import InfiniteScrollWrapper from '../../general/InfiniteScrollWrapper';

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

const PAGESIZE = 12

const ARRAY_SEPERATOR = '|'

const priceRangeOptions = [[50000, '<'], [50000, 100000], [100000, 200000], [200000, 400000], [400000, 600000], [600000, 800000], [800000, 1000000], [1000000, '>='],
];

const monthlyPaymentOptions = [[0, 500], [500, 1000], [1000, 1500], [1500, 2000], [2000, 2500], [2500, 3000], [3000, 3500], [3500, '>='],
]

const engineCapacityOptions = [[1, '<'], [1, 1.6], [1.6, 2.2], [2.2, 2.6], [2.6, 3.0], [3.0, 4.0], [4.0, '>='],
]

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availabeCarBrands: [],
            filterCarBrands: [],
            expand: true,
            showIcon: false,
            carspecs: [],
            fees: '',
            payment: '',
            filterPrice: [],
            filterPayment: [],
            filterEngineCapacity: [],
            filterGroup: {
                make: '',
                bodyType: '',
                transmission: '',
                drivenwheel: '',
                seatCapacity: '',
                fuelType: '',
                exterior: '',
                interior: '',
                safety: '',
                priceRange: [],
                monthlyPaymentRange: [],
                engineCapacityRange: [],
            },
            sorting: '',
            page: 1,
            total: 0,
            visible: false,
            expandKey: '',
            expandVariantKey: '',
            carspecLoading: true,
        };
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

    UNSAFE_componentWillMount() {

        this.props.updateActiveMenu('3');
        this.props.loading(true)
        axios.get(`${client.io.io.uri}getPriceRangeSearchCarBrands`, {
            params: {
                newCar: 'yes',
            }
        }).then((res) => {
            this.props.loading(false);
            this.setState({ availabeCarBrands: notEmptyLength(res.data.data) ? res.data.data : [] });
        }).catch(err => {
            this.props.loading(false);
            message.error(err.message)
        });
    }

    componentDidMount() {
        this.updateFilterGroupFromUrl();
    }

    componentDidUpdate(prevProps, prevState) {

        if (!_.isEqual(prevState.availabeCarBrands, this.state.availabeCarBrands)) {

            if (notEmptyLength(this.state.availabeCarBrands)) {
                let selectedCarBrands = _.cloneDeep(this.state.availabeCarBrands);
                let data = _.filter(carBrandsList, function (brand) {
                    return _.some(selectedCarBrands, function (item) {
                        return _.toLower(item.make) == _.toLower(brand.value);
                    })
                })
                if (notEmptyLength(data)) {

                    this.setState({
                        filterCarBrands: data,
                    })
                } else {
                    this.setState({
                        filterCarBrands: [],
                    })
                }
            } else {
                this.setState({
                    filterCarBrands: [],
                })
            }
        }

        if (prevState.page != this.state.page) {
            this.pushParameterToUrl();
        }

        if (prevState.sorting != this.state.sorting) {
            this.pushParameterToUrl();
        }

        if (!_.isEqual(prevState.filterGroup, this.state.filterGroup)) {
            console.log('filterGroupChange');
            this.pushParameterToUrl();
        }

        if (!_.isEqual(prevProps.router.query, this.props.router.query)) {
            console.log(this.props.router.query);
            this.getDataFromUrl();
            this.updateFilterGroupFromUrl();
        }
    }

    updateFilterGroupFromUrl() {

        let filterGroup = {};
        try {
            filterGroup = JSON.parse(_.get(this.props, ['router', 'query', 'data'])) || {};
        } catch (error) {

        }
        if (_.isPlainObject(filterGroup) && !_.isEmpty(filterGroup)) {
            let page = filterGroup.page || 1;;
            let sorting = filterGroup.sorting || '';
            delete filterGroup.page;
            delete filterGroup.sorting;
            this.setState({
                filterGroup: {
                    ...this.state.filterGroup,
                    ...filterGroup
                },
                page: page,
                sorting: sorting,
            })
        } else {
            this.resetSearch();
        }


    }

    pushParameterToUrl() {
        windowScroll(0, 0);
        let mergeObj = {
            page: this.state.page,
            sorting: this.state.sorting
        }
        let path = '/newcar/filter';
        let asPath = path;
        if (_.isObject(this.state.filterGroup) && !_.isEmpty(objectRemoveEmptyValue(this.state.filterGroup))) {

            mergeObj = { ...mergeObj, ..._.cloneDeep(this.state.filterGroup) };
            mergeObj = _.pickBy(mergeObj, function (property) {
                return isArray(property) ? notEmptyLength(property) : property;
            });
        }

        if (_.isPlainObject(mergeObj) && !_.isEmpty(mergeObj)) {
            asPath += `?${queryStringifyNestedObject(mergeObj)}`;
        }
        this.setState({
            expandKey: null,
        })
        this.props.router.push(asPath, asPath, { shallow: true });
    }

    getDataFromUrl() {
        let filterGroup = {};
        try {
            filterGroup = JSON.parse(_.get(this.props, ['router', 'query', 'data'])) || {};
        } catch (error) {

        }
        let page = 1;
        let sorting = '';
        let andFilter = { $and: [] }
        if (isValidNumber(parseInt(filterGroup.page))) {
            page = parseInt(filterGroup.page);
            delete filterGroup.page;
        }
        if (filterGroup.sorting != null) {
            sorting = filterGroup.sorting;
            delete filterGroup.sorting;
        }

        if (filterGroup.seatCapacity) {
            if (filterGroup.seatCapacity === 'more7') {
                delete filterGroup.seatCapacity
                filterGroup.seatCapacity = { $gte: 7 }
            }
            else {
                filterGroup.seatCapacity = parseInt(filterGroup.seatCapacity)
            }
        }


        if (notEmptyLength(filterGroup.priceRange)) {
            filterGroup.priceRange = this.convertFilterRange(filterGroup.priceRange, 'price');
            if (notEmptyLength(filterGroup.priceRange)) {
                andFilter.$and = [...andFilter.$and, ...filterGroup.priceRange]
                filterGroup = Object.assign(filterGroup, andFilter)
            }
            delete filterGroup.priceRange;
        }

        if (notEmptyLength(filterGroup.monthlyPaymentRange)) {
            filterGroup.monthlyPaymentRange = this.convertFilterRange(filterGroup.monthlyPaymentRange, 'monthlyPayment');
            if (notEmptyLength(filterGroup.monthlyPaymentRange)) {
                andFilter.$and = [...andFilter.$and, ...filterGroup.monthlyPaymentRange]
                filterGroup = Object.assign(filterGroup, andFilter)
            }
            delete filterGroup.monthlyPaymentRange;
        }

        if (notEmptyLength(filterGroup.engineCapacityRange)) {
            filterGroup.engineCapacityRange = this.convertFilterRange(filterGroup.engineCapacityRange, 'engineCapacity');
            if (notEmptyLength(filterGroup.engineCapacityRange)) {
                andFilter.$and = [...andFilter.$and, ...filterGroup.engineCapacityRange]
                filterGroup = Object.assign(filterGroup, andFilter)
            }
            delete filterGroup.engineCapacityRange;
        }

        this.props.loading(true)

        console.log(filterGroup);
        axios.get(`${client.io.io.uri}priceRangeSearchNew`,
            {
                params: {
                    match: filterGroup,
                    newCar: 'yes',
                    sorting: sorting,
                    limit: PAGESIZE,
                    skip: (page - 1) * PAGESIZE,
                }
            }
        ).then((res) => {
            console.log(res);
            this.props.loading(false);
            if (notEmptyLength(res.data.data)) {
                this.setState({
                    carspecs: res.data.data,
                    total: res.data.total
                })
            } else {
                this.setState({
                    carspecs: [],
                    total: 0
                })
            }
        })
            .catch((err) => {
                this.props.loading(false);
                console.log(err)
                message.error(err.message);
            })

    }


    onChangeSortBy = (e) => {
        this.setState({ sorting: e })
    }

    convertFilterRange(value, name) {

        if (notEmptyLength(value) && name) {
            let parameter1 = parseFloat(value[0]);
            let parameter2 = value[1];
            let finalData = [];
            let query = {};

            if (!isValidNumber(parameter1)) {
                return null;
            }

            if (parameter2 != null && parameter2 != '<=') {

                switch (parameter2) {
                    case '<=':
                        query[`${name}`] = { $lte: +(parameter1) }
                        finalData.push(query);
                        break;
                    case '<':
                        query[`${name}`] = { $lt: +(parameter1) }
                        finalData.push(query);
                        break;
                    case '==':
                        query[`${name}`] = { $eq: +(parameter1) }
                        finalData.push(query);
                        break;
                    case '>':
                        query[`${name}`] = { $gt: +(parameter1) }
                        finalData.push(query);
                        break;
                    case '>=':
                        query[`${name}`] = { $gte: +(parameter1) }
                        finalData.push(query);
                        break;
                    default:
                        parameter2 = parseFloat(parameter2);
                        if (!isValidNumber(parameter2)) {
                            query[`${name}`] = { $eq: +(parameter1) }
                            finalData.push(query);
                        } else {
                            query[`${name}`] = { $gte: +(parameter1) }
                            finalData.push(query);

                            let query1 = {};
                            query1[`${name}`] = { $lte: +(parameter2) }
                            finalData.push(query1);
                        }
                        break;
                }

            } else {
                query[`${name}`] = { $eq: +(parameter1) }
                finalData.push(query);
            }
            return finalData;
        } else {
            return null;
        }
    }


    resetSearch = () => {
        this.setState({
            filterGroup: {
                make: '',
                bodyType: '',
                transmission: '',
                drivenwheel: '',
                seatCapacity: '',
                fuelType: '',
                exterior: '',
                interior: '',
                safety: '',
                priceRange: [],
                monthlyPaymentRange: [],
                engineCapacityRange: [],
            },
            page: 1,
        }, () => {
            this.getDataFromUrl();
        });

    }

    _renderFilterTags = (filterGroup) => {
        try {
            let self = this;
            const showTags = ['make', 'model', 'state', 'condition', 'yearRange', 'priceRange', 'mileageRange', 'transmission', 'color', 'bodyType', 'fuelType', 'engineCapacityRange'];
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
                                            let cloneFilterGroup = _.cloneDeep(self.state.filterGroup) || {};
                                            delete cloneFilterGroup[item[0]];
                                            self.setState({
                                                filterGroup: {
                                                    ...cloneFilterGroup,
                                                    page: 1,
                                                }
                                            })
                                        }} color="orange">{item[1] || 'N/A'} </Tag>
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

    sortingView() {
        return (
            <div className="width-100" >
                <div className="margin-top-sm">
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ fontWeight: '700' }}>Sort</p>
                    </div>
                    <Row>
                        <Col span={20}><p>Price: Low to High</p></Col>
                        <Col span={4} style={{ textAlign: 'right' }}>
                            <div style={{ width: '20px', height: '20px', float: 'right' }}
                                className={`${this.state.sorting == 'price:1' ? 'background-black' : 'background-white'} cursor-pointer thin-border round-border`}
                                onClick={(e) => {
                                    this.setState({
                                        sorting: 'price:1',
                                    })
                                }}
                            > </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20}><p>Price: High to Low</p></Col>
                        <Col span={4}>
                            <div style={{ width: '20px', height: '20px', float: 'right' }}
                                className={`${this.state.sorting == 'price:-1' ? 'background-black' : 'background-white'} cursor-pointer thin-border round-border`}
                                onClick={(e) => {
                                    this.setState({
                                        sorting: 'price:-1',
                                    })
                                }}
                            > </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={20}><p> Year: Old to New </p></Col>
                        <Col span={4}>
                            <div style={{ width: '20px', height: '20px', float: 'right' }}
                                className={`${this.state.sorting == 'year:1' ? 'background-black' : 'background-white'} cursor-pointer thin-border round-border`}
                                onClick={(e) => {
                                    this.setState({
                                        sorting: 'year:1',
                                    })
                                }}
                            > </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={20}><p> Year: New to Old </p></Col>
                        <Col span={4}>
                            <div style={{ width: '20px', height: '20px', float: 'right' }}
                                className={`${this.state.sorting == 'year:-1' ? 'background-black' : 'background-white'} cursor-pointer thin-border round-border`}
                                onClick={(e) => {
                                    this.setState({
                                        sorting: 'year:-1',
                                    })
                                }}
                            > </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    brand() {
        return (
            <BrandFiltering
                showCount={false}
                showModel={false}
                options={notEmptyLength(this.state.filterCarBrands) ? this.state.filterCarBrands : []}
                onSelect={(brand, model) => {
                    if (_.get(brand, 'value')) {
                        this.setState(
                            {
                                filterGroup: {
                                    ...this.state.filterGroup,
                                    make: brand.value.toLowerCase(),
                                },
                                page: 1,
                            }
                        )
                    }
                }}
            />
        )
    }

    menu() {
        let self = this;
        return (
            <Row style={{ marginTop: '5px' }}>
                {/* <div className="d-flex scroller-type margin-x-sm" style={{ overflow: 'scroll' }}> */}
                {
                    _.map(priceRangeOptions, function (priceRange) {
                        return (
                            <Col span={8} style={{ marginBottom: '10px' }}>
                                <Button className="margin-x-sm" onClick={() => {
                                    self.setState({
                                        filterGroup: {
                                            ...self.state.filterGroup,
                                            priceRange: priceRange,
                                        }
                                    })
                                }}>
                                    {
                                        !priceRange[1] || priceRange[1] == '<' || priceRange[1] == '<=' ?
                                            `0-${formatNumber(priceRange[0], 'k', false, 0)}`
                                            :
                                            priceRange[1] == '==' ?
                                                `Equal ${formatNumber(priceRange[0], 'k', false, 0)}`
                                                :
                                                priceRange[1] == '>' || priceRange[1] == '>=' ?
                                                    `Over ${formatNumber(priceRange[0], 'k', false, 0)}`
                                                    :
                                                    `${formatNumber(priceRange[0], 'k', false, 0)} - ${formatNumber(priceRange[1], 'k', false, 0)} `
                                    }
                                </Button>
                            </Col>
                        )
                    })
                }
                {/* </div> */}
            </Row>
        )
    }

    type() {
        let self = this;
        return (
            <Row>
                {bodyTypeOri.map((v, i) => {
                    if (i > 0) {
                        return (
                            <Col style={{ marginRight: '10px' }} xs={6} sm={6} md={6} lg={6} xl={6} key={`bodyType-${i}`}>
                                <div className="cursor-pointer text-align-center" onClick={() => {
                                    self.setState({
                                        filterGroup: {
                                            ...self.state.filterGroup,
                                            bodyType: v.value.toLowerCase(),
                                        }
                                    })
                                }
                                }>
                                    <img src={v.icon} style={{ width: '50%' }} />
                                    <p style={{ marginTop: '-10px', textAlign: 'center', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0px', fontSize: '10px' }}> {v.value} </p>
                                </div>
                                {/* <p style={{color:'black', textAlign:'center', paddingTop:'10px'}}> {v.value}</p> */}
                            </Col>
                        )
                    }
                })}
            </Row>
        )
    }

    fuel() {
        let self = this;
        return (
            <Row>
                {fuelTypeList.map((v, i) => {
                    if (i == 0) {
                        return (
                            <Col style={{ marginRight: '10px', marginTop: '10px' }} xs={6} sm={6} md={6} lg={6} xl={6} key={`fuelType-${i}`}>
                                <div className="flex-justify-space-between flex-items-align-center">
                                    <div className="cursor-pointer text-align-center" onClick={() => {
                                        self.setState({
                                            filterGroup: {
                                                ...self.state.filterGroup,
                                                fuelType: v.value.toLowerCase(),
                                            }
                                        })
                                    }
                                    }>
                                        <img src={v.icon} style={{ width: '40%' }} />
                                        <p style={{ textAlign: 'center', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0px', marginTop: '3px', fontSize: '12px' }}> {v.value} </p>
                                    </div>
                                    {/* <p style={{color:'black', textAlign:'center', paddingTop:'10px'}}> {v.value}</p> */}
                                </div>
                            </Col>
                        )
                    }
                    else {
                        return (
                            <Col style={{ marginRight: '10px', marginTop: '10px' }} xs={6} sm={6} md={6} lg={6} xl={6} key={`fuelType-${i}`}>
                                <div className="flex-justify-space-between flex-items-align-center">
                                    <div className="cursor-pointer text-align-center" onClick={() => {
                                        self.setState({
                                            filterGroup: {
                                                ...self.state.filterGroup,
                                                fuelType: v.value.toLowerCase(),
                                            }
                                        })
                                    }
                                    }>
                                        <img src={v.icon} style={{ width: '40%' }} />
                                        <p style={{ textAlign: 'center', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0px', marginTop: '3px', fontSize: '12px' }}> {v.value} </p>
                                    </div>
                                    {/* <p style={{color:'black', textAlign:'center', paddingTop:'10px'}}> {v.value}</p> */}
                                </div>
                            </Col>
                        )
                    }
                })}
            </Row>
        )
    }

    _getSpec(spec, fieldName) {
        let index = _.findIndex(spec, ['field', fieldName])
        if (index !== -1) {
            return spec[index]['value']
        }
        return '-'
    }
    _renderVariants() {

        let uniqbrands = this.state.carspecs;
        let list = [];

        if (notEmptyLength(uniqbrands)) {

            uniqbrands.map((item, i) => {
                list.push(
                    <React.Fragment>
                        <Col xs={24} sm={24} md={8} lg={6} xl={6} key={`carspec-${getObjectId(i)}`} onClick={(e) => { this.setState({ expandVariantKey: this.state.expandVariantKey == `carspec-${getObjectId(i)}-collapse` ? null : `carspec-${getObjectId(i)}-collapse` }) }}>
                            <Col span={10}>
                                <img src={item.uri} style={{ width: '100%', padding: '5px', marginLeft: '5px' }}></img>
                            </Col>
                            <Col span={14} >
                                <div className="newcars-wrap-p padding-top-md padding-left-md">
                                    <p style={{ textTransform: 'capitalize', textAlign: 'left', fontSize: '16px', fontWeight: '600', marginBottom: '0px', color: "rgba(0, 0, 0, 0.65)" }}> {item.make}  {item.model}</p>
                                    <p style={{ textAlign: 'left', color: '#FBB040', fontSize: '12px', fontWeight: 700, marginBottom: '0px', }}>
                                        {
                                            !item.minPrice && !item.maxPrice ?
                                                'TBC'
                                                :
                                                item.minPrice == item.maxPrice ?
                                                    `${item.minPrice ? 'RM ' + formatNumber(item.minPrice) : 'TBC'}`
                                                    :
                                                    `${item.minPrice ? 'RM ' + formatNumber(item.minPrice) : 'TBC'} - ${item.maxPrice ? 'RM ' + formatNumber(item.maxPrice) : 'TBC'}`
                                        }
                                    </p>
                                    <p className="caption grey text-truncate">
                                        {this._getSpec(_.get(item, `specification`) || [], 'Fuel Consumption (L/100km)')} KM/L | {this._getSpec(_.get(item, `specification`) || [], 'Peak Power (hp)')} HP | {this._getSpec(_.get(item, `specification`) || [], 'Peak Torque (Nm)')} Nm                                    </p>
                                </div>
                            </Col>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="width-100">
                                <Collapse className="collapse-no-header border-none collapse-body-no-padding collapse-body-overflow-visible" activeKey={this.state.expandVariantKey} >
                                    <Collapse.Panel key={`carspec-${getObjectId(i)}-collapse`} showArrow={false}>
                                        <Scrollbars autoHeight autoHide >
                                            <div className="width-100 padding-md flex-justify-start flex-items-align-center">
                                                {
                                                    _.map(_.get(item, `variants`) || [], (variant) => {
                                                        return (
                                                            <Link href={routePaths.newCarDetails.to} as={routePaths.newCarDetails.as(item, { variantId: _.get(variant, `_id`) })}>
                                                                <a>
                                                                    <span className='d-inline-block thin-border round-border padding-x-md padding-y-sm margin-right-md' >
                                                                        <div className="font-weight-bold grey caption text-truncate flex-items-align-center flex-justify-center">
                                                                            {_.get(variant, `variant`) || _.get(variant, `newVariant`) || 'N/A'}
                                                                        </div>
                                                                        <div className="font-weight-bold caption text-truncate flex-justify-center flex-items-align-center" style={{ color: '#FBB040' }}>
                                                                            {_.get(variant, `price`) ? 'RM' : ''} {formatNumber(_.get(variant, `price`)) || 'N/A'}
                                                                        </div>
                                                                    </span>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Scrollbars>
                                    </Collapse.Panel>
                                </Collapse>
                            </div>
                        </Col>
                        <Divider style={{ marginTop: '10px', marginBottom: '10px', background: 'rgba(0, 0, 0, 0.2)' }} />
                    </React.Fragment>
                )
            })

            return (
                <Row>{list}</Row>
            );
        } else {
            return (
                <div className='padding-sm'>
                    <Empty></Empty>
                </div>
            );
        }
    }

    render() {
        return (
            <LayoutV2>
                <div className="section-version3" style={{ touchAction: 'pan-y' }}>
                    <div className="container-version3 padding-sm" id="filter-top" >

                        <Row style={{ marginTop: '3.5em' }}>
                            <Col span={20}>
                                <p style={{ fontWeight: '700', fontSize: '14px' }}> {this.state.total} Car(s) </p>
                            </Col>
                            <Col span={4} style={{ textAlign: 'end' }}>
                                <div onClick={() => { this.setState({ expandKey: this.state.expandKey == '5' ? null : '5' }) }}>
                                    <img style={{ width: '40%', height: '20px' }} src="/assets/sorting-2.png"></img>
                                </div>
                            </Col>

                            <Col span={5} offset={1}>
                                <div onClick={() => { this.setState({ expandKey: this.state.expandKey == '1' ? null : '1' }) }}>
                                    BRAND <Icon type="down" />
                                </div>
                            </Col>
                            <Col span={5} offset={1}>
                                <div onClick={e => this.setState({ expandKey: this.state.expandKey == '2' ? null : '2' })}>
                                    BODY <Icon type="down" />
                                </div>
                            </Col>
                            <Col span={5} offset={1}>
                                <div onClick={e => this.setState({ expandKey: this.state.expandKey == '3' ? null : '3' })}>
                                    FUEL <Icon type="down" />
                                </div>
                            </Col>
                            <Col span={5} offset={1}>
                                <div onClick={e => this.setState({ expandKey: this.state.expandKey == '4' ? null : '4' })}>
                                    PRICE <Icon type="down" />
                                </div>
                            </Col>
                        </Row>

                        <div className="margin-y-md">
                            {this._renderFilterTags(this.state.filterGroup)}
                        </div>

                        <Row>
                            <Collapse className="collapse-no-header border-none collapse-body-no-padding collapse-body-overflow-visible" activeKey={this.state.expandKey}>
                                <Collapse.Panel key="1" showArrow={false} collapsible={true}>
                                    <div className="width-100 margin-top-xs">
                                        {this.brand()}
                                    </div>
                                </Collapse.Panel>
                                <Collapse.Panel key="2" showArrow={false} collapsible={true}>
                                    <div className="width-100" >
                                        {this.type()}
                                    </div>
                                </Collapse.Panel>
                                <Collapse.Panel key="3" showArrow={false} collapsible={true}>
                                    <div className="width-100" >
                                        {this.fuel()}
                                    </div>
                                </Collapse.Panel>
                                <Collapse.Panel key="4" showArrow={false} collapsible={true}>
                                    <div className="width-100" >
                                        {this.menu()}
                                    </div>
                                </Collapse.Panel>
                                <Collapse.Panel key="5" showArrow={false} collapsible={true}>
                                    {this.sortingView()}
                                </Collapse.Panel>
                            </Collapse>
                        </Row>

                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="margin-top-md">
                                <div className="padding-bottom-md background-white thick-border fill-parent">
                                    {this._renderVariants()}
                                </div>
                            </Col>
                            {
                                this.state.total > PAGESIZE ?
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <div className="flex-justify-center margin-bottom-sm">
                                            <Pagination simple pageSize={PAGESIZE} current={this.state.page} total={this.state.total} onChange={(e) => { this.setState({ page: e }) }} />
                                        </div>
                                    </Col>
                                    :
                                    null
                            }
                        </Row>
                    </div>
                </div>

            </LayoutV2>
        );
    }
}

const mapStateToProps = state => ({
    newCars: state.newCars
});

const mapDispatchToProps = {
    loading: loading,
    fetchPrice: fetchPrice,
    fetchPopular: fetchPopular,
    fetchNewCarFilterGroup: fetchNewCarFilterGroup,
    updateActiveMenu: updateActiveMenu,
    resetNewCarFilterGroup: resetNewCarFilterGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Filter));