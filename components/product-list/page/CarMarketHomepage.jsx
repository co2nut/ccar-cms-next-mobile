import { Affix, Breadcrumb, Button, Col, Empty, message, Pagination, Radio, Row, Select, Switch, Table, Tooltip } from 'antd';
import axios from 'axios';
import _, { isArray } from 'lodash';
import Link from 'next/link';
import { withRouter } from 'next/router';
import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { formatNumber, isValidNumber, notEmptyLength, numberToFixed, objectRemoveEmptyValue, queryStringifyNestedObject } from '../../../common-function';
import client from '../../../feathers';
import { carBrandsList, getCarBrandsIcon } from '../../../params/carBrandsList';
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions';
import { fetchNewCarFilterGroup, fetchPopular, fetchPrice, resetNewCarFilterGroup } from '../../../redux/actions/newcars-actions';
import LayoutV2 from '../../general/LayoutV2';
import BrandFiltering from '../../newcar/BrandFiltering';
// import BrandList from '../components/product-list/brand-list'
import BodyTypeModal from '../filter-modal/BodyTypeModal';
import MakeModal from '../filter-modal/MakeModal';
import { bodyTypeList, getBodyTypeIcon } from '../../../params/bodyTypeList';
import { convertParameterToProductListUrl } from '../../../common-function'

const CARBRANDSSIZE = 8;
const PAGESIZE = 12

const ARRAY_SEPERATOR = '|'

const priceRangeOptions = [[30000, '<'], [30000, 50000], [50000, 70000], [70000, 90000], [90000, 110000], [110000, '>='],
];

const monthlyPaymentOptions = [[0, 500], [500, 1000], [1000, 1500], [1500, 2000], [2000, 2500], [2500, 3000], [3000, 3500], [3500, '>='],
]

const engineCapacityOptions = [[1, '<'], [1, 1.6], [1.6, 2.2], [2.2, 2.6], [2.6, 3.0], [3.0, 4.0], [4.0, '>='],
]

class CarMarketHomepage extends React.Component {

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
            origAvailableFilterOption: {},
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
            visible: false
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

        this.props.updateActiveMenu('2');
        this.getDataFromUrl();
        this.updateFilterGroupFromUrl();
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

    componentDidUpdate(prevProps, prevState) {

        if (!_.isEqual(_.get(prevState, ['origAvailableFilterOption']), _.get(this.state, ['origAvailableFilterOption']))) {

            if (notEmptyLength(_.get(this.state, ['origAvailableFilterOption', 'makeList']))) {
                let selectedCarBrands = _.get(this.state, ['origAvailableFilterOption', 'makeList']) || [];
                let data = _.compact(_.map(carBrandsList, function (brand) {
                    let selectedBrand = _.find(selectedCarBrands, function (item) {
                        return _.toLower(item.value) == _.toLower(brand.value);
                    });
                    if (selectedBrand) {
                        brand.count = selectedBrand.count;
                        return brand;
                    } else {
                        return null;
                    }
                }));
                data = _.reverse(_.sortBy(data, ['count', 'value']));
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

            if (notEmptyLength(_.get(this.state, ['origAvailableFilterOption', 'fuelTypeList']))) {
                let selecetedFuelTypes = _.get(this.state, ['origAvailableFilterOption', 'fuelTypeList']) || [];
                let data1 = _.filter(fuelTypeList, function (fuelType) {
                    return _.some(selecetedFuelTypes, function (item) {
                        return _.toLower(item.value) == _.toLower(fuelType.value);
                    })
                })

                if (notEmptyLength(data1)) {

                    this.setState({
                        filterFuelType: data1,
                    })
                } else {
                    this.setState({
                        filterFuelType: [],
                    })
                }
            } else {
                this.setState({
                    filterFuelType: [],
                })
            }

            if (notEmptyLength(_.get(this.state, ['origAvailableFilterOption', 'bodyTypeList']))) {
                let selecetedBodyTypes = _.get(this.state, ['origAvailableFilterOption', 'bodyTypeList']) || [];
                let data2 = _.filter(bodyTypeList, function (bodyType) {
                    return _.some(selecetedBodyTypes, function (item) {
                        return _.toLower(item.value) == _.toLower(bodyType.value);
                    })
                })

                if (notEmptyLength(data2)) {

                    this.setState({
                        filterBodyType: data2,
                    })
                } else {
                    this.setState({
                        filterBodyType: [],
                    })
                }
            } else {
                this.setState({
                    filterBodyType: [],
                })
            }
        }


        if (!_.isEqual(prevState.page, this.state.page)) {
            this.getDataFromUrl((this.state.page - 1) * PAGESIZE)
        }


        if (!_.isEqual(prevProps.router.query, this.props.router.query)) {
            if (this.state.page == 1) {
                this.getDataFromUrl(0);
            } else {
                this.setState({
                    page: 1
                });
            }
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
        let mergeObj = {
            page: this.state.page,
            sorting: this.state.sorting
        }
        let path = '/newcar/filter';
        if (_.isObject(this.state.filterGroup) && !_.isEmpty(objectRemoveEmptyValue(this.state.filterGroup))) {

            mergeObj = { ...mergeObj, ..._.cloneDeep(this.state.filterGroup) };
            mergeObj = _.pickBy(mergeObj, function (property) {
                return isArray(property) ? notEmptyLength(property) : property;
            });
        }

        if (_.isPlainObject(mergeObj) && !_.isEmpty(mergeObj)) {
            path += `?${queryStringifyNestedObject(mergeObj)}`;
        }
        this.props.router.push(path, path, { shallow: false });
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

    getRowKey(item, i) {
        if (this.state.activeKey == item.rowKey + '' + i) {
            this.setState({ rowKey: -1, activeKey: -1 })
        } else {
            let cloneItem = _.map(_.cloneDeep(item.variants), (v) => {
                v.make = item.make
                v.model = item.model
                v.bodyType = item.bodyType
                return v
            })

            this.setState({
                rowKey: item.rowKey,
                rowData: cloneItem,
                activeKey: item.rowKey + '' + i
            })
        }
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



    renderSearchFilter() {
        const { size } = this.state;

        let self = this;
        return (
            <div className="menu" id="calling-menu">
                <Row gutter={[10, 20]}>

                    <Row>
                        <Col span={24}>
                            <div className="d-flex scroller-type margin-x-sm" style={{ overflow: 'scroll' }}>
                                {
                                    _.map(priceRangeOptions, function (priceRange) {
                                        return (
                                            <Button className="margin-x-sm" onClick={(e) => {
                                                console.log(priceRange);
                                                self.pushParameterToUrl({ priceRange: priceRange }, { page: 1 })
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
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>

                </Row>
            </div>
        );
    }

    _renderVariants() {
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
                            <Col xs={24} sm={24} md={6} lg={6} xl={6} key={i}>
                                <Link to={`/newcar/details/${item.make + '/' + item.model}`} >
                                    <div className="newcars-uniqBy-model">
                                        <img src={item.uri} style={{ width: '100%', padding: '5px', marginLeft: '5px' }}></img>
                                        <div className="newcars-wrap-p">
                                            <p style={{ textTransform: 'capitalize', textAlign: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '0px', color: "rgba(0, 0, 0, 0.65)" }}> {item.make}  {item.model}</p>
                                            <p style={{ textAlign: 'center', color: '#FBB040', fontSize: '16px', fontWeight: 600 }}>
                                                {
                                                    !item.minPrice && !item.maxPrice ?
                                                        'TBC'
                                                        :
                                                        `${item.minPrice ? 'RM ' + formatNumber(item.minPrice) : 'TBC'} - ${item.maxPrice ? 'RM ' + formatNumber(item.maxPrice) : 'TBC'}`
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </React.Fragment>
                    )
                } else {
                    count = 0
                    item.rowKey = rowKey
                    list.push(
                        <React.Fragment>
                            <Col xs={24} sm={24} md={6} lg={6} xl={6} key={i}>
                                <Link to={`/newcar/details/${item.make + '/' + item.model}`} >
                                    <div className="newcars-uniqBy-model">
                                        <img src={item.uri} style={{ width: '100%', padding: '5px', marginLeft: '5px' }}></img>
                                        <div className="newcars-wrap-p">
                                            <p style={{ textTransform: 'capitalize', textAlign: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '0px', color: "rgba(0, 0, 0, 0.65)" }}> {item.make}  {item.model}</p>
                                            <p style={{ textAlign: 'center', color: '#FBB040', fontSize: '16px', fontWeight: 600 }}>
                                                {
                                                    !item.minPrice && !item.maxPrice ?
                                                        'TBC'
                                                        :
                                                        `${item.minPrice ? 'RM ' + formatNumber(item.minPrice) : 'TBC'} - ${item.maxPrice ? 'RM ' + formatNumber(item.maxPrice) : 'TBC'}`
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
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

    _renderCarBrandsList = (data) => {
        if (notEmptyLength(data)) {
            if (data.length > CARBRANDSSIZE) {
                data = _.slice(data, 0, CARBRANDSSIZE);
            }
            let self = this;
            return (
                <Row>
                    <Col span={24}>
                        <div className="d-flex scroller-type" style={{ overflow: 'scroll' }}>
                            {
                                data.map(function (item) {
                                    return (
                                        <Col xs={4} sm={4} md={2} lg={2} xl={2} className="col-centered" style={{ margin: '0px 10px' }} onClick={(e) => {
                                            self.pushParameterToUrl({ make: _.toLower(item.value) }, { page: 1 })
                                        }}>
                                            {/* <div className="wrap-newCar-brand cursor-pointer" onClick={(e) => { self.filterByBrand(item.value); }}> */}
                                            <div className="wrap-newCar-brand cursor-pointer">
                                                <img src={getCarBrandsIcon(_.toLower(item.value))} className="type w-100" />
                                                {/* <p>{_.capitalize(item.value)}</p> */}
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row className="col-centered">
                    <Col span={24} className="col-centered" style={{ margin: '0px 10px' }}>
                        <Empty></Empty>
                    </Col>
                </Row>
            )
        }
    };

    render() {
        return (
            <LayoutV2>
                <div className="section-version3" style={{ marginTop: '20px', touchAction: 'pan-y' }}>
                    <div className="container-version3 padding-sm" id="filter-top">
                        <Row>
                            <Col style={{ textAlign: 'center' }} span={24}>
                                <a href={convertParameterToProductListUrl()} >
                                    <Button style={{ width: '50%', height: '50px', marginTop: '-20px' }} className="padding-top-lg padding-x-lg">
                                    <p style={{ fontWeight: '700' }}> Show All ({this.state.total})  </p>
                                    </Button>
                                </a>
                                {/* <Button style={{ width: '50%', height: '50px', marginTop: '-20px' }} className="padding-top-lg padding-x-lg" onClick={() => { this.props.router.push('/cars-on-sale') }} >
                                    <p style={{ fontWeight: '700' }}> Show All ({this.state.total})  </p>
                                </Button> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                                {this._renderCarBrandsList(notEmptyLength(this.state.filterCarBrands) ? this.state.filterCarBrands : [])}
                                {this.renderSearchFilter()}
                            </Col>

                            <Col span={24} style={{ marginTop: '-10px' }}>
                                <BodyTypeModal
                                    options={notEmptyLength(this.state.filterBodyType) ? this.state.filterBodyType : bodyTypeList}
                                    onSelect={(data) => {
                                        if (_.get(data, ['value'])) {
                                            this.pushParameterToUrl({ bodyType: _.toLower(data.value) }, { page: 1 })
                                        }
                                    }}
                                />
                            </Col>

                            <Col className="stick-column margin-top-md" xs={24} sm={24} md={5} lg={5} xl={5}>
                                <BrandFiltering
                                    options={_.isArray(_.get(this.state.origAvailableFilterOption, ['makeList'])) && !_.isEmpty(_.get(this.state.origAvailableFilterOption, ['makeList'])) ? _.get(this.state.origAvailableFilterOption, ['makeList']) : carBrandsList}
                                    onSelect={(data) => {
                                        if (_.get(data, ['value'])) {
                                            this.pushParameterToUrl({ make: _.toLower(data.value) }, { page: 1 })
                                        }
                                    }}  
                                />
                            </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarMarketHomepage));