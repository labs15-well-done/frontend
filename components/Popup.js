import React, { useState } from 'react';

export default function PopUp(props) {
  return (
    <>
      <div className="popup">
        <button onClick={() => props.setPopUp(null)}>X</button>
        <div className="popup-inner">
          <h1>
            <strong>Sensor/Pump Report:</strong>
          </h1>
          <div className="report">
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
      </div>
      <style jsx>{`
        .popup {
          display: flex;
          flex-direction: row-reverse;
          position: fixed;
          z-index: 7;
          color: white;
          width: 400px;
          height: 300px;
          top: 0;
          left: 35%;
          right: 0;
          bottom: 0;
          margin: auto;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
        }
        .popup-inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          width: 75%;
          height: 70%;
          position: absolute;
          left: 7%;
          top: 38%;
          bottom: 38%;
          margin: auto;
          background: dodgerblue;
          border-radius: 12px;
        }
        .report {
          justify-content: flex-start;
        }
        h1 {
          font-size: 1.25rem;
        }
        p {
          font-size: 1rem;
        }
        button {
          height: 23px;
          border-radius: 12px;
          background: none;
          color: white;
          border: 2px solid white;
          margin: 10px;
        }
        button:hover {
          border: 2px solid red;
          background-color: red;
        }
      `}</style>
    </>
  );
}
