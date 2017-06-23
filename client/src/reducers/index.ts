import { ShowLabelName } from './../actions/index';
import { StoreState } from './../stores/index';

export function showLabelName(state: StoreState, action: ShowLabelName): StoreState {
    return {...state, company: state + 'updated!!'};
}