import React,{useEffect,useState} from 'react'
import { Card } from '../UI/cards'
import './style.css'
import blogPost from '../../assets/blog.json'
export const   BlogPost = (props) => {
  const [post, setPost] = useState({});

  useEffect(()=>{
    const postid=props.id;
    console.log(postid);
    const post=blogPost.data.find(post=>post.id==postid)
    // console.log('find wala post after this')
    console.log(post)
     setPost(post)
  },post);
  return (
  <div className='blogPostContainer'>
    <Card>
         <div className='blogHeader'>
          <span className='blogCategory'>{post.blogCategory}</span>
          <h1>{post.blogTitle} </h1>
          <span className='blogAuthor'>{post.author}</span>
         </div>
         <div className='post-img'>
         <img src={require('../../blogPostimages/b.jpg')} alt='Post Image'/>
         </div>
         <div className='postContent'>
          <p>{post.blogText}
           </p>
         </div>
    </Card>
  </div>  
      
    
    
  )
}
