import React from "react";
import dishupuram1 from "../image/dishapuram/dishupuram1.jpeg";
import dishupuram2 from "../image/dishapuram/dishupuram2.jpeg";
import dishupuram3 from "../image/dishapuram/dishupuram3.jpeg";
import dishupuram4 from "../image/dishapuram/dishupuram4.jpeg";

const Dishapuram = () => {
  const images = [dishupuram1, dishupuram2, dishupuram3, dishupuram4];

  return (
<section className="w-full max-w-8xl mx-auto px-10 py-10 max-xl:px-20 max-lg:px-12 max-md:px-6 max-sm:px-4">
      {/* ✅ IMAGES */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img}
              alt={`dishapuram-${index}`}
              className="w-full h-[400px] max-md:h-[220px]  transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* ✅ CONTENT */}
      <div className="mt-12 space-y-8 text-gray-100 leading-relaxed">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Residential Plots & Farmhouses – Government Approved Township
          </h2>
          <p>
            <strong>Dishapuram Buildtech</strong> presents a government-approved
            mixed land use township offering premium residential plots and
            farmhouses in a peaceful and well-connected location near{" "}
            <strong>Khatu Shyam Ji</strong>. The project features{" "}
            <strong>60 ft, 40 ft, and 30 ft wide roads</strong>, reliable{" "}
            <strong>electricity and water supply</strong>, lush green planning
            with plantation, and dedicated spaces for community amenities
            including a <strong>large temple area</strong>, schools, kids’ play
            zones, resorts, and commercial shops. Designed for comfortable living
            and future appreciation, the project blends modern infrastructure
            with a serene environment.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Location Advantage
          </h3>
          <h4 className="font-semibold mb-2">
            Sikar–Jaipur Highway (SH-08A)
          </h4>
          <p>
            Strategically located on the{" "}
            <strong>Sikar–Jaipur Highway (State Highway-08A)</strong> near{" "}
            <strong>Panchayat Samiti Village Khachriyawas</strong>, the project
            enjoys excellent connectivity to major destinations. It offers easy
            access to the <strong>Jaipur Ring Road</strong>,{" "}
            <strong>Domestic Airport</strong>,{" "}
            <strong>Jaipur Depot Container</strong>, and the{" "}
            <strong>Renwal Industrial Hub (RIICO)</strong> — just a{" "}
            <strong>6-minute drive</strong> away. Surrounded by a green corridor,
            the location ensures strong growth potential, convenience, and a
            peaceful lifestyle.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Spiritual & Lifestyle Connectivity
          </h3>
          <h4 className="font-semibold mb-2">
            Near Major Devotional Destinations
          </h4>
          <p>
            The project is located close to renowned devotional destinations such
            as <strong>Khatu Shyam Ji</strong>,{" "}
            <strong>Salasar Balaji</strong>, and{" "}
            <strong>Jeen Mata</strong>, offering a spiritually enriching and
            tranquil environment. With good road connectivity and essential
            services nearby, the area is ideal for both residential living and
            long-term investment.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Why Choose This Project
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Government-approved layout</strong> with transparent
              documentation
            </li>
            <li>
              <strong>Wide roads</strong>, planned infrastructure, and green
              township design
            </li>
            <li>
              <strong>Prime highway connectivity</strong> and proximity to RIICO
            </li>
            <li>
              <strong>Peaceful, spiritually connected surroundings</strong>
            </li>
            <li>
              <strong>Strong focus on long-term value</strong> and community
              living
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            About the builder
          </h3>
          <h4 className="font-semibold mb-2">
            Dishapuram Buildtech Pvt. Ltd.
          </h4>
          <p>
            <strong>Dishapuram Buildtech Private Limited</strong> is a
            Rajasthan-based real estate builder delivering
            government-approved projects with a focus on{" "}
            <strong>transparent planning</strong>,{" "}
            <strong>quality infrastructure</strong>, and{" "}
            <strong>long-term value</strong>. The company is recognized by the{" "}
            <strong>Honorable Deputy Chief Minister of Rajasthan</strong>,
            reflecting its credibility and responsible development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dishapuram;
