import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = user => {
        axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

    const handleActiveUser = user =>{
        axiosSecure.put(`users/active/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is active now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }


    const handleBlockUser = user =>{
        axiosSecure.put(`users/block/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is blocked now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl text-center text-[#1fc281] font-bold">All Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) =>
                                <tr key={user._id} >
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        { user.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn bg-[#1fc281] btn-lg">
                                            <FaUser className="text-white text-2xl"></FaUser>
                                        </button>}
                                    </td>
                                    <td>{user.status}</td>
                                    <td>
                                        {
                                            user.status === 'active' ? <button
                                            onClick={()=> handleBlockUser(user)}
                                             className="btn bg-red-500 btn-sm text-white">Block User</button> : <button onClick={()=>handleActiveUser(user)} className="btn bg-green-500 btn-sm text-white">Active User</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;