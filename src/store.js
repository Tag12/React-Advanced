// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './components/UserReducer';
import UserReducer from './components/UserReducer';

const store = createStore(UserReducer, applyMiddleware(thunk));

export default store;
