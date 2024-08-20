import React, { useEffect, useState } from 'react'
import { PostPreview } from '../components'
import dbService from '../appwrite/databases'
function AllPosts() {
    const [posts , setPosts] = useState([])
    useEffect(()=>{
        dbService.getAllPost()
        .then((posts)=>{
            if(posts)
                setPosts(posts.documents) //the getAllPosts function returns an object with documents as a property which inturn is an array of objects containiing all the info of the posts
        })
        
        
    },[])
  return (
    <div>
      {posts && posts.map((item)=>(
        <div key={item.$id}>
            <PostPreview {...item} />
        </div>
      ))}
    </div>
  )
}

export default AllPosts
