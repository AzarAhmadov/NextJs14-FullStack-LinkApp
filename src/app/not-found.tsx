import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-3xl font-bold mb-4">404 - Not Found</h3>
            <p className="text-gray-600 mb-4 text-center">The page you are looking for does not exist.</p>
            <Link href='/Demo'
                className="bg-[#000] hover:bg-[#00000097] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go Back
            </Link>
        </div>
    );
};

export default NotFound;
