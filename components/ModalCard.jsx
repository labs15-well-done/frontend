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
      <p css={{ fontWeight: "bolder" }}>
        <span css={{ textDecoration: "underline" }}>Status:</span>
        <span css={{ color: styles[pump.status].color }}>
          {" "}
          {styles[pump.status].icon}
        </span>
      </p>
      <p>
        <span css={{ textDecoration: "underline" }}>3-Day Spread: </span>
        {pump.statuses
          ? Object.keys(pump.statuses)
              .slice(11, 14)
              .map(date => {
                console.log(date)
                return <div>{pump.statuses[date].status}</div>
              })
          : null}
        {/* <ul>
          <li>
            {pump.statuses && Object.keys(pump.statuses)[12]}{" "}
            <span
              css={
                pump.statuses
                  ? pump.statuses[Object.keys(pump.statuses)[12]].status === 0
                    ? { color: "#f44336" }
                    : pump.statuses[Object.keys(pump.statuses)[12]].status === 1
                    ? { color: "#FFAD34" }
                    : pump.statuses[Object.keys(pump.statuses)[12]].status === 2
                    ? { color: "#01c000" }
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
          </li>
          <li>
            {pump.statuses &&
              Object.keys(pump.statuses)[Object.keys(pump.statuses)[11]]}{" "}
            <span
              css={
                pump.statuses
                  ? pump.statuses[Object.keys(pump.statuses)[11]].status === 0
                    ? { color: "#f44336" }
                    : pump.statuses[Object.keys(pump.statuses)[11]].status === 1
                    ? { color: "#FFAD34" }
                    : pump.statuses[Object.keys(pump.statuses)[11]].status === 2
                    ? { color: "#01c000" }
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
          </li>
          <li>
            {pump.statuses && Object.keys(pump.statuses)[10]}{" "}
            <span
              css={
                pump.statuses
                  ? pump.statuses[Object.keys(pump.statuses)[10]].status === 0
                    ? { color: "#f44336" }
                    : pump.statuses[Object.keys(pump.statuses)[10]].status === 1
                    ? { color: "#FFAD34" }
                    : pump.statuses[Object.keys(pump.statuses)[10]].status === 2
                    ? { color: "#01c000" }
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
          </li>
        </ul> */}
      </p>
    </div>
  )
}
