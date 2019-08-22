import React from 'react'
import Nav from '../components/Nav';
import { HeatMapChartDay } from '../components/HeatMapChartDay';
import { HeatMapChartWeek } from '../components/HeatMapChartWeek';

export default function monitors() {
    return (
        <>
            <div className='container'>
                <Nav />
                <div className='stack'>
                            <div className='parent'>
                                <div className='charts'>
                                    <div className='heatmapday'>
                                        <div className="monitor-title">
                                            <h1>Monitor Status: Aug 18 - Aug 24</h1>
                                        </div>
                                        <HeatMapChartDay />
                                    </div>
                                    <div className='heatmapweek'>
                                        <HeatMapChartWeek />
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
                // border: 1px solid pink;
            }
            .parent {
                display: flex;
                flex-direction: row;
                width: 100%;
            }
            .charts {
                height: auto;
                width: 100%;
                margin: 2%;
                margin-left: -.1%;
            }
            .monitor-title {
                text-align: center;
            }
            .heatmapday {
                height: 300px;
                width: 100%;
                margin-top: 4%;
                // border: 1px solid blue;
            }
            .heatmapweek {
                height: 300px;
                width: 100%;
                // border: 1px solid blue;
            }
    `}</style>
        </>
    )
}
