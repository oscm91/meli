import { expose } from 'comlink';
import { combineReducers } from 'redux';
import productsReducer from './products/reducer';

const asyncReducer = combineReducers({
  products: productsReducer,
});

expose(asyncReducer);
