import { Col, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';



const SocialVideosSkeletonBox = (props) => {

    return (<Row gutter={[10, 10]}>
        {_.map(_.range(0, 6), function (i) {
            return (
                <Col key={`social-video-${i}`} xs={24} sm={24} md={12} lg={12} xl={8}>
                    <div className="wrap">
                        <div className="video">
                            <Skeleton height="100%" width="100%" />
                        </div>

                        <div className="flex-items-align-start">
                            <span className="d-inline-block margin-right-md">
                                <Skeleton circle width={50} height={50} />
                            </span>
                            <span className="d-inline-block width-70">
                                <Skeleton width="100%" />
                                <Skeleton width="80%" />
                                <Skeleton width="50%" />
                                <Skeleton width="80%" />
                            </span>
                        </div>
                    </div>
                </Col>
            )
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
export default connect(mapStateToProps, mapDispatchToProps)(SocialVideosSkeletonBox);