import React from "react";
// import haridwar5 from "../image/HaridwarImage/haridwar5.jpeg";
// import haridwar6 from "../image/HaridwarImage/haridwar6.jpeg";

// import image1 from "../image/PrimeVistaImage/image1.jpeg";
import image2 from "../image/PrimeVistaImage/image2.jpeg";
import image3 from "../image/PrimeVistaImage/image3.jpeg";
import image4 from "../image/PrimeVistaImage/image4.jpeg";
import image5 from "../image/PrimeVistaImage/image5.jpeg";
// import image6 from "../image/PrimeVistaImage/image6.jpeg";
// import image7 from "../image/PrimeVistaImage/image7.jpeg";


import location1 from "../image/PrimeVistaImage/location1.jpg";
import location2 from "../image/PrimeVistaImage/location2.jpg";
import location3 from "../image/PrimeVistaImage/location3.jpg";




const PrimeVista = () => {
  return (
    <>
      {/* -----------first part--------------------- */}
      <div className="flex items-center justify-center z-10 px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">
          {/* Card 1 */}
          <div className="shadow-lg py-3">
            <img
              className="rounded-2xl w-full h-92 object-cover object-center"
              src={image5}
              alt=""
            />
          </div>
          {/* Card 2 */}
          <div className="shadow-lg py-3 text-white">
            <img
              className="rounded-2xl w-full h-92 object-cover object-center"
              src={image2}
              alt=""
            />
          </div>
          {/* Card 3 */}
          <div className="shadow-lg py-3 text-white">
            <img
              className="rounded-2xl w-full h-92 object-cover object-center"    
              src={image3}
              alt=""
            />
          </div>
          {/* Card 4 */}
          <div className="shadow-lg py-3 text-white">
            <img
              className="rounded-2xl w-full h-92 object-cover object-center"
              src={image4}
              alt=""
            />
          </div>

          {/* card 5 */}

          {/* <div className="shadow-lg py-3 text-white">
            <img
              className="rounded-2xl w-full h-92 object-cover object-center"
              src={image1}
              alt=""
            />
          </div> */}

{/* card 6 */}
          {/* <div className="shadow-lg py-3 text-white">
            <img
              className="rounded-2xl w-full h-92 object-cover object-center"
              src={image7}
              alt=""
            />
          </div> */}


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
        Prime Vista brings world-class living to India — a premium gated plotted community 
        with top-notch amenities, located just minutes from Noida International Airport.
      </p>
      <p className="text-xl 2xl:text-2xl mt-2">
        The 30 ft wide internal roads and grand entry gate are progressing at full speed, 
        setting new benchmarks in quality and design.
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
        <span className="font-bold">1. IT – SEZ — </span> Proposed IT Special Economic Zone 
        to attract global tech giants. High job creation = demand for housing & commercial spaces.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">2. Gautam Buddha University — </span>
        Large, world-class university with thousands of students. Drives rental income and adds value to surrounding properties.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">3. Noida International University — </span>
        Emerging multidisciplinary institution near Jewar Airport. Continuous student & faculty housing demand.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">4. Eastern Peripheral Expressway — </span>
        High-speed orbital expressway around Delhi. Connects Yamuna Expressway to Delhi, Haryana & UP = strong connectivity.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">5. Delhi–Mumbai Industrial Corridor (DMIC) — </span>
        Mega corridor with freight & industrial hubs. Yamuna Expressway lies on the growth spine = high ROI.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">6. Film City — </span>
        Proposed India’s biggest Film City near Jewar Airport. Generates jobs, tourism, and boosts property appreciation.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">7. Industry — </span>
        YEIDA developing industrial & warehousing clusters. Creates employment + long-term investment value.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">8. F1 Track – Buddh International Circuit — </span>
        India’s only Formula 1 racing track. Boosts tourism, hospitality, and premium living demand.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">9. ICC Approved Cricket Stadium — </span>
        International cricket venue under development. Attracts sports, events & real estate growth.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">10. Galgotias University — </span>
        Highly reputed NCR university. Ensures steady rental & housing demand.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">11. JBM University — </span>
        Growing educational hub. Adds to student housing & nearby real estate value.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">12. G.L. Bajaj Medical College — </span>
        Medical institution with hospital & research. Strong driver for healthcare + residential demand.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">13. Noida International Airport — </span>
        India’s largest airport under construction. Passenger + cargo hub = skyrocketing land values.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">14. Night Safari — </span>
        India’s first Night Safari planned near Jewar. Boosts tourism, hospitality, and lifestyle investments.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">15. Logistic Hub — </span>
        India’s largest integrated logistics hub planned. Seamless air, rail, and road cargo movement = commercial hotspot.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">16. Olympic Village — </span>
        Proposed world-class Olympic sports village. Increases international recognition & real estate appreciation.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">17. Chola Railway Station — </span>
        Nearest railway hub being developed for cargo & connectivity. Links Yamuna Expressway with Eastern & Western Corridors.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">18. Metro Connectivity — </span>
        Proposed metro extension from Greater Noida to Jewar Airport. Ensures smooth transit for residents, workers & students.
      </p>
    </div>

    {/* Summary */}
    <div>
      <h3 className="text-3xl lg:text-5xl font-semibold mt-8">In Summary</h3>
      <p className="text-xl 2xl:text-2xl mt-2">
        Yamuna Expressway is India’s fastest-growing investment corridor, combining IT, education, 
        industries, tourism, sports, logistics, and the airport into one growth powerhouse.
      </p>
      <p className="text-xl 2xl:text-2xl mt-2">
        👉 That’s why it’s the #1 destination for both investors and home buyers in NCR.
      </p>
    </div>

  </div>
</div>



      <div className="flex items-center justify-center z-10 px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

          <div className="shadow-lg py-3">
            <img className="rounded-2xl" src={location1} alt="" />
          </div>

          <div className=" shadow-lg py-3 text-white">
            <img className="rounded-2xl" src={location2} alt="" />
          </div>
        </div>
     
      </div>


    </>
  );
};

export default PrimeVista;
