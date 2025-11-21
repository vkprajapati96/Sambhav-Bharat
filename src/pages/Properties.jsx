import React from 'react'
import Contact from './Contact'

const Properties = () => {
    return (
        <>
            <div className="mx-6 flex justify-center">
                <div className="w-full max-w-8xl relative">
                    <img
                        className="w-full h-[80vh] object-cover rounded-4xl"
                        src="https://i.pinimg.com/1200x/2d/1d/66/2d1d66865a712ebd53b6a2d6b98a930d.jpg"
                        alt="House"
                    />

                    {/* Inset overlay for text */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-4xl bg-gradient-to-t from-black/100 to-transparent"></div>

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-4 right-4 text-white">
                        <div className="flex justify-between items-start">
                            {/* Left text */}
                            <div className="lg:max-w-[50%] mt-20">
                                <p className="text-4xl font-bold">
                                    Explore Your Perfect Property At Sambhav Bharat
                                </p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>



            {/* ----------------second part------------------- */}
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3 text-white lg:mt-10">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-3xl font-semibold">Residental Properties</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>Step into your dream home with our extensive collection of residential properties. From modern apartments in bustling neighborhoods to spacious villas in serene locales, we cater to every lifestyle and budget. Each property is carefully selected to provide comfort, convenience, and a sense of belonging. Whether it’s proximity to schools, workplaces, or recreational areas, our residential listings help you find a home that fits your unique needs and aspirations.</p>
                    </div>


                    {/* Card 2 */}
                    <div className="shadow-lg py-3">

                        <img className='rounded-2xl mt-4 w-full lg:h-80 h-80 2xl:h-96 object-cover' src="https://i.pinimg.com/1200x/14/c8/fe/14c8fe420033cbfb8e0197a34e493daf.jpg" alt="" />
                    </div>
                </div>
            </div>



            {/* ----------------third part----------------- */}
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl' src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg" alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white lg:mt-12">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-3xl font-semibold">Commercial Properties</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>Maximize your business potential with our premium commercial properties. We offer office spaces, retail outlets, and industrial units designed to provide the perfect environment for growth. With strategic locations, excellent connectivity, and high visibility, our commercial properties are ideal for startups, expanding businesses, and established enterprises. Invest in a space that not only supports your operations but also enhances your brand presence.</p>
                    </div>



                </div>
            </div>


            {/* -------------fourth part---------------------- */}
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3 text-white lg:mt-16">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-3xl font-semibold">Farmhouse / Pent House</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>Reconnect with nature and enjoy the luxury of space with our exclusive farmhouse properties. Perfect for weekend getaways or permanent residences, these properties provide peace, privacy, and a green escape from city life. With ample open areas, lush landscaping, and thoughtful designs, our farmhouses combine modern comfort with the serenity of nature, offering an ideal retreat for families and individuals alike.</p>
                    </div>


                    {/* Card 2 */}
                    <div className="shadow-lg py-3">

                        <img className='rounded-2xl mt-4 w-full lg:h-80 h-80 2xl:h-96 object-cover' src="https://i.pinimg.com/1200x/4d/18/97/4d1897092a7dd055ce952b6ec6a4bec5.jpg" alt="" />
                    </div>
                </div>
            </div>


            {/* -------------fifith part----------------- */}
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl mt-4 w-full lg:h-80 h-80 2xl:h-96 object-cover' src="https://i.pinimg.com/1200x/c8/07/58/c807582233e49525bd2c0ee122314b1c.jpg" alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white lg:mt-10">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-3xl font-semibold">ROI Properties</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>Make your money work for you with high-return investment properties. From rental-ready residential units to commercial hotspots, we help you identify opportunities that maximize returns while minimizing risks. Our expert guidance ensures you invest in properties with strong growth potential, steady rental demand, and strategic locations. Whether you’re a first-time investor or a seasoned property owner, our ROI-focused listings are tailored to grow your wealth efficiently.</p>
                    </div>



                </div>
            </div>



            {/* -----------------------contact page-------------------- */}
            <Contact />
        </>
    )
}

export default Properties