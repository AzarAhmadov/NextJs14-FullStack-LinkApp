import React from 'react'
import { LuShare } from "react-icons/lu";

const Share: React.FC = () => {
    return (
        <button className='bg-[#fff] absolute top-4 right-4 rounded-[30px] grid place-items-center w-11 h-11 text-[#fff]'>
            <LuShare color='#000' className='h-auto w-6' />
        </button>
    )
}

export default Share
