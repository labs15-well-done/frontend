import { Component, useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import PopUp from "./PopUp"

const sensors = [
  {
    latitude: 13.74180294,
    longitude: 106.9793701,
    id: 0,
  },
  {
    latitude: 13.8653917,
    longitude: 107.0437533,
    id: 1,
  },
  {
    latitude: 13.74180294,
    longitude: 106.9793701,
    id: 2,
  },
  {
    latitude: 13.68651955,
    longitude: 107.2160912,
    id: 3,
  },
  {
    latitude: 13.74180294,
    longitude: 106.9793701,
    id: 4,
  },
  {
    latitude: 13.66288,
    longitude: 104.0218467,
    id: 5,
  },
  {
    latitude: 13.66423349,
    longitude: 104.0051294,
    id: 6,
  },
  {
    latitude: 13.66048333,
    longitude: 104.0075117,
    id: 7,
  },
]

export default function Map() {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "600px",
    latitude: 13.5,
    longitude: 105.5,
    zoom: 6,
  })
  const [popUp, setPopUp] = useState(null)
  console.log(viewPort)
  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGlhbW9uZG1haWw5MSIsImEiOiJjanpidzZxajMwMXF5M2Rueng0MmExc3FsIn0.8_SaAolyg_YzvdzClFuvXQ"
        css={{ borderRadius: 5 }}
        {...viewPort}>
        {sensors.map(sensor => (
          <Marker
            latitude={sensor.latitude}
            longitude={sensor.longitude}
            offsetLeft={-20}
            offsetTop={-10}>
            <img
              src="../static/LOGO.png"
              width={"31px"}
              onClick={() => setPopUp(sensor.id)}
            />
            {popUp && popUp === sensor.id ? (
              <PopUp setPopUp={setPopUp} />
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
