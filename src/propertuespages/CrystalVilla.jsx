import React from "react";
import goa1 from "../image/CrystalVilla/goa1.jpeg";
import goa2 from "../image/CrystalVilla/goa2.jpeg";
import goa3 from "../image/CrystalVilla/goa3.jpeg";
import goa4 from "../image/CrystalVilla/goa4.jpeg";
import goa5 from "../image/CrystalVilla/goa5.jpeg";
import goa6 from "../image/CrystalVilla/goa6.jpeg";

const CrystalVilla = () => {
  const images = [goa1, goa2, goa3, goa4, goa5, goa6];

  return (
    <section className="w-full  px-20 py-10 max-xl:px-20 max-lg:px-12 max-md:px-6 max-sm:px-4">
      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {images.map((img, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img}
              alt={`villa-${index}`}
              className="w-full h-[260px] max-lg:h-[240px] max-md:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="mt-16 max-w-7xl">
        <h1 className="text-4xl font-semibold leading-tight mb-6 max-lg:text-3xl max-md:text-2xl">
          Crystal Villas – Luxury 4–5 BHK Villas, Cansaulim, South Goa
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-5 max-md:text-base">
          Crystal Villas is a boutique luxury villa development set in the peaceful
          surroundings of Cansaulim, South Goa, offering thoughtfully designed 4 & 5
          BHK residences for those who value privacy, space, and refined living.
          Surrounded by greenery and close to Goa’s pristine beaches, the project
          blends modern architecture with a relaxed coastal lifestyle.
        </p>

        <p className="text-gray-300 text-lg leading-8 mb-5 max-md:text-base">
          Each villa is planned to maximize natural light, ventilation, and seamless
          indoor–outdoor living, creating homes that feel open yet private. With
          landscaped surroundings and a calm neighborhood setting, Crystal Villas is
          ideal for holiday living, second homes, or long-term investment in one of
          South Goa’s most desirable locations.
        </p>

        <p className="text-gray-300 text-lg leading-8 max-md:text-base">
          Strategically located with easy access to beaches, heritage landmarks, and
          the airport, Crystal Villas offers a perfect balance of tranquility and
          connectivity.
        </p>
      </div>
    </section>
  );
};

export default CrystalVilla;
