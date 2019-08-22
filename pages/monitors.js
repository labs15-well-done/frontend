import React from 'react'
import Nav from '../components/Nav';
import { HeatMapChartDay } from '../components/HeatMapChartDay';
import { HeatMapChartWeek } from '../components/HeatMapChartWeek';

export default function monitors() {
    return (
        <>
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
            <style jsx>{`
            .charts {
                width: 100%;
                margin: 2%;
            }
            .monitor-title {
                text-align: center;
            }
            .heatmapday {
                height: 300px;
                margin-top: 4%;
            }
            .heatmapweek {
                height: 300px;
            }
    `}</style>
        </>
    )
}
