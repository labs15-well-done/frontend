import React from 'react';

const MonitorCard = (props) => {
    return (
        <>
            <div className="pump-card">
                <h1>{props.pump.name}</h1>
                <p>{props.pump.commune}</p>
                <p>{props.pump.district}</p>
                <p>{props.pump.province}</p>
            </div>
            <style jsx>{`
            .pump-card{
                border: 1px solid black;
                margin: 20px;
                padding: 20px;
                text-align: center;
                width: 300px;
            }
            `}</style>
        </>
    )
}

export default MonitorCard;