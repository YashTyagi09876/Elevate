import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/Logo2.png";
function Footer() {
  return (
    <footer className="bg-[#073C3F] text-white  pt-10 px-4 md:px-10 lg:px-20 py-10 ">
      <div className="flex flex-wrap justify-between">
        {/* Left Section */}
        <div className=" w-1/2 ">
          <h2 className="text-2xl font-semibold flex  gap-2">
            <img src={logo} alt="Logo" className="h-10 md:h-20" />
          </h2>
          <p className="mt-2 text-gray-300 text-[21.11px] w-[70%]">
          Contact us for the business and startups Contact us for the business and startups
          </p>
          <div className="mt-4  md:w-[60%] w-[30%] text-white   flex rounded-2xl overflow-hidden relative py-2 border-2 border-gray-600">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2  text-white outline-none flex-1"
            />
            <button className="bg-[#4a9274] px-4 py-2 text-white absolute right-4 rounded-2xl">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-6 text-xl">
            <FaFacebookF  size={16} className="hover:bg-white  hover:text-[#4a9274]  rounded-full"  />
            <FaLinkedinIn size={20} className="hover:bg-white  hover:text-[#4a9274]  rounded-full" />
            <FaTwitter    size={20} className="hover:bg-white  hover:text-[#4a9274]  rounded-full"/>
          </div>
        </div>

        {/* Links */}
        <div className="  grid grid-cols-1 md:grid-cols-3  gap-8">
      
        <div >
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li className="cursor-pointer hover:text-white">About us</li>
            <li className="cursor-pointer hover:text-white">Career</li>
            <li className="cursor-pointer hover:text-white">Blogs</li>
            <li className="cursor-pointer hover:text-white">Testimonial</li>
            <li className="cursor-pointer hover:text-white">Contact us</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-lg ">Others</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li className="cursor-pointer hover:text-white">Success stories</li>
            <li className="cursor-pointer hover:text-white">Career</li>
            <li className="cursor-pointer hover:text-white">Blogs</li>
            <li className="cursor-pointer hover:text-white">Home </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg ">Contact Us</h3>
          <p className="mt-2 text-gray-300">Sample@gmail.com</p>
          <p className="text-gray-300">+1 (430) 5255-0103</p>
        </div>
      </div>
       </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-sm flex flex-col md:flex-row justify-between items-center text-gray-300">
        <p className="text[18.81px]">© Copyright 2024 Elevate Edge. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms And Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
