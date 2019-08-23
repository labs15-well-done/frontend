import { ResponsiveHeatMap } from '@nivo/heatmap'

let data = [
    {
        "": "",
        "Sun": 0,
        "Mon": 100,
        "Tue": 100,
        "Wed": 100,
        "Thu": 0,
        "Fri": 100,
        "Sat": 100,
    },
]

export const HeatMapChartWeek = () => (
    <ResponsiveHeatMap
        data={data}
        keys={[
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ]}
        indexBy=""
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        padding={5}
        forceSquare={true}
        axisTop={{
            orient: 'top',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        enableLabels={false}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7
            }
        ]}
        fill={[ { id: 'lines' } ]}
        animate={true}
        motionStiffness={80}
        motionDamping={9}
        isInteractive={false}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
    />
)