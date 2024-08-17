import React from 'react'
import { useSelector } from 'react-redux'
import { EditorComponent } from '../components';
function Home() {
  const userData = useSelector((state) => state.auth.userInfo);
  
  
  return (
    <div className=' '>
      Hi,
      {userData && <div>{userData.name}</div>}

      <EditorComponent/>
    </div>
  )
}

export default Home
