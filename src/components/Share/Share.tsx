import React from 'react'
import { IoShareOutline } from "react-icons/io5";

const Share = () => {
    return (
        <section className='flex align-middle justify-center pt-7 pb-2'>
            <button className='text-[21px] text-[#fff] flex align-middle justify-center'>Share your profile</button>  <IoShareOutline color='#fff' className='ms-2 w-7 h-7' />
        </section>
    )
}

export default Share
