import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import ReduxApp from './app/ReduxApp';
import Mystatusbar from './app/components/Mystatusbar';
import {COLORS} from './app/constants';

const App = () => {
  return (
    <Provider store={store}>
      <Mystatusbar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ReduxApp />
    </Provider>
  );
};

export default App;
