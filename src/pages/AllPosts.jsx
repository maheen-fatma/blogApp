import React, { useEffect, useState } from 'react'
import { PostPreview } from '../components'
import dbService from '../appwrite/databases'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
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
    <div className=' '>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
        <Masonry gutter="16px">
      {posts && posts.map((item)=>(
        <div key={item.$id} className=' '>
            <PostPreview {...item} />
        </div>
      ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default AllPosts
