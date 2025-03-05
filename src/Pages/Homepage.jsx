import React from 'react'
import Navbar from '../Component/Navbar'
import bg1 from "../assets/Bgimg.png";
import rightimg from '../assets/Homeright.png'
import Home1 from '../assets/Home.png'
import Section1 from '../Component/Homepagecompontent/Section1'
import Star1 from '../assets/Star1.svg'
import Star2 from '../assets/Star2.svg'
import Star3 from '../assets/Star3.svg'
import Section2 from '../Component/Homepagecompontent/Section2';
import Section3 from '../Component/Homepagecompontent/Section3';
import Section4 from '../Component/Homepagecompontent/Section4'
import Section5 from '../Component/Homepagecompontent/Section5'
import Section6 from '../Component/Homepagecompontent/Section6'
const Homepage = () => {
    return (
        <div className=''>
            <div className="bg-[#f3f7f5] w-full h-auto  relative pt-10 px-8 md:px-10 lg:px-20 py-10">
                <div className="w-full relative z-50">
                    <Navbar />
                </div>
                <img src={bg1} className="absolute right-0 top-0 h-[70%]" alt="Background" />
                <div className='flex flex-col md:flex-row gap-32 md:gap-0 py-20 '>

                    {/* left section */}
                    <div className='flex flex-col md:w-1/2 w-full relative '>
                        <img src={Star1} className='absolute -top-6 -left-6  w-6 md:w-8 lg:w-10' />
                        <img src={Star2} className='absolute md:-bottom-20 -bottom-20 md:-left-10 w-20 md:w-20 lg:w-24' />
                        <img src={Star3} className='absolute top-56 right-6 md:top-1/3 md:right-20 w-6 md:w-10 lg:w-12' />
                        <h1 className='md:text-[90.48px] text-5xl  text-[#03393C] md:leading-24  leading-12   font-bold md:pt-10 pt-2'>Secure & Safe hassle-free Solution.</h1>
                        <p className='md:text-[21.11px] text-[12px] text-[#03393C] font-semibold md:pt-10 pt-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <div className='flex  gap-4 md:py-10 py-6'>
                            <button className='bg-[#f3f7f5] font-bold px-4 py-2 rounded-3xl md:text-[18.2px] text-xs border-2  border-[#336761]  text-[#03393C]'>Become a Student</button>
                            <button className='bg-[#f3f7f5] font-bold px-4 py-2 rounded-3xl md:text-[18.2px] text-xs border-2  border-[#336761] text-[#03393C]'>Become a entrepreneur</button>
                            <button className='bg-[#f3f7f5] font-bold px-4 py-2 rounded-3xl md:text-[18.2px] text-xs border-2  border-[#336761] text-[#03393C]'>Become an Mentor</button>
                        </div>
                        <div className='flex flex-cols items-center md:items-start justify-center md:justify-start'>
                            <button className='bg-[#4a9274]  border-[#224743]  px-4 py-2 rounded-full text-[18.2px]  text-white '>Register NOw</button>
                        </div>
                    </div>
                    {/* right section */}

                    <div className='md:w-1/2 w-full flex items-center justify-end relative'>
                        <img src={Star2} className='absolute -top-6 -left-6  w-6 md:w-8 lg:w-10' />
                        <img src={Star1} className='absolute md:-bottom-12 -bottom-6 left-16 w-12 md:w-10 lg:w-12' />
                        <img src={rightimg} className='' />
                        <img src={Home1} className='absolute -top-[56px] w-[535px]' />
                       
                        <div className=' absolute flex  md:w-[400px] w-[250px] h-[170px]     rounded-2xl border-2 border-white md:bottom-16 md:left-56  -bottom-10 left-1/2 -translate-x-1/2 overflow-hidden'>
                            <div className='w-1/2 bg-[#2a5557] rounded-l-2xl py-4'>
                                <h1 className='md:text-[32px] text-[16px] text-white items-center font-bold px-4'>Business</h1>
                                <p className='text-[11px] text-white items-center px-4 py-2'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>

                            <div className='w-1/2 bg-[#4a9274] -rounded-t-3xl py-4 '>
                                <h1 className='md:text-[32px] text-[16px] text-white items-center font-bold px-4'>Education</h1>
                                <p className='text-[11px] text-white items-center px-4 py-2'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4/>
            <Section5 />
            <Section6 />
        </div>
    )
}

export default Homepage