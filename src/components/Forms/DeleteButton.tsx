'use server'

import { auth } from '@clerk/nextjs'
import React from 'react'
import { PiTrashLight } from 'react-icons/pi'

const DeleteButton = () => {

    const { userId } = auth()

    return (
        <>
            {
                userId === process.env.NEXT_PUBLIC_CLERK_ID &&
                <button className='h-full'>
                    <PiTrashLight color='red' className='w-5 h-5' />
                </button>
            }
        </>
    )
}

export default DeleteButton
