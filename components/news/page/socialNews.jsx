import { Col, Form, Icon, message, Row, Tabs } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { arrayLengthCount, notEmptyLength, objectRemoveEmptyValue } from '../../../common-function';
import client from '../../../feathers';
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions';
import LayoutV2 from '../../general/LayoutV2';
import AuthorList from '../AuthorList';
import AuthorListScroll from '../AuthorListScroll';
import SocialNewsBoxs from '../SocialNewsBoxs';
import { getLanguages, languageCount, languageExisted } from './config';


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


const AUTHORSIZE = 6;
const NEWSSIZE = 30;
const VIDEOSIZE = 36;
const defaultLanguages = [{
    key: 'en',
    text: 'English',
}, {
    key: 'cn',
    text: 'Chinese',
}, {
    key: 'my',
    text: 'Malay',
}];
const containerHeight = 500;
let containerRef = {};
containerRef['all'] = React.createRef();
_.forEach(defaultLanguages, function (language) {
    containerRef[language.key] = React.createRef();
})


const SocialNews = (props) => {

    const [tabKey, setTabKey] = useState('news');
    const [newsActiveLanguage, setNewsActiveLanguage] = useState('all');
    const [videoActiveLanguage, setVideoActiveLanguage] = useState('all');
    const [newsSelectedAuthor, setNewsSelectedAuthor] = useState({});
    const [videoSelectedAuthor, setVideoSelectedAuthor] = useState({});
    const [scrolledToBottom, setScrolledToBottom] = useState(false);
    const [newsAuthors, setNewsAuthors] = useState([]);
    const [videoAuthors, setVideoAuthors] = useState([]);
    const [videos, setVideos] = useState([]);
    const [videoTotal, setVideoTotal] = useState(0);
    const [videoPage, setVideoPage] = useState(1);
    const [news, setNews] = useState([]);
    const [newsTotal, setNewsTotal] = useState(0);
    const [newsPage, setNewsPage] = useState(1);
    const [newsFilterGroup, setNewsFilterGroup] = useState({
        author: null,
        language: null,
    });
    const [videoFilterGroup, setVideoFilterGroup] = useState({
        author: null,
        language: null,
    });
    const [htmlDocument, setHtmlDocument] = useState({
    });
    const [htmlWindow, setHtmlWindow] = useState({
    });

    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        let query = props.router.query;
        if (!query) {
            query = {};
        }
        if (query.type == 'videos') {
            setTabKey('videos')
        } else {
            setTabKey('news')
        }
    }, [props.router.query])

    useEffect(() => {
        if (document) {
            setHtmlDocument(document);
        }
        if (window) {
            setHtmlWindow(window);
        }
        getAuthorList();
    }, [])

    useEffect(() => {
        props.updateActiveMenu('5');
    }, [])

    useEffect(() => {
    }, [newsAuthors])

    useEffect(() => {
        if (scrolledToBottom && arrayLengthCount(news) < newsTotal && tabKey == 'news') {
            setNewsPage(newsPage + 1);
        }
        if (scrolledToBottom && arrayLengthCount(videos) < videoTotal && tabKey == 'videos') {
            setVideoPage(videoPage + 1);
        }
    }, [scrolledToBottom])

    useEffect(() => {
        if (newsPage == 1) {
            getData(0, 'news');
        } else {
            setNewsPage(1);
        }
    }, [newsFilterGroup])

    useEffect(() => {
        if (videoPage == 1) {
            getData(0, 'video');
        } else {
            setVideoPage(1);
        }
    }, [videoFilterGroup])

    useEffect(() => {
        getData((newsPage - 1) * NEWSSIZE, 'news');
    }, [newsPage])

    useEffect(() => {
        getData((videoPage - 1) * VIDEOSIZE, 'video');
    }, [videoPage])


    function getAuthorList() {

        try {
            let promises = [];

            promises.push(
                axios.get(`${client.io.io.uri}getAuthorList`,
                    {
                        params: {
                            $match: {
                                publisher: {
                                    $ne: 'youtube',
                                }
                            },
                        }
                    })
            )

            promises.push(
                axios.get(`${client.io.io.uri}getAuthorList`,
                    {
                        params: {
                            $match: {
                                publisher: 'youtube',
                            },
                        }
                    })
            )

            Promise.all(promises).then(([newsAuthorRes, videoAuthorRes]) => {
                console.log(newsAuthorRes);
                if (notEmptyLength(newsAuthorRes.data.data)) {
                    newsAuthorRes.data.data = _.concat([{
                        name: 'All',
                        avatar: '/3-dots.png'
                    }], newsAuthorRes.data.data);
                    setNewsAuthors(newsAuthorRes.data.data);
                } else {
                    setNewsAuthors([]);
                }

                if (notEmptyLength(videoAuthorRes.data.data)) {
                    videoAuthorRes.data.data = _.concat([{
                        name: 'All',
                        avatar: '/3-dots.png'
                    }], videoAuthorRes.data.data);
                    setVideoAuthors(videoAuthorRes.data.data);
                } else {
                    setVideoAuthors([]);
                }
            }).catch(err => {
                props.loading(false);
                message.error(err.message)
            });
        } catch (error) {
            message.error(error);
        }
    }


    function getData(skip, tabKey) {
        let query = {
            $sort: {
                publishedAt: -1
            },
            publisher: tabKey == 'news' ? { $ne: 'youtube' } : 'youtube',
            $skip: skip,
            $limit: tabKey == 'news' ? NEWSSIZE : VIDEOSIZE,
            $populate: ['authorId'],
        }


        if (tabKey == 'news') {
            if (newsFilterGroup.author == null || !_.isPlainObject(newsFilterGroup.author) || !notEmptyLength(objectRemoveEmptyValue(newsFilterGroup.author)) || !newsFilterGroup.author._id) {
                delete query['authorId'];
            } else {
                query.authorId = newsFilterGroup.author._id;
            }

            if (newsFilterGroup.language != null && newsFilterGroup.language != "" && newsFilterGroup.language != "all") {
                query.language = newsFilterGroup.language;
            } else {
                delete query['language'];
            }

        } else {
            if (videoFilterGroup.author == null || !_.isPlainObject(videoFilterGroup.author) || !notEmptyLength(objectRemoveEmptyValue(videoFilterGroup.author)) || !videoFilterGroup.author._id) {
                delete query['authorId'];
            } else {
                query.authorId = videoFilterGroup.author._id;
            }

            if (videoFilterGroup.language != null && videoFilterGroup.language != "" && videoFilterGroup.language != "all") {
                query.language = videoFilterGroup.language;
            } else {
                delete query['language'];
            }
        }


        setIsLoading(true);
        client.service('news').find({
            query: query,
        }).then((res) => {
            setIsLoading(false);
            setHasMore(true);
            setScrolledToBottom(false);
            if (tabKey == 'news') {
                if (res.data.length > 0) {
                    setNews(newsPage == 1 ? res.data : news.concat(res.data));
                    setNewsTotal(res.total)
                }

            } else {
                if (res.data.length > 0) {
                    setVideos(videoPage == 1 ? res.data : videos.concat(res.data));
                    setVideoTotal(res.total)
                }
            }
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        });


    }

    function checkScrolledToBottom(ref) {
        try {
            if (!!ref) {

                let scrollHeight = ref.current.getScrollHeight();
                let currentPosition = ref.current.getValues();
                currentPosition = currentPosition.scrollTop + currentPosition.clientHeight;

                setScrolledToBottom(currentPosition - scrollHeight >= -2000 ? true : false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    function isValidAuthor(author) {
        return !(!_.isPlainObject(author) || !notEmptyLength(objectRemoveEmptyValue(author)) || !author._id);
    }

    // function isSelectedAuthor(author) {
    //     if (tabKey == 'news') {
    //         return newsSelectedAuthor._id == author._id;
    //     } else {
    //         return videoSelectedAuthor._id == author._id;
    //     }
    // }

    function getNextActiveLanguage(author) {
        let nextActiveLanguage = 'all';
        if (tabKey == 'news') {
            nextActiveLanguage = languageCount(isValidAuthor(author) ? author : newsAuthors) > 1 || !notEmptyLength(getLanguages(isValidAuthor(author) ? author : newsAuthors)) ? 'all' : getLanguages(isValidAuthor(author) ? author : newsAuthors)[0]
        } else {
            nextActiveLanguage = languageCount(isValidAuthor(author) ? author : videoAuthors) > 1 || !notEmptyLength(getLanguages(isValidAuthor(author) ? author : videoAuthors)) ? 'all' : getLanguages(isValidAuthor(author) ? author : videoAuthors)[0]
        }

        return nextActiveLanguage;
    }

    return (
        <LayoutV2 scrollRange={(_.get(htmlDocument, ['body', 'scrollHeight']) || 500) * 0.5} onScrolledBottom={() => {
            if (arrayLengthCount(news) < newsTotal && tabKey == 'news') {
                setNewsPage(newsPage + 1);
            }
            if (arrayLengthCount(videos) < videoTotal && tabKey == 'videos') {
                setVideoPage(videoPage + 1);
            }
        }}>

            <Tablet>
                <div className="section">
                    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <Row gutter={[0, 10]}>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <div className="background-white margin-top-md padding-sm width-100">
                                    <AuthorListScroll authors={newsAuthors } size={30} avatarClassName={`thin-border border-grey cursor-pointer`} selectedAuthor={newsSelectedAuthor} onClick={(author) => {
                                        let nextActiveLanguage = getNextActiveLanguage(author);
                                            setNewsFilterGroup({
                                                ...newsFilterGroup,
                                                language: nextActiveLanguage != newsActiveLanguage ? nextActiveLanguage : newsActiveLanguage,
                                                author: author,
                                            })
                                            setNewsActiveLanguage(nextActiveLanguage != newsActiveLanguage ? nextActiveLanguage : newsActiveLanguage);
                                            setNewsSelectedAuthor(author);
                                    }} />
                                </div>
                            </Col>
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                <div className="width-100 background-white" >
                                    <Tabs activeKey={newsActiveLanguage} onChange={(e) => {
                                            setNewsFilterGroup({ ...newsFilterGroup, language: e });
                                            setNewsActiveLanguage(e)
                                    }}
                                    >
                                        {/* <Tabs activeKey={activeKey}  onChange={(e) => { setFilterGroup({ ...filterGroup, language: e }) }}> */}
                                        {
                                            languageCount(
                                                    isValidAuthor(newsFilterGroup.author) ? newsFilterGroup.author : newsAuthors
                                            ) > 1 ?
                                                <Tabs.TabPane tab="All" key='all'>
                                                    <Scrollbars autoHide style={{ height: containerHeight, width: '100%' }} ref={containerRef['all']} onScrollStop={() => { checkScrolledToBottom(containerRef['all']) }} >
                                                        <SocialNewsBoxs data={news} />
                                                    </Scrollbars>
                                                </Tabs.TabPane>
                                                :
                                                null
                                        }
                                        {
                                            _.map(defaultLanguages, function (language) {
                                                return (
                                                    languageExisted(
                                                        language.key,
                                                        isValidAuthor(newsFilterGroup.author) ? newsFilterGroup.author : newsAuthors
                                                    ) ?
                                                        <Tabs.TabPane tab={language.text} key={language.key}>
                                                            <Scrollbars autoHide style={{ height: containerHeight, width: '100%' }} ref={containerRef[language.key]} onScrollStop={() => { checkScrolledToBottom(containerRef[language.key]) }} >
                                                                <SocialNewsBoxs data={news} />
                                                            </Scrollbars>
                                                        </Tabs.TabPane>
                                                        :
                                                        null
                                                    )
                                                })
                                            }
                                    </Tabs> 
                                    {
                                        scrolledToBottom ?
                                            <div className="width-100 padding-md flex-justify-center flex-items-align-center">
                                                {

                                                    arrayLengthCount(news) < newsTotal ?
                                                        <Icon type="loading" style={{ fontSize: 30 }} />
                                                        :
                                                        '===== End Of News ====='
                                                }
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="section">
                    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <Row gutter={[0, 10]}>

                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <div className="background-white margin-top-md padding-sm width-100">
                                    <AuthorListScroll authors={newsAuthors } size={30} avatarClassName={`thin-border border-grey cursor-pointer`} selectedAuthor={newsSelectedAuthor} onClick={(author) => {
                                        let nextActiveLanguage = getNextActiveLanguage(author);
                                            setNewsFilterGroup({
                                                ...newsFilterGroup,
                                                language: nextActiveLanguage != newsActiveLanguage ? nextActiveLanguage : newsActiveLanguage,
                                                author: author,
                                            })
                                            setNewsActiveLanguage(nextActiveLanguage != newsActiveLanguage ? nextActiveLanguage : newsActiveLanguage);
                                            setNewsSelectedAuthor(author);
                                    }} />
                                </div>
                            </Col>
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                <div className="width-100 background-white" >
                                    <Tabs activeKey={newsActiveLanguage} onChange={(e) => {
                                            setNewsFilterGroup({ ...newsFilterGroup, language: e });
                                            setNewsActiveLanguage(e)
                                    }}
                                    >
                                        {/* <Tabs activeKey={activeKey}  onChange={(e) => { setFilterGroup({ ...filterGroup, language: e }) }}> */}
                                        {
                                            languageCount(
                                                    isValidAuthor(newsFilterGroup.author) ? newsFilterGroup.author : newsAuthors
                                            ) > 1 ?
                                                <Tabs.TabPane tab="All" key='all'>
                                                    <Scrollbars autoHide style={{ height: containerHeight, width: '100%' }} ref={containerRef['all']} onScrollStop={() => { checkScrolledToBottom(containerRef['all']) }} >
                                                        <SocialNewsBoxs data={news} />
                                                    </Scrollbars>
                                                </Tabs.TabPane>
                                                :
                                                null
                                        }
                                        {
                                            _.map(defaultLanguages, function (language) {
                                                return (
                                                    languageExisted(
                                                        language.key,
                                                        isValidAuthor(newsFilterGroup.author) ? newsFilterGroup.author : newsAuthors
                                                    ) ?
                                                        <Tabs.TabPane tab={language.text} key={language.key}>
                                                            <Scrollbars autoHide style={{ height: containerHeight, width: '100%' }} ref={containerRef[language.key]} onScrollStop={() => { checkScrolledToBottom(containerRef[language.key]) }} >
                                                                <SocialNewsBoxs data={news} />
                                                            </Scrollbars>
                                                        </Tabs.TabPane>
                                                        :
                                                        null
                                                    )
                                                })
                                            }
                                    </Tabs>
                                    {
                                        scrolledToBottom ?
                                            <div className="width-100 padding-md flex-justify-center flex-items-align-center">
                                                {

                                                    arrayLengthCount(news) < newsTotal ?
                                                        <Icon type="loading" style={{ fontSize: 30 }} />
                                                        :
                                                        '===== End Of News ====='
                                                }
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Mobile>

        </LayoutV2>
    )
}

const mapStateToProps = state => ({
    app: state.app,
    newCars: state.newCars,
});

const mapDispatchToProps = {
    loading: loading,
    updateActiveMenu: updateActiveMenu,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialNews)));
