export const getPhonesById = (state, id) => state.phones[id]

export const getPhonesSelector = (state) => {
  // const applySearch = item =>
  const phones = state.phonesPage.ids
    .map((id) => getPhonesById(state, id))
    .filter((item) => item.name.includes(state.phonesPage.search))
  return phones
}

export const getRenderPhonesLengthSelector = (state) => {
  return state.phonesPage.ids.length
}

export const getTotalBasketPrice = (state) => {
  return state.basket
    .map((id) => getPhonesById(state, id))
    .reduce((totalAmount, {price}) => totalAmount + price, 0)
}

export const getTotalBasketCount = (state) => {
  return state.basket.length
}
