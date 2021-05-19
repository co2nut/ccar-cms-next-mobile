import _ from "lodash";

export const carMarketRevalidateTime = 60 * 60 * 24;


export function groupArrayItems(item, field) {
    if (_.isArray(item) && !_.isEmpty(item) && _.isString(field)) {
        item = _.groupBy(item, field);
        item = _.mapValues(item, function (value) {
            value = _.map(value, function (item) {
                delete item[field]
                return item;
            });
            return value;
        });
    }
    return item;
}