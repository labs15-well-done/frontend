import React from 'react'
import Nav from '../components/Nav';
import Map from '../components/Map'
import { SunburstChart } from '../components/SunburstChart'

export default function dashboard() {
    return (
        <>
            <div className='container'>
                <Nav />
                <div className='dashview'>
                    <Map />
                    <div className='chart'>
                    <SunburstChart />
                    </div>
                </div>
            </div>
            <style jsx>{`
            .container {
                display: flex;
            }
            .dashview {
                border: 1px solid red;
                // display: flex;
                // flex-direction: row;
            }
            .chart {
                height: 800px;
                // border: 3px solid green;
                // margin-left: 50%;
            }
            h2 {
                margin-left: 10px;
              }
    `}</style>
        </>
    )
}
