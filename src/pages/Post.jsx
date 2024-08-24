import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dbService from '../appwrite/databases';
import { useSelector } from 'react-redux';
import { parse } from 'postcss';

function Post() {
  const { fromUrl } = useParams(); //this extracts the 'fromUrl' parameter from the url. This particularly hold the id
  const [post , setPost] = useState(null);
  const navigate = useNavigate();
  const userData = useSelector((state)=> state.auth.userInfo)
  //check if the post that is clicked belongs to the person logged in, for this it will check if the post and the userData exist, then also it will check if the userId parameter of the post is the id parameter of the userData
  const isCurrAuthor = post && userData ? post.userId === userData.$id : false 

  //to fetch that particular post whenever there is a change in the id parameter fetched from the url 
  useEffect(()=>{
    if(fromUrl){
      dbService.getPost(fromUrl).then((post)=>{
        if(post) 
          setPost(post);
        else 
        navigate("/")
      })
    } else {
      navigate("/")
    }
  },[fromUrl])

  return (
    <div className=' bg-purple-300'>
      
    </div>
  )
}

export default Post
