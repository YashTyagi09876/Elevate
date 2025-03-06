import React from 'react'
import { MdOutlineCheck } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
// import startup from '../assets/startup.jpg'
const Section5 = () => {
    return (
        <div className=' h-auto flex md:flex-row flex-col gap-10 lg:gap-30 px-6 lg:px-10 xl:px-20 py-6 lg:py-20   justify-center  bg-[#f3f7f5] radio-canada-big'>
            <div className='w-full lg:w-[60%] '>
                <div className='flex flex-col lg:gap-4'>
                    <h1 className='text-xl md:text-2xl lg:text-[60px] font-bold text-[#03393C]'>Reviews from our Student</h1>
                    <p className='text-xl text-[10px] lg:text-[12px] text-[#000000]  lg:leading-6 '> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
 
                <div className='flex flex-col lg:py-4 lg:gap-6'>
                    <span className='flex items-center gap-2 text-sm lg:text-xl text-[#1E1E1E] font-semibold'><MdOutlineCheck size={20} className='text-[#000000]' />A Legacy of Trust and Outstanding Reputation</span>
                    <span className='flex items-center gap-2 text-sm lg:text-xl text-[#1E1E1E] font-semibold'><MdOutlineCheck size={20} className='text-[#000000]' />Enjoy Valuable Advantages</span>
                    <span className='flex items-center gap-2 text-sm lg:text-xl text-[#1E1E1E] font-semibold'><MdOutlineCheck size={20} className='text-[#000000]' />Simple and Fast Process</span>
                </div>
            </div>
            <div className='w-full lg:w-1/2 h-auto flex md:flex-row flex-col relative '>
                <div className='md:w-[537px] h-auto bg-[#A6A6A6] rounded-3xl relative'>
                    {/* <div>
                        <img src={startup} alt="" className='w-full h-[500px] object-cover rounded-3xl' />
                    </div> */}
                    <div className=' absolute md:bottom-14 translate-x-1/2 md:-left-56 w-[1/2] lg:w-[250px] lg:h-[100px] flex gap-4 flex-col bg-[#ffffff] rounded-xl p-4 justify-center border-2 border-gray-200 shadow-[0px_22px_44px_0px_rgba(0,0,0,0.12)] '>
                        <span className='flex gap-2'><IoMdStar size={20} className='text-[#ff7f49]' /><IoMdStar size={20} className='text-[#ff7f49]' /><IoMdStar size={20} className='text-[#ff7f49]' /><IoMdStar size={20} className='text-[#ff7f49]' /><IoMdStar size={20} className='text-[#ff7f49]' /></span>
                        <span className='flex gap-4 font-semibold' >13k rating <span className='text-[#A6A6A6]'>(4.7 Rating)</span></span>
                    </div>
 
                </div>
                <div>
                   </div>
            </div>
 
        </div>
    )
}
 
export default Section5