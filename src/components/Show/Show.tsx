import React from 'react'
import { LinksData } from '@/constants/Constants';
import { FaUserEdit } from "react-icons/fa";
import { LuLink2 } from "react-icons/lu";
import Sosial from '../SosialIcons/Sosial';
import UserLinks from '../UserLinks/UserLinks';
import Share from '../Share/Share';
import Link from 'next/link';
import { getBio, getSosial } from '@/lib/data/Data';

const Show: React.FC = async () => {

    const Bio = await getBio()
    const SosialData = await getSosial()

    return (
        <section className='min-h-lvh relative flex flex-col justify-center tablet:pb-4 bg-cover bg-no-repeat  bg-center bg-[url(https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]' >
            <div className='laptop:w-auto flex flex-col tablet:w-[100%]'>
                <div className='flex flex-col mt-[60px]'>
                    <div className='m-auto'>
                        <img className="inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white" src="https://azarahmadov.com/_next/image?url=%2Fabout.jpeg&w=1080&q=75" alt="user photo" />
                    </div>
                    <div className="absolute left-5 top-5">
                        <Link className='flex backdrop-contrast-125 bg-white/15 ps-4 pe-4 pt-2 pb-2 rounded-[30px] text-white hover:bg-white hover:text-black transition-all text-[20px]' href='/Edit'> Edit <FaUserEdit className='ms-2 h-6 w-6' /> </Link>
                    </div>
                </div>
                <div className="user-info text-white text-center pt-[15px] tablet:ps-2 tablet:pe-2">
                    <h4 className='text-[27px] font-medium'> {Bio[0]?.name} </h4>
                    <p className='text-[17px] mt-2 font-think m-auto laptop:w-[600px] ps-[10px] pe-[10px]'> {Bio[0]?.bio} </p>
                </div>
                <ul className="sosial flex flex-wrap justify-center ps-3 pe-3 pt-3 ">
                    {
                        SosialData?.map((el, idx) => (
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
            <div className='text-black flex justify-center pt-10 pb-3'>
                <Link className='flex text-[22px] font-light text-white' href={'/'}> Link App <LuLink2 className='h-[28px] w-[28px] ms-2 mt-1' />  </Link>
            </div>
        </section>
    )
}

export default Show
