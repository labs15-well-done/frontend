import React from "react"
import ModalCard from "./ModalCard"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import { colors } from "./Styles";

const styles = {
  0: {
    color: colors.danger,
    icon: <FiAlertCircle color={colors.danger}/>
  },1: {
    color: colors.orange,
    icon: <FiHelpCircle color={colors.orange} />
  },2: {
    color: colors.success,
    icon: <FiCheckCircle color={colors.success} />
  },
}

export default function Modal({ pumps, modalId }) {

  const selectedPump = modalId ? pumps.find(pump => pump.id === modalId) : null;
  const pumpToArr = modalId && selectedPump.statuses ? Object.keys(selectedPump.statuses).map(i => selectedPump.statuses[i]) : null;

  console.log("an array?", pumpToArr);
  // console.log("help:", selectedPump);
  return (
    <div>
      {modalId ? (
        <div>
          <h3 css={{color:styles[selectedPump.status].color }}>Pump #{selectedPump.id}</h3>
          <p>Current: {styles[selectedPump.status].icon}</p>
          <p>3-Day Spread:</p>
          {/* <ul>
            <li>{pumpToArr[12].status}</li>
            <li>{pumpToArr[11].status}</li>
            <li>{pumpToArr[10].status}</li>
          </ul> */}
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
