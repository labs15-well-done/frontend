import React from "react"
import Popup from "reactjs-popup"

const LegandModal = () => {
  return (
    <>
      <Popup trigger={<button>?</button>} position="left top">
        {close => (
          <>
            <h2>Icon Legend</h2>
            <a className="close" onClick={close}>
              &times;
            </a>
          </>
        )}
      </Popup>
    </>
  )
}

export default LegandModal
