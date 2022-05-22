import moment from 'moment'
import React from 'react'
import { IRepositories } from '../interfaces/repositories.interfaces'
import Button from './Button'

const TableRow: React.FC<IRepositories | any> = ({
  repository,
  className,
  openModal,
}) => (
  <tr className={` border-b text-left ${className} w-auto box-content`}>
    <td className="px-6 w-20 py-4 whitespace-nowrap capitalize text-base font-medium text-gray-900">
      {repository.name}
    </td>
    <td className="text-base  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.full_name}
    </td>
    <td className="text-base w-20 capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.owner.login}
    </td>
    <td className="text-base w-20 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {moment(moment(repository.created_at, 'YYYYMMDD'), 'YYYYMMDD').fromNow()}
    </td>
    <td className="text-base w-20 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.language}
    </td>
    <td className="text-base w-24 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <Button
        handleClick={openModal}
        className="rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        View Contributors
      </Button>
    </td>
  </tr>
)

export default TableRow
