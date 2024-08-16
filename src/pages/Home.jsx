import React from 'react'
import { useSelector } from 'react-redux'
function Home() {
  const userData = useSelector((state) => state.auth.userInfo);
  if(userData)
  console.log(userData.name)
  return (
    <div className=' '>
      Hi,
      {userData && <div>{userData.name}</div>}
    </div>
  )
}

export default Home
