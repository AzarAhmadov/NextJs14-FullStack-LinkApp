import React from 'react'
import { Props } from '@/types/Types'

const SaveButton: React.FC<Props> = ({ title, icon }) => {
    return (
        <div>
            <button
                className='bg-[#46627b] w-full rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px]'>
                {title} {icon}
            </button>
        </div>
    );
};

export default SaveButton;