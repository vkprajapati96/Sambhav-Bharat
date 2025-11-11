import React from 'react'
import chandroday1 from '../image/Chandrodayimage/chandroday1.jpeg'
import chandroday2 from '../image/Chandrodayimage/chandroday2.jpeg'

const Chandroday = () => {
    return (
        <>
            <div className="flex items-center justify-center z-10 px-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">

                    {/* Card 1 */}
                    <div className="shadow-lg py-3">
                        <img className='rounded-2xl' src={chandroday1} alt="" />
                    </div>

                    {/* Card 2 */}
                    <div className=" shadow-lg py-3 text-white">
                        <img className='rounded-2xl' src={chandroday2} alt="" />
                    </div>
                  
                </div>
            </div>


        </>
    )
}

export default Chandroday