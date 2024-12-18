import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";

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
                path: '/signin',
                element:<Signin></Signin>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
        ]
    },
]);