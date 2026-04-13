import React from "react";
// import aboutImg from "../assets/about.jpg"; // apni image yaha import karo
import abc from "../image/BrijGhat/brijghat.jpeg"
import nearest1 from "../image/BrijGhat/nearest1.jpeg"
import nearest2 from "../image/BrijGhat/nearest2.jpeg"
import nearest3 from "../image/BrijGhat/nearest3.jpeg"
import nearest4 from "../image/BrijGhat/nearest4.jpeg"
import nearest5 from "../image/BrijGhat/nearest5.jpeg"
import paymentPlan from "../image/BrijGhat/paymentPlan.jpg"
import plot1 from "../image/BrijGhat/plot1.jpeg"
import plot2 from "../image/BrijGhat/plot2.jpeg"
import plot3 from "../image/BrijGhat/plot3.jpeg"
import plot4 from "../image/BrijGhat/plot4.jpeg"
import plot5 from "../image/BrijGhat/plot5.jpeg"
import plot6 from "../image/BrijGhat/plot6.jpeg"
// import polt2 from "../image/BrijGhat/polt2.jpg"
// import polt3 from "../image/BrijGhat/polt3.jpg"
// import polt4 from "../image/BrijGhat/polt4.jpg"
import GANGARIVERA from "../image/BrijGhat/GANGARIVERA.jpeg"


const Brijghat = () => {
      const amenities = [
    "Grand Entry Gate",
    "25-30 Ft Wide Roads",
    "Club House",
    "Swimming Pool",
    "24x7 Security",
    "CCTV",
    "Street Lights",
    "Kids Zone",
    "Gym",
    "Sports Area",
    "Jogging Track",
    "Meditation Centre",
    "Fruit Garden",
    "Flower Park",
    "Temple",
  ];

  const images =[
    plot1,
    plot2,
    plot3,
    plot4,
    plot5,
    plot6,
  
  ]

  const locations = [
  { id: 1, img: nearest1, name: "Sanjeevani Hospital" },
  { id: 5, img: nearest5, name: "Moga Dhaba" },
  { id: 3, img: nearest3, name: "Aiims Hospital" },
  { id: 4, img: nearest4, name: "jungle safari water park" },
  { id: 2, img: nearest2, name: "Bhartiya Hospital"},
];

  return (
    <div className="w-full text-white">

       <div className="max-w-8xl mx-auto px-6 pt-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Ganga Rivera
        </h1>

        <h2 className="text-lg md:text-xl mb-2">
          Luxurious Eco-Friendly Residential Township
        </h2>
      </div>



         <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 px-6 py-6">
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


   
      {/* About Section */}

      <div className="max-w-8xl mx-auto px-6 mt-16">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Image */}
          <div>
            <img
              src={abc}
              alt="About Ganga Rivera"
              className="w-full h-[300px] md:h-[350px] object-cover object-bottom rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side Text */}
          <div className="py-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              About Ganga Rivera
            </h2>

<p className="text-gray-300 leading-relaxed">
  PHENIX INFRACON (P) LTD. presents Ganga Rivera, a thoughtfully planned 
  residential township located at Brij Ghat, Garhmukteshwar. The project 
  is designed to offer a balanced lifestyle with open surroundings, 
  organized infrastructure, and convenient access to essential facilities.  

  Situated near NH-9, the location provides practical connectivity to 
  Delhi, Ghaziabad, and Noida, making it suitable for both residential 
  living and long-term investment purposes.  

  Ganga Rivera focuses on planned road layouts, designated green areas, 
  and a structured development approach to ensure comfort, accessibility, 
  and a peaceful environment for residents.
</p>          

          </div>

        </div>

      </div>

{/*  */}

  <div className="max-w-8xl mx-auto py-10 md:py-14 px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
      Luxurious Amenities
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {amenities.map((item, index) => (
        <div
          key={index}
          className="border border-gray-700 bg-gray-900 p-6 rounded-lg text-center"
        >
          <p className="font-medium text-white">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>
{/*  */}
<div className="py-8 md:py-12">
  <div className="max-w-8xl mx-auto px-4 md:px-6">

    <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10">
      Nearby Locations
    </h2>

    {/* Scroll Container */}
    <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth">

      {locations.map((item) => (
        <div
          key={item.id}
          className="snap-start flex-shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%]"
        >
          <div className="rounded-xl overflow-hidden border border-gray-700">
            <img
              src={item.img}
              alt={item.name}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          <p className="mt-3 text-white text-base md:text-lg font-semibold text-center">
            {item.name}
          </p>
        </div>
      ))}

    </div>

  </div>
</div>
  {/*  */}

<div className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* Left Side Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Flexible Payment Plan
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Ganga Rivera offers a transparent and structured payment plan 
          designed to provide clarity and convenience to buyers. The base 
          selling price is ₹16,500 per square yard for residential plots. 
          The booking process begins with 10% of the BSP, followed by 
          scheduled installments within 30, 60, and 90 days.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          This phased payment structure ensures financial flexibility 
          while maintaining a clear timeline for completion. The final 
          installment includes remaining balance along with applicable 
          development and additional charges as mentioned in the plan.
        </p>

        <ul className="text-gray-300 space-y-3">
          <li>• Booking Amount – 10% of BSP</li>
          <li>• Within 30 Days – 40% of BSP</li>
          <li>• Within 60 Days – 40% of BSP</li>
          <li>• Within 90 Days – 10% + Applicable Charges</li>
        </ul>
      </div>

      {/* Right Side Square Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-md aspect-square bg-gray-900 border border-gray-700 rounded-xl p-4 flex items-center justify-center">
          
          <img
            src={paymentPlan}
            alt="Ganga Rivera Payment Plan"
            className="w-full h-full object-contain rounded-lg"
          />

        </div>
      </div>

    </div>

  </div>
</div>

    <div className="w-full pt-6 md:py-14 ">
      <div className="max-w-8xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Ganga Rivera Layout Plan
        </h2>

        <div className="rounded-2xl overflow-hidden">
          <img
            src={GANGARIVERA}
            alt="Ganga Rivera Layout Plan"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </div>

    </div>
  );
};

export default Brijghat;