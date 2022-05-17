import { IAlert } from '../../../interfaces/components.interfaces'
import {
  CountryAction,
  ICountries,
} from '../../../interfaces/countries.interfaces'
import { Action } from '../../../interfaces/store.interfaces'

export const Constants = {
  FETCHING_COUNTRIES: 'FETCHING_COUNTRIES',
  FETCH_COUNTRIES: 'FETCH_COUNTRIES',
  FETCHING_FAILED: 'FETCHING_FAILED',
}

export function loadingRequest(): Action {
  return {
    type: Constants.FETCHING_COUNTRIES,
    payload: null, // No payload required
  }
}

export function getAllCountries(payload: ICountries[]): CountryAction {
  return {
    type: Constants.FETCH_COUNTRIES,
    payload,
  }
}

export function handleError(payload: IAlert): CountryAction {
  return {
    type: Constants.FETCHING_FAILED,
    payload,
  }
}
