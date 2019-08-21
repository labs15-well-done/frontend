import React from "react"
import DashHeader from "../components/DashHeader"
import Seo from "../components/Seo"
import { FiEdit } from "react-icons/fi"
import Card from "../components/Card"
import { colors } from "../components/Styles"

export default function dashboard() {
  return (
    <div css={{ width: "100%" }}>
      <Seo title="Dashboard • Welldone" description="" />
      <DashHeader />
      <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
        <div css={{ display: "flex" }}>
          <Card
            text="Monitor Reports"
            icon={FiEdit}
            value={20}
            color={colors.brand}
          />
        </div>
      </div>
    </div>
  )
}

{
  /* <div className="stack">
        <DashHeader />
        <div className="dash-container">
          <DashReports />
          <div className="parent">
            <div className="mapview">
              <Map />
            </div>
            <div className="charts">
              <div className="sunburst">
                <SunburstChart />
              </div>
              <div className="line">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <style jsx>{`
        .container {
          display: flex;
          background-color: #e5edf6;
        }
        .stack {
          width: 100%;
          border: 1px solid pink;
        }
        .dash-container {
          width: 100%;
          border: 1px solid green;
          flex-direction: column;
        }
        .parent {
          display: flex;
          flex-direction: row;
          width: 100%;
        }
        .mapview {
          border: 1px solid red;
          width: 100%;
          margin: 2%;
        }
        .charts {
          height: auto;
          width: 100%;
          margin: 2%;
          margin-left: -0.1%;
        }
        .sunburst {
          height: 300px;
          width: 100%;
          margin-top: 4%;
          border: 1px solid purple;
        }
        .line {
          height: 300px;
          width: 100%;
          margin-top: 4%;
          border: 1px solid blue;
        }
      `}</style> */
}
