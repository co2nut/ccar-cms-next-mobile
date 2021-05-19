import axios from 'axios';
import _ from 'lodash';
import client from '../feathers';
const availableOptions = ['make', 'model', 'state', 'area', 'bodyType', 'color', 'fuelType'];
const PAGESIZE = 30;
const distinctArr = (value, index, self) => {
    return self.indexOf(value) === index
}

export default async function (group, match) {

    if (group) {

        if (!_.isPlainObject(match) && !_.isEmpty(match)) {
            match = {}
        }

        let groupRes = await axios.get(`${client.io.io.uri}groupProductAds`, {
            params: {
                match : match,
                group : group
            }
        })
        groupRes = _.get(groupRes , `data`) || {};
        return groupRes

    } else {
        return { total : 0, data : []};
    }

}