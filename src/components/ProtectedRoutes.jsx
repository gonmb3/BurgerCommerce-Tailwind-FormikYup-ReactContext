import { Navigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"


const ProtectedRoutes = ({children}) => {

  const {user} =  useAuthContext();

  if(!user){
    return <Navigate to="/signup" />
  }
  return (
    children
  )
}

export default ProtectedRoutes