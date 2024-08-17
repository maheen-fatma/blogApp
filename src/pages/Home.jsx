import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PostManipulation from '../components/PostManipulation';
function Home() {
  const userData = useSelector((state) => state.auth.userInfo);
  const isLoggedIn= useSelector((state)=>(state.auth.status))
  
  return (
    <div className=' '>
      Hi,
      {userData && <div>{userData.name}</div>}
      {isLoggedIn && <PostManipulation/>}
    </div>
  )
}

export default Home
