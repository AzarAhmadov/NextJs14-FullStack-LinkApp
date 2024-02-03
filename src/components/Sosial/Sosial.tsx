import { SosialType } from '@/types/Types'
import Image from 'next/image'
import React from 'react'

interface SosialProps {
    el: SosialType
}

const Sosial: React.FC<SosialProps> = ({ el }) => {
    return (
        <div className='relative w-[63px] h-[63px] hover:scale-110 cursor-pointer transition-all'>
            <Image className=' object-contain' src={el.logo} fill alt={el.title} sizes='(width: 63px)' />
        </div>
    )
}

export default Sosial
