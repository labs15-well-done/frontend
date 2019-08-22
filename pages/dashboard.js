import React from "react"
import DashHeader from "../components/DashHeader"
import Seo from "../components/Seo"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import Card from "../components/Card"
import { colors } from "../components/Styles"
import BlankCard from "../components/BlankCard"
import Map from "../components/Map"
import { SunburstChart } from "../components/SunburstChart"
import { LineChart } from "../components/LineChart"

export default function dashboard() {
  return (
    <div css={{ width: "100%" }}>
      <Seo title="Dashboard • Welldone" description="" />
      <DashHeader />
      <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
        {/* Card Section */}
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}>
          <Card
            text="Monitor Reports"
            icon={FiEdit}
            value={20}
            color={colors.brand}
            toggleSummary="View Reports"
            toggle={<h3>Content</h3>}
          />
          <Card
            text="Functional"
            icon={FiCheckCircle}
            value={50}
            color={colors.success}
            progress="66"
          />
          <Card
            text="Non-Functional"
            icon={FiAlertCircle}
            value={15}
            color={colors.danger}
            progress="20"
          />
          <Card
            text="Unknown"
            icon={FiHelpCircle}
            value={10}
            color={colors.orange}
            progress="17"
          />
        </div>
        {/* Maps and Montior */}
        <div>
          <div
            css={{
              margin: "20px 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr ",
              gridColumnGap: "20px",
              gridRowGap: "20px",
            }}>
            <div css={{ gridArea: " 1 / 1 / 5 / 5" }}>
              <BlankCard style={{ padding: "10px " }}>
                <Map />
              </BlankCard>
            </div>
            <div css={{ gridArea: "1 / 5 / 3 / 8" }}>
              <BlankCard style={{ height: 300 }}>
                <SunburstChart />
              </BlankCard>
            </div>
            <div css={{ gridArea: "3 / 5 / 5 / 8" }}>
              <BlankCard>
                <LineChart style={{ height: 300 }} />
              </BlankCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
