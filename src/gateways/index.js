import phones from './mockPhones'

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones)
    // reject('error') // test Error
  })
}
console.log('fetchPhones()', fetchPhones())
