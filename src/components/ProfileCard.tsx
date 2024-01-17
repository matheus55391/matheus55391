/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex'>
                <div className='rounded-full overflow-hidden hover:animate-spin '>
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className='mx-4 lg:mx-16 my-4 flex flex-col items-center space-y-4'>
                <h1 className='text-xl lg:text-3xl font-bold'>Hey, I'm Matheus🤠</h1>
                <p className='text-gray-500 text-sm text-justify md:w-8/12 lg:w-5/12'>
                    I'm a full-stack developer based in Aracaju, Sergipe, Brazil. I specialize in crafting web and mobile applications, along with developing APIs using best practices of clean code and unit testing for high-quality project development.
                </p>
            </div>
        </div>
    )
}


export default ProfileCard