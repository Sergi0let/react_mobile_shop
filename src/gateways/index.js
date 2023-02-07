import phones from './mockPhones'

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones)
    // reject('error') // test Error
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
    const phoneObj = {phone: phone}

    console.log('gateways', phone)
    resolve(phone)
  })
}
