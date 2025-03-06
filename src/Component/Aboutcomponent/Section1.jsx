import React from 'react';
import bg2 from '../../assets/Aboutimg.svg'
import star1 from '../../assets/Star1.svg'
const Section1 = () => {
    return (
        <div className="flex flex-col md:flex-row  justify-between gap-20 lg:gap-6  py-6 lg:py-12 ">
            {/* Left Section */}
            <img src={star1} className='w-8 h-8 relative  -top-8 left-6 '/>
            <div className="w-full md:w-1/2 flex  relative">
           
                <div className="w-[500px] h-[500px] bg-[#03393c] rounded-3xl relative">
                    <img src={bg2} className='w-full h-full object-cover' />
                    <div className="w-50 h-50 bg-[#4A9274] rounded-2xl absolute bottom-[-35px] -right-10 border-4 border-[#D8E5E1]"></div>
                </div>
                <img src={star1} className='w-20 h-20 relative  top-40 left-4'/>
            </div>
 
            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col text-left  items-end  gap-10 relative z-60 ">
                <h2 className="text-2xl md:text-[40px] lg:text-[60px] font-bold text-[#03393c] ">About Our Elevate Edge</h2>
                <p className="text-gray-700 text-xl md:text-[12px] lg:text-[16px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum has been the industry’s<br/>
                    standard dummy text ever since the 1500s.
 
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
 
                <button className=" w-full lg:w-[30%] px-6 py-2 bg-[#4A9274] text-white font-bold rounded-3xl border-1 border-[#03393C]">
                    REGISTER NOW
                </button>
                <img src={star1} className='w-8 h-8 relative  -bottom-10 left-6'/>
            </div>
        </div>
    );
}
export default Section1;