import React from 'react'
import Contact from './Contact'

const About = () => {
    return (
        <>
            <div className="mx-6 flex justify-center">
                <div className="w-full max-w-8xl relative">
                    <img
                        className="w-full h-[80vh] object-cover rounded-4xl"
                        src="https://i.pinimg.com/1200x/d9/75/38/d975388b38a9e46087725128dfa6f588.jpg"
                        alt="House"
                    />

                    {/* Inset overlay for text */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-4xl bg-gradient-to-t from-black/100 to-transparent"></div>

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-4 right-4 text-white">
                        <div className="flex justify-between items-start">
                            {/* Left text */}
                            <div className="lg:max-w-[50%] mt-20">
                                <p className="text-5xl font-bold">
                                    Redefining Real Estate with Trust and Expertise
                                </p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* -------------second part-------------- */}

            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl' src="https://i.pinimg.com/1200x/15/ab/1c/15ab1c5fedd77cc9a8281fb0bff12431.jpg" alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white mt-8">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-2xl font-semibold">Who We Are  - Sambhav <br/> Bharat</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>Your Trusted Real Estate Partner <br /> <br />At Sambhav Bharat, we know real estate is more than buildings—it’s about people, dreams, and opportunities. With years of experience across India’s property market, we deliver transparent, reliable, and customer-focused solutions for buying, selling, renting, and investing.</p>
                    </div>



                </div>
            </div>



            {/* ---------third part---------------- */}
            <div className="lg:mx-16 flex justify-center mt-16">
                <div className="w-full max-w-8xl relative">
                    <img
                        className="w-full h-[80vh] object-cover"
                        src="https://i.pinimg.com/1200x/ed/51/ac/ed51ace08b856e62beab8926bf9ec682.jpg"
                        alt="House"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Centered text */}
                    <div className="absolute inset-0 flex items-center justify-center px-6 z-10 text-center text-white">
                        <p className="text-2xl lg:text-3xl 2xl:text-4xl max-w-7xl">
                            Finding the perfect property is a personal journey. That’s why we offer a one-on-one discussion over coffee—to understand your unique needs, explore your preferences, and align with your budget. Together, we craft a focused plan to guide you to your dream home.
                        </p>
                    </div>

                </div>
            </div>



            {/* -----------fourth part-------------- */}
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <p className='text-white text-4xl'>Our Mission and <br /> Vision</p>
                        <hr className='w-28 border-2 border-yellow-300 mt-2' />
                        <img className='rounded-2xl mt-4 w-full lg:h-80 h-80 2xl:h-96 object-cover' src="https://i.pinimg.com/1200x/5e/34/53/5e3453e6ca502ecb154410b0e363d72c.jpg" alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className="shadow-lg py-3 text-white lg:mt-40">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-2xl font-semibold">Mission Statement</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>To make real estate simple, seamless, and trustworthy. We empower our clients to buy, rent, or invest with confidence, guided by integrity, transparency, and professionalism..</p>
                    </div>



                </div>
            </div>



            {/* ------------fifith part---------------- */}
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3 text-white lg:mt-20">
                        <h3 className="lg:text-4xl 2xl:text-5xl text-2xl font-semibold">Vision Statement</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-2xl text-lg'>To set the benchmark in Indian real estate—delivering exceptional value, nurturing lasting relationships, and redefining excellence in property solutions and customer satisfaction.</p>
                    </div>


                    {/* Card 2 */}
                    <div className="shadow-lg py-3">

                        <img className='rounded-2xl mt-4 w-full lg:h-80 h-80 2xl:h-96 object-cover' src="https://i.pinimg.com/1200x/5e/34/53/5e3453e6ca502ecb154410b0e363d72c.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* ------------------contact page---------------------- */}

            <Contact />
        </>
    )
}

export default About