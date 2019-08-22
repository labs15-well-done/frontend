import { ResponsiveHeatMap } from '@nivo/heatmap'

let data = [
    {
        "time": "AM",
        "12": 100,
        "1": 0,
        "2": 100,
        "3": 100,
        "4": 100,
        "5": 100,
        "6": 100,
        "7": 100,
        "8": 100,
        "9": 100,
        "10": 0,
        "11": 100,
    },
    {
        "time": "PM",
        "12": 100,
        "1": 0,
        "2": 100,
        "3": 100,
        "4": 100,
        "5": 100,
        "6": 100,
        "7": 100,
        "8": 100,
        "9": 100,
        "10": 0,
        "11": 100,
    },
]

export const HeatMapChartDay = () => (
    <ResponsiveHeatMap
        data={data}
        keys={[
            '12',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
        ]}
        indexBy="time"
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