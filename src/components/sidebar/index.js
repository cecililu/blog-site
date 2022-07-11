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
      <div className='text'>
        <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 2000.
      
      </p>      </div>
      </Card>
      <Card style={{margin:'10px 0'}}>     
      <div className='cardHeader'>
        <span><center>Social network</center></span>
      </div>
       </Card>
       <Card style={{margin:'10px 0'}}>     
      <div className='cardHeader'>
        <span><center>RECENT POST</center></span>
      </div>

    <div className='recentPosts'>
      <div className='recentPost'>
      <h3>Post title</h3>
      <span>July date</span>
      </div>
      <div className='recentPost'>
      <h3>Post title2</h3>
      <span>July date</span>
      </div>
      <div className='recentPost'>
      <h3>Post title3</h3>
      <span>July date</span>
      </div>
      </div>
       </Card>

    </div>
  
  )
}
 