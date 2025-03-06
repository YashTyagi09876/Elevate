import React from 'react'
import Navbar from '../Component/Navbar';
import bg1 from "../assets/Bgimg.png";
function Ourmentors() {
    const courses = [
        {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
         
          {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
          {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
          {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
          {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
           {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
          {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them.",
         
          },
          {
            title: "Mentors",
            description:
              "Your trusted source for fast, easy, and secure  when you need them..",
         
          },
      ];

  return (
    <div className="bg-[#f3f7f5] w-full h-auto  relative  pt-10 px-4 md:px-10 lg:px-20 py-10 radio-canada-big">
    <div className="w-full relative z-50">
        <Navbar />
    </div>
    <img src={bg1} className="absolute right-0 top-0 h-[40%]" alt="Background" />
         
         <div className=' relative  py-4'>
            <h1 className='text-[#03393C] font-bold md:text-[90.48px] text-4xl text-center pt-10  '>Our Mentors</h1>
            <div className='flex justify-center '>
            <span className='text-center text-[21.11px] text-[#03393C]'>Home </span>
            <span className=' text-[21.11px]'>- About</span>
         </div>
         </div>
    
    
         <div className="  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-30 md:py-10 ">
        {courses.map((course, index) => (
          <div
            key={index}
            className= " group bg-white hover:bg-[#03393c] shadow-lg rounded-2xl  overflow-hidden relative transition duration-900 ease-in-out cursor-pointer "
          >
            <div className='px-2 py-2'>
            <div className="h-40 rounded-2xl bg-gray-300  "></div>
            </div> {/* Placeholder for Image */}
            <div className=" ">
             <h3 className=" md:w-[95%] w-full md:text-[24px]  text-[16px] font-bold mt-2 px-4  text-[#03393c] text-center group-hover:text-white">{course.title}</h3>
              <p className="text-[12px] px-4 pb-4 text-gray-600 mt-1 group-hover:text-white text-center">{course.description}</p>
             
             
            </div>
          </div>
        ))}
      </div>
     </div>
  )
}

export default Ourmentors