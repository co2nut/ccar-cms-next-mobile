import { Col, Form, Row } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/dist/client/router';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";




const NewCarCardSkeleton = (props) => {


    return (
        <React.Fragment>
            <div className=" flex-items-align-center flex-justify-center  " style={{ height: 320 }} >
                <div className="text-align-center fill-parent">
                    <Skeleton height="50%" className="margin-bottom-sm" />
                    <Skeleton width="50%" />
                    <Skeleton width="70%" />
                </div>
            </div>
        </React.Fragment >
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(NewCarCardSkeleton)));