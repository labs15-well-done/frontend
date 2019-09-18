import React from "react"
import ModalCard from "./ModalCard"

export default function Modal({ pumps, modalId }) {
  const selectedPump = modalId ? pumps.find(pump => pump.id === modalId) : null;
  const pumpToArr = modalId && selectedPump.statuses ? Object.keys(selectedPump.statuses).map(i => selectedPump.statuses[i]) : null;

  console.log("an array?", pumpToArr);
  // console.log("help:", selectedPump);
  return (
    <div>
      {modalId ? (
        <div>
          <h3>Pump #{selectedPump.id}</h3>
          <p>Current: {pumpToArr[13].status}</p>
          <p>3-Day Spread:</p>
          <ul>
            <li>{pumpToArr[12].status}</li>
            <li>{pumpToArr[11].status}</li>
            <li>{pumpToArr[10].status}</li>
          </ul>
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
