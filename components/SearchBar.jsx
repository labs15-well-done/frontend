import React from "react"
import LegendModal from "./LegendModal"
import { FaSearch } from "react-icons/fa"
import { colors } from "./Styles"
// transform: 'rotate(90deg)'
export default function SearchBar({ searchHandler }) {
  return (
    <div css={{ display: "flex", alignItems: "center" }}>
      <FaSearch css={{ marginRight: "10px", color: [colors.brand] }}   />
      <input
        type="text"
        placeholder="search..."
        onChange={searchHandler}
        css={{
          border: "1px solid #DDE1E5",
          outline: "none",
          color: [colors.brand],
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "10px",
        }}
      />
      <LegendModal />
    </div>
  )
}