import React from "react";
// Using existing images as placeholders
import apex2 from "../image/Apexmall/apex2.jpeg";
import apex3 from "../image/Apexmall/apex3.jpeg";
import apex4 from "../image/Apexmall/apex4.jpeg";
import apex5 from "../image/Apexmall/apex5.jpeg";
import {
  FaDumbbell,
  FaBolt,
  FaLeaf,
  FaSwimmer,
  FaUsers,
  FaCloudRain,
  FaChild,
  FaToriiGate,
} from "react-icons/fa";
const ApexMall = () => {
  return (

    <div className="font-sans text-neutral-200 bg-black min-h-screen selection:bg-amber-500/30 overflow-x-hidden">
      {/* Intro Section - Top */}
      
      <section className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8 relative pb-10 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[500px] md:h-[300px] bg-blue-900/20 blur-[100px] -z-10 rounded-full"></div>
        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 tracking-tight pt-3">
          Apex Park Square
        </h1>
        <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
          Apex Park Square is a modern commercial development in Sector-16B,
          Greater Noida West, offering well-planned apex3 shops, food courts,
          multiplex, wellness spaces, and apex4 apartments. With a prime
          location, high footfall potential, and attractive pricing.
        </p>
      </section>
      {/* Hero Section - 4 Images Grid (2x2 Layout) */}
      <section className="w-full max-w-8xl mx-auto p-4 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px] md:auto-rows-[450px]">
          {/* Image 1 */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={apex5}
              alt="Apex Park Square Facade"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 md:p-10">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight shadow-black drop-shadow-lg mb-2">
                  Apex Park Square
                </h2>
                <p className="text-sm md:text-lg font-light text-neutral-300">
                  Greater Noida West
                </p>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={apex2}
              alt="Interiors"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Image 3 */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={apex3}
              alt="apex3"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Image 4 */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={apex1}
              alt="Food Court"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-6 py-10 md:py-16 space-y-20 md:space-y-32">
        {/* About Section - Left Image, Right Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                      {/* Content Wrapper (Right) */}

          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 text-sm md:text-base rounded-full font-semibold tracking-wider uppercase text-white border border-white">
                About
              </span>
              <h2 className="text-cetner md:text-left text-2xl md:text-4xl font-bold text-white">
                Premium Commercial Destination
              </h2>
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                Welcome to Apex Park Square – a premium commercial destination
                in Noida Extension. Developed by Floral Realtech and located in
                Sector-16B, Greater Noida West, Apex Park Square offers a
                perfect blend of business and lifestyle spaces. The project
                features apex3 shops, food courts, wellness world, multiplex,
                and apex4 apartments, thoughtfully planned to attract high
                footfall. With a prime location, modern infrastructure, and
                competitive pricing, Apex Park Square is an ideal choice for
                both business owners and investors seeking strong returns.
              </p>
            </div>
          </div>

          {/* Image Wrapper (Left) */}
          <div className="h-[300px] md:h-[400px] w-full bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-800 relative group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            <img
              src={apex4}
              alt="About Apex Park Square"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </section>
        {/* Amenities Section - Cards with Icons */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              World-Class Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaDumbbell />, label: "Gym" },
              { icon: <FaBolt />, label: "24×7 Power Backup" },
              { icon: <FaLeaf />, label: "Yoga & Wellness" },
              { icon: <FaSwimmer />, label: "Swimming Pool" },
              { icon: <FaUsers />, label: "Community Hall" },
              { icon: <FaCloudRain />, label: "Rainwater Harvesting" },
              { icon: <FaChild />, label: "Kids’ Play Area" },
              { icon: <FaToriiGate />, label: "Gated Society" },
            ].map((amenity, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-neutral-800 transition-all hover:-translate-y-1 group cursor-default"
              >
                <div className="text-4xl text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <span className="text-neutral-300 font-medium text-center">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Project Highlights Section - Left Map, Right Highlights */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map (Left) */}
          <div className="bg-neutral-900/40 p-2 rounded-[2rem] border border-neutral-800 shadow-xl backdrop-blur-sm h-[300px] md:h-auto min-h-[400px]">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
              <iframe
                title="Google Map Location"
                className="w-full h-full border-0 "
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Apex%20Park%20Square%20Noida%20Extension&t=&z=14&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {/* Highlights List (Right) */}
          <div className="bg-neutral-900/40 p-8 md:p-10 rounded-[2rem] border border-neutral-800 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
              <span className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
              Project Highlights
            </h3>
            <ul className="space-y-4">
              {[
                "Total land area: Approx. 2.38 acres",
                "100% commercial mall project",
                "Prime location in Sector 16B, Greater Noida West",
                "3-side open project with over 1 lakh surrounding families",
                "Close to proposed Metro Station (approx. 1 km)",
                "Features hypermarket & 5-screen multiplex",
                "Surrounded by major residential, IT/ITES & industrial hubs",
                "Air-conditioned food court with large seating area",
                "Presence of national & international brands",
                "2 mins from Gaur Chowk & Gaur City Mall",
                "4 mins from FNG Corridor",
                "8 mins from Sai Mandir, Sector 71 & Sector 52 Metro",
                "10 mins from Fortis Hospital, Sector 62",
              ].map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="bg-amber-900/20 p-2 rounded-lg text-amber-500 shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-neutral-400 text-sm md:text-base leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ApexMall;
