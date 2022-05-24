import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducers';

const Store = (preLoadedState: any) =>
  createStore(rootReducer, preLoadedState, applyMiddleware(thunk));

export default Store;
