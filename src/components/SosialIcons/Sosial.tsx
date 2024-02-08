import { SocialMediaIcon } from '@/types/Types'
import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { PiMediumLogo, PiTelegramLogo } from "react-icons/pi";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiTiktokLogo } from "react-icons/pi";
interface sosialProps {
    el: SocialMediaIcon
}

const Sosial: React.FC<sosialProps> = ({ el }) => {

    let socialIcon;

    switch (el.name) {
        case "instagram":
            socialIcon = <FaInstagram color='#fff' size={30} />;
            break;
        case "Whatsapp":
            socialIcon = <FaWhatsapp color='#fff' size={30} />;
            break;
        case "Telegram":
            socialIcon = <PiTelegramLogo color='#fff' size={30} />;
            break;
        case "Facebook":
            socialIcon = <LuFacebook color='#fff' size={30} />;
            break;
        case "Github":
            socialIcon = <FiGithub color='#fff' size={30} />;
            break;
        case "Twitter":
            socialIcon = <RiTwitterXLine color='#fff' size={30} />;
            break;
        case "Youtube":
            socialIcon = <PiYoutubeLogo color='#fff' size={30} />;
            break;
        case "TikTok":
            socialIcon = <PiTiktokLogo color='#fff' size={30} />;
            break;
        case "Medium":
            socialIcon = <PiMediumLogo color='#fff' size={30} />;
            break;
        default:
            socialIcon = null;
            break;
    }

    return (
        <li className='flex'>
            <a target='_blank' className='p-2 shadow-lg transition-all hover:scale-110' href={el.link}>
                {socialIcon}
            </a>
        </li>
    )
}

export default Sosial;
