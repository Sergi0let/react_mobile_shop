import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
} from '../action/actionTypes'

const initialState = {
  ids: [],
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        ids: payload.map(({id}) => id),
      }

    case LOAD_MORE_PHONES_SUCCESS:
      const ids = payload.map(({id}) => id)
      return {
        ids: [...state.ids, ...ids],
      }
    default:
      return state
  }
}
