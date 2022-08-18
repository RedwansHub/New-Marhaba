import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Image from 'next/image'
import sideImage from '../public/assets/agriculture/Smart-agriculture.webp'

const Agriculture = () => {
  return (
    <div>
      <Hero heading={'Agriculture Investment'}/>
      <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
        <div className=' p-8'>
                <h2 className='block mt-1leading-tight font-bold text-black text-3xl text-center '>
                    Introduction
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Agriculture in Somalia is a major employment activity and is the largest economic sector in the country.
                It contributes more than 65% of the national GDP from domestic distribution and exports to other parts of
                the continent, the Middle East and Europe.
                We are a specialist agriculture investment firm that has been investing in small and medium sized Somali
                agribusinesses since the past couple of years. </p>

                <p className='mt-5 text-gray-500 text-lg'>
                  Our success is derived from working with ambitious management teams, providing supportive investment
                  structures and specialist expertise that create high-growth agribusinesses.  
                </p>
                
              
            </div>
            <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
          <div className='md:flex'>
            
            <div className='md:w-1/2 w-full p-8'>
                
                <h2 className='block mt-1leading-tight font-bold text-[#38E935] text-2xl '>
                    Our Aim
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                  Our investments strengthen agricultural sub-sectors and use smallholder farmer networks to generate
                  significant income for millions of families across Somalia.
                  We are committed to bringing technology to the farmer and addressing the issue of smallholder farmer
                  sustainability
                </p>
            </div>
            <div className='md:w-1/2 w-full border-2 '>
              <Image src={sideImage} width={680} height={420} className='object-cover h-full w-full' alt=''/>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Agriculture