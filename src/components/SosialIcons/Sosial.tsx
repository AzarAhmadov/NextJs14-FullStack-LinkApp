import { SocialMediaIcon } from '@/types/Types'
import React from 'react'

interface sosialProps {
    el: SocialMediaIcon
}

const Sosial: React.FC<sosialProps> = ({ el }) => {
    return (
        <li className='flex'>
            <a target='_blank' className='p-3 rounded-md shadow-lg transition-all hover:scale-110' href={el.link}>{el.icon} </a>
        </li>
    )
}

export default Sosial
