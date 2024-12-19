import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";


export const AuthProvider = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user,'form onAuthStateChange');
            setUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginUser,
        createUser,
        logOut

    }
    return (
        <AuthProvider.Provider value={authInfo} >
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;