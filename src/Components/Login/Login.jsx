import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.png';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex flex-col py-20 lg:flex-row-reverse">
                <div className="text-center lg:w-1/2">
                    
                   <img src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 max-w-md mx-auto shadow-2xl bg-base-100">
                    <form className="card-body">
                    <h1 className="text-5xl text-center my-4 text-[#1fc281] font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#1fc281] text-white">Login</button>
                        </div>
                        <p className='py-4'>New to our website? Please! <Link to='/register' className='text-[#1fc281] font-bold'>Register</Link></p>

                        <SocialLogin></SocialLogin>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;