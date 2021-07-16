import { Upload, Modal, Icon, Button } from "antd";
import _ from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { arrayLengthCount, getObjectId, getWindowInnerWidth } from "../../../../common-function";
import { writePostIconUi } from "../../../../icon";
import ReviewImageCard from "../../../car-review/ReviewImageCard";
import ImageEdit from "./ImageEdit";


const UPLOAD_SIZE = 10;

const ImagesUploadWithEdit = (props) => {


    const [images, setImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0)
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [editMode, setEditMode] = useState(false);


    useEffect(() => {

        if (isUploading == true) {
            setIsUploaded(false);
        }
    }, [isUploading])


    function handleImageChange(e) {
        e.fileList = e.fileList.slice(-UPLOAD_SIZE);

        e.fileList.map(function (v) {
            if (v.url) { return }
            v.url = URL.createObjectURL(v.originFileObj)
        });

        setImages(e.fileList)
        setEditMode(true);
    }


    function handleSubmit() {
        if (props.onSubmit) {
            props.onSubmit(images);
        }
        setEditMode(false);
        setImages([]);
    }



    const _renderDefaultUploadButton = () => {
        return <div className="cursor-pointer">
            <img src={writePostIconUi} style={{ height: 40, width: 60 }} />
        </div>
    }

    const _renderImageCard = (image) => {
        let index = _.findIndex(images, ['uid', getObjectId(image, 'uid')]);
        return <span
            className={`d-inline-block margin-x-md margin-bottom-xs background-white flex-items-no-shrink ${imageIndex == index ? 'border-yellow' : ''}`}
            style={{ width: props.imageCardSize || '70px', height: props.imageCardSize || '70px' }}
        >
            <div className="relative-wrapper fill-parent">
                <div className=" absolute-center-img-no-stretch" onClick={(e) => {
                    setImageIndex(index != -1 && index < arrayLengthCount(images) ? index : 0)
                }}  >
                    <img src={_.get(image, ['url'])} className="fill-parent cursor-pointer" ></img>
                </div>
                <span className='d-inline-block ' style={{ position: 'absolute', top: -15, right: -15 }} >
                    <Icon type="close-circle" className="white cursor-pointer" style={{ fontSize: 15 }} onClick={(e) => {
                        let filteredImages = _.filter(images, (i) => {
                            return i.uid != image.uid;
                        })
                        setImages(filteredImages);
                    }} />
                </span>
            </div>
        </span>
    }


    return (
        <React.Fragment>
            {
                arrayLengthCount(images) >= UPLOAD_SIZE ?
                    props.children || _renderDefaultUploadButton()
                    :
                    <Upload
                        accept='.png,.jpeg,.jpg'
                        multiple={true}
                        key="uploadCarImage"
                        beforeUpload={() => false}
                        fileList={images}
                        showUploadList={false}
                        onChange={(e) => {
                            setIsUploading(false);
                            setIsUploaded(true);
                            handleImageChange(e)
                        }}
                    >
                        <span className='d-inline-block' onClick={(e) => {
                            setIsUploading(true);
                        }} >
                            {props.children || _renderDefaultUploadButton()}
                        </span>
                    </Upload>
            }
            {
                !isUploading && isUploaded ?
                    <React.Fragment>
                        <Modal
                            visible={isUploaded && !isUploading && editMode && arrayLengthCount(images) > 0}
                            onCancel={() => {
                                setEditMode(true);
                            }}
                            className=" modal-body-background-transparent no-padding-modal-body"
                            footer={null}
                            closable={false}
                            maskClosable={false}
                            width={(getWindowInnerWidth() || 1000) * 0.4}
                        >
                            <ImageEdit
                                src={_.get(images, `[${imageIndex}].url`)}
                                height={450}
                                onConfirm={(output) => {
                                    setImages(
                                        _.map(images, (image) => {
                                            if (_.get(images, `[${imageIndex}].uid`) == _.get(image, `uid`)) {
                                                image.originFileObj = output.file;
                                                image.url = URL.createObjectURL(image.originFileObj)
                                                return image;
                                            }
                                            return image
                                        })
                                    )
                                }}
                                onCancel={() => {
                                    setEditMode(false);
                                    setImages([]);
                                    if (props.onCancel) {
                                        props.onCancel();
                                    }
                                }}
                            />
                            <Scrollbars autoHeight autoHide >
                                <div className="background-black flex-items-align-center padding-top-md ">
                                    {
                                        _.map(images, (image) => {
                                            return (
                                                _renderImageCard(image)
                                            )
                                        })
                                    }
                                </div>
                            </Scrollbars>
                            <div className="padding-sm flex-justify-end background-black">
                                <span className='d-inline-block ' >
                                    <Button className="round-border padding-x-lg border-white background-ccar-button-yellow" onClick={(e) => {
                                        handleSubmit()
                                    }}>Upload</Button>
                                </span>
                            </div>
                        </Modal>
                    </React.Fragment>
                    :
                    null
            }
        </React.Fragment>
    );
}

export default ImagesUploadWithEdit;