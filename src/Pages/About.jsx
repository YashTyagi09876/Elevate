import React from 'react'
import Navbar from '../Component/Navbar'
import bg1 from "../assets/Bgimg.png";
import Section1 from "../Component/Aboutcomponent/Section1";
import Section2 from "../Component/Aboutcomponent/Section2";
import Section3 from "../Component/Aboutcomponent/Section3";
import Section4 from "../Component/Aboutcomponent/Section4";
import Section5 from '../Component/Aboutcomponent/Section5'
const About = () => {
    return (
        <div className='overflow-x-hidden'>
        <div className="bg-[#f3f7f5] w-full h-auto  pt-10 px-8 md:px-10 lg:px-20 py-10  relative radio-canada-big ">
                {/* Navbar */}
                <div className="w-full relative z-50">
                    <Navbar />
                </div>
                {/* Background Image */}
                <img src={bg1} className="absolute right-0 top-0 md:h-[10%] lg:h-[50%] hidden md:block " alt="Background" />
                <img src={bg1} className="absolute z-40 right-0 top-0 md:h-[10%] lg:h-[60%] hidden md:block" alt="Background" />
                <Section1/>
        </div>
        
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
      </div>  
    )
}
 
export default About
 