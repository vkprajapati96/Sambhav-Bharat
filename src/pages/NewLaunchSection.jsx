import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRef } from "react";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.png";
import image3 from "../image/image3.png";
import image4 from "../image/image4.webp";
import newlauncimage from "../image/newlauncimage.jpeg";
import newlauncimage1 from "../image/newlauncimage1.jpeg";
import dholera from "../image/dholera.jpeg";
import coremall from "../image/Coremall/coremall1.jpeg";
import apexfront from "../image/Apexmall/apex4.jpeg";
import dishupuram from "../image/dishapuram/dishupuram.jpeg";

import CrystalValley1 from "../image/CrystalValley/crystalvalley1.jpeg";
import parkView1 from "../image/Parkview/parkview1.jpeg";
import brijghat from "../image/BrijGhat/brijghat.jpeg"


function NewLaunchSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/haridwar.pdf"; // public folder se direct access
    link.download = "haridwar.pdf"; // file ka naam jab download ho
    link.click();
  };

  const handleDownloadMathura = () => {
    const link = document.createElement("a");
    link.href = "/mathura.pdf"; // public folder se direct access
    link.download = "mathura.pdf"; // file ka naam jab download ho
    link.click();
  };

  const handleDownloadVone = () => {
    const link = document.createElement("a");
    link.href = "/vone.pdf"; // public folder se direct access
    link.download = "vone.pdf"; // file ka naam jab download ho
    link.click();
  };

  const handleDownloadSka = () => {
    const link = document.createElement("a");
    link.href = "/SKA-ARCADIA.pdf"; // public folder se direct access
    link.download = "SKA-ARCADIA.pdf"; // file ka naam jab download ho
    link.click();
  };

  const handleDownloadCrystalValley = () => {
    const link = document.createElement("a");
    link.href = "/Crystal-Valley.pdf"; // public folder se direct access
    link.download = "Crystal-Valley.pdf"; // file ka naam jab download ho
    link.click();
  };

  const handleDownloadCoreMall = () => {
    const link = document.createElement("a");
    link.href = "/core-mall.pdf";
    link.download = "core-mall.pdf";
    link.click();
  };

  const handleDownloadApexMall = () => {
    const link = document.createElement("a");
    link.href = "/Apex-Park.pdf";
    link.download = "Apex-Park.pdf";
    link.click();
  };

  const handleDownloadparkview = () => {
    const link = document.createElement("a");
    link.href = "/ParkView.pdf";
    link.download = "ParkView.pdf";
    link.click();
  };
  const handleDownloadDishapuram = () => {
    const link = document.createElement("a");
    link.href = "/Dishapuram.pdf";
    link.download = "Dishapuram.pdf";
    link.click();
  };

  return (
    <div className="lg:mx-16 flex justify-center mt-16">
      <div className="w-full max-w-8xl relative">
        <img
          className="w-full lg:h-[80vh] object-cover"
          src="https://i.pinimg.com/1200x/40/01/31/400131994747d3b31d422fdfeb45942a.jpg"
          alt="House"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Heading */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center text-white">
          <h1 className="text-5xl font-bold">New Launches</h1>
        </div>

        {/* Cards Section */}
        <div className="mt-10">
          <div className="lg:absolute relative inset-0 flex items-center justify-center z-10 px-6 lg:mt-16">
            {/* 👈 Left Scroll Button */}

            <button
              onClick={scrollLeft}
              className=" cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full shadow-lg z-20 transition"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* 🔥 Scrollable Cards */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-6 w-full max-w-8xl lg:mt-16 scroll-smooth px-10"
            >
              {/* ====== Your Original Cards ====== */}

              {/* Card 1 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  Rera Received
                </span>

                {/* View Eye Button - Top Right */}
                <Link
                  to="/haridwar"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/haridwar">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover"
                    src={image1}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">Location : Haridwar</p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownload}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/mathura"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/mathura">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover"
                    src={image2}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">Location : Mathura</p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadMathura}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/mathura/mall"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/mathura/mall">
                  <img
                    className="rounded-t-3xl w-full h-56 object-cover"
                    src={image3}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Mathura, Mall ( Near by Prem Mandir )
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadVone}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/ska"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/ska">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover"
                    src={image4}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : SKA Arcadia (Mall) Sector-2, Wave City, Ghaziabad
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadSka}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/aero/city"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/aero/city">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover"
                    src={newlauncimage}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Shri Shyam Aero City, ( Near by khatu shyam )
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                <div className="flex items-center gap-3 px-2 pb-3">
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 6 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/chandroday/city"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/chandroday/city">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover"
                    src={newlauncimage1}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Chandroday City, Vrindavan - Mathura
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                <div className="flex items-center gap-3 px-2 pb-3">
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 7 */}

              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/gaim-dholera"
                  className="absolute top-2 left-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/gaim-dholera">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover object-top"
                    src={dholera}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Gaim Dholera (Gujarat){" "}
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 8 */}

              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/core-mall"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/core-mall">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover object-top"
                    src={coremall}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : The Core Mall (Ghaziabad)
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadCoreMall}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
              {/* card 9 */}

              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/apex-mall"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/apex-mall">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover object-top"
                    src={apexfront}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Apex Park Square (Greater Noida West){" "}
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadApexMall}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 10 crystal valley */}

              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/crystal-valley"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/crystal-valley">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover "
                    src={CrystalValley1}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Crystal Valley Sawantwadi Maharashtra{" "}
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadCrystalValley}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 11 park view */}

              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/park-view"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/park-view">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover "
                    src={parkView1}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Park View (Noida Extension){" "}
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadparkview}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>

                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* card 12 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/dishapuram"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/dishapuram">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover "
                    src={dishupuram}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Dishapuram (Sikar–Jaipur Highway) Rajasthan{" "}
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadDishapuram}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>


              {/* card 13 */}

              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/brijghat"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/brijghat">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover object-top "
                    src={brijghat}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : Brij GHat {" "}
                </p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>

                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={""}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer"
                  >
                    Download PDF <MdOutlineFileDownload size={20} />
                  </button>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

            </div>

            {/* 👉 Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full shadow-lg z-20 transition"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLaunchSection;
