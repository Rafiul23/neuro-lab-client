import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../Components/Home/Home";
import About from './../Components/About/About';
import Contact from './../Components/Contact/Contact';
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AllTests from './../Components/AllTests/AllTests';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/alltests',
            element: <AllTests></AllTests> 
        }
      ]
    },
  ]);

export default router;  