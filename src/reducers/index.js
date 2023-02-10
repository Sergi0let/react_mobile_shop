import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import phones from './phones'
import categories from './categories'
import phonesPage from './phonesPage'
import phonePage from './phonePage'
import basket from './basket'

export default (history) =>
  combineReducers({
    phones,
    categories,
    phonesPage,
    phonePage,
    basket,
    router: connectRouter(history),
  })
