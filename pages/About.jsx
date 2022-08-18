import React from 'react'
import Hero from '../components/Hero'
import Image from 'next/image'

import sideImage from '../public/inv2.jpeg'
import sideImage2 from '../public/maize-transformed.jpeg'

import vision from '../public/vision.jpg'
import commitment from '../public/commitment.png'
import teamwork from '../public/teamwork.png'
import integrity from '../public/integrity.png'
import empower from '../public/empower.png'
import {FcIdea} from 'react-icons/fc'
import {GiBullseye, GiSprout} from 'react-icons/gi'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Hero heading={'About Us'} message={''}/>
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
            <div className=' p-8'>
                <h2 className='block mt-1leading-tight font-bold text-black text-3xl text-center '>
                    Introduction
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba Investment ltd founded in the year 1992 is the leading investment company in Somalia. With its
                main pillars as general trading, real estate investment, industries investment, agri-business, and
                microfinance.
                Headquartered in Mogadishu Somalia with multiple branches abroad. Marhaba scope of operation is not
                limited to Somalia but rather multiple countries in Africa and abroad.
                </p>
              
            </div>
        </div>
            
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-6xl'>
          <div className='md:flex'>
            <div className='md:w-1/2 w-full mt-10'>
              <Image src={sideImage} width={550} height={450} className='object-cover h-full w-full' alt=''/>

            </div>
            <div className='md:w-1/2 w-full p-5'>
              <div className=' tracking-wide text-sm w-[120px] bg-[#78d251] border-2 border-[#78d251] font-semibold'></div>
              
                <h2 className='block mt-3 leading-tight font-semibold text-black text-3xl '>
                    Who <span className='text-[#78d251]'>We Are</span> 
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba investment is a subsidiary company licensed by Marhaba Group of Companies. Marhaba group
                of companies is a holding company that has multiple independent companies in different sectors under its
                control all working towards their goals through their individual corporate strategic plan
                Marhaba investment success stems from its founding operational principles. Groundbreaking innovations
                that set it apart from any other investment company in the region and most importantly Crystal-clear
                transparency with clients.
                </p>
                <p className='mt-5 text-gray-500 text-lg'>With deep emphasis on the best of international practices as well as principles of Islamic law and shariah
                    compliant investment. Marhaba investment continues to operate successfully in multiple regions.</p>
                
            </div>
          </div>
        </div>
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-6xl'>
          <div className='md:flex'>
            
            <div className='md:w-1/2 w-full p-8'>
                
            <div className='uppercase tracking-wide text-sm w-[120px] bg-[#009FFD] border-2 border-[#009FFD] font-semibold'></div>
                <h2 className='block mt-2 leading-tight font-semibold text-black text-3xl '>
                    What <span className='text-[#009FFD]'>We Do</span> 
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba investment has contributed to the Somali economy by becoming a key player in the
                development of the country through multiple development projects that that prominently utilized the
                country natural resources, most recently Marhaba investment took part in the developed the first mill
                processing maize flour in Mogadishu. This utilized the large fields of agriculture available in the Somali
                nation.
                </p>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba investment continues to strive for greatness by developing more and more projects that solve a
                fundament problem in the country and ultimately fill a market demand and most importantly create job
                opportunities for the people.

                </p>
            
            </div>
            <div className='md:w-1/2 w-full mt-10 '>
              <Image src={sideImage2} width={850} height={550} className='object-cover h-full w-full' alt=''/>

            </div>
          </div>
        </div>
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-6xl'>
          <div className='md:flex'>
            <div className='md:w-1/2 w-full p-5'>
                <div className='flex'>
                    <div className='justify-center pt-2'>
                        <h2 className='block leading-tight font-bold text-black text-3xl '>
                            Vision 
                        </h2>
                    </div>
                    <div className=' justify-center pl-5'>
                        <FcIdea size={50}/>
                    </div>
                </div>
                <p className='mt-5 text-gray-500 text-lg'>
                Become the leading Islamic investment company in Africa bringing forth innovative projects to our
                esteemed clients. We believe Marhaba will become a key player in the prosperous development of Africa.
                We want Marhaba to become the beacon of hope to future generations in Africa by supporting and
                inspiring them to create innovative entrepreneurial projects that will contribute to the growth of Africa in
                the business world.
                </p>
            
            </div>
            <div className='md:w-1/2 w-full p-5'>
                <div className='flex'>
                    <div className='justify-center pt-2'>
                        <h2 className='block leading-tight font-bold text-black text-3xl '>
                            Mission Statement 
                        </h2>
                    </div>
                    <div className=' justify-center pl-5 '>
                        <GiBullseye color='red' size={50}/>
                    </div>
                </div>
                <p className='mt-5 text-gray-500 text-lg'>
                To Maximize stakeholder wealth through innovative profitable diverse investment opportunities for our
                clients. Our ethical operational duty complies the Islamic shariah Investment principles as well as the highest
                international ethical operational standards. Guided by the Chairman’s vision and business expertise while
                Supported by our team of experienced professionals, we strive to execute successful projects and deliver
                value to our clients. We strongly believe in trust and transparency as well as protecting utmost privacy for
                our clients as fundamental pillars to success. 
                </p>
                
            </div>
          </div>
        </div>
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
            <div className=' p-8 '>
                <h2 className='block mt-1leading-tight font-bold text-black text-3xl text-center '>
                    Our Core Values
                </h2>
                
                <div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10">
        
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group  bg-white shadow-xl shadow-neutral-100   ">
            <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <Image src={vision} width={130} height={120} alt='' />
                <p className="text-xl font-bold text-slate-700 mt-3">Innovation</p>
                <p className="mt-2 text-sm font-medium text-slate-900">Creative and positive approach to investment.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
               <Image src={commitment} width={150} height={120} alt=''/>
                <p className="text-xl font-bold text-slate-700 mt-3">Commitment</p>
                <p className="mt-2 text-sm font-medium text-slate-900">Dedication to our clients’ individual needs.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              
              <Image src={empower} width={150} height={120} alt='/'/>
                <p className="text-xl font-bold text-slate-700 mt-3">Empowerment</p>
                <p className="mt-2 text-sm font-medium text-slate-900">We believe that the workforce is the greatest asset of any organization.</p>
            </div>


            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <Image src={teamwork} width={150} height={120}  alt='/'/>
                <p className="text-xl font-bold text-slate-700 mt-3">Teamwork and Trust</p>
                <p className="mt-2 text-sm font-medium text-slate-900">We believe that nothing worthwhile is simple or easy, but with team work and Trust, challenges are overcome. </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <Image src={integrity} width={150} height={120}  alt='/'/>
                <p className="text-xl font-bold text-slate-700 mt-3">Ethics transparency</p>
                <p className="mt-2 text-sm font-medium text-slate-900">Integrity, full compliance, Sharia principles.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            
            <GiSprout size={80} color={'green'} />
                <p className="text-xl font-bold text-slate-700 mt-8">Professional outstanding care </p>
                <p className="mt-2 text-sm font-medium text-slate-900">Service, impeccable diligence.</p>
            </div>




        </div>

       
    </div>
               
              
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About