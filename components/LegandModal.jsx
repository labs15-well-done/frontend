import React from "react"
import Popup from "reactjs-popup"
import styled from "@emotion/styled"
import { FiInfo } from "react-icons/fi"
import { colors } from "./Styles"

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & button {
    border: none;
    border-radius: 50%;
    margin-right: 5%;
    cursor: pointer;
    transition: 0.3s;
    background-color: ${colors.brand};
    box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
    color: white;
    outline: none;
    border: 3px solid ${colors.brand};
    font-weight: 600;
  }
`

const LegandModal = () => {
  return (
    <Wrapper>
      <Popup
        trigger={
          <button>
            <FiInfo />
          </button>
        }
        position="left top">
        {close => (
          <>
            <h2>Icon Legend</h2>
            <a className="close" onClick={close}>
              &times;
            </a>
          </>
        )}
      </Popup>
    </Wrapper>
  )
}

export default LegandModal
