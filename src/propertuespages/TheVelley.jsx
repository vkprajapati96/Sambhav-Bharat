import React from 'react'
import image1 from '../image/thevelly/image1.JPG'
import image2 from '../image/thevelly/image2.JPG'
import image3 from '../image/thevelly/image3.JPG'
import image4 from '../image/thevelly/image4.JPG'

const TheVelley = () => {
  return (
    <>
    <div className="flex items-center justify-center z-10 px-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl mt-16">
    
                        {/* Card 1 */}
                        <div className="shadow-lg py-3">
                            <img className='rounded-2xl' src={image1} alt="" />
                        </div>
    
                        {/* Card 2 */}
                        <div className=" shadow-lg py-3 text-white">
                            <img className='rounded-2xl' src={image2} alt="" />
                        </div>
                        <div className=" shadow-lg py-3 text-white">
                            <img className='rounded-2xl' src={image3} alt="" />
                        </div>
                        <div className=" shadow-lg py-3 text-white">
                            <img className='rounded-2xl' src={image4} alt="" />
                        </div>
                    </div>
                </div>
    
    
    </>
  )
}

export default TheVelley