import {connect, Dispatch} from 'react-redux';
import * as actions from '../actions';
import Summary from '../components/Summary';
import {StoreState} from '../stores/index';

export function mapStateToProps({id, company}: StoreState) {
    return {
        id,
        company,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LabelNameAction>) {
    return {
        show: () => dispatch(actions.showLabelName()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);