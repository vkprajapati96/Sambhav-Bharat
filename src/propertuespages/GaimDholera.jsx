import React from "react";
import dholera1 from "../image/GaimDholera/dholera1.jpeg";
import dholera2 from "../image/GaimDholera/dholera2.jpeg";
import dholera3 from "../image/GaimDholera/dholera3.jpeg";
import dholera4 from "../image/GaimDholera/dholera4.jpeg";
import statue  from "../image/GaimDholera/statue.jpeg";

const GaimDholera = () => {
  return (
    <>
      {/* section 1 */}
      <div className="flex items-center justify-center z-10 px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">
          <div className="shadow-lg py-3">
            <img className="rounded-2xl" src={dholera1} alt="" />
          </div>

          <div className=" shadow-lg py-3 text-white">
            <img className="rounded-2xl" src={dholera2} alt="" />
          </div>
          <div className=" shadow-lg py-3 text-white">
            <img className="rounded-2xl" src={dholera3} alt="" />
          </div>
          <div className=" shadow-lg py-3 text-white">
            <img className="rounded-2xl" src={dholera4} alt="" />
          </div>
        </div>
      </div>

<div className="flex items-center justify-center z-10 px-6">
  <div className="grid grid-cols-1 gap-6 w-full max-w-8xl mt-16 text-white">

    {/* Heading */}
    <div>
      <h3 className="text-3xl lg:text-5xl font-semibold">
        Tata Electronics × Merck Group Partnership Update
      </h3>
    </div>


    {/* Description */}
    <div>
      <p className="text-xl 2xl:text-2xl">
        Tata Electronics और Merck Group ने गुजरात के धोलेरा में टाटा के ₹91,000 करोड़ 
        के सेमीकंडक्टर फैब प्लांट के लिए साझेदारी की है. यह सहयोग सेमीकंडक्टर 
        निर्माण के लिए आवश्यक सामग्रियों और सेवाओं पर केंद्रित है.
      </p>
    </div>

    {/* Major Heading */}
    <div>
      <h3 className="text-3xl lg:text-5xl font-semibold mt-8">
        सहयोग का विवरण
      </h3>
    </div>

    {/* Points */}
    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">समझौता ज्ञापन (MoU): </span>
        इस साझेदारी की घोषणा सितंबर 2025 में Semicon India कार्यक्रम के दौरान एक 
        समझौता ज्ञापन पर हस्ताक्षर करके की गई थी.
      </p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">Merck की भूमिका: </span>
        Merck, जो सेमीकंडक्टर निर्माण सामग्री की वैश्विक आपूर्तिकर्ता है, टाटा को ये चीजें उपलब्ध कराएगी:
      </p>

      <p className="text-xl 2xl:text-2xl mt-2">• उच्च-शुद्धता वाले इलेक्ट्रॉनिक सामग्री</p>
      <p className="text-xl 2xl:text-2xl mt-2">• उन्नत गैस और रासायनिक वितरण प्रणालियाँ</p>
      <p className="text-xl 2xl:text-2xl mt-2">• टर्नकी फैब इंफ्रास्ट्रक्चर सेवाएँ</p>
      <p className="text-xl 2xl:text-2xl mt-2">• आर्टिफिशियल इंटेलिजेंस (AI) पर आधारित मटेरियल इंटेलिजेंस समाधान</p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">पारिस्थितिकी तंत्र का विकास: </span>
        इस सहयोग में भारत में सेमीकंडक्टर पारिस्थितिकी तंत्र को विकसित करने के लिए कई पहलें भी शामिल हैं, जैसे:
      </p>

      <p className="text-xl 2xl:text-2xl mt-2">• स्थानीय वेयरहाउसिंग</p>
      <p className="text-xl 2xl:text-2xl mt-2">• कच्चे माल की आपूर्ति श्रृंखला का विकास</p>
      <p className="text-xl 2xl:text-2xl mt-2">• कर्मचारियों का प्रशिक्षण</p>
      <p className="text-xl 2xl:text-2xl mt-2">• उद्योग के मानकों को स्थापित करना</p>
    </div>

    <div>
      <p className="text-xl 2xl:text-2xl">
        <span className="font-bold">उत्पादन: </span>
        धोलेरा में बनने वाला यह प्लांट ऑटोमोटिव, मोबाइल डिवाइस, AI और अन्य 
        क्षेत्रों के लिए चिप्स बनाएगा.
      </p>
    </div>

  </div>
</div>
{/* section 3 */}
<div className="w-full  text-white py-16 px-6 flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-8xl items-center">

    {/* LEFT — IMAGE */}
    <div>
      <img
        src={statue}
        alt="Gujarat Mega Projects"
        className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* RIGHT — HEADING + CONTENT */}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
        From Dholera to GIFT City: Top 8 Mega Projects Transforming Gujarat in 2025
      </h2>

      <p className="text-lg lg:text-xl mt-4 leading-relaxed">
        Gujarat is witnessing rapid infrastructure growth through numerous mega 
        projects that will strengthen the state in the coming years. As India’s 
        industrial backbone, it is developing sustainable, world-class urban models 
        that exemplify progress and globalization.
      </p>
    </div>

  </div>
</div>


    </>
  );
};

export default GaimDholera;
