import React from 'react'
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
        <section>
            <img className='fixed top-0 left-0 object-cover w-full h-[100%]' src={getUrlByProfileBack && getUrlByProfileBack[0]?.back_url} alt="Backgorund Image" />
            <div className='laptop:w-auto flex h-screen flex-col tablet:w-[100%] pt-7'>
                <div className='h-screen z-10 grid place-items-center'>
                    <div>
                        <div className='grid place-items-center'>
                            <img
                                className="inline-block object-cover h-[100px] w-[100px] rounded-full ring-2 ring-white"
                                src={getUrlByProfile && getUrlByProfile[0]?.url}
                                alt="User Photo"
                            />
                        </div>

                        <div className="user-info text-white text-center pt-[15px] tablet:ps-2 tablet:pe-2 z-20">
                            <h4 className='text-[27px] font-medium'> {Bio && Bio[0]?.name} </h4>
                            <p className='text-[17px] mt-1 font-think m-auto laptop:w-[600px] ps-[10px] pe-[10px]'> {Bio && Bio[0]?.bio} </p>
                        </div>

                        <ul className="sosial grid place-items-center gap-4 ps-3 pe-3 pt-6 ">
                            {
                                SosialData?.map((el, idx) => (
                                    <Sosial el={el} key={idx} />
                                ))
                            }
                            <Link
                                className='flex backdrop-contrast-125 bg-white/45 rounded-[30px] w-[350px] p-3 justify-center text-white hover:bg-white hover:text-black transition-all text-[20px]'
                                href='/Edit'
                                target='_top'
                            >
                                Edit <LiaPlusSolid className='ms-2 mt-[3px] h-6 w-6' />
                            </Link>
                        </ul>

                        <div className='text-black flex justify-center pt-5 pb-3'>
                            <span className='flex text-[18px] font-light text-white'>  Built by <a className='ms-1 border-1 border-b-[1px]' href="https://azarahmadov.com/" target='_blank'>AzarAhmadov</a> <LuLink2 className=' h-auto w-6 ms-2' />  </span>
                        </div>

                    </div>
                </div>
            </div>
            <Share />
        </section>
    )
}

export default Show
