
import { SosialType } from '@/types/Types'
import Image from 'next/image'
import Modal from '../Modal/Modal'
import { useState } from 'react'
interface SosialProps {
    el: SosialType
}

const Sosial: React.FC<SosialProps> = ({ el }) => {

    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(prevent => !prevent)
    }

    const CurrentData = (data: SosialType) => {
        return data
    }

    return (
        <>
            <div onClick={showModal} className='relative w-[63px] pt-3 h-[63px] hover:scale-110 cursor-pointer transition-all'>
                <Image onClick={() => CurrentData(el)} className=' object-contain' src={el.logo} fill alt={el.title} sizes='(width: 63px)' />
            </div>

            {modal && <Modal modal={showModal} CurrentData={el} />}
        </>
    )
}

export default Sosial
