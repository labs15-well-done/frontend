import { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"

export default function Map({well, setModalId}) {
  const sensors = [
    {
      latitude: 13.74180294,
      longitude: 106.9793701,
      id: well[0].id,
      status: well[0].status
    },
    {
      latitude: 13.8653917,
      longitude: 107.0437533,
      id: well[1].id,
      status: well[1].status
    },
    {
      latitude: 13.74180294,
      longitude: 106.9793701,
      id: well[2].id,
      status: well[2].status
    },
    {
      latitude: 13.68651955,
      longitude: 107.2160912,
      id: well[3].id,
      status: well[3].status
    },
    {
      latitude: 13.74180294,
      longitude: 106.9793701,
      id: well[4].id,
      status: well[4].status
    },
    {
      latitude: 13.66288,
      longitude: 104.0218467,
      id: well[5].id,
      status: well[5].status
    },
    {
      latitude: 13.66423349,
      longitude: 104.0051294,
      id: well[6].id,
      status: well[6].status
    },
    {
      latitude: 13.66048333,
      longitude: 104.0075117,
      id: well[7].id,
      status: well[7].status
    },
  ]

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "600px",
    latitude: 12.55,
    longitude: 104.9,
    zoom: 6.5,
  })
  const [popUp, setPopUp] = useState(null)
  console.log(viewPort)
  return (
    <div>
      <ReactMapGL
        //josh's
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        // mapboxApiAccessToken="pk.eyJ1IjoiZGlhbW9uZG1haWw5MSIsImEiOiJjanpidzZxajMwMXF5M2Rueng0MmExc3FsIn0.8_SaAolyg_YzvdzClFuvXQ"
        // andy's
        mapStyle="mapbox://styles/brudnak/cjzofruj1135o1cp23vojccc8"
        mapboxApiAccessToken="pk.eyJ1IjoiYnJ1ZG5hayIsImEiOiJjanpramh2bnMwMGU4M210M3N5amRnMTVkIn0.ShGGESPCjVZo2MugiijwWw"
        css={{ borderRadius: 5 }}
        {...viewPort}>
        {sensors.map(sensor => (
          <Marker
            latitude={sensor.latitude}
            longitude={sensor.longitude}
            offsetLeft={-20}
            offsetTop={-10}>
            {sensor.status === 0 ? (
              <img
                src="../static/icon1.png"
                width={"31px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(sensor.id)}
                alt=""
              />
            ) : sensor.status === 1 ? (
              <img
                src="../static/icon2.png"
                width={"31px"}
                onClick={() => setModalId(sensor.id)}
                alt=""
              />
            ) : sensor.status === 2 ? (
              <img
                src="../static/icon3.png"
                width={"31px"}
                onClick={() => setModalId(sensor.id)}
                alt=""
              />
            ) : null}
            {/* {popUp && popUp === sensor.id ? (
              <span css={{ display: 'none' }}><PopUp sensor={sensor} setPopUp={setPopUp} /></span>
            ) : null} */}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  )
}

