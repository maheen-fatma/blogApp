import React from 'react'
import SignoutBtn from './SignoutBtn'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
function NameLogo() {
    const userData = useSelector((state)=>(state.auth.userInfo))
    
    
     // State to track dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="relative inline-block text-left pt-1">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5  bg-gray-300 px-3 py-2 text-sm font-semibold text-black font-dolce shadow-sm rounded-3xl hover:bg-gray-200" id="menu-button" aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}>
      {userData.name[0]}
    </button>
  </div>

  
  {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
            <Link
                to="/my-account"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={closeDropdown} // Close dropdown on link click
              >
                My Account
              </Link>
              <Link
                to="/add-post"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={closeDropdown} // Close dropdown on link click
              >
                New Idea
              </Link>
              <Link
                to="/my-post"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={closeDropdown} // Close dropdown on link click
              >
                My Uploads
              </Link>
              <div onClick={closeDropdown}>
                <SignoutBtn />
              </div>
            </div>
          </div>
        )}
</div>

    </div>
  )
}

export default NameLogo
