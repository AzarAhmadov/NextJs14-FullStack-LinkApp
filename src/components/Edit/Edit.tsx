'use client'

import React from 'react';
import { TbPhotoPlus } from "react-icons/tb";
import { RiAccountBoxLine } from "react-icons/ri";
import { TbPhotoCirclePlus } from "react-icons/tb";
import { SosialImage } from '@/constants/Constants';
import Sosial from '../Sosial/Sosial';
import Heading from '@/common/Heading';
import UserInfoForm from '../Forms/UserInfoForm';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";
import UserProfile from '../UserProfile/UserProfile';

const Edit: React.FC = () => {

    return (
        <section className='min-h-lvh bg-[#1C2833] pt-5 pe-4 ps-4 pb-9'>
            <div className='container'>
                
                <Link href={'/Demo'} className='text-white border-2 border-indigo-100/30 hover:bg-white hover:text-black transition-all w-max p-2 rounded-lg pe-5 ps-5 flex text-[16px] m-auto'> <FaArrowLeft className='h-auto me-2 w-3' />  Go Back </Link>
                
                <UserProfile />

                <UserInfoForm />

                <Heading title={'Sosals'} icon={<RiAccountBoxLine className='w-8 h-8 mt-[2px] ms-2' />} />

                <div className='flex flex-wrap justify-center pt-7 desktop:gap-5 gap-4 gap-y-7'>
                    {
                        SosialImage.map((el, idx: number) => (
                            <Sosial el={el} key={idx} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Edit;