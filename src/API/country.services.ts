import axios from 'axios'

const BASE_URL = 'https://restcountries.com/v3.1'

export const fetchAllCountries = async () => await axios.get(`${BASE_URL}/all`)

export const searchCounry = async (payload: any) =>
  await axios.get(`${BASE_URL}/${payload.searchKey}/{payload.value}`)
