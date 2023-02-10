import {ADD_PHONE_TO_BASKET} from '../action/actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      console.log(payload)
      return [...state, ...payload]
    default:
      return state
  }
}
