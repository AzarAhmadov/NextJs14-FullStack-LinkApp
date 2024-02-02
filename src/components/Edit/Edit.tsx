import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

const Edit = () => {
    return (
        <section className='min-h-lvh bg-slate-800 pt-3'>
            <div className='container '>
                <div className='bg-cover rounded-md relative bg-no-repeat h-[200px] bg-center bg-[url(https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]'>
                    <div className='absolute left-0 right-0 -bottom-[120px] grid place-items-center h-[250px]'>
                        <div className='relative'>
                            <img className='inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white' src="https://azarahmadov.com/_next/image?url=%2Fabout.jpeg&w=1080&q=75" alt="" />
                            <div className='absolute right-0 cursor-pointer bottom-0 w-10 h-10 bg-white rounded-[30px] grid place-items-center'>
                                <FaCloudUploadAlt className='w-6 h-6' />
                            </div>
                        </div>
                    </div>

                    <div className='grid place-items-center h-[180px] '>
                        <button className='flex z-10 cursor-pointer   text-[#000] bg-white p-2 rounded-lg'> Change image  <FaCloudUploadAlt className='w-6 h-6 ms-2' /> </button>
                    </div>
                </div>
                <form action="">
                    <label htmlFor="name"> Name </label>
                    <input type="text" id='name' placeholder='Name' />
                    <label htmlFor="bio"> Bio </label>
                    <textarea name="bio" id="bio" placeholder='bio'></textarea>
                </form>
            </div>
        </section>
    )
}

export default Edit
