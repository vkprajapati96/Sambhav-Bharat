import React from "react";
import mathura1 from "../image/MathuraImage/mathura1.png";
import mathura2 from "../image/MathuraImage/mathura2.png";
// import mathura3 from "../image/MathuraImage/mathura3.png";
import mathura4 from "../image/MathuraImage/mathura4.png";

const Mathura = () => {
  return (
    <>
      <div className="flex items-center justify-center z-10 px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">
          {/* Card 1 */}
          <div className="shadow-lg py-3">
            <img className="rounded-2xl" src={mathura1} alt="" />
          </div>

          {/* Card 2 */}
          <div className=" shadow-lg py-3 text-white">
            <img className="rounded-2xl" src={mathura2} alt="" />
          </div>

          <div className=" shadow-lg py-3 text-white">
            <img className="rounded-2xl" src={mathura4} alt="" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center z-10 px-6 ">
        <div className="grid grid-cols-1  gap-6 w-full max-w-8xl mt-16">
          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold">
              Residential Plot Project – SHRI SAYA GREENS ACRES
            </h3>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">Location —</span> MART VIRANDAWAN
            </p>
            <p className="text-xl 2xl:text-2xl">
              {" "}
              <span className="font-bold"> Project Name </span> SHRI SHAYA
              GREANS
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">Plot Size Available: </span> 111-460/
              sqyrd{" "}
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">Rate: </span> ₹. 22500/ sqryd{" "}
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold"> Registry & Mutation: </span> Ready –
              100% Legal{" "}
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              <span className="font-bold">Road Size: </span> 25 ft. & 30 ft.
              wide{" "}
            </p>
          </div>

          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold">
              Facilities: —
            </h3>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">✅ Gated Colony</p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">✅ Drainage System </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">✅ Street Lights</p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">✅ Park & Plantation</p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">✅ 24/7 Security</p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">✅ Electricity & Water Line</p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              🔐 Booking Amount: ₹51,000 only
            </p>
          </div>

          <div>
            <p className="text-xl 2xl:text-2xl">
              📍 Google Location & Brochure Available on Request
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mathura;
