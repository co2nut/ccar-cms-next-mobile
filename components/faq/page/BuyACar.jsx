import { Divider, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { withRouter } from 'next/router';
import LayoutV2 from '../../general/LayoutV2';
import { convertParameterToProductListUrl } from '../../../common-function';

const BuyACar = (props) => {
    return (
        <LayoutV2>
            <React.Fragment>
            <div className="section-version3" style={{marginTop:'55px'}}> 
                <div style={{marginTop:'10px'}}> 
                <Link href="/faq">
                    <a className="margin-top-md" ><Icon type="left" />Back to FAQ</a>
                </Link>
                </div>
                 <div style={{textAlign:'center'}} className="font-weight-bold headline"> Buy a car </div>
            <div className="padding-md" id="buyCar-topic-1">
                <div className="subtitle1 font-weight-bold">
                    How To Search My Dream Car?
                </div>
                <Divider style={{ margin: '5px 0' }} />
                <div className="text-overflow-break " style={{ lineHeight: 1.75 }}>
                    <p style={{marginBottom:'0px'}} className="ccar-button-yellow font-weight-bold">1st way:</p>
                    <ol style={{paddingLeft:'15px'}}>
                        <li>Type the keyword for your desired car make or model in the Search Box.</li>
                        <li>Click the models which are available.</li>
                        <li>Have fun exploring!</li>
                    </ol>

                    <p style={{marginBottom:'0px'}} className="ccar-button-yellow font-weight-bold">2nd way:</p>
                    <ol style={{paddingLeft:'15px'}}>
                        <li>For more filter options, please go to <a href={`/${convertParameterToProductListUrl()}`}>CarMarket</a>.</li>
                        <li>You could sort the available car ads through our sorting function. Besides, you could switch on the registration card filter and the 360 degree view filter as well.</li>
                        <li>If you would like to have more filters in finding your dream car, feel free to go to CarMarket and then filter them with the available options in Quick Filter Box.</li>
                        <li>You could just key in the details you want and our system would do the filter for you.</li>
                        <li>Have fun exploring!</li>
                    </ol>

                    <p style={{marginBottom:'0px'}} className="ccar-button-yellow font-weight-bold">3rd way:</p>
                    <ol style={{paddingLeft:'15px'}}>
                        <li>If you are looking for a brand new car, you could go to All-NewCar platform from our menu bar on the home page.</li>
                        <li>Choose your favourite brand.</li>
                        <li>Utilize our search filter to find your dream car easily.</li>
                        <li>Enjoy!</li>
                    </ol>
                </div>
            </div>

            <div className="padding-md " id="buyCar-topic-2"> 
                <div className="subtitle1 font-weight-bold">
                    How Can I Get More Information About The Car?
                </div>
                <Divider style={{ margin: '5px 0' }} />
                <div className="text-overflow-break ">
                    <span className="font-weight-bold">You could get more information about the car from the following features:</span>

                    <ol style={{paddingLeft:'15px'}}>
                        <li><span className="ccar-button-yellow">Whatsapp:</span> For the dealer who is available on whatsapp, you are welcomed to give him/her a text.</li>
                        <li><span className="ccar-button-yellow">Call:</span> Give the dealer a call for more information.</li>
                        <li><span className="ccar-button-yellow">Compare:</span> Compare the specifications of your preferable cars.</li>
                        <li><span className="ccar-button-yellow">360 degree view:</span> View the car in 360 degree from different seat views such as driver seat, passenger seat and center seat.</li>
                        <li><span className="ccar-button-yellow">Registration card:</span> Get to know the identification details of the car</li>
                        <li><span className="ccar-button-yellow">Car Loan Calculator:</span> Calculate your estimated car loan for different loan periods and interest rate</li>
                    </ol>

                    Note: Do make sure you have enough information before making any decision :)
                    </div>
                </div>
            </div>
        </React.Fragment>

        </LayoutV2>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuyACar));