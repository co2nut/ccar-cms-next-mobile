import { Avatar, Button, Card, Col, Divider, Empty, Form, message, Rate, Row, Select, Tabs } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { notEmptyLength, roundToHalf } from '../../common-function';
import client from '../../feathers';
import { loading } from '../../redux/actions/app-actions';
import { fetchFeaturesList, updateCheckedFeaturesDate } from '../../redux/actions/productsList-actions';
import CarspecsCompareTable from '../compare/CarspecsCompareTable';
import { isIOS, isMobile } from 'react-device-detect'
import OverallRating from '../rating/OverallRating';
import RatingProgress from '../rating/RatingProgress';
import WriteReviewButton from '../rating/WriteReviewButton';
import ReviewList2 from '../rating/ReviewList2';
import { carspecRatingCategories } from '../car-review/config';


const { TabPane } = Tabs;
const { Option } = Select;
const reviewContainerRef = React.createRef();

const RATINGPAGESIZE = 4;



const columns = [
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text, row) => {
            if (row.field == 'skip') {
                return {
                    children: <span><strong>{text}</strong></span>,
                    props: {
                        colSpan: 3,
                    },
                };
            } else {
                return {
                    children: <span>{text}</span>,
                };
            }
        },
    },
    {
        title: 'Field',
        dataIndex: 'field',
        key: 'field',
        render: (text, row) => {
            if (text == 'skip') {
                return {
                    props: {
                        colSpan: 0,
                    },
                };
            } else {
                return {
                    children: <span>{text}</span>,
                };
            }
        },
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        render: (text, row) => {
            if (text == 'skip') {
                return {
                    props: {
                        colSpan: 0,
                    },
                };
            } else {
                return {
                    children: <span>{text}</span>,
                };
            }
        },
    },
];

const Description = (props) => {
    const [id, setId] = useState('')
    const [companyId, setCompanyId] = useState(null)
    const [productDetails, setProductDetails] = useState({})
    const [carSpecs, setCarSpecs] = useState([])
    const [expandedRow, setExpandedRow] = useState([])
    const [ratings, setRatings] = useState([])
    const [ratingPage, setRatingPage] = useState(1)
    const [ratingTotal, setRatingTotal] = useState(0)
    const [ownRating, setOwnRating] = useState([])
    const [displayContact, setDisplayContact] = useState(false)
    const [carspecIds, setCarspecIds] = useState([])
    const [ratingCarspec, setRatingCarspec] = useState({});

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (props.productDetails._id != id) {
            setId(props.productDetails._id)
            setProductDetails(props.productDetails)
            setCompanyId(props.productDetails.companys._id)

            let uniqSpec = _.uniqBy(props.productDetails.carspecsAll.specification, 'category')
            let cloneUniqSpec = _.cloneDeep(uniqSpec)
            uniqSpec.map((v, i) => {
                cloneUniqSpec[i].key = i
                cloneUniqSpec[i].children = []
                cloneUniqSpec[i].field = 'skip'
                cloneUniqSpec[i].value = 'skip'
                props.productDetails.carspecsAll.specification.map((v1, i1) => {
                    if (v1.category == v.category) {
                        cloneUniqSpec[i].children.push({ key: i + '' + i1, field: v1.field, value: v1.value })
                    }
                })
            })

            setCarSpecs(cloneUniqSpec)
        }
    })

    useEffect(() => {

        if (!props.productsList.checkedFeaturesDate || moment(props.productsList.checkedFeaturesDate).isBefore(moment(), 'day')) {
            props.loading(true);
            axios.get(`${client.io.io.uri}getFeatureList`).then(res => {
                props.loading(false);
                props.fetchFeaturesList(res.data.data);
                props.updateCheckedFeaturesDate(moment());
            }).catch(err => {
                props.loading(false);
                message.error(err.message)
            });
        }
    }, []);



    useEffect(() => {

        getRatings((ratingPage - 1) * RATINGPAGESIZE);
    }, [ratingPage])


    useEffect(() => {
        init();
        setCarspecIds(_.compact([_.get(productDetails, 'carspecsAll._id')]));
        getRatingCarspec();

    }, [productDetails, props.user])


    function getRatingCarspec() {
        if (_.isPlainObject(_.get(productDetails, 'carspecsAll')) && !_.isEmpty(_.get(productDetails, 'carspecsAll'))) {
            client.service('carspecs').find({
                query: {
                    make: _.get(productDetails, `carspecsAll.make`),
                    model: _.get(productDetails, `carspecsAll.model`),
                    year: _.get(productDetails, `carspecsAll.year`),
                    variant: _.get(productDetails, `carspecsAll.variant`),
                    $limit: 1,
                    $sort: {
                        createdAt: 1,
                    }
                }
            }).then(res => {
                setRatingCarspec(_.get(res, `data[0]`) || {})
            })
        }
    }


    function init() {
        if (ratingPage == 1) {
            getRatings(0);
        } else {
            setRatingPage(1);
        }
        setRatingTotal(0);
    }

    function getRatings(skip) {
        if (_.get(productDetails, ['carspecsId', '_id'])) {

            axios.get(`${client.io.io.uri}getRatedCarspecs`, {
                params: {
                    limit: RATINGPAGESIZE,
                    skip: skip,
                    match: {
                        make: _.get(productDetails, `carspecsAll.make`),
                        model: _.get(productDetails, `carspecsAll.model`),
                        year: _.get(productDetails, `carspecsAll.year`),
                        variant: _.get(productDetails, `carspecsAll.variant`),
                    },
                    userId: _.get(props.user, ['info', 'user', '_id']) || ''
                }
            }).then(res => {
                setRatings(ratingPage == 1 ? _.get(res, 'data.data') : _.concat(ratings, _.get(res, 'data.data') || []))
                setRatingTotal(_.get(res, 'data.total') || 0);
            }).catch(err => {
                message.error(err.message)
            });

        } else {
            setRatings([]);
        }
    }


    const callback = (key) => {
    }

    // function getFeatureText(data) {

    //     switch (data) {
    //         case "abs":
    //             return 'ABS';
    //         case "adjustablesteeringwheel":
    //             return 'Adjustable Steering Wheel';
    //         case "airbags":
    //             return "Air bags"
    //         case "alarm":
    //             return "Alarm"
    //         case "blindspotmonitor":
    //             return "Blind spot monitor"
    //         case "bodykits":
    //             return "Body Kits"
    //         case "brakeassist":
    //             return "Brake Assist"
    //         case "bucketseat":
    //             return "Bucket Seat"
    //         case "cdplayer":
    //             return "Cd Player"
    //         case "centrallocks":
    //             return "Central Locks"
    //         case "centraltouchscreen":
    //             return "Central touchscreen"
    //         case "childsafetylock":
    //             return "Child safety lock"
    //         case "cruisecontrol":
    //             return "Cruise Control"
    //         case "daytimerunninglights":
    //             return "Daytime running lights"
    //         case "driveradjustablelumbar":
    //             return "Driver adjustable lumbar"
    //         case "drivervanityminor":
    //             return "Driver Vanity minor"
    //         case "electricseat":
    //             return "Electric Seat"
    //         case "foglamps":
    //             return "Fog Lamps"
    //         case "frontwheeldrive":
    //             return "Front Wheel Drive"
    //         case "gpsnavigation":
    //             return "GPS Navigation"
    //         case "heatedfrontseat":
    //             return "Heated Front Seat"
    //         case "keylessstart":
    //             return "Keyless Start"
    //         case "lanedeparturewarning":
    //             return "Lane departure warning"
    //         case "leatherseats":
    //             return "Leather Seats"
    //         case "manufacturerwarranty":
    //             return "Manufacturer Warranty"
    //         case "mp3players":
    //             return "MP3 Players"
    //         case "multifunctionsteering":
    //             return "Multi Function Steering"
    //         case "paddleshift":
    //             return "Paddle Shift"
    //         case "parkingsensor":
    //             return "Parking Sensor"
    //         case "passangerilluminatedvisormirror":
    //             return "Passanger Illuminated visor mirror"
    //         case "powersteering":
    //             return "Power Steering"
    //         case "powerwindow":
    //             return "Power Window"
    //         case "reardefrost":
    //             return "Rear Defrost"
    //         case "reservecamera":
    //             return "Reserve Camera"
    //         case "sportrims":
    //             return "Sport rims"
    //         case "stabilitycontrol":
    //             return "Stability Control"
    //         case "steeringwheelaudio":
    //             return "Steering Wheel Audio"
    //         case "sunroof/moonroof":
    //             return "Sunroof / Moonroof"
    //         case "telematics":
    //             return "Telematics"
    //         case "tripcomputer":
    //             return "Trip Computer"
    //         case "usb":
    //             return "USB"
    //         case "wheellock":
    //             return "Wheel lock"
    //         case "windowtint":
    //             return "Window Tint"
    //         case "wipes":
    //             return "Wipes"
    //         default:
    //             return null;
    //     }
    // }

    function expandAllRow() {
        if (notEmptyLength(carSpecs)) {
            let keys = _.map(carSpecs, 'key');
            if (notEmptyLength(keys)) {
                setExpandedRow(keys);
            }
        } else {
            setExpandedRow([]);
        }
    }

    function shrinkAllRow() {
        setExpandedRow([]);
    }

    const _renderFeatures = (data) => {
        if (notEmptyLength(props.productsList.featuresList) && notEmptyLength(data)) {
            let temp = _.filter(props.productsList.featuresList, function (item) {
                return _.includes(data, item.value);
            })
            if (notEmptyLength(temp)) {

                let list = temp.map(function (item) {
                    return (
                        <Col span={8}>
                            <div className="flex-justify-start flex-items-align-center padding-x-sm fill-parent ">
                                {/* <div className="round-border wrapBorderRed" style={{width:'50px', height:'50px'}}> */}
                                <span className="margin-x-sm relative-wrapper" style={{ height: "30px", width: '30px' }}>
                                    <img src={item.icon ? item.icon : null} className="fill-parent absolute-center" />
                                </span>
                                {/* </div> */}
                                <span className="padding-sm headline flex-justify-center flex-items-align-center text-truncate-threeline">
                                    {item.text ? item.text : null}
                                </span>
                            </div>
                        </Col>
                    );
                })

                return (
                    <div style={{ minHeight: 500 }}>
                        <Row type="flex" align="middle" gutter={[10, 10]} >
                            {list}
                        </Row>
                    </div>
                )
            } else {
                return <Empty
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
            }


        } else {

            return <Empty
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
        }
    }

    const _renderExpandButton = () => {
        return (
            <React.Fragment>

                <Button icon="arrows-alt" onClick={expandAllRow} className="background-ccar-yellow margin-x-sm">
                    Expand All
            </Button>
                <Button icon="shrink" onClick={shrinkAllRow} className="margin-x-sm">
                    Shrink All
            </Button>
            </React.Fragment>
        )
    }

    function changeProductDetails(data, type) {

        if (_.isEmpty(data) === true) { return }
        let dataString = _.cloneDeep(data)
        // let phoneFormat = /((601)|(01))[0-46-9]*[0-9]{7,10}/gim
        // let phoneFormat2 = /([601]|[01]|)[0-46-9]-*[0-9]{7,10}/g
        // let phoneFormat3 = /((\+6 01)|(01))[0-46-9]*[0-9]{7,10}/gim
        // let phoneFormat4 = /((\+6 0[0-9][0-9]))\-[0-9]{0,3} [0-9]{0,4}/gim
        // let phoneFormat5 = /((\+6 0[0-9][0-9]))\-[0-9]{0,4} [0-9]{0,4}/gim

        let phoneFormat = [
            // /((601)|(01))[0-46-9]*[0-9]{7,10}/gim,
            // /([601]|[01]|)[0-46-9]-*[0-9]{7,10}/g,
            // /((\+6 01)|(01))[0-46-9]*[0-9]{7,10}/gim,
            // /((\+6 0[0-9][0-9]))\-[0-9]{0,3} [0-9]{0,4}/gi,
            // /((\+6 0[0-9][0-9]))\-[0-9]{0,4} [0-9]{0,4}/gi,
            // /((\+6 0[0-9][0-9]))\-[0-9]{0,4} [0-9]{0,4}/gi,
            /([0-9]{2} [0-9]{2}- [0-9]{3} [0-9]{4})|([0-9]{2} [0-9]{2}- [0-9]{4} [0-9]{4})|([0-9]{3}- [0-9]{3} [0-9]{4})|([0-9]{2} [0-9]{2}-[0-9]{4} [0-9]{4})|([0-9]{2} [0-9]{2}-[0-9]{3} [0-9]{4})|([0-9]{3} - [0-9]{4} [0-9]{3})|([0-9]{3} [0-9]{4} [0-9]{3})|([0-9]{3} [0-9]{4} [0-9]{4})|([0-9]{3}-[0-9]{4}-[0-9]{4})|([0-9]{3}-[0-9]{3}-[0-9]{4})|(6[0-9]{3}.[0-9]{7})|(6[0-9]{3}.[0-9]{8})|(6[0-9]{3}.[0-9]{7})|(6 [0-9]{3}.[0-9]{3} [0-9]{4})|(6 [0-9]{3}.[0-9]{4} [0-9]{4})|(\+6 [0-9]{3}-[0-9]{3} [0-9]{4})|([0-9]{3}-[0-9]{3} [0-9]{4})|([0-9]{3}-[0-9]{4} [0-9]{4})|([0-9]{3}-[0-9]{4} [0-9]{3})|([0-9]{3}-[0-9]{8})|([0-9]{3} [0-9]{8})|([0-9]{3} [0-9]{7})|([0-9]{3}-[0-9]{7})|([0-9]{11})|([0-9]{10})|([0-9]{4} [0-9]{3} [0-9]{4})|([0-9]{4} [0-9]{4} [0-9]{4})|([0-9]{3} [0-9]{3} [0-9]{4})|([0-9]{2} [0-9]{2} [0-9]{4} [0-9]{4})|([0-9]{2} [0-9]{2} [0-9]{3} [0-9]{4})/gi
        ]

        dataString = dataString.split('\n')
        dataString = dataString.map(function (v) {

            if (_.isEmpty(v) === true) { return <br /> }

            let v2 = v
            let n = [],s =[]
            let currentphoneFormat = ''
            for (let i = 0; i < phoneFormat.length; i++) {
                 currentphoneFormat = phoneFormat[i];
                 n=  v.match(currentphoneFormat);
                 if(n!==null){break;}
            }
            n = _.without(n,'')
            // let n = v.match(phoneFormat);
            // if (n !== null) { let s = v.split(phoneFormat); }
            // else if (n !== null) { let s = v.split(phoneFormat); }


            let x = ''
            if (_.isEmpty(n) === true) { return <p style={{ marginBottom: '0em' }}>{v2}</p> }

            s = v.split(n)

            x = s.map(function (v, i) {

                if (n[i]) {
                    if (type === 'callContact') {

                            let linkvalue = n[i]
                        // if (n[i].charAt(0) !== '6') {
                        //     if(n[i].charAt(0)==='+'){
                                
                        //     }
                        //     else{
                        //     n[i] = '6' + n[i]
                        // }
                        // }
                        linkvalue = linkvalue.replace(/\+/g, '')
                        linkvalue = linkvalue.replace(/\s/g, '')
                        linkvalue = linkvalue.replace(/-/g, '')
                        if (linkvalue.charAt(0) !== '6') {
                                linkvalue = '6' +linkvalue
                        }

                        if (isMobile) {
                            v = <><>{v}</> <a className='contactShow'
                                target={'_blank'}
                                href={"tel:" + linkvalue}
                            >{n[i]}</a></>
                        }
                        else {

                            let username = ''
                            try {
                                username = productDetails.createdBy.namePrefix + ' ' + productDetails.createdBy.fullName
                            }
                            catch (err) { username = '' }

                            v = <><>{v}</> <a className='contactShow'
                                target={'_blank'}
                                href={
                                    "https://web.whatsapp.com/send?phone="
                                    + linkvalue.replace('+', '') + "&text=Hi "
                                    + username
                                    + ", I am interested in your car ad on ccar.my and I would like to know more about "
                                    + productDetails.title
                                    + " (RM "
                                    + productDetails.price.toFixed(2) + "). Thank you. https://ccar.my/viewCar/"
                                    + productDetails._id}

                            >{n[i]}</a></>
                        }
                    }
                    else {
                        v = <><>{v}</> <span className='contactHide' onClick={() => { setDisplayContact(true) }}>(Click to View Contact No.)</span></>
                    }
                }
                return v
            })
            return <p style={{ marginBottom: '0em' }}>{x}</p>
        })
        return dataString
    }

    return (
        <div>
            <Row gutter={[0, 10]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                        <div className=" padding-md flex-justify-end flex-items-align-center" style={{marginTop:'-30px', padding:0, marginBottom:'5px'}}>
                            <WriteReviewButton
                                title={_.trim(`Review on ${_.get(ratingCarspec, ['make']) || ''} ${_.get(ratingCarspec, ['model']) || ''} ${_.get(ratingCarspec, ['variant']) || ''}`)}
                                data={{ type: 'carspec', carspecId: _.get(ratingCarspec, ['_id']) || '', reviewerId: props.user.authenticated ? props.user.info.user._id : null }}
                                mode="add"
                                handleError={(e) => { message.error(e.message) }}
                                readOnly={props.readOnly}
                                button={() => {
                                    return (
                                        <Button style={{ color: '#F57F17' }}><Avatar src={'/assets/add-post/create-post.png'} shape="square" size="small" className="margin-right-md" /> Write a Review</Button>
                                        )
                                    }}
                                    onCreate={(data) => {
                                        if (_.isPlainObject(data) && !_.isEmpty(data)) {
                                            data.carspecId = ratingCarspec;
                                            setRatings(_.compact(_.concat([data], ratings || [])))
                                            getRatingCarspec();
                                        }
                                    }}
                            />
                        </div>
                        <OverallRating rating={_.get(ratingCarspec, ['avgRating']) || 0} total={_.get(ratingCarspec, ['totalRating']) || 0} />
                        <RatingProgress 
                            data={_.get(ratingCarspec, ['ratingCategory']) || []}
                            total={_.get(ratingCarspec, ['totalRating']) || 0}
                            size={5}
                            labels={[1,2,3,4,5]}
                    /> 

                    <Row className="text-align-center">
                        {
                            _.map(carspecRatingCategories, function (carspecRatingCategory) {
                            return (
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Rate value={roundToHalf(_.get(ratingCarspec, `carspecAvgRating[${carspecRatingCategory.value}]`) || 0)} allowHalf disabled />
                                        <div className="headline">
                                            {carspecRatingCategory.name}
                                        </div>
                                </Col>
                                    )
                            })
                        }
                    </Row>
                    </div>
                </Col>
            </Row>
                <Row>
                    <div className="fill-parent margin-top-md">
                        {
                            notEmptyLength(ratings) ?
                            <div className="fill-parent padding-right-md wrapBorderRed" style={{ display: 'inline-block', overflowX: 'hidden', overflowY: "scroll", maxHeight: '500px', border: 'none' }}>
                                <ReviewList2 data={ratings}
                                    onChange={(e) => {
                                    if (_.isPlainObject(e) && !_.isEmpty(e)) {
                                    setRatings(_.map(ratings, function (rating) {
                                    if (_.get(rating, `_id`) == _.get(e, `_id`)) {
                                    return e;
                                    }
                                    return rating;
                                    }))
                                    }
                                   }}
                                />
                            </div>
                            :
                            (
                                <div style={{ height: '15em', backgroundColor: '#FFFFFF' }}>
                                <Empty
                                    style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
                                    image="/empty.png"
                                    imageStyle={{
                                        height: 60,
                                    }}
                                    description={
                                        <span>
                                            No Review Yet
                                        </span>
                                        }
                                    >
                                </Empty>
                                </div>
                            )
                        }
                            </div>
                    </Row>
        </div >
    );
}

const mapStateToProps = state => ({
    user: state.user,
    app: state.app,
    productsList: state.productsList,
});

const mapDispatchToProps = {
    loading: loading,
    fetchFeaturesList: fetchFeaturesList,
    updateCheckedFeaturesDate: updateCheckedFeaturesDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(Description)));