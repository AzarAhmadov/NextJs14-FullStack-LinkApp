import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { LuLink2 } from "react-icons/lu";
import Sosial from '../SosialIcons/Sosial';
import Share from '../Share/Share';
import Link from 'next/link';
import { getBio, getProfileBackUrl, getProfileUrl, getSosial } from '@/lib/data/Data';
import { LiaPlusSolid } from "react-icons/lia";

const Show: React.FC = async () => {

    const Bio = await getBio()
    const SosialData = await getSosial()
    const getUrlByProfile = await getProfileUrl()
    const getUrlByProfileBack = await getProfileBackUrl()

    return (
        <section className="min-h-lvh relative"
>
            <img className='absolute top-0 left-0 object-cover w-full h-full' src={getUrlByProfileBack && getUrlByProfileBack[0]?.back_url} alt="" />
            
            <div className='laptop:w-auto flex flex-col tablet:w-[100%]'>
                <div className='flex flex-col mt-[60px] z-10'>
                    <div className='m-auto'>
                        <img
                            className="inline-block object-cover h-[100px] w-[100px] rounded-full ring-2 ring-white"
                            src={getUrlByProfile && getUrlByProfile[0]?.url}
                            alt="User Photo" />
                    </div>
                    <div className="absolute left-4 top-4">
                        <Link
                            className='flex backdrop-contrast-125 bg-white/15 ps-4 pe-4 pt-2 pb-2 rounded-[30px] text-white hover:bg-white hover:text-black transition-all text-[18px] font-light'
                            href='/Edit'>
                            Preview
                            <FaRegUserCircle className='ms-2 h-auto' />
                        </Link>
                    </div>
                </div>

                <div className="user-info text-white text-center pt-[15px] tablet:ps-2 tablet:pe-2 z-20">
                    <h4 className='text-[27px] font-medium'> {Bio[0]?.name} </h4>
                    <p className='text-[17px] mt-1 font-think m-auto laptop:w-[600px] ps-[10px] pe-[10px]'> {Bio[0]?.bio} </p>
                </div>

                <ul className="sosial flex flex-col m-auto gap-4 ps-3 pe-3 pt-6 ">
                    {
                        SosialData?.map((el, idx) => (
                            <Sosial el={el} key={idx} />
                        ))
                    }
                    <Link
                        className='flex backdrop-contrast-125 bg-white/45 rounded-[30px] w-[350px] p-3 justify-center text-white hover:bg-white hover:text-black transition-all text-[20px]'
                        href='/Edit'
                        prefetch={false}
                    >
                        Edit <LiaPlusSolid className='ms-2 mt-[3px] h-6 w-6' />
                    </Link>
                </ul>
            </div>

            <Share />
            <div className='text-black flex justify-center pt-10 pb-3'>
                <Link className='flex text-[22px] font-light text-white' href={'/'}> Linkro <LuLink2 className='h-[28px] w-[28px] ms-2 mt-1' />  </Link>
            </div>
        </section>
    )
}

export default Show
