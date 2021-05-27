import { Col, Form, Row, Icon } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../general/UserAvatar';
import { withRouter } from 'next/dist/client/router';


const SellerBusinessCard = (props) => {


    //props.data=company
    //props.data1=createdBy

    let areaName =  !props.data || !props.data.area ? null : props.data.area
    let companyName = !props.data || !props.data.name ? null : props.data.name

    let userarea = !props.data1 || !props.data1.userarea ? null : props.data1.userarea
    if(_.isEmpty(userarea)===false){
        areaName = userarea
    }

    let usercompany = !props.data1 || !props.data1.usercompanyName ? null : props.data1.usercompanyName
    if(_.isEmpty(usercompany)===false){
        companyName = usercompany
    }

    let totaladsavailable = !props.data1 || !props.data1.totalAdsAvailable? null : props.data1.totalAdsAvailable
    if(_.isEmpty(usercompany)===false){
        companyName = usercompany
    }

    


    return (
        <div className={`thin-border ${props.className || ''} background-white round-border` }>
            <a href={props.readOnly ? null : !props.data1 || !props.data1._id ? null : '/dealer/' + (props.data1.companyurlId || '') + '/' + (props.data1.userurlId || '')} className="grey-darken-2 font-weight-normal">
                <Row style={{ padding:'15px'}} type="flex" align="middle">
                    <Col xs={5} sm={5} md={0} lg={0} xl={5}>
                        <div className='fill-parent flex-justify-center flex-items-align-center'>
                            <UserAvatar redirectProfile data={props.data1} size={50} />
                        </div>
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={24} xl={18} style={{paddingLeft:'5px'}}>
                        <Row>
                            <Col span={20}>
                                <span style={{ marginBottom: '0px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}> {!props.data1 || !props.data1.namePrefix ? null : props.data1.namePrefix} {!props.data1 || !props.data1.firstName ? null : props.data1.firstName} {!props.data1 || !props.data1.lastName ? null : props.data1.lastName}</span>
                                <span style={{paddingLeft:'5px'}}>[{totaladsavailable}]</span>
                            </Col>
                        </Row>
         
                        <Row>
                            <Col span={20}>
                                <div style={{ marginBottom: '0px', fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                                        {companyName}</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={20}>
                                <span className="caption text-overflow-break text-align-left">
                                    <Icon type="double-right"/> {areaName}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1}>
                        <Icon type="right" style={{color:'#ffcc32', fontSize:'16px'}} />
                    </Col>
                </Row>
            </a>
        </div>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SellerBusinessCard)));