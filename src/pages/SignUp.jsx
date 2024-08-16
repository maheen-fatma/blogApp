import React from 'react'
import { Input, Button, Logo } from '../components'
function SignUp() {
  return (
    <div className=' font-dolce p-10 flex flex-col items-center justify-center'>
      
      <div className=' bg-whiteBg p-8 rounded-md shadow-md'>
      <h1 className=' mb-10 text-2xl font-bold'>Sign-Up</h1>
      <form action="" className=' space-y-6'>
        <Input 
          label="Name:"
          type="text"
          placeholder="Full Name"
          className="p-1 rounded-md border  bg-white focus:outline-none focus:ring-2 focus:ring-headerFooter focus:border-transparent focus:shadow-md"
        /> 
        <Input 
          label="Email:"
          type="email"
          placeholder="abc@abc.com"
          className="p-1 rounded-md border  bg-white focus:outline-none focus:ring-2 focus:ring-headerFooter focus:border-transparent focus:shadow-md"
        /> 
        <Input 
          label="Password:"
          type="password"
          placeholder="********"
          className="p-1 rounded-md border  bg-white focus:outline-none focus:ring-2 focus:ring-headerFooter focus:border-transparent focus:shadow-md"
        /> 
      </form>
      </div>
    </div>
  )
}

export default SignUp
