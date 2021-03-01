import {put, call, takeEvery} from 'redux-saga/effects';

import * as Actions from './constants';
import {fetchSettingService} from './service';

/**
 * Fetch setting
 * @returns {IterableIterator<*>}
 */
function* fetchSetting() {
  try {
    const result = yield call(fetchSettingService);
    const {setting, dataOnBoard, dataHome} = result;
    yield put({
      type: Actions.FETCH_SETTING_SUCCESS,
      payload: {setting, dataOnBoard, dataHome},
    });
  } catch (error) {
    yield put({
      type: Actions.FETCH_SETTING_ERROR,
    });
  }
}

export default function* commonSaga() {
  yield takeEvery(Actions.FETCH_SETTING, fetchSetting);
}
