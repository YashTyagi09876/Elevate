import React from 'react'
import bg1 from '../../assets/Homebg1.png'
import bg2 from '../../assets/Homebg2.png'

function Section3() {
  const stats = [
    { id: 1, value: "20+", label: "Years of Excellent" },
    { id: 2, value: "1,379+", label: "Expert Members" },
    { id: 3, value: "90%", label: "Problem Solved" },
  ];
  return (
    <div className='w-full h-auto bg-[#03393c] relative  '>
      
      <img src={bg1} className= 'absolute -right-2'/>
      <img src={bg2} className= 'absolute left-2 bottom-10'/>

      <div className="flex  flex-col md:flex-row items-center gap-10 pt-10 px-6 md:px-10 lg:px-20 py-10 ">
        <div className='md:w-1/2 w-full    '>
       <h1 className='md:text-[73px] text-4xl font-bold text-white'>Statistics show Reliability.</h1>
      </div>
      <div className='md:w-1/2 w-full flex justify-end'>
      <p className='md:text-[16.59px] text-[12px] text-white md:w-[80%] w-full  md:px-10 '>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
      
      </div>
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white py-6">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold">{stat.value}</h2>
            <p className="text-lg mt-2 opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
</div>
  )
}

export default Section3