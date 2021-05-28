import { Divider, Form, message } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { notEmptyLength, windowScroll } from '../../../common-function';
import client from '../../../feathers';
import { loading, updateActiveMenu } from '../../../redux/actions/app-actions';
import { fetchCarDetails, fetchCarName, fetchCompareNewCarIds, fetchPeerCompareCars } from '../../../redux/actions/newcars-actions';
import LayoutV2 from '../../general/LayoutV2';
import CompareNewCarIndex from '../CompareNewCarIndex';
import NewCarMenu from '../NewCarMenu';
import NewCarOverview from '../NewCarOverview';


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

var PAGESIZE = 10

let arr = [
  { name: "string 1", value: "this", other: "that" },
  { name: "string 2", value: "this", other: "that" }
];
let obj = arr;

const RATINGPAGESIZE = 5;

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVariant: {},
      otherVariants: [],
    };

  }


  UNSAFE_componentWillMount() {
    this.getData(0);
    this.props.updateActiveMenu('1')
  }

  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState) {
    if (_.get(prevProps, ['router', 'query', 'make']) != _.get(this.props, ['router', 'query', 'make']) || _.get(prevProps, ['router', 'query', 'model']) != _.get(this.props, ['router', 'query', 'model'])) {
      this.getData(0);
      windowScroll(0, 0);
    }
  }
  getData = (skip) => {
    this.props.loading(true);
    axios.get(`${client.io.io.uri}priceRangeSearchNew`,
      {
        params: {
          match: { make: (_.get(this.props, ['router', 'query', 'make']) || '').toLowerCase(), model: (_.get(this.props, ['router', 'query', 'model']) || '').toLowerCase() },
          limit: PAGESIZE + skip,
          newCar: 'yes',
          skip: skip,
        }
      }
    ).then((res) => {
      console.log('res');
      console.log(res);
      this.props.loading(false);


      if (_.isArray(_.get(res, `data.data`)) && !_.isEmpty(_.get(res, `data.data`))) {

        this.props.loading(true);

        //Peer Comparison
        axios.get(`${client.io.io.uri}priceRangeSearchNew`,
          {
            params: {
              match: { bodyType: _.get(res, `data.data[0].bodyType`) },
              newCar: 'yes',
              limit: PAGESIZE + skip,
              skip: skip,
              sorting: "year:-1"
            }
          }
        ).then((res1) => {

          this.props.loading(false);
          let arrayRecord = []

          try {
            arrayRecord = _.cloneDeep(res1.data.data)
          }
          catch (err) {
            arrayRecord = []
          }

          let finalResult = []
          arrayRecord.slice(0, 5).map((item, i) => {
            finalResult.push(item);
          });
          this.props.fetchPeerCompareCars(finalResult);
        })
      }
    })
      .catch((err) => {
        this.props.loading(false);
        message.error(err.message);
      })
  }

  render() {

    return (
      <LayoutV2>

        <Mobile>
          Test
        </Mobile>

      </LayoutV2>

    );
  }

}

const mapStateToProps = state => ({
  newCars: state.newcars || state.newCars,
  productsList: state.productsList,
  user: state.user,
});

const mapDispatchToProps = {
  loading: loading,
  fetchCarName: fetchCarName,
  fetchCarDetails: fetchCarDetails,

  fetchCompareNewCarIds: fetchCompareNewCarIds,
  fetchPeerCompareCars: fetchPeerCompareCars,
  updateActiveMenu: updateActiveMenu
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withRouter(Details)));