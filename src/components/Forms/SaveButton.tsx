import React from 'react'
import { Props } from '@/types/Types'

const SaveButton: React.FC<Props> = ({ title, icon }) => {

    const reload = () => {
        location.reload();
    }

    return (
        <div onClick={reload}>
            <button
                className='bg-[#46627b] w-full rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px]'>
                {title} {icon}
            </button>
        </div>
    );
};

export default SaveButton;