import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
   
      <div className="z-50 sticky top-0 flex  h-[80px] bg-black text-white justify-between items-center max-w-[1280px] mx-auto px-4 py-5">

        <div className="w-[30%] cursor-pointer">
          <img className="w-36 object-contain" src={logo} alt="logo" />
        </div>

        <div className="hidden lg:flex justify-center items-center w-[70%]">
          <ul className="cursor-pointer font-semibold text-xl flex justify-center items-center gap-[4rem]">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>PROPERTIES</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setShowNav(true)}
        >
          <RiMenu3Fill size={25}/>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-gray-950 text-white z-50 flex flex-col items-start p-8 transition-transform duration-500 ease-in-out ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="self-end text-3xl cursor-pointer mb-6"
          onClick={() => setShowNav(false)}
        >
          <RxCross2 />
        
        </div>

        <ul className="flex flex-col gap-8 text-xl   font-semibold">
          <li onClick={() => setShowNav(false)}>HOME</li>
          <li onClick={() => setShowNav(false)}>ABOUT US</li>
          <li onClick={() => setShowNav(false)}>PROPERTIES</li>
          <li onClick={() => setShowNav(false)}>CONTACT US</li>
        </ul>
      </div>

      {showNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowNav(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
