import React from 'react'
import { getProfileUrl } from '@/lib/data/Data';
import { TbPhotoCirclePlus } from 'react-icons/tb';

export type ModalProps = {
    showModal: () => void;
    name?: string;
    placeHolder?: string;
    action?: any;
}

const UserPhoto: React.FC<ModalProps> = async ({ showModal }) => {

    const getUrlByProfile = await getProfileUrl()

    return (
        <div onClick={showModal}>
            <img
                className='inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white'
                src={getUrlByProfile ? getUrlByProfile[0]?.url : '/user.png'}
                alt='User Profile'
            />
            <div className='absolute right-0 cursor-pointer bottom-0 w-8 h-8 bg-white rounded-[30px] grid place-items-center'>
                <TbPhotoCirclePlus className='w-6 h-6 hover:scale-105' />
            </div>
        </div>
    )
}

export default UserPhoto
