import React, { useState , useEffect } from 'react'
import dbService from '../appwrite/databases'
import { PostPreview } from '../components'
function MyPosts() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    dbService.getAllPost().then((newPosts)=>{
      if(newPosts)
        setPosts(newPosts.documents)

    })
  },[])
  return (
    <div className=' px-10 p-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-5 '>
      {posts && posts.map((item)=>( 
        <div key={item.$id} className=' '>
            <PostPreview {...item} />
        </div>
      ))}
        
    </div>
  )
}

export default MyPosts
