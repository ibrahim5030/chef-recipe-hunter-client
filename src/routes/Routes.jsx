import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Recipes from "../pages/Recipes/Recipes";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefs/:id',
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-seven.vercel.app/chefs/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ],
    },
]);

export default router;