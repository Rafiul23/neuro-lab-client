import { FaSave } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = 
`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateTest = () => {

    const test = useLoaderData();
    const { _id, image, test_name, slot, test_description, date, price } = test;

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async(data) => {
        
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const updatedtestInfo = {
                test_name: data.name,
                date: data.date,
                slot: data.slot,
                price: parseFloat(data.price),
                test_description: data.description,
                image: res.data.data.display_url
            }

            const testRes = await axiosSecure.put(`/test/${_id}`, updatedtestInfo);
            
            if(testRes.data.modifiedCount > 0){
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is updated`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        
    }
    return (
        <div>
             <h2 className="text-3xl my-4 text-center text-[#1fc281] font-bold">Update a Test Data</h2>
             <div className="bg-[#85d8b5] p-4 rounded-lg ">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex gap-6">
                    <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Name of the Test</span>

                        </label>
                        <input defaultValue={test_name} type="text" placeholder="Name of the test" {...register('name', {required: true})} 
                        required
                        className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Available Date</span>

                        </label>
                        <input defaultValue={date} type="date" placeholder="Available date" {...register('date', {required: true})} 
                        required
                        className="input input-bordered w-full " />

                    </div>
                    </div>

                    <div className="flex gap-6">
                        
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Available Slot</span>

                            </label>
                            <input type="number" defaultValue={slot} placeholder="Available Slot" {...register('slot', {required: true})} required className="input input-bordered w-full " />
                           
                        </div>
                
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input type="number" defaultValue={price} placeholder="Price" {...register('price', {required: true})} required className="input input-bordered w-full " />

                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Test Description</span>
                            
                        </label>
                        <textarea defaultValue={test_description} {...register('description', {required: true})} required className="textarea textarea-bordered h-24" placeholder="Test Description"></textarea>
                        
                    </div>

                    <div className="form-control w-full my-6">
                    <input {...register('image', {required: true})} required type="file" className="file-input my-4 w-full max-w-xs" /> 
                    </div>

                   <div className="text-center">
                   <button className="btn bg-[#1fc281] text-white">
                        <FaSave></FaSave>
                        Update a Test Data
                    </button>
                   </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateTest;