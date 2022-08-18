import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import ReduxApp from './app/ReduxApp';

const App = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

export default App;
