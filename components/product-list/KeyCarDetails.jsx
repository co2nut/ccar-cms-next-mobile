import { Col, Row } from 'antd';
import _ from "lodash";
import React, { useEffect, useState } from 'react';

const KeyCarDetails = (props) => {
    const [id, setId] = useState('')
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        if (props.productDetails._id != id) {
            setId(props.productDetails._id)
            setProductDetails(props.productDetails)
        }
    })


    function renderMileageRange(mileage, mileage2) {

        let mileageRange = 0, useMileage = 'no', useMileage2 = 'no'

        if (mileage) {
            if (mileage > 0) {
                mileageRange = mileage
                useMileage = 'yes'
            }
        }

        if (mileage2) {
            if (mileage2 > 0) {
                mileageRange = mileage2
                useMileage2 = 'yes'
            }

        }

        if (typeof mileageRange === 'string') {
            try {
                mileageRange = parseFloat(mileageRange)
            } catch (err) { return mileageRange }
        }

        if (useMileage === 'yes') {

            if (typeof mileageRange === 'number') {
                let mileageFrom = (mileageRange - 2500) / 1000
                let mileageTo = (mileageRange + 2500) / 1000
                mileageRange = mileageFrom + '-' + mileageTo + 'K KM'
            }
            if (_.isEmpty(mileageRange) === true) {
                mileageRange = '0 KM'
            }
            return mileageRange
        }
        else {
            mileageRange = mileageRange / 1000
            return mileageRange + ' KM'
        }
    }


    function renderEngineCapacity(engineCapacity) {
        let engineCapacityStr = '-'
        try {
            if (_.isEmpty(engineCapacity) === false || engineCapacity > 0) {
                engineCapacityStr = parseFloat(engineCapacity).toFixed(2)
            }
            else {
                return '-'
            }
        }
        catch (err) { return '-' }

        return engineCapacityStr + ' CC'
    }



    return (
        <div>
           <Row style={{paddingTop: '12px'}}>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/engine.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline text-overflow-break">Engine Capacity</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.carspecsAll?productDetails.carspecsAll['engine-capacity']: '-'}</p>
                    </Col>
                </Row>
                </Col>
                <Col span={12} style={{alignContent:'right'}}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/year.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Year</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.carspecsAll?productDetails.carspecsAll.year: '-'}</p>
                    </Col>
                </Row>
                </Col>
            </Row>

            <Row style={{paddingTop: '12px'}}>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/transmission.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline text-overflow-break">Transmission</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.carspecsAll?productDetails.carspecsAll['transmission']: '-'}</p>
                    </Col>
                </Row>
                </Col>
                <Col span={12} style={{alignContent:'right'}}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/mileage.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Mileage</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{renderMileageRange(productDetails.mileage, productDetails.mileage2)}</p>
                    </Col>
                </Row>
                </Col>
            </Row>

            <Row style={{paddingTop: '12px' }}>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/seats.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Seats</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.carspecsAll?productDetails.carspecsAll['seatCapacity']: '-'}</p>
                    </Col>
                </Row>
                </Col>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/fuel.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Fuel Type</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.carspecsAll?productDetails.carspecsAll['fuelType']: '-'}</p>
                    </Col>
                </Row>
                </Col>
            </Row>

            <Row style={{ paddingTop: '12px'}}>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/color.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Exterior Color</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.color}</p>
                    </Col>
                </Row>
                </Col>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/color.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Interior Color</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.interiorColor}</p>
                    </Col>
                </Row>
                </Col>
            </Row>

            <Row style={{paddingTop: '12px'}}>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/location.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Location</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.state}</p>
                    </Col>
                </Row>
                </Col>
                <Col span={12}>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={4}>
                        <img style={{width:'80%'}} src="/assets/cardetail/type.png"/>
                    </Col>
                    <Col xs={17} sm={17} md={17} lg={17} xl={18} offset={2}>
                        <p style={{marginBottom:0}} className="headline   text-overflow-break">Car Type</p>
                        <p style={{ fontWeight: '700', textTransform: 'capitalize' }}>{productDetails.newEditInfo?productDetails.newEditInfo.condition: '-'}</p>
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
    );
}

export default KeyCarDetails;