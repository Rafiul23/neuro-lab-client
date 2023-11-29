import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =
    `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddBanner = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async(data) => {
        const imageFile = { image: data.image[0] };
        
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const bannerInfo = {
                name: data.name,
                image: res.data.data.display_url,
                title: data.title,
                coupon: data.coupon,
                discountRate: data.discountRate,
                isActive: data.isActive,
                description: data.description
            };

            const bannerRes = await axiosSecure.post('/banners', bannerInfo)
            if(bannerRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added in banner list`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div>
            <h2 className="text-3xl my-4 text-center text-[#1fc281] font-bold">Add Banner</h2>

            <div className="bg-[#85d8b5] p-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="Name " {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Image</span>

                            </label>
                            <input {...register('image', { required: true })} required type="file" className="file-input w-full" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Title</span>

                            </label>
                            <input type="text" placeholder="Title of banner" {...register('title', { required: true })}
                                required
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Promo Code</span>

                            </label>
                            <input type="text" placeholder="Promo Code" {...register('coupon', { required: true })}
                                required
                                className="input input-bordered w-full " />
                        </div>

                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Coupon Rate</span>

                            </label>
                            <input type="text" placeholder="Discount Rate" {...register('discountRate', { required: true })}
                                required
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Is Active</span>

                            </label>
                            <input type="text" placeholder="Is Active" {...register('isActive', { required: true })}
                                required
                                className="input input-bordered w-full " />
                        </div>


                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Banner Description</span>
                            
                        </label>
                        <textarea {...register('description', {required: true})} required className="textarea textarea-bordered h-24" placeholder="Banner Description"></textarea>
                        
                    </div>
                    <div className="text-center my-6">
                   <button className="btn bg-[#1fc281] text-white">
                        <FaPlus></FaPlus>
                        Add a Test 
                    </button>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default AddBanner;