import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../Components/Home/Home";
import About from './../Components/About/About';
import Contact from './../Components/Contact/Contact';
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AllTests from './../Components/AllTests/AllTests';
import TestDetails from "../Components/TestDetails/TestDetails";

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
        },
        {
            path: '/alltests/:id',
            element: <TestDetails></TestDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/alltests/${params.id}`)
        }
      ]
    },
  ]);

export default router;  