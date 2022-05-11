import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../interfaces/store.interfaces'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import Pagination from './Pagination'

const Table = () => {
  const { countries } = useSelector((state: StoreState) => state.Countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [listPerPage] = useState(10)
  const indexOfLastCountry = currentPage * listPerPage
  const indexOfFirstCountry = indexOfLastCountry - listPerPage
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )
  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  const RenderRow = () =>
    currentCountries.map((country: any, index: number) =>
      index % 2 ? (
        <TableRow key={index} country={country} className="bg-gray-100" />
      ) : (
        <TableRow key={index} country={country} className="bg-white" />
      )
    )
  return (
    <div className="min-w-full">
      <table className="w-full">
        <TableHeader />
        <tbody>
          <RenderRow />
        </tbody>
      </table>
      <Pagination
        listPerPage={listPerPage}
        paginateFront={paginateFront}
        currentPage={currentPage}
        paginateBack={paginateBack}
        totalCountries={countries.length}
      />
    </div>
  )
}

export default Table
