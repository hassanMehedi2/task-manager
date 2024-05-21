
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(null);

    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserInfo =(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name
          });
    }

    const logOut  = ()=>{
        setLoading(true)
        return signOut(auth);
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
        setUser(currentUser);
        console.log("user is monitored as " ,currentUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
},[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserInfo

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;