import React from 'react'
import rightimg from '../../assets/left.svg'
import Card1 from '../../assets/Card1.svg'
import Card2 from '../../assets/Card2.svg'
import icon1 from '../../assets/Icon4.png'
function Section2() {
    const cardData = [
        {
          icon: icon1,
          title: "Worldwide Exposure",
          description: "Swhen an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
       
        },
        {
            icon: icon1,
          title: "Worldwide Exposure",
          description: "Swhen an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
         
        },
        {
            icon: icon1,
          title: "Worldwide Exposure",
          description: "Twhen an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
        
        },
      ];
      
  return (
    <div className=' w-full h-auto bg-[#f3f7f5] flex flex-col  pt-10 px-4 md:px-10 lg:px-20 py-10'>
        <div className='md:w-[90%] w-full  mx-auto flex flex-col  items-center '>
        <h1 className='md:text-[73px] text-4xl font-bold text-[#03393C]'>Boost Your Business To next level</h1>
        <p className='text-[16px] text-[#03393C] md:w-[80%] w-full    text-center py-6'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <br/>1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
        </div>
    
    <div className='flex py-6  flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 w-full  relative ' >
        <img src={rightimg} className='' />
        <img src={Card1} className=' md:-bottom-10  bottom-0 md:-left-6  -left-2 absolute' />
        <img src={Card2} className='  md:-top-4 -top-20 md:-right-28 -right-20 absolute' />
       
        </div>
        <div className='md:w-1/2 w-full '>
        <div className="grid grid-cols-1 gap-10 px-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`group p-6 rounded-4xl shadow-lg border border-grayz transition-all duration-300 ease-in-out ${
              card.isHighlighted ? "bg-[#4a9274] text-white" : "bg-white"
            } hover:bg-[#4a9274] hover:text-white`}
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="p-4 rounded-full text-2xl bg-[#0F3D3E] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-[#0F3D3E] text-white">
                <img src={card.icon} alt="icon" className=" group-hover:invert" />
              </div>

              {/* Text */}
              <div className="text-[#03393C] transition-all duration-300 ease-in-out group-hover:text-white">
                <h3 className="mt-4 md:text-[32px] text-[18px] font-bold">{card.title}</h3>
                <p className="text-gray-600 mt-2 group-hover:text-white">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>       
        </div>

    </div>
    </div>
  )
}

export default Section2