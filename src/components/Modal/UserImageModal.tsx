import React from 'react'
import SaveButton from '../Forms/SaveButton'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ModalProps } from '@/components/UserProfile/userPhoto/UserPhoto';

const UserImageModal: React.FC<ModalProps> = ({ showModal, name, placeHolder, action }) => {

    return (
        <section className='fixed z-30 w-full h-screen top-0 left-0 grid place-items-center bg-[#0b0b0b5d]'>
            <div className='w-[360px] relative grid place-items-center backdrop-blur-sm bg-white/20  p-5 pt-7 pb-7 rounded-lg'>
                <form className='w-full flex flex-col' action={action}>
                    <input
                        className='mt-3 bg-inherit outline-none w-full p-2 mb-3 text-white placeholder:text-white placeholder:text-[18px] text-[18px] border-b-2 text-center border-b-zinc-400 hover:border-b-zinc-200 transition-all'
                        type="text"
                        name={name}
                        required
                        placeholder={placeHolder}
                    />
                    <SaveButton />
                </form>

                <div onClick={showModal} className="close absolute cursor-pointer top-3 right-3">
                    <IoCloseCircleOutline color='#fff' className='w-10 h-10' />
                </div>
            </div>
        </section>
    )
}

export default UserImageModal
