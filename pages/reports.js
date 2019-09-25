import React, { useState } from "react"
import { getPumpStyles } from "../components/Styles"
import dynamic from "next/dynamic"

export const ReportTable = dynamic(() => import("../components/ReportTable"), {
  ssr: false,
  loading: () => <div />,
})

export default function Reports({ pumps }) {
  const pumpStyles = getPumpStyles({ iconSize: 25 })
  const [filter, setFilter] = useState({ 0: true, 1: true, 2: true })
  console.log(pumps, "HEY, pumps from the reports page!!!")
  return (
    <>
      <h1>Reports Test</h1>
      <ReportTable pumps={pumps} />
    </>
  )
}

Reports.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  return { pumps }
}
