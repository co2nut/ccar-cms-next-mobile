import { Button, Col, Empty, Form, Icon, message, Row, Input, Divider } from 'antd';
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

const tabs = [
    {
        text: 'All',
        value: 'all',
    },

    {
        text: 'CarFreaks',
        value: 'carfreaks',
    },

    {
        text: 'Social Board',
        value: 'socialboard',
    }
]
const ClubDiscussionBoxUi = (props) => {

    const [posts, setPosts] = useState([]);
    const [postTotal, setPostTotal] = useState(0);
    const [postPage, setPostPage] = useState(1);

    const [clubId, setClubId] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [tabKey, setTabKey] = useState('all');


    return (
        <React.Fragment>
            <div className="thin-border relative-wrapper width-100 padding-md">
                <div style={{display:'inline-block'}} className='width-30 height-100'>
                    <Row gutter={[0, 20]} className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="width-100">
                                <img src={generateDummyObj().dummyImage} style={{ width: '70px', height: 70, borderRadius: '50px' }}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{display:'inline-block', verticalAlign:'top'}} className='width-70 height-100 margin-top-md'>
                    <Row gutter={[0, 20]} className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{padding:0}}>
                                <p style={{marginBottom:0}}> Topic </p>
                                <Divider style={{margin:5}}/>
                                <p style={{marginBottom:0}}> What's on your mind? </p>
                        </Col>
                     </Row>
                </div>
                <Divider style={{margin:0}}/>
                    <Row>
                        <Col span={11} style={{textAlign:'center'}}>
                            <img src="https://img.icons8.com/doodle/30/000000/stack-of-photos--v1.png"/> Photo 
                        </Col>
                        <Divider type="vertical" style={{height:'20px', marginTop:'5px'}}/>
                        <Col span={11} style={{textAlign:'center'}}>
                            <img src="https://img.icons8.com/office/18/000000/employee-card.png"/> Tag People
                        </Col>
                    </Row>
            </div>

            <div className="thin-border margin-top-md padding-sm">
                <div style={{display:'inline-block'}} className='width-30'>
                    <Row className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className="width-100">
                                <img src={generateDummyObj().dummyImage} style={{ width: '60px', height: 60, borderRadius: '50px' }}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div  style={{display:'inline-block', verticalAlign:'top'}} className='width-50 padding-top-md'>
                    <Row className="width-100">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{padding:0}}>
                            <p style={{marginBottom:0}}>Club's Name in Area</p>
                            <p style={{marginBottom:0}}> Date | 3 days ago </p>
                        </Col>
                     </Row>
                </div>
                <div style={{display:'inline-block', verticalAlign:'top', textAlign:'right'}} className='width-20'>
                    <img src="https://img.icons8.com/android/24/000000/more.png"/>
                </div>

                <div>
                    <img src={generateDummyObj().dummyImage} style={{ width: '100%', height: 200}}/>
                </div>
            </div>
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