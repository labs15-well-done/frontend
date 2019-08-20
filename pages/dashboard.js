import React from 'react'
import Nav from '../components/Nav';
import Map from '../components/Map'

export default function dashboard() {
    return (
        <>
            <div className='container'>
                <Nav />
                <h2>Dashboard Page</h2>
                <Map />
            </div>
            <style jsx>{`
            .container {
                display: flex;
            }
            h2 {
                margin-left: 10px;
              }
    `}</style>
        </>
    )
}
