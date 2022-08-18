import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import mountains from '../public/assets/projects/mountains.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import construction from '../public/assets/projects/construction.webp'
import netflixImg from '../public/assets/projects/lake.jpg'
// import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import apartments from '../public/assets/projects/luxury.jpg'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Investments
        </p>
        <h2 className='py-4'>Our Investment Division</h2>
        <div className='grid md:grid-cols-2  gap-4 sm:align-middle'>
          <ProjectItem
            title='General Trading'
            backgroundImg={mountains}
            projectUrl='/property'
            tech=''
          />
          <ProjectItem
            title='Real Estate'
            backgroundImg={apartments}
            projectUrl='/crypto'
            tech=''

          />
          <ProjectItem
            title='Industrial'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech=''

          />
          <ProjectItem
            title='Construction'
            backgroundImg={construction}
            projectUrl='/twitch'
            tech=''

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
