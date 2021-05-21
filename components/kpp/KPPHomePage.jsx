import { Button, Col, Divider, Empty, Icon, message, Modal, Row, Drawer} from 'antd';
import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import client from '../../feathers';
import Question from './question';
import LayoutV2 from '../general/LayoutV2';
import { notEmptyLength } from '../../common-function';
import { updateActiveMenu } from '../../redux/actions/app-actions';
import CustomTabs from '../general/CustomTabs';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { address } from '../../icon';
import { routePaths } from '../../route';



const banner = 'hands-on-wheel.png'
const ads = '20-Car-Dealership-Promotion-Ideas.jpg'


const KPPIndex = (props) => {
    const [loading, setLoading] = useState([])
    const [tabIndex, setTabIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    const [showAnswer, setShowAnswer] = useState(false)
    const [showEnRevisionModal, setShowEnRevisionModal] = useState(false)
    const [showBmRevisionModal, setShowBmRevisionModal] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [bmModalVisible, setBmModalVisible] = useState(false)

    // onClose = () => {
    //     this.setState({
    //         visible: false,
    //     });
    // };

    const showModal = () => {
        setIsModalVisible(true);
      };

      const handleCancel = () => {
        setIsModalVisible(false);
      };
    
      const handleOk = () => {
        props.router.push('/kpp/kpp-en')
      };

      const mula = () => {
        props.router.push('/kpp/kpp-bm')
      };

      const batal = () => {
        setBmModalVisible(false);
      };
    
    useEffect(() => {
        props.updateActiveMenu('8');
        // setLoading(true)
        getQuestions();

    }, [])

    const getQuestions = () => {

        axios.get(`${client.io.io.uri}randomKppQuestions`, {
            params: {
                $match: {
                    language: 'EN',
                },
                $sort: {
                    weight: -1,
                    createdAt: -1,
                },
                limit: 1,
            }
        }).then(res => {
            setShowAnswer(false)
            if (notEmptyLength(res.data.data)) {
                setQuestions(res.data.data);
            } else {
                setQuestions([]);
            }

        }).catch(err => {
            message.error(err.message)
        });
    }


    const handlePage = () => {

        switch (tabIndex) {
            case 0:
                setShowEnRevisionModal(true);
                break;
            case 1:
                setShowBmRevisionModal(true);
                break;
            case 2:
                props.router.push('/kpp/kpp-en', undefined, { shallow : false });
                break;
            case 3:
                props.router.push('/kpp/kpp-bm', undefined, { shallow : false });
                break;

            default:
                break;
        }
    }

    const _renderBanner = () => {
        let tabs = ['Revision', 'Ulang Kaji', 'KPP Test (EN)', 'Ujian Kpp (BM)'];
        let tabPanels = ['Come with questions and answers to help you study effectively', 'Lengkap dengan soalan dan jawapan untuk membantu anda belajar dengan lebih efektif', 'English KPP Test Paper', 'Kertas Ujian KPP Bahasa Melayu'];

        tabs = _.map(tabs, function (tab) {
            return <div className='flex-justify-center flex-items-align-center white fill-parent subtitle1 font-weight-bold'>
                {tab}
            </div>
        })

        tabPanels = _.map(tabPanels, function (tabPanel) {
            return <div className='flex-justify-center flex-items-align-center white fill-parent subtitle1 padding-md'>
                {tabPanel}
                {/* {_.upperCase(props.language) == 'BM' ? 
                <div className='fill-parent flex-justify-center flex-items-align-center'>
                    <Button onClick={(e) => { handlePage() }} shape="round" className="padding-x-xl background-ccar-yellow border-ccar-yellow white font-weight-bold subtitle1"> Mula </Button>
                </div>
                :
                <div className='fill-parent flex-justify-center flex-items-align-center'>
                    <Button onClick={(e) => { handlePage() }} shape="round" className="padding-x-xl background-ccar-yellow border-ccar-yellow white font-weight-bold subtitle1"> Mula </Button>
                </div>
                } */}
            </div>
        })
        return (
            <React.Fragment>
                <div className='relative-wrapper fill-parent'>
                    <div className="margin-top-sm">We are using questions sets from real test sheet provided by KPP(Kurikulum Pendidikan Pemandu) which approved by Jabatan Pengangkutan Jalan Malaysia</div>

                    <div className="relative-wrapper thickBorder round-border margin-top-md padding-sm " onClick={(e) => { setShowEnRevisionModal(true) }} style={{width:'95%', backgroundImage: `url('/assets/kpp/1.jpg')`, backgroundSize:'100%', backgroundPosition:'center' }}>
                        <div>
                            <p style={{marginBottom:'0px', color:'#ffffff', fontWeight:'bold'}}>Revision (EN)</p>
                            <p style={{marginBottom:'5px', color:'#ffffff'}}>Come with questions and answers to help you study effectively.</p>
                        </div>
                        <span className="flex-items-align-center" style={{position:'absolute', top:0, bottom:0, right:'-15px', margin:'auto'}}>
                            <Icon type="right-circle" theme="filled" style={{color:'#ffcc32', fontSize:'30px', backgroundColor:'#ffffff', borderRadius:'16px'}} />
                            {/* <Icon type="right-circle" theme="twoTone" /> */}
                        </span>
                    </div>

                    <div className="relative-wrapper thickBorder round-border margin-top-md padding-sm" onClick={(e) => { setShowBmRevisionModal(true) }} style={{width:'95%', backgroundImage: `url('/assets/kpp/2.jpg')`, backgroundSize:'100%', backgroundPosition:'center'}}>
                        <div>
                            <p style={{marginBottom:'0px', color:'#ffffff', fontWeight:'bold'}}>Ulang Kaji (BM)</p>
                            <p style={{marginBottom:'5px', color:'#ffffff'}}>Lengkap dengan soalan dan jawapan untuk membantu anda belajar dengan lebih efektif.</p>
                        </div>
                        <span className="flex-items-align-center" style={{position:'absolute', top:0, bottom:0, right:'-15px', margin:'auto'}}>
                            <Icon type="right-circle" theme="filled" style={{color:'#ffcc32', fontSize:'30px', backgroundColor:'#ffffff', borderRadius:'16px'}} />
                        </span>
                    </div>

                    <div className="relative-wrapper thickBorder round-border margin-top-md padding-sm" onClick={showModal} style={{width:'95%', backgroundImage: `url('/assets/kpp/3.jpg')`, backgroundSize:'100%', backgroundPosition:'center'}}>
                        <div>
                            <p style={{marginBottom:'0px', color:'#ffffff', fontWeight:'bold'}}>Simulation Test (EN)</p>
                            <p style={{marginBottom:'5px', color:'#ffffff'}}>Consists of 50 random questions with 4 categories. Duration is 45 minutes.</p>
                        </div>
                        <span className="flex-items-align-center" style={{position:'absolute', top:0, bottom:0, right:'-15px', margin:'auto'}}>
                            <Icon type="right-circle" theme="filled" style={{color:'#ffcc32', fontSize:'30px', backgroundColor:'#ffffff', borderRadius:'16px'}} />
                        </span>
                    </div>

                    <div className="relative-wrapper thickBorder round-border margin-top-md padding-sm" onClick={(e) => {setBmModalVisible(true)}} style={{width:'95%', backgroundImage: `url('/assets/kpp/4.jpg')`, backgroundSize:'100%', backgroundPosition:'center'}}>
                        <div>
                            <p style={{marginBottom:'0px', color:'#ffffff', fontWeight:'bold'}}>Ujian Simulasi (BM)</p>
                            <p style={{marginBottom:'5px', color:'#ffffff'}}>Mengandungi 50 soalan dengan 4 jenis kategori. Masa yang diberikan adalah 45 minit.</p>
                        </div>
                        <span className="flex-items-align-center" style={{position:'absolute', top:0, bottom:0, right:'-15px', margin:'auto'}}>
                            <Icon type="right-circle" theme="filled" style={{color:'#ffcc32', fontSize:'30px', backgroundColor:'#ffffff', borderRadius:'16px'}} />
                        </span>
                    </div>

                <Link href="/kpp/sistem-kejara">
                    <a>
                    <div className="relative-wrapper thickBorder round-border margin-top-md padding-sm" style={{width:'95%', backgroundImage: `url('/assets/kpp/5.jpg')`, backgroundSize:'100%', backgroundPosition:'center'}}>
                        <div>
                            <p style={{marginBottom:'0px', color:'#ffffff', fontWeight:'bold'}}>Sistem KEJARA</p>
                            <p style={{marginBottom:'5px', color:'#ffffff'}}>An explanation of merit-demerit system to the drivers according to their wrongdoings.</p>
                        </div>
                        <span className="flex-items-align-center" style={{position:'absolute', top:0, bottom:0, right:'-15px', margin:'auto'}}>
                            <Icon type="right-circle" theme="filled" style={{color:'#ffcc32', fontSize:'30px', backgroundColor:'#ffffff', borderRadius:'16px'}} />
                        </span>
                    </div> 
                    </a>
                </Link>

                    {/* <img src={`/${banner}`} className='fill-parent absolute-center'></img> */}
                    {/* <div className='fill-parent absolute-center background-black opacity-60'>
                    </div> */}
                    {/* <div className='fill-parent absolute-center padding-lg flex-items-align-center'> */}
                        {/* <Row type="flex" justify="center" align="middle" gutter={[0, 20]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className='fill-parent h5 font-weight-bold white text-align-center opacity-100 flex-justify-center flex-items-align-center'>
                                    {_.upperCase(props.handleChange) == 'BM' ? 'Ujian Komputer Lesen Memandu' : 'Driving License Computer Test'}
                                </div>
                            </Col>
                            <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                                <div className='fill-parent flex-justify-center flex-items-align-center padding-x-lg'>
                                    <CustomTabs
                                        tabs={tabs}
                                        tabPanels={tabPanels}
                                        selectedTabClassName="background-ccar-yellow"
                                        tabContainerClassName="flex-justify-space-between flex-items-align-stretch border-bottom-ccar-yellow"
                                        tabClassName="cursor-pointer"
                                        tabStyle={{ width: '33.33%', height: '70px' }}
                                        handleChange={(index) => { setTabIndex(index) }}
                                        className="width-90" />
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                                <Row style={{ marginBottom: '6px' }}>
                                    <Col span={24} style={{ textAlign: 'center' }} >
                                        <p style={{ color: '#ffffff', marginBottom: '2px' }}> Come with questions and answers to help you study effectively </p>
                                        <Button onClick={(e) => { setShowEnRevisionModal(true) }} style={{ marginLeft: '-11px', width: '129px' }} type="primary"> Revision </Button>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '6px' }}>
                                    <Col span={24} style={{ textAlign: 'center' }}>
                                        <p style={{ color: '#ffffff', marginBottom: '2px' }}> Lengkap dengan soalan dan jawapan untuk membantu anda belajar dengan lebih efektif </p>
                                        <Button onClick={(e) => { setShowBmRevisionModal(true) }} type="primary" style={{ marginLeft: '-11px', width: '129px' }}> Ulang Kaji </Button>
                                    </Col>
                                </Row>
                                <Divider style={{ marginTop: '10px', marginBottom: '10px', color: '#ffffff' }} />
                                <Row style={{ marginBottom: '6px' }}>
                                    <Col span={24} style={{ textAlign: 'center' }}>
                                        <p style={{ color: '#ffffff', marginBottom: '2px' }}> English KPP Test Paper </p>
                                        <Button onClick={showModal} style={{marginLeft:'-11px', width:'129px'}} type="primary"> KPP Test (EN) </Button>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: '6px' }}>
                                    <Col span={24} style={{ textAlign: 'center' }}>
                                        <p style={{ color: '#ffffff', marginBottom: '2px' }}> Kertas Ujian KPP Bahasa Melayu </p>
                                        <Button onClick={(e) => {setBmModalVisible(true)}} style={{marginLeft:'-12px'}} type="primary"> Ujian Kpp (BM) </Button>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                                <div className='fill-parent flex-justify-center flex-items-align-center'>
                                    <Button onClick={(e) => { handlePage() }} shape="round" className="padding-x-xl background-yellow border-ccar-yellow black font-weight-bold subtitle1">{tabIndex == 1 || tabIndex == 3 ? 'Mula' : 'Start'}</Button>
                                </div>
                            </Col>
                        </Row> */}

                        <Modal centered title={false} visible={isModalVisible} onOk={handleOk} okText={'Start'} onCancel={handleCancel}>
                            <div>
                                <h4> English KPP Test Paper</h4>
                                <p> The test consisted of 50 questions randomly from the category, using actual test questions</p>
                                <p> Candidates are required to answer at least 42 questions correctly out of 50 questions to pass the test </p>
                                <p> The test time given is 45 minutes</p>
                            </div>
                        </Modal>

                        <Modal centered title={false} visible={bmModalVisible} onOk={mula} okText={'Mula'} onCancel={batal} cancelText={'Batal'}>
                            <div>
                                <h4> Kertas Ujian KPP Bahasa Melayu </h4>
                                <p> Ujian ini terdiri daripada 50 soalan secara rawak dan menggunakan soalan ujian sebenar </p>
                                <p> Calon dikehendaki untuk menjawab sekurang-kurangnya 42 soalan dengan betul daripada 50 soalan untuk lulus </p>
                                <p> Masa ujian yang diberikan ialah 45 minit</p>
                            </div>
                        </Modal>
                    {/* </div> */}
                </div>
            </React.Fragment>
        )
    }


    const _renderQuestion = (question) => {
        if (notEmptyLength(question)) {
            return (
                <React.Fragment>
                    <div className='background-white thin-border width-100'>
                        <div className="background-yellow flex-items-align-center padding-md flex-justify-space-between">
                            <span className='d-inline-block headline black padding-x-sm' >
                                Quiz
                        </span>
                            <span className='d-inline-block padding-x-sm cursor-pointer' onClick={(e) => { getQuestions() }} >
                                <Icon type="redo" className='red' />
                            </span>
                        </div>
                        <div>
                            <Question question={question} showCorrectAnswer={showAnswer} handleAnswer={(e) => { setShowAnswer(true) }} />
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return <Empty></Empty>
        }
    }

    return (
        <React.Fragment>
            <LayoutV2>
                <div className='section-version3' style={{touchAction:'pan-y'}}>
                    <div className='container-version3 padding-md'>
                        <Row type="flex" justify="center" gutter={[10, 0]}>
                            <Col className='margin-bottom-md ' xs={24} sm={24} md={24} lg={18} xl={18}>
                                {_renderBanner()}
                            </Col>
                        </Row>
                    </div>
                </div>

                <Drawer
                    className="kpp"
                    visible={showEnRevisionModal}
                    centered
                    footer={null}
                    closable={true}
                    onClose={(e) => { setShowEnRevisionModal(false) }}
                    width = {'100%'}
                >
                <div className='padding-md'>
                        <Row type="flex" align="middle" gutter={[10, 20]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className='flex-justify-center flex-items-align-center subtitle1 font-weight-bold black'>
                                    Revision
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                                <div className='flex-justify-center flex-items-align-center black'>
                                    We are using question sets from real test sheet provided by KPP (Kurikulum Pendidikan Pemandu) which approved by Jabatan Pengangkutan Jalan Malaysia.
                                </div>
                            </Col>

                            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                                <Link shallow={false}  href={routePaths.kppRevision.to || '/'} as={typeof (routePaths.kppRevision.as) == 'function' ? routePaths.kppRevision.as({group : 0, language : 'en'}) : '/'} >
                                    <div>
                                        <span style={{display:'inline-block'}}>
                                            Section A
                                        </span>
                                        <span style={{display:'inline-block', float:'right'}} className="flex-items-align-center">
                                            <Icon type="right" />
                                        </span>
                                    </div>
                                </Link>
                                <Divider style={{marginTop:10, marginBottom:10, marginLeft:0, marginRight:0}}/>
                                <Link shallow={false}   href={routePaths.kppRevision.to || '/'} as={typeof (routePaths.kppRevision.as) == 'function' ? routePaths.kppRevision.as({group : 1, language : 'en'}) : '/'} >
                                    <div>
                                        <span style={{display:'inline-block'}}>
                                            Section B
                                        </span>
                                        <span style={{display:'inline-block', float:'right'}} className="flex-items-align-center">
                                            <Icon type="right"/>
                                        </span>
                                    </div>
                                </Link>
                                <Divider style={{marginTop:10, marginBottom:10, marginLeft:0, marginRight:0}}/>
                                <Link shallow={false}   href={routePaths.kppRevision.to || '/'} as={typeof (routePaths.kppRevision.as) == 'function' ? routePaths.kppRevision.as({group : 2, language : 'en'}) : '/'} >
                                    <div>
                                        <span style={{display:'inline-block'}}>
                                            Section C
                                        </span>
                                        <span style={{display:'inline-block', float:'right'}} className="flex-items-align-center">
                                            <Icon type="right"/>
                                        </span>
                                    </div>
                                </Link>
                                <Divider style={{marginTop:10, marginBottom:10, marginLeft:0, marginRight:0}}/>
                            </Col>

                        </Row>
                    </div>
                </Drawer>

                <Drawer
                    className="kpp"
                    visible={showBmRevisionModal}
                    centered
                    footer={null}
                    closable={true}
                    onClose={(e) => { setShowBmRevisionModal(false) }}
                    width = {'100%'}
                >
                <div className='padding-md'>
                        <Row type="flex" align="middle" gutter={[10, 20]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className='flex-justify-center flex-items-align-center subtitle1 font-weight-bold black'>
                                    Ulang Kaji
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                                <div className='flex-justify-center flex-items-align-center black'>
                                    Kami menggunakan set soalan ujian sebenar KPP (Kurikulum Pendidikan Pemandu) yang diluluskan oleh Jabatan Pengangkutan Jalan Malaysia.
                                </div>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Link shallow={false}   href={routePaths.kppRevision.to || '/'} as={typeof (routePaths.kppRevision.as) == 'function' ? routePaths.kppRevision.as({group : 0, language : 'bm'}) : '/'} >
                                    <div>
                                        <span style={{display:'inline-block'}}>
                                            Bahagian A
                                        </span>
                                        <span style={{display:'inline-block', float:'right'}} className="flex-items-align-center">
                                            <Icon type="right" />
                                        </span>
                                    </div>
                                    </Link>
                                    <Divider style={{marginTop:10, marginBottom:10, marginLeft:0, marginRight:0}}/>
                                    <Link shallow={false}  href={routePaths.kppRevision.to || '/'} as={typeof (routePaths.kppRevision.as) == 'function' ? routePaths.kppRevision.as({group : 1, language : 'bm'}) : '/'} >
                                    <div>
                                        <span style={{display:'inline-block'}}>
                                            Bahagian B
                                        </span>
                                        <span style={{display:'inline-block', float:'right'}} className="flex-items-align-center">
                                            <Icon type="right" />
                                        </span>
                                    </div>
                                    </Link>
                                    <Divider style={{marginTop:10, marginBottom:10, marginLeft:0, marginRight:0}}/>
                                    <Link shallow={false}  href={routePaths.kppRevision.to || '/'} as={typeof (routePaths.kppRevision.as) == 'function' ? routePaths.kppRevision.as({group : 2, language : 'bm'}) : '/'} >
                                    <div>
                                        <span style={{display:'inline-block'}}>
                                            Bahagian C
                                        </span>
                                        <span style={{display:'inline-block', float:'right'}} className="flex-items-align-center">
                                            <Icon type="right" />
                                        </span>
                                    </div>
                                    </Link>
                                    <Divider style={{marginTop:10, marginBottom:10, marginLeft:0, marginRight:0}}/>
                            </Col>
                        </Row>
                    </div>
                </Drawer>
            </LayoutV2>
        </React.Fragment>
    )

}

const mapStateToProps = state => ({
    app: state.app,
});

const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(KPPIndex));