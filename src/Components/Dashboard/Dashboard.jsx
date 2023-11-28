import { Helmet } from "react-helmet-async";
import { FaCalendar, FaFile, FaHome, FaList, FaPhoneAlt, FaPlus,  FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;

    return (
        <>
            <Helmet>
                <title>Neuro Lab | Dashboard</title>
            </Helmet>

            <div className="container mx-auto">
                <div className="flex">
                    <div className="bg-[#1fc281] w-1/5 h-screen sticky">
                        <ul className="menu text-white">

                            {
                                isAdmin ? <>
                                    <li><NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/addTest'>
                                        <FaPlus></FaPlus>
                                        Add Test
                                    </NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/manageTest'>
                                        <FaList></FaList>
                                        Manage Test
                                    </NavLink>
                                    </li>
                                   
                                    <li><NavLink to='/dashboard/users'>
                                        <FaUsers></FaUsers>
                                        All Users
                                    </NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                    </li>

                                </> : <>
                                    <li><NavLink to='/dashboard/userProfile'>
                                        <FaHome></FaHome>
                                        My Profile
                                    </NavLink>
                                    </li>
                                   
                                    <li>
                                        <NavLink to='/dashboard/testResult'>
                                        <FaFile></FaFile>    
                                        Test Result
                                        </NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/appointments'>
                                        <FaList></FaList>
                                        Appointments
                                    </NavLink>
                                    </li>
                                </>
                            }

                            {/* shared */}
                            <div className='divider'></div>
                            <li><NavLink to='/'>
                                <FaHome></FaHome>
                                Home
                            </NavLink>
                            </li>
                            
                            <li><NavLink to='/contact'>
                                <FaPhoneAlt></FaPhoneAlt>
                                Contact
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;