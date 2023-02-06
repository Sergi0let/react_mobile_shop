import {FETCH_PHONES_SUCCESS} from '../action/actionTypes'

const initialState = {
  phones: [],
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        phones: state.phones.concat(payload),
      }

    default:
      return state
  }
}
