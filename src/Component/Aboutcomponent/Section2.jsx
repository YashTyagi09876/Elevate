import React from 'react';
import layers from '../../assets/layers.svg'
import bg1 from '../../assets/Homebg1.png';
import bg2 from '../../assets/Homebg2.png';
function Section2() {
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
    <div className="w-full h-auto bg-[#03393c] relative overflow-hidden pt-10 px-8 md:px-10 lg:px-20 py-10 radio-canada-big  ">
        <img src={bg1} className="absolute -right-2 max-w-xs md:max-w-md" alt="Background 1" />
              <img src={bg2} className="absolute left-2 bottom-10 max-w-xs md:max-w-md" alt="Background 2" />
        <div className="flex flex-col md:flex-row lg:gap-10 gap-6 px-4 lg:px-10 lg:py-6">
            {cardData.map((card, index) => (
              <div key={index} className="w-full lg:w-1/3">
                <div className={`w-full h-auto lg:h-[320px]   bg-white rounded-3xl p-8 border border-[#00000033] `}>
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
     
    </div>
  );
}

export default Section2;
