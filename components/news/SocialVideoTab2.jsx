import { Avatar, Col, Empty, Row, Tabs, Tooltip } from 'antd';
import axios from "axios";
import _ from 'lodash';
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { formatDate, notEmptyLength, arrayLengthCount } from '../../common-function';
import client from '../../feathers';
import { Form } from '@ant-design/compatible';
import { withRouter } from 'next/dist/client/router';
import Scrollbars from 'react-custom-scrollbars';
import Loading from '../general/Loading';
import { allIcon } from '../../icon';
import SocialVideoSkeletonBox from '../skeleton-loader/SocialVideoSkeletonBox';
import UserAvatar from '../general/UserAvatar';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }


const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};
const VIDEOSIZE = 6;
const AUTHORSIZE = 10;
const authorListHeight = 50;
const SocialVideoTabs = (props) => {


    const [activeKey, setActiveKey] = useState(null);
    const [videolist, setVideolist] = useState([]);
    const [videoLoading, setVideoLoading] = useState(false);
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
        getVideolist();
    }, [filterGroup, authorList])

    function getAuthorList() {

        let match = {
            publisher: 'youtube',
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

    function getVideolist(key) {
        let query = {
            $sort: {
                publishedAt: -1
            },
            $limit: VIDEOSIZE,
            $populate: ['authorId'],
            publisher: 'youtube'
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
                setActiveKey(notEmptyLength(langs) ? langs[0] : null);
            }
        }

        if (query.language) {
            if (query.language === 'all') {
                delete query.language
            }
        }


        setVideoLoading(true);
        client.service('news').find({
            query: query,
        }).then((res) => {
            //Wait for render done just unloading
            setTimeout(() => {
                setVideoLoading(false);
            }, 500);
            if (res.data.length > 0) {
                setVideolist(res.data);
            } else {
                setVideolist([]);
            }
        }).catch(err => {
            setVideoLoading(false);
            // message.error(err.message)
        });

    }

    function isSelectedAuthor(author, selectedAuthor) {
        if (author == null && selectedAuthor == null) {
            return true;
        } else if (notEmptyLength(author) && notEmptyLength(selectedAuthor)) {
            return author._id == selectedAuthor._id;
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
                <div key='authorList' className={!isSelectedAuthor(null, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"} >
                    <Tooltip title="All" placement="right">
                        <a onClick={() => { setFilterGroup({ ...filterGroup, authorId: null, language: null }); setSelectedAuthor(null); }}>
                            <span className='d-inline-block avatar background-grey-lighten-2 overflow-hidden relative-wrapper' style={{ width: 50, height: 50 }} >
                                <img src={allIcon} className="width-50 height-50 absolute-center" />
                            </span>
                        </a>
                    </Tooltip>
                </div>
            );

            let list = data.map(function (item, i) {
                return (
                    <div key={'authorList' + i} className={!isSelectedAuthor(item, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"} >
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

    const _renderVideoList = (data, language) => {
        return (
            <div key={language} className="padding-x-md" style={{ height: '700px', paddingTop: authorListHeight + 10 }}>
                {
                    videoLoading ?
                        <SocialVideoSkeletonBox />
                        :
                        _.isArray(data) && !_.isEmpty(data) ?
                            <Row gutter={[10, 10]}>
                                {data.map(function (item, i) {
                                    return (
                                        <Col key={item._id} xs={24} sm={24} md={12} lg={12} xl={8}>
                                            <div className="wrap">
                                                <div className="video">
                                                    <YouTube videoId={item.youtubeId} opts={opts} />
                                                    {/* <iframe controls autoplay src="https://www.youtube.com/watch?v=gV7YudrTmQ4" style={{width: "100%"}} > */}
                                                    {/* </iframe> */}
                                                </div>

                                                <div className="flex-items-align-start">
                                                    <span>
                                                        <div className="icon">
                                                            <img src={item.channelThumbnailUrl} />

                                                        </div>
                                                    </span>
                                                    <span>
                                                        <div className="title">
                                                            <div className="text-truncate-twoline margin-bottom-sm font-weight-bold">
                                                                {item.title}
                                                            </div>
                                                            <div className="text-truncate">
                                                                {item.authorId ? item.authorId.name : null}
                                                            </div>
                                                            <div className="text-truncate">
                                                                {formatDate(item.publishedAt, "DD-MM-YYYY")}
                                                            </div>
                                                        </div>

                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                                }
                            </Row>
                            :
                            <div className='padding-md'>
                                <Empty></Empty>
                            </div>
                }
            </div>
        )
    }
    return (
        <React.Fragment>
            <Desktop>
            <div className="flex-items-align-stretch authorList">
                <span className="d-inline-block thin-border background-white  margin-left-sm width-auto flex-items-grow-max relative-wrapper content" >
                    <Tabs tabBarStyle={{ paddingLeft: 16 }} defaultActiveKey="all" onChange={(e) => { setFilterGroup({ ...filterGroup, language: e }); }}>
                        {
                            languageCount(selectedAuthor) > 1 ?
                                <Tabs.TabPane tab="All" key="all" >
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'all')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                        {
                            languageExisted('en') ?
                                <Tabs.TabPane tab="English" key="en">
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'en')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                        {
                            languageExisted('cn') ?
                                <Tabs.TabPane tab="Chinese" key="cn">
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'cn')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                        {
                            languageExisted('my') ?
                                <Tabs.TabPane tab="Malay" key="my">
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'my')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                    </Tabs>
                </span>
                <div className="width-100 flex-items-align-center" style={{ height: authorListHeight, position: 'absolute', top: 55, overflow:'scroll' }}>
                    <Tooltip title="All" placement="top">
                        <a onClick={() => { setFilterGroup({ ...filterGroup, authorId: null }); setSelectedAuthor(null); }}>
                            <span className='d-inline-block avatar background-grey-lighten-2 overflow-hidden relative-wrapper margin-x-md' style={{ width: 50, height: 50 }} >
                                <img src={allIcon} className="width-50 height-50 absolute-center" />
                            </span>
                        </a>
                    </Tooltip>
                    {
                        _.map(authorList, function (author) {
                            return (
                                <span className='d-inline-block margin-x-md' onClick={() => { setFilterGroup({ ...filterGroup, authorId: author._id, language: languageCount(author) > 1 ? null : author.language[0] }); setSelectedAuthor(author); }} >
                                    <UserAvatar data={{ avatar: author.avatar || author.thumbnailUrl, name: author.name }} size={40} showTooltip className="cursor-pointer" />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            </Desktop>

            <Tablet>
            <div className="flex-items-align-stretch authorList">
                <span className="d-inline-block thin-border background-white  margin-left-sm width-auto flex-items-grow-max relative-wrapper content" >
                    <Tabs tabBarStyle={{ paddingLeft: 16 }} defaultActiveKey="all" onChange={(e) => { setFilterGroup({ ...filterGroup, language: e }); }}>
                        {
                            languageCount(selectedAuthor) > 1 ?
                                <Tabs.TabPane tab="All" key="all" >
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'all')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                        {
                            languageExisted('en') ?
                                <Tabs.TabPane tab="English" key="en">
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'en')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                        {
                            languageExisted('cn') ?
                                <Tabs.TabPane tab="Chinese" key="cn">
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'cn')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                        {
                            languageExisted('my') ?
                                <Tabs.TabPane tab="Malay" key="my">
                                    {_renderVideoList(notEmptyLength(videolist) ? videolist : [], 'my')}
                                </Tabs.TabPane>
                                :
                                null
                        }
                    </Tabs>
                </span>
                <div className="width-100 flex-items-align-center" style={{ height: authorListHeight, position: 'absolute', top: 55, overflow:'scroll' }}>
                    <Tooltip title="All" placement="top">
                        <a onClick={() => { setFilterGroup({ ...filterGroup, authorId: null }); setSelectedAuthor(null); }}>
                            <span className='d-inline-block avatar background-grey-lighten-2 overflow-hidden relative-wrapper margin-x-md' style={{ width: 50, height: 50 }} >
                                <img src={allIcon} className="width-50 height-50 absolute-center" />
                            </span>
                        </a>
                    </Tooltip>
                    {
                        _.map(authorList, function (author) {
                            return (
                                <span className='d-inline-block margin-x-md' onClick={() => { setFilterGroup({ ...filterGroup, authorId: author._id, language: languageCount(author) > 1 ? null : author.language[0] }); setSelectedAuthor(author); }} >
                                    <UserAvatar data={{ avatar: author.avatar || author.thumbnailUrl, name: author.name }} size={40} showTooltip className="cursor-pointer" />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            </Tablet>
            
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    newCars: state.newCars,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialVideoTabs)));