import { all } from 'redux-saga/effects'
import commonSaga from './common/saga'
import languageSaga from './language/saga'
import categorySaga from './category/saga'
import themeSaga from './theme/saga'
import authSaga from './auth/saga'
import productSaga from './product/saga'
import cartSaga from './cart/saga'
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([themeSaga(), authSaga(), commonSaga(), languageSaga(), categorySaga(), productSaga(), cartSaga()])
}
