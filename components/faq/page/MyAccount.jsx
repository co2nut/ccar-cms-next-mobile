import { Divider, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { withRouter } from 'next/router';
import LayoutV2 from '../../general/LayoutV2';

const MyAccount = (props) => {
    return (
        <React.Fragment>
            <LayoutV2>
                <div className="section-version3" style={{marginTop:'55px'}}> 
                <div style={{marginTop:'10px'}}> 
                    <Link href="/faq">
                        <a className="margin-top-md" ><Icon type="left" />Back to FAQ</a>
                    </Link>
                </div>

                <div style={{textAlign:'center'}} className="font-weight-bold headline"> My Acccount </div>
                <div className="padding-md" id="account-topic-1">
                    <div className="ccar-yellow-1 h5 text-align-center padding-x-md" style={{color:'#ffcc32', lineHeight:1.0}}>We welcome you to be part of our big family!</div>
                    
                    <div className="subtitle1 font-weight-bold margin-top-md">
                        How To Create My CCAR Account?
                    </div>
                    <Divider style={{ margin: '5px 0' }} />
                <div className="text-overflow-break " style={{ lineHeight: 1.75 }}>
           <span className="font-weight-bold"> If you are an user, here are the steps to create your own CCAR account:</span>
           <br></br>
           1. Click the “Login” tab at the top right corner of our menu bar in the home page.
           <br></br>
           2. You can choose to log in with either your Google/Facebook account.
           <br></br>
           3. Sign in to your Google/Facebook account as your CCAR account would be automatically generated through your Google/Facebook account.
           <br></br>
           4. Congratulations! You are part of our family now!
           <br></br>
           <br></br>
           <span className="font-weight-bold">Note: If you are a dealer, please choose the “Login as Business Owner” option and log in with your username and password.</span>
           <br></br>
           Have fun in CCAR! =D

       </div>
   </div>
   <div className="padding-md margin-top-sm" id="account-topic-2">
       <div className="subtitle1 font-weight-bold">
           Can I Change My Freak ID?
       </div>
       <Divider style={{ margin: '5px 0' }} />
       <div className=" text-overflow-break " style={{ lineHeight: 1.75 }}>
           <span className="font-weight-bold">Yes, definitely you can! You can change your freak it by</span>
           <br></br>
           1. Clicking your profile icon to go to your profile tab.
           <br></br>
           2. Click “edit profile”.
           <br></br>
           3. Change your Freak ID.
           <br></br>
           4. Submit the request.
           <br></br>
           5. You’re now with your latest Freak ID! Congrats!


       </div>
   </div>
   </div>
   </LayoutV2>
</React.Fragment>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyAccount));