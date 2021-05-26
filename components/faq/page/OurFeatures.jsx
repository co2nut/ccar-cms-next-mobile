import { Divider, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { withRouter } from 'next/router';
import LayoutV2 from '../../general/LayoutV2';

const OurFeatures = (props) => {
    return (
        <LayoutV2>
        <React.Fragment>
        <div className="section-version3" style={{marginTop:'55px'}}> 
            <div style={{marginTop:'10px'}}> 
                <Link href="/faq">
                    <a className="margin-top-md" ><Icon type="left" />Back to FAQ</a>
                </Link>
            </div>
                 <div style={{textAlign:'center'}} className="font-weight-bold hedline"> Our Features </div>
            <div className="padding-md" id="features-topic-1">
                <div className="subtitle1 font-weight-bold">
                    What Are The Features Available In CCAR?
                </div>
                <Divider style={{ margin: '5px 0' }} />
                    <span className="font-weight-bold">
                        As an user, here are what you can do in CCAR :
                    </span>
                    <br></br>
                    
                    <ol style={{paddingLeft:'15px'}}>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>CarMarket:</span> View, compare and buy your dream car.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>CarFreaks:</span> A social platform where you could share and gain their insights. There are 3 main functions in CarFreaks which are shown <a href={`/car-freaks`} target="_blank">here</a>.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>LIVE (Live Streaming):</span> Watch, like and share others’ live streaming.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>Social News:</span> Read the latest news related to automobiles.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>Social Videos:</span> Watch interesting car-related videos from trusted car influencers.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>Driving Test Revision:</span> Do revision on your upcoming driving test.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>Petrol Price:</span> Check out the weekly petrol price.</li>
                        <li className="margin-top-sm"><span style={{color:'#ffcc32'}}>Contact Us:</span> Submit your request or give your feedback to us.</li>
                    </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OurFeatures));