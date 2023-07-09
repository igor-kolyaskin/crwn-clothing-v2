import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import {loggerMiddleware} from './middleware/logger'
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);

const composeEnhancer =
// eslint-disable-next-line no-undef
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
