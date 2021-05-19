import { Col, Row } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import LayoutV2 from '../../general/LayoutV2';
import { updateActiveMenu } from '../../../redux/actions/app-actions';


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

class AboutUsIndex extends React.Component{

    componentDidMount = () => {
        this.props.updateActiveMenu('9');
    }

    render(){

        return (
            <LayoutV2>
                <div className="section-version3">
                    <div style={{touchAction:'pan-y'}} className="container-version3 background-white">

                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="margin-md">
                                    <h1> Who We Are:</h1>
                                    <p>An all-in-one integrated service enabler where people can purchase and sell their cars, 
                                        share their thoughts and get insights on anything that relates to automobiles from our platform.
                                    </p>
                                    <div>
                                        <img style={{width:'50%'}} src="/assets/about-us/about_us_1.jpg"></img>
                                        <br></br>
                                        <img style={{width:'50%', marginLeft:'115px', marginTop:'-80px'}} src="/assets/about-us/about_us_2.jpg"></img>
                                    </div>
                                </div>

                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                {/* <img className="width-100" src="/assets/about-us/about_ut_2.png"></img> */}
                                <div className="margin-md">
                                <h1> Our Vision: </h1>
                                <p> The world-leading all-in-one integrated automobile social platform where everyone could rely on whenever they think about anything that relates to automobiles. </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="margin-md">
                                    <h1> Our Core Values: </h1>
                                    <h3 style={{marginBottom:'0px'}}> <b style={{fontSize:'20px', color:'#FBB040'}}>C</b>onnect - Connect trusted dealers and buyers. </h3>
                                    <p> We make sure you could get the best service at the best price from our authorised dealers. Also, we are here to gather all car enthusiasts together to share thoughts and feelings on cars.</p>

                                    <h3 style={{marginBottom:'0px'}}><b style={{fontSize:'20px', color:'#FBB040'}}>C</b>reate - Create values for you.</h3>
                                    <p> We create values that are related to cars for anyone who uses our platform. We love to see people get their desired cars through our platform and gain as many insights as possible from CCAR. </p>

                                    <h3 style={{marginBottom:'0px'}}><b style={{fontSize:'20px', color:'#FBB040'}}>A</b>dapt - Adapt to change in the fast-moving world.</h3>
                                    <p> We are ready to adapt, change and overcome any challenges to be able to lead in the automobile industry in this digital world to provide the best service to any of you.</p>

                                    <h3 style={{marginBottom:'0px'}}><b style={{fontSize:'20px', color:'#FBB040'}}>R</b>evolutionize - Revolutionize the way the automobile industry works. </h3>
                                    <p> We transform everything related to automobiles into an online service where dealers could easily reach the right clients and users could effortlessly find their dream cars anytime, anywhere.</p>
                                </div>
                                <div className="car-for-sale">
                                <img style={{width:'100%', marginTop:'-50px'}} src="/assets/about-us/about_us_3.png"></img>
                                </div>
                                {/* <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                                <img style={{width:'100%'}} src="/assets/about-us/about_us_3.png"></img>
                                </Col> */}
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                {/* <img style={{width:'85%', marginLeft:'100px'}} src="/assets/about-us/about_us_1.png"></img> */}
                                <div className="margin-md">
                                <h1> Why CCAR?</h1>
                                <p style={{marginBottom:'0px', color:'#FBB040', fontSize:'16px'}}><b>All-In-One.</b></p>
                                <p> You could find anything related to cars from our platform and build your car communities to exchange your thoughts with them. </p>
                                <p style={{marginBottom:'0px', color:'#FBB040', fontSize:'16px'}}><b>Care For You.</b></p>
                                <p> We value any of your reviews and feedback to give you a world-class social platform.</p>
                                <p style={{marginBottom:'0px', color:'#FBB040', fontSize:'16px'}}><b>Variety.</b></p>
                                <p>We offer a wide range of choices from which you could choose your desired car.</p>
                                <p style={{marginBottom:'0px', color:'#FBB040', fontSize:'16px'}}><b>Safe.</b></p>
                                <p>We review our dealers consistently from our merits and your feedback to ensure dealers are trustable.</p>
                                <p style={{marginBottom:'0px', color:'#FBB040', fontSize:'16px'}}><b>Best Price.</b></p>
                                <p>Our platform provides irresistible offers with affordable and competitive prices for you.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </LayoutV2>
        )
    }

}

const mapStateToProps = state => ({
    app: state.app,
});

const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsIndex);