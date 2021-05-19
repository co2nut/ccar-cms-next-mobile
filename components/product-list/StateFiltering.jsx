import { Button, Col, Drawer, Empty, Form, Row } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import brandFilterTotal from '../../api/brandFilterTotal';
import { formatNumber, isValidNumber, notEmptyLength } from '../../common-function';
import { raceFlagIcon } from '../../icon';
import { getStateIcon, StateList } from '../../params/stateList';


const stateModalSearchRef = React.createRef();

const StateFiltering = (props) => {
    const [options, setOptions] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])
    const [selectedValue, setSelectedValue] = useState({});
    const [areaOptions, setAreaOptions] = useState([]);
    const [areaVisible, setAreaVisible] = useState(false)
    const [areaLoading, setAreaLoading] = useState(false);

    useEffect(() => {
        if (props.options != null && _.isArray(props.options)) {

            let otherOption = {
                value: 'others',
                count: 0,
                icon: raceFlagIcon
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

            // if(otherOption.count > 0){
            //     setOptions((data || []).concat(otherOption))
            // }else{
            setOptions((data))
            // }
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
        if (!areaVisible) {
            setSelectedValue({});
            setAreaOptions([]);
        }
    }, [areaVisible])


    useEffect(() => {
        if (_.get(selectedValue, ['value']) && props.showArea !== false) {
            getAreaOptions(_.get(selectedValue, ['value']));
        }

    }, [selectedValue])

    useEffect(() => {
        if (_.isArray(options) && notEmptyLength(options)) {
            let data = _.filter(options, function (option) {
                if (searchKeyword) {
                    let keyword = new RegExp(searchKeyword, 'i');
                    return keyword.test(option.value) && option.count > 0;
                } else {
                    return true;
                }
            })
            setFilteredOptions(data)
        } else {
            setFilteredOptions([]);
        }
    }, [options, searchKeyword])

    function getAreaOptions(state) {

        if (state) {
            setAreaOptions([]);
            setAreaLoading(true);

            console.log(state);
            brandFilterTotal(['area'], { filterGroup : {state : state}}).then((res) => {
                setAreaLoading(false);
                setAreaOptions(_.get(res, `areaList`) || [])
            })
        } else {
            setAreaOptions([]);
        }
    }

    const _renderAreaList = (data) => {
        if (_.isArray(data) && !_.isEmpty(data)) {
            return _.map(data || [], function (item, index) {
                return (
                    <div style={{ margin: '10px 0px' }} key={`area-${index}`} >
                        <div className="flex-justify-space-between flex-items-align-center cursor-pointer"
                            onClick={() => {
                                if (props.onSelect) {
                                    setAreaVisible(false);
                                    props.onSelect(selectedValue, item)
                                }
                            }}>
                            <span className='flex-justify-start flex-items-align-center width-100 padding-right-md' >
                                <span className='d-inline-block text-overflow-break uppercase' >
                                    {_.get(item , `value`)}
                                </span>
                            </span>
                        </div>
                    </div>
                );
            })

        } else {
            return (
                <div className="fill-parent flex-items-align-center flex-justify-center">
                    <Empty description={areaLoading ? 'Getting Result...' : 'No Data'} />
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            <div style={{ touchAction: 'pan-y' }}>
                <Row>
                    <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div style={{ ...props.bodyStyle, overflowY: 'auto' }}>
                            {
                                notEmptyLength(filteredOptions) ?
                                    filteredOptions.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Row
                                                    key={index}
                                                    // gutter={[10, 10]} 
                                                    onClick={() => {
                                                        if(props.showModel !== false){
                                                            setSelectedValue(item)
                                                            setAreaVisible(true);
                                                        }else{
                                                            if(props.onSelect){
                                                                props.onSelect(item)
                                                            }
                                                        }
                                                    }}
                                                    style={{ height: '3.5em', lineHeight: '3.5em' }}>
                                                    <Col span={5} style={{ height: '100%', padding: 5, lineHeight: 0 }}>
                                                        <img className="w-100 h-100 obj-fit-c" src={item.icon} />
                                                    </Col>
                                                    <Col span={12} style={{ height: '100%' }}>
                                                        <p style={{ padding: '0px 10px', textTransform: 'capitalize', whiteSpace: 'noWrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '700' }}>{item.value}</p>
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
                                    undefined
                            }
                        </div>
                    </Col>
                </Row>
            </div>
            <Drawer
                title={
                    <div className="width-100 flex-justify-space-between flex-items-align-center">
                        <span className='d-inline-block ' >
                            Area List
                        </span>
                        <Button className=" round-border-big border-ccar-button-yellow background-ccar-button-yellow white" onClick={(e) => {
                            setAreaVisible(false);
                            if (props.onSelect) {
                                props.onSelect(selectedValue)
                            }
                        }} >Show All</Button>
                    </div>
                }
                placement="right"
                closable={false}
                onClose={() => {
                    setAreaVisible(false);
                }}
                visible={areaVisible}
            >
                {
                    _renderAreaList(areaOptions || [])
                }
            </Drawer>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
    app: state.app,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(StateFiltering)));