import { string } from 'prop-types'
import { fetchAllCountries } from '../../API/country.services'
import {
  DispatchCountriesType,
  ICountries,
} from '../../interfaces/countries.interfaces'
import {
  getAllCountries,
  handleError,
  loadingRequest,
} from './constants/Countries.action'

export const fetchCountries = () => async (dispatch: DispatchCountriesType) => {
  try {
    dispatch(loadingRequest())
    const { data } = await fetchAllCountries()
    const getCurrrency = (currency: any) =>
      currency ? Object.values(currency).map((item: any) => item.name) : ''
    const flatData: ICountries[] = data.map((country: any) =>
      data.length
        ? {
            name: country?.name?.official,
            flag: country?.flags?.svg,
            capital: country?.capital?.toString(),
            code: country?.cca3,
            currency: getCurrrency(country?.currencies)[0],
            timezones: country?.timezones[0],
            continents: country?.continents.toString(),
            population: country?.population,
          }
        : []
    )
    dispatch(getAllCountries(flatData))
  } catch (error) {
    dispatch(
      handleError({ Errormessage: 'Failed to retrieve data', isError: true })
    )
  }
}
