import { Divider, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { withRouter } from 'next/router';
import LayoutV2 from '../../general/LayoutV2';
import { convertParameterToProductListUrl } from '../../../common-function';

const SellACar = (props) => {
    return (
        <LayoutV2>
        <React.Fragment>
        <div className="section-version3" style={{marginTop:'55px'}}> 
            <div style={{marginTop:'10px'}}> 
                <Link href="/faq">
                    <a className="margin-top-md" ><Icon type="left" />Back to FAQ</a>
                </Link>
            </div>
                 <div style={{textAlign:'center'}} className="font-weight-bold headline"> Sell a car </div>
            <div className="padding-md" id="sellCar-topic-1">
                <div className="subtitle1 font-weight-bold">
                    How To Sell A Car?
                </div>
                <Divider style={{ margin: '5px 0' }} />
                <div className="text-overflow-break " style={{ lineHeight: 1.75 }}>
                    <span>
                        In order to be qualified to sell a car, you are required to set up a dealer account with us. Please drop an email to us at <a href="mailto:info@ccar.my">info@ccar.my</a> or submit a request form through contact us. We will get back to you within 24 hours. See you soon!
                    </span>
                    <br></br>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SellACar));