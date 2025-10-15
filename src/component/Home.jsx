import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import WhatsAppButton from "./WhatsAppButton";
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
  return (
    <div className="max-w-[1280px] mx-auto  px-4 mt-1">
      <div className="relative">
        <img
          className="w-full  h-[80vh] object-cover rounded-4xl"
          src="https://cdn.pixabay.com/photo/2019/10/26/11/40/building-4579244_1280.jpg"
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/100 via-black/70 to-transparent rounded-b-4xl"></div>

        {/* Heading */}
        <div className=" w-full absolute bottom-0  flex  justify-between  items-center text-white text-center px-8 gap-4">
          <div className="text-left mr-16 lg:max-w-[50%] ">
            <p className=" text-5xl font-bold tracking-tight">
              Turning Your Property
            </p>
            <p className="text-5xl font-bold tracking-tight">
              Dreams Into Reality
            </p>
          </div>
          {/* left boxes */}
          <div className="hidden lg:block flex flex-col space-y-2 mb-[8px]">
            <div className="px-[20px] flex justify-between items-center  w-[280px] h-[70px] bg-[#817B5B] rounded-lg border border-white">
              <div className="flex flex-col">
                <p className="font-bold">50+ Projects</p>
                <p className="text-sm font-bold">Made Around India </p>
              </div>
              <div>
                <BsArrowUpRight className="text-[30px] text-white " />
              </div>
            </div>

            <div className="w-[280px] h-[200px] bg-[#54696D] flex flex-col items-center rounded-lg border border-white">
              <img
                className="rounded-2xl w-[230px] h-[120px] mt-2"
                src="https://cdn.pixabay.com/photo/2019/10/26/11/40/building-4579244_1280.jpg"
                alt=""
              />

              <div className="px-[20px] flex justify-between items-center w-[280px] mt-[10px] ">
                <div className="flex flex-col">
                  <p className="font-bold">50+ Projects</p>
                  <p className="text-sm font-bold">Made Around India </p>
                </div>
                <div>
                  <BsArrowUpRight className="text-[30px] text-white " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />

      {/* lifestyle section */}

      <div className="grid lg:grid-cols-2 gap-5 mt-14">
        {/* left */}
        <div className="flex  flex-col">
          {/* imgages */}
          <div className="hidden lg:flex flex gap-[40px]">
            <img
              className="  rounded-2xl w-[170px] h-[120px] mt-2"
              src="https://i.pinimg.com/1200x/4d/50/93/4d509338215f1f21d93db4d37dd8cf92.jpg"
              alt=""
            />
            <img
              className=" rounded-2xl w-[170px] h-[120px] mt-2"
              src="https://img.freepik.com/premium-photo/modern-house-villa-design-with-architectural-style-3d-rendering_1004538-4921.jpg"
              alt=""
            />
            <img
              className=" rounded-2xl w-[170px] h-[120px] mt-2"
              src="https://img.freepik.com/premium-photo/modern-house-residential_940570-200.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[600px] h-[4px] bg-white mt-[50px] mb-[30px] "></div>
          {/* text */}
          <div className="text-white">
            <h1 className="text-white text-4xl font">
              Homes That Define Your Lifestyle
            </h1>
            <p className="text-white text-xl mt-7 text-left">
              We believe a home is more than just a space — it’s where your
              story begins. At Sambhav Bharat, we design and deliver properties
              that combine comfort, convenience, and community living. Every
              project reflects our promise to create environments where families
              grow, businesses thrive, and futures are built.
            </p>
          </div>
        </div>

        {/* right */}

        <div className=" flex flex-col gap-3">
          <div className=" w-full mx-auto">
            <img
              className="rounded-3xl"
              src="https://cdn.pixabay.com/photo/2017/07/08/06/48/sa-rapita-2483668_1280.jpg"
              alt=""
            />
          </div>

          <div className="hidden md:flex flex text-white justify-between mt-9 ">
            <div>
              <p className="text-4xl font-semibold">150+</p>
              <p>Iconic Designs</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">750+</p>
              <p>Satisfied client</p>
            </div>{" "}
            <div>
              <p className="text-4xl font-semibold">50+</p>
              <p>Project Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* selcetion section */}

        <div className=" mt-[6rem]">
      <div className="text-center text-4xl font-semibold text-white">
        Check Our Selection From
      </div>

      <div className="mt-12 w-full max-w-7xl relative mx-auto">
        <img
          className="w-full h-[80vh] object-cover rounded-sm"
          src="https://i.pinimg.com/1200x/40/01/31/400131994747d3b31d422fdfeb45942a.jpg"
          alt=""
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/100 via-black/70 to-transparent rounded-b-4xl"></div>

        {/* Heading */}
        <p className="absolute text-white text-2xl w-[200px] md:w-[400px] ml-5 md:text-5xl font-bold top-5 left-1/2 -translate-x-1/2">
          New Launches
        </p>

        {/* Cards container */}
        <div className="absolute md:top-[8rem] top-[6rem] left-1/2 -translate-x-1/2 grid gap-6 w-full max-w-6xl grid-cols-1 md:grid-cols-3 px-4">
          {/* Card 1 */}
          <div className="w-full md:max-w-sm rounded-2xl shadow-lg overflow-hidden mx-auto">
            <div className="relative">
              <img
                src="https://shambhavbharat.netlify.app/assets/image1-itrdjNUT.jpeg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <p className="absolute top-1.5 left-1.5 bg-red-600 font-semibold text-white px-2 py-1 rounded-full">
                HRD APPROVED
              </p>
            </div>

            <div className="bg-[#373229] flex flex-col gap-1">
              <h2 className="mt-2 px-2 mb-3 font-bold text-white">
                Location : Haridwar
              </h2>
              <p className="text-white mt-2 px-2 mb-3">
                If you want to know more about this place, please connect with us.
              </p>

              <div className="px-2 mb-3 flex gap-4 mt-2">
                <button className="px-2 flex gap-[4px] items-center bg-blue-600 text-white py-2 rounded-lg hover:bg-[#455a5e] transition-all">
                  Download PDF{" "}
                  <span className="text-[20px]">
                    <MdOutlineFileDownload />
                  </span>
                </button>
                <button className="px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-[#6e664b] transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:max-w-sm rounded-2xl shadow-lg overflow-hidden mx-auto">
            <div className="relative">
              <img
                src="https://shambhavbharat.netlify.app/assets/image1-itrdjNUT.jpeg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <p className="absolute top-1.5 left-1.5 bg-red-600 font-semibold text-white px-2 py-1 rounded-full">
                HRD APPROVED
              </p>
            </div>

            <div className="bg-[#373229] flex flex-col gap-1">
              <h2 className="mt-2 px-2 mb-3 font-bold text-white">
                Location : Haridwar
              </h2>
              <p className="text-white mt-2 px-2 mb-3">
                If you want to know more about this place, please connect with us.
              </p>

              <div className="px-2 mb-3 flex gap-4 mt-2">
                <button className="px-2 flex gap-[4px] items-center bg-blue-600 text-white py-2 rounded-lg hover:bg-[#455a5e] transition-all">
                  Download PDF{" "}
                  <span className="text-[20px]">
                    <MdOutlineFileDownload />
                  </span>
                </button>
                <button className="px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-[#6e664b] transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:max-w-sm rounded-2xl shadow-lg overflow-hidden mx-auto">
            <div className="relative">
              <img
                src="https://shambhavbharat.netlify.app/assets/image1-itrdjNUT.jpeg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <p className="absolute top-1.5 left-1.5 bg-red-600 font-semibold text-white px-2 py-1 rounded-full">
                HRD APPROVED
              </p>
            </div>

            <div className="bg-[#373229] flex flex-col gap-1">
              <h2 className="mt-2 px-2 mb-3 font-bold text-white">
                Location : Haridwar
              </h2>
              <p className="text-white mt-2 px-2 mb-3">
                If you want to know more about this place, please connect with us.
              </p>

              <div className="px-2 mb-3 mt-2">
                <button className="px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-[#6e664b] transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile screen ke liye spacing fix */}
      <div className="h-[50rem] md:hidden"></div>
    </div>

{/* services section */}
<div className="flex flex-col ">
  <h1 className="text-white font-bold text-4xl text-center mt-24">Our Services</h1>
  <p className="text-white font-bold text-2xl text-center mt-6">Tailored Solution by Expert Real
    <br />
Estate Agents

</p>
  <div className="flex justify-between mt-12">
<div className="flex flex-col items-center gap-4 text-xl font-semibold">

    <img className="w-80 h-60 rounded-md" src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg" alt="" />
    <p className="text-white">Buy or Sell Property</p>
  
  </div>
   
   <div className="flex flex-col items-center gap-4 text-xl font-semibold">

    <img className="w-80 h-60 rounded-md"  src="https://cdn.pixabay.com/photo/2020/07/04/17/43/houses-5370403_1280.jpg" alt="" />
    <p className="text-white">Rent or Leasy Property</p>
  </div>
  
  <div className="flex flex-col items-center gap-4 text-xl font-semibold">
    
      <img className="w-80 h-60 rounded-md" src="https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg" alt="" />
    <p className="text-white">Commercial Properties</p>
  
  </div>
    
    </div>
</div>






      {/* //////////////////// */}
      {/*  */}
      {/* <div className="mt-[6rem]"> 
      
      <div className="text-center text-4xl font-semibold  text-white">Check Our Selection From</div>

      <div className="mt-12 w-full max-w-7xl relative">
        <img className="w-full h-[80vh] object-cover rounded-sm " src="https://i.pinimg.com/1200x/40/01/31/400131994747d3b31d422fdfeb45942a.jpg" alt=""/>
        
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/100 via-black/70 to-transparent rounded-b-4xl"></div>

              <p className="absolute text-white text-5xl font-bold  top-4 left-1/2 -translate-x-1/2">
                New Launches</p>
      <div className="absolute top-[8rem] grid gap-6 w-full max-w-6xl grid-cols-1 md:grid-cols-3  ">
      
      <div className=" max-w-sm rounded-2xl shadow-lg overflow-hidden mx-auto">
      <img
        src="https://shambhavbharat.netlify.app/assets/image1-itrdjNUT.jpeg"
        alt=""
        className="w-full h-54
         object-cover"
      />

      <div className="bg-[#373229]  flex flex-col gap-3">
        <h2 className="mt-2 px-2 mb-3 font-bold text-white">Location : Haridwar</h2>
        <p className="text-white mt-2 px-2 mb-3">
If you want to know more about this place, please connect with us.

        </p>

        <div className="  px-2 mb-3 flex gap-4 mt-2">
          <button className=" px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-[#455a5e] transition-all">
          Download PDF
          </button>
          <button className=" px-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-[#6e664b] transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div> 
       <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden mx-auto">
      <img
        src="https://shambhavbharat.netlify.app/assets/image2-CRO2ZTvC.png"
        alt="Card Image"
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-800">Modern Apartment</h2>
        <p className="text-gray-600 text-sm">
          Discover luxurious living with top-notch facilities and beautiful
          architecture that fits your lifestyle.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-[#54696D] text-white py-2 rounded-lg hover:bg-[#455a5e] transition-all">
            View More
          </button>
          <button className="flex-1 bg-[#817B5B] text-white py-2 rounded-lg hover:bg-[#6e664b] transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>   
     <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden mx-auto">
      <img
        src="https://shambhavbharat.netlify.app/assets/mall1-B_P2wWCx.png"
        alt="Card Image"
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-800">Modern Apartment</h2>
        <p className="text-gray-600 text-sm">
          Discover luxurious living with top-notch facilities and beautiful
          architecture that fits your lifestyle.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-[#54696D] text-white py-2 rounded-lg hover:bg-[#455a5e] transition-all">
            View More
          </button>
          <button className="flex-1 bg-[#817B5B] text-white py-2 rounded-lg hover:bg-[#6e664b] transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
            </div>

      </div   > 

      </div> */}
    </div>
  );
}

export default Home;
