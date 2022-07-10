import React from 'react'
import { Card } from '../UI/cards'
import './style.css'
export const Sidebar = () => {
  return (
    <div className='sideBarContainer'>
     <Card style={{}}>
      <div className='cardHeader'>
        <span><center>ABOUT US</center></span>
      </div>
      <div  className='author'>
        <img src={require('../../blogPostimages/a.jpg')} alt='cil' />
      </div>
      </Card>
      <Card style={{margin:'10px 0'}}>     
      <div className='cardHeader'>
        <span><center>Social network</center></span>
      </div>
       </Card>

    </div>
  
  )
}
 