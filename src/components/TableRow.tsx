import React from 'react'
import { ICountries } from '../interfaces/countries.interfaces'

const TableRow: React.FC<ICountries | any> = ({ country, className }) => (
  <tr className={` border-b text-left ${className}`}>
    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
      {country.name}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <span>
        <img className="h-10 w-10 rounded-full" src={country.flag} />
      </span>
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {country.capital}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {country.code}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {country.continents}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {country.currency}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {country.timezones}
    </td>
  </tr>
)

export default TableRow
