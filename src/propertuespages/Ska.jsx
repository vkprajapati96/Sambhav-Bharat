import React from 'react'
import ska1 from '../image/Skaimage/ska1.webp'
import ska2 from '../image/Skaimage/ska2.webp'
import ska3 from '../image/Skaimage/ska3.webp'
import ska4 from '../image/Skaimage/ska4.webp'
import location from '../image/Skaimage/location.webp'
// import design1 from '../image/Skaimage/design1.jpeg'
// import design2 from '../image/Skaimage/design2.jpeg'

const Ska = () => {
    return (
        <>
            <div className="flex items-center justify-center z-10 px-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl' src={ska1} alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={ska2} alt="" />
                    </div>
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={ska3} alt="" />
                    </div>
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={ska4} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center z-10 px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl' src={location} alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white">
                        <h3 className="text-3xl lg:text-5xl font-semibold">LOCATION ADVANTAGES</h3>
                        <p className='mt-10 lg:text-lg 2xl:text-3xl text-sm'>1 minute from 8 lanes Delhi - Meerut Expressway.</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>10 minutes from Eastern Peripheral Expressway</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>20 minutes from Noida (Sector-62)</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>35 minutes drive from Anand Vihar</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>5 minutes from the proposed Metro Station</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>20-minute drive from Greater Noida-West</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>25 minutes from Raj Nagar Extension</p>
                        <p className='mt-4 lg:text-lg 2xl:text-3xl text-sm'>35 minutes from Akshardham Temple</p>
                    </div>



                </div>
            </div>


            
        </>
    )
}

export default Ska