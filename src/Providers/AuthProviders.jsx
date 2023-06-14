
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)

    const [loading, setLoading]= useState(true)


   const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email, password)
   }
   const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }

   const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }
   const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
    })
   }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
       if(currentUser){
        axios.post('https://summer-school-server-inky.vercel.app/jwt',{email: currentUser})
        .then(data=>{
           
            localStorage.setItem("token", data.data.token)
        })
       }
       else{
        localStorage.removeItem('token')
       }
     
     
    })
    return ()=>{
        return unsubscribe()
    }
   },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;