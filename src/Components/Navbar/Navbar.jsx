import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {

    const { logOut, user } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navlinks = <>
        <li className='mr-4'><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "pb-2 text-white font-bold underline md:border-b-2" : "text-white"
            }
        >Home</NavLink></li>

        <li className='mr-4'><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "pb-2 text-white font-bold underline md:border-b-2" : "text-white"
            }
        >About Us</NavLink></li>

        <li className='mr-4'><NavLink to='/contact'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "pb-2 text-white font-bold underline md:border-b-2" : "text-white"
            }
        >Contact Us</NavLink></li>

        <li className='mr-4'><NavLink to='/services'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "pb-2 text-white font-bold underline md:border-b-2" : "text-white"
            }
        >Our Services</NavLink></li>

        { user && <li className='mr-4'><NavLink to='/dashboard'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "pb-2 text-white font-bold underline md:border-b-2" : "text-white"
            }
        >Dashboard</NavLink></li>}

        <li className='mr-4'><NavLink to='/register'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "pb-2 text-white font-bold underline md:border-b-2" : "text-white"
            }
        >Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-[#1fc281]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 bg-[#1fc281] shadow rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">Neuro Lab</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <img className="rounded-full w-8 h-8 md:w-10 mr-3 md:h-10" src={user?.photoURL} />
                }

                {
                    user && <p className="text-white text-sm md:text-lg mr-3 font-bold">{user?.displayName}</p>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-outline bg-white">LogOut</button> : <Link to='/login'>
                    <button className="btn btn-outline bg-white">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;