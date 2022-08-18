import React from 'react'
import Image from 'next/image';

import mountains from '../public/assets/projects/cargo-shipping.jpg';
import estate from '../public/assets/RealEstate/real2.jpg'
import Agril from '../public/assets/agriculture/agril.jpg'

import industry from '../public/assets/Industry/industry.png'

import ProjectItem from './ProjectItem';
const Investment = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
       
        <h2 className='py-4'>Our Investment Division</h2>
        <div className='grid md:grid-cols-2  gap-4'>
          
          
          <ProjectItem
            title='Agriculture'
            backgroundImg={Agril}
            projectUrl='/Agriculture'
            tech=''

          />
          <ProjectItem
            title='Real Estate'
            backgroundImg={estate}
            projectUrl='/Estate'
            tech=''

          />
          <ProjectItem
            title='General Trading'
            backgroundImg={mountains}
            projectUrl='/general'
            tech=''
          />
          <ProjectItem
            title='Industrial'
            backgroundImg={industry}
            projectUrl='/Industrial'
            tech=''

          />
          
        </div>
      </div>
    </div>
  )
}

export default Investment