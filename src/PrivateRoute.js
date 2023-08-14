import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    if(currentUser){
  return <Outlet />
}else{
    return <Navigate to={"/"} />
}
}


export default PrivateRoute
