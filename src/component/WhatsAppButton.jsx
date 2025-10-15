import React from "react";
import { FaWhatsapp } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";


function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919625231985?text=Hello%20I%20am%20interested"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-5 text-[65px] text-green-500 p-4 rounded-full text-3xl z-50"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
