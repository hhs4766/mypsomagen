import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['navigation']
};

const enhancedReducer = persistReducer(persistConfig, reducers);

export default createStore(enhancedReducer);