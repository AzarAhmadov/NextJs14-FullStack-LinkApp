import React from 'react';
import SaveButton from './SaveButton';
import { updateBio } from '@/lib/action/action';
import { getBio } from '@/lib/data/Data';

const UserInfoForm: React.FC = async () => {

    const Bio = await getBio()

    return (
        <form action={updateBio} className='flex flex-col mt-[65px] relative'>
            <label className='text-white text-[19px] mb-3' htmlFor="Name"> Name </label>
            <input
                className='text-black p-2 outline-none rounded-lg placeholder:text-black'
                type="text"
                required
                value={Bio && Bio[0]?.name}
                placeholder='Name'
                name='name'
            />
            <label className='text-white text-[19px] mb-3 mt-4' htmlFor="bio"> Bio </label>
            <input
                maxLength={55}
                className='text-black mb-4 outline-none p-2 pb-10 rounded-lg resize-none placeholder:text-black'
                name="bio"
                required
                placeholder='Bio'
                value={Bio && Bio[0]?.bio}
            />
            <SaveButton />
        </form>
    )
}

export default UserInfoForm;
