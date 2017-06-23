import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// import App from './components/App';
import Summary from './containers/Summary';
import {showLabelName} from './reducers/index';
import {StoreState} from './stores/index';

const store = createStore<StoreState>(showLabelName, {
    id: 1,
    company: 'AWA',
});

ReactDOM.render(
    <Provider store={store}>
        <Summary />
    </Provider>,
    document.getElementById('app') as HTMLElement
);