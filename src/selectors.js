export const getPhonesById = (state, id) => state.phones[id]

export const getPhonesSelector = (state) => {
  return state.phonesPage.ids.map((id) => getPhonesById(state, id))
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
