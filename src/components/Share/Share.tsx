import React from 'react'
import { IoShareOutline } from "react-icons/io5";

const Share: React.FC = () => {
    return (
        <button className='bg-[#fff] absolute top-4 right-4 rounded-[30px] grid place-items-center w-11 h-11 text-[#fff]'>
            <IoShareOutline color='#000' className='w-7 h-7' />
        </button>
    )
}

export default Share
