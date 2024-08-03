import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"

function App() {

  //a loading state which would be set false when the user is either fetched or not fetched
  //use loading state to show "Loading..." message while the data is being fetched from appwrite auth service
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
      authService.getLoggedInUser()
      .then( (userInfor) => { // if there is a user then run the login reducer form the store which causes the login status to be true
        if(userInfo){
          dispatch(login({userInfo}))
        }
        else {
          dispatch(logout()) //else false the login sttaus
        }
      } )
      .finally( () =>  //finally after all this, set loading as false to stop showing 
        setLoading(false)
      )
  },[])
  
  //conditional rendering as per loading
  return !loading ? (
    <div>
      Blog app data
    </div>
  ) : (
    <div>
      Loading..
    </div>
  )
}

export default App
