import {
  CountriesState,
  CountryAction,
} from '../../interfaces/countries.interfaces'
import { Constants } from '../actions/constants/Countries.action'

const INITIAL_STATE: CountriesState = {
  countries: [],
  loadRequest: false,
  selectedId: '',
  isError: false,
  Errormessage: '',
}

const CountryReducer = (
  state: CountriesState = INITIAL_STATE,
  action: CountryAction
): CountriesState => {
  switch (action.type) {
    case Constants.FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loadRequest: false,
      }
    case Constants.FETCHING_COUNTRIES:
      return {
        ...state,
        loadRequest: true,
        isError: false,
      }
    case Constants.FETCHING_FAILED:
      return {
        ...state,
        loadRequest: false,
        isError: action.payload.isError,
        Errormessage: action.payload.Errormessage,
        countries: state.countries,
      }
    default:
      return state
  }
}

export default CountryReducer
