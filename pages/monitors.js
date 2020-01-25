import React, { useState } from "react"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"
import MonitorCard from "../components/MonitorCard"

export default function Monitors({ pumps }) {

  return (
    <>
      <Seo title="Monitors • Welldone Dashboard" />
      <DashHeader
        title="Monitors"
      />
      <div
        css={{
          padding: "0 20px",
          maxWidth: 1240,
          margin: "0 auto",
        }}>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
          }}>
          {pumps
            ? pumps
                .filter(pump => !pump.error)
                .map(pump => {
                  return <MonitorCard pump={pump} />
                })
            : null}
        </div>
        <h4>Non Functional Pumps</h4>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
          }}>
          {pumps
            ? pumps
                .filter(pump => pump.error)
                .map(pump => {
                  return <MonitorCard error pump={pump} />
                })
            : null}
        </div>
      </div>
    </>
  )
}

Monitors.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")

  return { pumps }
}
