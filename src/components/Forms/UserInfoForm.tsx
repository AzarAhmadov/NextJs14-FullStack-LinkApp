'use client'

import React, { useState, ChangeEvent } from 'react';
import { MdOutlineSave } from 'react-icons/md';
import SaveButton from './SaveButton';

const UserInfoForm: React.FC = () => {
    const [charsLeft, setCharsLeft] = useState<number>(35);

    const handleWordCount = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const charCount: number = event.target.value.length;
        const maxChar: number = 35;
        const charLength: number = maxChar - charCount;
        setCharsLeft(charLength);
    }

    return (
        <form action="" className='flex flex-col mt-[65px] relative'>
            <label className='text-white text-[19px] mb-3' htmlFor="Name"> Name </label>
            <input className='text-black p-2 outline-none rounded-lg placeholder:text-black' type="text" id='Name' placeholder='Name' />
            <label className='text-white text-[19px] mb-3 mt-4' htmlFor="bio"> Bio </label>
            <textarea
                maxLength={35}
                onChange={handleWordCount}
                className='text-black outline-none p-2 rounded-lg h-[70px] resize-none placeholder:text-black' name="bio" id="bio" placeholder='Bio' />
            <span className='text-white mt-4 ms-auto'>Left : {charsLeft}</span>
            
            <SaveButton title='save' icon={<MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' />} />
        </form>
    )
}

export default UserInfoForm;
