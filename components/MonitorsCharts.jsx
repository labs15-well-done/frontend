import React from 'react'
import { HeatMapChartDay } from './HeatMapChartDay';
import { HeatMapChartWeek } from './HeatMapChartWeek';

export default function monitorsCharts({ twoWeekSpread }) {
    return (
        <>
            <div className='charts'>
                <div className='heatmapday'>
                    <div className="monitor-title">
                        <h1>Monitor Status: Aug 18 - Aug 24</h1>
                    </div>
                    <HeatMapChartDay twoWeekSpread={twoWeekSpread} />
                </div>
                <div className='heatmapweek'>
                    <HeatMapChartWeek twoWeekSpread={twoWeekSpread} />
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
