import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";


const Profile = () => {
    const { user } = useContext(AuthProvider)
    
    return (
        <div>
            This is profile page
            user email: {user ? user?.email : 'No User'}
        </div>
    );
};

export default Profile;