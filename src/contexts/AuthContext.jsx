import { createContext, useEffect, useState, useContext } from "react"
//firebase
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,onAuthStateChanged,
    GoogleAuthProvider,
    linkWithPopup  
    
} 
from "firebase/auth";
//firebase auth
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
  //login
    const logIn = async (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
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

      /* GOOGLE SIGN IN ****/
       const googleSignIn = async () =>{
        const provider = new GoogleAuthProvider();
          await linkWithPopup (auth,provider)
          
        }

    return(
        <AuthContext.Provider
        value={{
            createUser,
            user,
            logout,
            logIn,
            googleSignIn,
          
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

