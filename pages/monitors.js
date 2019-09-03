import React, { useState } from "react"
import { MonitorData } from "../components/MonitorData"
import MonitorCard from "../components/MonitorCard"

const Monitors = () => {
  const [data, setData] = useState(MonitorData)
  return (
    <div className="card-container">
      {data.map(pump => {
        const pumpUrl = `/pump/${pump.id}`
        return (
          <a href={pumpUrl}>
            <MonitorCard key={pump.id} pump={pump} />
          </a>
        )
      })}
      <style jsx>{`
        .card-container {
          display: flex;
          flex-flow: wrap;
          justify-content: center;
          margin-top: 50px;
        }
      `}</style>
    </div>
  )
}

export default Monitors

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Monitors = () => {

//     const [dates, setDates] = useState([]);

//     useEffect(() => {
//         fetch()
//     },[])

//     const fetch = () => {
//         axios.get('https://welldone-cache.herokuapp.com/p-api/4762')
//             .then(res => {
//                 return setDates(res.data.dates)
//             })
//             .catch(err => {
//                 return console.log(err)
//             })
//     }
//     return (
//         <>
//             {dates.map(date => {
//                 return <p>{date}</p>
//             })}
//         </>
//     )
// }

// export default Monitors;
