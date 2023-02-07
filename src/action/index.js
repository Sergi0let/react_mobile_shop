import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONES_BY_ID_START,
  FETCH_PHONES_BY_ID_SUCCESS,
  FETCH_PHONES_BY_ID_FAILURE,
} from './actionTypes'

import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
} from '../gateways'

import {getRenderPhonesLengthSelector} from '../selectors'

export const fetchPhones = () => async (dispatch) => {
  dispatch({type: FETCH_PHONES_START})

  try {
    const phones = await fetchPhonesApi()
    dispatch({type: FETCH_PHONES_SUCCESS, payload: phones})
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true,
    })
  }
}
export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderPhonesLengthSelector(getState())

  dispatch({type: LOAD_MORE_PHONES_START})

  try {
    const phones = await loadMorePhonesApi(offset)
    dispatch({type: LOAD_MORE_PHONES_SUCCESS, payload: phones})
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true,
    })
  }
}

export const fetchPhoneById = (id) => async (dispatch) => {
  dispatch({type: FETCH_PHONES_BY_ID_START})
  try {
    const phone = await fetchPhoneByIdApi(id)

    dispatch({type: FETCH_PHONES_BY_ID_SUCCESS, payload: phone})
  } catch (err) {
    dispatch({type: FETCH_PHONES_BY_ID_FAILURE, payload: err, error: true})
  }
}
