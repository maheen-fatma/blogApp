import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AskAi() {
const isLoggedIn = useSelector((state)=>(state.auth.status))
  const userData = useSelector((state)=>(state.auth.userInfo))
  return isLoggedIn ?  (
    <div className=' '>
      ask ai
    </div>
  ) : (
    <div className='p-10 font-dolce text-2xl'>
      Please Sign-in to use the AI feature . . .
    </div>
  )
}

export default AskAi
