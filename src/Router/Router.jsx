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
            element: <PrivateRoute><TestDetails></TestDetails></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/alltests/${params.id}`)
        }
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/adminHome',
                element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
            },
            {
                path: '/dashboard/addTest',
                element: <AddTest></AddTest>
            },
            {
                path: '/dashboard/addBanner',
                element: <AddBanner></AddBanner>
            },
            {
                path: '/dashboard/allBanners',
                element: <AllBanners></AllBanners>
            },
            {
                path: '/dashboard/manageTest',
                element: <ManageTest></ManageTest>
            },
            {
                path: '/dashboard/updateTestData/:id',
                element: <UpdateTest></UpdateTest>,
                loader: ({params})=> fetch(`http://localhost:5000/alltests/${params.id}`)
            },
            {
                path: '/dashboard/users',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/dashboard/userProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/dashboard/testResult',
                element: <TestResult></TestResult>
            },
            {
                path: '/dashboard/appointments',
                element: <Appointments></Appointments>
            }
        ]
    }
  ]);

export default router;  