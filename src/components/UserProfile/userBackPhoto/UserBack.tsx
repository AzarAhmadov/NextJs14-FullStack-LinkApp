import { getProfileBackUrl } from '@/lib/data/Data'
import React from 'react'

const UserBack = async () => {

    const getUrlByProfileBack = await getProfileBackUrl()

    return (
        <div className='w-full mt-4'>
            <img className='w-full h-[220px] object-cover rounded-lg'
                src={getUrlByProfileBack ? getUrlByProfileBack[0]?.back_url :  '/banner.jpeg'}
                alt='User Background'
            />
        </div>
    )
}

export default UserBack
