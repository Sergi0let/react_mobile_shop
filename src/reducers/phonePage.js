import {FETCH_PHONES_BY_ID_SUCCESS} from '../action/actionTypes'

const initialState = {
  id: null,
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_BY_ID_SUCCESS:
      return {...state, id: payload[0].id}
    default:
      return state
  }
}
