import React from 'react'
import { Linkdata } from '@/types/Types'

interface linksProps {
    el: Linkdata
}

const UserLinks: React.FC<linksProps> = ({ el }) => {
    return (
        <a className='flex align-middle w-[330px] rounded-[30px] border-gray-400 text-white border-2 ps-4 pe-4 pt-3 pb-3 justify-between hover:bg-[rgb(36,51,88)] transition-all hover:scale-110' href={el.url} target='_blank'>
            {el.title}
            <span className='ms-3'>
                {el.icon}
            </span>
        </a>
    )
}

export default UserLinks
