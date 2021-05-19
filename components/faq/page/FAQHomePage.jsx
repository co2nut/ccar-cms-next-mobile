import { Col, Divider, Icon, Input, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { faqBanner } from '../../../icon';
import LayoutV2 from '../../general/LayoutV2'; 
import { faqTopics } from '../config';


const FAQIndex = (props) => {
    function redirect(key) {
        props.router.push(`/faq/details?tab=${key}`)
    }


    return (
        <LayoutV2>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="width-100 flex-justify-center flex-align-center flex-wrap" style={{ backgroundImage: `url("${faqBanner}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '40vh', backgroundPosition:'center' }} >
                        <div className="faq-banner">
                            <img src="/assets/Artboard-3-2.svg"></img>
                        </div>
                        <div className="faq-banner-1">
                            We are here to help you
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="section">
                        <div className="container">

                            <Row gutter={[0, 20]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="yellow-divider">
                                    <Divider> <span className='d-inline-block h6 font-weight-bold grey-darken-3' > FAQ </span></Divider>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Row gutter={[20, 20]}>
                                        {
                                            _.map(faqTopics, function (faqTopic) { 
                                                return (
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <div className="round-border box-shadow-normal flex-align-center flex-justify-center flex-wrap cursor-pointer hover-background-yellow-lighten-4" style={{ height: 150 }} onClick={(e) => {
                                                            props.router.push(faqTopic.path)
                                                        }}>
                                                            <div className="flex-items-align-center flex-justify-center black flex-items-no-shrink width-100 margin-bottom-sm">
                                                                <img src={faqTopic.icon} style={{ width: 50, height: 50 }} />
                                                            </div>
                                                            <div className="flex-items-align-center flex-justify-center black flex-items-no-shrink width-100">
                                                                {faqTopic.text || ''}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </LayoutV2>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FAQIndex));