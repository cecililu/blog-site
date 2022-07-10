import React from 'react'
import { Card } from '../UI/cards'
import './style.css'
export const   BlogPost = () => {
  return (
  <div className='blogPostContainer'>
    <Card>
         <div className='blogHeader'>
          <span className='blogCategory'>Featured</span>
          <h1>I own a big panda! </h1>
          <span className='blogAuthor'>posted on</span>
         </div>
         <div className='post-img'>
         <img src={require('../../blogPostimages/b.jpg')} alt='Post Image'/>
         </div>
    </Card>
  </div>  
      
    
    
  )
}
