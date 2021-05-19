import { Col, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';



const SocialNewsSkeletonBox = (props) => {

    return (
        <Row gutter={[10, 10]}>
            {_.map(_.range(0, 5), function (i) {
                if (i === 0) {
                    return (
                        <Col key={'newsListChildMain' + i} xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="social text-align-center">
                                <Skeleton width="100%" height="70%"></Skeleton>
                                <Skeleton width="100%" height="30%"></Skeleton>
                            </div>
                        </Col>
                    )
                } else {
                    return (
                        <Col key={'newsListChildSub' + i} xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Row className="fnews1">
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="inews">
                                    <Skeleton className="fill-parent" />
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="ftitle">
                                    <Skeleton width="80%" />
                                    <Skeleton width="50%" />
                                    <Skeleton width="100%" />
                                    <Skeleton width="80%" />
                                    <Skeleton width="50%" />
                                    <Skeleton width="100%" />
                                </Col>
                            </Row>
                        </Col>
                    )
                }
            })
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
};
export default connect(mapStateToProps, mapDispatchToProps)(SocialNewsSkeletonBox);