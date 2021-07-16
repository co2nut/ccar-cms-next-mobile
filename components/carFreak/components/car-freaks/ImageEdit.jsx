import { useEffect } from "react";
import { useState } from "react";
import { carFreakLikeIcon } from "../../../../icon";
import { imageNotFound } from "../../../profile/config";
// import { Doka } from "../../../react-doka";
import { carFreakPostAspectRatio } from "../../config";


const toDegrees = (radians) => parseFloat(radians || 0) * (180 / Math.PI);
const toRadians = (degrees) => parseFloat(degrees || 0) * (Math.PI / 180);

const ImageEdit = (props) => {

    const [src , setSrc] = useState();
    const [imageState , setImageState] = useState();

    useEffect(() => { 
        setSrc(props.src)
    } , [props.src])

    useEffect(() => { 
        console.log(imageState);
        setImageState(_.isPlainObject(props.imageState) && !_.isEmpty(props.imageState) ? props.imageState : undefined)
    } , [props.imageState])

    function handleDokaConfirm(output) {
        console.log(output);
        if (props.onConfirm){
            props.onConfirm(output)
        }
    }

    function handleDokaCancel() { 
        if (props.onCancel){
            props.onCancel(output)
        }
    }


    return (
        <div>
            <Doka
                style={{ height: props.height || '100%' }}
                src={src}
                cropAspectRatio={carFreakPostAspectRatio}
                cropShowSize
                imageState={imageState}
                cropAllowResizeRect={false}
                onConfirm={handleDokaConfirm}
                onCancel={handleDokaCancel}
            />
        </div>
    );
}

export default ImageEdit;