import { useState, useEffect } from "react";
// import Right from "../assets/Rectangle.svg";
import icon from "../assets/Icon5.png";
import icon1 from "../assets/Icon6.png";
import icon2 from "../assets/Icon7.png";
export default function MembershipPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        isOpen && (
            <div className="fixed inset-0 flex flex-col md:flex-row items-center justify-center  bg-opacity-50 radio-canada-big ">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg md:max-w-6xl max-w-4xl h-auto w-full relative ">
                    {/* Close Button */}
                   <div className="" >
                    <button
                        className="absolute md:-top-10 md:-right-3 -top-3 -right-3 bg-[#104042] p-6 rounded-full w-16 h-16 text-white font-bold  border-4 border-white flex justify-center items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                    </div>
                    {/* Membership Plans */}
                    <div className="  grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4  max-h-[750px] overflow-y-scroll ">
                        {/* Student Plan */}
                        <div className=" group md:px-8 px-4 py-4  bg-white  hover:bg-[#104042] rounded-lg shadow relative  ">
                            {/* <img src={Right} className="absolute top-0 right-0 group-hover:bg-[#4a9274]  " /> */}
                            <div className="absolute top-0 right-0 w-24 h-24 group-hover:bg-[#4a9274] bg-[#104042] rounded-bl-full"></div>
                            <img src={icon} className="absolute top-8  right-6" />
                            <h2 className="text-lg  text-[#000000] group-hover:text-white md:pt-8 pt-4">BECOME A </h2>
                            <h2 className="md:text-[41.33px] text-xl  font-bold text-[#000000] group-hover:text-white ">Student </h2>
                            <p className="text-[15.58px] text-[#000000] py-6 group-hover:text-white">Monthly Packages for Single Person</p>
                            <hr className="border-b border-gray-300 "/>
                            <div className="text-lg text-gray-600 flex flex-col gap-4  pt-6">
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                            </div>
                           <div className="py-8">
                            <button className="mt-4 bg-[#4a9274] text-white px-4 py-4 rounded-4xl w-full text-[16px]">
                                REGISTER NOW
                            </button>
                            </div>
                        </div>

                        {/* Entrepreneur Plan */}
                        <div className="group p-4 bg-white hover:bg-[#104042]  rounded-lg shadow relative overflow-hidden">
                            {/* <img src={Right} className="absolute top-0 right-0 " /> */}
                            <div className="absolute top-0 right-0 w-24 h-24 group-hover:bg-[#4a9274] bg-[#104042] rounded-bl-full"></div>
                            <img src={icon} className="absolute top-8  right-6" />
                            <h2 className="text-lg  text-[#000000] md:pt-8 pt-4 group-hover:text-white">BECOME A </h2>
                            <h2 className="md:text-[41.33px] text-xl  font-bold group-hover:text-white text-[#000000]">Enterpreneur </h2>
                            <p className="text-[15.58px] text-[#000000]  group-hover:text-white py-6">Monthly Packages for Single Person</p>
                            <hr className="border-b border-gray-300 "/>
                            <div className="text-lg text-gray-600 flex flex-col gap-4  pt-6">
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px] group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                            </div>
                           <div className="py-8">
                            <button className="mt-4 bg-[#4a9274] text-white px-4 py-4 rounded-4xl w-full text-[16px]">
                                REGISTER NOW
                            </button>
                            </div>
                        </div>

                        {/* Mentor Plan */}
                        <div className=" group hover:bg-[#104042] p-4 text-white rounded-lg shadow relative overflow-hidden">
                        {/* <img src={Right} className="absolute top-0 right-0 " /> */}
                        <div className="absolute top-0 right-0 w-24 h-24 group-hover:bg-[#4a9274] bg-[#104042] rounded-bl-full"></div>
                        <img src={icon2} className="absolute top-8  right-6 object-cover" />
                        <h2 className="text-lg  text-[#000000] md:pt-8 pt-4 group-hover:text-white">BECOME A </h2>
                            <h2 className="md:text-[41.33px] text-xl  font-bold group-hover:text-white  text-[#000000]">Mentor </h2>
                            <p className="text-[15.58px] text-[#000000] py-6  group-hover:text-white">Monthly Packages for Single Person</p>
                            <hr className="border-b border-gray-300 "/>
                            <div className="text-lg text-gray-600 flex flex-col gap-4  pt-6">
                              <span className="text-[#104042] text-[17px]  group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px]  group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px]  group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px]  group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                              <span className="text-[#104042] text-[17px]  group-hover:text-white"> <span className="text-[#3b7d67]">✔ </span>is simply dummy text</span>
                            </div>
                           <div className="py-8">
                            <button className="mt-4 bg-[#4a9274] text-white px-4 py-4 rounded-4xl w-full text-[16px]">
                                REGISTER NOW
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}