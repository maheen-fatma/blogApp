import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
function SignoutBtn() {
    const dispatch = useDispatch()
    const signoutHandler = () => { 
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
  return (
    <div>
      <Button 
        children='Sign-out' 
        className='transition duration-500 hover:bg-blue-700 py-2 px-6 '
        onClick={signoutHandler}
      />
    </div>
  )
}

export default SignoutBtn
