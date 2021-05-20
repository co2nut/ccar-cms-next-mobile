import { AutoComplete, Button, Col, Divider, Empty, Input, message, Row, Tabs } from 'antd';
import axios from 'axios';
import _ from "lodash";
import moment from 'moment';
import BannerAnim, { Element } from 'rc-banner-anim';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { bodyTypeOri } from '../../../params/bodyTypeOri';
import { fuelTypeList } from '../../../params/fuelTypeList';
import { carBrandsList, getCarBrand, getCarBrandsIcon } from '../../../params/carBrandsList';
import { withRouter } from 'next/router';
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions';
import Link from 'next/link';
import { fetchBrandDetail, fetchClub, fetchFuel, fetchNewCarFilterGroup, fetchNews, fetchPopularCars } from '../../../redux/actions/newcars-actions';
import client from '../../../feathers';
import GlobalSearchBar from '../../general/global-search-bar';
import LayoutV2 from '../../general/LayoutV2';
import SocialNewTabs from '../../news/social-new-tabs';
import SocialVideoTabs from '../../news/social-video-tabs';
import { formatNumber, isValidNumber, notEmptyLength, queryStringifyNestedObject, arrayLengthCount } from '../../../common-function';
import { routePaths } from '../../../route';
import BrandFiltering from '../BrandFiltering';

const BgElement = Element.BgElement;
var PAGESIZE = 8
const CARBRANDSSIZE = 8;
const { TabPane } = Tabs;
const { TextArea } = Input;
const image2 = '../BMW2.jpg'
const { Option, OptGroup } = AutoComplete;
const searchBarRef = React.createRef();

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

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

const CAROUSEL_ITEM_HEIGHT = '500px'
const BODY_TYPE_LENGTH = 8
// const {Option} = Select;
const { Search } = Input;

const priceRangeOptions = [[50000, '<'], [50000, 100000], [100000, 200000], [200000, 400000], [400000, 600000], [600000, 800000], [800000, 1000000], [1000000, '>='],
];


class NewCarVersion3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            news: [],
            club: [],
            bodyType: 'sedan',
            priceRangeSearch: [],
            popularCars: [],
            availabeCarBrands: [],
            filterCarBrands: [],
            comments: [],
            submitting: false,
            value: '',
            visible: false,
            hideSearchBar: true,
            brandDetail: [],
            filterAnd: {
                $and: [
                    { 'price': { $gte: +(0) } },
                    { 'price': { $lte: +(188763) } }
                ]
            },
            sorting: '',
            fuel: [],
            videoPosition: 0,
            window: {},

        };

        this.filterByBrand = this.filterByBrand.bind(this);
    }

    handleScroll = (e) => {
        this.checkForHiddenSearchBar();
    };

    checkForHiddenSearchBar() {

        if (!searchBarRef || !searchBarRef.current) {
            return;
        } else {
            let data = searchBarRef.current.getBoundingClientRect();
            if (!data.height || !data.y || !this.state.window.innerHeight || !this.props.app) {
                return;
            } else {
                let searchBarHeight = data.height;
                let searchBarPositionY = data.y;
                let windowHeight = this.state.window.innerHeight;
                let menuHeight = isValidNumber(this.props.app.menuHeight) ? parseInt(this.props.app.menuHeight) : 90;
                let minScreenHeight = 0 + menuHeight;
                let maxScreenHeight = windowHeight;

                this.setState({
                    hideSearchBar: (searchBarPositionY + searchBarHeight >= minScreenHeight && searchBarPositionY + searchBarHeight <= maxScreenHeight)
                })
            }
        }
    }

    callback = (key) => {
        if (key == 1) {
            this.setState({
                filterAnd: {
                    $and: [
                        { 'price': { $gte: +(0) } },
                        { 'price': { $lte: +(188763) } }
                    ]
                },
                sorting: 'price:1'
            }, () => this.getData(0))
        } else if (key == 2) {
            this.setState({ sorting: 'year:-1', filterAnd: {} }, () => this.getData(0))
        } else if (key == 3) {
            this.setState({
                filterAnd: {
                    $and: [
                        { 'price': { $gte: +(0) } },
                        { 'price': { $lte: +(188763) } }
                    ]
                },
                sorting: 'price:1'
            }, () => this.getData(0))
        } else if (key == 4) {
            this.setState({
                filterAnd: {
                    $and: [
                        { 'price': { $gte: +(0) } },
                        { 'price': { $lte: +(30000) } }
                    ]
                },
                sorting: 'price:1'
            }, () => this.getData(0))
        } else if (key == 5) {
            this.setState({
                filterAnd: {
                    $and: [
                        { 'price': { $gte: +(20000) } },
                        { 'price': { $lte: +(60000) } }
                    ]
                },
                sorting: 'price:1'
            }, () => this.getData(0))
        } else if (key == 6) {
            this.setState({
                filterAnd: {
                    $and: [
                        { 'price': { $gte: +(60000) } },
                        { 'price': { $lte: +(100000) } }
                    ]
                },
                sorting: 'price:1'
            }, () => this.getData(0))
        } else if (key == 7) {
            this.setState({
                filterAnd: {
                    $and: [
                        { 'price': { $gte: +(100000) } },
                    ]
                },
                sorting: 'price:1'
            }, () => this.getData(0))
        } else {
            this.setState({ filterAnd: {} }, this.getData(0))
        }
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    getData = (skip) => {

        this.props.loading(true)
        axios.get(`${client.io.io.uri}priceRangeSearchNew`,
            {
                params: {
                    // sorting: this.state.sorting,
                    match: {
                        ...this.state.filterAnd,
                    },
                    newCar: 'yes',
                    limit: PAGESIZE + skip,
                    skip: skip,
                    sorting: this.state.sorting
                }
            }
        ).then((res) => {
            this.props.loading(false);

            if (res.data.data.length > 0) {
                this.props.fetchPopularCars(res.data.data)
            } else {
                this.props.fetchPopularCars([])
            }
            this.props.fetchBrandDetail(res.data.data)
        })
            .catch((err) => {
                this.props.loading(false);
                console.log(err)
                message.error(err.message);
            })
    }

    customfunction() {
        this.props.loading(true)
        client.service('news').find({
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 5,
                publisher: { $ne: 'youtube' }
            }
        }).then((res) => {
            this.props.loading(false);
            if (res.data.length > 0) {
                this.props.fetchNews(res.data)
            }
        }).catch(err => {
            this.props.loading(false);
            message.error(err.message)
        });

        this.props.loading(true)
        client.service('news').find({
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 6,
                publisher: 'youtube'
            }
        }).then((res) => {
            this.props.loading(false);
            if (res.data.length > 0) {
                this.props.fetchClub(res.data)
            }
        }).catch(err => {
            this.props.loading(false);
            message.error(err.message)
        });
    }

    getFuelPrice() {
        this.props.loading(true)
        client.service('fuelprices').find({
            query: {
                $sort: {
                    createdAt: -1
                },
                name: { $in: ['euro5', 'ron97', 'ron95', 'ron100', 'vpr', 'euro2m'] }
            }
        }).then((res) => {
            this.props.loading(false);
            this.props.fetchFuel(res.data);
        }).catch(err => {
            this.props.loading(false);
            message.error(err.message)
        });
    }

    UNSAFE_componentWillMount() {
        this.customfunction()
        this.callback('5')
        // this.getData(0)
        this.getFuelPrice()

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
        this.checkForHiddenSearchBar();
        this.setState({
            window: window,
        })

        let windowHeight = this.state.window.innerHeight;
        let windowWidth = this.state.window.innerWidth;

        let calculateRatio = 100 - parseFloat(parseFloat((1 - ((2400 - windowWidth) / 2400)) * 100).toFixed(0))
        this.setState({
            videoPosition: calculateRatio
        });


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

        if (!_.isEqual(prevState.window, this.state.window)) {
            this.state.window.addEventListener('scroll', this.handleScroll, { passive: true });

            return () => {
                this.state.window.removeEventListener('scroll', this.handleScroll);
            };
        }
    }

    filterByBrand(data) {
        if (data) {
            this.props.fetchNewCarFilterGroup({ ...this.props.newCars.newCarFilterGroup, make: _.toLower(data) });
            this.props.router.push('/newcar/filter');
        }
    }

    renderFilterCarsTabs = () => {
        if (arrayLengthCount(_.get(this.props, ['newCars', 'popularCars'])) > 0) {
            return (
                this.props.newCars.popularCars.map(function (item, i) {
                    return (
                        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} key={i}>
                            <Desktop>
                                <Link shallow={false} href={routePaths.newCarDetails.to || '/'} as={typeof (routePaths.newCarDetails.as) == 'function' ? routePaths.newCarDetails.as(item) : '/'} passHref >
                                    <a>
                                        <div className="newcars-uniqBy-model cursor-pointer" style={{ height: 320 }} >
                                            <img src={item.uri} style={{ width: '100%', padding: '5px' }}></img>
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
                            </Desktop>

                            <Tablet>
                                <Link shallow={false} href={routePaths.newCarDetails.to || '/'} as={typeof (routePaths.newCarDetails.as) == 'function' ? routePaths.newCarDetails.as(item) : '/'} passHref >
                                    <a>
                                        <div className="newcars-uniqBy-model cursor-pointer" style={{ height: 230 }} >
                                            <img src={item.uri} style={{ width: '100%', padding: '5px' }}></img>
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
                            </Tablet>

                            {/* <div className="car-tab">
                  <img src={item.uri} style={{ width: "100%", padding:'10px'}} />
                  <p className="overlay-car-name" style={{textTransform:'capitalize', textAlign:'center', fontSize:'18px'}}> {item.make} {item.model}</p>
              </div> */}
                        </Col>
                    )
                })
            )
        } else {
            return (
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
            )
        }
    }

    renderSearchFilter() {
        const { size } = this.state;
        let self = this;

        return (
            <div className="menu" id="calling-menu">

                <Row>
                    <div className="scroller-type d-flex" style={{ overflow: 'scroll', marginTop: '-15px' }}>
                        {bodyTypeOri.map((v, i) => {
                            if (i > 0) {
                                return (
                                    <Col className="cartype" style={{ marginRight: '10px' }} xs={6} sm={6} md={2} lg={2} xl={2} key={`bodyType-${i}`}>
                                        <div className="type cursor-pointer" onClick={() => {
                                            this.setState({ bodyType: (v.value).toLowerCase() }
                                            );
                                            this.props.router.push(`/newcar/filter?${queryStringifyNestedObject({ bodyType: v.value.toLowerCase(), page: 1 })}`)
                                        }
                                        }>
                                            <img src={v.icon} />
                                            <p style={{ marginTop: '-12px', textAlign: 'center', fontWeight: '700', textTransform: 'capitalize', marginBottom: '0px' }}> {v.value} </p>
                                        </div>
                                        {/* <p style={{color:'black', textAlign:'center', paddingTop:'10px'}}> {v.value}</p> */}
                                    </Col>
                                )
                            }
                        })}
                    </div>
                </Row>

                <Row style={{ marginTop: '10px' }}>
                    <div className="scroller-type d-flex" style={{ overflow: 'scroll' }}>
                        {fuelTypeList.map((v, i) => {
                            if (i == 0) {
                                return (
                                    <Col className="cartype" style={{ marginRight: '10px' }} xs={4} sm={4} md={4} lg={4} xl={4} key={`fuelType-${i}`}>
                                        <div className="type cursor-pointer" onClick={() => {
                                            this.setState({ fuelType: (v.value).toLowerCase() }
                                                // ,()=>this.getData(0) 
                                            );
                                            this.props.router.push(`/newcar/filter?${queryStringifyNestedObject({ fuelType: v.value.toLowerCase(), page: 1 })}`)
                                        }
                                        }>
                                            <img src={v.icon} />
                                            <p style={{ textAlign: 'center', fontWeight: '700', textTransform: 'capitalize', marginBottom: '0px' }}> {v.value} </p>
                                        </div>
                                        {/* <p style={{color:'black', textAlign:'center', paddingTop:'10px'}}> {v.value}</p> */}
                                    </Col>
                                )
                            }
                            else {
                                return (
                                    <Col className="cartype" style={{ marginRight: '10px' }} xs={4} sm={4} md={4} lg={4} xl={4} key={`fuelType-${i}`}>
                                        <div className="type cursor-pointer" onClick={() => {
                                            this.setState({ fuelType: (v.value).toLowerCase() }
                                                // ,()=>this.getData(0) 
                                            );
                                            this.props.router.push(`/newcar/filter?${queryStringifyNestedObject({ fuelType: v.value.toLowerCase(), page: 1 })}`)
                                        }
                                        }>
                                            <img src={v.icon} />
                                            <p style={{ textAlign: 'center', fontWeight: '700', textTransform: 'capitalize', marginBottom: '0px' }}> {v.value} </p>
                                        </div>
                                        {/* <p style={{color:'black', textAlign:'center', paddingTop:'10px'}}> {v.value}</p> */}
                                    </Col>
                                )
                            }
                        })}
                    </div>
                </Row>

                <Row style={{ marginTop: '10px' }}>
                    <Col span={24}>
                        <div className="d-flex scroller-type margin-x-sm" style={{ overflow: 'scroll' }}>
                            {
                                _.map(priceRangeOptions, function (priceRange) {
                                    return (
                                        <Button className="margin-x-sm" onClick={() => {
                                            self.props.router.push(`/newcar/filter?${queryStringifyNestedObject({ priceRange: priceRange, page: 1 })}`)
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
            </div>
        );
    }

    _renderCarBrandsList = (data) => {
        if (notEmptyLength(data)) {
            if (data.length > CARBRANDSSIZE) {
                data = _.slice(data, 0, CARBRANDSSIZE);
            }
            let self = this;
            return (
                <Row className="col-centered">
                    {
                        data.map(function (item) {
                            return (
                                <Col xs={4} sm={4} md={2} lg={2} xl={2} className="col-centered" style={{ margin: '0px 10px' }}>
                                    <Link shallow={false} href={routePaths.newCarFilter.to || '/'} as={typeof (routePaths.newCarFilter.as) == 'function' ? routePaths.newCarFilter.as({ make: item.value }) : '/'} passHref>
                                        <a>
                                            <div className="wrap-newCar-brand cursor-pointer" onClick={(e) => { self.filterByBrand(item.value); }}>
                                                <img src={getCarBrandsIcon(_.toLower(item.value))} className="type w-100" />
                                                {/* <p>{_.get(getCarBrand(item.value), 'value') || _.capitalize(item.value)}</p> */}
                                            </div>
                                        </a>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="flex-justify-start flex-items-align-center width-100">
                            <span className='d-inline-block width-100' >
                                <Divider style={{ margin: 0 }}></Divider>
                            </span>
                            <span className='d-inline-block flex-items-no-shrink text-align-right margin-left-md' onClick={() => {

                                let path = '/';
                                // if (quickFilterType == 'carMarket') {
                                //     path = convertParameterToProductListUrl(null, null);
                                // } else {
                                path = `/newcar/filter`
                                // }
                                this.props.router.push(path);
                            }} >
                                <Button className="background-ccar-button-yellow border-ccar-button-yellow black padding-x-lg" >More</Button>
                            </span>
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
            <LayoutV2 hideSearchBar={this.state.hideSearchBar}>
                <div className="section-version3" style={{ marginTop: '20px' }}>
                    <div className="container-version3 padding-sm" id="filter-top" style={{ touchAction: 'pan-y' }} >
                        <Row>
                            <Col xs={24} sm={24} md={19} lg={19} xl={19} style={{ marginBottom: '-15px' }}>
                                {this.renderSearchFilter()}
                            </Col>
                            <Col span={24} style={{ marginTop: '5px' }}>
                                <BrandFiltering
                                    showCount={false}
                                    showModel={false}
                                    options={notEmptyLength(this.state.filterCarBrands) ? this.state.filterCarBrands : []}
                                    onSelect={(brand, model) => {
                                        if (_.get(brand, 'value')) {
                                            this.props.router.push(`/newcar/filter?${queryStringifyNestedObject({ make: brand.value.toLowerCase(), page: 1 })}`)
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
    newCars: state.newcars || state.newCars,
    app: state.app,
});

const mapDispatchToProps = {
    loading: loading,
    fetchNews: fetchNews,
    fetchClub: fetchClub,
    fetchPopularCars: fetchPopularCars,
    fetchBrandDetail: fetchBrandDetail,
    updateActiveMenu: updateActiveMenu,
    fetchFuel: fetchFuel,
    fetchNewCarFilterGroup: fetchNewCarFilterGroup,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewCarVersion3));