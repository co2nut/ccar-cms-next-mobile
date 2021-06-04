import { Button, Form, Icon, Modal } from 'antd';
import _ from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { imageNotFoundIcon, noRatingImage } from '../../icon';
import { routePaths } from '../../route';



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


const NoReview = (props) => {

    const [image, setImage] = useState();
    const [previewVisible, setPreviewVisible] = useState(false)

    useEffect(() => {
        if (_.isPlainObject(props.image) && !_.isEmpty(props.image)) {
            setImage(props.image);
        }
    }, [props.image])



    return (
        <div className="padding-md width-100" >
            <div className="font-weight-bold grey-darken-3 h6 width-100 text-overflow-break text-align-center">
                Opps, there are no car reviews available at the moment.
            </div>
            <div className="padding-md flex-items-align-center flex-justify-center">
                <img src={noRatingImage} style={{ width: 500, height: 380 }} />
            </div>
            <div className="headline width-100 text-overflow-break text-align-center">
                Let's be the first one who create a little impact for other buyers to make a better decision now!
            </div>
            <div className="margin-top-lg width-100 flex-justify-center flex-items-align-center">
                <Link href={routePaths.writeCarReview.to || '/'} as={typeof (routePaths.writeCarReview.as) == 'function' ? routePaths.writeCarReview.as(null, props.query || {}) : '/'} passHref>
                    <a>
                        <Button className="background-ccar-button-yellow white border-ccar-button-yellow padding-x-xl"> Write A Review</Button>
                    </a>
                </Link>
            </div>

        </div>
    )

}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
});


const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NoReview));