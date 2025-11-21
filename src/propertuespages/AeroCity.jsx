import React from 'react'
import aerocity1 from '../image/AerocityImage/aerocity1.jpeg'
import aerocity2 from '../image/AerocityImage/aerocity2.jpeg'
import aerocity3 from '../image/AerocityImage/aerocity3.jpeg'
import aerocity4 from '../image/AerocityImage/aerocity4.jpeg'

const AeroCity = () => {
    return (
        <>
            <div className="flex items-center justify-center z-10 px-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl' src={aerocity1} alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={aerocity2} alt="" />
                    </div>
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={aerocity3} alt="" />
                    </div>
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={aerocity4} alt="" />
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center z-10 px-6 ">
                <div className="grid grid-cols-1  gap-6 w-full max-w-8xl mt-16">

                    <div>
                        <h3 className='text-3xl lg:text-4xl font-semibold'>
                            हारे के सहारे बाबा खाटू श्याम कि नगरी में फार्महाउस प्लॉटस का प्रीमियम प्रोजेक्ट, <br />
                            जंहा मौका मिले असीम आनंद के साथ साथ, 🎯 बेहतर इन्वेस्टमेंट रिटर्न का भी,</h3>
                    </div>

                    <div className='mt-10'>
                        <p className='text-xl 2xl:text-2xl'>👉प्रोजेक्ट एरिया-100 एकड़,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>👉 Price - 10,000 प्रति वर्ग गज, </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>👉रिहायशी कन्वर्ट,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>👉बैंक लोन सुविधा उपलब्ध, </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>👉 प्रारूप गणना - 100 वर्ग गज से प्रारंभ,  </p>
                    </div>

                    <br /><br />

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩 गेटेड प्रवेश,  </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩 सिंगल गेटेड सोसाइटी,</p>
                    </div>


                    <div>
                        <p>🧩 24x7 सुरक्षा गार्ड, </p>
                    </div>


                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩 30 व 40 फीट रोड,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩सड़क किनारे का स्मारक,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩स्ट्रीट लेट,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩 सुरक्षित सीमा पत्रिका दीवार,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩सभी प्लाटों की सीमाज्ञान,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩 24x 7 पानी,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩24x7 बिजली,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩ग्लोब मार्केट,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩बच्चों का खेल मैदान,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🧩वरिष्ठ नागरिक क्षेत्र,</p>
                    </div>

                <br /><br />
                    <div>
                        <p className='text-xl 2xl:text-2xl'>🎯 खाटू श्याम जी मंदिर की दूरी - 8 किमी, </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🎯खाटू रेलवे स्टेशन की मात्रा - 5 कि.मी.,</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-2xl'>🎯 SH113 - 10 मीटर</p>
                    </div>

                     <div>
                        <p className='text-xl 2xl:text-2xl'>🎯 सीकर - 50 किमी,</p>
                    </div>

                     <div>
                        <p className='text-xl 2xl:text-2xl'>🎯 जयपुर - 60 किमी,</p>
                    </div>
        
                </div>
            </div>

        </>
    )
}

export default AeroCity