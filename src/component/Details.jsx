import React from 'react'

function Details(props) {
  return (
    <div className='details'>
        <div className='account'>
         <strong>Acc No:</strong>
         <span className='red'>{props.accNo}</span>
         </div>
         <div className='bankName'>
            <strong> Name </strong>
        <span className='red'> {props.bname}</span>
        </div>
            <div className='type'>
                <strong> Type </strong>
                <span className='red'> {props.type}</span>

            </div>
        </div>
    
  )
}

export default Details