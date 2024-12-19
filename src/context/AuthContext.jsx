import { useState } from "react";
import { createContext } from "react";


export const AuthProvider = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
    const [user, setUser] = useState('Fahim')
    
    const authInfo = {

        user,
        setUser
    }
    return (
        <AuthProvider.Provider value={authInfo} >
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;