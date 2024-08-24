import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import { Home, SignUp, SignIn, AddPost, Post } from './pages'


const router = createBrowserRouter(
  createRoutesFromElements(
    //routes go here
    <Route path='/' element = {<App/>}>
      <Route index element = {<Home/>}/>
      <Route path='sign-up' element={<SignUp/>} />
      <Route path='sign-in' element={<SignIn/>} />
      <Route path='add-post' element={<AddPost/>} />
      <Route path='post/:fromUrl' element={<Post/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store} >
      <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
)
