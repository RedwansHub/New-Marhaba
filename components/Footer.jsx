import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Logo from '../public/Logo.png'
const Footer = () => {
  return (
    <div className=' bg-[#0E0F19]'>
        <div className=' flex flex-row pt-5'>
            <div className='flex-col max-w-md mx-auto overflow-hidden'>
            <div className='flex justify-center items-center'>
            <div className='col'>
              <Image src={Logo} width={100} height={80} alt=''/>
            </div>
              <Link href='/' className=''>
                <h1 className='font-bold text-2xl text-white'>
                  Marhaba <span className='text-[#78d251]'>Investment</span>
                </h1>
              </Link>

          </div>

            </div>
        </div>
            <div className=' text-gray-400 flex justify-center items-center max-w-md mx-auto overflow-hidden ' >
                <ul className='sm:flex text-center '>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Investment</li>
                    <li className='p-4'>Service</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
            <div className='pt-5 pb-5 '>
                <p className='text-gray-300 text-center'>Copyright by 2022 Marhaba Investment, Ltd</p>
            </div>
    </div>
  )
}

export default Footer