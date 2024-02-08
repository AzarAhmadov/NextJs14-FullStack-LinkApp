import React, { useState, ChangeEvent, useEffect } from 'react';
import { MdOutlineSave } from 'react-icons/md';
import SaveButton from './SaveButton';
import { updateBio } from '@/lib/action/action';

const UserInfoForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        bio: ''
    });

    useEffect(() => {
        const storedName = localStorage.getItem('name') || '';
        const storedBio = localStorage.getItem('bio') || '';
        setFormData({ name: storedName, bio: storedBio });
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem(name, value);
    };

    return (
        <form action={updateBio} className='flex flex-col mt-[65px] relative'>

            <label className='text-white text-[19px] mb-3' htmlFor="Name"> Name </label>
            <input
                className='text-black p-2 outline-none rounded-lg placeholder:text-black'
                type="text"
                id='Name'
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
            />

            <label className='text-white text-[19px] mb-3 mt-4' htmlFor="bio"> Bio </label>
            <textarea
                maxLength={50}
                onChange={handleChange}
                className='text-black mb-6 outline-none p-2 rounded-lg h-[70px] resize-none placeholder:text-black'
                name="bio"
                id="bio"
                placeholder='Bio'
                value={formData.bio}
            />

            <span className='text-white absolute bottom-2 right-2 mb-11'>{formData?.bio?.length}/{50}</span>

            <SaveButton title='save' icon={<MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' />} />
        </form>
    )
}

export default UserInfoForm;
