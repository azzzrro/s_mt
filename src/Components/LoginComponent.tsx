import './style.css'
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const passwodVisiblity = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate()

    return (
        <>
            <div className='w-full flex justify-center'>
                <form className='w-[80%] sm:w-[60%] h-[350px] login-form px-4 sm:px-8 py-6 flex flex-col justify-between'>
                    <div className='w-full h-[52%] flex flex-col gap-4'>
                        <input placeholder='Email' className='w-full h-1/2 px-5 outline-none bg-[#414141]' type="text" />
                        <div className="relative w-full h-1/2">
                            <input
                                placeholder="Password"
                                className="w-full h-full px-5 outline-none bg-[#414141]"
                                type={showPassword ? "text" : "password"}
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-white opacity-20 text-3xl"
                                onClick={passwodVisiblity}
                            >
                                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[38%] flex flex-col justify-between'>
                        <button onClick={() => navigate('/dashboard')} className='w-full h-[60%] bg-[#121212] text-white text-xl font-semibold'>Login</button>
                        <div className='text-center h-[30%]  flex justify-center items-end text-[10px] md:text-[10px] lg:text-[10px] font-ligh text-white'>
                            <p className='lg:max-w-[80%] xl:max-w-[70%] sm:max-w-[60%] max-w-[80%]'>By continuing. you agree to (name)’s Terms of
                                service and Privacy policy</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

const LoginComponent = () => {

    return (
        <>
            <div className='login-main h-fit lg:h-screen'>
                <div className='container mx-auto px-10 md:px-20 h-[10vh] w-full text-white flex justify-between items-center'>
                    <div>
                        <h1 className='text-lg'>Logo</h1>
                    </div>
                    <div className='text-xl cursor-pointer'>
                        <MdOutlineLightMode />
                    </div>
                </div>
                <div className='lg:h-[90vh] h-fit lg:flex py-20 lg:py-0'>
                    <div className='lg:w-1/2 h-full'>
                        <div className='h-full items-center flex justify-center'>
                            <div className='login-laptop md:w-[85%] lg:w-[45%] w-[90%]'>
                                <img src="https://res.cloudinary.com/dxz1rikvk/image/upload/v1704177797/vbfgmvo0wfmdxxqfmwa0.png" alt="" />
                            </div>
                            <div className='w-[70%]'>
                                <img src="https://res.cloudinary.com/dxz1rikvk/image/upload/v1704177795/gsw7qzzdfaqavtkexrsn.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-32 lg:mt-0 lg:w-1/2 h-full flex flex-col gap-10 justify-center items-center'>
                        <div className='w-[74%]  relative bottom-10'>
                            <h1 className='w-auto text-wrap text-center text-[13px] md:text-lg  sm:leading-[15px] text-white'>"Welcome to the future of restaurant reporting! We're serving up a fresh approach to streamline your restaurant management, making data deliciously easy to digest."
                            </h1>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent