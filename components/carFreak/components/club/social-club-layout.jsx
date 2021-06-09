import { Button, Col, Form, Icon, message, Row, Avatar, Modal } from 'antd';
import _, { set } from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import WriteClubModal from './write-club-modal';
import { loading, loginMode } from '../../../../redux/actions/app-actions';
import { generateDummyArrayObj } from '../../../../dummy';
import Scrollbars from 'react-custom-scrollbars';
import Link from 'next/link';
import { routePaths } from '../../../../route';
import MyClubModal from './MyClubModal';
import MyClubInvitationModal from './MyClubInvitationModal';

const SocialClubLayout = (props) => {

    const [tabKey, setTabKey] = useState('car-freaks');
    const [writeModalVisible, setWriteModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const [myClubModalVisible, setMyClubModalVisible] = useState(false);
    const [myClubInvitationVisible, setMyClubInvitationVisible] = useState(false);

    useEffect(() => {

        switch (props.tabKey) {
            case 'allClubs':
                setTabKey('allClubs')
                break;
            case 'myClub':
                setTabKey('myClub')
                break;
            case 'myClubInvitation':
                setTabKey('myClubInvitation')
                break;
            default:
                setTabKey('allClubs')
        }

    }, [props.tabKey])

    function handleChange(tabKey) {
        if (props.onChange) {
            props.onChange(tabKey);
        }
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <React.Fragment>
            <Row gutter={[15, 15]}>
                <Col span={24} style={{ textAlign: 'right' }} >
                    <Button onClick={(e) => {
                        setEditMode(false);
                        setWriteModalVisible(true);
                    }} style={{ color: '#F57F17' }}><Avatar src={'/assets/add-post/create-post.png'} shape="square" size="small" />
                    </Button>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="width-100 flex-justify-end flex-items-align-center">
                        {/* <span className={`d-inline-block margin-right-md subtitle1 black cursor-pointer ${tabKey == 'allClubs' ? 'ccar-button-yellow border-bottom-ccar-button-yellow' : 'black border-bottom-black'}`} onClick={(e) => {
                            handleChange('allClubs');
                        }} >
                            All
                        </span> */}
                        <span className={`d-inline-block margin-right-md subtitle1 black cursor-pointer ${tabKey == 'myClub' ? 'ccar-button-yellow border-bottom-ccar-button-yellow' : 'black border-bottom-black'}`}
                            onClick={() => {
                                setMyClubModalVisible(true);
                            }}
                        >
                            My Club
                        </span>
                        <span className={`d-inline-block margin-right-xs subtitle1 black cursor-pointer ${tabKey == 'myClubInvitation' ? 'ccar-button-yellow border-bottom-ccar-button-yellow' : 'black border-bottom-black'}`} 
                        onClick={(e) => {
                            setMyClubInvitationVisible(true);
                        }} >
                            My Club Invitation
                        </span>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    {props.children}
                </Col>
            </Row>

            <MyClubModal
                visible={myClubModalVisible}
                onCancel={() => {
                    setMyClubModalVisible(false);
                }}
            ></MyClubModal>

            <MyClubInvitationModal
                visible={myClubInvitationVisible}
                onCancel={() => {
                    setMyClubInvitationVisible(false);
                }}
            ></MyClubInvitationModal>

            <WriteClubModal
                visible={writeModalVisible}
                onCancel={() => {
                    setWriteModalVisible(false);
                }}
                editMode={editMode}
                onCreate={(res) => {
                    if (_.isPlainObject(res) && !_.isEmpty(res)) {
                        if (props.onCreateClub) {
                            props.onCreateClub(res);
                        }
                    }
                }}
            >
            </WriteClubModal>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loading: loading,
    loginMode
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialClubLayout)));