import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"; // social icons

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-[1280px] mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & description */}
        <div className="flex-1 md:max-w-[35%]">
          <img src={logo} alt="logo" className="w-36 mb-4 object-contain cursor-pointer mx-auto md:mx-0" />
          <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
            Shambhav Bharat is a trusted real estate company dedicated to helping you find your dream home. We specialize in residential and commercial properties, providing transparent deals and exceptional customer service.
          </p>
        </div>

        {/* Pages / Navigation */}
        <div className="flex-1  md:text-left">
          <ul className="flex flex-col gap-2 text-center text-gray-300 text-sm md:text-base">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/properties" className="hover:text-yellow-400 transition-colors">Properties</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Address */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-gray-300 text-sm md:text-base">Address: Ithum Tower, Sector - 62, Noida, Uttar Pradesh</p>
          <p className="text-gray-300 text-sm md:text-base">Email: sambhavbharatprop@gmail.com</p>
          <p className="text-gray-300 text-sm md:text-base">Contact: +91 8368067567</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl text-yellow-400">
            <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 pt-4 text-center text-gray-500 text-xs md:text-sm">
        &copy; 2025 Shambhav Bharat. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
