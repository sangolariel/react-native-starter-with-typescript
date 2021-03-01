import {all} from 'redux-saga/effects';
import commonSaga from './common/saga';
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([commonSaga()]);
}
