import React, { useState , useEffect } from 'react'
import dbService from '../appwrite/databases'
import { PostPreview } from '../components'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

function MyPosts() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    dbService.getAllPost().then((newPosts)=>{
      if(newPosts)
        setPosts(newPosts.documents)

    })
  },[])
  return (
    <div className=' px-10 p-[20px]  '>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry gutter="20px">
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

export default MyPosts
