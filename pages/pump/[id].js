import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { MonitorData } from "../../components/MonitorData"
import MonitorsCharts from "../../components/MonitorsCharts"
import axios from "axios"

export default function Pump({ pump: { id, ...rest } }) {
  console.log(rest)
  return <div></div>
}

Pump.getInitialProps = async ({ query: { id } }) => {
  console.log(id)
  const { pumps } = require("../../assets/cache/pumps.json")
  const pump = pumps.filter(pump => pump.id === id)
  return { pumps, pump: { ...pump[0] } }
}
