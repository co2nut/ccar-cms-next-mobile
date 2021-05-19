import { Avatar, Col, Empty, Row, Tabs, Tooltip } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../feathers';
import Scrollbars from 'react-custom-scrollbars';
import { withRouter } from 'next/dist/client/router';
import { Form } from '@ant-design/compatible';
import { notEmptyLength, arrayLengthCount } from '../../common-function';
import Loading from '../general/Loading';
import { SmallDashOutlined } from '@ant-design/icons';
import { allIcon } from '../../icon';



const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const AUTHORSIZE = 10
const SocialNewTabs = (props) => {


    const [activeKey, setActiveKey] = useState(null);
    const [newslist, setNewslist] = useState([]);
    const [newsLoading, setNewsLoading] = useState(false);
    const [authorList, setAuthorList] = useState([]);
    const [authorLoading, setAuthorLoading] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [filterGroup, setFilterGroup] = useState({
        authorId: null,
        language: null,
    });



    useEffect(() => {
        getAuthorList();
    }, [])


    useEffect(() => {
        getNewslist();
    }, [filterGroup, authorList])

    function getAuthorList() {

        let match = {
            publisher: {
                $ne: 'youtube',
            }
        };

        if (props.isNewCar) {
            match.carYear = moment().format('YYYY');

            if (notEmptyLength(props.data)) {
                let data = _.compact([_.toLower(props.data.model)]);
                if (notEmptyLength(data)) {
                    match.keywords = {
                        $in: data,
                    }
                }
            }
        }

        setAuthorLoading(true);
        axios.get(`${client.io.io.uri}getAuthorList`,
            {
                params: {
                    limit: AUTHORSIZE,
                    $match: match,
                }
            }).then((res) => {
                //Wait for render done just unloading
                setTimeout(() => {
                    setAuthorLoading(false);
                }, 500);
                if (notEmptyLength(res.data.data)) {
                    setAuthorList(res.data.data);
                } else {
                    setAuthorList([]);
                }
            }).catch(err => {
                setAuthorLoading(false);
                // message.error(err.message)
            });
    }

    function getNewslist(key) {
        let query = {
            $sort: {
                publishedAt: -1
            },
            $limit: 5,
            $populate: ['authorId'],
            publisher: { $ne: 'youtube' }
        }

        if (props.isNewCar) {
            query.carYear = moment().format('YYYY');
            if (notEmptyLength(props.data)) {
                let temp = _.compact([props.data.model]);
                if (notEmptyLength(temp)) {
                    temp = _.map(temp, function (item) {
                        return _.toLower(item);
                    })
                    query.keywords = {
                        $in: temp,
                    }
                }
            }
        }

        if (filterGroup.authorId != null && filterGroup.authorId != "") {
            query.authorId = filterGroup.authorId;
        } else {
            delete query['authorId'];
        }

        if (filterGroup.language != null && filterGroup.language != "" && filterGroup.language != "all") {
            query.language = filterGroup.language;
            setActiveKey(filterGroup.language);
        } else {
            delete query['language'];
            if (languageCount() > 1) {
                setActiveKey(null);
            } else {
                let langs = [];
                _.forEach(authorList, function (item) {
                    langs = _.union(langs, item.language);
                })
                setActiveKey((langs) ? langs[0] : null);
            }
        }

        setNewsLoading(true)
        client.service('news').find({
            query: query,
        }).then((res) => {
            //Wait for render done just unloading
            setTimeout(() => {
                setNewsLoading(false);
            }, 500);
            if (res.data.length > 0) {
                setNewslist(res.data);
            } else {
                setNewslist([]);
            }
        }).catch(err => {
            setNewsLoading(false)
            // message.error(err.message)
        });


    }


    function isSelectedAuthor(author, selectedAuthor) {
        if (author == null && selectedAuthor == null) {
            return true;
        } else if (notEmptyLength(author) && notEmptyLength(selectedAuthor)) {
            return _.isEqual(author, selectedAuthor);
        } else {
            return false;
        }
    }

    function languageExisted(lang) {
        if (lang != null) {
            if (notEmptyLength(selectedAuthor)) {
                return _.includes(selectedAuthor.language, lang)
            } else {
                let langs = [];
                _.forEach(authorList, function (item) {
                    langs = _.union(langs, item.language);
                })

                return _.includes(langs, lang)
            }
        } else {
            return false;
        }
    }

    function languageCount(author) {
        let langs = [];
        if (notEmptyLength(author)) {
            return notEmptyLength(author.language) ? author.language.length : 0;
        } else {
            _.forEach(authorList, function (item) {
                langs = _.union(langs, item.language);
            })
        }
        return langs.length;
    }

    const _renderAuthorList = (data) => {

        if (notEmptyLength(data)) {
            let allIconHtml = (
                <div key='authorList' className={!isSelectedAuthor(null, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"}>
                    <Tooltip title="All" placement="right">
                        <a onClick={() => { setFilterGroup({ ...filterGroup, authorId: null, language: null }); setSelectedAuthor(null); }}>
                            <span className='d-inline-block avatar background-grey-lighten-2 overflow-hidden relative-wrapper' style={{ width : 50, height : 50 }} >
                              <img src={allIcon} className="width-50 height-50 absolute-center" />
                            </span>
                        </a>
                    </Tooltip>
                </div>
            );

            let list = data.map(function (item, i) {
                return (
                    <div key={'alistData' + i} className={!isSelectedAuthor(item, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"}>
                        <Tooltip title={item.name ? item.name : null} placement="right">
                            <a onClick={() => { setFilterGroup({ ...filterGroup, authorId: item._id, language: languageCount(item) > 1 ? null : item.language[0] }); setSelectedAuthor(item); }}>
                                <Avatar size={50} src={item.thumbnailUrl ? item.thumbnailUrl : null} icon={item.thumbnailUrl ? null : 'user'} />
                            </a>
                        </Tooltip>
                    </div>

                );

            });

            list.unshift(allIconHtml);
            return (
                <Loading spinning={authorLoading}>
                    {list}
                </Loading>
            );
        } else {
            return null;
        }

    }

    const renderContent = (data) => {
        switch (data.language) {
            case "en":
                return (
                    data.content ? data.content : null
                )
            case "cn":
                return (
                    data.content ? data.content2 : null
                )
            case 'my':
                return (
                    data.content3 ? data.content3 : null
                )
            default:
                break;
        }
    }

    const _renderNewsList = (data) => {
        if (notEmptyLength(data)) {
            return (
                    <Row gutter={[10, 10]}>
                         <div key='newsList' className="d-flex scroller-type" style={{overflow:'scroll' }}>
                        {data.map(function (item, i) {
                                return (
                                    <Col key={item._id} xs={18} sm={18} md={18} lg={18} xl={18}>
                                        <div className="box-shadow-thin round-border wrap" style={{height:'300px'}}>
                                        <a style={{color:'#000000'}} href={item.originalUrl} >
                                            <div className="inews">
                                                <img src={item.thumbnailUrl} style={{ width: "100%", height:'150px' }} />
                                            </div>
                                            <div className="ftitle">
                                                <h4>{item.title}</h4>
                                                <p>
                                                    {renderContent(item)}
                                                </p>
                                                <span style={{ textTransform: 'capitalize' }}>
                                                    {item.authorId ? item.authorId.name : null} | {moment(item.publishedAt).format('DD-MM-YYYY')}
                                                </span>
                                            </div>
                                        </a>
                                        </div> 
                                    </Col>
                                )
                            })
                        }
                        </div>
                    </Row>
            )
        } else {
            return null;
        }
    }


    return (

        <React.Fragment>
            <div className="padding-x-xs" style={{touchAction:'pan-y'}}>
                {_renderNewsList(newslist)}
            </div>
        </React.Fragment>

    );
}


const mapStateToProps = state => ({
    app: state.app,
    newCars: state.newCars,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialNewTabs)));