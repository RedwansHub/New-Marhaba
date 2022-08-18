import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Image from 'next/image'
import sideImage from '../public/assets/Industry/bottled-water.jpeg'


const Industrial = () => {
  return (
    <div>
      <Hero heading={'Industrial Investment'} />
      <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
        <div className=' p-8'>
                <h2 className='block mt-1leading-tight font-bold text-black text-3xl text-center '>
                    Introduction
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                We invest in the industries sector by grasping new opportunities that are economically viable and add
                value to the growing economy, especially projects that complement the activities of the other companies
                in the Group. </p>

                
                
              
            </div>
            <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
          <div className='md:flex'>
            
            <div className='md:w-1/2 w-full p-8'>
                
                <h2 className='block mt-1leading-tight font-semibold text-black text-2xl '>
                    Our Role
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba investment plays a major role of a developer in the industry segment through selected projects,
                ongoing research, and acquisition of shares. The company is expanding the portfolio through participation
                or acquisition of factories and construction of new factories with the latest technology, by obtaining the
                licenses and necessary expertise.
  
                </p>
                <p className='mt-5 text-gray-500 text-lg'>Our industries investment focus on through specialized divisions like Bottled Water Manufacturer,
                  Package Manufacturer, tissue Manufacturer, Maize mill and Grain silos factory etc.</p>
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

export default Industrial