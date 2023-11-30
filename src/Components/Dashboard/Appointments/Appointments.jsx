import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Appointments = () => {

    const { user } = useAuth();
    const email = user?.email;
    const axiosSecure = useAxiosSecure();

    const { refetch, data: appointments = [] } = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/appointments/${email}`);
            return res.data;
        }
    })
    
    const handleCancelAppointment = test => {
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

                axiosSecure.delete(`/appointment/${test._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your appointment has been cancelled.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className="text-3xl py-4 font-bold text-center text-[#1fc281]">Your Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Test Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(test => <tr key={test._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={test.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{test.test_name}</div>
                                           
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {test.price}
                                </td>
                                <td>{test.date}</td>
                                <th>
                                    <button onClick={()=> handleCancelAppointment(test)} className="btn bg-red-500 text-white btn-xs">Cancel Apponitments</button>
                                </th>
                            </tr>
                            )

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Appointments;