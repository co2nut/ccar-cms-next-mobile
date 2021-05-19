import _ from 'lodash'
import { withRouter } from 'next/dist/client/router'
import { connect } from 'react-redux'
import brandFilterTotal from '../../../api/brandFilterTotal'
import carAdsFilter from '../../../api/carAdsFilter'
import { convertProductRouteParamsToFilterObject, formatNumber, getCarMarketSeoData } from '../../../common-function'
import CarMarketPage from '../../../components/product-list/page/CarMarketPage'
import { loading } from '../../../redux/actions/app-actions'
import ReduxPersistWrapper from '../../../components/general/ReduxPersistWrapper'
import { getCarBrand } from '../../../params/carBrandsList'
import { carMarketRevalidateTime } from '../../../config'
import client from '../../../feathers'
import groupCarAds from '../../../api/groupCarAds'
import CarMarketPageSkeleton from '../../../components/skeleton-loader/CarMarketPageSkeleton'


const modals = ['make', 'model', 'state', 'area', 'bodyType', 'color', 'fuelType'];
const antIcon = <img src="/assets/Ccar-logo.png" style={{ fontSize: 60 }} />;
const PAGESIZE = 30;
const searchBarRef = React.createRef();
const Index = (props) => {

    return (
        props.router.isFallback ?
            <CarMarketPageSkeleton />
            :
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
                        null
                }
            </ReduxPersistWrapper>
    )
}


export async function getStaticPaths() {
    let group = {
        state: '$company.state',
        area: '$company.area',
    };
    let match = {};
    let groupedStateAreas = await groupCarAds(group, match);
    groupedStateAreas = _.map(groupedStateAreas.data || [], '_id');
    groupedStateAreas = _.groupBy(groupedStateAreas, 'state');
    groupedStateAreas = _.mapValues(groupedStateAreas, function (value) {
        value = _.map(value, function (item) {
            delete item.state
            return item;
        });
        return value;
    });

    let statepaths = [];
    _.forIn(groupedStateAreas, (value, key) => {
        statepaths.push({
            params: {
                parameter1: `malaysia_${_.toLower(key)}`
            }
        });
        _.forEach(value, function (item) {
            if (_.get(item, `area`)) {
                statepaths.push({
                    params: {
                        parameter1: `malaysia_${_.toLower(key)}_${_.toLower(item.area)}`
                    }
                });
            }
        })
    })
    return {
        paths: statepaths,
        fallback: true
    }
}

export async function getStaticProps(context) {

    console.log(`rebuilding`);
    let filterObj = {};
    filterObj = convertProductRouteParamsToFilterObject(context.params);
    if (_.get(filterObj, ['filterGroup'])) {
        filterObj.filterGroup.condition = '';
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
            },
            unstable_revalidate : carMarketRevalidateTime
        },
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