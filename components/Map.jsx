import React, { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"

export default function Map({ pumps, setModalId }) {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "600px",
    latitude: 12.55,
    longitude: 104.9,
    zoom: 6.5,
  })

  return (
    <div>
      <ReactMapGL
        // andy's
        mapStyle="mapbox://styles/brudnak/cjzypjc362w9u1clduir026aw"
        mapboxApiAccessToken="pk.eyJ1IjoiYnJ1ZG5hayIsImEiOiJjanpramh2bnMwMGU4M210M3N5amRnMTVkIn0.ShGGESPCjVZo2MugiijwWw"
        onViewportChange={view => setViewPort({ ...view, width: "100%" })}
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
                src="../static/error.svg"
                width={"31px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : pump.status === 1 ? (
              <img
                src="../static/unknown.svg"
                width={"31px"}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : pump.status === 2 ? (
              <img
                src="../static/success.svg"
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
