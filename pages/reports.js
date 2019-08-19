import React from 'react'
import Nav from '../components/Nav';

export default function reports() {
    return (
        <>
            <div className='container'>
                <Nav />
                <h2>Reports Page</h2>
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
