import React from 'react'
import {Header, Footer} from "./"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <div className=" bg-gradient-to-r from-background to-darkBg bg-background flex flex-col min-h-screen ">
        <Header/>
        <main className="flex-grow">
        {/* The router outlet or main content goes here */}
        <Outlet />
       </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
