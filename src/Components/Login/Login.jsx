import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from 'react-simple-captcha';

const Login = () => {

    const {signIn, setUser} = useAuth();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User login successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
               
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.log(error))
    }

    return (
        <>
        <Helmet>
            <title>Neuro Lab | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="flex flex-col py-20 lg:flex-row-reverse">
                <div className="text-center lg:w-1/2">
                    
                   <img src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 max-w-md mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl text-center my-4 text-[#1fc281] font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                                <label className='label'>
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="type captcha" name="captcha" className="input input-bordered" required />

                            </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn bg-[#1fc281] text-white">Login</button>
                        </div>
                       
                        <p className='py-4'>New to our website? Please! <Link to='/register' className='text-[#1fc281] font-bold'>Register</Link></p>

                        <SocialLogin></SocialLogin>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;