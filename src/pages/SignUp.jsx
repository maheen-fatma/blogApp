import React from 'react'
import { Input, Button, Logo } from '../components'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
function SignUp() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className=' font-dolce p-10 flex flex-col items-center justify-center text-customMaroon'>
      
      <div className=' bg-whiteBg p-8 rounded-md shadow-md lg:w-1/3'>
      <h1 className=' mb-10 text-2xl font-bold'>Sign-Up</h1>
      <form onSubmit={handleSubmit} className=' space-y-6'>
        <Input 
          value={name}
          type="text"
          placeholder="Full Name"
          className="p-2 lg:w-full rounded-sm border  bg-white focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent focus:shadow-md"
          onChange={(e)=>setName(e.target.value)}
        /> 
        <Input 
          value={email}
          type="email"
          placeholder="Email"
          className="p-2 lg:w-full rounded-sm border  bg-white focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent focus:shadow-md"
          onChange={(e)=>setEmail(e.target.value)}
        /> 
        <Input 
          value={password}
          type="password"
          placeholder="Password"
          className="p-2 lg:w-full rounded-sm border  bg-white focus:outline-none focus:ring-2 focus:ring-background focus:border-transparent focus:shadow-md"
          onChange={(e)=>setPassword(e.target.value)}
        /> 
        <Button 
          children='Create Account'
          bgColor='bg-buttons1'
          textColor='text-white'
          className='lg:w-full  hover:shadow-md rounded-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:bg-darkBg '
          type='submit'
        />
      </form>
      </div>
    </div>
  )
}

export default SignUp
