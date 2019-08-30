import React from 'react'
import ModalCard from './ModalCard'

export default function Modal({pumps, modalId}) {
    return (
        <div>
        {pumps.map(pump => pump.id === modalId && <ModalCard pump={pump} />)}
        </div>
    )
}
