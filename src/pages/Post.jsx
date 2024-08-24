import React from 'react'
import { useParams } from 'react-router-dom'
function Post() {
  const { fromUrl } = useParams(); //this extracts the 'fromUrl' parameter from the url 
  return (
    <div className=' bg-purple-300'>
      
    </div>
  )
}

export default Post
