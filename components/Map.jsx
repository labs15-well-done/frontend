import { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import PopUp from "./PopUp"

export default function Map({
  status1,
  status2,
  status3,
  status4,
  status5,
  status6,
  status7,
  status8,
}) {
  const sensors = [
    {
      latitude: 13.74180294,
      longitude: 106.9793701,
      id: 0,
      status: status1,
    },
    {
      latitude: 13.8653917,
      longitude: 107.0437533,
      id: 1,
      status: status2,
    },
    {
      latitude: 13.74180294,
      longitude: 106.9793701,
      id: 2,
      status: status3,
    },
    {
      latitude: 13.68651955,
      longitude: 107.2160912,
      id: 3,
      status: status4,
    },
    {
      latitude: 13.74180294,
      longitude: 106.9793701,
      id: 4,
      status: status5,
    },
    {
      latitude: 13.66288,
      longitude: 104.0218467,
      id: 5,
      status: status6,
    },
    {
      latitude: 13.66423349,
      longitude: 104.0051294,
      id: 6,
      status: status7,
    },
    {
      latitude: 13.66048333,
      longitude: 104.0075117,
      id: 7,
      status: status8,
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
                onClick={() => setPopUp(sensor.id)}
                alt=""
              />
            ) : sensor.status === 1 ? (
              <img
                src="../static/icon2.png"
                width={"31px"}
                onClick={() => setPopUp(sensor.id)}
                alt=""
              />
            ) : sensor.status === 2 ? (
              <img
                src="../static/icon3.png"
                width={"31px"}
                onClick={() => setPopUp(sensor.id)}
                alt=""
              />
            ) : null}
            {popUp && popUp === sensor.id ? (
              <PopUp sensor={sensor} setPopUp={setPopUp} />
            ) : null}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  )
}

// <Marker latitude={13.8653917} longitude={107.0437533} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>

// <Marker latitude={13.74180294} longitude={106.9793701} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>

// <Marker latitude={13.68651955} longitude={107.2160912} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>

// <Marker latitude={13.74180294} longitude={106.9793701} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>

// <Marker latitude={13.66288} longitude={104.0218467} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>

// <Marker latitude={13.66423349} longitude={104.0051294} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>

// <Marker latitude={13.66048333} longitude={104.0075117} offsetLeft={-20} offsetTop={-10}>
//     {/* <div style={{ backgroundColor: 'white', color: 'navy'}}><strong>TEST - YOU ARE HERE</strong></div> */}
//     <img src='../static/LOGO.png' width={'31px'} onClick={this.togglePopUp} style={this.logoHoverStyles} />
//     {this.state.popUp && <PopUp />}
// </Marker>
