import React, { useState } from "react"
import { colors, breakingPoints, getPumpStyles } from "../components/Styles"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"
import MonitorCard from "../components/MonitorCard"
import LegandModal from "../components/LegandModal"
import { FaExclamationTriangle } from "react-icons/fa"

export default function Monitors({ pumps }) {
  const [filter, setFilter] = useState({ 0: true, 1: true, 2: true })
  const [search, setSearch] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const searchHandler = e => {
    setSearchInput(e.target.value)
    const filtered = pumps.filter(pump => {
      return (
        pump.latitude.toString().includes(e.target.value.toString()) ||
        pump.longitude.toString().includes(e.target.value.toString()) ||
        pump.village.commune
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        pump.village.district
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        pump.village.province
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        pump.village.village
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        pump.well_depth.toString().includes(e.target.value.toString()) ||
        pump.id.toLowerCase().includes(e.target.value.toLowerCase()) ||
        (pump.status === 2 && e.target.value.toLowerCase() === "green") ||
        (pump.status === 2 && e.target.value.toLowerCase() === "functional") ||
        (pump.status === 1 && e.target.value.toLowerCase() === "yellow") ||
        (pump.status === 1 && e.target.value.toLowerCase() === "unknown") ||
        (pump.status === 0 && e.target.value.toLowerCase() === "red") ||
        (pump.status === 0 && e.target.value.toLowerCase() === "non") ||
        (pump.status === 0 &&
          e.target.value.toLowerCase() === "non-functional") ||
        (pump.status === 0 &&
          e.target.value.toLowerCase() === "nonfunctional") ||
        (pump.status === 0 && e.target.value.toLowerCase() === "non functional")
      )
    })
    setSearch(filtered)
  }

  return (
    <>
      {/* <Seo title="Monitors • Welldone Dashboard" /> */}
      <DashHeader
        monitors
        searchHandler={searchHandler}
        title="Monitors"
        // actions={
        //   <div>
        //     <button
        //       active={filter[0]}
        //       onClick={() => setFilter({ ...filter, 2: !filter[2] })}>
        //       Functional
        //     </button>
        //     <button
        //       active={filter[1]}
        //       onClick={() => setFilter({ ...filter, 1: !filter[1] })}>
        //       Non-Functional
        //     </button>
        //     <button onClick={() => setFilter({ ...filter, 0: !filter[0] })}>
        //       Unknown
        //     </button>
        //   </div>
        // }
      />
      <LegandModal />
      <div
        css={{
          padding: "0 20px",
          maxWidth: 1240,
          margin: "0 auto",
        }}>
        {
          <>
            {searchInput.length !== 0 ? (
              <>
                <h4>
                  Results {search.length > 0 ? `(${search.length})` : null}
                </h4>
                {search.length === 0 && searchInput.length > 0 ? (
                  <>
                    <div css={{ display: "flex", alignItems: "center" }}>
                      <FaExclamationTriangle
                        style={{ color: [colors.danger], fontSize: "1.5rem" }}
                      />
                      <p css={{ marginLeft: "1%" }}>
                        Your search -{" "}
                        {
                          <span
                            css={{
                              color: [colors.danger],
                              fontWeight: "bold",
                            }}>
                            {searchInput}
                          </span>
                        }{" "}
                        - did not match any records
                      </p>
                    </div>
                    <h4>Search Keys:</h4>
                    <ul>
                      <li>Pump ID</li>
                      <li>Status</li>
                      <li>Location</li>
                      <li>Latitude</li>
                      <li>Longitude</li>
                    </ul>
                  </>
                ) : null}
                <div
                  css={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}>
                  {search
                    ? search.map(pump => {
                        return <MonitorCard pump={pump} />
                      })
                    : null}
                </div>{" "}
              </>
            ) : (
              <>
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
              </>
            )}
          </>
        }
      </div>
    </>
  )
}

Monitors.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")

  return { pumps }
}
