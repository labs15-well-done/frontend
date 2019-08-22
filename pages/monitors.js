import React from 'react';
import Nav from '../components/nav';

export default function monitors() {
  return (
    <>
      <div className="container">
        <h2>Monitors Page</h2>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
          }
          h2 {
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
}
