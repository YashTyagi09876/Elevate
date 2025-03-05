import React from 'react'
import union from '../../assets/Icon4.png'
import layers from '../../assets/layers.svg'
const Section4 = () => {
    const cardData = [
        {
          title: "Expert Solutions",
          description: "is simply dummy text of the printing and typesetting industry.",
          bgColor: "bg-[#4a9274]", // First card with different color
        },
        {
          title: "Expert Solutions",
          description: "is simply dummy text of the printing and typesetting industry.",
          bgColor: "bg-white", // White background for other cards
        },
        {
          title: "Expert Solutions",
          description: "is simply dummy text of the printing and typesetting industry.",
          bgColor: "bg-white",
        },
      ];
    return (
        <div className="w-full h-auto bg-[#f3f7f5]  pt-10 px-4 md:px-10 lg:px-20 py-10">
            <div className='flex md:flex-row h-full  flex-col justify-between items-center gap-10 px-6 md:px-10 lg:px-10 py-10  '>
                <div className='w-full lg:w-[70%]  '>
                    <h1 className='lg:text-[70px] leading-tight font-bold text-[#03393C]'>Expert solutions for Students</h1>
                    <span className='text-[16px] lg-[w-[90%] pt-4'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    </span>
                </div>
                <div className='w-full lg:w-[30%]  '>
                    <div className='w-full h-auto  lg:h-[320px] bg-[#4a9274] rounded-3xl p-8  '>
                        <div className='flex flex-col lg:gap-4 '>
                            <div className='w-[90px] h-[90px] rounded-full bg-white flex justify-center items-center'>
                                <img src={union} className='w-8 h-8 object-cover' />
                            </div>
 
                            <h1 className='text-white text-[20px] font-bold lg:text-[30px]'>Expert Solutions</h1>
                            <p className='lg:text-[14px] text-[#FFFFFF] pt-4'> is simply dummy text of the printing and typesetting industry.</p>
                            <button className='w-[60%] bg-[#03393c] rounded-3xl px-2 py-2 text-white lg:text-[10px] '>KNOW MORE</button>
                        </div>
 
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:gap-10 gap-6 px-4 lg:px-10 lg:py-6">
      {cardData.map((card, index) => (
        <div key={index} className="w-full lg:w-1/3">
          <div className={`w-full h-auto lg:h-[320px]  rounded-3xl p-8 border border-[#00000033]`}>
            <div className="flex flex-col lg:gap-4">
              <div className="w-[90px] h-[90px] rounded-full bg-[#03393c] flex justify-center items-center">
                <img src={layers} className="w-8 h-8 object-cover" />
              </div>
              <h1 className="text-[#03393c] text-[20px] font-bold lg:text-[30px]">{card.title}</h1>
              <p className="lg:text-[14px] text-[#03393C]">{card.description}</p>
              <div className="py-4">
                <button className="w-[60%] bg-[#03393c] rounded-3xl px-2 py-2 text-white lg:text-[10px]">
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
            <div>
 
            </div>
        </div>
 
    )
 
}
export default Section4;