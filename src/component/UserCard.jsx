import React from 'react'
import Address from './Address'
import Bank from './Bank'


function UserCard(props) {
  return (
    <div className='userCard'>
      
        
            <div className="name"> {props.name}</div>
            <div className="age">{props.age} years</div>
            <div className="email">{props.email}</div>
           
            <div className="content">
            <div className='personal'>
              <p style={{color:"chocolate"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, saepe.</p> 
            </div>
       <div className="info">
         <Address addr={props.address} />
         <details>
            <summary> Bank details </summary>
         <Bank  detail={props.bank}/>
         </details>
          
           </div>

        </div>
        </div>
  )
}

export default UserCard