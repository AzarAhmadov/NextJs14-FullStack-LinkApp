import React from 'react'
import { Linkdata } from '@/types/Types'

interface linksProps {
    el: Linkdata
}

const UserLinks: React.FC<linksProps> = ({ el }) => {
    return (
        <a className='flex backdrop-blur-sm bg-white/20  font-medium  leading-[55px] h-[60px] ps-4 pe-2 w-[355px] rounded-[30px] text-[#fff] border-[1px]  justify-between  transition-all hover:scale-110' href={el.url} target='_blank'>
            {el.title}
            <span className='bg-[#dbdbdb] filter-2 mt-[6px] rounded-[40px] w-[45px] h-[45px] grid place-items-center'>
                {el.icon}
            </span>
        </a>
    )
}

export default UserLinks
