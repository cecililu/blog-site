import React from 'react'
import { BlogPost } from '../../components/Blog-Post'
import { Sidebar } from '../../components/sidebar'
import { Card } from '../../components/UI/cards'
import './style.css'
export const Post = () => {
  return (
    <section  className='container'>
      <BlogPost/> 
      <Sidebar/>
    </section>
  )
}
