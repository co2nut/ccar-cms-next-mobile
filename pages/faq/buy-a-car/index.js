import _ from 'lodash';
import { withRouter } from 'next/dist/client/router';
import { connect } from 'react-redux';
import BuyACar from '../../../components/faq/page/BuyACar';
import ReduxPersistWrapper from '../../../components/general/ReduxPersistWrapper';


const searchBarRef = React.createRef();
const Index = (props) => {


    return (
        <ReduxPersistWrapper cookie={props.cookie}>
            {
                props.app.initedRedux ?
                    <BuyACar/>
                    :
                    null
            }
        </ReduxPersistWrapper>
    )
}


export async function getServerSideProps(context) {


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