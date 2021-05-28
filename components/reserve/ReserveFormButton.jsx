import { Avatar, Button, Col, Form, Input, message, Modal, Row, Select } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { notEmptyLength } from '../../common-function';
import client from '../../feathers';
import { loading, loginMode } from '../../redux/actions/app-actions';

const { TextArea } = Input;
var moment = require('moment');

const FORM_CONTAINER_SIZE = 500;


const ReserveFormButton = (props) => {


    const [visible, setVisible] = useState(false);
    const [run, setRun] = useState(true);

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, isFieldValidating } = props.form;

    const [mode, setMode] = useState('add');
    const [buttonLoading, setButtonLoading] = useState(false);
    // Only show error after a field is touched.
    const mobileNumberError = (isFieldTouched('mobileNumberError') || !isFieldValidating('mobileNumberError')) && getFieldError('mobileNumberError');
    const nameError = (isFieldTouched('name') || !isFieldValidating('name')) && getFieldError('name');
    const selectionError = (isFieldTouched('selection') || !isFieldValidating('selection')) && getFieldError('selection');




    useEffect(() => {
        if (props.mode == 'edit') {
            if (!props.data._id) {
                handleError({ message: 'Review Not Found!' });
            }
            setMode('edit');
        } else {
            setMode('add');
        }
    }, [props.mode])


    useEffect(() => {
        props.form.setFieldsValue(props.data)
    }, [props.data])

    useEffect(() => {
        props.form.setFieldsValue({ [`${props.type}Id`]: props[`${props.type}Id`] });
    }, [props.type, props[`${props.type}Id`]])

    function handleSuccess(success) {
        setVisible(false);
        if (props.handleSuccess) {
            props.handleSuccess(success);
        }
    }


    function handleError(error) {
        setVisible(false);
        if (props.handleError) {
            props.handleError(error);
        }
    }

    function reset() {
        props.form.resetFields();
    }




    function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                let finalData = _.cloneDeep(values);
                let promises = [];

                finalData = {
                    ...finalData,
                    type : props.type,
                    make : props.editMode == 'edit' ? _.get(props.data , `make`) : _.get(props.carspec , `make`),
                    model : props.editMode == 'edit' ? _.get(props.data , `model`) : _.get(props.carspec , `model`),
                    reserverId: props.reserverId,
                    [`${props.type}Id`]: props[`${props.type}Id`],
                }

                if (mode == 'edit') {
                    promises.push(client.service('reserves').patch(finalData._id, finalData))
                } else {
                    promises.push(client.service('reserves').create(finalData))
                }
                props.loading(true);
                setButtonLoading(true);
                Promise.all(promises).then(([auth, reviewRes]) => {
                    props.loading(false);
                    message.success(mode == "edit" ? 'Edit Successful' : 'Reserve Successful');
                    handleSuccess(reviewRes);
                    setButtonLoading(false);

                }).catch(error => {
                    props.loading(false);
                    setButtonLoading(false)
                })

            } else {
                setButtonLoading(false);
                _.map(err, function (err) {
                    return message.error(err.errors[0].message)
                })

            }
        });
    };

    const _renderSelection = (data, text) => {

        if (notEmptyLength(data)) {

            let idType = `${props.type}Id`;
            return (
                <React.Fragment>
                    <div className="headline  ">
                        {text != null ? text : 'Please select item to review'}
                    </div>

                    <Form.Item required={false} validateStatus={selectionError ? 'error' : ''} help={selectionError || ''} style={{ margin: 0 }}>
                        {getFieldDecorator('selection', {
                            initialValue: props[idType] ? props[idType] : null,
                        })(
                            <Select
                            >
                                <Select.Option value={null}>
                                    Seller Suggestion
                                </Select.Option>
                                {
                                    data.map(function (item) {
                                        return (
                                            <Select.Option key={item._id} value={item._id}>
                                                {item.nameSearchBar}
                                            </Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }


    const _renderForm = () => {

        return (
            <Form layout="vertical" onSubmit={handleSubmit} >

                <Row gutter={[0, 10]}>
                    {
                        notEmptyLength(props.selection) ?
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                {
                                    _renderSelection(props.selection, props.selectionText)
                                }
                            </Col>

                            :
                            null
                    }

                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item required={false} validateStatus={nameError ? 'error' : ''} help={nameError || ''} style={{ margin: 0 }}>
                            {getFieldDecorator('name', {
                                initialValue: props.data ? props.data.name : null,
                            })(
                                <Input
                                    placeholder="Name"
                                    maxLength={300} />
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item required={false} validateStatus={mobileNumberError ? 'error' : ''} help={mobileNumberError || ''} style={{ margin: 0 }}>
                            {getFieldDecorator('mobileNumber', {
                                initialValue: props.data ? props.data.mobileNumber : null,
                            })(
                                <Input
                                    placeholder="Mobile Number"
                                    maxLength={300} />
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Button htmlType="submit" loading={buttonLoading} type="primary" style={{ width: '100%' }}>
                            Submit Reservation
                        </Button>
                    </Col>

                </Row>

            </Form>
        )
    }

    function reviewModalVisible() {

        setVisible(true)
    }

    return (

        <span className={props.className ? props.className : null} style={props.style ? props.style : null}>
            <Modal
                visible={visible}
                title={`Reservation Form`}
                maskClosable={true}
                centered={true}
                closable={true}
                footer={null}
                onCancel={(e) => { setVisible(false); }}
                afterClose={() => {
                    reset();
                }}
            >
                <div style={{ maxHeight: FORM_CONTAINER_SIZE + 'px' }} className="scroll-y-wrapper">
                    {_renderForm()}
                </div>
            </Modal>

            <a onClick={reviewModalVisible}>

                {
                    props.button ?
                        props.button()
                        :
                        <Button style={{ color: '#F57F17' }}><Avatar src={'/assets/add-post/create-post.png'} shape="square" size="small" /></Button>
                }
            </a>

        </span>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
    loginMode: loginMode,
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(ReserveFormButton)));