import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Hero from "../pages/Home/Hero";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    },
]);