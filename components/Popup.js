import React, { useState } from 'react';

export default function PopUp(props) {
  return (
    <>
      <div
        className="popup"
        css={{
          position: 'fixed',
          zIndex: 7,
          color: 'white',
          width: '25vw',
          height: '25vw',
          top: 0,
          left: 200,
          right: 0,
          bottom: 0,
          margin: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="popup-inner">
          <button onClick={() => props.setPopUp(null)}>Close</button>
          <h1>
            <strong>Sensor/Pump Report:</strong>
          </h1>
          <p>
            <strong>Pump ID:</strong> 3
          </p>
          <p>
            <strong>Status:</strong> Active/Attention/Failure
          </p>
          <p>
            <strong>Details:</strong> *INSERT_DETAILS*
          </p>
        </div>
      </div>
      <style jsx>{`
        .popup {
          top: 0;
          left: 200px;
          right: 0;
          bottom: 0;
          margin: auto;
          backgroundcolor: rgba(0, 0, 0, 0.3);
          borderradius: 12px;
        }
        .popup-inner {
          display: flex;
          flexdirection: column;
          justifycontent: center;
          alignitems: center;
          padding: 20px;
          width: 75%;
          height: 70%;
          position: absolute;
          left: 7.5%;
          // right: 36%;
          top: 38%;
          bottom: 38%;
          margin: auto;
          background: dodgerblue;
          borderradius: 12px;
        }
      `}</style>
    </>
  );
}
