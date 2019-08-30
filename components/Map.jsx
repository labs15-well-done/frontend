import { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"

export default function Map({ pumps, setModalId }) {
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
        {pumps.map(pump => (
          <Marker
            latitude={pump.latitude}
            longitude={pump.longitude}
            offsetLeft={-20}
            offsetTop={-10}>
            {pump.status === 0 ? (
              <img
                src="../static/icon1.png"
                width={"31px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : pump.status === 1 ? (
              <img
                src="../static/icon2.png"
                width={"31px"}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : pump.status === 2 ? (
              <img
                src="../static/icon3.png"
                width={"31px"}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : null}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  )
}
