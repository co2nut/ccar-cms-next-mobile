import React, { useState, useEffect } from 'react';
import { Row, Col, Menu } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { carBrandsList } from '../../../params/carBrandsList';
import _ from 'lodash';
import { notEmptyLength, isValidNumber, formatNumber } from '../../../common-function';
import Link from 'next/link';
import { routePaths } from '../../../route';
import Axios from 'axios';
import client from '../../../feathers';


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


const MakeModal = (props) => {
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

    // useEffect(() => {

    //     if (notEmptyLength(props.brands)) {
    //         groupCarBrandsList(props.brands)
    //     } else {
    //         if (props.default) {
    //             groupCarBrandsList(carBrandsList);
    //         } else {
    //             groupCarBrandsList(null);
    //         }
    //     }
    // }, [props.brands]);

    // function onSelect(value) {
    //     if (props.onSelect) {
    //         props.onSelect(value);
    //     }
    // }
    // function groupCarBrandsList(data) {

    //     let start = 'A';
    //     let end = 'Z';
    //     let groupedData = [];


    //     if (notEmptyLength(data)) {
    //         for (let index = start.charCodeAt(0); index <= end.charCodeAt(0); index++) {
    //             let selectedCarBrands = data.filter(function (brand) {
    //                 let firstLetter = _.upperCase(brand.value.substr(0, 1));
    //                 return firstLetter == String.fromCharCode(index);
    //             })

    //             if (notEmptyLength(selectedCarBrands)) {
    //                 let item = {
    //                     title: String.fromCharCode(index),
    //                     index: index,
    //                     data: selectedCarBrands,
    //                 }
    //                 groupedData.push(item);
    //             }
    //         }

    //         setGroupedCarBrandsList(groupedData);
    //     } else {
    //         setGroupedCarBrandsList([]);
    //     }
    // }

    return (
        // <Row>
        //     <Col span={24}>
        //         <Menu className="brand" defaultOpenKeys={['sub1']} mode="inline">
        //             {groupedCarBrandsList.map(function (item, parentsIndex) {
        //                 return (
        //                     <Menu.ItemGroup title={item.title} className="newcar-menu-header" id={parentsIndex + 'direction'}>
        //                         {item.data.map(function (row2, childIndex) {
        //                             return (
        //                                 <Menu.Item className={props.selected == _.toLower(row2.value) ? 'brandpics background-yellow-lighten-5' : "brandpics"} id={parentsIndex + '' + childIndex} key={parentsIndex + '' + childIndex}>
        //                                     <Link shallow={false} href={routePaths.newCarFilter.to || '/'} as={typeof (routePaths.newCarFilter.as) == 'function' ? routePaths.newCarFilter.as({make : row2.value}) : '/'} passHref>
        //                                         <a>
        //                                             <div className={props.selected == _.toLower(row2.value) ? 'flex-items-align-center cursor-pointer ccar-yellow' : 'flex-items-align-center cursor-pointer'}
        //                                                 onClick={(e) => { onSelect(row2.value) }}
        //                                                 >
        //                                                     <img src={row2.icon} />
        //                                                     {row2.value}
        //                                                 </div>
        //                                             </a>
        //                                     </Link>
        //                                 </Menu.Item>
        //                                 )
        //                             })
        //                             }
        //                     </Menu.ItemGroup>
        //                 )
        //             })
        //             }
        //         </Menu>
        //     </Col>
        // </Row>

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
    );
}

export default MakeModal;