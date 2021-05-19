import _ from 'lodash'
import { withRouter } from 'next/dist/client/router'
import { connect } from 'react-redux'
import brandFilterTotal from '../../../../api/brandFilterTotal'
import carAdsFilter from '../../../../api/carAdsFilter'
import CarMarketPage from '../../../../components/product-list/page/CarMarketPage'
import { loading } from '../../../../redux/actions/app-actions'
import { convertProductRouteParamsToFilterObject, getCarMarketSeoData } from '../../../../common-function'
import ReduxPersistWrapper from '../../../../components/general/ReduxPersistWrapper'
import groupCarAds from '../../../../api/groupCarAds'
import { carMarketRevalidateTime, groupArrayItems } from '../../../../config'

const modals = ['make', 'model', 'state', 'area', 'bodyType', 'color', 'fuelType'];
const antIcon = <img src="/assets/Ccar-logo.png" style={{ fontSize: 60 }} />;
const PAGESIZE = 30;
const searchBarRef = React.createRef();
const Index = (props) => {

    return (
        <ReduxPersistWrapper cookie={props.cookie}>
            {
                props.app.initedRedux ?
                    <CarMarketPage
                        productList={props.productList || {}}
                        config={props.config || {}}
                        availableOptions={props.availableOptions || {}}
                        productListTotal={props.productListTotal || 0}
                        filterGroup={props.filterGroup || {}} />
                    :
                    null}
        </ReduxPersistWrapper>
    )
}

export async function getStaticPaths() {
    let group = {
        make: '$carspec.make',
        state: '$company.state',
        area: '$company.area',
    };
    let match = {
        condition: 'new'
    };
    let groupedRes = await groupCarAds(group, match);
    groupedRes = _.map(groupedRes.data || [], '_id');
    groupedRes = groupArrayItems(groupedRes, 'make');
    let paths = [];
    _.forIn(groupedRes, (value, key) => {
        paths = _.union(paths, [{
            params: {
                parameter1: _.toLower(key),
                parameter2: `malaysia`,
            }
        }])
        _.forEach(value, function (item, index) {
            paths = _.union(paths, [{
                params: {
                    parameter1: _.toLower(key),
                    parameter2: `malaysia_${_.toLower(item.state)}`,
                }
            }])
            if (_.get(item, `area`)) {
                paths = _.union(paths, [{
                    params: {
                        parameter1: _.toLower(key),
                        parameter2: `malaysia_${_.toLower(item.state)}_${_.toLower(item.area)}`,
                    }
                }])
            }
        })
    })
    return {
        paths: paths,
        fallback: true
    }
}



export async function getStaticProps(context) {
    let filterObj = {};
    filterObj = convertProductRouteParamsToFilterObject(context.params);
    if (_.get(filterObj, ['filterGroup'])) {
        filterObj.filterGroup.condition = 'new';
    }

    let promises = [];
    promises.push(carAdsFilter(_.cloneDeep(filterObj), PAGESIZE));

    let [carAdsRes] = await Promise.all(promises)

    let seoData = getCarMarketSeoData(_.get(filterObj, 'filterGroup') || {}, _.get(carAdsRes, 'total') || 0);

    return {
        props: {
            cookie: _.get(context, ['req', 'headers', 'cookie']) || null,
            seoData: {
                ...seoData
            }
        },
        unstable_revalidate: carMarketRevalidateTime
    }
}


const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});


const mapDispatchToProps = {
    loading: loading,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))