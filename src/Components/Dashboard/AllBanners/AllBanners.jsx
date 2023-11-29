
import { useState } from 'react';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';

const AllBanners = () => {

    const [banners, setBanners] = useState([]);
    const axiosSecure = useAxiosSecure();

    axiosSecure.get('/banners')
        .then(res => {
            setBanners(res.data);
        })



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Coupon</th>
                            <th>Discount Rate</th>
                            <th>Active</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                         banners.map((banner, idx)=><tr key={banner._id}>
                         <td>{idx + 1}</td>
                         <td>
                             <div className="flex items-center gap-3">
                                 <div className="avatar">
                                     <div className="mask mask-squircle w-12 h-12">
                                         <img src={banner.image} alt="Avatar Tailwind CSS Component" />
                                     </div>
                                 </div>
                                 <div>
                                     <div className="font-bold">{banner.name}</div>
                                     
                                 </div>
                             </div>
                         </td>
                         <td>
                            {banner.coupon} 
                         </td>
                         <td>{banner.discountRate}</td>
                         <td>{banner.isActive}</td>
                         <td>
                            <button className='btn'>Make Banner</button>
                         </td>
                         <th>
                             <button className="btn bg-red-500 text-white btn-xs">Delete</button>
                         </th>
                     </tr>)
                       } 
                       
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default AllBanners;