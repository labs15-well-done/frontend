import React from "react";
import Popup from "reactjs-popup";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  FiInfo,
  FiX,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";

import { colors } from "./Styles"

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  span {
    margin-right: 5%;
    margin-left: 10px;
    margin-top: 3px;
    font-size: 1.6rem;
    cursor: pointer;
    color: ${colors.brand};
    font-weight: lighter;
  }
`
const Legend = styled("div")`
  h4 {
    text-align: center;
    font-size: 1.1rem;
    text-transform: uppercase;
    word-spacing: 9px;
    letter-spacing: 2px;
    margin: 4px 0px;
    color: #2a2a32ed;
  }
`

const dynamicStyle = props =>
  css`
    color: ${props.color};
  `

const Row = styled("div")`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.6rem;
    ${dynamicStyle};
  }
  p {
    margin-left: 20px;
  }
`
const Close = styled("div")`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    color: #2a2a32ed;
    font-size: 1.6rem;
  }
`

const LegendModal = () => {
  return (
    <Wrapper>
      <Popup
        trigger={
          <span>
            <FiInfo />
          </span>
        }
        position="left top">
        {close => (
          <Legend>
            <Close>
              <h4>Icon Legend</h4>
              <FiX onClick={close} css={{ paddingLeft: "5px"}} />
            </Close>

            <Row>
              <FiCheckCircle color={colors.success} />
              <p>Functional</p>
            </Row>

            <Row>
              <FiHelpCircle color={colors.orange} />
              <p>Unknown</p>
            </Row>

            <Row>
              <FiAlertCircle color={colors.danger} />
              <p>Non-Functional</p>
            </Row>
          </Legend>
        )}
      </Popup>
    </Wrapper>
  )
}

export default LegendModal