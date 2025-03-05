import React from 'react';
import bg1 from '../../assets/Homebg1.png';
import bg2 from '../../assets/Homebg2.png';
import icon1 from '../../assets/Icon1.png';
import icon2 from '../../assets/Icon2.png';
import icon3 from '../../assets/Icon3.png';

function Section1() {
  const cards = [
    {
      icon: icon1,
      title: "Become a Student",
      description: "Y is simply dummy text of the printing and typesetting industry.",
      buttonText: "REGISTER NOW",
    },
    {
      icon: icon2,
      title: "Become a Student",
      description: "Y is simply dummy text of the printing and typesetting industry.",
      buttonText: "REGISTER NOW",
    },
    {
      icon: icon3,
      title: "Become a Student",
      description: "Y is simply dummy text of the printing and typesetting industry.",
      buttonText: "REGISTER NOW",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#03393c] relative overflow-hidden">
      {/* Background Images */}
      <img src={bg1} className="absolute -right-2 max-w-xs md:max-w-md" alt="Background 1" />
      <img src={bg2} className="absolute left-2 bottom-10 max-w-xs md:max-w-md" alt="Background 2" />

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 pt-6 md:pt-10 px-10 md:px-10 lg:px-20 py-6 md:py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[339px] text-center"
          >
            <div className="flex justify-center">
              <div className="bg-[#0F3D3E] text-white p-4 rounded-full text-2xl">
                <img src={card.icon} className="w-10 h-10 md:w-12 md:h-12" alt="Icon" />
              </div>
            </div>
            <h3 className="mt-4 text-lg md:text-[32px] font-bold">{card.title}</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">{card.description}</p>
            <button className="mt-4 bg-[#4a9274] text-white px-4 md:px-6 py-2 rounded-3xl transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
