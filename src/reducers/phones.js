import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONES_BY_ID_SUCCESS,
} from '../action/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValue = payload.reduce((items, el) => {
        items[el['id']] = el
        return items
      }, {})

      return {...state, ...newValue}

    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = payload.reduce((items, el) => {
        items[el['id']] = el
        return items
      }, {})
      return {...state, ...moreValues}

    case FETCH_PHONES_BY_ID_SUCCESS:
      const currentValue = payload.reduce((items, el) => {
        items[el['id']] = el
        return items
      }, {})

      return {
        ...state,
        ...currentValue,
      }

    default:
      return state
  }
}
