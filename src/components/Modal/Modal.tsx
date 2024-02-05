import React from 'react'
import SaveButton from '../Forms/SaveButton'
import { FaCloudUploadAlt } from 'react-icons/fa'
import Image from 'next/image'
import { IoCloseCircleOutline } from "react-icons/io5";
import { SosialType } from '@/types/Types';

type Props = {
    modal: () => void;
    CurrentData: SosialType;
}

const Modal: React.FC<Props> = ({ modal, CurrentData }) => {

    return (
        <section className='fixed z-30 w-full h-screen top-0 left-0 grid place-items-center bg-[#0b0b0b5d] '>
            <div className='w-[360px] grid place-items-center  backdrop-blur-sm bg-white/20  p-9 rounded-lg'>
                <Image width={90} height={90} src={CurrentData.logo} alt="" />
                <input className='mt-4 outline-none  w-full p-2 rounded-lg -mb-3 text-black placeholder:text-black' type="text" placeholder='Add a link' />
                <SaveButton title='Save' icon={<FaCloudUploadAlt className='w-6 h-6 ms-2' />} />

                <div onClick={modal} className="close absolute cursor-pointer top-3 right-3">
                    <IoCloseCircleOutline color='#fff' className='w-10 h-10' />
                </div>
            </div>
        </section>
    )
}

export default Modal
