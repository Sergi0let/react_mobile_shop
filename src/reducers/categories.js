import {FETCH_CATEGORIES_SUCCESS} from '../action/actionTypes'
import {getObjectFromRes} from '../helpers'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const categories = getObjectFromRes(payload, 'id')

      return {...state, ...categories}

    default:
      return state
  }
}
