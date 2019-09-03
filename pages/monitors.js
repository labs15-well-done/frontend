import React, { useState } from "react"
import { MonitorData } from "../components/MonitorData"
import MonitorCard from "../components/MonitorCard"
import { getVillage } from "../services/prismicData"
import { HeatMapChartWeek } from "../components/HeatMapChartWeek"
import { colors } from "../components/Styles"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"

const styleStatus = {
  2: {
    color: colors.success,
  },
  1: {
    color: colors.orange,
  },
  0: {
    color: colors.danger,
  },
}

export default function Monitors({ pumps }) {
  console.log(pumps)
  return (
    <>
      <Seo title="Monitors • Welldone Dashboard" />
      <DashHeader title="Monitors" />
      <div css={{ padding: "0 20px", maxWidth: 1240, margin: "0 auto" }}>
        {pumps.map(pump => {
          return (
            <details
              css={{
                padding: "20px 30px",
                backgroundColor: "white",
                borderRadius: 10,
                margin: "10px 0",
              }}>
              <summary
                css={{
                  display: "flex",
                  outline: "none",
                  cursor: "pointer",
                  "::-webkit-details-marker": {
                    display: "none",
                  },
                }}>
                <div css={{ flexGrow: 1 }}>{pump.id}</div>
                <div css={{ textAlign: "right" }}>
                  <div css={{ display: "flex" }}>
                    {pump.dates ? (
                      pump.dates.map((date, index) => {
                        const status = pump.statuses[index].status
                        console.log(status)
                        return (
                          <div
                            css={{
                              width: 10,
                              height: 20,
                              margin: "0 2px",
                              borderRadius: 3,
                              backgroundColor: styleStatus[status].color,
                            }}></div>
                        )
                      })
                    ) : (
                      <div>No Data</div>
                    )}
                  </div>
                  <p
                    css={{
                      fontSize: 12,
                      margin: "5px 0 0",
                      color: colors.darkText,
                      opacity: 0.8,
                    }}>
                    Click For More Info
                  </p>
                </div>
              </summary>
              <div>
                <h3>asfdsadf</h3>
              </div>
            </details>
          )
        })}
      </div>
    </>
  )
}

Monitors.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  // const newPumps = []
  // pumps.forEach(async pump => {
  //   const village = await getVillage(pump.village.id)
  //   console.log(village)
  //   newPumps.push({ ...pump, village })
  // })
  return { pumps }
}
