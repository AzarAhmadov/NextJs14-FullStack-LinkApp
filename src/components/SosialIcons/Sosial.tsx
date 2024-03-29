'use client'

import { SocialMediaIcon } from '@/types/Types'
import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { PiMediumLogo, PiTelegramLogo } from "react-icons/pi";
import { FaInstagram, FaSpotify, FaWhatsapp } from 'react-icons/fa'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiTiktokLogo } from "react-icons/pi";
import { deleteSosial } from '@/lib/action/action';
import { TbWorldWww } from "react-icons/tb";
import DeleteButton from '../Forms/DeleteButton';
interface sosialProps {
    el: SocialMediaIcon
}

const Sosial: React.FC<sosialProps> = ({ el }) => {
    let socialIcon;

    switch (el.name) {
        case "instagram":
            socialIcon = <FaInstagram className='h-auto' color='#fff' size={30} />;
            break;
        case "Whatsapp":
            socialIcon = <FaWhatsapp className='h-auto' color='#fff' size={30} />;
            break;
        case "Telegram":
            socialIcon = <PiTelegramLogo className='h-auto' color='#fff' size={30} />;
            break;
        case "Facebook":
            socialIcon = <LuFacebook className='h-auto' color='#fff' size={30} />;
            break;
        case "Github":
            socialIcon = <FiGithub className='h-auto' color='#fff' size={30} />;
            break;
        case "Twitter":
            socialIcon = <RiTwitterXLine className='h-auto' color='#fff' size={30} />;
            break;
        case "Youtube":
            socialIcon = <PiYoutubeLogo className='h-auto' color='#fff' size={30} />;
            break;
        case "TikTok":
            socialIcon = <PiTiktokLogo className='h-auto' color='#fff' size={30} />;
            break;
        case "Medium":
            socialIcon = <PiMediumLogo className='h-auto' color='#fff' size={30} />;
            break;
        case "Spotify":
            socialIcon = <FaSpotify className='h-auto' color='#fff' size={30} />;
            break;
        case "Web":
            socialIcon = <TbWorldWww className='h-auto' color='#fff' size={30} />;
            break;
        case "LinkedIn":
            socialIcon = <CiLinkedin className='h-auto' color='#fff' size={30} />;
            break;
        default:
            socialIcon = null;
            break;
    }

    return (
        <li className='w-[360px]'>
            <a target='_blank' className='p-3 shadow-lg flex backdrop-blur-sm bg-white/20 font-medium  ps-4 pe-2 rounded-[30px] text-[#fff] border-[1px] transition-all hover:scale-110' href={el.link}>
                {socialIcon}
                <span className='grid place-items-center w-[265px] whitespace-pre overflow-hidden'>
                    {el.title.length > 24 ? `${el.title.substring(0, 24)}...` : el.title}
                </span>

                <form action={deleteSosial}>
                    <input type="hidden" name="id" value={`${el._id}`} />
                    <DeleteButton />
                </form>
            </a>
        </li>
    )
}

export default Sosial;
