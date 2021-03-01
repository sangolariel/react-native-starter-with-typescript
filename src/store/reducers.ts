import {combineReducers} from 'redux';
import commonReducer from './common/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  common: commonReducer,
});

export default rootReducers;
