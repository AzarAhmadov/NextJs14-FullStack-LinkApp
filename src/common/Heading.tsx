import { HeadingProps } from '@/types/Types'
import React from 'react'

const Heading: React.FC<HeadingProps> = ({ title, icon }) => {
    return (
        <h4 className='text-white text-[24px] text-center mt-10 flex justify-center border-slate-600 border-b-[1px] pb-2'>
            {title} {icon}
        </h4>
    )
}

export default Heading