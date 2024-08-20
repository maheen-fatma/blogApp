import React, { useEffect, useState } from 'react'
import { PostPreview } from '../components'
import dbService from '../appwrite/databases'
function AllPosts() {
    const [posts , setPosts] = useState([])
    useEffect(()=>{
        dbService.getAllPost()
        .then((post)=>{
            if(post)
                setPosts(post)
        })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default AllPosts
