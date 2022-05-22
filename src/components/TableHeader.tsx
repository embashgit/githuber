import React from 'react'

function TableHeader() {
  return (
    <thead className="bg-grey-50 border-b-2 border-grey-200">
      <tr>
        <th className="text-base font-medium text-gray-900 tracking-wide px-6 py-4 text-left">
          Name
        </th>
        <th className="text-base font-medium text-gray-900 tracking-wide px-6 py-4 text-left">
          Full Name
        </th>
        <th className="text-base font-medium text-gray-900 tracking-wide px-6 py-4 text-left">
          Owner
        </th>
        <th className="text-base font-medium text-gray-900 tracking-wide px-6 py-4 text-left">
          Created At
        </th>
        <th className="text-base font-medium text-gray-900 tracking-wide px-6 py-4 text-left">
          Language
        </th>
        <th className="text-base font-medium text-gray-900 tracking-wide px-6 py-4 text-left">
          Action
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
