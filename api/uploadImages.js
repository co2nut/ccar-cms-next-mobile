import _ from 'lodash'
import axios from 'axios';
import client from '../feathers'
import { isValidNumber, notEmptyLength, convertToRangeFormat, convertRangeFormatBack, convertFilterRange, objectRemoveEmptyValue } from '../common-function';
import { compressImages } from '../components/carFreak/config';


export default async function (images = []) {


    if (_.isArray(images) && !_.isEmpty(images)) {

        let formData = new FormData();
        let uploadYes = 'no'

        for (let i = 0; i < images.length; i++) {
            if (_.get(images, `[${i}].originFileObj`)) {
                uploadYes = 'yes'
            }
        }

        console.log(uploadYes);
        if (uploadYes === 'yes') {
            images = await compressImages(images);
            console.log(images);
            for (let i = 0; i < images.length; i++) {
                if (_.get(images, `[${i}].originFileObj`)) {
                    formData.append('images', images[i].originFileObj);
                }
            }

            let uploadRes = await axios.post(`${client.io.io.uri}upload-images-array`,
                formData
                , {
                    headers: {
                        'Authorization': client.settings.storage.storage.storage['feathers-jwt'],
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )
            console.log(uploadRes);

            let uploadedImages = _.get(uploadRes, `data.result`) || [];
            images = _.concat(_.filter(images, (image) => {
                return !_.get(image, `originFileObj`);
            }), uploadedImages)
        }
        return images;

    } else {
        return [];
    }
}
