import React from "react"
import Popup from "reactjs-popup"
import styled from "@emotion/styled"
import { FiInfo, FiX } from "react-icons/fi"
import { colors } from "./Styles"

const mapPins = {
  status: {
    functional: "../static/success.svg",
    unknown: "../static/unknown.svg",
    nonFunctional: "../static/error.svg",
  },
}

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & span {
    margin-right: 5%;
    font-size: 1.6rem;
    cursor: pointer;
    color: ${colors.brand};
    font-weight: lighter;
  }
`
const Legand = styled("div")`
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

const Row = styled("div")`
  display: flex;
  & p {
    margin-left: 20px;
  }
`
const Close = styled("div")`
  display: flex;
  justify-content: flex-end;

  & svg {
    cursor: pointer;
    color: #2a2a32ed;
    font-size: 1.6rem;
  }
`

const LegandModal = () => {
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
          <Legand>
            <h4>Icon Legend</h4>

            <Row>
              <img
                src={mapPins.status.functional}
                width={"24px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
              <p>Functional</p>
            </Row>

            <Row>
              <img
                src={mapPins.status.unknown}
                width={"24px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
              <p>Unknown</p>
            </Row>

            <Row>
              <img
                src={mapPins.status.nonFunctional}
                width={"24px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
              <p>Non-Functional</p>
            </Row>
            <Close>
              <FiX onClick={close} />
            </Close>
          </Legand>
        )}
      </Popup>
    </Wrapper>
  )
}

export default LegandModal
