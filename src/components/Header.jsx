import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Logo } from './index'
import SignoutBtn from './SignoutBtn';

function Header() {
  const isLogin = useSelector((state) => state.auth.status); //this line see the userlogin status
  
  //items in the header are created as array of objects
  const navItems = [
    {
      name:'Home',
      slug:"/",
      active: true //always visible irrespective of the fact user is logged in or not
    },{
      name:'My Posts',
      slug:"/my-post",
      active: isLogin
    },{
      name:'Add Post',
      slug:"/add-post",
      active: isLogin
    },{
      name:'Sign-In',
      slug:"/sign-in",
      active: !isLogin //show this only when the user is not loggen in
    },{
      name:'Sign-Up',
      slug:"/sign-up",
      active: !isLogin
    }
  ]
  return (
    <header className="   text-customMaroon  ">
      <div className=' text-center py-2 lg:py-2'>
        <Logo/>
      </div>
      <hr />
      <div className="">
        <ul className='flex ml-auto justify-center md:justify-end font-dolce'>
          {
            navItems.map((item)=>
              item.active ? (
                <NavLink to={item.slug} className={({isActive})=>`rounded-3xl  ${isActive? "bg-black text-white":"transition duration-500 hover:bg-buttons1"}`}>
                <li key={item.name}
                    className='py-2 px-6 '
                >
                 
                  {item.name}
                 
                </li>
                </NavLink>
              ) : null
            )
          }
          {
          isLogin && 
          <SignoutBtn/>
        }
        </ul>
      </div>
    </header>
  )
}

export default Header
