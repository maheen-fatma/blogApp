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
    <div className=' mt-5 px-4 '>
        <div className=' masonry sm:masonry-sm md:masonry-md lg:masonry-lg gap-6'>
      {posts && posts.map((item)=>(
        <div key={item.$id} className=' '>
            <PostPreview {...item} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllPosts
