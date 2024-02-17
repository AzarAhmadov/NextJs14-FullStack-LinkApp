import React from 'react'
import SaveButton from '../Forms/SaveButton'
import Image from 'next/image'
import { IoCloseCircleOutline } from "react-icons/io5";
import { SosialType } from '@/types/Types';
import { addSosial } from '@/lib/action/action';

type ModalProps = {
    modal: () => void;
    CurrentData: SosialType;
}

const Modal: React.FC<ModalProps> = ({ modal, CurrentData }) => {

    return (
        <section className='fixed z-30 w-full h-screen top-0 left-0 grid place-items-center bg-[#0b0b0b5d] '>
            <div className='w-[360px] relative grid place-items-center  backdrop-blur-sm bg-white/20  p-5 rounded-lg'>

                <Image width={90} height={90} src={CurrentData?.logo} alt={CurrentData?.title} />

                <form className='w-full flex flex-col' action={addSosial}>
                    <input
                        className='mt-2 placeholder:text-white placeholder:text-[20px] text-center bg-inherit outline-none w-full text-white text-[22px]'
                        type="text"
                        value={CurrentData?.title}
                        name='name'
                    />
                    <input
                        className='mt-3 bg-inherit outline-none w-full p-2 mb-3 text-white placeholder:text-white placeholder:text-[18px] text-[18px] border-b-2 text-center border-b-zinc-400 hover:border-b-zinc-200 transition-all'
                        type="text"
                        placeholder='Add the name of the link'
                        name='title'
                        required
                    />
                    <input
                        className='mt-3 bg-inherit outline-none w-full p-2 mb-3 text-white placeholder:text-white placeholder:text-[18px] text-[18px] border-b-2 text-center border-b-zinc-400 hover:border-b-zinc-200 transition-all'
                        type="text"
                        name='link'
                        required
                        placeholder='Add your link'
                    />
                    <SaveButton />
                </form>

                <div onClick={modal} className="close absolute cursor-pointer top-3 right-3">
                    <IoCloseCircleOutline color='#fff' className='w-10 h-10' />
                </div>
            </div>
        </section>
    )
}

export default Modal
