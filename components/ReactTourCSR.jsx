import dynamic from "next/dynamic"

const ReactTourCSR = dynamic(() => import("./ReactTour"), {
  ssr: false,
})

export default () => <ReactTourCSR />
