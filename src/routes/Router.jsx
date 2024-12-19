import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../ProtectedRoutes/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
            
        ]
    },
    {
        path: '/signin',
        element: <Signin></Signin>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
]);