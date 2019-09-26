
import React from "react"
import Tour from "reactour"
import { useStore } from "./Layout"

const steps = [
    {
        selector: '[data-tab="dashboard"]',
        content: (
            <>
                <h3>Dashboard</h3>
                <h4>At-a-glance you'll discover:</h4>
                <ul>
                    <li>sensor statuses</li>
                    <li>an interactive map</li>
                    <li>sensor specific details</li>
                </ul>
            </>
        ),
    },
    {
        selector: '[data-tab="monitors"]',
        content: (
            <>
                <h3>Monitors</h3>
                <p>Browse or search a catalog of pump cards, details include a 14 day spread for statuses and daily water flow totals</p>
            </>
        ),
    },
    {
        selector: '[data-tab="reports"]',
        content: (
            <>
                <h3>Reports</h3>
                <p>View, search, and compare pump specific details in a table format for all pumps and data collected</p>
            </>
        ),
    },
    {
        selector: '[data-tab="index"]',
        content: (
            <>
                <h3>WellDone Logo</h3>
                <p>Click here to return home at anytime</p>
            </>
        ),
    },
]
const ReactTour = () => {
    const {
        store: { tour },
        toggleTour,
    } = useStore()
    return (
        <div>
            <Tour
                steps={steps}
                isOpen={tour}
                onRequestClose={toggleTour}
                startAt={0}
            />
        </div>
    )
}
export default ReactTour