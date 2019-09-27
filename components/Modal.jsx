import React from "react"
import ModalCard from "./ModalCard"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import { colors } from "./Styles"

const styles = {
  0: {
    color: colors.danger,
    icon: <FiAlertCircle color={colors.danger} />,
  },
  1: {
    color: colors.orange,
    icon: <FiHelpCircle color={colors.orange} />,
  },
  2: {
    color: colors.success,
    icon: <FiCheckCircle color={colors.success} />,
  },
}

export default function Modal({ pumps, modalId }) {
  const selectedPump = modalId ? pumps.find(pump => pump.id === modalId) : 1
  const pumpToArr =
    modalId && selectedPump.statuses
      ? Object.keys(selectedPump.statuses).map(i => selectedPump.statuses[i])
      : null

  return (
    <div>
      {modalId && pumpToArr ? (
        <div>
          {/* <h3 css={{ color: styles[selectedPump.status].color }}> */}
          <h3>Pump #{selectedPump.id}</h3>
          <div css={{ display: "flex", alignItems: "center" }}>
            <p>Current: </p>
            <div css={{ fontSize: "1.5rem", marginLeft: "3%" }}>
              {styles[selectedPump.status].icon}
            </div>
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <p>3-Day Spread:</p>
            <ul
              css={{
                listStyleType: "none",
                textAlign: "left",
                marginTop: "-1%",
              }}>
              <li>
                {styles[pumpToArr[12].status].icon} {pumpToArr[12].date}
              </li>
              <li>
                {styles[pumpToArr[11].status].icon} {pumpToArr[11].date}
              </li>
              <li>
                {styles[pumpToArr[10].status].icon} {pumpToArr[10].date}
              </li>
            </ul>
          </div>
        </div>
      ) : selectedPump.status === 0 ? (
        <div>
          <h3>Pump #{selectedPump.id}</h3>
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <p css={{ textAlign: "left" }}>Current: </p>
            {
              <span css={{ fontSize: "1.5rem", marginLeft: "3%" }}>
                {styles[selectedPump.status].icon}
              </span>
            }
          </div>
        </div>
      ) : (
        <h3>Select a Pump</h3>
      )}
    </div>
  )
  // return (
  //   <div>
  //     {pumps.map(pump => {
  //       if (pump.id === modalId) {
  //         return <ModalCard pump={pump} />
  //       }
  //     })}
  //   </div>
  // )
}
