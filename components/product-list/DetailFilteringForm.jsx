import { Col, Form, Radio } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { convertProductRouteParamsToFilterObject, notEmptyLength, numberToFixed } from '../../common-function';
import { bodyTypeList } from '../../params/bodyTypeList';
import { colorList } from '../../params/colorList';
import { fuelTypeList } from '../../params/fuelTypeList';

const modals = ['make', 'model', 'state', 'area', 'bodyType', 'fuelType'];
const optionsFields = ['transmission', 'businessType', 'item', 'make', 'model', 'state', 'area', 'year', 'price', 'mileage', 'engineCapacity', 'bodyType', 'item', 'fuelType'];
let inputRefs = {};
for (let index = 0; index < optionsFields.length; index++) {
    inputRefs[optionsFields[index] + 'Ref'] = React.createRef();

}

const ARRAY_SEPERATOR = '|'

const engineCapacityOptions = [[1, '<'], [1, 1.6], [1.6, 2.2], [2.2, 2.6], [2.6, 3.0], [3.0, 4.0], [4.0, '>='],
]

const mileageOptions = [[10, '<'], [20, ''], [30, ''], [40, ''], [50, ''], [60, ''], [70, ''], [80, ''], [90, ''], [100, '>=']
]

const DetailFilteringForm = (props) => {

    const [options, setOptions] = useState({});
    const [filterGroup, setFilterGroup] = useState({});

    const activeCircle = (marginLeft) => (<div style={{ width: 10, height: 10, background: "rgb(251, 176, 66)", marginTop: 2, ...marginLeft, borderRadius: 5, border: 'solid 1px #DEDEDE', }} />)


    useEffect(() => {
        getUrlData();
    }, [props.router.query])

    useEffect(() => {
        if (_.isPlainObject(props.options) && !_.isEmpty(props.options)) {
            setOptions(props.options)
        } else {
            setOptions({});
        }

    }, [props.options]);



    function getUrlData() {
        try {
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
            let routeParams = convertProductRouteParamsToFilterObject(query);

            //Condition is not params, is static path
            if (_.isPlainObject(routeParams) && !_.isEmpty(routeParams)) {
                routeParams.filterGroup = routeParams.filterGroup || {};
                routeParams.filterGroup.condition = props.router.pathname.split('/')[1];
                routeParams.filterGroup.condition = _.toLower(routeParams.filterGroup.condition.replace('cars-on-sale', '').split('-')[0] || '');
            }


            setFilterGroup({
                ...filterGroup,
                ...(_.get(routeParams, `filterGroup`) || {}),
            });

        } catch (error) {
            console.log('error', error);
        }
    }

    const _renderColorList = () => {
        let data = colorList;
        let chosenData = []

        if (_.isArray(_.get(options, ['colorList'])) && !_.isEmpty(_.get(options, ['colorList']))) {
            chosenData = _.compact(_.map(colorList, function (item) {
                return _.find(_.get(options, ['colorList']), function (item1) {
                    return _.toLower(item1.value) == _.toLower(item.value)
                }) ? item : null;
            }))
        }

        if (chosenData.length > 0) {
            data = chosenData
        }

        if (_.isArray(data) && !_.isEmpty(data)) {
            return (_.map(data, function (item, index) {

                return (
                    <>
                        {index === 0 ? (
                            <span onClick={(e) => { if (props.onChange) { props.onChange({ color: '' }) } }}>
                                <div style={{
                                    backgroundColor: 'red',
                                    background: '-webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet)',
                                    background: '-o-linear-gradient(right, orange, yellow, green, cyan, blue, violet)',
                                    background: '-moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet)',
                                    background: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)',
                                    // backgroundImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', 
                                    width: 20, height: 20, display: 'inline-block', margin: '0px 6px', verticalAlign: 'middle', border: 'solid 1px #DEDEDE', borderRadius: '50%'
                                }} />
                            </span>
                        ) : null}
                        <span onClick={(e) => {
                            if (props.onChange) {
                                props.onChange({ color: _.toLower(item.value) })
                            }
                        }}>
                            <div style={{ width: 20, height: 20, background: item.code, display: 'inline-block', margin: '0px 6px', verticalAlign: 'middle', border: 'solid 1px #DEDEDE', borderRadius: '50%' }} />
                            {_.isEqual(filterGroup.color, item.value) ? (activeCircle({ marginLeft: 8.5 })) : null}
                        </span>
                    </>
                )
            }))
        } else {
            return null;
        }
    }

    const _renderBodyTypeList = () => {
        let data = bodyTypeList;

        if (_.isArray(_.get(options, ['bodyTypeList'])) && !_.isEmpty(_.get(options, ['bodyTypeList']))) {
            data = _.compact(_.map(bodyTypeList, function (item) {
                return _.find(_.get(options, ['bodyTypeList']), function (item1) {
                    return _.toLower(item1.value) == _.toLower(item.value)
                }) ? item : null;
            }))
        }

        if (_.isArray(data) && !_.isEmpty(data)) {
            return (_.map(data, function (item) {
                return (
                    <Col span={4} onClick={(e) => {
                        if (props.onChange) {
                            props.onChange({ bodyType: _.toLower(item.value) })
                        }
                    }}>
                        <img className="w-100" style={{ width: '80%', height: '100%', border: 'none' }} src={item.icon} />
                        {_.isEqual(filterGroup.bodyType, item.value.toLowerCase()) ? (activeCircle({ marginTop: -10, marginLeft: 14.5 })) : null}
                    </Col>
                )
            }))
        } else {
            return null;
        }
    }

    const _renderFuelTypeList = () => {
        let data = fuelTypeList;

        if (_.isArray(_.get(options, ['fuelTypeList'])) && !_.isEmpty(_.get(options, ['fuelTypeList']))) {
            data = _.compact(_.map(fuelTypeList, function (item) {
                return _.find(_.get(options, ['fuelTypeList']), function (item1) {
                    return _.toLower(item1.value) == _.toLower(item.value)
                }) ? item : null;
            }))
        }

        if (_.isArray(data) && !_.isEmpty(data)) {
            return (_.map(data, function (item) {
                return (
                    <Col span={4} onClick={(e) => {
                        if (props.onChange) {
                            props.onChange({ fuelType: _.toLower(item.value) })
                        }
                    }}>
                        <img className="w-100" style={{ width: '80%', height: '100%', border: 'none' }} src={item.icon} />
                        {_.isEqual(filterGroup.fuelType, item.value.toLowerCase()) ? (activeCircle({ marginLeft: 14.5 })) : null}
                    </Col>
                )
            }))
        } else {
            return null;
        }
    }


    return (
        <React.Fragment>
            <div className="padding-y-md">
                <p style={{ marginBottom: '0px' }}>Transmission</p>
                <Form.Item style={{ margin: '0px', padding: '2px 2px 0px 0px' }}>
                    {/* <Radio.Group className="w-100 condition-form" style={{ textAlign: 'left' }} value={filterGroup.transmission || ''} onChange={(e) => {setFilterGroup({ ...filterGroup, transmission: _.toLower(e.target.value) })}}> */}
                    <Radio.Group className="w-100 condition-form" style={{ textAlign: 'left' }} value={_.get(filterGroup, `transmission`) || ''} onChange={(e) => {
                        setFilterGroup({ ...filterGroup, transmission: _.toLower(e.target.value) })
                        if (props.onChange) {
                            props.onChange({ transmission: _.toLower(e.target.value) })
                        }
                    }}>
                        <span>
                            <Radio.Button value="">
                                <p> All </p>
                            </Radio.Button>
                        </span>
                        <span className="padding-x-sm">
                            <Radio.Button value="automatic">
                                <p> Automatic </p>
                            </Radio.Button>
                        </span>
                        <span>
                            <Radio.Button value="manual">
                                <p> Manual</p>
                            </Radio.Button>
                        </span>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div className="padding-y-md">
                <p style={{ marginBottom: '0px' }}>Color</p>
                <Form.Item style={{ margin: '0px', padding: '2px 2px 0px 0px' }}>
                    <div className="scroller-type d-flex" style={{ overflow: 'scroll' }}>
                        {_renderColorList()}
                    </div>
                </Form.Item>
            </div>

            <div className="padding-y-md">
                <p style={{ marginBottom: '0px' }}>Mileage</p>
                <Form.Item style={{ margin: '0px', padding: '2px 2px 0px 0px' }}>
                    <div className="scroller-type" style={{ overflow: 'scroll', height: '48px' }}>
                        <div style={{ width: '200%' }}>
                            {
                                _.map(mileageOptions, function (mileage) {
                                    return (
                                        <Radio.Button value={notEmptyLength(mileage) ? mileage.join(ARRAY_SEPERATOR) : ''} onClick={(e) => {
                                            if (props.onChange) {
                                                props.onChange({ mileageRange: mileage })
                                            }
                                        }}>
                                            {
                                                mileage[1] || mileage[1] == '<' || mileage[1] == '<=' ?
                                                    `< ${numberToFixed(mileage[0], true, 1)}`
                                                    :
                                                    mileage[1] == '==' ?
                                                        `Equal ${numberToFixed(mileage[0], true, 1)}`
                                                        :
                                                        mileage[1] == '>' || mileage[1] == '>=' ?
                                                            `More Than ${numberToFixed(mileage[0], true, 1)}`
                                                            :
                                                            `${numberToFixed(mileage[0], true, 1)} ${numberToFixed(mileage[1], true, 1)} `
                                            }
                                            {_.isEqual(filterGroup.mileageRange, mileage) ? (activeCircle({ marginLeft: 14.5 })) : null}
                                        </Radio.Button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Form.Item>
            </div>

            <div className="padding-y-md">
                <p style={{ marginBottom: '0px' }}>Body Type</p>
                <Form.Item style={{ margin: '0px', padding: '2px 2px 0px 0px' }}>
                    <div className="scroller-type d-flex" style={{ overflow: 'scroll' }}>
                        {
                            _renderBodyTypeList()
                        }
                    </div>
                </Form.Item>
            </div>

            <div className="padding-y-md">
                <p style={{ marginBottom: '0px' }}>Fuel Type</p>
                <Form.Item style={{ margin: '0px', padding: '2px 2px 0px 0px' }}>
                    {
                        _renderFuelTypeList()
                    }
                </Form.Item>
            </div>

            <div className="padding-y-md">
                <p style={{ marginBottom: '0px' }}>Engine Size (CC)</p>
                <Form.Item style={{ margin: '0px', padding: '2px 2px 0px 0px' }}>
                    <div className="scroller-type" style={{ overflow: 'scroll' }}>
                        <div style={{ width: '200%', height: '50px' }}>
                            {
                                _.map(engineCapacityOptions, function (engineCapacity) {
                                    return (
                                        <Radio.Button onClick={(e) => {
                                            if (props.onChange) {
                                                props.onChange({ engineCapacityRange: engineCapacity })
                                            }
                                        }} value={notEmptyLength(engineCapacity) ? engineCapacity.join(ARRAY_SEPERATOR) : ''}>
                                            {
                                                !engineCapacity[1] || engineCapacity[1] == '<' || engineCapacity[1] == '<=' ?
                                                    `< ${numberToFixed(engineCapacity[0], true, 1)}`
                                                    :
                                                    engineCapacity[1] == '==' ?
                                                        `= ${numberToFixed(engineCapacity[0], true, 1)}`
                                                        :
                                                        engineCapacity[1] == '>' || engineCapacity[1] == '>=' ?
                                                            `> ${numberToFixed(engineCapacity[0], true, 1)}`
                                                            :
                                                            `${numberToFixed(engineCapacity[0], true, 1)} - ${numberToFixed(engineCapacity[1], true, 1)} `
                                            }
                                            {_.isEqual(filterGroup.engineCapacityRange, engineCapacity) ? (activeCircle({ marginLeft: 14.5 })) : null}
                                        </Radio.Button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Form.Item>
            </div>

        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    app: state.app,
    productsList: state.productsList,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(DetailFilteringForm)));