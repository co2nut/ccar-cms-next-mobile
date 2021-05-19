import { CloseOutlined } from '@ant-design/icons';
import { Card, Col, Empty, Form, Icon, Input, Modal, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { formatNumber, isValidNumber, notEmptyLength } from '../../../common-function';
import { bodyTypeList } from '../../../params/bodyTypeList';



const bodyTypeModalSearchRef = React.createRef();

const BodyTypeModal = (props) => {
    const [options, setOptions] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])

    useEffect(() => {
        if (props.options != null && _.isArray(props.options)) {

            let data = _.compact(_.map(bodyTypeList, function (bodyType) {

                let selectedOption = _.find(props.options, function (item) {
                    return _.toLower(item.value) == _.toLower(bodyType.value);
                })
                if (selectedOption) {
                    bodyType.count = selectedOption.count;
                    return bodyType;
                } else {
                    return null;
                }
            }))
            setOptions(data)
        } else {
            setOptions([]);
        }
    }, [props.options])


    useEffect(() => {

        if (props.visible == true && bodyTypeModalSearchRef.current) {
            bodyTypeModalSearchRef.current.focus();
        }

        if (!props.visible) {
            setSearchKeyword('');
        }

    }, [props.visible, bodyTypeModalSearchRef.current])


    useEffect(() => {
        if (_.isArray(options) && notEmptyLength(options)) {
            let data = _.reverse(_.sortBy(_.filter(options, function (option) {
                if (searchKeyword) {
                    let keyword = new RegExp(searchKeyword, 'i');
                    return keyword.test(option.value) && option.count > 0;
                } else {
                    return true;
                }
            }), ['count', 'value']));
            setFilteredOptions(data)
        } else {
            setFilteredOptions([]);
        }
    }, [options, searchKeyword])

    const selectedValue = (item, alphaIndex, index) => {
        if (props.onChange) {
            props.onChange(item, alphaIndex, index);
        }
    }

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="d-flex scroller-type" style={{ overflow: 'scroll' }}>
                        {
                            filteredOptions.length > 1 ?
                                filteredOptions.map((item, index) => {
                                    return (
                                        <Col span={5} key={index} className="col-centered" style={{ margin: '0px 10px' }} onClick={(e) => {
                                            if (props.onSelect) {
                                                props.onSelect(item);
                                            }
                                        }}>
                                            <div className="cursor-pointer">
                                                <img className="w-100" style={{width:'80%', height:'100%', border:'none'}} src={item.icon} />
                                                <p style={{ textTransform: 'uppercase', marginBottom: '0px', fontSize: '12px', marginTop: '-10px', fontWeight: '600' }}>{item.value}</p>
                                            </div>
                                        </Col>
                                    );
                                })
                                :
                                null
                        }
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
    app: state.app,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(BodyTypeModal)));