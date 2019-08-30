import React from 'react'

export default function ModalCard({pump}) {

    return (
        <div>
            <p>Sensor ID: {pump.id}</p>
            <p>Current Status: {pump.status === 0 ? 'Non-Functional' : pump.status === 1 ? 'Unknown' : pump.status === 2 ? 'Functional' : null}</p>
            <p>3-Day Spread: <ul>
            <li>{pump.dates && pump.dates[12]} {pump.statuses ? pump.statuses[12].status === 0 ? 'Non-Functional' : pump.status === 1 ? 'Unknown' : pump.status === 2 ? 'Functional' : null : 'Connection Failure'}</li>
            <li>{pump.dates && pump.dates[11]} {pump.statuses ? pump.statuses[11].status === 0 ? 'Non-Functional' : pump.status === 1 ? 'Unknown' : pump.status === 2 ? 'Functional' : null : 'Connection Failure'}</li>
            <li>{pump.dates && pump.dates[10]} {pump.statuses ? pump.statuses[10].status === 0 ? 'Non-Functional' : pump.status === 1 ? 'Unknown' : pump.status === 2 ? 'Functional' : null : 'Connection Failure'}</li>
            </ul></p>
        </div>
    )
}
