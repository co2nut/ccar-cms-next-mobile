import { Button, Col, Divider, Form, Icon, message, Row, Drawer } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../../../feathers';
import WriteEventModal from '../write-event-modal';
import EventDetailsBox from './event-details-box';
import { loading } from '../../../../redux/actions/app-actions';
import WindowScrollLoadWrapper from '../../../general/WindowScrollLoadWrapper';
import { arrayLengthCount, isValidNumber } from '../../../../common-function';
import { validateViewType, clubProfileViewTypes } from '../../config';
import ClubBackdrop from './club-backdrop';
import EventDetailsBoxUi from './event-details-box-ui';
import { generateDummyArrayObj, generateDummyObj } from '../../../../dummy';
import Link from 'next/link';
import { routePaths } from '../../../../route';

const PAGE_SIZE = 10;
const BOX_HEIGHT = 300;

const MediaClubUi = (props) => {

    const [club, setClub] = useState({});
    const [writeEventVisible, setWriteEventVisible] = useState(false);
    const [eventEditMode, setEventEditMode] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [events, setEvents] = useState([]);
    const [eventTotal, setEventTotal] = useState(0);
    const [eventPage, setEventPage] = useState(1);

    const [viewType, setViewType] = useState('non-member');

    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    return (
        <React.Fragment>
            <div>
                {
                    _.map(generateDummyArrayObj(10), (club) => {
                        return (
                            <Col span={8} onClick={showDrawer}>
                                <img src={club.dummyImage} style={{ width: '100px', height: 100}} />
                            </Col>
                        )
                        })
                    }

                    <Drawer
                        className="login-drawer"
                        title={null}
                        placement="right"
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                        width = {'100%'}
                        zIndex = {2000}
                    >
                        <div className="padding-md margin-top-lg">
                        <div style={{display:'inline-block'}} className='width-30 flex-items-align-start'>
                            <Row gutter={[0, 20]} className="width-100">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="width-100">
                                        <img src={generateDummyObj().dummyImage} style={{ width: '70px', height: 70, borderRadius: '50px' }}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div style={{display:'inline-block', verticalAlign:'top'}} className='width-50 flex-items-align-start'>
                            <p style={{marginBottom:0}}>Faraheen</p>
                            <p style={{marginBottom:0}}>Type of car</p>
                            <p style={{marginBottom:0}}>Area</p>
                        </div>
                        <div style={{display:'inline-block', verticalAlign:'top'}} className='width-10 flex-items-align-start'>
                            <Button>Follow</Button>
                        </div>
                        </div>

                        <div className="width-100">
                            <img src={generateDummyObj().dummyImage} style={{ width: '100%', height: 300}}/>
                        </div>

                        <div className="padding-md">
                            <p> Description</p>

                            <span className="margin-right-sm"> <img src="https://img.icons8.com/fluent/20/000000/facebook-like.png"/> 45 likes </span>
                            <span className="margin-right-sm"> <img src="https://img.icons8.com/ios-filled/20/ffcc32/topic.png"/> 5 comments </span>
                            <span> <img src="https://img.icons8.com/ios-filled/20/ffcc32/forward-arrow.png"/> Share</span>

                        </div>
                    </Drawer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(MediaClubUi)));