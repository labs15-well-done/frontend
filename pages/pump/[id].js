import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { MonitorData } from "../../components/MonitorData";
import MonitorsCharts from '../../components/MonitorsCharts'
import axios from 'axios'

export default function Pump(){
    const router = useRouter()
    const [data, setData] = useState(MonitorData)
    const [twoWeekSpread, setTwoWeekSpread] = useState([])
    const currentPump = data.filter(currPump => currPump.id == router.query.id)[0]

    useEffect(() => {
    axios
        .get(`https://welldone-cache.herokuapp.com/p-api/${currentPump.sensorId}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="current-pump">
            <div>
                <h1>{currentPump.name}</h1>
                <p>ID: {currentPump.id}</p>
                <p>name: {currentPump.name}</p>
                <p>commune: "{currentPump.commune}</p>
                <p>district: {currentPump.district}</p>
                <p>province: {currentPump.province}</p>
                <p>sensorId: {currentPump.sensorId}</p>
                <p>count: {currentPump.count}</p>
                <p>kind: {currentPump.kind}</p>
                <p>type: {currentPump.type}</p>
                <p>cellular: {currentPump.cellular}</p>
                <p>bluetooth: {currentPump.bluetooth}</p>
                <p>training: {currentPump.training}</p>
                <p>remark: {currentPump.remark}</p>
                <p>dataFinished: {currentPump.dataFinished}</p>
                <p>depth: {currentPump.dataFinished}</p>
                <p>yield: {currentPump.yield}</p>
                <p>static: {currentPump.static}</p>
                <p>dynamic: {currentPump.dynamic}</p>
                <p>quality: {currentPump.quality}</p>
            </div>
            <div>
                <MonitorsCharts twoWeekSpread={twoWeekSpread} />
            </div>

            <style jsx>{`
            .current-pump{
                padding: 20px;
                margin: 0 8%;
                text-align: center;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
            }
            `}</style>
        </div>
    )
}