'use client'

import React, { useState, ChangeEvent, useEffect } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineSave } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { SosialImage } from '@/constants/Constants';
import Sosial from '../Sosial/Sosial';
interface Field {
    title: string;
    url: string;
    id: number;
}

const Edit: React.FC = () => {

    const [charsLeft, setCharsLeft] = useState<number>(35);
    const [fields, setFields] = useState<Field[]>(() => {
        const storedFields = localStorage.getItem('fields');
        return storedFields ? JSON.parse(storedFields) : [];
    });

    useEffect(() => {
        localStorage.setItem('fields', JSON.stringify(fields));
    }, [fields]);

    const handleWordCount = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const charCount: number = event.target.value.length;
        const maxChar: number = 35;
        const charLength: number = maxChar - charCount;
        setCharsLeft(charLength);
    }

    const addField = () => {
        setFields(prevFields => [...prevFields, { title: '', url: '', id: prevFields.length + 1 }]);
    }

    const handleDelete = (idx: number) => {
        const updatedFields = fields.filter((_, index) => index !== idx);
        setFields(updatedFields);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <section className='min-h-lvh bg-slate-800 pt-4 pe-3 ps-3 pb-4'>
            <div className='container'>

                <div className='bg-cover rounded-md relative bg-no-repeat h-[200px] bg-center bg-[url(https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]'>
                    <div className='absolute left-0 right-0 -bottom-[120px] grid place-items-center h-[250px]'>
                        <div className='relative'>
                            <img className='inline-block object-cover h-24 w-24 rounded-full ring-2 ring-white' src="https://azarahmadov.com/_next/image?url=%2Fabout.jpeg&w=1080&q=75" alt="" />
                            <div className='absolute right-0 cursor-pointer bottom-0 w-10 h-10 bg-white rounded-[30px] grid place-items-center'>
                                <FaCloudUploadAlt className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                    <div className='grid place-items-center h-[180px] '>
                        <button className='flex z-10 cursor-pointer text-[#000] bg-white p-2 rounded-lg'> Change image  <FaCloudUploadAlt className='w-6 h-6 ms-2' /> </button>
                    </div>
                </div>

                <form action="" className='flex flex-col mt-[65px] relative'>
                    <label className='text-white text-[19px] mb-3' htmlFor="Name"> Name </label>
                    <input className='text-black p-2 rounded-lg placeholder:text-black' type="text" id='Name' placeholder='Name' />
                    <label className='text-white text-[19px] mb-3 mt-4' htmlFor="bio"> Bio </label>
                    <textarea
                        maxLength={35}
                        onChange={handleWordCount}
                        className='text-black  p-2 rounded-lg h-[70px] resize-none placeholder:text-black' name="bio" id="bio" placeholder='Bio' />
                    <span className='text-white mt-4 ms-auto'>Left : {charsLeft}</span>
                    <button className='bg-[#46627b] mt-3 rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px]'> Save <MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' /></button>
                </form>

                <h4 className='text-white text-[24px] text-center mt-10 flex justify-center border-slate-600 border-b-[1px] pb-2'>
                    Sosials <RiAccountBoxLine className='w-8 h-8 mt-[2px] ms-2' />
                </h4>

                <div className='flex flex-wrap justify-center pt-7 desktop:gap-5 gap-4 gap-y-7'>
                    {
                        SosialImage.map((el, idx: number) => (
                            <Sosial el={el} key={idx} />
                        ))
                    }
                </div>

                <button className='bg-[#46627b] w-full mt-7 rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px]'> Save <MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' /></button>

                <h4 className='text-white text-[24px] text-center mt-10 flex justify-center border-slate-600 border-b-[1px] pb-2'>
                    Links <FaExternalLinkSquareAlt className='w-7 h-7 mt-[4px] ms-2' />
                </h4>

                <div>

                    <form action="" onSubmit={handleFormSubmit} >
                        {fields?.length === 0 ? (
                            <p className='text-center text-white pt-5 text-[20px]'>No links yet.</p>
                        ) : (
                            <ul>
                                {fields?.map((_, idx: number) => (
                                    <li key={idx} className='grid desktop:grid-cols-2 mt-5 gap-4 border-b-[1px] border-slate-600 pb-6 '>
                                        <div className='flex flex-col'>
                                            <label htmlFor={`title-${idx}`} className='text-white text-[19px] mb-3'> Title </label>
                                            <input
                                                id={`title-${idx}`}
                                                type="text"
                                                name="title"
                                                placeholder='Title'
                                                className='text-black p-2 rounded-lg placeholder:text-black'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor={`url-${idx}`} className='text-white text-[19px] mb-3'> Url </label>
                                            <div className='desktop:flex w-full gap-3'>
                                                <input
                                                    id={`url-${idx}`}
                                                    type="text"
                                                    name="url"
                                                    placeholder='Url'
                                                    className='text-black p-2 w-full rounded-lg placeholder:text-black'
                                                />
                                                <div className='flex justify-center'>
                                                    <button onClick={() => handleDelete(idx)} className='bg-red-500 flex  text-white rounded-xl p-2 ps-4 pe-4 mt-4 desktop:mt-0 m'>
                                                        Delete <FaRegTrashAlt className='ms-2 mt-1' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </form>

                    <button
                        onClick={addField}
                        type="button"
                        className='flex justify-center align-middle m-auto mt-6 bg-slate-400 p-3 ps-5 pe-5 rounded-[30px] text-white text-[18px]'
                    >
                        {
                            fields?.length === 0 ? 'Add link' : 'Add New'
                        }
                        <LuPlusCircle color='#fff' className='h-6 w-6 ms-2 mt-[1px]' />
                    </button>
                    <button className='bg-[#46627b] w-full mt-6 rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px]'> Save <MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' /></button>
                </div>
            </div>
        </section>
    )
}

export default Edit;
