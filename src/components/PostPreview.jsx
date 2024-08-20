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
        <div className=' bg-whiteBg rounded-2xl overflow-hidden shadow-md  '>
            
            <img src={dbService.filePreview(image)} alt="Image" className=' w-full h-auto object-cover ' />
            <h1 className=' p-2 text-lg font-bold font-dolce'>{title}</h1>
            
        </div>
    </Link>
  )
}

export default PostPreview
