import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const isLogin = useSelector((state) => state.auth.status); //this line see the userlogin status
  
  //items in the header are created as array of objects
  const navItems = [
    {
      name:'Home',
      slug:"/",
      active: true //always visible irrespective of the fact user is logged in or not
    },{
      name:'All Posts',
      slug:"/all-posts",
      active: isLogin
    },{
      name:'My Post',
      slug:"/my-post",
      active: isLogin
    },{
      name:'Add Post',
      slug:"/add",
      active: isLogin
    },{
      name:'Sign-in',
      slug:"/signin",
      active: !isLogin //show this only when the user is not loggen in
    },{
      name:'Sign-Up',
      slug:"/signup",
      active: !isLogin
    }
  ]
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto">
        <h1 className="text-lg font-bold">Your Header</h1>
      </div>
    </header>
  )
}

export default Header
