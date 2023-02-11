export const getObjectFromRes = (res, key) =>
  res.reduce((obj, elem) => {
    obj[elem[key]] = elem
    return obj
  }, {})
