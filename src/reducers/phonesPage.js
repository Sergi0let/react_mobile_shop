import {FETCH_PHONES_SUCCESS} from '../action/actionTypes'

const initialState = {
  ids: [],
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        ids: Object.values(payload).map(({id}) => id),
      }
    default:
      return state
  }
}
