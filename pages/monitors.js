import React, { useState } from "react"
import { colors, breakingPoints } from "../components/Styles"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from "react-icons/fi"

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
  const [filter, setFilter] = useState({ 0: true, 1: true, 2: true })

  return (
    <>
      <Seo title="Monitors • Welldone Dashboard" />
      <DashHeader
        title="Monitors"
        // actions={
        //   <div>
        //     <button
        //       active={filter[0]}
        //       onClick={() => setFilter({ ...filter, 0: !filter[0] })}>
        //       Functional
        //     </button>
        //     <button
        //       active={filter[1]}
        //       onClick={() => setFilter({ ...filter, 1: !filter[1] })}>
        //       Non-Functional
        //     </button>
        //     <button onClick={() => setFilter({ ...filter, 2: !filter[2] })}>
        //       Unknown
        //     </button>
        //   </div>
        // }
      />
      <div css={{ padding: "0 20px", maxWidth: 1240, margin: "0 auto" }}>
        {pumps
          .filter(pump => filter[pump.status])
          .map(pump => {
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
                    alignItems: "center",
                    outline: "none",
                    cursor: "pointer",
                    "::-webkit-details-marker": {
                      display: "none",
                    },
                  }}>
                  <div css={{ marginRight: 10 }}>
                    <span
                      css={
                        pump.status === 0
                          ? { color: "#f44336" }
                          : pump.status === 1
                          ? { color: "#FFAD34" }
                          : pump.status === 2
                          ? { color: "#01c000" }
                          : null
                      }>
                      {" "}
                      {pump.status === 0 ? (
                        <FiAlertCircle size="25px" />
                      ) : pump.status === 1 ? (
                        <FiHelpCircle size="25px" />
                      ) : pump.status === 2 ? (
                        <FiCheckCircle size="25px" />
                      ) : null}
                    </span>
                  </div>
                  <div css={{ flexGrow: 1 }}>{pump.id}</div>
                  <div css={{ textAlign: "right" }}>
                    <div css={{ display: "flex" }}>
                      {pump.dates ? (
                        pump.dates.map((date, index) => {
                          const status = pump.statuses[index].status
                          return (
                            <div
                              css={{
                                width: 10,
                                height: 20,
                                margin: "0 2px",
                                borderRadius: 3,
                                backgroundColor: styleStatus[status].color,
                                [breakingPoints.sm]: {
                                  width: 5,
                                },
                              }}></div>
                          )
                        })
                      ) : (
                        <h3 css={{ margin: 0, fontSize: 16 }}>No Data</h3>
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
                  <h3>More info and charts</h3>
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
