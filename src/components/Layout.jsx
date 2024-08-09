import React from 'react'
import {Header, Footer} from "./"

function Layout() {
  return (
    <div>
      <div className=" bg-background flex flex-col min-h-screen ">
        <Header/>
        <main className="flex-grow">
        {/* The router outlet or main content goes here */}
       </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
