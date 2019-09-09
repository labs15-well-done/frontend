import React from "react"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"

const styles = {
  0: {
    icon: <FiAlertCircle size="20px" />,
    color: "#f44336",
  },
  1: {
    icon: <FiHelpCircle size="20px" />,
    color: "#FFAD34",
  },
  2: {
    icon: <FiCheckCircle size="20px" />,
    color: "#01c000",
  },
}

export default function ModalCard({ pump }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        p: {
          margin: "10px 0",
        },
      }}>
      <p css={{ alignSelf: "right", fontWeight: "bolder" }}>ID #{pump.id}</p>
      {/* <p>Total Water-Flow: {pump.statuses && pump.statuses[13].total}</p> */}
      {/* <span css={{ display: "flex" }}> */}
      <p css={{ fontWeight: "bolder" }}>
        <div
          css={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <span css={{ textDecoration: "underline" }}>Status:</span>
          <span
            css={
              pump.status === 0
                ? {
                    color: "#f44336",
                    marginLeft: "15px",
                    fontSize: "2rem",
                  }
                : pump.status === 1
                ? {
                    color: "#FFAD34",
                    marginLeft: "15px",
                    fontSize: "2rem",
                  }
                : pump.status === 2
                ? {
                    color: "#01c000",
                    marginLeft: "15px",
                    fontSize: "2rem",
                  }
                : null
            }>
            {" "}
            {pump.status === 0 ? (
              <FiAlertCircle />
            ) : pump.status === 1 ? (
              <FiHelpCircle />
            ) : pump.status === 2 ? (
              <FiCheckCircle />
            ) : null}
          </span>
        </div>
      </p>
      {/* </span> */}
      <p>
        <span css={{ textDecoration: "underline", fontWeight: "bold" }}>
          3-Day Spread:{" "}
        </span>
        <ul css={{ listStyleType: "none" }}>
          <li>
            <span
              css={
                pump.statuses
                  ? pump.statuses[12].status === 0
                    ? { color: "#f44336", marginRight: "10px" }
                    : pump.statuses[12].status === 1
                    ? { color: "#FFAD34", marginRight: "10px" }
                    : pump.statuses[12].status === 2
                    ? { color: "#01c000", marginRight: "10px" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[Object.keys(pump.statuses)[12]].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[12]].status ===
                  1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[12]].status ===
                  2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
            {pump.dates && pump.dates[12]}
          </li>
          <li>
            <span
              css={
                pump.statuses
                  ? pump.statuses[11].status === 0
                    ? { color: "#f44336", marginRight: "10px" }
                    : pump.statuses[11].status === 1
                    ? { color: "#FFAD34", marginRight: "10px" }
                    : pump.statuses[11].status === 2
                    ? { color: "#01c000", marginRight: "10px" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[Object.keys(pump.statuses)[11]].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[11]].status ===
                  1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[11]].status ===
                  2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
            {pump.dates && pump.dates[11]}{" "}
          </li>
          <li>
            <span
              css={
                pump.statuses
                  ? pump.statuses[10].status === 0
                    ? { color: "#f44336", marginRight: "10px" }
                    : pump.statuses[10].status === 1
                    ? { color: "#FFAD34", marginRight: "10px" }
                    : pump.statuses[10].status === 2
                    ? { color: "#01c000", marginRight: "10px" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[Object.keys(pump.statuses)[10]].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[10]].status ===
                  1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[10]].status ===
                  2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
            {pump.dates && pump.dates[10]}{" "}
          </li>
        </ul>{" "}
        */}
      </p>
    </div>
  )
}
