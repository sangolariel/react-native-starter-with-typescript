import { combineReducers } from 'redux'
import themeReducer from './theme/reducer'
import languageReducer from './language/reducer'
import commonReducer from './common/reducer'
import categoryReducer from './category/reducer'
import authReducer from './auth/reducer'
import productReducer from './product/reducer'
import cartReducer from './cart/reducer'

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  common: commonReducer,
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducers
