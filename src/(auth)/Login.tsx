import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <section className='h-screen  flex justify-center items-center bg-[#F4F4F4]'>
            <div className="container mx-auto">
                <div className="row grid desktop:grid-cols-2 gap-5 place-items-center ">
                    <div className='flex align-middle justify-center'>
                        <img src="/login.png" className='w-full h-full tablet:w-[270px] laptop:w-[400px] desktop:w-[550px] tablet:mb-3 object-contain' alt="Login" />
                    </div>
                    <div className='bg-[#fff] w-full rounded-xl p-20 tablet:p-10  flex flex-col justify-center align-middle'>
                        <h1 className='text-[30px] tablet:text-[22px] text-center mb-5'>
                            Welcome to
                            <br />
                            <span className='text-[#6358DC] tablet:text-[30px] font-bold text-[37px]'>
                                Link app
                            </span>
                        </h1>
                        <div className='flex flex-col gap-6'>
                            <button className=' p-5 flex justify-center align-middle text-[18px] transition-all hover:text-[#fff] rounded-lg bg-[rgb(255,255,255)] shadow-md  hover:bg-violet-500'>
                                <FaGithub className=' me-3 w-7 h-7' />
                                Login with Github
                            </button>
                            <button className=' p-5 flex justify-center align-middle text-[18px] transition-all hover:text-[#fff] rounded-lg bg-[rgb(255,255,255)] shadow-md  hover:bg-violet-500'>
                                <FcGoogle className='me-3 w-7 h-7' />
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
