import React from 'react'
import { LinksData, socialMediaData } from '@/constants/Constants';
import { FaUserEdit } from "react-icons/fa";
import Sosial from '../SosialIcons/Sosial';
import UserLinks from '../UserLinks/UserLinks';
import Share from '../Share/Share';
import Link from 'next/link';

const Show = () => {
    return (
        <>
            <section className='min-h-lvh relative flex flex-col justify-center tablet:pb-4 bg-cover bg-no-repeat  bg-center bg-[url(https://images.pexels.com/photos/1743375/pexels-photo-1743375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]' >
                <div className='laptop:w-auto flex flex-col tablet:w-[100%]'>
                    <div className='flex flex-col mt-[50px]'>
                        <div className='m-auto'>
                            <img className="inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white" src="https://azarahmadov.com/_next/image?url=%2Fabout.jpeg&w=1080&q=75" alt="user photo" />
                        </div>
                        <div className="absolute left-4 top-4">
                            <Link className='flex backdrop-contrast-125 bg-white/15 ps-4 pe-4 pt-2 pb-2 rounded-[30px] text-white text-[20px]' href='/Edit'> Edit <FaUserEdit className='ms-2 h-6 w-6' /> </Link>
                        </div>
                    </div>
                    <div className="user-info text-white text-center pt-[15px] tablet:ps-2 tablet:pe-2">
                        <h4 className='text-[27px] font-medium'> Azar Ahmadov </h4>
                        <p className='text-[17px] mt-2 font-think m-auto laptop:w-[500px] tablet:w-[100%]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sunt. Lorem ipsum dolor sit. Lorem, ipsum dolor. </p>
                    </div>
                    <ul className="sosial flex flex-wrap justify-center ps-3 pe-3 pt-3 ">
                        {
                            socialMediaData.map((el, idx) => (
                                <Sosial el={el} key={idx} />
                            ))
                        }
                    </ul>
                    <ul className="sosial m-auto pt-5 grid place-items-center gap-4">
                        {
                            LinksData.map((el, idx) => (
                                <UserLinks el={el} key={idx} />
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <Share />
                </div>
            </section>
        </>
    )
}

export default Show
