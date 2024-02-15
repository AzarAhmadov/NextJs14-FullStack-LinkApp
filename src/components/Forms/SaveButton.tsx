import React, { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { MdOutlineSave } from 'react-icons/md';

const SaveButton: React.FC = () => {

    const { pending } = useFormStatus();

    useEffect(() => {
        if (pending) {
            window.location.reload();
        }
    }, [pending]);

    return (
        <div>
            <button
                type="submit"
                disabled={pending}
                className={`bg-[#46627b] w-full rounded-md p-2 text-white hover:scale-95 transition-all font-medium flex justify-center text-[18px] ${pending ? 'opacity-50' : ''}`}
            >
                {pending ? "Saving..." : "Save"}
                {pending && <MdOutlineSave className='w-5 h-5 mt-[3px] ms-2' />}
            </button>
        </div>
    );
};

export default SaveButton;
