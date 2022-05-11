import { ReactChild, ReactElement, ReactNode } from 'react'
import { CountriesState, CountryAction } from './countries.interfaces'
import { UserAction, UserState } from './user.interface'

export interface StoreState {
  User: UserState
  Countries: CountriesState
}
type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>
export type DynamicImportType = () => Promise<{
  default: React.ComponentType<any>
}>
export interface IRoutes {
  path: string
  Component: LazyComponentType
  name: string
}

export type Action = CountryAction | UserAction
