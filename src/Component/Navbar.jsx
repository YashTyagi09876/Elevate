import React, { useState } from "react";
import {Link} from "react-router-dom"
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Popup from "./Popup"; 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  

  return (
    
     <>
      <div className="w-full h-[75.4px]  flex items-center bg-white rounded-2xl z-40 px-4 md:px-8 relative ">
        <div className="w-1/2 flex items-center">
         <Link to='/'> <img src={logo} alt="Logo" className="h-16" /></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:w-[70%]  gap-6 md:gap-4 justify-evenly items-center">
          <div className=" md:w-[60%] w-full flex items-center justify-between md:text-[18.2px] text-sm">
            <Link to ='/' className="cursor-pointer">Home</Link>
            <Link to ='/about' className="cursor-pointer">About Us</Link>
            <span className="cursor-pointer">Services</span>
            <Link to ='/contact' className="cursor-pointer">Contact Us</Link>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#4a9274] px-4 py-2 rounded-xl text-white">STARTUP</button>
            <button onClick={() => setIsPopupOpen(true)}   className="bg-[#03393c] px-4 py-2 rounded-xl text-white">STUDENT</button>
            {isPopupOpen && <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-1/2 justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-md py-4 md:hidden z-50">
          <div className="flex flex-col items-center gap-4 text-lg">
            <Link to ='/' className="cursor-pointer">Home</Link>
            <Link to ='/about' className="cursor-pointer">About Us</Link>
            <span className="cursor-pointer">Services</span>
            <Link to ='/contact' className="cursor-pointer">Contact Us</Link>
            <button className="bg-[#4a9274] px-4 py-2 rounded-xl text-white w-40">STARTUP</button>
            <button onClick={() => setIsPopupOpen(true)}  className="bg-[#03393c] px-4 py-2 rounded-xl text-white w-40">STUDENT</button>
            {isPopupOpen && <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />}
          </div>
        </div>
      )}
      </div>
</>
  );
}

export default Navbar;
