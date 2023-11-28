import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from './../../../Hooks/useAuth';



const AdminHome = () => {

    const [admin, setAdmin] = useState(null);
    const { user } = useAuth();

    const email = user.email;
    const axiosSecure = useAxiosSecure();

    axiosSecure.get(`/users/${email}`)
        .then(res => setAdmin(res.data));

    
    return (
        <div>
            <div className='flex justify-between p-4 items-center'>
                <h2 className='text-3xl font-bold '>Name: {admin?.name}</h2>
                <img src={admin?.image} className='h-[100px] w-[100px] rounded-full' alt="" />
            </div>
            <div className='p-4 border rounded-lg'>
                <p>District: {admin?.district}</p>
                <p>Upazila: {admin?.upazila}</p>
                <p>Blood Group: {admin?.bloodGroup}</p>
                <p>Email: {admin?.email}</p>
                <p>Status: {admin?.status}</p>
                <p>Role: {admin?.role}</p>

            </div>
        </div>
    );
};

export default AdminHome;