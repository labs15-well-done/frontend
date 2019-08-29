import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import Seo from "../components/Seo"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import Card from "../components/Card"
import { colors, breakingPoints } from "../components/Styles"
import BlankCard from "../components/BlankCard"
import Map from "../components/Map"
import { SunburstChart } from "../components/SunburstChart"
import { LineChart } from "../components/LineChart"

import axios from "axios"

export default function dashboard() {
  const [statusTotal, setStatusTotal] = useState([])

  const [status1, setStatus1] = useState(null)
  const [status2, setStatus2] = useState(null)
  const [status3, setStatus3] = useState(null)
  const [status4, setStatus4] = useState(null)
  const [status5, setStatus5] = useState(null)
  const [status6, setStatus6] = useState(null)
  const [status7, setStatus7] = useState(null)
  const [status8, setStatus8] = useState(null)

  const [modal1, setModal1] = useState(null)
  const [modal2, setModal2] = useState(null)
  const [modal3, setModal3] = useState(null)
  const [modal4, setModal4] = useState(null)
  const [modal5, setModal5] = useState(null)
  const [modal6, setModal6] = useState(null)
  const [modal7, setModal7] = useState(null)
  const [modal8, setModal8] = useState(null)

  // const [func, setFunc] = useState(0)
  // const [nonFunc, setNonFunc] = useState(0)
  // const [unknown, setUnknown] = useState(0)

  const filteredFunc = statusTotal.filter(stat => {
    stat === 2
  })

  const filteredNonFunc = statusTotal.filter(stat => {
    stat === 1
  })

  const filteredUnknown = statusTotal.filter(stat => {
    stat === 0
  })

  useEffect(() => {
    pump1()
    pump2()
    pump3()
    pump4()
    pump5()
    pump6()
    pump7()
    pump8()
  }, [])

  const pump1 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4734`)
      .then(
        res => (
          setStatus1(res.data.status),
          setModal1(res.data),
          setStatusTotal([...statusTotal, res.data.status])
        ),
      )
      .catch(err => console.log(err))
  }
  console.log(status1)
  const pump2 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4762`)
      .then(
        res => (
          setStatus2(res.data.status),
          setModal2(res.data),
          setStatusTotal([...statusTotal, res.data.status])
        ),
      )
      .catch(err => console.log(err))
  }
  const pump3 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4736`)
      .then(
        res => (setStatus3(res.data.status), setModal3(res.data)),
        setStatusTotal([...statusTotal, res.data.status]),
      )
      .catch(err => console.log(err))
  }
  const pump4 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4742`)
      .then(
        res => (setStatus4(res.data.status), setModal4(res.data)),
        setStatusTotal([...statusTotal, res.data.status]),
      )
      .catch(err => console.log(err))
  }
  const pump5 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4760`)
      .then(
        res => (setStatus5(res.data.status), setModal5(res.data)),
        setStatusTotal([...statusTotal, res.data.status]),
      )
      .catch(err => console.log(err))
  }
  const pump6 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4763`)
      .then(
        res => (setStatus6(res.data.status), setModal6(res.data)),
        setStatusTotal([...statusTotal, res.data.status]),
      )
      .catch(err => console.log(err))
  }
  const pump7 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4764`)
      .then(
        res => (setStatus7(res.data.status), setModal7(res.data)),
        setStatusTotal([...statusTotal, res.data.status]),
      )
      .catch(err => console.log(err))
  }
  const pump8 = () => {
    axios
      .get(`https://welldone-cache.herokuapp.com/p-api/4715`)
      .then(
        res => (setStatus8(res.data.status), setModal8(res.data)),
        setStatusTotal([...statusTotal, res.data.status]),
      )
      .catch(err => console.log(err))
  }

  return (
    <div css={{ width: "100%" }}>
      <Seo title="Dashboard • Welldone" description="" />
      <Header
        title="Insights"
        actions={
          <div>
            <a>Weekly</a>
            <a>Monthly</a>
          </div>
        }
      />
      <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
        {/* Card Section */}
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}></div>
        {/* Maps and Montior */}
        <div>
          <div
            css={{
              margin: "20px 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "auto 1fr 1fr",
              gridColumnGap: "20px",
              gridRowGap: "20px",
              [breakingPoints.lg]: {
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto 1fr auto auto",
                gridColumnGap: "20px",
                gridRowGap: "20px",
              },
            }}>
            <Card
              text="Monitor Reports"
              icon={FiEdit}
              value={20}
              color={colors.brand}
              toggleSummary="View Reports"
              toggle={<h3>Content</h3>}
              css={{
                gridArea: "1 / 1 / 2 / 2",
                [breakingPoints.lg]: {
                  gridArea: "1 / 1 / 2 / 2",
                },
              }}
            />
            <Card
              text="Functional"
              icon={FiCheckCircle}
              value={filteredFunc.length}
              color={colors.success}
              progress="66"
              statusTotal={statusTotal}
              css={{
                gridArea: "1 / 2 / 2 / 3",
                [breakingPoints.lg]: {
                  gridArea: "1 / 2 / 2 / 3",
                },
              }}
            />
            <Card
              text="Non-Functional"
              icon={FiAlertCircle}
              value={filteredNonFunc.length}
              color={colors.danger}
              progress="20"
              statusTotal={statusTotal}
              css={{
                gridArea: "1 / 3 / 2 / 4",
                [breakingPoints.lg]: {
                  gridArea: "2 / 1 / 3 / 2",
                },
              }}
            />
            <Card
              text="Unknown"
              icon={FiHelpCircle}
              value={}
              color={colors.orange}
              progress="17"
              statusTotal={statusTotal}
              css={{
                gridArea: "1 / 4 / 2 / 5",
                [breakingPoints.lg]: {
                  gridArea: "2 / 2 / 3 / 3",
                },
              }}
            />
            <div
              css={{
                gridArea: "2 / 1 / 4 / 4",
                [breakingPoints.lg]: {
                  gridArea: "3 / 1 / 4 / 3",
                },
              }}>
              <BlankCard style={{ padding: "10px " }}>
                <Map
                  statusTotal={statusTotal}
                  status1={status1}
                  status2={status2}
                  status3={status3}
                  status4={status4}
                  status5={status5}
                  status6={status6}
                  status7={status7}
                  status8={status8}
                />
              </BlankCard>
            </div>
            <div
              css={{
                gridArea: "2 / 4 / 3 / 5",
                [breakingPoints.lg]: {
                  gridArea: "4 / 1 / 5 / 3",
                },
              }}>
              <BlankCard style={{ height: 300 }}>
                <SunburstChart />
              </BlankCard>
            </div>
            <div
              css={{
                gridArea: "3 / 4 / 4 / 5",
                [breakingPoints.lg]: {
                  gridArea: "5 / 1 / 6 / 3",
                },
              }}>
              <BlankCard style={{ height: 300 }}>
                {/* <LineChart /> */}
                <h2>well data here</h2>
              </BlankCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
