import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import isShowFooterBar from './Reducers/IsShowFooterBar'

let reducers = combineReducers({
    isShowFooterBar
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware, thunkMiddleware)
));

export default store;
