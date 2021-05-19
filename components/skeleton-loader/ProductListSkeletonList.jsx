import { Col, Form, Row } from 'antd';
import { withRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GridProductSkeleton from './GridProductSkeleton';
import _ from 'lodash'
import ProductListSkeleton from './ProductListSkeleton';

const GridProductSkeletonList = (props) => {

    const [size, setSize] = useState(6);

    useEffect(() => {
        setSize(_.isNaN(parseInt(props.size)) ? 1 : parseInt(props.size));
    }, [props.size])

    return (
        <React.Fragment>
            <Row gutter={props.gutter || [10, 10]} type="flex">
                {
                    _.map(_.range(0, size), function (index) {
                        return (
                            <Col
                                xs={props.xs ? props.xs : 24}
                                sm={props.sm ? props.sm : 24}
                                md={props.md ? props.md : 24}
                                lg={props.lg ? props.lg : 24}
                                xl={props.xl ? props.xl : 24}
                            >
                                <ProductListSkeleton />
                            </Col>
                        )
                    })
                }
            </Row>
        </React.Fragment >
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(GridProductSkeletonList)));