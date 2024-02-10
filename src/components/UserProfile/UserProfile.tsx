import React, { useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'
import UserPhoto from '@/components/UserProfile/userPhoto/UserPhoto'
import UserImageModal from '../Modal/UserImageModal'
import UserBack from './userBackPhoto/UserBack'
import { addBackProfile, updateBackProfile, updateProfile } from '@/lib/action/action'

const UserProfile: React.FC = () => {

    const [photoModal, setPhotoModal] = useState(false);
    const [backModal, setBackModal] = useState(false);

    const showPhotoModal = () => {
        setPhotoModal(prevState => !prevState);
    };

    const showBackModal = () => {
        setBackModal(prevState => !prevState);
    };

    return (
        <div className='relative'>
            <UserBack />
            {backModal && <UserImageModal showModal={showBackModal} action={addBackProfile} name='back_url' placeHolder='Add a background url' />}
            <div className='grid absolute top-0 w-full place-items-center h-[210px] '>
                <button onClick={showBackModal} className='flex z-10 cursor-pointer text-[#000] bg-white p-3 rounded-lg hover:scale-105'> Change background image <TbPhotoPlus className='w-5 h-5 mt-[3px] ms-2' />  </button>
            </div>
            <div className='absolute left-0 right-0 -bottom-[120px] grid place-items-center h-[250px]'>
                <div className='relative'>
                    <UserPhoto showModal={showPhotoModal} />
                    {photoModal && <UserImageModal showModal={showPhotoModal} action={updateProfile} name='url' placeHolder='Add a profile url' />}
                </div>
            </div>
        </div>
    )
}

export default UserProfile
