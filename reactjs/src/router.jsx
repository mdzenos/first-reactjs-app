
import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import Index from "./views/Index.jsx";
import NotFound from "./views/error/404.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/users",
        element: <Users/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;