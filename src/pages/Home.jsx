import React from 'react'
import { useSelector } from 'react-redux'
function Home() {
  const userData = useSelector((state) => state.auth.userInfo);
  
  
  return (
    <div className=' '>
      Hi,
      {userData && <div>{userData.name}</div>}
    </div>
  )
}

export default Home
