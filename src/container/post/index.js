import React from 'react'
import { Outlet } from 'react-router-dom'
import { BlogPost } from '../../components/Blog-Post'
import { Sidebar } from '../../components/sidebar'
import { Card } from '../../components/UI/cards'
import './style.css'
import { useParams } from 'react-router-dom'
export const Post = (props) => {

  let { postid } = useParams();
  console.log(postid)
  return (
    <section  className='container'>
    
      <BlogPost  id={postid}/> 
      <Sidebar/>
      <Outlet></Outlet>
    </section>
  )
}
