import React, { useState } from "react"
import ReactDataGrid from "react-data-grid"
import { Toolbar, Data } from "react-data-grid-addons"

function getRows(pumps, filters) {
  const selectors = Data.Selectors
  return selectors.getRows({ pumps, filters })
}
console.log(getRows())
const columns = [
  {
    key: "id",
    name: "ID",
  },
  {
    key: "province",
    name: "Province",
  },
  {
    key: "district",
    name: "District",
  },
  {
    key: "commune",
    name: "Commune",
  },
  {
    key: "village",
    name: "Village",
  },
  {
    key: "finish_construction",
    name: "Finished Construction",
  },
].map(c => ({ ...c, ...defaultColumnProperties }))

const handleFilterChange = filter => filters => {
  const newFilters = { ...filters }
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter
  } else {
    delete newFilters[filter.column.key]
  }
  return newFilters
}

const defaultColumnProperties = {
  filterable: true,
  width: 120,
}

const ReportTable = ({ pumps }) => {
  const rows = {
    id: 1,
    province: "test",
  }

  const [filters, setFilters] = useState({})
  const filteredRows = Data.Selectors.getRows({ rows, filters })

  console.log(getRows())
  return (
    <>
      <h1>Test LOOOK HERE!!!!!!!!</h1>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => filteredRows[i]}
        rowsCount={filteredRows.length}
        minHeight={500}
        toolbar={<Toolbar enableFilter={true} />}
        onAddFilter={filter => setFilters(handleFilterChange(filter))}
        onClearFilters={() => setFilters({})}
      />
    </>
  )
}

export default ReportTable
