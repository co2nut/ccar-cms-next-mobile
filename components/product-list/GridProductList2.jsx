import { Button, Col, Empty, Row } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { imageNotFoundIcon } from '../../params/common';
import { getStateIcon } from '../../params/stateList';
import { notEmptyLength } from '../../common-function';
import { withRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Form } from '@ant-design/compatible';
import { loading } from '../../redux/actions/app-actions';
import { calMonth, formatMoney, renderMileageRange } from '../../functionContent';
import AddCompareProductButton from '../general/add-compare-product-button';
import Car360ViewButton from '../general/car-360-view-button';
import { flameRed, rayaFlame, rayaFood, rayaLamp, rayaMosque, rayaPeople } from '../../icon';
import Loading from '../general/Loading';
import WhatsAppButton from '../general/whatapps-button';
import ContactList from '../general/contactList';
import RegisterCard from '../general/registerCard';
import CalculatorModal from '../general/calculator-modal';
import GridProductSkeleton from '../skeleton-loader/GridProductSkeleton';
import { routePaths } from '../../route';
import GridProductCard from './GridProductCard';


const currentDateTime = moment().format()

const GridProductList = (props) => {

    const [productList, setProductList] = useState([])
    
    useEffect(() => {
        setProductList(_.isArray(props.data) && !_.isEmpty(props.data) ? props.data : []);
    }, [props.data])

    return (
        <Row>
            {
                _.isArray(productList) && !_.isEmpty(productList) ?
                    _.map(productList, function (v, i) {
                        return (

                            <Col key={'product' + i}
                                style={{ touchAction: 'pan-y' }}
                                className='gridDataList'
                                xs={props.xs ? props.xs : 24}
                                sm={props.sm ? props.sm : 24}
                                md={props.md ? props.md : 12}
                                lg={props.lg ? props.lg : 8}
                                xl={props.xl ? props.xl : 8}>
                                <GridProductCard data={v} />
                            </Col>
                        )
                    })
                    :
                    <div style={{ height: '15em', backgroundColor: '#FFFFFF' }}>
                        <Empty
                            style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
                            image="/empty.png"
                            imageStyle={{ height: 60, }}
                            description={<span>{props.app.loading ? 'Getting Result' : 'No Result'}</span>}
                        >
                        </Empty>
                    </div>
            }
        </Row>
    );
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});

const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(GridProductList)));