import React from 'react'
import { Link } from 'react-router-dom'
import dbService from '../appwrite/databases'
function PostPreview({
    $id, //the id will be used to navigate to the entire post
    title="Post title",
    image
}) {
  return (
    <Link to={`/posts/${$id}`}> 
        <div className=' bg-yellow-300'>
            <h1>TO BE DESIGNED</h1>
            <img src={dbService.filePreview(image)} alt="Image" />
            <h1>{title}</h1>
        </div>
    </Link>
  )
}

export default PostPreview
