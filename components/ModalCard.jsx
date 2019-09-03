import React from "react"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"

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
            <FiAlertCircle />
          ) : pump.status === 1 ? (
            <FiHelpCircle />
          ) : pump.status === 2 ? (
            <FiCheckCircle />
          ) : null}
        </span>
      </p>
      <p>
        <span css={{ textDecoration: "underline" }}>3-Day Spread: </span>
        <ul>
          <li>
            {pump.dates && pump.dates[12]}{" "}
            <span
              css={
                pump.statuses
                  ? pump.statuses[12].status === 0
                    ? { color: "#f44336" }
                    : pump.statuses[12].status === 1
                    ? { color: "#FFAD34" }
                    : pump.statuses[12].status === 2
                    ? { color: "#01c000" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[12].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[12].status === 1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[12].status === 2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
          </li>
          <li>
            {pump.dates && pump.dates[11]}{" "}
            <span
              css={
                pump.statuses
                  ? pump.statuses[11].status === 0
                    ? { color: "#f44336" }
                    : pump.statuses[11].status === 1
                    ? { color: "#FFAD34" }
                    : pump.statuses[11].status === 2
                    ? { color: "#01c000" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[11].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[11].status === 1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[11].status === 2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
          </li>
          <li>
            {pump.dates && pump.dates[10]}{" "}
            <span
              css={
                pump.statuses
                  ? pump.statuses[10].status === 0
                    ? { color: "#f44336" }
                    : pump.statuses[10].status === 1
                    ? { color: "#FFAD34" }
                    : pump.statuses[10].status === 2
                    ? { color: "#01c000" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[10].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[10].status === 1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[10].status === 2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
          </li>
        </ul>
      </p>
    </div>
  )
}
