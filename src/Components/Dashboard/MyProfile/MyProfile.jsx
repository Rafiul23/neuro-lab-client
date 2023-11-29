import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const MyProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { user } = useAuth();

    const email = user.email;
    const axiosSecure = useAxiosSecure();

    axiosSecure.get(`/users/${email}`)
        .then(res => setUserInfo(res.data));

    return (
        <div>
           <div className='flex justify-between p-4 items-center'>
                <h2 className='text-3xl font-bold '>Name: {userInfo?.name}</h2>
                <img src={userInfo?.image} className='h-[100px] w-[100px] rounded-full' alt="" />
            </div>
            <div className='p-4 border rounded-lg'>
                <p>District: {userInfo?.district}</p>
                <p>Upazila: {userInfo?.upazila}</p>
                <p>Blood Group: {userInfo?.bloodGroup}</p>
                <p>Email: {userInfo?.email}</p>
                <p>Status: {userInfo?.status}</p>
               

            </div> 
        </div>
    );
};

export default MyProfile;