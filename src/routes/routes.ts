import React from 'react'
import { IRoutes } from '../interfaces/store.interfaces'

const Home = React.lazy(() => import('../views/landingPage/LandingPage'))
const Countries = React.lazy(() => import('../views/countries/Countries'))

export const AllRoutes: IRoutes[] = [
  {
    path: '/',
    Component: Home,
    name: 'home',
  },
  {
    path: '/countries',
    Component: Countries,
    name: 'countries',
  },
]
