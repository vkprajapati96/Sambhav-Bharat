import React from "react";
// Ensure these paths match your actual image locations.
import coremall1 from "../image/Coremall/coremall1.jpeg";
import coremall2 from "../image/Coremall/coremall2.jpeg";
import coremall3 from "../image/Coremall/coremall3.jpeg";
import retail from "../image/Coremall/retail.jpeg";
import studio from "../image/Coremall/studio.jpeg";
import about from "../image/Coremall/about.jpeg";
import Contact from "../pages/Contact";
const CoreMall = () => {
  return (
    <div className="font-sans text-neutral-200 bg-black  overflow-x-hidden">
      {/* Intro Section - Top */}
      <section className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8 relative pt-10 pb-10 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[500px] md:h-[300px] bg-blue-900/20 blur-[100px] -z-10 rounded-full"></div>
        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 tracking-tight pt-3">
          THE CORE MALL
        </h1>
        <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
          Discover premium retail spaces & modern studio apartments at The Core
          Mall, Ghaziabad—where luxury meets a prime location, offering
          world-class amenities for smart investments and thriving businesses.
        </p>
      </section>
      {/* Hero Section - 4 Images Grid (2x2 Layout) */}

      <section className="w-full max-w-8xl mx-auto p-4 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px] md:auto-rows-[450px]">
          {/* Image 1: Main Facade */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={coremall1}
              alt="The Core Mall Facade"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 md:p-10">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight shadow-black drop-shadow-lg mb-2">
                  The Core Mall
                </h2>
                <p className="text-sm md:text-lg font-light text-neutral-300">
                  Ghaziabad's New Landmark
                </p>
              </div>
            </div>
          </div>
          {/* Image 2: Studio Apartments */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={coremall2}
              alt="Luxury Studio Apartments"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Image 3: Retail */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={coremall3}
              alt="Retail Atrium"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Image 4: Dining */}
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full">
            <img
              src={coremall1}
              alt="Food Court"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-16 space-y-10 md:space-y-20">
        {/* About Section - Image After Content on Mobile */}
        <section className="grid  grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content Wrapper */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 text-sm md:text-base rounded-full font-semibold tracking-wider uppercase text-white border border-white">
                About
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                A Landmark of Modern Commerce
              </h2>
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                The Core Mall is a landmark commercial destination in Ghaziabad,
                offering premium retail spaces and studio
                apartments in a prime, high-footfall location. Strategically
                located on NH-24 at Crossings Republik, it blends modern
                architecture, world-class amenities, and strong connectivity to
                create an ideal environment for businesses, professionals, and
                investors. Designed for high visibility, convenience, and
                long-term value, The Core Mall sets a new benchmark in urban
                lifestyle and smart real estate investment.
              </p>
            </div>

          </div>
          {/* Image Wrapper */}
          <div className="h-[300px] md:h-[400px] w-full bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-800 relative group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            <img
              src={about}
              alt="Studio Apartment"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
      
        </section>

        {/* Commercial Section (Retail & Food Court) */}
      
        <section className="bg-gradient-to-br  from-neutral-900 to-black text-white rounded-[2rem] md:rounded-[3rem] py-8 lg:p-16 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-amber-500/10 via-transparent to-transparent opacity-60"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-10">
              <span className="inline-block py-1 px-3 rounded-full  text-white font-semibold tracking-wider uppercase text-xs border border-white">
               the Core Zone 
                             </span>
              <div className="flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Studio Apartments
                  </h2>
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                      move-in-ready studio apartments designed
                    for modern professionals and investors, offering a prime
                    NH-24 location, everyday convenience, and strong rental
                    demand.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Retail & Food Court
                  </h2>
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                    Premium retail and food court spaces anchored by Miraj
                    Cinemas, designed for high footfall, excellent visibility,
                    and sustainable business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="h-48 md:h-64 bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700/50 group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={studio}
                  alt="Apartments"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 uppercase tracking-wide">
                  Studio  Apartments
                  </span>
                </div>
              </div>
              <div className="h-48 md:h-64 bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700/50 group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={retail}
                  alt="Retail"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 uppercase tracking-wide">
                    Retail Shops
                  </span>
                </div>
              </div>
            </div>
          </div>
    
        </section>


        {/* Location & Map Section */}
        <section className="grid  grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <div className=" p-2 rounded-[2rem] border border-neutral-800 shadow-xl h-[300px] md:h-auto min-h-[300px]">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
              <iframe
                title="Google Map Location"
                className="w-full h-full  "
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=The%20Concept%20Core%20Mall&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
          {/* Location Text */}
          <div className="bg-neutral-900/40 p-8 md:p-10 rounded-[2rem] border border-neutral-800 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
              <span className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
              Site Location
            </h3>
            <ul className="space-y-4">
              {[
                "The Core Mall, Crossing Republik, Ghaziabad, Uttar Pradesh",
                "4 km from Gaur City Mall",
                "1 km from Crossing Republic, Ghaziabad",
                "1 km from ABES Engineering College",
                "1 km from Ashiyana Space Premium PG & Schools",
              ].map((loc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="bg-amber-900/20 p-2 rounded-lg text-amber-500 shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-neutral-400 text-sm md:text-base leading-relaxed">
                    {loc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

{/*RERA*/}
 <div className="flex justify-center w-full px-4 ">
          <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-3 bg-neutral-900/80 border border-neutral-800 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md">
            <p className="text-sm md:text-base text-neutral-300 text-center">
The Core Mall is registered under RERA with development id             </p>
            <span className="text-amber-500 font-bold tracking-wider font-mono text-sm md:text-base border border-amber-900/30 bg-amber-900/10 px-2 py-0.5 rounded">
UPRERAPRJ9641            </span>
          </div>
        </div>

      </main>
    </div>
  );
};
export default CoreMall;
