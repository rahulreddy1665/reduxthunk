import {combineReducers} from 'redux';
import reducer from './reducer';
import TestReducer from './TestReducer';

const appReducer = combineReducers({
  common: reducer,
  test: TestReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
