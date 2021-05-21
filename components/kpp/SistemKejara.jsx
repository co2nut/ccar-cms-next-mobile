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



const SistemKejaraIndex = (props) => {
    const [loading, setLoading] = useState([])
    const [tabIndex, setTabIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    const [showAnswer, setShowAnswer] = useState(false)
    const [showEnRevisionModal, setShowEnRevisionModal] = useState(false)
    const [showBmRevisionModal, setShowBmRevisionModal] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [bmModalVisible, setBmModalVisible] = useState(false)


    return (
        <React.Fragment>
            <LayoutV2>
                <div className='section-version3' style={{touchAction:'pan-y'}}>
                    <div className='container-version3 padding-md margin-top-xl'>
                        <p>
                            Sistem KEJARA adalah singkatan daripada perkataan SISTEM  PENALTI MATA DEMERIT KESALAHAN JALANRAYA. Sistem ini ditujukan khas kepada 
                            pemandu-pemandu kenderaan yang memiliki lesen memandu CDL dan Lesen Memandu Percubaan. 
                        </p>
                        <p>
                            Sistem pemberian mata demerit kepada pemandu-pemandu kenderaan yang telah disabitkan kesalahan sama ada melalui bayaran kompaun (Polis atau JPJ)
                            atau denda (mahkamah) bagi kesalahan terjadual. 
                        </p>
                    </div>

                    <table id="kpp">
                        <tr>
                            <th>Kesalahan</th>
                            <th>Pemandu kenderaan motor</th>
                            <th>Pemandu kenderaan barangan dan bus</th>
                        </tr>
                        <tr>
                            <td>Memandu atau mengawal kenderaan motor semasa berada di bawah pengaruh minuman yang memabukkan atau dadah.</td>
                            <td>15</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Memandu dengan melulu atau membahayakan</td>
                            <td>15</td>
                            <td>15</td>
                            
                        </tr>
                        <tr>
                            <td>Memandu dengan tidak cermat dan tidak bertimbang rasa</td>
                            <td>15</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Pertandingn atau dugaan kelajuan</td>
                            <td>15</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Gagal mematuhi lampu isyarat</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                    </table>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SistemKejaraIndex));