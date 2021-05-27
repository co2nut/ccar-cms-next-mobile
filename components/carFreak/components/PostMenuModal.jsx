import { BookFilled, BookOutlined } from '@ant-design/icons';
import { Dropdown, Form, Icon, Menu, message, Modal, Popconfirm } from 'antd';
import _ from "lodash";
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SavePostButton from './save-post-button';
import FollowButton from '../../profile/FollowButton';
import ShareButtonDialog from '../../general/ShareButtonDialog';
import ReportButton from '../../general/ReportButton';
import { allIcon, threedots } from '../../../icon';



const postCommentRef = React.createRef();


const PostMenuModal = (props) => {

    const [post, setPost] = useState({});
    const [visible, setVisible] = useState(false);



    useEffect(() => {
        if (_.isPlainObject(props.post) && !_.isEmpty(props.post)) {
            setPost(props.post);
        } else {
            setPost({});
        }

    }, [props.post])

    return (
        <React.Fragment>
            <Modal
                visible={visible}
                mask
                maskClosable
                centered
                footer={null}
                closable={false}
                width={'80%'}
                onCancel={() => { setVisible(false) }}
                className="modal-body-background-transparent no-padding-modal-body no-shadow-modal-body"
            >
                <div className="thin-border round-border-big background-white">
                    {
                        _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) == _.get(post, ['userId', '_id']) && _.get(post, ['chatType']) != 'event' ?
                            [
                                <div className="flex-justify-center flex-items-align-center padding-md black" onClick={(e) => {
                                    setVisible(false)
                                    if (props.onEditPostClick) {
                                        props.onEditPostClick(post)
                                    }
                                }}>
                                    Edit
                                </div>,
                                <div className="flex-justify-center flex-items-align-center padding-md red" onClick={(e) => {
                                    setVisible(false)
                                    if (props.onRemovePostClick) {
                                        props.onRemovePostClick(post);
                                    }
                                }}>
                                    Delete
                                </div>,
                            ]
                            :
                            null
                    }
                    {
                        _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) != _.get(post, ['userId', '_id']) && _.get(post, ['chatType']) != 'event' ?
                            <SavePostButton userId={_.get(props.user, ['info', 'user', '_id'])} chatId={_.get(post, ['_id'])}
                                saveButton={() => {
                                    return (<div className="flex-justify-center flex-items-align-center padding-md black" onClick={(e) => {
                                        setVisible(false)
                                    }}>
                                        Save Post
                                    </div>)
                                }}
                                savedButton={() => {
                                    return <div className="flex-justify-center flex-items-align-center padding-md black" onClick={(e) => {
                                        setVisible(false)
                                    }}>
                                        Unsave Post
                                    </div>
                                }}
                                notify
                            />
                            :
                            null
                    }
                    {
                        _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) && _.get(props.user, ['info', 'user', '_id']) != _.get(post, ['userId', '_id']) ?
                            [
                                <ReportButton type="chat"
                                    reporterId={_.get(props.user, ['info', 'user', '_id'])}
                                    chatId={_.get(post, ['_id'])}
                                    reportButton={() => {
                                        return <div className="flex-justify-center flex-items-align-center padding-md red" onClick={(e) => {
                                            setVisible(false)
                                        }}>
                                            Report
                                                </div>
                                    }}
                                    cancelButton={() => {
                                        return null;
                                    }}
                                    handleSuccess={(data) => {
                                        message.success(data.type == 'cancel' ? 'Canceled' : 'Reported')
                                    }}
                                    handleError={(err) => {
                                        message.error(err.message)
                                    }} />
                            ]
                            :
                            null
                    }

                    <ShareButtonDialog link={`/${_.get(post, ['chatType']) == 'event' ? 'event-post' : _.get(post, ['chatType']) == 'socialboard' ? 'social-board' : 'car-freaks'}/${_.get(post, ['_id'])}`}>
                        <div className="flex-justify-center flex-items-align-center padding-md blue" onClick={(e) => {
                            setVisible(false)
                        }}>
                            Share Link
                                    </div>
                    </ShareButtonDialog>

                </div>

                <div className="thin-border background-white round-border-big margin-top-md">
                    <div className="flex-justify-center flex-items-align-center padding-md ccar-button-yellow" onClick={(e) => { setVisible(false) }}>
                        Cancel
                                    </div>
                </div>
            </Modal>

            <span onClick={(e) => { setVisible(true) }} >
                {
                    props.children ?
                        props.children
                        :
                        <img src={threedots} style={{ width: 30, height: 30 }} />
                }
            </span>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(PostMenuModal)));