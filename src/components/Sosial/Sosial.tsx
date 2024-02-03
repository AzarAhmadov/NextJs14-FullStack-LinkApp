import { SosialType } from '@/types/Types'
import Image from 'next/image'
import React from 'react'

interface SosialProps {
    el: SosialType
}

const Sosial: React.FC<SosialProps> = ({ el }) => {
    return (
        <div className='relative w-[63px] h-[63px]'>
            <Image className=' object-contain' src={el.logo} fill alt={el.title} />
        </div>
    )
}

export default Sosial
