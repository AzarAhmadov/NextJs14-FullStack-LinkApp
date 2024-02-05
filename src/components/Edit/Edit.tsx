'use client'

import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { SosialImage } from '@/constants/Constants';
import Sosial from '../Sosial/Sosial';
import Heading from '@/common/Heading';
import UserInfoForm from '../Forms/UserInfoForm';
import UserLinksForm from '../Forms/UserLinksForm';
import SaveButton from '../Forms/SaveButton';

const Edit: React.FC = () => {

    return (
        <section className='min-h-lvh bg-slate-800 pt-4 pe-4 ps-4 pb-4'>
            <div className='container'>
                <div className='bg-cover rounded-md relative bg-no-repeat h-[200px] bg-center bg-[url(https://t3.ftcdn.net/jpg/03/18/04/12/360_F_318041250_Xp5dU1JBG0B8N6LtKuFpSA5ejohEPKcm.jpg)]'>
                    <div className='absolute left-0 right-0 -bottom-[120px] grid place-items-center h-[250px]'>
                        <div className='relative'>
                            <img className='inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white' src="https://azarahmadov.com/_next/image?url=%2Fabout.jpeg&w=1080&q=75" alt="" />
                            <div className='absolute right-0 cursor-pointer bottom-0 w-10 h-10 bg-white rounded-[30px] grid place-items-center'>
                                <FaCloudUploadAlt className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                    <div className='grid place-items-center h-[180px] '>
                        <button className='flex z-10 cursor-pointer text-[#000] bg-white p-2 rounded-lg'> Change image  </button>
                    </div>
                </div>

                <UserInfoForm />

                <Heading title={'Sosals'} icon={<RiAccountBoxLine className='w-8 h-8 mt-[2px] ms-2' />} />

                <div className='flex flex-wrap justify-center pt-7 desktop:gap-5 gap-4 gap-y-7'>
                    {
                        SosialImage.map((el, idx: number) => (
                            <Sosial el={el} key={idx} />
                        ))
                    }
                </div>

                <SaveButton title='save' icon={<FaCloudUploadAlt className='w-6 h-6 ms-2' />} />

                <Heading title='Links' icon={<FaExternalLinkSquareAlt className='w-7 h-7 mt-[4px] ms-2' />} />

                <UserLinksForm />
            </div>
        </section>
    )
}

export default Edit;