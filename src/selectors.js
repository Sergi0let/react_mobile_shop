export const getPhonesById = (state, id) => state.phones[id]
export const getPhonesByCategory = (state, id) => state.categories[id]
export const getActiveCategoryId = (ownProps) => ownProps.match.params.id

export const getPhonesSelector = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps)
  if (activeCategoryId === undefined) {
    const phones = state.phonesPage.ids
      .map((id) => getPhonesById(state, id))
      .filter((item) => item.name.includes(state.phonesPage.search))
    return phones
  } else {
    const phones = state.phonesPage.ids
      .map((id) => getPhonesById(state, id))
      .filter((phone) => phone.categoryId === activeCategoryId)
      .filter((item) => item.name.includes(state.phonesPage.search))
    return phones
  }
}

export const getRenderPhonesLengthSelector = (state) => {
  return state.phonesPage.ids.length
}

export const getTotalBasketPrice = (state) => {
  const priceTotal = state.basket
    .map((id) => getPhonesById(state, id))
    .reduce((totalAmount, elem) => totalAmount + elem.price, 0)
  return priceTotal
}

export const getTotalBasketCount = (state) => {
  return state.basket.length
}

export const getCategories = (state) => Object.values(state.categories)

export const getBasketPhonesWithCount = (state) => {
  const getLength = state.basket.reduce((prev, elem) => {
    prev[elem] = (prev[elem] || 0) + 1
    return prev
  }, {})

  const uniqIds = [...new Set(state.basket)].map((id) => ({
    ...getPhonesById(state, id),
    count: getLength[id],
  }))
  return uniqIds
}
