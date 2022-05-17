import React from 'react'

export interface ICountries {
  capital: string
  code: string
  name: string
  currency: string
  flag: string
  continents: string
  timezones: string
}

export type CountriesState = {
  selectedId: string
  loadRequest: boolean
  countries: ICountries[]
  isError: boolean
  Errormessage: string
}

export type CountryAction = {
  type: string
  payload: any
}

export type DispatchCountriesType = (args: CountryAction) => CountryAction
