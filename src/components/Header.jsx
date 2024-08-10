import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Logo } from './index'

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
    <header className="bg-gray-900 text-white ">
      <div className=' text-center py-3 lg:py-5'>
        <Logo/>
      </div>
      <hr />
      <div className="">
        <ul className='flex ml-auto justify-center md:justify-end'>
          {
            navItems.map((item)=>
              item.active ? (
                <li key={item.name}
                    className='transition duration-500 hover:bg-blue-700 py-2 px-6 '
                >
                  <Link to={item.slug}>
                  {item.name}
                  </Link>
                </li>
              ) : null
            )
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
