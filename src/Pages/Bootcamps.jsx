import React from 'react'
import Navbar from '../Component/Navbar'
import bg1 from "../assets/Bgimg.png";
function Bootcamps() {
    const courses = [
        {
          title: "User Experience Design 101 Essentials",
          description:
            "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
          startsIn: "10 Days",
          price: "₹5300",
          originalPrice: "₹14600",
          rating: "★★★★★",
          category: "Web Design",
        },
        {
          title: "User Experience Design 102 Essentials",
          description:
            "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
          startsIn: "15 Days",
          price: "₹7500",
          originalPrice: "₹16000",
          rating: "★★★★☆",
          category: "Web Design",
        },
        {
          title: "User Experience Research Methods",
          description:
            "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
          startsIn: "20 Days",
          price: "₹6800",
          originalPrice: "₹15000",
          rating: "★★★★★",
          category: "Research",
        },
        {
            title: "User Experience Research Methods",
            description:
              "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
            startsIn: "20 Days",
            price: "₹6800",
            originalPrice: "₹15000",
            rating: "★★★★★",
            category: "Research",
          },
          {
            title: "User Experience Research Methods",
            description:
              "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
            startsIn: "20 Days",
            price: "₹6800",
            originalPrice: "₹15000",
            rating: "★★★★★",
            category: "Research",
          },
          {
            title: "User Experience Research Methods",
            description:
              "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ..",
            startsIn: "20 Days",
            price: "₹6800",
            originalPrice: "₹15000",
            rating: "★★★★★",
            category: "Research",
          },
          {
            title: "User Experience Research Methods",
            description:
              "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
            startsIn: "20 Days",
            price: "₹6800",
            originalPrice: "₹15000",
            rating: "★★★★★",
            category: "Research",
          },
          {
            title: "User Experience Research Methods",
            description:
              "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
            startsIn: "20 Days",
            price: "₹6800",
            originalPrice: "₹15000",
            rating: "★★★★★",
            category: "Research",
          },
          {
            title: "User Experience Research Methods",
            description:
              "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero Nam scelerisque ....",
            startsIn: "20 Days",
            price: "₹6800",
            originalPrice: "₹15000",
            rating: "★★★★★",
            category: "Research",
          },
      ];
  return (
    <div className="bg-[#f3f7f5] w-full h-auto  relative  pt-10 px-4 md:px-10 lg:px-20 py-10 radio-canada-big">
    <div className="w-full relative z-50">
        <Navbar />
    </div>
    <img src={bg1} className="absolute right-0 top-0 h-[35%]" alt="Background" />
         
         <div className=' relative  py-4'>
            <h1 className='text-[#03393C] font-bold md:text-[90.48px] text-4xl text-center pt-10  '>Bootcapms</h1>
            <div className='flex justify-center '>
            <span className='text-center text-[21.11px] text-[#03393C]'>Home </span>
            <span className=' text-[21.11px]'>- About</span>
         </div>
         </div>
    
    
         <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-30 md:py-10 ">
        {courses.map((course, index) => (
          <div
            key={index}
            className= " group bg-white hover:bg-[#03393c] shadow-lg rounded-2xl  overflow-hidden relative transition duration-500 ease-in-out cursor-pointer "
          >
            <div className='px-2 py-2'>
            <div className="h-40 rounded-2xl bg-gray-300  "></div>
            </div> {/* Placeholder for Image */}
            <div className=" ">
              <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded absolute top-36 right-10 top">
                {course.category}
              </span>
              <h3 className=" md:w-[95%] w-full md:text-[24px]  text-[16px] font-bold mt-2 px-4  text-[#03393c] group-hover:text-white">{course.title}</h3>
              <p className="text-[12px] px-4 text-gray-600 mt-1 group-hover:text-white">{course.description}</p>
              <p className="text-sm font-semibold mt-2 md:text-[24px] text-[12px] px-4 group-hover:text-white">Starts on: <span className='text-[#4A9274] group-hover:text-white'>{course.startsIn}</span></p>
              <div className="flex items-center gap-6  justify-between mt-3 bg-[#03393c]  group-hover:bg-[#4a9274] py-6 px-6 ">
                <span className="text-yellow-500 font-bold ">{course.rating}</span>
              
                <div className="text-right flex items-center">
                  <span className="text-lg font-semibold text-[#dceae5] md:text-[30px] text-[15px]">{course.price}</span>
                  <span className="text-[16.44px] line-through text-[#dceae5] ml-2">
                    {course.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
  )
}

export default Bootcamps