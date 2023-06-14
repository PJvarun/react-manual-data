import React from 'react'
import Details from './Details'

function Bank(props) {
  return (
    <div className='bank'>
        {
            props.detail.map((item,index)=>{
                return(
                    <Details key={index} {...item} />
                )
            })
        }
    </div>
  )
}

export default Bank