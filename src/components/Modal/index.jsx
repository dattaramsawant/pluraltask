import React, { memo } from 'react'
import './Modal.css'

const Index = (props) => {
    return (
        <div className='modalBG'>
            <div className='modalContainer'>
                <div className='closeIcon' onClick={props?.closeModal}>X</div>
                {props?.children}
            </div>
        </div>
    )
}

export default memo(Index)