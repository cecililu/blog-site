import React,{useEffect,useState} from 'react'
import { Card } from '../UI/cards'
import './style.css'
import blogPost from '../../assets/blog.json'
export const   BlogPost = (props) => {
  const [post, setPost] = useState({ 
   id:"",
   blogCategory:"",
   blogTitle:"",
   postedOn: "",
   author:"",
   blogImage:"",
   blogText:'',

    });
  const [apostid,setPostid]=useState()
  useEffect(()=>{
    const postid=props.id;
    console.log(postid);
    const post=blogPost.data.find(post=>post.id==postid)
    console.log(post.blogImage)
    console.log(post)
     setPost(post)
     setPostid(postid)
  },[post,props.id]);
  //if (post.blogImage=='')return null
  return (
  <div className='blogPostContainer'>
    <Card>
         <div className='blogHeader'>
          <span className='blogCategory'>{post.blogCategory}</span>
          <h1>{post.blogTitle} </h1>
          <span className='blogAuthor'>{post.author}</span>
         </div>
         <div className='post-img'>
         <img src={ require(`../../blogPostimages/a.jpg`)} alt='Post Image'/>
         </div>
         <div className='postContent'>
          <p>{post.blogText}
           </p>
         </div>
    </Card>
  </div>  
      
    
    
  )
}
