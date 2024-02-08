import { Props } from '@/types/Types'
import React from 'react'

const SaveButton: React.FC<Props> = ({ title, icon, onClick }) => {

    const refresh = () => {
        window.location.href = '/Edit';
    }

    return (
        <div onClick={() => refresh()}>
            <button
                onClick={onClick}
                className='bg-[#46627b] w-full mt-7 rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px]'>
                {title} {icon}
            </button>
        </div>
    );
};

export default SaveButton;