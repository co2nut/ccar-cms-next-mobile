import { withRouter } from 'next/dist/client/router'
import { connect } from 'react-redux'
import LayoutV2 from '../../components/general/LayoutV2'
import ReduxPersistWrapper from '../../components/general/ReduxPersistWrapper'
import SocialVideos from '../../components/news/page/socialVideos';
import _ from 'lodash';


const searchBarRef = React.createRef();
const Index = (props) => {


    return (
        <ReduxPersistWrapper cookie={props.cookie}>
            {
                props.app.initedRedux ?
                    <SocialVideos/>
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