/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

/*Store state Redux Saga */
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import storeInit from './src/store';
const {store, persistor} = storeInit();

/*Bootstrap setup */
import Bootstrap from './src/bootstrap';

/*Disable warning*/
LogBox.ignoreAllLogs();

export default () => {
  /*Load store*/
  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Bootstrap />
      </PersistGate>
    </Provider>
  );
};
