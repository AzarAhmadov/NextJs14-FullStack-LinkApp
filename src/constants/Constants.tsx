import { FiGithub } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';
import { PiTelegramLogoDuotone } from 'react-icons/pi';
import { Linkdata, SocialMediaIcon } from '@/types/Types';
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

export const socialMediaData: SocialMediaIcon[] = [
    { icon: <FiGithub color='#fff' size={25} />, link: 'https://github.com' },
    { icon: <SlSocialFacebook color='#fff' size={25} />, link: 'https://facebook.com' },
    { icon: <FaWhatsapp color='#fff' size={25} />, link: 'https://whatsapp.com' },
    { icon: <PiTelegramLogoDuotone color='#fff' size={25} />, link: 'https://telegram.org' }
];


export const LinksData: Linkdata[] = [
    {
        title: "Call us",
        url:'Call us',
        icon:<IoCallOutline color='#fff' size={25} />
    },
    {
        title: "Our online store",
        url:'Our online store',
        icon:<MdKeyboardArrowRight color='#fff' size={25} />
    },
    {
        title: "Customer care",
        url:'Customer care',
        icon:<MdKeyboardArrowRight color='#fff' size={25} />
    },
    {
        title: "Read reviews",
        url:'Read reviews',
        icon:<MdKeyboardArrowRight color='#fff' size={25} />
    },
]