
import { useState } from 'react';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllBanners = () => {

    
    const axiosSecure = useAxiosSecure();

    const { refetch, data: banners = [] } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const res = await axiosSecure.get('/banners');
            return res.data;
        }
    })

    const handleDeleteBanner = banner => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/banner/${banner._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${banner.name} has been deleted successfully.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
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
                             <button onClick={()=> handleDeleteBanner(banner)} className="btn bg-red-500 text-white btn-xs">Delete</button>
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