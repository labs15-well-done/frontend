import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import Seo from "../components/Seo"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import Card from "../components/Card"
import { colors, breakingPoints } from "../components/Styles"
import BlankCard from "../components/BlankCard"
import Map from "../components/Map"
import Modal from "../components/Modal"

export default function Dashboard({ pumps }) {
  const [modalId, setModalId] = useState(null)

  console.log("pump info here:", pumps);
  return (
    <div css={{ width: "100%" }}>
      <Seo title="Dashboard • Welldone Dashboard" />
      <Header
        title="Insights"
      />
      <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
        {/* Card Section */}
        <div
          css={{
            display: "flex",
          }}></div>
        {/* Maps and Montior */}
        <div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}>
            <Card
              text="Monitor Reports"
              icon={FiEdit}
              value={pumps.length}
              color={colors.brand}
              toggleSummary="View Reports"
              toggle={<h3>Content</h3>}
            />
            <Card
              text="Functional"
              icon={FiCheckCircle}
              value={pumps.filter(pump => pump.status === 2).length}
              color={colors.success}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 2).length /
                  pumps.length) *
                  100,
              )}
            />
            <Card
              text="Non-Functional"
              icon={FiAlertCircle}
              value={pumps.filter(pump => pump.status === 0).length}
              color={colors.danger}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 0).length /
                  pumps.length) *
                  100,
              )}
            />
            <Card
              text="Unknown"
              icon={FiHelpCircle}
              value={pumps.filter(pump => pump.status === 1).length}
              color={colors.orange}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 1).length /
                  pumps.length) *
                  100,
              )}
            />
            <div
              css={{
                width: "75%",
                marginBottom: 20,
                [breakingPoints.md]: {
                  width: "100%",
                },
              }}>
              <BlankCard style={{ padding: "10px " }}>
                <Map pumps={pumps} setModalId={setModalId} />
              </BlankCard>
            </div>
            <div
              css={{
                width: "24%",
                marginBottom: 20,
                [breakingPoints.md]: {
                  width: "100%",
                },
              }}>
              <BlankCard style={{ textAlign: "center" }}>
                <div css={{ textAlign: "center" }}>
                  <Modal modalId={modalId} pumps={pumps} />
                </div>
              </BlankCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  return { pumps }
}
