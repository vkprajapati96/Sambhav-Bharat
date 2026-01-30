import React from "react";
import crystalvalley2 from "../image/CrystalValley/crystalvalley2.jpeg";
import crystalvalley3 from "../image/CrystalValley/crystalvalley3.jpeg";
import crystalvalley5 from "../image/CrystalValley/crystalvalley5.jpeg";

const CrystalValley = () => {
  const images = [crystalvalley2, crystalvalley3, crystalvalley5];

  return (
    <section className="w-full px-20 py-10 max-xl:px-20 max-lg:px-12 max-md:px-6 max-sm:px-4">

      {/* ✅ IMAGES */}
    <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 ">
  {images.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl shadow-lg flex items-center justify-center bg-black/5"
    >
      <img
        src={img}
        alt={`valley-${index}`}
        className="w-full h-[320px] rounded-2xl max-md:h-[260px] object-contain transition-transform duration-500 hover:scale-105"
      />
    </div>
  ))}
</div>


      {/* ✅ CONTENT */}
      <div className="mt-16 max-w-5xl">
        <h1 className="text-4xl font-semibold mb-6 max-md:text-2xl">
          Crystal Valley – A Nature-Inspired Lifestyle at Sawantwadi
        </h1>

        <p className="text-gray-300 leading-8 mb-5">
          Crystal Valley is a thoughtfully planned residential development in
          Sawantwadi, Maharashtra, designed for those seeking peace, greenery, and
          long-term value. Nestled amidst lush green hills, the project offers
          premium plots and villas within a secure gated community, blending modern
          living with the serenity of nature.
        </p>

        <p className="text-gray-300 leading-8 mb-5">
          Strategically located just 30 minutes from Mopa International Airport,
          Crystal Valley enjoys excellent connectivity to Goa’s beaches while
          maintaining a calm, pollution-free environment. With Amboli Hill Station,
          heritage landmarks, and scenic water bodies nearby, the project is ideal
          for holiday homes, smart investments, or relaxed retirement living.
        </p>

        <p className="text-gray-300 leading-8 mb-10">
          Crafted for nature lovers and mindful living, Crystal Valley offers a rare
          opportunity to own a peaceful retreat without compromising on
          accessibility and lifestyle comfort.
        </p>

        {/* ✅ HIGHLIGHTS */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Premium Plots & Villas</li>
            <li>Secure Gated Community</li>
            <li>Modern amenities for comfortable living</li>
            <li>Surrounded by lush green hills & open landscapes</li>
            <li>Excellent connectivity to Goa & major landmarks</li>
          </ul>
        </div>

        {/* ✅ LOCATION */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location Advantages</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>30 mins from Mopa International Airport</li>
            <li>40 mins to Vagator & Morjim Beaches</li>
            <li>25 mins to Amboli Hill Station</li>
            <li>15 mins to Sawantwadi Lake & Palace</li>
            <li>45 mins to Sindhudurg Fort & Beaches</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default CrystalValley;
