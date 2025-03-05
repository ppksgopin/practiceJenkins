import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import ReduxPromis from 'redux-promise';

import appReducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk,ReduxPromis)(createStore);

export default createStoreWithMiddleware(
	appReducers,
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);
