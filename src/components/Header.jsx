import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const isLogin = useSelector((state) => state.auth.status);
  console.log('isLogin:', isLogin); // Debugging line
  return (
    <div>
      Header
      log{isLogin}
    </div>
  )
}

export default Header
