import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRef } from "react";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.png";
import image3 from "../image/image3.png";
import image4 from "../image/image4.webp";
import thevelley from "../image/thevelley.JPG";
import newlauncimage from "../image/newlauncimage.jpeg";
import newlauncimage1 from "../image/newlauncimage1.jpeg";
// import finally-Arrived from "../image/finally-Arrived.jpeg";
import finallyArrived from "../image/finally-Arrived.jpeg";

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

  const handleDownloadthevelley = () => {
    const link = document.createElement("a");
    link.href = "/thevelley.pdf"; // public folder se direct access
    link.download = "thevelley.pdf"; // file ka naam jab download ho
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
  const handleDownloadPrimeVIsta = () => {
    const link = document.createElement("a");
    link.href = "/prime-vista.pdf"; // public folder se direct access
    link.download = "catalogue-prime-vista.pdf"; // file ka naam jab download ho
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
                  HRD APPROVED
                </span>
                <span className="absolute top-[205px] left-[90px] bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  Rera Coming Soon
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
                  to="/the-velley"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/the-velley">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover"
                    src={thevelley}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">
                  Location : The Velley
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

              {/* Card 6 */}
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

              {/* Card 7 */}
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

              {/* Card 8 */}
              <div className="w-80 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg relative flex-shrink-0">
                <Link
                  to="/prime-vista"
                  className="absolute top-2 right-2 text-white text-sm font-semibold flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <AiOutlineEye className="font-bold" size={18} /> View
                </Link>

                <Link to="/prime-vista">
                  <img
                    className="rounded-t-3xl w-full h-60 object-cover object-top"
                    src={finallyArrived}
                    alt=""
                  />
                </Link>
                <p className="text-white mt-2 px-2 mb-3">Location : jhajhar</p>
                <p className="text-white mt-2 mx-2">
                  If you want to know more about this place, please connect with
                  us.
                </p>
                {/* <div className="flex items-center gap-3 px-2 pb-3">
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div> */}
                <div className="flex items-center gap-3 px-2 pb-3">
                  <button
                    onClick={handleDownloadPrimeVIsta}
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
