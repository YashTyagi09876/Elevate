import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
 
const mentors = [
    {
        id: 1,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most.',
        bgColor: '#a6a6a6'
    },
    {
        id: 2,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most..',
        bgColor: '#b6b6b6'
    },
    {
        id: 3,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most.',
        bgColor: '#c6c6c6'
    },
    {
        id: 4,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most.',
        bgColor: '#d6d6d6'
    },
    {
        id: 5,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most.',
        bgColor: '#d6d6d6'
    },
    {
        id: 6,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most.',
        bgColor: '#d6d6d6'
    },
    {
        id: 7,
        title: 'Mentor ',
        description: 'Your trusted source for fast, easy, and secure  when you need them most.',
        bgColor: '#d6d6d6'
    },
    {
        id: 8,
        title: 'Mentor 4',
        description: 'Expert in Cybersecurity.',
        bgColor: '#d6d6d6'
    },
    {
        id: 9,
        title: 'Mentor 4',
        description: 'Expert in Cybersecurity.',
        bgColor: '#d6d6d6'
    },
    {
        id: 9,
        title: 'Mentor 4',
        description: 'Expert in Cybersecurity.',
        bgColor: '#d6d6d6'
    }
 
];
 
const Section5 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
 
    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? mentors.length - 2 : prev - 1
        );
    };
 
    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev >= mentors.length - 2 ? 0 : prev + 1
        );
    };
 
    return (
        <div className='w-full h-auto   bg-[#03393c]  '>
            <div className='    pt-10 px-4 md:px-10 lg:px-20 py-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#ffffff] text-base md:text-[4xl] lg:text-[73px] font-bold'>Expert Mentor For Students</h1>
                <div className='flex md:gap-4'>
                    <span
                        className='w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-[#03393C] hover:text-white cursor-pointer'
                        onClick={handlePrev}
                    >
                        <FaArrowLeftLong size={30} />
                    </span>
                    <span
                        className='w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-[#03393C] hover:text-white cursor-pointer'
                        onClick={handleNext}
                    >
                        <FaArrowRightLong size={30} />
                    </span>
                </div>
            </div>
            <div className='overflow-hidden w-full mt-6'>
                <div
                    className='flex gap-6 transition-transform duration-300 py-6 px-4'
                    style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
                >
                    {mentors.map((mentor, index) => (
                        <div
                            key={mentor.id}
                            className={`w-full sm:w-[300px] md:w-[350px] lg:w-[400px]  transition-all duration-300 rounded-2xl px-4 py-4 flex-shrink-0 ${hoveredIndex === index ? 'bg-[#4a9274] scale-105 h-[380px]' : 'bg-white h-[350px]'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className='w-full h-[178px] rounded-2xl' style={{ backgroundColor: mentor.bgColor }}></div>
                            <div className='py-4 flex flex-col gap-4'>
                                <h1 className='text-[#03393C] text-3xl font-bold px-4'>{mentor.title}</h1>
                                <p className='text-[#03393C] text-sm px-4'>{mentor.description}</p>
                                {hoveredIndex === index && (
                                    <button className='w-[60%] bg-[#01210f] rounded-full text-white px-10 py-2'>KNOW MORE</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};
 
export default Section5;