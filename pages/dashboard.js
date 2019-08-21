import React from 'react'
import Nav from '../components/Nav';
import Map from '../components/Map'
import { SunburstChart } from '../components/SunburstChart'
import { LineChart } from '../components/LineChart'
import DashReports from '../components/DashReports'

export default function dashboard() {
    return (
        <>
            <div className='container'>
                <Nav />
                <div className='stack'>
                <div className='dash-container'>
                    <DashReports />
                <div className='parent'>
                <div className='mapview'>
                    <Map />
                </div>
                    <div className='charts'>
                        <div className='sunburst'>
                            <SunburstChart />
                        </div>
                        <div className='line'>
                        <   LineChart />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            <style jsx>{`
            .container {
                display: flex;
            }
            .stack {
                width: 100%;
                border: 1px solid pink;
            }
            .dash-container {
                width: 100%;
                border: 1px solid green;
                flex-direction: column;
            }
            .parent {
                display: flex;
                flex-direction: row;
                width: 100%;
            }
            .mapview {
                border: 1px solid red;
                width: 100%;
                margin: 2%;
            }
            .charts {
                height: auto;
                width: 100%;
                margin: 2%;
                margin-left: -.1%;
            }
            .sunburst {
                height: 300px;
                width: 100%;
                margin-top: 4%;
                border: 1px solid purple;
            }
            .line {
                height: 300px;
                width: 100%;
                margin-top: 4%;
                border: 1px solid blue;
            }
            
            
    `}</style>
        </>
    )
}
