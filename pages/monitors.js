import React, { useState } from 'react';
import { MonitorData } from "../components/MonitorData";
import MonitorCard from "../components/MonitorCard";

const Monitors = () => {
    const [data, setData] = useState(MonitorData)
    return(
            <div className="card-container">
                {data.map(pump => {
                    const pumpUrl = `/pump/${pump.id}`
                    return <a href={pumpUrl}><MonitorCard key={pump.id} pump={pump}/></a>
                })}
            </div>
    )
}

export default Monitors;