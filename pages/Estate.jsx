import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import mountains from '../public/assets/RealEstate/commercial-towers.jpg';
import construction from '../public/assets/RealEstate/warehouses2.jpg'
import netflixImg from '../public/assets/RealEstate/retail-showroom.jpg'

import EstateItem from '../components/EstateItem'
import apartments from '../public/assets/projects/luxury.jpg'

const Estate = () => {
  return (
    <div>
      <Hero heading={'Real Estate Investment'}/>
      <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
            <div className=' p-8'>
                <h2 className='block mt-1leading-tight font-bold text-black text-3xl text-center '>
                    Introduction
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Our real estate investment department was established to contribute new investment opportunities, to
                satisfy the growing real estate demand in Somalia.
                Due to the civil war in Somalia, many buildings and monuments were torn down, others damaged by the
                war. this has created a gap in the real estate market. This has fueled the rapid growth of the construction
                and real estate industry.

                </p>
                <p className='text-2xl font-semibold mt-10'>Our Aim</p>
                <p className='mt-5 text-gray-500 text-lg'>
                We aim to be the leading real estate company in Somalia with strong emphasis on world class standards
                by developing new innovative and groundbreaking real estate projects, adopting best practices and
                standards, creating variation in quantity, while maintaining utmost quality, ultimately working towards
                our goal of creating successful rates on return on investment
                </p>
              
            </div>
            <div className='max-w-[1240px] mx-auto px-2 py-6'>
        
            <h2 className=' text-2xl'>Our Real Estate Division</h2>

            <div className='max-w-[1240px] mx-auto px-2 py-16'>
        
        <div className='grid md:grid-cols-2  gap-4 sm:align-middle'>
          <EstateItem
            title='Commercial Towers'
            backgroundImg={mountains}
            
          />
            <EstateItem
              title='Retail showrooms'
              backgroundImg={netflixImg}
              
            />
          <EstateItem
            title='Luxury residences'
            backgroundImg={apartments}
            
          />
          <EstateItem
            title='warehouses'
            backgroundImg={construction}
            
          />
        </div>
      </div>
            </div>
      </div>
      <Footer />
    </div>
  )
}

export default Estate