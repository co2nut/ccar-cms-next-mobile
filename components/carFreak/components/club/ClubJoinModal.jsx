import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, message, Modal } from 'antd';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getObjectId } from '../../../../common-function';
import { loading, loginMode } from '../../../../redux/actions/app-actions';
import { setUser } from '../../../../redux/actions/user-actions';
import JoinClubButton from './join-club-button';



const ClubJoinModal = (props) => {

    const [visible, setVisible] = useState(false);

    const [club, setClub] = useState({});

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible])

    useEffect(() => {
        setClub(_.isPlainObject(props.club) && !_.isEmpty(props.club) ? props.club : {});
    }, [props.club])

    useEffect(() => { 

        if(!getObjectId(props.club) && visible){
            message.error('Club Not Found!');
            closeModal();
            return;
        }

        if(!_.get(props.user, ['authenticated']) || !_.get(props.user, ['info', 'user', '_id']) && visible ){
            message.error('Please Login First!');
            props.loginMode(true);
            closeModal();
            return;
        }
    
    } , [visible])


    function closeModal() {
        if (props.onCancel) {
            props.onCancel()
        }
    }

    return (
        <Modal
            visible={visible}
            footer={null}
            centered
            maskClosable={false}
            width={1000}
            onCancel={() => { closeModal() }}
            closable={false}
        >
            <div className="relative-wrapper fill-parent">
                <div className="width-100">
                    <div className="headline grey flex-items-align-center flex-justify-center font-weight-bold">
                        Join The Club
                    </div>
                    <div className="caption grey text-align-center">
                        For further interesting informations and posts!
                    </div>
                    <div className="flex-justify-center flex-items-align-center margin-top-md">
                        <JoinClubButton club={club}  userId={_.get(props.user, ['info', 'user', '_id'])}
                            onSuccess={(res) => {
                                if(props.onChange){
                                    props.onChange(res)
                                }
                            }}
                            joinButton={(joinAction) => {
                                return (
                                    <Button className="padding-x-xl border-ccar-button-yellow background-ccar-button-yellow round-border-big" style={{ boxShadow: '0px 0px 15px rgba(255, 204, 50, 1)' }}>Join</Button>
                                )
                            }}
                            joinedButton={() => {
                                return (
                                    <Button className="padding-x-xl border-ccar-button-yellow background-ccar-button-yellow round-border-big" style={{ boxShadow: '0px 0px 15px rgba(255, 204, 50, 1)' }}>Joined</Button>
                                )
                            }}
                            pendingButton={() => {
                                return (
                                    <Button className="padding-x-xl border-ccar-button-yellow background-ccar-button-yellow round-border-big" style={{ boxShadow: '0px 0px 15px rgba(255, 204, 50, 1)' }}>Pending Approval</Button>
                                )
                            }}
                        />
                    </div>
                </div>
                <span className='d-inline-block ' style={{ position: 'absolute', top: 0, right: 0 }} >
                    <CloseOutlined className="black cursor-pointer" style={{ fontSize: 20 }} onClick={(e) => { closeModal() }} ></CloseOutlined>
                </span>
            </div>

        </Modal>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    sellerProfile: state.sellerProfile,
});

const mapDispatchToProps = {
    loading: loading,
    setUser: setUser,
    loginMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ClubJoinModal)));