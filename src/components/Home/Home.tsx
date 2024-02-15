'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LuLink2 } from 'react-icons/lu';

const Home: React.FC = () => {

    const delayTimes = [0, 0.3, 0.5, 0.7, 0.9];

    return (
        <section className='min-h-[100vh] p-5 overflow-hidden flex justify-center items-center flex-col bg-gray-200'>
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}>
                    <h1 className="text-center desktop:pb-10 pb-6 text-[20px] desktop:text-[35px] text-black m-auto desktop:leading-[50px]">
                        Create your own awesome links like the cards below 🤩
                    </h1>
                </motion.div>
                <div className="grid desktop:grid-cols-4 grid-cols-2 gap-2 place-items-center">
                    {[1, 2, 3, 4].map((card, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3, delay: delayTimes[index] }}>
                            <img src={`/card${card}.png`} className='desktop:w-[450px] desktop:h-[500px] hover:scale-105 transition-all rounded-md  -rotate-3 object-cover' alt={`Card ${card}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 1 }}
            >
                <Link className='flex text-[20px] bg-black pt-3 pb-3 ps-6 pe-6 rounded-[30px] mt-10 font-light text-white hover:bg-[#000000ad] transition-all' href={'/'}>Create Linkro <LuLink2 className='h-[24px] w-[28px] ms-2 mt-1' />  </Link>
            </motion.div>
        </section >
    );
}

export default Home;
