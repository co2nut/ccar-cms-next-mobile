
import { Card, Col, Divider, Form, message, Row, Button, Icon, Upload } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import client from '../../../feathers';
import CarFreakLayout from '../components/car-freak-layout';
import ClubDiscussionBoxUi from '../components/club/club-discussion-box-ui';
import ClubEventBox from '../components/club/club-event-box';
import ClubMemberBox from '../components/club/club-member-box';
import ClubProfolioBanner from '../components/club/club-profolio-banner';
import OtherClubsBox from '../components/club/other-clubs-box';
import { carFreakGlobalSearch, clubProfileViewTypes, getViewType } from '../config';
import LayoutV2 from '../../general/LayoutV2';
import ClubFreaksBox from '../components/club/ClubFreaksBox';
import ClubSocialBoardBox from '../components/club/ClubSocialBoardBox';
import {
    updateActiveMenu
} from '../../../redux/actions/app-actions';
import { generateDummyObj } from '../../../dummy';
import MediaClubUi from '../components/club/media-club-ui';
import { imageNotFound } from '../../profile/config';
import { formatNumber, notEmptyLength } from '../../../common-function';
import { routePaths } from '../../../route';
import JoinClubButton from '../components/club/join-club-button';
import ShareButtonDialog from '../../general/ShareButtonDialog';
import WriteClubModal from '../components/club/write-club-modal';
import ClubApprovalModal from '../components/club/club-approval-modal';
import ClubInviteModal from '../components/club/club-invite-modal';
import Axios from 'axios';
import { v4 } from 'uuid';
import ClubAvatar from '../components/club/club-avatar';


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

const defaultHeight = 200;
const PAGE_SIZE = 36;

const tabs = [
    {
        text: 'Freaks',
        value: 'carfreaks',
    },
    {
        text: 'Social Board',
        value: 'socialboard',
    },
    {
        text: 'Members',
        value: 'members',
    },
    {
        text: 'Events',
        value: 'events',
    },
    // {
    //     text: 'Media',
    //     value: 'media',
    // },
];


const SocialClubProfilePage1 = (props) => {

    const [club, setClub] = useState({})
    const [tabKey, setTabKey] = useState(tabs[0].value);
    const [clubJoin, setClubJoin] = useState({});

    const [viewType, setViewType] = useState('non-member');

    const [writeClubVisible, setWriteClubVisible] = useState(false);
    const [inviteVisible, setInviteVisible] = useState(false)
    const [clubApprovalVisible, setClubApprovalVisible] = useState(false)

    useEffect(() => {
        props.updateActiveMenu('6');
    }, [])

    useEffect(() => {
        let query = props.router.query;
        if (!query) {
            query = {};
        }

        console.log(query);
        setTabKey(_.get(_.find(tabs, function (tab) {
            return tab.value == query.tab;
        }), ['value']) || 'carfreaks');

    }, [props.router.query])

    useEffect(() => {
        getClub()
    }, [props.router.query.id])

    useEffect(() => {

        getClubJoin();

    }, [props.user.authenticated, props.router.query.id])


    useEffect(() => {
        setViewType(getViewType(clubJoin));
    }, [clubJoin])


    function getClubJoin() {

        if (props.router.query.id && _.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id'])) {
            client.service('clubjoin').find({
                query: {
                    $limit: 1,
                    $skip: 0,
                    clubId: props.router.query.id,
                    userId: _.get(props.user, ['info', 'user', '_id']),
                }
            }).then(res => {
                setClubJoin(_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data'])) ? _.get(res, ['data', 0]) : {});
            }).catch(err => {
                message.error(err.message)
            });
        }
    }


    function getClub() {

        if (props.router.query.id) {
            client.service('clubs').find({
                query: {
                    $limit: 1,
                    $skip: 0,
                    _id: props.router.query.id,
                    $populate: 'userId'
                }
            }).then(res => {
                setClub(_.isArray(_.get(res, ['data'])) && !_.isEmpty(_.get(res, ['data'])) ? _.get(res, ['data', 0]) : {});
            }).catch(err => {
                message.error(err.message)
            });
        }
    }


    function handleSumbitCoverPhoto(coverPhoto) {
        if (coverPhoto && _.get(club, ['_id'])) {
            client.authenticate().then((res) => {
                let formData = new FormData();
                var fileName = v4() + "-" + coverPhoto.name.split('.').join("-") + "-" + new Date().getTime();

                formData.append('images', coverPhoto.originFileObj, fileName);

                //Upload Image
                Axios.post(`${client.io.io.uri}upload-images-array`,
                    formData
                    , {
                        headers: {
                            'Authorization': client.settings.storage.storage.storage['feathers-jwt'],
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then((res) => {
                    if (notEmptyLength(_.get(res, ['data', 'result']))) {
                        coverPhoto = res.data.result[0].url;
                    } else {
                        coverPhoto = null;
                    }

                    client.service('clubs').patch(club._id, { clubBackgroundImage: coverPhoto }).then(res => {
                        setClub({
                            ...club,
                            clubBackgroundImage: _.get(res, ['clubBackgroundImage'])
                        })
                    }).catch(err => {
                        message.error(err.message)
                    });

                })
            }).catch(err => {
                message.error(err.message)
            });

        }
    }

    const _renderView = (value) => {
        switch (value) {
            case 'carfreaks':
                return <ClubFreaksBox viewType={getViewType(clubJoin)} club={club} /> 
                break;
            case 'socialboard':
                return <ClubSocialBoardBox viewType={getViewType(clubJoin)} club={club} />
                break;
            // case 'socialboard':
            //     return <ClubSocialBoardBox viewType={getViewType(clubJoin)} clubId={_.get(club, ['_id'])} />
            //     break;
            // case 'discussions':
            //     return <ClubDiscussionBox viewType={getViewType(clubJoin)} clubId={_.get(club, '_id')} />
            //     break;
            case 'members':
                return <ClubMemberBox viewType={getViewType(clubJoin)} clubId={_.get(club, ['_id'])} />
                break;
            case 'events':
                return <ClubEventBox viewType={getViewType(clubJoin)} data={club} />
                break;
            case 'media':
                return <MediaClubUi />
                break;
            default:
                break;
        }
    }

    return (
        <React.Fragment>
            <LayoutV2 searchTypes={carFreakGlobalSearch} enterSearchCarFreaks scrollRange={document.body.scrollHeight * 0.5} hideOpenApp>

            <Tablet>
                    <CarFreakLayout>
                        <Row gutter={[15, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <ClubProfolioBanner viewType={getViewType(clubJoin)} data={club} onChange={(data) => {
                                    if (_.isPlainObject(data) && !_.isEmpty(data)) {
                                        setClub(data);
                                    }
                                }}></ClubProfolioBanner>  
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Scrollbars style={{ width: '100%' }} autoHide autoHeight>
                                    <div className="flex-justify-start flex-items-align-center">
                                        {
                                            _.map(tabs || [], function (tab) {
                                                return (
                                                    <span className={`d-inline-block flex-items-no-shrink cursor-pointer margin-x-lg h7 ${tabKey == tab.value ? 'ccar-yellow border-bottom-ccar-yellow' : 'black'}`} onClick={(e) => { setTabKey(tab.value); }} >
                                                        {tab.text}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </Scrollbars>
                                <Divider style={{ margin: '10px 0px 10px 0px' }} type="horizontal"></Divider>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                {_renderView(tabKey)}
                            </Col>
                            {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Card
                                    title="Other Carfreaks Club(s)"
                                >
                                    <OtherClubsBox clubId={_.get(club, ['_id'])} userId={_.get(props.user, ['info', 'user', '_id'])} />
                                </Card>
                            </Col> */}
                        </Row>
                    </CarFreakLayout>
                </Tablet>

                <Mobile>
                    <CarFreakLayout hideScope hideAddPost>
                        <div className="width-100 relative-wrapper padding-md" style={{ backgroundImage: `url("${_.get(club, `clubBackgroundImage`) || ''}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: defaultHeight, backgroundPosition: 'center' }}>
                            <div className='background-black opacity-60 absolute-center'>
                            </div>

                            <div style={{ display: 'inline-block' }} className='width-30 flex-items-align-start'>
                                <Row gutter={[0, 20]} className="width-100">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <div className="width-100">
                                            <ClubAvatar data={club} size={80} showPreview />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ display: 'inline-block' }} className='width-70 flex-items-align-start'>
                                <Row gutter={[0, 10]}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: 0 }}>
                                        <div className="width-100 headline white font-weight-bold text-truncate">
                                            {_.get(club, `clubName`) || ''}
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: 0 }}>
                                        <div className={`width-100 flex-justify-start flex-items-align-center`}>
                                            <span className='d-inline-block text-align-center margin-right-lg' >
                                                <div className="font-weight-normal white">
                                                    {formatNumber(_.get(club, `clubTotalPosts`) || 0, 'auto')}
                                                </div>
                                                <div className="small-text font-weight-light white">
                                                    Posts
                                                    </div>
                                            </span>
                                            <span className='d-inline-block text-align-center margin-right-lg' >
                                                <div className="font-weight-normal white">
                                                    {formatNumber(_.get(club, `clubTotalDiscussions`) || 0, 'auto')}
                                                </div>
                                                <div className=" small-text font-weight-light white">
                                                    Discussions
                                                    </div>
                                            </span>
                                            <span className='d-inline-block text-align-center margin-right-lg' >
                                                <div className="font-weight-normal white">
                                                    {formatNumber(_.get(club, `clubTotalMembers`) || 0, 'auto')}
                                                </div>
                                                <div className=" small-text font-weight-thin white">
                                                    Members
                                                    </div>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <div className={`width-100`}>
                                            {
                                                viewType == clubProfileViewTypes[3] || viewType == clubProfileViewTypes[2] ?
                                                    <span className='d-inline-block margin-right-md' >
                                                        <JoinClubButton club={club} clubId={_.get(club, ['_id'])} userId={_.get(props.user, ['info', 'user', '_id'])}
                                                            onSuccess={(res) => {

                                                                if (_.get(res, ['type']) == 'approved') {
                                                                    window.location.reload();
                                                                }
                                                            }}
                                                            joinButton={(joinAction) => {
                                                                return (
                                                                    <Button size="small" className=" background-ccar-button-yellow border-ccar-button-yellow padding-x-sm black  small-text">Join</Button>
                                                                )
                                                            }}
                                                            joinedButton={() => {
                                                                return (
                                                                    <Button size="small" className=" background-ccar-button-yellow border-ccar-button-yellow padding-x-sm black  small-text">Joined</Button>
                                                                )
                                                            }}
                                                            pendingButton={() => {
                                                                return (
                                                                    <Button size="small" className=" background-ccar-button-yellow border-ccar-button-yellow padding-x-sm black  small-text">Pending Approval</Button>
                                                                )
                                                            }}
                                                        />
                                                    </span>
                                                    :
                                                    <Button size="small" className=" background-ccar-button-yellow border-ccar-button-yellow padding-x-sm black margin-right-md small-text" onClick={(e) => { setInviteVisible(true) }}>+ Invite</Button>
                                            }

                                            {
                                                viewType == clubProfileViewTypes[0] ?
                                                    <Button size="small" className=" background-black-opacity-30 white margin-right-md white-border small-text" onClick={(e) => { setClubApprovalVisible(true) }}>Request</Button>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="width-100">
                                <Scrollbars autoHeight autoHeightMax={45} autoHide>
                                    <div className="text-overflow-break width-100 white small-text font-weight-thin">
                                        {_.get(club, `clubBio`) || ''}
                                    </div>
                                </Scrollbars>
                            </div>


                            <span className='d-inline-block ' style={{ position: 'absolute', right: 10, top: 10 }} >
                                {
                                    viewType == clubProfileViewTypes[0] ?
                                        <Icon type="edit" className="white margin-right-sm" onClick={(e) => { setWriteClubVisible(true) }} />
                                        :
                                        null
                                }
                                <ShareButtonDialog link={`/social-club/${_.get(club, ['_id'])}`}><Icon type="share-alt" className="white" ></Icon></ShareButtonDialog>
                            </span>

                            {
                                viewType == clubProfileViewTypes[0] ?
                                    <span className='d-inline-block ' style={{ position: 'absolute', bottom: 10, right: 10 }} >
                                        <Upload {...props} showUploadList={false} onChange={(e) => { handleSumbitCoverPhoto(e.file); }} multiple={false} accept="image/*">
                                            <Icon type="camera" className="white" style={{ fontSize: 20 }} />
                                        </Upload>
                                    </span>
                                    :
                                    null
                            }

                        </div>
                        <Row gutter={[15, 15]} style={{ marginTop: '10px' }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Scrollbars style={{ width: '100%' }} autoHide autoHeight>
                                    <div className="flex-justify-start flex-items-align-center">
                                        {
                                            _.map(tabs || [], function (tab) {
                                                return (
                                                    <span className={`d-inline-block flex-items-no-shrink cursor-pointer margin-x-lg ${tabKey == tab.value ? 'ccar-yellow border-bottom-ccar-yellow' : 'black'}`}
                                                        onClick={(e) => {
                                                            props.router.push(`${routePaths.socialClubDetails.to}?tab=${tab.value || ''}`, routePaths.socialClubDetails.as(club, { tab: tab.value }), { shallow: true })
                                                        }} >
                                                        {tab.text}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </Scrollbars>
                                <Divider style={{ margin: '10px 0px 10px 0px' }} type="horizontal"></Divider>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                {_renderView(tabKey)}
                            </Col>
                        </Row>
                    </CarFreakLayout>
                </Mobile>
            </LayoutV2>


            <WriteClubModal
                editMode={true}
                data={club}
                notify
                visible={writeClubVisible}
                onCancel={() => {
                    setWriteClubVisible(false);
                }}
                onUpdate={(res) => {
                    if (_.isPlainObject(res) && !_.isEmpty(res)) {
                        setClub(res)
                    }
                }}
            ></WriteClubModal>

            <ClubInviteModal
                visible={inviteVisible}
                onCancel={() => {
                    setInviteVisible(false);
                }}
                clubId={_.get(club, ['_id'])}
                userId={_.get(props.user, ['info', 'user', '_id'])}
            >

            </ClubInviteModal>

            <ClubApprovalModal
                visible={clubApprovalVisible}
                onCancel={() => {
                    setClubApprovalVisible(false);
                }}
                clubId={_.get(club, ['_id'])}
            >

            </ClubApprovalModal>
        </React.Fragment>
    )

}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    userlikes: state.userlikes,
    carFreak: state.carFreak,
});

const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(SocialClubProfilePage1)));