import { Affix, Divider, Button, Col, Empty, message, Pagination, Radio, Row, Select, Switch, Table, Tooltip, Icon, Collapse, Tag, Breadcrumb } from 'antd';
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
import BrandFilteringTablet from '../BrandFilteringTablet';


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
            this.pushParameterToUrl();
        }

        if (!_.isEqual(prevProps.router.query, this.props.router.query)) {
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

    renderSearchFilter() {
        const { size } = this.state;

        return (
            <div className="menu" id="calling-menu">
                <Row gutter={[10, 20]}>
                    <Row className="filter-bar" >
                        <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                            <p style={{ paddingTop: '6px' }}>Price (RM) </p>
                        </Col>
                        <Col xs={24} sm={24} md={19} lg={20} xl={20} >
                            <Radio.Group
                                defaultValue=""
                                value={notEmptyLength(this.state.filterGroup.priceRange) ? this.state.filterGroup.priceRange.join(ARRAY_SEPERATOR) : ''}
                                buttonStyle="solid"
                                // size="large"
                                onChange={(e) => {
                                    this.setState({ filterGroup: { ...this.state.filterGroup, priceRange: e.target.value ? e.target.value.split(ARRAY_SEPERATOR) : [] } }, () => {
                                    })
                                }}
                                className="filter-type" >
                                <Radio.Button value={''}>All</Radio.Button>
                                {
                                    _.map(priceRangeOptions, function (priceRange) {
                                        return (
                                            <Radio.Button value={notEmptyLength(priceRange) ? priceRange.join(ARRAY_SEPERATOR) : ''}>
                                                {
                                                    !priceRange[1] || priceRange[1] == '<' || priceRange[1] == '<=' ?
                                                        `Below ${formatNumber(priceRange[0], 'k', false, 0)}`
                                                        :
                                                        priceRange[1] == '==' ?
                                                            `Equal ${formatNumber(priceRange[0], 'k', false, 0)}`
                                                            :
                                                            priceRange[1] == '>' || priceRange[1] == '>=' ?
                                                                `Over ${formatNumber(priceRange[0], 'k', false, 0)}`
                                                                :
                                                                `${formatNumber(priceRange[0], 'k', false, 0)} - ${formatNumber(priceRange[1], 'k', false, 0)} `
                                                }
                                            </Radio.Button>
                                        )
                                    })
                                }
                            </Radio.Group>
                        </Col>
                    </Row>

                    <Row className="filter-bar">
                        <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                            <p style={{ paddingTop: '6px' }}>Monthly Payment (RM)</p>
                        </Col>
                        <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                            <Radio.Group
                                defaultValue=""
                                value={notEmptyLength(this.state.filterGroup.monthlyPaymentRange) ? this.state.filterGroup.monthlyPaymentRange.join(ARRAY_SEPERATOR) : ''}
                                buttonStyle="solid"
                                onChange={(e) => {
                                    this.setState({ filterGroup: { ...this.state.filterGroup, monthlyPaymentRange: e.target.value ? e.target.value.split(ARRAY_SEPERATOR) : [] } })
                                }}
                                className="filter-type">
                                <Radio.Button value="">All</Radio.Button>
                                {
                                    _.map(monthlyPaymentOptions, function (monthlyPayment) {
                                        return (
                                            <Radio.Button value={notEmptyLength(monthlyPayment) ? monthlyPayment.join(ARRAY_SEPERATOR) : ''}>
                                                {
                                                    !monthlyPayment[1] || monthlyPayment[1] == '<' || monthlyPayment[1] == '<=' ?
                                                        `Below ${parseFloat(monthlyPayment[0]) >= 1000 ? formatNumber(monthlyPayment[0], 'k', false, 1) : monthlyPayment[0]}`
                                                        :
                                                        monthlyPayment[1] == '==' ?
                                                            `Equal ${parseFloat(monthlyPayment[0]) >= 1000 ? formatNumber(monthlyPayment[0], 'k', false, 1) : monthlyPayment[0]}`
                                                            :
                                                            monthlyPayment[1] == '>' || monthlyPayment[1] == '>=' ?
                                                                `Over ${parseFloat(monthlyPayment[0]) >= 1000 ? formatNumber(monthlyPayment[0], 'k', false, 1) : monthlyPayment[0]}`
                                                                :
                                                                `${parseFloat(monthlyPayment[0]) >= 1000 ? formatNumber(monthlyPayment[0], 'k', false, 1) : monthlyPayment[0]} - ${parseFloat(monthlyPayment[1]) >= 1000 ? formatNumber(monthlyPayment[1], 'k', false, 1) : monthlyPayment[1]} `
                                                }
                                            </Radio.Button>
                                        )
                                    })
                                }
                            </Radio.Group>
                        </Col>
                    </Row>


                    <Row className="filter-bar">
                        <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                            <p style={{ paddingTop: '6px' }}>Body Type</p>
                        </Col>
                        <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                            {
                                this.state.showIcon ?
                                    <Radio.Group
                                        defaultValue=""
                                        value={this.state.filterGroup.bodyType}
                                        buttonStyle="solid"
                                        onChange={(e) => {
                                            this.setState({ filterGroup: { ...this.state.filterGroup, bodyType: e.target.value } })
                                        }}
                                        className="filter-type1">
                                        <Radio.Button value="">All</Radio.Button>
                                        <Tooltip title="Sedan">
                                            <Radio.Button value="sedan"> <img src="/assets/car-type-ori-ver2/sedan.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="MPV">
                                            <Radio.Button value="mpv"><img src="/assets/car-type-ori-ver2/mpv.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="SUV">
                                            <Radio.Button value="suv"><img src="/assets/car-type-ori-ver2/suv.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Compact">
                                            <Radio.Button value="compact"><img src="/assets/car-type-ori-ver2/compact.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Coach">
                                            <Radio.Button value="coach"><img src="/assets/car-type-ori-ver2/coach.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Pickup Truck">
                                            <Radio.Button value="pickuptruck"><img src="/assets/car-type-ori-ver2/pickup-truck.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Hatchback">
                                            <Radio.Button value="hatchback"><img src="/assets/car-type-ori-ver2/hatchback.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Convertible">
                                            <Radio.Button value="convertible"><img src="/assets/car-type-ori-ver2/convertible.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Coupe">
                                            <Radio.Button value="coupe"> <img src="/assets/car-type-ori-ver2/coupe.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Crossover">
                                            <Radio.Button value="crossover"> <img src="/assets/car-type-ori-ver2/crossover.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Sport Car">
                                            <Radio.Button value="sportcar"> <img src="/assets/car-type-ori-ver2/sport-car.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Truck">
                                            <Radio.Button value="truck"> <img src="/assets/car-type-ori-ver2/truck.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Van">
                                            <Radio.Button value="van"> <img src="/assets/car-type-ori-ver2/van.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Wagon">
                                            <Radio.Button value="wagon"> <img src="/assets/car-type-ori-ver2/wagon.png"></img> </Radio.Button>
                                        </Tooltip>
                                    </Radio.Group>
                                    :
                                    <Radio.Group
                                        defaultValue=""
                                        value={this.state.filterGroup.bodyType}
                                        buttonStyle="solid"
                                        onChange={(e) => {
                                            this.setState({ filterGroup: { ...this.state.filterGroup, bodyType: e.target.value } })
                                        }}
                                        className="filter-type">
                                        <Radio.Button value="">All</Radio.Button>
                                        <Radio.Button value="sedan"> Sedan</Radio.Button>
                                        <Radio.Button value="mpv">MPV</Radio.Button>
                                        <Radio.Button value="suv">SUV</Radio.Button>
                                        <Radio.Button value="compact">Compact</Radio.Button>
                                        <Radio.Button value="coach">Coach</Radio.Button>
                                        <Radio.Button value="pickup">Pickup</Radio.Button>
                                        <Radio.Button value="hatchback">Hatchback</Radio.Button>
                                        <Radio.Button value="convertible">Convertible</Radio.Button>
                                        <Radio.Button value="coupe"> Coupe</Radio.Button>
                                        <Radio.Button value="crossover"> Crossover</Radio.Button>
                                        <Radio.Button value="sportcar"> Sport Car</Radio.Button>
                                        <Radio.Button value="truck"> Truck</Radio.Button>
                                        <Radio.Button value="van"> Van</Radio.Button>
                                        <Radio.Button value="wagon"> Wagon</Radio.Button>
                                    </Radio.Group>
                            }
                        </Col>
                    </Row>

                    <Row className="filter-bar">
                        <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                            <p style={{ paddingTop: '6px' }}>Transmission</p>
                        </Col>
                        <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                            {
                                this.state.showIcon ?
                                    <Radio.Group
                                        defaultValue=""
                                        value={this.state.filterGroup.transmission}
                                        buttonStyle="solid"
                                        onChange={(e) => {
                                            this.setState({ filterGroup: { ...this.state.filterGroup, transmission: e.target.value } })
                                        }}
                                        className="filter-type">
                                        <Radio.Button value="" >All</Radio.Button>
                                        <Tooltip title="Automatic">
                                            <Radio.Button value="Automatic"><img src="/assets/transmission/Automatics.png"></img> </Radio.Button>
                                        </Tooltip>
                                        <Tooltip title="Manual">
                                            <Radio.Button value="Manual"><img src="/assets/transmission/Manual.png"></img> </Radio.Button>
                                        </Tooltip>
                                    </Radio.Group>
                                    :
                                    <Radio.Group
                                        defaultValue=""
                                        value={this.state.filterGroup.transmission}
                                        buttonStyle="solid"
                                        onChange={(e) => {
                                            this.setState({ filterGroup: { ...this.state.filterGroup, transmission: e.target.value } })
                                        }}
                                        className="filter-type">
                                        <Radio.Button value="" >All</Radio.Button>
                                        <Radio.Button value="Automatic"> Automatics</Radio.Button>
                                        <Radio.Button value="Manual">Manual</Radio.Button>
                                    </Radio.Group>

                            }
                        </Col>
                    </Row>

                    <div>
                        <div style={{ display: (this.state.expand ? 'block' : 'none') }}>
                            <Row className="filter-bar">
                                <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                                    <p style={{ paddingTop: '6px' }}>Seats</p>
                                </Col>
                                <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                                    {
                                        this.state.showIcon ?

                                            <Radio.Group
                                                defaultValue=""
                                                value={this.state.filterGroup.seatCapacity}
                                                buttonStyle="solid"
                                                onChange={(e) => {
                                                    this.setState({ filterGroup: { ...this.state.filterGroup, seatCapacity: e.target.value } })
                                                }}
                                                className="filter-type">
                                                <Radio.Button value="">All</Radio.Button>
                                                <Tooltip title="2 Seats">
                                                    <Radio.Button value="2"> <img src="/assets/seats/2seater.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="4 Seats">
                                                    <Radio.Button value="4"><img src="/assets/seats/4seater.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="5 Seats">
                                                    <Radio.Button value="5"><img src="/assets/seats/5seater.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="6 Seats">
                                                    <Radio.Button value="6"><img src="/assets/seats/6seater.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="7 Seats">
                                                    <Radio.Button value="7"> <img src="/assets/seats/7seater.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="More Than 7">
                                                    <Radio.Button value="more7"><img src="/assets/seats/more7.png"></img> </Radio.Button>
                                                </Tooltip>
                                            </Radio.Group>
                                            :
                                            <Radio.Group
                                                defaultValue=""
                                                value={this.state.filterGroup.seatCapacity}
                                                buttonStyle="solid"
                                                onChange={(e) => {
                                                    this.setState({ filterGroup: { ...this.state.filterGroup, seatCapacity: e.target.value } })
                                                }}
                                                className="filter-type">
                                                <Radio.Button value="">All</Radio.Button>
                                                <Radio.Button value="2"> 2 seats</Radio.Button>
                                                <Radio.Button value="4">4 seats</Radio.Button>
                                                <Radio.Button value="5">5 seats</Radio.Button>
                                                <Radio.Button value="6"> 6 seats</Radio.Button>
                                                <Radio.Button value="7"> 7 seats</Radio.Button>
                                                <Radio.Button value="more7"> More than 7 seats</Radio.Button>
                                            </Radio.Group>
                                    }
                                </Col>
                            </Row>

                            <Row className="filter-bar">
                                <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                                    <p style={{ paddingTop: '6px' }}>Fuel Type</p>
                                </Col>
                                <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                                    {
                                        this.state.showIcon ?
                                            <Radio.Group
                                                defaultValue=""
                                                value={this.state.filterGroup.fuelType}
                                                buttonStyle="solid"
                                                onChange={(e) => {
                                                    this.setState({ filterGroup: { ...this.state.filterGroup, fuelType: e.target.value } })
                                                }}
                                                className="filter-type1">
                                                <Radio.Button value="">All</Radio.Button>
                                                <Tooltip title="Petrol (Unleaded)">
                                                    <Radio.Button value="petrolUlp"><img src="/assets/fuel-type/petrol-unleaded.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="Plug-in hybrid">
                                                    <Radio.Button value="phev"><img src="/assets/fuel-type/phev.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="Petrol (Leaded)">
                                                    <Radio.Button value="petrol"><img src="/assets/fuel-type/petrol-leaded.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="Electric">
                                                    <Radio.Button value="ev"><img src="/assets/fuel-type/ev.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="Hybrid">
                                                    <Radio.Button value="hybrid"><img src="/assets/fuel-type/hybrid.png"></img> </Radio.Button>
                                                </Tooltip>
                                                <Tooltip title="Diesel">
                                                    <Radio.Button value="diesel"><img src="/assets/fuel-type/diesel.png"></img> </Radio.Button>
                                                </Tooltip>
                                            </Radio.Group>
                                            :
                                            <Radio.Group
                                                defaultValue=""
                                                value={this.state.filterGroup.fuelType}
                                                buttonStyle="solid"
                                                onChange={(e) => {
                                                    this.setState({ filterGroup: { ...this.state.filterGroup, fuelType: e.target.value } })
                                                }}
                                                className="filter-type">
                                                <Radio.Button value="">All</Radio.Button>
                                                <Radio.Button value="petrolUlp">Petrol (Unleaded)</Radio.Button>
                                                <Radio.Button value="phev">Plug-in hybrid</Radio.Button>
                                                <Radio.Button value="petrol">Petrol (Leaded)</Radio.Button>
                                                <Radio.Button value="ev">Electric</Radio.Button>
                                                <Radio.Button value="hybrid">Hybrid</Radio.Button>
                                                <Radio.Button value="diesel">Diesel</Radio.Button>
                                            </Radio.Group>
                                    }
                                </Col>
                            </Row>

                            <Row className="filter-bar">
                                <Col xs={24} sm={24} md={5} lg={4} xl={4}>
                                    <p style={{ paddingTop: '6px' }}>Engine Capacity</p>
                                </Col>
                                <Col xs={24} sm={24} md={19} lg={20} xl={20}>
                                    <Radio.Group
                                        defaultValue=""
                                        value={notEmptyLength(this.state.filterGroup.engineCapacityRange) ? this.state.filterGroup.engineCapacityRange.join(ARRAY_SEPERATOR) : ''} buttonStyle="solid"
                                        onChange={(e) => {
                                            this.setState({ filterGroup: { ...this.state.filterGroup, engineCapacityRange: e.target.value ? e.target.value.split(ARRAY_SEPERATOR) : [] } })
                                        }}
                                        className="filter-type">
                                        <Radio.Button value="">All</Radio.Button>
                                        {
                                            _.map(engineCapacityOptions, function (engineCapacity) {
                                                return (
                                                    <Radio.Button value={notEmptyLength(engineCapacity) ? engineCapacity.join(ARRAY_SEPERATOR) : ''}>
                                                        {
                                                            !engineCapacity[1] || engineCapacity[1] == '<' || engineCapacity[1] == '<=' ?
                                                                `Below ${numberToFixed(engineCapacity[0], true, 1)}`
                                                                :
                                                                engineCapacity[1] == '==' ?
                                                                    `Equal ${numberToFixed(engineCapacity[0], true, 1)}`
                                                                    :
                                                                    engineCapacity[1] == '>' || engineCapacity[1] == '>=' ?
                                                                        `More Than ${numberToFixed(engineCapacity[0], true, 1)}`
                                                                        :
                                                                        `${numberToFixed(engineCapacity[0], true, 1)} - ${numberToFixed(engineCapacity[1], true, 1)} `
                                                        }
                                                    </Radio.Button>
                                                )
                                            })
                                        }
                                    </Radio.Group>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Row>
            </div>
        );
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

    _renderVariantsTablet() {
        const columns = [
            {
                title: 'Model',
                dataIndex: 'model',
                key: 'model',
                render: (text, record) => {
                    return (
                        <span>
                            {_.capitalize(record.make) + ' ' + _.capitalize(record.model) + ' ' + _.capitalize(record.variant) + ' ' + record.year}
                        </span>
                    )
                },
            },
            {
                title: 'Transmission',
                dataIndex: 'transmission',
                key: 'transmission',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
                render: (text, record) => (
                    <span style={{ color: 'rgb(251, 176, 64)' }}>
                        {text ? "RM" + formatNumber(text, null, null, 2) : '-'}
                    </span>
                ),
            },
            {
                title: 'Monthly Payment',
                dataIndex: 'monthlyPayment',
                key: 'monthlyPayment',
                render: (text, record) => {
                    return (
                        <span style={{ color: 'rgb(80, 135, 251)' }}>
                            {record.price ? "RM" + formatNumber(record.monthlyPayment, null, null, 2) : '-'}
                        </span>
                    )
                },
            },
            {
                title: 'Driven Wheel',
                dataIndex: 'drivenwheel',
                key: 'drivenwheel',
                render: (text, record) => {
                    return (
                        <span style={{ color: 'rgb(80, 135, 251)' }}>
                            {record.drivenwheel ? _.upperCase(record.drivenwheel) : '-'}
                        </span>
                    )
                },
            },
            {
                title: 'Fuel Type',
                dataIndex: 'fuelType',
                key: 'fuelType',
                render: (text, record) => {
                    return (
                        <span style={{ color: 'rgb(80, 135, 251)' }}>
                            {record.fuelType ? _.upperCase(record.fuelType) : '-'}
                        </span>
                    )
                },
            },
            {
                title: 'Engine Capacity',
                dataIndex: 'engineCapacity',
                key: 'engineCapacity',
                render: (text, record) => {
                    return (
                        <span style={{ color: 'rgb(80, 135, 251)' }}>
                            {record.engineCapacity ? record.engineCapacity : '-'}
                        </span>
                    )
                },
            },
            // {
            //   title: 'Action',
            //   key: 'action',
            //   render: (text, record) => (
            //     <span>
            //         <Button style={{ marginRight: '10px', width: '100px' }} 
            //         onClick={() => this.pushCompare(record)}
            //         > + Compare </Button>
            //     </span>
            //   ),
            // },
        ];

        let uniqbrands = this.state.carspecs
        let getDecimal = uniqbrands.length / 4
        var rowDivided = Math.ceil(getDecimal)
        var count = 0
        var rowKey = 0
        let list = []

        if (notEmptyLength(uniqbrands)) {

            uniqbrands.map((item, i) => {
                count++
                if (count <= 3) {
                    item.rowKey = rowKey
                    list.push(
                        <React.Fragment>
                            <Col xs={24} sm={24} md={8} lg={6} xl={6} key={i}>
                                <Link shallow={false} href={routePaths.newCarDetails.to || '/'} as={typeof (routePaths.newCarDetails.as) == 'function' ? routePaths.newCarDetails.as(item) : '/'} >
                                    <a>
                                        <div className="newcars-uniqBy-model">
                                            <img src={item.uri} style={{ width: '100%', padding: '5px', marginLeft: '5px' }}></img>
                                            <div className="newcars-wrap-p">
                                                <p style={{ textTransform: 'capitalize', textAlign: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '0px', color: "rgba(0, 0, 0, 0.65)" }}> {item.make}  {item.model}</p>
                                                <p style={{ textAlign: 'center', color: '#FBB040', fontSize: '16px', fontWeight: 600 }}>
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
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                {/* <div style={{ padding: '0 26px', position: 'relative', zIndex: 2, width: '100%', bottom: -2 }}>
                                    <Collapse onChange={(e) => this.getRowKey(item, i)} className="collapse-variants" activeKey={this.state.activeKey}>
                                        <Collapse.Panel header={`${notEmptyLength(item.variants) ? item.variants.length : 0} Variants Found`} key={rowKey + '' + i}>
                                        </Collapse.Panel>
                                    </Collapse>
                                </div> */}
                            </Col>
                        </React.Fragment>
                    )
                } else {
                    count = 0
                    item.rowKey = rowKey
                    list.push(
                        <React.Fragment>
                            <Col xs={24} sm={24} md={8} lg={6} xl={6} key={i}>
                                <Link shallow={false} href={routePaths.newCarDetails.to || '/'} as={typeof (routePaths.newCarDetails.as) == 'function' ? routePaths.newCarDetails.as(item) : '/'} >
                                    <a>
                                        <div className="newcars-uniqBy-model">
                                            <img src={item.uri} style={{ width: '100%', padding: '5px', marginLeft: '5px' }}></img>
                                            <div className="newcars-wrap-p">
                                                <p style={{ textTransform: 'capitalize', textAlign: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '0px', color: "rgba(0, 0, 0, 0.65)" }}> {item.make}  {item.model}</p>
                                                <p style={{ textAlign: 'center', color: '#FBB040', fontSize: '16px', fontWeight: 600 }}>
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
                                            </div>
                                        </div>

                                    </a>
                                </Link>
                                {/* <div style={{ padding: '0 26px', position: 'relative', zIndex: 2, width: '100%', bottom: -2 }}>
                                    <Collapse onChange={(e) => this.getRowKey(item, i)} className="collapse-variants" activeKey={this.state.activeKey}>
                                        <Collapse.Panel header={item.variants.length + ' Variants Found'} key={rowKey + '' + i}>
                                        </Collapse.Panel>
                                    </Collapse>
                                </div> */}
                            </Col>
                            {/* <Col span={24} id={rowKey} style={this.state.rowKey == item.rowKey ? { display: 'block' } : { display: 'none' }}>
                                <div style={{ padding: '0 26px' }}>
                                    <Table rowKey="_id" bordered columns={columns} dataSource={_.sortBy(this.state.rowData, ['year'])} pagination={false} />
                                </div>
                            </Col> */}
                        </React.Fragment>
                    )
                    rowKey++
                }
            })

            if (Number.isInteger(getDecimal) === false) {
                list.push((
                    <Col span={24} id={rowKey} style={this.state.rowKey == rowKey ? { display: 'block' } : { display: 'none' }}>
                        <div style={{ padding: '0 26px' }}>
                            <Table rowKey="_id" bordered columns={columns} dataSource={_.sortBy(this.state.rowData, ['year'])} pagination={false} />
                        </div>
                    </Col>
                ))
            }

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
                <Tablet>
                    <div className="section-version3" style={{ touchAction: 'pan-y' }}>
                        <div className="container-version3 padding-x-sm margin-top-md" id="filter-top" >
                            <Breadcrumb style={{ marginBottom: '5px' }}>
                                <Breadcrumb.Item>
                                    <Link shallow={false} href={routePaths.home.to || '/'} as={typeof (routePaths.home.as) == 'function' ? routePaths.home.as() : '/'}>
                                        <a>
                                            Home
                                        </a>
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Link shallow={false} href={routePaths.newCar.to || '/'} as={typeof (routePaths.newCar.as) == 'function' ? routePaths.newCar.as() : '/'}>
                                        <a>
                                            New Car
                                        </a>
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Link shallow={false} href={routePaths.newCarFilter.to || '/'} as={typeof (routePaths.newCarFilter.as) == 'function' ? routePaths.newCarFilter.as() : '/'}>
                                        <a>
                                            Filter
                                        </a></Link>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Row gutter={[20, 20]}>
                                <Col xs={24} sm={24} md={16} lg={18} xl={19}>
                                    <Row type="flex" align='middle'>
                                        <Col className="gutter-row" xs={{ span: 23, offset: 1 }} sm={{ span: 23, offset: 1 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }}>
                                            <span className='d-inline-block h6 font-weight-bold grey-darken-3' style={{ marginTop: '15px' }} >
                                                SEARCH FILTER
                                        </span>
                                        </Col>
                                        <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                                            <div className='fill-parent flex-justify-end  flex-items-align-center flex-no-wrap'>
                                                <span className='d-inline-block margin-x-sm' >
                                                    <Switch
                                                        checkedChildren="Show Text"
                                                        unCheckedChildren="Show Icon"
                                                        onChange={() => this.setState({
                                                            showIcon: !this.state.showIcon,
                                                        })
                                                        }
                                                    />
                                                </span>
                                                <span className='d-inline-block margin-x-sm' >
                                                    <Switch
                                                        defaultChecked
                                                        checkedChildren="Less Condition"
                                                        unCheckedChildren="More Conditions"
                                                        onChange={(e) => this.setState({
                                                            expand: e,
                                                        })
                                                        }
                                                    />
                                                </span>
                                                <span className='d-inline-block margin-x-sm'>
                                                    <Button onClick={() => this.resetSearch()}>
                                                        <div className='flex-items-align-center flex-justify-center'>
                                                            <span className='d-inline-block flex-items-align-center flex-justify-center' >
                                                                <img src='/assets/General/reset.png' style={{ width: '20px', height: '20px' }} className="margin-x-xs"></img>
                                                            </span>
                                                            <span className='d-inline-block' >
                                                                Reset
                                                </span>
                                                        </div>
                                                    </Button>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>

                                    {this.renderSearchFilter()}

                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <div className='fill-parent '>
                                            <span className='d-inline-block ' >
                                                <label>Sort by: </label>
                                                <Select value={this.state.sorting} style={{ width: 120 }}
                                                    dropdownMatchSelectWidth={false}
                                                    onChange={(e) => this.onChangeSortBy(e)}
                                                >
                                                    <Select.Option value="createdAt:-1">Best Value</Select.Option>
                                                    <Select.Option value="price:1">Price (Low to High)</Select.Option>
                                                    <Select.Option value="price:-1">Price (High to Low)</Select.Option>
                                                    {/* <Select.Option value='dealer'>Best Dealer Reviewed</Select.Option>
                                                    <Select.Option value='rate'>Best Dealer Rating</Select.Option> */}
                                                </Select>
                                            </span>
                                        </div>
                                    </Col>


                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <div className="padding-bottom-md background-white thick-border fill-parent">
                                            {this._renderVariantsTablet()}
                                        </div>
                                    </Col>
                                    {
                                        this.state.total > PAGESIZE ?
                                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                <div className="flex-justify-center">
                                                    <Pagination simple pageSize={PAGESIZE} current={this.state.page} total={this.state.total} onChange={(e) => { this.setState({ page: e }) }} />
                                                </div>
                                            </Col>
                                            :
                                            null
                                    }

                                </Col>


                                <Col className="stick-column" xs={0} sm={0} md={8} lg={6} xl={5}>
                                    <Affix offsetTop={65}>
                                        <BrandFilteringTablet
                                            brands={notEmptyLength(this.state.filterCarBrands) ? this.state.filterCarBrands : carBrandsList}
                                        // onSelect={(e) => { this.setState({ ...this.state.filterGroup, make: _.toLower(e) }) }}
                                        // selected={
                                        //     this.props.newCars ? this.state.filterGroup
                                        //         ? this.state.filterGroup.make
                                        //             ? this.state.filterGroup.make 
                                        //             : ''
                                        //         : ''
                                        //         : ''}
                                        />
                                    </Affix>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Tablet>

            <Mobile>
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
            </Mobile>
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