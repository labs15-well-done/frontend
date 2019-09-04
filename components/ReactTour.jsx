import React from "react"
import Tour from "reactour"
import { useStore } from "./Layout"

const steps = [
  {
    selector: '[data-tab="dashboard"]',
    content: (
      <>
        <h3>Here you can view our dashboard!</h3>
        <h4>At-a-glance you'll discover:</h4>
        <ul>
          <li>sensor statuses</li>
          <li>an interactive map</li>
          <li>sensor specific details</li>
        </ul>
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
