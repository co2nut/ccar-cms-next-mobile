import { Button, Col, Drawer, Empty, Form, Menu, Row } from 'antd';
import Axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { formatNumber, isValidNumber, notEmptyLength } from '../../common-function';
import client from '../../feathers';
import { carspecNotFoundImage } from '../../icon';
import { carBrandsList } from '../../params/carBrandsList';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}


const CarMarketBrandFiltering = (props) => {
    const { height, width } = useWindowDimensions();
    const [groupedCarBrandsList, setGroupedCarBrandsList] = useState([])
    const [modelVisible, setModelVisible] = useState(false)
    const [options, setOptions] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])
    const [selectedValue, setSelectedValue] = useState({});
    const [modelOptions, setModelOptions] = useState([]);
    const [modelLoading, setModelLoading] = useState(false);


    useEffect(() => {
        if (props.options != null && _.isArray(props.options)) {
            let data = _.compact(_.map(carBrandsList, function (brand) {
                let selectedOption = _.find(props.options, function (item) {
                    return _.toLower(item.value) == _.toLower(brand.value);
                })
                if (selectedOption) {
                    brand.count = selectedOption.count;
                    return brand;
                } else {
                    return null;
                }
            }))
            setOptions(data)
        } else {
            setOptions(carBrandsList);
        }
    }, [props.options])

    useEffect(() => {
        if (!modelVisible) {
            setSelectedValue({});
            setModelOptions([]);
        }
    }, [modelVisible])


    useEffect(() => {

        if (_.get(selectedValue, ['brand', 'value']) && props.showModel !== false) {
            getModelOptions(_.get(selectedValue, ['brand', 'value']));
        }

    }, [selectedValue])

    useEffect(() => {
        if (_.isArray(options) && notEmptyLength(options)) {
            let data = _.reverse(_.sortBy(_.filter(options, function (option) {
                if (searchKeyword) {
                    let keyword = new RegExp(searchKeyword, 'i');
                    return keyword.test(option.value);
                } else {
                    return true;
                }
            }), ['count', 'value']))
            setFilteredOptions(groupCarBrandsList(data))
        } else {
            setFilteredOptions(groupCarBrandsList(carBrandsList));
        }
    }, [options, searchKeyword])


    function groupCarBrandsList(data) {

        let start = 'A';
        let end = 'Z';
        let groupedData = [];


        if (notEmptyLength(data)) {
            for (let index = start.charCodeAt(0); index <= end.charCodeAt(0); index++) {
                let selectedCarBrands = data.filter(function (brand) {
                    let firstLetter = _.upperCase(brand.value.substr(0, 1));
                    return firstLetter == String.fromCharCode(index);
                })

                if (notEmptyLength(selectedCarBrands)) {
                    let item = {
                        title: String.fromCharCode(index),
                        index: index,
                        data: selectedCarBrands,
                    }
                    groupedData.push(item);
                }
            }
            return groupedData;
        } else {
            return [];
        }
    }

    function getModelOptions(make) {

        if (make) {
            setModelOptions([]);
            setModelLoading(true);

            Axios.get(`${client.io.io.uri}priceRangeSearchUsed`,
                {
                    params: {
                        match: {
                            make: make
                        },
                    }
                }
            ).then((res) => {
                setModelLoading(false);
                if (notEmptyLength(res.data.usedCarPrice)) {
                    let uniqModels = _.filter(_.cloneDeep(_.uniqBy(res.data.usedCarPrice, 'model')));
                    setModelOptions(_.isArray(uniqModels) && notEmptyLength(uniqModels) ? uniqModels : []);
                    console.log(uniqModels);
                } else {
                    setModelOptions([])
                }
            })
                .catch((err) => {
                    console.log(err);
                    setModelLoading(false);
                    setModelOptions([]);
                })
        } else {
            setModelOptions([]);
        }
    }

    const _renderModelList = (models) => {
        if (_.isArray(models) && !_.isEmpty(models)) {
            let uniqBodyTypes = _.cloneDeep(_.uniqBy(models, 'bodyType').map((v, i) => {
                v.data = []
                return v
            }))

            uniqBodyTypes = uniqBodyTypes.map((v) => {
                models.map((v1) => {
                    if (v.bodyType == v1.bodyType) {
                        v.data.push(v1)
                    }
                })
                v.data = _.reverse(_.sortBy(v.data, ['count', 'model']))
                return v;
            })

            return _.map(uniqBodyTypes || [], function (item, index) {
                return (
                    <div style={{ margin: '10px 0px' }} key={index} >
                        <p style={{ fontWeight: '600', fontSize: '16px', textAlign: 'left', textTransform: 'capitalize' }}>{item.bodyType}</p>
                        {item.data.map((v, i) => {
                            return (
                                <div className="flex-justify-space-between flex-items-align-center cursor-pointer"
                                    key={i}
                                    onClick={() => {
                                        if (props.onSelect) {
                                            setModelVisible(false);
                                            props.onSelect(selectedValue.brand, v)
                                        }
                                    }}>
                                    <span className='flex-justify-start flex-items-align-center width-100 padding-right-md' >
                                        <img className="obj-fit-c margin-right-md" style={{ width: 50, height: 50 }} src={v.uri || carspecNotFoundImage} />
                                        <span className='d-inline-block text-overflow-break uppercase' >
                                            <Highlighter
                                                style={{ textTransform: 'uppercase', textOverflow: 'break-word' }}
                                                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                                                searchWords={[searchKeyword]}
                                                autoEscape
                                                textToHighlight={v.model}
                                            />
                                        </span>
                                    </span>
                                </div>
                                // <Row
                                //     // gutter={[10, 10]} 
                                //     className={_.toLower(props.selectedValue) == _.toLower(v.model) ? "selectedRow" : "selectRow"}
                                //     onClick={() => selectedValue(v.model, index, i)}
                                //     style={{ height: '5em', lineHeight: '5em' }}>
                                //     <Col span={8} style={{ height: '100%', padding: 5, lineHeight: 0 }}>
                                //         <img className="w-100 h-100 obj-fit-c" src={v.uri} />
                                //     </Col>
                                //     <Col span={10} style={{ height: '100%' }}>
                                //     </Col>
                                //     <Col span={4} style={{ height: '100%' }}>
                                //         <div className="fill-parent flex-justify-end flex-items-align-center">
                                //         </div>
                                //     </Col>
                                // </Row>
                            )
                        })}
                    </div>
                );
            })

        } else {
            return (
                <div className="fill-parent flex-items-align-center flex-justify-center">
                    <Empty description={modelLoading ? 'Getting Result...' : 'No Data'} />
                </div>
            )
        }
    }
    return (
        <div style={{ touchAction: 'pan-y' }}>
            <Row>

                <Col span={24}>
                    <div>
                        <Menu className="brand" defaultOpenKeys={['sub1']} mode="inline">
                            {
                                filteredOptions.length > 0 ?
                                    filteredOptions.map(function (item, parentsIndex) {
                                        return (
                                            <Menu.ItemGroup title={item.title} className="newcar-menu-header" id={parentsIndex + 'direction'}>
                                                {item.data.map(function (row2, childIndex) {
                                                    return (
                                                        <Menu.Item className={props.selected == _.toLower(row2.value) ? 'brandpics background-yellow-lighten-5' : "brandpics"} id={parentsIndex + '' + childIndex} key={parentsIndex + '' + childIndex}>
                                                            <span className="d-inline-block cursor-pointer" onClick={(e) => {

                                                                if(props.showModel !== false){
                                                                    setSelectedValue({
                                                                        ...selectedValue,
                                                                        brand: row2,
                                                                    })
                                                                    setModelVisible(true);
                                                                }else{
                                                                    if(props.onSelect){
                                                                        props.onSelect(row2)
                                                                    }
                                                                }
                                                            }}>
                                                                <div className={props.selected == _.toLower(row2.value) ? 'flex-items-align-center cursor-pointer ccar-yellow' : 'flex-items-align-center cursor-pointer'}
                                                                >
                                                                    <img src={row2.icon} />
                                                                    {row2.value}
                                                                    {
                                                                        props.showCount == false ?
                                                                            null
                                                                            :
                                                                            <div className="fill-parent flex-justify-end flex-items-align-center" style={{ marginLeft: '5px' }}>
                                                                                {`[${isValidNumber(row2.count) ? formatNumber(row2.count, null, false, 0, true) : 0}]`}
                                                                            </div>
                                                                    }
                                                                </div>
                                                            </span>
                                                        </Menu.Item>
                                                    )
                                                })
                                                }
                                            </Menu.ItemGroup>
                                        )
                                    })
                                    :
                                    null
                            }
                        </Menu>
                    </div>
                </Col>
            </Row>

            <Drawer
                title={
                    <div className="width-100 flex-justify-space-between flex-items-align-center">
                        <span className='d-inline-block ' >
                            Model List
                        </span>
                        <Button className=" round-border-big border-ccar-button-yellow background-ccar-button-yellow white" onClick={(e) => {
                            setModelVisible(false);
                            if (props.onSelect) {
                                props.onSelect(selectedValue.brand)
                            }
                        }} >Show All</Button>
                    </div>
                }
                placement="right"
                closable={false}
                onClose={() => {
                    setModelVisible(false);
                }}
                visible={modelVisible}
            >
                {
                    _renderModelList(modelOptions || [])
                }
            </Drawer>
        </div>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsList,
    app: state.app,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(CarMarketBrandFiltering)));