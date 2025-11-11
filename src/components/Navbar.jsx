import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from '../image/logo.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="top-0 sticky z-20 shadow-lg bg-black">
        <div className="flex justify-between items-center max-w-[1380px] mx-auto px-8 py-5">

          {/* Logo */}
          <div>
            <Link to="/">
              <img className='w-36 2xl:w-52' src={logo} alt="" />
            </Link>
          </div>

          {/* Large screen navbar */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-16">
              <Link to="/"><li className="text-lg 2xl:text-2xl cursor-pointer text-white transition-all duration-300 font-semibold">HOME</li></Link>
              <Link to="/about"><li className="text-lg 2xl:text-2xl cursor-pointer text-white transition-all duration-300 font-semibold">ABOUT US</li></Link>
              <Link to="/properties"><li className="text-lg 2xl:text-2xl cursor-pointer text-white transition-all duration-300 font-semibold">PROPERTIES</li></Link>
              <Link to="/contact"><li className="text-lg 2xl:text-2xl cursor-pointer text-white transition-all duration-300 font-semibold">CONTACT US</li></Link>
              
            </ul>
          </div>

          <div>

          </div>

          {/* Small screen menu icon */}
          <div className="block lg:hidden cursor-pointer text-white" onClick={toggleMenu}>
            {menuOpen ? <RiCloseFill size={30} /> : <RiMenu3Fill size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}>
          <ul className="flex flex-col gap-4 px-8 text-end">
            <Link to="/" onClick={toggleMenu}><li className="text-lg cursor-pointer text-white transition-all duration-300 font-semibold">HOME</li></Link>
            <Link to="/about" onClick={toggleMenu}><li className="text-lg cursor-pointer text-white transition-all duration-300 font-semibold">ABOUT US</li></Link>
            <Link to="/properties" onClick={toggleMenu}><li className="text-lg cursor-pointer text-white transition-all duration-300 font-semibold">PROPERTIES</li></Link>
            <Link to="/contact" onClick={toggleMenu}><li className="text-lg cursor-pointer text-white transition-all duration-300 font-semibold">CONTACT US</li></Link>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
