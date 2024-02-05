'use client'

import React, { useState, ChangeEvent } from 'react'
import { LuPlusCircle } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineSave } from 'react-icons/md';
import SaveButton from './SaveButton';

interface Field {
    title: string;
    url: string;
    id: number;
}

const UserLinksForm: React.FC = () => {

    const [fields, setFields] = useState<Field[]>([{ url: "", title: "", id: 1 }]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, idx: number) => {

        const { name, value } = event.target;

        setFields(prevFields => {
            const updatedFields = prevFields.map((field, index) => {
                if (index === idx) {
                    return {
                        ...field,
                        [name]: value
                    };
                }
                return field;
            });
            return updatedFields;
        });
    };

    const addField = () => {
        setFields(prevFields => [...prevFields, { title: '', url: '', id: prevFields.length + 1 }]);
    }

    const handleDelete = (idx: number) => {
        const updatedFields = fields.filter((_, index) => index !== idx);
        setFields(updatedFields);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(fields)
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={handleFormSubmit} >
            {fields?.length === 0 ? (
                <p className='text-center text-white pt-5 text-[20px]'>No links yet.</p>
            ) : (
                <ul>
                    {fields?.map((el, idx: number) => (
                        <li key={idx} className='grid desktop:grid-cols-2 mt-5 gap-4 border-b-[1px] border-slate-600 pb-6 '>
                            <div className='flex flex-col'>
                                <label htmlFor={`title-${idx}`} className='text-white text-[19px] mb-3'> Title </label>
                                <input
                                    id={`title-${idx}`}
                                    value={el.title}
                                    onChange={(e) => handleChange(e, idx)}
                                    type="text"
                                    name="title"
                                    placeholder='Title'
                                    className='text-black outline-none p-2 rounded-lg placeholder:text-black'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor={`url-${idx}`} className='text-white text-[19px] mb-3'> Url </label>
                                <div className='desktop:flex w-full gap-3'>
                                    <input
                                        id={`url-${idx}`}
                                        value={el.url}
                                        onChange={(e) => handleChange(e, idx)}
                                        type="text"
                                        name="url"
                                        placeholder='Url'
                                        className='text-black outline-none p-2 w-full rounded-lg placeholder:text-black'
                                    />
                                    <div className='flex justify-center'>
                                        <button onClick={() => handleDelete(idx)} className='bg-red-500 flex  text-white rounded-xl p-2 ps-4 pe-4 mt-4 desktop:mt-0 hover:bg-red-400 transition-all'>
                                            Delete <FaRegTrashAlt className='ms-2 mt-1' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <button
                onClick={addField}
                type="button"
                className='flex justify-center align-middle m-auto mt-6 bg-slate-400 p-2 ps-5 pe-5 rounded-[30px] text-white text-[18px] hover:bg-slate-600 transition-all'
            >
                {
                    fields?.length === 0 ? 'Add link' : 'Add New'
                }
                <LuPlusCircle color='#fff' className='h-6 w-6 ms-2 mt-[1px]' />

            </button>
            {
                fields.length !== 0 &&
                <SaveButton title='Save' icon={<MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' />} onClick={() => handleFormSubmit} />
            }
        </form>
    )
}

export default UserLinksForm
