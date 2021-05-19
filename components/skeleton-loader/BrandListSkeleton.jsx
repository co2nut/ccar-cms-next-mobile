import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';



const BrandListSkeleton = (props) => {

    const [size, setSize] = useState(1);
    const [avatarSize, setAvatarSize] = useState(50);

    useEffect(() => {
        setSize(_.isNaN(parseInt(props.size)) ? 1 : parseInt(props.size));
    }, [props.size])

    useEffect(() => {
        if(props.avatarSize){
            setAvatarSize(props.avatarSize);
        }
    }, [props.avatarSize])



    return (
        <div className={`width-100 ${props.className || ''}`} style={{ ...props.style }}>
            <Scrollbars style={{ width: '100%' }} autoHide autoHeight>
                <div className={`d-flex ${props.wrapperClassName || 'flex-justify-space-between flex-items-align-center padding-sm'}`}>
                    {
                        _.map(_.range(0, size), function (i) {
                            return (
                                <Skeleton circle={true} height={avatarSize || 50} width={avatarSize || 50}/>
                            )
                        })
                    }
                </div>
            </Scrollbars>
        </div>
    );
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});


const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(BrandListSkeleton);