import React from 'react';
import Navbar from '../Component/Navbar';
import bg1 from "../assets/Bgimg.png";
import Section2 from "../Component/MasterClasscomponenet/Section2";
import Section3 from '../Component/MasterClasscomponenet/Section3';
const MasterClass = () => {
    return (
        <div>
            <div className="bg-[#f3f7f5] w-full h-auto  pt-10 px-8 md:px-10 lg:px-20 py-10   relative radio-canada-big">
                {/* Navbar */}
                <div className="w-full relative z-50">
                    <Navbar />
                </div>
                {/* Background Image */}
                <img src={bg1} className="absolute right-0 top-0 md:h-[10%] lg:h-[30%] hidden md:block" alt="Background" />
 
                {/* Heading & Breadcrumbs */}
                <div className="text-center py-4 lg:py-10">
                    <h1 className='text-[#03393C] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90.48px] relative  z-40'>Masterclass</h1>
                    <div className='flex justify-center mt-2 space-x-2 text-gray-600 text-sm md:text-base'>
                        <span className="font-bold text-[21px]">Home</span>
                        <span className='text-[21px]'>- Course 1</span>
                    </div>
                </div>
 
                {/* Course Content */}
                <div className='flex flex-col lg:flex-row mt-10 gap-10 lg:gap-40 relative'>
                    {/* Left Section - Course Description */}
                    <div className='w-full lg:w-3/5'>
                        <h2 className="text-[#03393C] font-bold text-2xl sm:text-3xl lg:text-[44px]">User Experience Design 101</h2>
                        <p className='text-[#03393C] text-sm sm:text-base lg:text-[20px] mt-2'>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                        </p>
 
                        {/* Tags */}
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className='bg-white border-1 border-[#4A9274] px-4 py-3 rounded-full shadow-md font-bold text-sm text-[#03393C]'>Entrepreneurship</span>
                            <span className='bg-white  border-1 border-[#4A9274] px-4 py-3 rounded-full font-bold shadow-md text-sm text-[#03393C]'>Entrepreneurship</span>
                            <span className='bg-white  border-1 border-[#4A9274] px-4 py-3 rounded-full font-bold shadow-md text-sm text-[#03393C]'>Entrepreneurship</span>
                        </div>
 
                        {/* What You’ll Learn Section */}
                        <div className='py-6   '>
                            <h2 className='text-lg md:text-xl lg:text-[33px] font-bold text-[#03393C]'>What you'll learn from this course</h2>
                            <p className='text-[#03393C] py-2 text-sm md:text-base'>
                                TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.
                            </p>
                            <p className='text-[#03393C] py-2 text-sm md:text-base'>
                                TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.
                            </p>
                            <p className='text-[#03393C] py-2 text-sm md:text-base'>
                                TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.
                            </p>
                           
                        </div>
                    </div>
 
                    {/* Right Section - Course Pricing & Enrollment */}
                    <div className='w-full lg:w-2/5 flex justify-end relative z-40'>
                        <div className="bg-white  shadow-[0px_10px_30px_rgba(0,0,0,0.2)]  rounded-xl overflow-hidden w-full h-[400px] md:h-[580px] lg:w-[500px] lg:h-[630px] my-6 ">
                            {/* Course Image Placeholder */}
                            <div className='px-4 py-4'>
                                <div className="w-full h-70 bg-[#A6A6A6] rounded-2xl"></div>
                            </div>
 
 
                            {/* Enroll Button */}
                            <div className="px-6 py-4">
                                <button className="w-full bg-[#4A9274] text-white font-semibold py-4 rounded-3xl">
                                    ENROLL NOW
                                </button>
                            </div>
 
                            {/* Course Details */}
                            <div className="px-6 pb-4">
                                <p className="text-[#03393C] text-sm md:text-[24px] lg:text-[33px] font-semibold">Starts on: <span className="text-[#79827F] text-sm md:text-[24px] lg:text-[27px]">20-11-2024</span></p>
                                <p className="text-[#03393C] text-sm md:text-[24px] lg:text-[33px] font-semibold">Duration: <span className="text-[#79827F] text-sm md:text-[24px] lg:text-[27px]">10 Days</span></p>
                            </div>
 
                            {/* Pricing Section */}
                            <div className="bg-[#03393C] text-white  py-4 px-4">
                                <p className="lg:text-[40px] font-bold text-sm md:text-[25px] ">
                                    ₹5300 <span className="text-gray-400 line-through text-sm md:text-[20px] lg:text-[22px]">₹12400</span>
                                </p>
                                <p className="text-sm md:text-[20px] lg:text-[33px] ">Discount on all courses</p>
                            </div>
                        </div>
                    </div>
 
                </div>
                <Section2/>
                <Section3/>
            </div>
           
        </div>
 
    );
}
 
export default MasterClass;
 
 