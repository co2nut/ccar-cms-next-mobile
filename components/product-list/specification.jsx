import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Card, Button, Checkbox, Tabs, Select, message, Empty, Icon, Form } from 'antd';
import _ from 'lodash';
import client from '../../feathers'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { notEmptyLength, removeNullFromArray } from '../../common-function';
import { fetchFeaturesList, updateCheckedFeaturesDate } from '../../redux/actions/productsList-actions';
import moment from 'moment';
import axios from 'axios';
import { loading } from '../../redux/actions/app-actions';

// const { width, height } = Dimensions.get('window')
const { TabPane } = Tabs;
const { Option } = Select;
const reviewContainerRef = React.createRef();

// const verticalBarHeight = height - 130;
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

const Specification = (props) => {
    const [id, setId] = useState('')
    const [companyId, setCompanyId] = useState(null)
    const [productDetails, setProductDetails] = useState({ })
    const [carSpecs, setCarSpecs] = useState([])
    const [expandedRow, setExpandedRow] = useState([])
    const [ratings, setRatings] = useState([])
    const [ratingPage, setRatingPage] = useState(1)
    const [ratingTotal, setRatingTotal] = useState(0)
    const [ownRating, setOwnRating] = useState([])

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
            // props.loading(true);
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
        getRatings(0);
    }, [productDetails])


    useEffect(() => {

        getRatings((ratingPage - 1) * RATINGPAGESIZE);
    }, [ratingPage])


    useEffect(() => {
        init();
    }, [productDetails, props.user])



    function init() {
        setRatingPage(1);
        setRatingTotal(0);
        getRatings(0);
        getOwnRating();
    }

    function getRatings(skip) {
        if (productDetails._id) {

            let query = {
                productId: productDetails._id,
                type : 'product',
                $populate: [
                    {
                        path: 'companyId',
                        ref: 'companys'
                    },
                    {
                        path: 'reviewerId',
                        ref: 'users'
                    }
                ],
                $limit: RATINGPAGESIZE,
                $skip: skip,
            }

            if (props.user.authenticated) {
                query.reviewerId = {
                    $ne: props.user.info.user._id,
                }

                query["hideBy.userId"] = {
                    $ne: props.user.info.user._id,
                }
            }
            // props.loading(true);
            client.service('rating').find({
                query
            }).then((res) => {
                props.loading(false);
                if (notEmptyLength(res.data)) {
                    let data = ratings.concat(res.data);
                    setRatingTotal(res.total);
                    setRatings(data);
                }
            })
                .catch((err) => {
                    props.loading(false);
                    message.error(err.message);
                })
        } else {
            setRatings([]);
        }
    }

    function callback(key) {
        console.log(key);
      }

    function getOwnRating() {
        if (productDetails._id && props.user.authenticated) {

            // props.loading(true);
            client.service('rating').find({
                query: {
                    productId: productDetails._id,
                    reviewerId: props.user.info.user._id,
                    $populate: [
                        {
                            path: 'companyId',
                            ref: 'companys'
                        },
                        {
                            path: 'reviewerId',
                            ref: 'users'
                        }
                    ],
                    $limit: 1,
                }

            }).then((res) => {
                props.loading(false);
                if (notEmptyLength(res.data)) {
                    setOwnRating(res.data);
                } else {
                    setOwnRating([]);
                }
            })
                .catch((err) => {
                    props.loading(false);
                    message.error(err.message);
                })
        } else {
            setOwnRating([]);
        }
    }

    return (
        <div className="view-product">
        <Tabs tabPosition='left' defaultActiveKey="1" onChange={callback}>
        <TabPane tab="ENGINE" key="1">
        <div>
                {productDetails.carspecsAll ? (
                    _.uniqBy(productDetails.carspecsAll.specification, ['category','Engine Specifications']).map((v, i) => {
                    return (
                        <div className="desciption-break-into-column-child">
                            {/* <label>{v.category}</label> */}
                            {
                                productDetails.carspecsAll.specification.map((v1,i1) => {
                                    if (v1.category == v.category) {
                                    return (
                                        <div>
                                            <h4 style={{marginBottom:'0px'}}>{v1.field}</h4>
                                            <ul style={{paddingLeft:'20px', marginBottom:'8px'}}>
                                                <li>
                                                    <div style={{backgroundColor:'rgba(202, 202, 202, 0.7)'}}>
                                                        <p style={{marginBottom:'0px', paddingLeft:'5px', paddingTop:'5px', paddingBottom:'5px'}}>{v1.value}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            })
                            }
                                            </div>
                                        )
                                    })
                                ) : null}
            </div>
          {/* <div>
              <h4> Engine CC</h4>
              <p> {_.get(productDetails,['carspecsAll', 'engineCapacity'])}</p>
          </div> */}
        </TabPane>

        <TabPane tab="PERFORMANCE" key="2">
        <div>
                {productDetails.carspecsAll ? (
                    _.uniqBy(productDetails.carspecsAll.specification, ['category','Performance & Economy']).map((v, i) => {
                    return (
                        <div className="desciption-break-into-column-child">
                            {/* <label>{v.category}</label> */}
                            {
                                productDetails.carspecsAll.specification.map((v1) => {
                                    if (v1.category == v.category) {
                                    return (
                                        <div>
                                            <h4 style={{marginBottom:'0px'}}>{v1.field}</h4>
                                            <ul style={{paddingLeft:'20px', marginBottom:'8px'}}>
                                                <li>
                                                    <div style={{backgroundColor:'rgba(202, 202, 202, 0.7)'}}>
                                                        <p style={{marginBottom:'0px', paddingLeft:'5px', paddingTop:'5px', paddingBottom:'5px'}}>{v1.value}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            })
                            }
                                    </div>
                                        )
                                    })
                                ) : null}
            </div>
        </TabPane>
        <TabPane tab="TYRES" key="3">
        <div>
                {productDetails.carspecsAll ? (
                    _.uniqBy(productDetails.carspecsAll.specification, ['category','Tyres & Wheels', 'Wheels & Tyres']).map((v, i) => {
                    return (
                        <div className="desciption-break-into-column-child">
                            {/* <label>{v.category}</label> */}
                            {
                                productDetails.carspecsAll.specification.map((v1) => {
                                    if (v1.category == v.category) {
                                    return (
                                        <div>
                                            <h4 style={{marginBottom:'0px'}}>{v1.field}</h4>
                                            <ul style={{paddingLeft:'20px', marginBottom:'8px'}}>
                                                <li>
                                                    <div style={{backgroundColor:'rgba(202, 202, 202, 0.7)'}}>
                                                        <p style={{marginBottom:'0px', paddingLeft:'5px', paddingTop:'5px', paddingBottom:'5px'}}>{v1.value}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            })
                            }
                                            </div>
                                        )
                                    })
                                ) : null}
            </div>
        </TabPane>
        <TabPane tab="BRAKES" key="4">
        <div>
                {productDetails.carspecsAll ? (
                    _.uniqBy(productDetails.carspecsAll.specification, ['category','Brakes']).map((v, i) => {
                    return (
                        <div className="desciption-break-into-column-child">
                            {/* <label>{v.category}</label> */}
                            {
                                productDetails.carspecsAll.specification.map((v1) => {
                                    if (v1.category == v.category) {
                                    return (
                                        <div>
                                            <h4 style={{marginBottom:'0px'}}>{v1.field}</h4>
                                            <ul style={{paddingLeft:'20px', marginBottom:'8px'}}>
                                                <li>
                                                    <div style={{backgroundColor:'rgba(202, 202, 202, 0.7)'}}>
                                                        <p style={{marginBottom:'0px', paddingLeft:'5px', paddingTop:'5px', paddingBottom:'5px'}}>{v1.value}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            })
                            }
                                            </div>
                                        )
                                    })
                                ) : null}
            </div>
        </TabPane>
      </Tabs>
      </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    productsList: state.productsList,
});

const mapDispatchToProps = {
    loading: loading,
    fetchFeaturesList: fetchFeaturesList,
    updateCheckedFeaturesDate: updateCheckedFeaturesDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(Specification)));