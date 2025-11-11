import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../image/logo.jpg';

const Footer = () => {
    return (
        <footer className="text-white py-10 px-6 mt-20 border-t border-gray-700">
            <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

                {/* Left Side - Company Info */}
                <div className="text-center md:text-left max-w-sm">
                    <Link to="/">
                        <img className='w-36 mx-auto md:mx-0' src={logo} alt="Shambhav Bharat Logo" />
                    </Link>
                    <p className="text-lg mt-6 leading-relaxed">
                        Shambhav Bharat is a trusted real estate company dedicated to helping you find your dream home. We specialize in residential and commercial properties, providing transparent deals and exceptional customer service.
                    </p>
                </div>

                {/* Middle - Navigation Links */}
                <div className="flex flex-col text-sm md:text-base font-medium items-center space-y-2">
                    <Link to="/" className="hover:text-gray-300 transition duration-300 text-lg 2xl:text-xl">Home</Link>
                    <Link to="/about" className="hover:text-gray-300 transition duration-300 text-lg 2xl:text-xl">About Us</Link>
                    <Link to="/properties" className="hover:text-gray-300 transition duration-300 text-lg 2xl:text-xl">Properties</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition duration-300 text-lg 2xl:text-xl">Contact Us</Link>
                </div>

                {/* Right Side - Contact Info & Social Media */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 mt-4 md:mt-0">
                    <p className="text-lg 2xl:text-xl leading-relaxed">
                        Address: 2nd Floor, SF33, Sector 2, Wave City, <br /> Pinewood Enclave, Ghaziabad, Uttar Pradesh 201015
                    </p>
                    <p className="text-lg 2xl:text-lg leading-relaxed">
                        Email: sambhavbharatprop@gmail.com
                    </p>
                    <p className="text-lg 2xl:text-lg leading-relaxed">
                        Contact: +91 836 860 4905
                    </p>
                    <div className="flex space-x-4 mt-2 justify-center md:justify-start">
                        <a href="https://www.facebook.com/profile.php?id=61581097589652" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" aria-label="Facebook">
                            <FaFacebook size={22} />
                        </a>
                        <a href="https://www.instagram.com/sambhav_bharat/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" aria-label="Instagram">
                            <FaInstagram size={22} />
                        </a>
                        <a href="https://www.youtube.com/@SambhavBharat-u7w" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" aria-label="YouTube">
                            <FaYoutube size={22} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                © 2025 Shambhav Bharat. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
