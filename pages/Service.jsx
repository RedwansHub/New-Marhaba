import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Image from 'next/image'
import Micro from '../public/assets/Finance/micro.png'
const Service = () => {
  return (
    <div>
        <Hero heading={'Our Services'}/>
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
        
            <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
          <div className='md:flex'>
            
            <div className='md:w-1/2 w-full p-8'>
                
                <h2 className='block mt-1leading-tight font-semibold text-[#009FFD] text-4xl '>
                    Micro Finance
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Microfinance is one of our financial services for small businesses and household-based entrepreneurs to
                increase their capital asset and expand their businesses.
                </p>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba Investment will continue to contribute to community development by providing the financial
                services needed. Such as financing Agriculture, Home financing, SMEs, and providing Support to those
                who have fruitful business ideas and have no access for a financial support
                </p>
            </div>
            <div className='md:w-1/2 w-full border-2 '>
              <Image src={Micro} width={680} height={420} className='object-cover h-full w-full' alt=''/>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service