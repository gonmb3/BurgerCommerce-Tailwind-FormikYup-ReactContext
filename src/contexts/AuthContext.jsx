import { createContext, useEffect, useState, useContext } from "react"
//firebase
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,onAuthStateChanged,
} 
from "firebase/auth";
import { auth } from './../firebase/firebase';



const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    //create user firebase
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = (email, password) => {
        return signOut(auth)
    }



      //on auth state change
    useEffect(() => {
           const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                console.log(user)
                setUser(currentUser)
           })  
           return () => {
            unSubscribe();
           }   
    },[])

    console.log(user)

    return(
        <AuthContext.Provider
        value={{
            createUser,
            user,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}

export default AuthContext


export const useAuthContext = () => {
    return useContext(AuthContext)
}

