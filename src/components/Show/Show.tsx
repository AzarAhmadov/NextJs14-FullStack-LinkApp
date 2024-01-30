import React from 'react'
import { LinksData, socialMediaData } from '@/constants/Constants';
import Sosial from '../SosialIcons/Sosial';
import UserLinks from '../UserLinks/UserLinks';

const Show = () => {
    return (
        <section className='min-h-lvh tablet:pt-4 tablet:pb-4 w-full grid place-items-center flex-col bg-[#204162]' >
            <div className='laptop:w-auto tablet:w-[100%] pe-3 ps-3'>
                <div className='laptop:w-[700px] tablet:w-[100%] laptop:h-[200px] tablet:h-[190px] bg-black relative bg-cover bg-no-repeat rounded-lg bg-center flex justify-center bg-[url(https://i.pinimg.com/originals/16/fe/7e/16fe7e7fb6eebb3087b6dc418748ee56.gif)]'>
                    <div className="user-photo absolute -bottom-12">
                        <img className="inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white" src="https://azarahmadov.com/_next/image?url=%2Fabout.jpeg&w=1080&q=75" alt="user photo" />
                    </div>
                </div>
                <div className="user-info text-white text-center pt-[60px]">
                    <h4 className='text-[27px] font-medium mb-1'> Azar Ahmadov </h4>
                    <p className='text-[17px] font-think m-auto laptop:w-[500px] tablet:w-[100%]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sunt. Lorem ipsum dolor sit. Lorem, ipsum dolor. </p>
                </div>
                <ul className="sosial flex justify-center pt-4 gap-3">
                    {
                        socialMediaData.map((el, idx) => (
                            <Sosial el={el} key={idx} />
                        ))
                    }
                </ul>
                <ul className="sosial m-auto pt-5 grid place-items-center gap-3">
                    {
                        LinksData.map((el, idx) => (
                            <UserLinks el={el} key={idx} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Show
