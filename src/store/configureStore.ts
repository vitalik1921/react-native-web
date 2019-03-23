import logger from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore, Middleware, StoreEnhancer } from 'redux';

import rootReducer from '../reducers';
import rootSagas from '../sagas';

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default function configureStore(initialState = {}) {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [
    sagaMiddleware,
  ];
  // development tools
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middlewares);
  const enhancers: StoreEnhancer[] = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer = compose(...enhancers);

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSagas);

  return { store, persistor };
}
