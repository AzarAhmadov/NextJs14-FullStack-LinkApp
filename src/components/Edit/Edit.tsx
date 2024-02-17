'use client'

import React from 'react';
import { RiLinksLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { SosialImage } from '@/constants/Constants';
import Sosial from '../Sosial/Sosial';
import Heading from '@/common/Heading';
import UserInfoForm from '../Forms/UserInfoForm';
import Link from 'next/link';
import UserProfile from '../UserProfile/UserProfile';

const Edit: React.FC = () => {

    return (
        <section className='min-h-scree pt-4 pe-4 ps-4 pb-9  bg-gradient-to-r from-[#08090ce2] to-[#171717]'>
            <div className='container'>

                <Link href={'/AzarAhmadov'} className='text-white border-2 border-indigo-100/30 hover:bg-white hover:text-black transition-all w-max p-2 rounded-lg pe-5 ps-5 flex text-[16px] m-auto'> <FaArrowLeft className='h-auto me-2 w-3' />  Go Back </Link>

                <UserProfile />

                <UserInfoForm />

                <Heading title={'Links'} icon={<RiLinksLine className='w-6 h-auto ms-2' />} />

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

