'use client'

import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { BsCheckLg } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Share: React.FC = () => {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const currentUrl = window.location.href;

        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                toast.success('URL copied to clipboard');
                setCopied(true);
            })
            .catch((error) => {
                toast.error('Failed to copy URL to clipboard');
                console.error('Error copying to clipboard: ', error);
            });
    };

    return (
        <>
            <button
                className='bg-[#fff] absolute z-20 top-4 right-4 rounded-[30px] grid place-items-center w-11 h-11 text-[#fff]'
                onClick={copyToClipboard}
            >
                {
                    copied ? <BsCheckLg color='#000' className='h-auto w-6' /> : <MdContentCopy color='#000' className='h-auto w-6' />
                }
            </button>
            <ToastContainer
                position="top-left"
                toastStyle={{ backgroundColor: "#FDFEFE" }}
            />
        </>
    );
};

export default Share;
