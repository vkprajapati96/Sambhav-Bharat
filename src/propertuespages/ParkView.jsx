import React from "react";
import parkview1 from "../image/Parkview/parkview1.jpeg";
import layout from "../image/Parkview/layout.jpeg";
import parkview1bhk from "../image/Parkview/parkview1bhk.jpeg";
import parkview2bhk from "../image/Parkview/parkview2bhk.jpeg";
import parkview3bhk from "../image/Parkview/parkview3bhk.jpeg";
import parkview4bhk from "../image/Parkview/parkview4bhk.jpeg";

const ParkView = () => {
  const images = [parkview1,layout,parkview1bhk,parkview2bhk,parkview3bhk,parkview4bhk];

  return (
    <section className="w-full px-20 py-10 max-xl:px-20 max-lg:px-12 max-md:px-6 max-sm:px-4">

      {/* ✅ IMAGES */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img}
              alt={`parkview-${index}`}
              className="w-full h-[400px] max-md:h-[220px] object-cover  transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* ✅ CONTENT */}
      <div className="mt-16 max-w-8xl">
        <h1 className="text-4xl font-semibold mb-6 max-md:text-2xl">
          ParkView Residency – Premium Homes in Noida Extension
        </h1>

        <p className="text-gray-300 leading-8 mb-5">
          ParkView Residency is a well-planned residential project in Noida
          Extension, offering thoughtfully designed 1, 2, 3 & 4 BHK homes for
          modern urban living. Set in a peaceful yet well-connected location, the
          project combines smart layouts, open surroundings, and scenic green
          views to deliver a comfortable and refined lifestyle.
        </p>

        <p className="text-gray-300 leading-8">
          Situated opposite a 40-acre authority-maintained green park, the
          project benefits from excellent ventilation, natural light, and a calm
          environment. Being a corner and two-side open project, ParkView
          Residency ensures better accessibility and enhanced living comfort.
          With main markets and daily conveniences just 5–10 minutes away, it is
          an ideal choice for both homebuyers and investors.
        </p>
      </div>

    </section>
  );
};

export default ParkView;
