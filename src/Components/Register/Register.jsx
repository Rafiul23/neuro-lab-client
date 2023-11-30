import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =
    `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser, setUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()



    const districts = ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi", "Netrokona", "Rajbari", "Shariatpur", "Sherpur", "Tangail", "Bogura", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajgonj", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon", "Barguna", "Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur", "Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati", "Habiganj", "Maulvibazar", "Sunamganj", "Sylhet", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"
    ];

    const upazilas = ["Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali", "Muladi", "Babuganj", "Agailjhara", "Barisal Sadar", "Bakerganj", "Banaripara", "Gaurnadi", "Hizla", "Mehendiganj", "Wazirpur", "Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin", "Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur", "Bauphal", "Dashmina", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Dumki", "Rangabali", "Bhandaria", "Kaukhali", "Mathbaria", "Nazirpur", "Nesarabad", "Pirojpur Sadar", "Zianagar", "Bandarban Sadar", "Thanchi", "Lama", "Naikhongchhari", "Ali kadam", "Rowangchhari", "Ruma", "Brahmanbaria Sadar", "Ashuganj", "Nasirnagar", "Nabinagar", "Sarail", "Shahbazpur Town", "Kasba", "Akhaura", "Bancharampur", "Bijoynagar", "Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab Uttar", "Matlab Dakkhin", "Shahrasti", "Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda", "Barura", "Brahmanpara", "Burichong", "Chandina", "Chauddagram", "Daudkandi", "Debidwar", "Homna", "Comilla Sadar", "Laksam", "Monohorgonj", "Meghna", "Muradnagar", "Nangalkot", "Comilla Sadar South", "Titas", "Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali", "Ramu", "Teknaf", "Ukhia", "Pekua", "Feni Sadar", "Chagalnaiya", "Daganbhyan", "Parshuram", "Fhulgazi", "Sonagazi", "Dighinala", "Khagrachhari", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari", "Ramgarh", "Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Komol Nagar", "Noakhali Sadar", "Begumganj", "Chatkhil", "Companyganj", "Shenbag", "Hatia", "Kobirhat", "Sonaimuri", "Suborno Char", "Rangamati Sadar", "Belaichhari", "Bagaichhari", "Barkal", "Juraichhari", "Rajasthali", "Kaptai", "Langadu", "Nannerchar", "Kaukhali", "Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar", "Faridpur Sadar", "Boalmari", "Alfadanga", "Madhukhali", "Bhanga", "Nagarkanda", "Charbhadrasan", "Sadarpur", "Shaltha", "Gazipur Sadar-Joydebpur", "Kaliakior", "Kapasia", "Sripur", "Kaliganj", "Tongi", "Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara", "Dewanganj", "Baksiganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandaha", "Sarishabari", "Narundi Police I.C", "Astagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail", "Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar", "Manikganj Sadar", "Singair", "Shibalaya", "Saturia", "Harirampur", "Ghior", "Daulatpur", "Lohajang", "Sreenagar", "Munshiganj Sadar", "Sirajdikhan", "Tongibari", "Gazaria", "Bhaluka", "Trishal", "Haluaghat", "Muktagachha", "Dhobaura", "Fulbaria", "Gaffargaon", "Gauripur", "Ishwarganj", "Mymensingh Sadar", "Nandail", "Phulpur", "Araihazar", "Sonargaon", "Bandar", "Naryanganj Sadar", "Rupganj", "Siddirgonj", "Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura, Narsingdi", "Shibpur", "Kendua Upazilla", "Atpara Upazilla", "Barhatta Upazilla", "Durgapur Upazilla", "Kalmakanda Upazilla", "Madan Upazilla", "Mohanganj Upazilla", "Netrakona-S Upazilla", "Purbadhala Upazilla", "Khaliajuri Upazilla", "Baliakandi", "Goalandaghat", "Pangsha", "Kalukhali", "Rajbari Sadar", "Shariatpur Sadar -Palong", "Damudya", "Naria", "Jajira", "Bhedarganj", "Gosairhat", "Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi", "Tangail Sadar", "Sakhipur", "Basail", "Madhupur", "Ghatail", "Kalihati", "Nagarpur", "Mirzapur", "Gopalpur", "Delduar", "Bhuapur", "Dhanbari", "Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola", "Damurhuda", "Chuadanga-S", "Jibannagar", "Alamdanga", "Abhaynagar", "Keshabpur", "Bagherpara", "Jessore Sadar", "Chaugachha", "Manirampur", "Jhikargachha", "Sharsha", "Jhenaidah Sadar", "Maheshpur", "Kaliganj", "Kotchandpur", "Shailkupa", "Harinakunda", "Terokhada", "Batiaghata", "Dacope", "Dumuria", "Dighalia", "Koyra", "Paikgachha", "Phultala", "Rupsa", "Kushtia Sadar", "Kumarkhali", "Daulatpur", "Mirpur", "Bheramara", "Khoksa", "Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur", "angni", "Mujib Nagar", "Meherpur-S", "Narail-S Upazilla", "Lohagara Upazilla", "Kalia Upazilla", "Satkhira Sadar", "Assasuni", "Debhata", "Tala", "Kalaroa", "Kaliganj", "Shyamnagar", "Adamdighi", "Bogra Sadar", "Sherpur", "Dhunat", "Dhupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sahajanpur", "Sariakandi", "Shibganj", "Sonatala", "Joypurhat S", "Akkelpur", "Kalai", "Khetlal", "Panchbibi", "Naogaon Sadar", "Mohadevpur", "Manda", "Niamatpur", "Atrai", "Raninagar", "Patnitala", "Dhamoirhat", "Sapahar", "Porsha", "Badalgachhi", "Natore Sadar", "Baraigram", "Bagatipara", "Lalpur", "Natore Sadar", "Baraigram", "Bholahat", "Gomastapur", "Nachole", "Nawabganj Sadar", "Shibganj", "Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar", "Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore", "Sirajganj Sadar", "Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Tarash", "Ullahpara", "Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Phulbari", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Dinajpur Sadar", "Nawabganj", "Parbatipur", "Fulchhari", "Gaibandha sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj", "Kurigram Sadar", "Nageshwari", "Bhurungamari", "Phulbari", "Rajarhat", "Ulipur", "Chilmari", "Rowmari", "Char Rajibpur", "Lalmanirhat Sadar", "Aditmari", "Kaliganj", "Hatibandha", "Patgram", "Nilphamari Sadar", "Saidpur", "Jaldhaka", "Kishoreganj", "Domar", "Dimla", "Panchagarh Sadar", "Debiganj", "Boda", "Atwari", "Tetulia", "Badarganj", "Mithapukur", "Gangachara", "Kaunia", "Rangpur Sadar", "Pirgachha", "Pirganj", "Taraganj", "Thakurgaon Sadar", "Pirganj", "Baliadangi", "Haripur", "Ranisankail", "Ajmiriganj", "Baniachang", "Bahubal", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj", "Shaistagonj", "Moulvibazar Sadar", "Barlekha", "Juri", "Kamalganj", "Kulaura", "Rajnagar", "Sreemangal", "Bishwamvarpur", "Chhatak", "Derai", "Dharampasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sulla", "Sunamganj Sadar", "Shanthiganj", "Tahirpur", "Sylhet Sadar", "Beanibazar", "Bishwanath", "Dakshin Surma", "Balaganj", "Companiganj", "Fenchuganj", "Golapganj", "Gowainghat", "Jointapur", "Kanaighat", "Zakiganj", "Nobigonj", "Eidgaon", "Modhyanagar", "Dasar"
    ]



    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
           
            createUser(data.email, data.password)
            .then(result =>{
                const loggedUser = result.user;
                setUser(loggedUser);
                updateProfile(loggedUser, {
                    displayName: data.name,
                    photoURL: res.data.data.display_url
                })
                .then(()=>{
                    console.log('Profile updated');
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(error =>{
                console.log(error);
            })


            const userInfo = {
                name: data.name,
                image: res.data.data.display_url,
                bloodGroup: data.bloodGroup,
                district: data.district,
                upazila: data.upazila,
                email: data.email,
                password: data.password,
                status: 'active'
            }

            axiosPublic.post('/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

            navigate('/dashboard');

        }

    }



    return (
        <>
            <Helmet>
                <title>Neuro Lab | Register</title>
            </Helmet>
            <div className="min-h-[600px] bg-base-200">
                <div className="flex justify-between items-center flex-col  py-20">
                    <div className="text-center w-full">
                        <h1 className="text-5xl font-bold text-[#1fc281]">Register now!</h1>
                        <p className="py-6 text-3xl">To get our services, you have to register first</p>
                    </div>
                    <div className="card  w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register('name', { required: true })} className="input input-bordered" required />
                                {errors.name && <span className="text-red-600 mt-2">Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input {...register('image', { required: true })} type="file" placeholder="Your Image" required />
                                {errors.image && <span className="text-red-600 mt-2">Image is required</span>}
                            </div>

                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select {...register('bloodGroup', { required: true })} defaultValue='default' className="select select-accent w-full max-w-xs">
                                    <option disabled value='default'>Select Your Blood Group</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>
                                {errors.bloodGroup && <span className="text-red-600 mt-2">Blood group is required</span>}

                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Your District</span>
                                </label>
                                <select {...register('district', { required: true })} defaultValue='default' className="select select-accent w-full max-w-xs">
                                    <option disabled value='default'>Select Your District</option>
                                    {
                                        districts.map(district => <option value={district}>{district}</option>)
                                    }
                                </select>
                                {errors.district && <span className="text-red-600 mt-2">District is required</span>}

                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Your Upazila</span>
                                </label>
                                <select {...register('upazila', { required: true })} defaultValue='default' className="select select-accent w-full max-w-xs">
                                    <option disabled value='default'>Select Your Upazila</option>
                                    {
                                        upazilas.map(upazila => <option value={upazila}>{upazila}</option>)
                                    }
                                </select>
                                {errors.upazila && <span className="text-red-600 mt-2">Upazila is required</span>}

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: true })} name="email" type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600 mt-2">Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                                })} type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-600 mt-2">Password is required</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600 mt-2">Password should have at least a capital letter, 1 number and 1 special character</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2">Password must be at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2">Password should not be greater than 20 characters</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmpass' placeholder="confirm password" className="input input-bordered" required />
                                

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn bg-[#1fc281] text-white" />

                            </div>
                            <p>Already have an account? Please! <Link to='/login' className='text-[#1fc281] font-bold'>Login</Link></p>
                            <SocialLogin></SocialLogin>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;