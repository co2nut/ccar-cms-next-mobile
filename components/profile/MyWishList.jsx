import { Avatar, Card, Col, Form, Icon, message, Pagination, Row } from 'antd';
import _ from 'lodash';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayLengthCount, convertParameterToProductListUrl, notEmptyLength, removeNullFromArray } from '../../common-function';
import { setUser } from '../../redux/actions/user-actions';
import Wishlist from '../general/Wishlist';
import ProductList from '../product-list/ProductList';
import { loading, updateActiveMenu } from '../../redux/actions/app-actions';
import client from '../../feathers';
import { routePaths } from '../../route';
import LayoutV2 from '../general/LayoutV2';

const addVehiclesIcon = "/assets/profile/add-vehicles.png";

const PAGESIZE = 3;

const WishListPage = (props) => {
    const [typingTimeout, setTypingTimeout] = useState(0)
    const [confirmModalState, setConfirmModalState] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [wishList, setWishList] = useState([]);
    const [total, setTotal] = useState(0)
    const [id, setId] = useState(0)
    const [page, setPage] = useState(1)
    const [profile, setProfile] = useState({});

    useEffect(() => { 
        props.updateActiveMenu('10')
    } , [])

    useEffect(() => {
        if (_.isPlainObject(props.data) && !_.isEmpty(props.data)) {
            setProfile(props.data);
        } else {
            setProfile({});
        }

    }, [props.data])

    useEffect(() => {
        _getData((page - 1) * PAGESIZE);
    }, [page])


    //Watch any changes on user object, if changed retrieve data again
    useEffect(() => {
        _getData(0);
    }, [profile]);


    const _getData = (skip) => {

        if (_.get(profile, ['_id'])) {
            props.loading(true);
            client.authenticate()
                .then((res) => {
                    client.service('wishlists').find({
                        query: {
                            saverId: _.get(profile, ['_id']),
                            type: 'product',
                            $populate: [
                                {
                                    path: 'productId',
                                    ref: 'productAds',
                                    populate: [
                                        {
                                            path: 'carspecsId',
                                            ref: 'carspecs'
                                        },
                                        {
                                            path: 'companyId',
                                            ref: 'companys'
                                        },
                                        {
                                            path: 'createdBy',
                                            ref: 'users'
                                        }
                                    ]
                                }
                            ],
                            $skip: skip,
                            $limit: PAGESIZE,
                        }
                    })
                        .then((res) => {
                            if (notEmptyLength(res.data)) {
                                let data = res.data.map(function (item) {
                                    if (item.productId) {
                                        item.productId.companys = item.productId.companyId;
                                        item.productId.carspecsAll = item.productId.carspecsId;
                                    }
                                    return item.productId;
                                })
                                data = removeNullFromArray(data)
                                setWishList(data ? data : []);
                                setTotal(res.total);
                            } else {
                                setWishList([]);
                                setTotal(0);
                            }

                            props.loading(false);
                        })
                })
                .catch((err) => {
                    props.loading(false);
                    message.error(err.message);
                })

        }
    }




    const _wishlistTitle = () => {
        return (
            <div className="thin-border padding-sm" style={{ backgroundColor: '#FFCC32', padding:'5px' }}>
                <Row type="flex" align="center" justify="space-between">
                    <Col xs={12} sm={12} md={12} lg={6} xl={4} >
                        <div className="font-weight-bold flex-items-align-center fill-parent" >
                            My Wishlist
                        </div>
                    </Col>
                </Row >
            </div>
        );
    }

    const _renderGridView = (data) => {
        if (notEmptyLength(data)) {
            return <ProductList data={wishList ? wishList : []} showWishlistButton
                topRight={
                    (v) => <Wishlist type="product" productId={v._id} saverId={_.get(props.user, ['authenticated']) && _.get(props.user, ['info', 'user', '_id']) ? _.get(props.user, ['info', 'user', '_id']) : null} className="margin-right-sm"
                        savedButton={
                            () => <Icon type="heart" theme="filled" />
                        }
                        saveButton={
                            () => <Icon type="heart" />
                        }
                        handleError={(e) => { message.error(e.message) }}
                        handleSuccess={(e) => { message.success(e.type == 'remove' ? 'Removed from wishlist' : 'Saved to wishlist') }}
                    />

                }
            />
        } else {
            return (
                <Col span={24} style={{ 'text-align': 'center' }} className="padding-xl">
                    <Link shallow={false}  href={routePaths.carsOnSale.to || '/'} as={typeof (routePaths.carsOnSale.as) == 'function' ? routePaths.carsOnSale.as() : '/'} >
                        <a>
                            <Avatar src={addVehiclesIcon} className="margin-bottom-sm padding-lg" size={200} />
                            <div className="font-weight-normal subtitle1" style={{ color: 'black' }}>Ops, you haven't added any wishlist yet</div>
                        </a>
                    </Link>
                </Col >
            );
        }
    }


    return (
        <LayoutV2>
            <Row>
                <Col span={24} >
                    {_wishlistTitle()}
                </Col>
                <Col span={24} className="margin-top-sm">
                    {_renderGridView(wishList ? wishList : [])}
                </Col>
                {
                    arrayLengthCount(wishList) > 0 ?
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }} xl={{ span: 6 }} >
                            <div className="text-align-center">
                                <Pagination simple current={page} total={total} pageSize={PAGESIZE} onChange={(page) => { setPage(page) }} />
                            </div>
                        </Col>
                        :
                        null
                    }
            </Row>
        </LayoutV2>
        
    );
}

const mapStateToProps = state => ({
    sellCars: state.sellCars,
    productsList: state.productsList,
    app: state.app,

    user: state.user,
});

const mapDispatchToProps = {
    updateActiveMenu: updateActiveMenu,
    loading: loading,
    setUser: setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(WishListPage)));