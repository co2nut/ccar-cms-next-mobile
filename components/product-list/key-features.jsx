import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Card, Button, Checkbox, Tabs, Select, message, Empty, Icon, Form } from 'antd';
import _ from 'lodash';
import client from '../../feathers'
import { connect } from 'react-redux';
import { notEmptyLength, removeNullFromArray } from '../../common-function';
import { fetchFeaturesList, updateCheckedFeaturesDate } from '../../redux/actions/productsList-actions';
import moment from 'moment';
import axios from 'axios';
import { withRouter } from 'next/router';
import { loading } from '../../redux/actions/app-actions';

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

const KeyFeatures = (props) => {
    const [id, setId] = useState('')
    const [companyId, setCompanyId] = useState(null)
    const [productDetails, setProductDetails] = useState({})
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

    const _renderFeatures = (data) => {
        if (notEmptyLength(props.productsList.featuresList) && notEmptyLength(data)) {
            let temp = _.filter(props.productsList.featuresList, function (item) {
                return _.includes(data, item.value);
            })
            if (notEmptyLength(temp)) {

                let list = temp.map(function (item) {
                    return (
                        <Col span={12}>
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
                    <Row type="flex" align="middle" gutter={[10, 10]}>
                        {list}
                    </Row>
                )
            }else{
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

    return (
        <div>
            {_renderFeatures(productDetails.features)}
        </div >
    );
}

const mapStateToProps = state => ({
    user: state.user,
    productsList: state.productsList,
});

const mapDispatchToProps = {
    loading:loading,
    fetchFeaturesList: fetchFeaturesList,
    updateCheckedFeaturesDate: updateCheckedFeaturesDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(KeyFeatures)));