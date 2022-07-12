import React,{useEffect,useState} from 'react'
import { Card } from '../UI/cards'
import './style.css'
import blogPost from '../../assets/blog.json'
import {NavLink} from 'react-router-dom'; 
export const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

useEffect(()=>{
    // const postid=props.id;
    // console.log(postid);
     const posts=blogPost.data
    // console.log('find wala post after this')
    console.log('THis is posts')
    console.log(posts)
    setPosts(posts)
    
  }, [posts]);


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
     {posts.map(post=>{
       return(
       
              <NavLink to={`/post/${post.id}`}>
              <div key={post.id}className='recentPost'>
               <h3>{post.blogTitle}</h3>
              <span>{post.postedOn}</span>
               </div>
               </NavLink>)
    
       })
       }
      </div>
      </Card>

    </div>
  
  )
}
 