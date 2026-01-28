import React from 'react'
import image1 from '../image/thevelly/image1.JPG'
import image2 from '../image/thevelly/image2.JPG'
import image3 from '../image/thevelly/image3.JPG'
import image4 from '../image/thevelly/image4.JPG'

const TheVelley = () => {
  return (
    <>
      {/* Images Section */}
      <div className="flex items-center justify-center z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

          <div className="shadow-lg py-3">
            <img className='rounded-2xl w-full h-full object-cover' src={image1} alt="" />
          </div>

          <div className="shadow-lg py-3">
            <img className='rounded-2xl w-full h-full object-cover' src={image2} alt="" />
          </div>

          <div className="shadow-lg py-3">
            <img className='rounded-2xl w-full h-full object-cover' src={image3} alt="" />
          </div>

          <div className="shadow-lg py-3">
            <img className='rounded-2xl w-full h-full object-cover' src={image4} alt="" />
          </div>

        </div>
      </div>


      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-24">
        <h2 className="text-4xl font-bold text-white mb-6">
          The Valley – Greater Noida West
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          The Valley is a well-planned residential project located in Sector 1, Greater Noida West, Gautam Buddha Nagar. 
          It offers modern 21st-century smart homes designed to provide comfort, safety, and peaceful living. 
          The project is spread over 2.5 acres with 80% open green space and has only two towers, which allows plenty of fresh air, 
          natural light, and better privacy for every home.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          The Valley is designed with green courtyards and traffic-free open areas, making it safe for children and ideal for 
          relaxation and social gatherings. Its three-side open layout and smart planning ensure good ventilation and a calm 
          environment throughout the project. Located close to Central Noida and surrounded by premium residential projects, 
          it offers easy access to schools, hospitals, shopping areas, and other daily needs.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Built with earthquake-resistant construction, The Valley focuses on safety and quality. Residents can enjoy useful 
          amenities such as landscaped gardens, jogging track, community hall, shopping arcade, ample parking, 24/7 CCTV security, 
          power backup, continuous water supply, Wi-Fi-enabled homes, and eco-friendly features like rainwater harvesting. 
          With modern interiors, modular kitchens, quality fittings, and peaceful surroundings, The Valley is an ideal choice for 
          comfortable family living and long-term investment in Greater Noida West.
        </p>
      </div>
    </>
  )
}

export default TheVelley
