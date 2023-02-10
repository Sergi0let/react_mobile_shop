import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONE,
} from '../action/actionTypes'

const initialState = {
  ids: [],
  search: ' ',
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
      console.log('ids', ids)
      return {
        ...state,
        ids: state.ids.concat(ids),
      }
    case SEARCH_PHONE:
      return {
        ...state,
        search: payload,
      }

    default:
      return state
  }
}
