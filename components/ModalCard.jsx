import React from 'react'
import { FiUnderline } from 'react-icons/fi';

export default function ModalCard({pump}) {

    return (
        <div>
            <p>Sensor ID: {pump.id}</p>
            <p>Total Water-Flow: {pump.statuses && pump.statuses[13].total}</p>
            <p css={{ fontWeight: 'bolder', textDecoration: 'underline'}}>Statuses</p>
            <p><span css={{ textDecoration: 'underline'}} >Current:</span><span css={pump.status === 0 ? { color: "#f44336"} : pump.status === 1 ? { color: "#FFAD34"} : pump.status === 2 ? { color: "#01c000"} : null }> {pump.status === 0 ? 'Non-Functional' : pump.status === 1 ? 'Unknown' : pump.status === 2 ? 'Functional' : null}</span></p>

            {/* <p>Current Status:<span css={pump.status === 0 ? { color: `${success}`} : pump.status === 1 ? { color: `${unknown}`} : pump.status === 2 ? { color: `${nonFunctional}`} : null }> {pump.status === 0 ? 'Non-Functional' : pump.status === 1 ? 'Unknown' : pump.status === 2 ? 'Functional' : null}</span></p> */}
            <p><span css={{ textDecoration: 'underline'}}>3-Day Spread: </span><ul>
            <li>{pump.dates && pump.dates[12]} <span css={pump.statuses ? pump.statuses[12].status === 0 ? { color: "#f44336"} : pump.statuses[12].status === 1 ? { color: "#FFAD34"} : pump.statuses[12].status === 2 ? { color: "#01c000"} : null : '' }> {pump.statuses ? pump.statuses[12].status === 0 ? 'Non-Functional' : pump.statuses[12].status === 1 ? 'Unknown' : pump.statuses[12].status === 2 ? 'Functional' : null : 'Connection Failure'}</span></li>
            <li>{pump.dates && pump.dates[11]} <span css={pump.statuses ? pump.statuses[11].status === 0 ? { color: "#f44336"} : pump.statuses[11].status === 1 ? { color: "#FFAD34"} : pump.statuses[11].status === 2 ? { color: "#01c000"} : null : '' }> {pump.statuses ? pump.statuses[11].status === 0 ? 'Non-Functional' : pump.statuses[11].status === 1 ? 'Unknown' : pump.statuses[11].status === 2 ? 'Functional' : null : 'Connection Failure'}</span></li>
            <li>{pump.dates && pump.dates[10]} <span css={pump.statuses ? pump.statuses[10].status === 0 ? { color: "#f44336"} : pump.statuses[10].status === 1 ? { color: "#FFAD34"} : pump.statuses[10].status === 2 ? { color: "#01c000"} : null : '' }> {pump.statuses ? pump.statuses[10].status === 0 ? 'Non-Functional' : pump.statuses[10].status === 1 ? 'Unknown' : pump.statuses[10].status === 2 ? 'Functional' : null : 'Connection Failure'}</span></li>
            </ul></p>
        </div>
    )
}
