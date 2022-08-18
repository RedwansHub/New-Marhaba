import Image from 'next/image'
import React from 'react'
import Hero from '../components/Hero'
import gen from '../public/gen.png'
import {BsTools} from 'react-icons/bs'
import {GiRolledCloth, GiBabyBottle, GiFlour} from 'react-icons/gi'
import Footer from '../components/Footer'
const General = () => {
  return (
    <div>
      <Hero heading={'General Trading Investment'}/>

      <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
            <div className=' p-8'>
                <h2 className='block mt-1leading-tight font-bold text-black text-3xl text-center '>
                    Introduction
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                The ever-increasing economy and Africa&apos;s trading hub has heightened the growth of the trading industry
                in East Africa, especially Somalia. Ranked as one of the top developing countries, supported by the
                country&apos;s natural resources and favorable business conditions, growth is imminent. more and more
                businesses are opening their doors and expanding in the market.
                </p>
                <p className='mt-5 text-gray-500 text-lg'>
                Keeping up with the exponential growth Marhaba investment Company ltd are investing into a diverse
                portfolio and seeking more and more brands to include under the general trading division.
                </p>
              
            </div>
            <div className='max-w-[1240px] mx-auto px-2 py-6'>
        
            <h2 className=' text-2xl'>Our General Trading Division</h2>

              
              <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
          <div className='md:flex'>
            
            <div className='md:w-1/2 w-full '>
                    <div className='m-5 '>
                      <div className='flex flex-row '>
                        <BsTools size={35} color={'#009FFD'}/>
                        <p className='pl-3 text-xl'>Building Materials and Hardware</p>
                      </div>
                    </div>
                    <div className='m-5'>
                      <div className='flex flex-row '>
                        <GiRolledCloth size={30} color={'#38E935'}/>
                        <p className='pl-3 text-xl'>Beauty Care Products</p>
                      </div>
                    </div>
                    <div className='m-5'>
                      <div className='flex flex-row '>
                        <GiBabyBottle size={30} color={'#009FFD'}/>
                        <p className='pl-3 text-xl'>Baby Products</p>
                      </div>
                    </div>
                    <div className='m-5'>
                      <div className='flex flex-row '>
                        <GiFlour size={30} color={'#38E935'}/>
                        <p className='pl-3 text-xl'>Foodstuff</p>
                      </div>
                    </div>
            </div>
            <div className='md:w-1/2 w-full '>
              <Image src={gen} width={850} height={550} className='object-cover h-full w-full' alt=''/>

            </div>
          </div>
        </div>
            </div>
      </div>
      <Footer />
    </div>
  )
}

export default General