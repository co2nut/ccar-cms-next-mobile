import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import { connect } from 'react-redux';
import AboutUsIndex from '../../components/about-us/page/AboutUsHomePage';
import ReduxPersistWrapper from '../../components/general/ReduxPersistWrapper';
import LiveHomePage from '../../components/live/LiveHomePage';


const searchBarRef = React.createRef();
const Index = (props) => {


    return (
        <ReduxPersistWrapper cookie={props.cookie}>
            {
                props.app.initedRedux ?
                    <LiveHomePage />
                    :
                    null
            }
        </ReduxPersistWrapper>
    )
}


export async function getStaticProps(context) {


    return {
        props: {
            cookie: _.get(context, ['req', 'headers', 'cookie']) || null,
        }
    }
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    productsList: state.productsList,
});


const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));