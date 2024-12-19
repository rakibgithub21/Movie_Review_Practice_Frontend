import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthProvider)
    if (loading) {
        return <p>Loading.........</p>
    }

    if (user) {
        return children
    }
    
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivateRoute;