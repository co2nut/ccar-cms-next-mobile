import { CloseOutlined } from '@ant-design/icons';
import { Card, Col, Empty, Form, Icon, Input, Modal, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { formatNumber, isValidNumber, notEmptyLength } from '../../../common-function';
import { raceFlagIcon } from '../../../icon';
import { StateList } from '../../../params/stateList';



const stateModalSearchRef = React.createRef();

const StateModal = (props) => {
    const [options, setOptions] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])

    useEffect(() => {
        if (props.options != null && _.isArray(props.options)) {

            let otherOption = {
                value : 'others',
                count : 0,
                icon : raceFlagIcon
            }

            let data = _.compact(_.map(props.options, function (state) {
                let selectedOption = _.find(StateList, function (item) {
                    return _.toLower(item.value) == _.toLower(state.value);
                })
                if (selectedOption) {
                    selectedOption.count = state.count;
                    return selectedOption;
                } else {
                    otherOption.count += state.count;
                }
            }))

            if(otherOption.count > 0){
                setOptions((data || []).concat(otherOption))
            }else{
                setOptions((data))
            }
        } else {
            setOptions([]);
        }
    }, [props.options])

    useEffect(() => {

        if (props.visible == true && stateModalSearchRef.current) {
            stateModalSearchRef.current.focus();
        }

        if (!props.visible) {
            setSearchKeyword('');
        }

    }, [props.visible, stateModalSearchRef.current])

    useEffect(() => {
        if (_.isArray(options) && notEmptyLength(options)) {
            let data = _.reverse(_.sortBy(_.filter(options, function (option) {
                if (searchKeyword) {
                    let keyword = new RegExp(searchKeyword, 'i');
                    return keyword.test(option.value) && option.count > 0;
                } else {
                    return true;
                }
            }), ['count', 'value']))
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
            <div >
                {
                    notEmptyLength(filteredOptions) ?
                    filteredOptions.map((item, index) => {
                    return (
                        <div key={index}>
                            <Row
                                key={index}
                                className={_.toLower(props.selectedValue) == _.toLower(item.value) ? "selectedRow" : "selectRow"}
                                onClick={() => selectedValue(item.value, index)}
                                style={{ height: '3.5em', lineHeight: '3.5em' }}>

                                <Col span={5} style={{ height: '100%', padding: 5, lineHeight: 0 }}>
                                    <img className="w-100 h-100 obj-fit-c" src={item.icon} />
                                </Col>
                                <Col span={12} style={{ height: '100%' }}>
                                    <p style={{ padding: '0px 10px', textTransform: 'capitalize', whiteSpace: 'noWrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight:'700' }}>{item.value}</p>
                                </Col>
                                <Col span={7} style={{ height: '100%' }}>
                                    <div className="fill-parent flex-justify-end flex-items-align-center">
                                        {`(${isValidNumber(item.count) ? formatNumber(item.count, null, false, 0, true) : 0})`}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    );
                })
                :
                <div style={{ height: '100%' }}>
                    <Empty
                        style={{ position: 'relative' }}
                        image="/empty.png"
                        imageStyle={{
                        height: 60,
                    }}
                        description={<span>No Result</span>}
                    >
                    </Empty>
                </div>
             }
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
    app: state.app,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(StateModal)));