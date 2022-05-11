import React from 'react'

function TableHeader() {
  return (
    <thead className="bg-white border-b">
      <tr>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Name
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Flag
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Capital
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Code
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Continient
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Currency
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Timezone
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
