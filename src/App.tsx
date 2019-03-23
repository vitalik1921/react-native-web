import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from './store/configureStore';
import Search from "./screens/Search";

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Search />
    </PersistGate>
  </Provider>
);

export default App;
