import React from 'react'
import Edit from '@/components/Edit/Edit'
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const page: React.FC = async () => {

    const { userId } = auth()

    if (userId !== process.env.NEXT_PUBLIC_CLERK_ID) {
        redirect('/AzarAhmadov')
    }

    return (
        <Edit />
    )
}

export default page
