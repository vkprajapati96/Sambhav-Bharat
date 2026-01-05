import React from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { useRef } from "react";
// TOP IMG

import image2 from "../image/PrimeVistaImage/image2.jpeg";
import image4 from "../image/PrimeVistaImage/image4.jpeg";
import image5 from "../image/PrimeVistaImage/image5.jpeg";
import image6 from "../image/PrimeVistaImage/image6.jpeg";
import image7 from "../image/PrimeVistaImage/image7.jpeg";
import image10 from "../image/PrimeVistaImage/image10.jpeg";

// LOCATION IMG
import location1 from "../image/PrimeVistaImage/location1.jpg";
import location2 from "../image/PrimeVistaImage/location2.jpg";
import location4 from "../image/PrimeVistaImage/location4.jpeg";

// BOTTOM IMG
import img1 from "../image/PrimeVistaImage/img1.png";
import img2 from "../image/PrimeVistaImage/img2.png";
import img3 from "../image/PrimeVistaImage/img3.png";
import img4 from "../image/PrimeVistaImage/img4.png";
import img5 from "../image/PrimeVistaImage/img5.png";
import img6 from "../image/PrimeVistaImage/img6.png";
import img7 from "../image/PrimeVistaImage/img7.png";
import img8 from "../image/PrimeVistaImage/img8.png";
import img9 from "../image/PrimeVistaImage/img9.png";
import img10 from "../image/PrimeVistaImage/img10.png";
import img11 from "../image/PrimeVistaImage/img11.png";
import img12 from "../image/PrimeVistaImage/img12.png";
import img13 from "../image/PrimeVistaImage/img13.png";
import img14 from "../image/PrimeVistaImage/img14.png";
import img15 from "../image/PrimeVistaImage/img15.png";
import img16 from "../image/PrimeVistaImage/img16.png";
import img17 from "../image/PrimeVistaImage/img17.png";
import img18 from "../image/PrimeVistaImage/img18.png";
import img19 from "../image/PrimeVistaImage/img19.png";
import img20 from "../image/PrimeVistaImage/img20.png";

const PrimeVista = () => {
  const scrollRef2 = useRef(null);
  const scrollRef = useRef(null);

  const scrollLeft2 = () => {
    scrollRef2.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight2 = () => {
    scrollRef2.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* -----------first part  img--------------------- */}
      <div className="flex flex-col items-center justify-center z-10 px-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mt-8 md:mb-2 ">
          Live Construction Updates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-8xl mt-16">
          {/* Repeat this block for all images */}
          {[image2, image10, image4, image5, image6, image7].map(
            (img, index) => (
              <div
                key={index}
                className="shadow-lg bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden w-full h-96"
              >
                <img
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  src={img}
                  alt={`Image ${index + 1}`}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* ----------------second part--------------------- */}
      <div className="flex items-center justify-center z-10 px-6">
        <div className="grid grid-cols-1 gap-6 w-full max-w-8xl mt-16 text-white">
          {/* Heading */}
          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold">
              Exciting Update from Prime Vista!
            </h3>
          </div>

          {/* Description */}
          <div>
            <p className="text-xl 2xl:text-2xl">
              Prime Vista brings world-class living to India — a premium gated
              plotted community with top-notch amenities, located just minutes
              from Noida International Airport.
            </p>
            <p className="text-xl 2xl:text-2xl mt-2">
              The 30 ft wide internal roads and grand entry gate are progressing
              at full speed, setting new benchmarks in quality and design.
            </p>
            <p className="text-xl 2xl:text-2xl mt-2">
              Phase 3 launching soon — stay tuned for more details!
            </p>
          </div>

          {/* Major Heading */}
          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold mt-8">
              Major Reasons to Invest on Yamuna Expressway
            </h3>
          </div>

          {/* Points */}
          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">● IT–SEZ & Industrial Zones:</span>{" "}
              Proposed IT SEZ and large industrial clusters driving jobs and
              long-term demand.
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">● Top Universities: </span>
              Gautam Buddha University, Galgotias University, JBM University,
              Noida International University & G.L. Bajaj Medical College ensure
              strong rental demand
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">● World-Class Connectivity</span>
              Eastern Peripheral Expressway, DMIC, proposed Metro, and Chola
              Railway Station offer seamless road, rail & metro access.
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">
                ● Noida International Airport (Jewar)
              </span>
              India’s largest upcoming airport set to boost land values and
              commercial growth.
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">● Tourism & Lifestyle Hubs:</span>
              Film City, Night Safari, F1 Buddh International Circuit, ICC
              Cricket Stadium & Olympic Village enhance lifestyle appeal{" "}
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">● Logistics & Warehousing:</span>
              India’s largest integrated logistics hub planned, making it a
              major commercial hotspot.{" "}
            </p>
          </div>

        

          {/* Summary */}
          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold mt-8">
              In Summary
            </h3>
            <p className="text-xl 2xl:text-2xl mt-2">
              Yamuna Expressway is NCR’s fastest-growing corridor-powered by
              infrastructure, education, industry, tourism, and the airport
              ecosystem, making it ideal for high ROI investments and
              future-ready living.
            </p>
            <p className="text-xl 2xl:text-2xl mt-2">
              👉 A prime destination for investors and homebuyers in NCR.
            </p>
          </div>
        </div>
      </div>

      {/*  3rd part  */}

      <div className="flex flex-col lg:flex-row items-stretch justify-center z-10 px-6 w-full max-w-8xl mt-16 gap-6">
        {/* Left side - one big image */}
        <div className="flex-1 shadow-lg bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden w-full h-[400px] lg:h-[940px]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={location1}
            alt="Location 1"
          />
        </div>

        {/* Right side - two equal halves (both images) */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {/* Top half - show top part of image */}
          <div className="shadow-lg bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden h-[500px] lg:h-[457px]">
            <img
              className="w-full h-full object-cover object-top rounded-2xl"
              src={location2}
              alt="Location 2"
            />
          </div>

          {/* Bottom half - second image */}
          <div className="shadow-lg bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden h-[500px] lg:h-[457px]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={location4}
              alt="Location 4"
            />
          </div>
        </div>
      </div>

      {/* --------  4 part   -------- */}
      <div className="w-full px-6 mt-16 text-center max-w-8xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Nearest Locations
        </h2>

        <div className="relative w-full">
          <button
            onClick={scrollLeft}
            className=" absolute left-2 top-1/2 -translate-y-1/2 
                 bg-white/80 text-black p-1 rounded-full
                 hover:bg-white transition z-10 shadow-lg cursor-pointer"
          >
            <MdChevronLeft size={28} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4 pb-4 w-full"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[
              { img: img8, name: "NOIDA INTERNATIONAL AIRPORT" },
              { img: img3, name: "BULLET TRAIN" },
              { img: img10, name: "YAMUNA EXPRESSWAY" },
              { img: img6, name: "GALGOTIAS UNIVERSITY" },
              { img: img5, name: "DEFENCE CORRIDOR" },
              { img: img2, name: "IT-SEZ" },
              { img: img1, name: "ISBT" },
              { img: img4, name: "F1 TRACK" },
              { img: img7, name: "LOGISTIC PARK" },
              { img: img9, name: "POD TAXI" },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] h-[300px] md:min-w-[320px] md:max-w-[320px] md:h-[350px]
                     bg-white/10 backdrop-blur-2xl rounded-2xl shadow-lg 
                     overflow-hidden flex-shrink-0 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={`img-${index}`}
                  className="w-full h-[80%] object-cover rounded-t-2xl 
                       transition-transform duration-300 hover:scale-105"
                />

                {/* ⬇⬇ IMAGE NAME BELOW IMAGE (SMALL TEXT) */}
                <p className="text-white text-md py-2">{item.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className=" absolute right-2 top-1/2 -translate-y-1/2 
                 bg-white/80 text-black p-1 rounded-full
                 hover:bg-white transition z-10 shadow-lg cursor-pointer"
          >
            <MdChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <div className="hidden md:block text-white   shadow-md pointer-events-none">
            <FaLongArrowAltLeft size={18} />
          </div>
          <div className="hidden md:block text-white   shadow-md pointer-events-none">
            <FaLongArrowAltRight size={18} />
          </div>
        </div>
      </div>

      {/* 4 part-2 FAMOUS LOCATION  */}
      <div className="w-full px-6 mt-16 text-center max-w-8xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Famous Locations
        </h2>

        <div className="relative w-full">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft2}
            className=" absolute left-2 top-1/2 -translate-y-1/2 
                 bg-white/80 text-black p-1 rounded-full
                 hover:bg-white transition z-10 shadow-lg cursor-pointer"
          >
            <MdChevronLeft size={28} />
          </button>

          {/* Scrollable Images */}
          <div
            ref={scrollRef2}
            className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4 pb-4 w-full"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[
              { img: img11, name: "ICC CRICKET STADIUM" },
              { img: img12, name: "FILM CITY" },
              { img: img20, name: "GAUTAM BUDDHA UNIVERSITY" },
              { img: img13, name: "NOIDA INTERNATIONAL UNIVERSITY" },
              { img: img14, name: "NIGHT SAFARI" },
              { img: img19, name: "JBM UNIVERSITY" },
              { img: img15, name: "OLYMPIC PARK" },
              { img: img17, name: "INDUSTRIAL AREA" },
              { img: img16, name: "EASTERN PERIPHERAL EXPRESSWAY" },
              { img: img18, name: "DELHI MUMBAI INDUSTRIAL CORRIDOR (DMIC)" },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] h-[300px] md:min-w-[320px] md:max-w-[320px] md:h-[350px]
                     bg-white/10 backdrop-blur-2xl rounded-2xl shadow-lg 
                     overflow-hidden flex-shrink-0 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={`g2-${index}`}
                  className="w-full h-[80%] object-cover rounded-t-2xl 
                       transition-transform duration-300 hover:scale-105"
                />

                {/* NAME BELOW IMAGE */}
                <p className="text-white text-sm py-2 px-2 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight2}
            className=" absolute right-2 top-1/2 -translate-y-1/2 
                 bg-white/80 text-black p-1 rounded-full
                 hover:bg-white transition z-10 shadow-lg cursor-pointer"
          >
            <MdChevronRight size={28} />
          </button>
        </div>

        {/* Indicator Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="hidden md:block text-white   shadow-md pointer-events-none">
            <FaLongArrowAltLeft size={18} />
          </div>
          <div className="hidden md:block text-white   shadow-md pointer-events-none">
            <FaLongArrowAltRight size={18} />
          </div>
        </div>
      </div>

      {/* -------- Section: Google Map -------- */}
      <div className="w-full px-6 mt-10 md:mt-12 text-center max-w-8xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Our Location
        </h2>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.4308835054373!2d77.56325537538108!3d28.30665610162569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceec9987d99eb%3A0xbcfeea2cbaaa7b61!2sGaur%20Yamuna%20City!5e0!3m2!1sen!2sin!4v1704350040000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PrimeVista;
