import React from "react"
import Seo from "../components/Seo"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { colors, breakingPoints } from "../components/Styles"

export default function index() {
  return (
    <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
      <Seo title="Welcome • Welldone Dashboard" />
      <div
        css={{
          zIndex: -1,
          marginTop: -40,
          borderRadius: 10,
          margin: "0 0 20px",
          height: "70vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(/static/welldone-landing.jpg)`,
          display: "flex",
          alignItems: "flex-end",
          color: colors.darkText,
          [breakingPoints.md]: {
            flexDirection: "column",
          },
        }}>
        <div
          css={{
            alignSelf: "flex-start",
            backgroundColor: "white",
            padding: "30px 30px",
            maxWidth: 500,
            borderRadius: "9px 0 10px 0",
            zIndex: 9999,
            [breakingPoints.md]: {
              borderRadius: "9px 9px 0 0",
            },
          }}>
          <h1 css={{ margin: "0px 0 10px" }}>WellDone Dashboard</h1>
          <p
            css={{
              margin: "0px 0px 0px",
              lineHeight: 1.5,
              color: colors.darkText,
              opacity: 0.8,
            }}>
            Monitor current water pump statuses and view in-depth reports.
          </p>
        </div>
        <div css={{ flexGrow: 1 }}></div>
        <Link href="/dashboard">
          <button
            css={{
              cursor: "pointer",
              transition: ".3s",
              backgroundColor: "white",
              border: "none",
              borderRadius: "10px 0 9px 0",
              outline: "none",
              padding: "20px 30px",
              fontSize: 24,
              display: "flex",
              alignItems: "center",
              color: colors.brand,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: colors.brand,
                color: "white",
              },
            }}>
            View Dashboard <FiArrowRight />
          </button>
        </Link>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          div: { width: "49%" },
          [breakingPoints.md]: {
            flexDirection: "column",
            div: { width: "100%", margin: "10px 0" },
          },
        }}>
        <div
          css={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: "10px 30px",
          }}>
          <h1 css={{ marginBottom: 0 }}>About Welldone</h1>
          <p css={{ color: "#2A2A32", opacity: 0.8 }}>
            WellDone International is a non-profit organization working to improve global access to clean water and other basic services essential to human health, productivity, and well-being. Our work combines research, technology, and design to catalyze development solutions that are transformative, open, community-driven, and sustainable.
          </p>
        </div>
      </div>
    </div>
  )
}