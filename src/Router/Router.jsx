import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../Components/Home/Home";
import About from './../Components/About/About';
import Contact from './../Components/Contact/Contact';
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AllTests from './../Components/AllTests/AllTests';
import TestDetails from "../Components/TestDetails/TestDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Dashboard from './../Components/Dashboard/Dashboard';
import AdminHome from './../Components/Dashboard/AdminHome/AdminHome';
import AddTest from './../Components/Dashboard/AddTest/AddTest';
import ManageTest from './../Components/Dashboard/ManageTest/ManageTest';
import AllUsers from './../Components/Dashboard/AllUsers.jsx/AllUsers';
import Reservation from './../Components/Dashboard/Reservation/Reservation';
import MyProfile from './../Components/Dashboard/MyProfile/MyProfile';
import TestResult from './../Components/Dashboard/TestResult/TestResult';
import Appointments from './../Components/Dashboard/Appointments/Appointments';
import UpdateTest from "../Components/Dashboard/UpdateTest/UpdateTest";
import Payment from "../Components/Payment/Payment";
import AddBanner from "../Components/Dashboard/AddBanner/AddBanner";
import AllBanners from "../Components/Dashboard/AllBanners/AllBanners";
import AdminRoute from "../Components/AdminRoute/AdminRoute";
import Services from "../Components/Services/Services";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: '/services',
            element: <Services></Services>
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
            element: <PrivateRoute><AllTests></AllTests></PrivateRoute>
        },
        {
            path: '/alltests/:id',
            element: <PrivateRoute><TestDetails></TestDetails></PrivateRoute>,
            loader: ({params})=> fetch(`https://neuro-lab-server.vercel.app/alltests/${params.id}`)
        }
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: '/dashboard/addTest',
                element: <AdminRoute><AddTest></AddTest></AdminRoute>
            },
            {
                path: '/dashboard/addBanner',
                element: <AdminRoute><AddBanner></AddBanner></AdminRoute>
            },
            {
                path: '/dashboard/allBanners',
                element: <AdminRoute><AllBanners></AllBanners></AdminRoute>
            },
            {
                path: '/dashboard/manageTest',
                element: <AdminRoute><ManageTest></ManageTest></AdminRoute>
            },
            {
                path: '/dashboard/updateTestData/:id',
                element: <AdminRoute><UpdateTest></UpdateTest></AdminRoute>,
                loader: ({params})=> fetch(`https://neuro-lab-server.vercel.app/alltests/${params.id}`)
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/reservation',
                element: <AdminRoute><Reservation></Reservation></AdminRoute>
            },
            {
                path: '/dashboard/userProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/dashboard/testResult',
                element: <PrivateRoute><TestResult></TestResult></PrivateRoute>
            },
            {
                path: '/dashboard/appointments',
                element: <PrivateRoute><Appointments></Appointments></PrivateRoute>
            }
        ]
    }
  ]);

export default router;  