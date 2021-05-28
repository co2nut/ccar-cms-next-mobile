import { Button, Col, Divider, Empty, Icon, Row } from 'antd'
import _ from 'lodash'
import { withRouter } from 'next/dist/client/router'
import { connect } from 'react-redux'
import LayoutV2 from '../general/LayoutV2'
import ProductListSkeletonList from './ProductListSkeletonList'



const CarMarketPage = (props) => {



    return (
        <LayoutV2>
            <div className="section-version3">
                <div className='container-version3 padding-x-sm' style={{ touchAction: 'pan-y' }}>
                    <Row gutter={[{ xs: 8, sm: 8, md: 15, lg: 15, xl: 15 }, 16]}>
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={18} xl={18}>

                            <Row className="margin-bottom-md">
                                <Col span={20}>
                                    <span style={{ fontSize: '16px' }}>{0} </span>
                                    <span style={{ fontSize: '16px' }}>Cars for Sale</span>
                                </Col>
                                <Col span={4} style={{ textAlign: 'right' }}>
                                    <div >
                                        <img style={{ width: '40%', height: '20px' }} src="/assets/sorting-2.png"></img>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <span className='flex-items-align-center flex-justify-space-around collapsible-drawer'>
                                        <span className='flex-items-align-center' >
                                            <span className="margin-right-lg" >Brand <Icon type="down" /> </span>
                                            <span className="margin-right-lg" >State <Icon type="down" /> </span>
                                            <span className="margin-right-lg" >Year <Icon type="down" /> </span>
                                            <span className="margin-right-lg" >Price <Icon type="down" /> </span>
                                            <span >Detail <Icon type="down" /> </span>
                                        </span>
                                    </span>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: '10px' }}>
                                <Col span={9}>
                                    <Button style={{ padding: '0px 10px' }} >Condition<Icon type="down" /> </Button>
                                </Col>

                                <Col span={15}>
                                    <Col style={{ paddingRight: '5px' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <div className="w-100 text-truncate-twoline flex-items-align-center" style={{ height: 38, padding: 2, borderRadius: 5, backgroundColor: "#EDECEA", color: "##000000A6" }} value="readyStock" >
                                            <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold", marginBottom: '0px' }}> READY </p>
                                            <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold", marginBottom: '0px' }}> STOCK</p>
                                        </div>
                                    </Col>
                                    <Col style={{ paddingRight: '5px' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <div className="w-100" style={{ alignItems: 'center', paddingTop: '15%', height: 38, borderRadius: 5, backgroundColor: "#EDECEA", color: "##000000A6" }} value="registrationUrl" >
                                            <p style={{ fontSize: "10px", textAlign: "center", fontWeight: "bold", marginBottom: '0px' }}>REG</p>
                                        </div>
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <div className="w-100" style={{ alignItems: 'center', height: 38, paddingLeft: '25%', paddingTop: '10%', borderRadius: 5, backgroundColor: "#EDECEA" }} value="360" >
                                            <img style={{ width: '60%' }} src="/assets/profile/icon-list/carmarket-bar-icon/360.png" />
                                        </div>
                                    </Col>
                                </Col>
                            </Row>

                            <Divider style={{ marginTop: '15px', marginBottom: '10px' }} />

                            <Row style={{ marginBottom: '10px', marginTop: '10px' }} >
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="background-white margin-bottom-xl">
                                    <ProductListSkeletonList />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </div>
            </div>
        </LayoutV2 >
    )
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});


const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarMarketPage))