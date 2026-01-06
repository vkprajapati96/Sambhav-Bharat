import React from "react";
// Ensure these paths match your actual image locations.
import dholera1 from "../image/GaimDholera/dholera1.jpeg";
import dholera2 from "../image/GaimDholera/dholera2.jpeg";
import dholera3 from "../image/GaimDholera/dholera3.jpeg";
import dholera4 from "../image/GaimDholera/dholera4.jpeg";

const CoreMall = () => {
  return (
    <div className="font-sans text-neutral-200 bg-black  selection:bg-amber-500/30 overflow-x-hidden">
      {/* Intro Section - Moved to Top */}
      <section className="text-center max-w-4xl mx-auto space-y-8 relative  pb-12 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-900/20 blur-[100px] -z-10 rounded-full"></div>

        <h1 className="text-2xl md:py-3  md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 tracking-tight  pt-3">
          THE CORE MALL
        </h1>
        <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
          Discover premium retail spaces & modern studio apartments at The Core
          Mall, Ghaziabad-where luxury meets a prime location, offering
          world-class amenities for smart investments and thriving businesses.
          come tomorrow.{" "}
        </p>
      </section>
      {/* Hero Section - 4 Images Grid */}
      <section className="w-full  max-w-8xl mx-auto md:pb-40 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[85vh] h-auto">
          {/* Row 1 */}
          <div className="relative overflow-hidden rounded-3xl group h-[400px] md:h-full cursor-pointer">
            <img
              src={dholera1}
              alt="The Core Mall Facade"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay Text on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 md:p-12">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight shadow-black drop-shadow-lg mb-2">
                  The Core Mall
                </h2>
                <p className="text-lg md:text-xl font-light text-neutral-300">
                  Ghaziabad's New Landmark
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative overflow-hidden rounded-3xl group h-[250px] md:h-full cursor-pointer">
              <img
                src={dholera2}
                alt="Luxury Studio Apartments"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-medium border border-white/80 px-6 py-3 rounded-full backdrop-blur-md bg-black/30 tracking-wide hover:bg-white hover:text-black transition-all">
                  View Studios
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative overflow-hidden rounded-3xl group h-[200px] md:h-full cursor-pointer">
                <img
                  src={dholera3}
                  alt="Retail Atrium"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">Retail</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl group h-[200px] md:h-full cursor-pointer">
                <img
                  src={dholera4}
                  alt="Food Court"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">Dining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        {/* Studio Apartments */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 text-xl rounded-full   font-semibold tracking-wider uppercase text-white  border border-white">
                About
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                A Landmark of Modern Commerce
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The Core Mall is a landmark commercial destination in Ghaziabad,
                offering premium retail spaces and fully furnished studio
                apartments in a prime, high-footfall location. Strategically
                located on NH-24 at Crossings Republik, it blends modern
                architecture, world-class amenities, and strong connectivity to
                create an ideal environment for businesses, professionals, and
                investors. Designed for high visibility, convenience, and
                long-term value, The Core Mall sets a new benchmark in urban
                lifestyle and smart real estate investment.{" "}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[400px] lg:h-[400px] w-full bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-800 relative group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            <img
              src={dholera1}
              alt="Studio Apartment"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </section>
        {/* Retail & Food Court */}

        <section className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-[3rem] p-8 lg:p-20 overflow-hidden relative  shadow-2xl">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-amber-500/10 via-transparent to-transparent opacity-60"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-900/30 text-amber-500 font-semibold tracking-wider uppercase text-xs border border-amber-500/20">
                Commercial Heart
              </span>
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-5">
                  {" "}
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Studio Apartments
                  </h2>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Fully furnished, move-in-ready studio apartments designed
                    for modern professionals and investors, offering a prime
                    NH-24 location, everyday convenience, and strong rental
                    demand.
                  </p>
                </div>
                <div className="flex flex-col gap-5"> 
                  {" "}
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Retail & Food Court
                  </h2>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Premium retail and food court spaces anchored by Miraj
                    Cinemas, designed for high footfall, excellent visibility,
                    and sustainable business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="h-64 bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700/50 group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={dholera1}
                  alt="Retail"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/50 backdrop-blur-md text-white text-sm px-3 py-1 rounded-full border border-white/10">
                    Shopping
                  </span>
                </div>
              </div>
              <div className="h-64 bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700/50 group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={dholera1}
                  alt="Food Court"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/50 backdrop-blur-md text-white text-sm px-3 py-1 rounded-full border border-white/10">
                    Dining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Advantages */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="bg-neutral-900/40  rounded-[2.5rem] border border-neutral-800 shadow-xl backdrop-blur-sm">
<div className="w-full h-full  rounded-2xl overflow-hidden">
  <iframe
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://maps.google.com/maps?q=The%20Concept%20Core%20Mall&t=&z=15&ie=UTF8&iwloc=&output=embed"
  />
</div>


</div>
          <div className="bg-neutral-900/40 p-10 rounded-[2.5rem] border border-neutral-800 shadow-xl backdrop-blur-sm">
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
                "1 km from Ashiyana Space Premium PG & Schools"
              ].map((loc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="bg-amber-900/20 p-2 rounded-lg text-amber-500">
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
      </main>
      {/* Footer */}
    </div>
  );
};

export default CoreMall;
