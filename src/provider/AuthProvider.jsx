
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(null);
    const axios  = useAxios();

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
        const userEmail = currentUser?.email || user?.email;
            const userInfo = { email: userEmail }; 
        if (currentUser) {
            // get token and store client
          
            axios.post('/api/auth/access-token', userInfo)
            .then(res => {
                console.log('token response', res.data);
            })
        }
        else {
            axios.post('/logout', userInfo, {
                withCredentials: true
            })
                .then(res => {
                    console.log(res.data);
                    logOut();
                })
        }
    
    })

    
    

    return ()=>{
        unsubscribe();
    }
},[axios])

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