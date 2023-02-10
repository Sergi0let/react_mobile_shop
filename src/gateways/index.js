import phones from './mockPhones'
import categories from './mockCategories'

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones)
    // reject('error') // test Error
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}

export const loadMorePhones = async ({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(phones)
  })
}

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = phones.filter((phone) => phone.id === id)
    resolve(phone)
  })
}
