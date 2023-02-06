export const getPhonesById = (state, id) => state.phones[id]

export const getPhonesSelector = (state) => {
  return state.phonesPage.ids.map((id) => getPhonesById(state, id))
}

export const getRenderPhonesLengthSelector = (state) => {
  return state.phonesPage.ids.length
}
