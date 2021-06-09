import { Button, Col, Empty, Form, Icon, message, Row, Input, Divider, Modal } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../../../feathers';
import { validateViewType } from '../../config';
import EventPost from '../event-post';
import PostCollapse from '../post-collapse';
import WriteEventModal from '../write-event-modal';
import WritePostModal1 from '../write-post-modal-1';
import ClubBackdrop from './club-backdrop';
import { loading } from '../../../../redux/actions/app-actions';
import WindowScrollLoadWrapper from '../../../general/WindowScrollLoadWrapper';
import { arrayLengthCount } from '../../../../common-function';
import { generateDummyObj } from '../../../../dummy';

const PAGE_SIZE = 10;
const BOX_HEIGHT = 300;


const ClubDiscussionBoxUi = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <React.Fragment>
            <div className="thin-border relative-wrapper width-100 padding-md">
                <div style={{display:'inline-block'}} className='width-20 height-100'>
                    <Row gutter={[0, 20]} className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <img src={generateDummyObj().dummyImage} style={{ width: '50px', height: 50, borderRadius: '50px' }}/>
                        </Col>
                    </Row>
                </div>
                <div style={{display:'inline-block', verticalAlign:'top'}} className='width-70 height-100 margin-top-md padding-left-md'>
                    <Row gutter={[0, 20]} className="width-100" onClick={showModal}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{padding:0}}>
                                <p style={{marginBottom:0}}> What's on your mind? </p>
                        </Col>
                     </Row>
                </div>
                <Divider style={{margin:0}}/>
                <div style={{textAlign:'center', marginTop:'5px'}}>
                    <span style={{marginRight:'10px'}}>
                        Tag People <img src="https://img.icons8.com/material-sharp/20/ffcc32/conference-call.png" style={{marginLeft:'5px'}}/>
                    </span>
                    <Divider type="vertical" style={{height:'18px'}}/>
                    <span style={{marginLeft:'20px'}}>
                        Event <img src="https://img.icons8.com/android/15/ffcc32/tear-off-calendar.png" style={{marginLeft:'5px'}}/>
                    </span>
                </div>
            </div>

            <div className="thin-border margin-top-md padding-md">
                <div style={{display:'inline-block'}} className='width-20 '>
                    <Row className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="width-100">
                                <img src={generateDummyObj().dummyImage} style={{ width: '50px', height: 50, borderRadius: '50px' }}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div  style={{display:'inline-block', verticalAlign:'top'}} className='width-60'>
                    <Row className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{padding:0}}>
                            <p style={{marginBottom:0}}>Club's Name in Area</p>
                            <p style={{marginBottom:0}}> Date | 3 days ago </p>
                        </Col>
                     </Row>
                </div>
                <div style={{display:'inline-block', verticalAlign:'top', textAlign:'right'}} className='width-20'>
                    <Icon type="more" />
                </div>

                <div>
                    <img src={generateDummyObj().dummyImage} style={{ width: '100%', height: 200}}/> 
                </div>

                <div className="fill-parent flex-justify-start flex-items-align-center margin-top-md">
                    <span className="d-inline-block margin-right-md">
                        <div className="flex-items-align-center">
                            <img src="/assets/car-freak/carfreaks-like.png" style={{width:'30px', height:'20px'}} className="margin-right-sm"/> 1 Like
                        </div>
                    </span>
                    <span className="d-inline-block margin-right-md">
                        <div className="flex-items-align-center">
                            0 Reply
                        </div>
                    </span>
                </div>
            </div>

            <Modal
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                title="Write a Post"
                centered
                footer={false}
                className="write-post"
            >
                <div style={{display:'inline-block'}} className='width-20 height-100'>
                    <Row gutter={[0, 20]} className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <img src={generateDummyObj().dummyImage} style={{ width: '50px', height: 50, borderRadius: '50px' }}/>
                        </Col>
                    </Row>
                </div>
                <div style={{display:'inline-block', verticalAlign:'top'}} className='width-70 height-100 margin-top-md padding-left-md'>
                    <Row gutter={[0, 20]} className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{padding:0}}>
                                <p style={{marginBottom:0}}> Name </p>
                        </Col>
                     </Row>
                </div>

                <Input placeholder="Topic" className="margin-bottom-sm" />
                <Input placeholder="Content (max 1000)" className="margin-bottom-sm" />

                <Button style={{width:'100%'}}> Tag People </Button>

                <Button style={{background:'#ffcc32'}}> Post </Button>

            </Modal>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ClubDiscussionBoxUi)));