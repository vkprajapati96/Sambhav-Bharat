import React from 'react'
import mall1 from '../image/MathuraMallImage/mall1.png'
import mall2 from '../image/MathuraMallImage/mall2.png'
import mall3 from '../image/MathuraMallImage/mall3.png'
import mall4 from '../image/MathuraMallImage/mall4.png'

const MathuraMall = () => {
    return (
        <>
            <div className="flex items-center justify-center px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl">

                    {/* Card 1 */}
                    <div className="shadow-lg bg-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden">
                        <img
                            className="w-full 2xl:h-[650px] h-[450px] sm:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                            src={mall1}
                            alt="Mall 1"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="shadow-lg bg-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden">
                        <img
                            className="w-full 2xl:h-[650px] h-[450px] sm:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                            src={mall2}
                            alt="Mall 2"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="shadow-lg bg-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden">
                        <img
                            className="w-full 2xl:h-[650px] h-[450px] sm:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                            src={mall3}
                            alt="Mall 3"
                        />
                    </div>

                    {/* Card 4 */}
                    <div className="shadow-lg bg-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden">
                        <img
                            className="w-full 2xl:h-[650px] h-[450px] sm:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                            src={mall4}
                            alt="Mall 4"
                        />
                    </div>

                </div>
            </div>



            <div className="flex items-center justify-center z-10 px-6 ">
                <div className="grid grid-cols-1  gap-6 w-full max-w-8xl mt-16">

                    <div>
                        <h3 className='text-3xl lg:text-5xl font-semibold'>V - ONE</h3>
                    </div>

                    <div>

                        <p className='text-xl font-bold'> DESTINATION PLACE – HAPPENING MALL USP:-</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>8 Km From Corridor </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>8 Km From Yamuna Expressway </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>17.5 Km Banka Bihari Mandir </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>13,5 Km From Chandrodaya Mandir</p>
                    </div>


                    <div>
                        <p className='text- 2xl:text-3xl'>14 Km From ISKON  / Prem Mandir</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>On Mathura to Kosikala Highway </p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Only one Mall VONE</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Mall to Mandir Battery Cars facility available</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Lower Ground   - Gamming Zone</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>Ground Floor – F & B Outlets</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> First Floor  - Factory Outlets</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Second Floor  - Food Court</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Three Movie Screens</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>  Population around mall 15 Lack</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'>  Students population around 55 to 65 Lack</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Distance from Mall to Agra 70 Km</p>
                    </div>

                    <div>
                        <p className='text-xl 2xl:text-3xl'> Distance from Delhi to Mall 150 Km</p>
                    </div>


                </div>
            </div>





        </>
    )
}

export default MathuraMall