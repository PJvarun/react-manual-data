import React from 'react'

function Address(props) {
  return (
    <div className='address'>
        <div className='city' style={{color:"crimson"}}>{props.addr.city}</div>
        <div className='pin' style={{color:"blue"}}>{props.addr.pin}</div>
    </div>
  )
}

export default Address