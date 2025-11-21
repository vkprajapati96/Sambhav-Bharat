import React, { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import capture from '../image/Capture.JPG'
import Contact from "./Contact";
import { Link } from 'react-router-dom'
import mainImage from '../image/mainimage.png'
// import image1 from '../image/image1.jpeg'
// import image2 from '../image/image2.png'
import image3 from '../image/image3.png'
// import image4 from '../image/image4.webp'
import { MdOutlineFileDownload } from "react-icons/md";
// import newlauncimage from '../image/newlauncimage.jpeg'
// import newlauncimage1 from '../image/newlauncimage1.jpeg;'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NewLaunchSection from "./NewLaunchSection";



const Home = () => {

    const data = [
        {
            img: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
            title: "Residential / Plot",

        }, {
            img: image3,
            title: "Leasing Property",
        }, {
            img: "https://i.pinimg.com/736x/74/41/a2/7441a2f3acb3fa20772dcdeb592c5bd5.jpg",
            title: "Commercial Properties",
        }
    ]

    const testimonials = [
        {
            title: "Residential Property in South Delhi",
            description:
                "Sambhav Bharat made the entire process of finding our new home seamless. The team was extremely professional, guided us through every detail, and helped us finalize a property that perfectly suited our family’s needs. Highly recommended for anyone buying in South Delhi.",
            author: "Rohit Mehra, New Delhi",
        },
        {
            title: "Commercial Office in Gurgaon",
            description:
                "We were looking for a prime office space for our growing team. Sambhav Bharat understood our requirements and quickly identified the right property. Their negotiation support and attention to detail saved us time and money. Fantastic service!",
            author: "Ananya Kapoor, Entrepreneur",
        },
        {
            title: "Apartment in Safdarjung Enclave",
            description:
                "As a working professional, I needed a safe and modern apartment on rent in a prime location. Sambhav Bharat provided multiple verified options and handled all paperwork smoothly. The experience was stress-free from start to finish.",
            author: "Arjun Malhotra, Tenant",
        },
        {
            title: "Luxury Apartment in Greater Kailash",
            description:
                "Sambhav Bharat made finding our dream apartment effortless. The team understood our lifestyle needs, showed us the best options, and took care of every detail. We moved in without stress or delays.",
            author: "Simran Arora, New Delhi",
        }, {
            title: "Premium Villa in Chattarpur",
            description: "I was looking for a spacious property for my family. Sambhav Bharat’s team guided me through every step and helped me find a villa that exceeded expectations. Their service is truly top-notch.",
            author: "Rajesh Sharma, Business Owner",
        }, {
            title: "Builder Floor in Hauz Khas",
            description: "I wanted a modern builder floor in a prime South Delhi neighborhood. Sambhav Bharat showed only verified properties, helped negotiate a fair deal, and closed it quickly. Highly recommended.",
            author: "Karan Gupta, Home Buyer",
        }, {
            title: "Studio Apartment in Vasant Vihar",
            description: "As a first-time home buyer, I was nervous about the process. Sambhav Bharat made everything easy — from shortlisting options to final paperwork. Truly professional and reliable.",
            author: "Ishita Mehta, Working Professional",
        }, {
            title: "Modern Apartment in Mathura",
            description: "Owning a home in Mathura was always a dream. Sambhav Bharat turned it into reality with their expert guidance and trusted network. The entire process was quick and smooth.",
            author: "Anjali Verma, Mathura",
        }, {
            title: "Residential Plot in Khatu Shyam",
            description: "We were looking for a peaceful location to build our dream home. Sambhav Bharat helped us find the perfect plot with clear documentation and complete support. A truly reliable team.",
            author: "Vivek Sharma, Investor",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        mainImage, // pehla image
        "https://i.pinimg.com/1200x/fc/19/8c/fc198c6f9e4c4d60f829c8318ea2bb3f.jpg",
        "https://i.pinimg.com/1200x/40/01/31/400131994747d3b31d422fdfeb45942a.jpg",
        // aur bhi images add kar sakte ho
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 3 second interval

        return () => clearInterval(interval); 
    }, []);


    return (
        <>
            {/* ----------image section-------------- */}
            <div className="lg:mx-6 mx-2 flex justify-center">
                <div className="w-full max-w-8xl relative">
                    {/* Image */}
                    <img
                        className="w-full h-[80vh] object-cover rounded-4xl transition-all duration-700"
                        src={images[currentIndex]}
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
                                    Turning Your Property
                                    <br />
                                    Dreams Into Reality
                                </p>
                            </div>

                            {/* Right text */}
                            <div className=" text-lg lg:block hidden">
                                <Link to="/about">
                                    <div className="bg-white/20 backdrop-blur-3xl border border-white px-8 rounded-2xl py-2 flex items-center justify-between">
                                        <div>
                                            <p className="text-xl">50+ Projects</p>
                                            <p className="text-sm">Made Around India</p>
                                        </div>
                                        <div>
                                            <BsArrowUpRight size={25} />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/about">
                                    <div className="bg-white/20 backdrop-blur-3xl border border-white px-8 rounded-2xl mt-2 py-2">
                                        <img
                                            className="w-56 h-28 mt-2 rounded-2xl"
                                            src="https://i.pinimg.com/1200x/fc/19/8c/fc198c6f9e4c4d60f829c8318ea2bb3f.jpg"
                                            alt=""
                                        />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="mt-2">Iconic Architecture</p>
                                                <p className="text-sm">Explore the Best Properties</p>
                                            </div>
                                            <div>
                                                <BsArrowUpRight size={25} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------second section------------ */}

            <div className='mt-16'>

                <div className="mx-6 flex justify-center ">
                    <div className="grid lg:grid-cols-2 gap-10  max-w-8xl">
                        <div className=''>
                            <div className="lg:flex hidden lg:block gap-10">
                                <img className="w-44 2xl:w-56 rounded-3xl mt-7 lg:mt-0" src="https://i.pinimg.com/1200x/4d/50/93/4d509338215f1f21d93db4d37dd8cf92.jpg" alt="" />

                                <img className="w-44 2xl:w-56 rounded-3xl mt-7 lg:mt-0" src="https://img.freepik.com/premium-photo/modern-house-villa-design-with-architectural-style-3d-rendering_1004538-4921.jpg" alt="" />

                                <img className="w-44 2xl:w-56 rounded-3xl mt-7 lg:mt-0" src="https://img.freepik.com/premium-photo/modern-house-residential_940570-200.jpg" alt="" />
                            </div>

                            <hr className="text-white border-2 border-white mt-10" />

                            <div className="mt-8">
                                <h3 className="text-white text-4xl font-bold">Homes That Define Your Lifestyle</h3>

                                <p className="text-white text-xl mt-7 2xl:text-3xl">We believe a home is more than just a space — it’s where your story begins. At Sambhav Bharat, we design and deliver properties that combine comfort, convenience, and community living. Every project reflects our promise to create environments where families grow, businesses thrive, and futures are built.</p>
                            </div>
                        </div>

                        <div className="gap-6 mx-auto">
                            <div>
                                <img className="rounded-3xl" src="https://cdn.pixabay.com/photo/2017/07/08/06/48/sa-rapita-2483668_1280.jpg" alt="" />
                            </div>

                            <div className="text-white flex justify-between mt-10">
                                <div>
                                    <p className="text-4xl 2xl:text-6xl font-semibold">150+</p>
                                    <p>Iconic Deigns</p>
                                </div>
                                <div>
                                    <p className="text-4xl 2xl:text-6xl font-semibold">700+</p>
                                    <p>Satisfied Client</p>
                                </div>
                                <div>
                                    <p className="text-4xl 2xl:text-6xl font-semibold">50+</p>
                                    <p>Project Delivered</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* -------------tHRD section--------------------- */}
            <p className="text-white text-4xl text-center mt-24 font-semibold">Check Our Selection From</p>


            <NewLaunchSection />



            {/* -------------fourth section-------------------- */}
            <h1 className="text-white text-4xl text-center mt-32 font-bold">Our Services</h1>
            <p className="text-white text-center mt-6 text-2xl">Tailored Solution by Expert Real <br /> Estate Agents</p>
            <div className="flex justify-center mt-6">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 text-center items-center max-w-8xl w-full text-white">
                    {data?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`rounded-lg overflow-hidden shadow-md p-4 h-full`}
                            >
                                <Link to="/contact">
                                    <img
                                        src={item?.img}
                                        alt=""
                                        className="w-full lg:h-80 2xl:h-[450px] object-cover mx-auto mb-4 rounded-md"
                                    />
                                </Link>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className='mt-4'>{item.pera}</p>

                            </div>
                        );
                    })}
                </div>
            </div>





            {/*------------------ fifth part------------- */}

            <h1 className="text-white text-4xl text-center mt-24 font-bold">Start your property journey with us</h1>
            <p className="text-white text-center mt-6 text-2xl">We are ready to support you <br /> with your property requirements.</p>
            <div className="mx-6 flex justify-center mt-16">
                <div className="w-full max-w-8xl relative">
                    <img
                        className="w-full object-cover rounded-4xl"
                        src={capture}
                        alt="House"
                    />
                </div>
            </div>



            {/* ------------------sixsth part------------- */}

            <h1 className="text-white text-center text-4xl mt-16 font-bold">Client Testimonials</h1>
            <div className="flex items-center justify-center z-10 px-6 mt-10">
                {/* Horizontal scroll container */}
                <div className="flex overflow-x-auto scrollbar-hide space-x-6 w-full max-w-8xl lg:mt-16 scroll-smooth">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[400px] bg-white/10 backdrop-blur-3xl shadow-lg text-white px-6 py-3 border-e-2 border-amber-400"
                        >
                            <h3 className="text-2xl 2xl:text-3xl font-bold">{item.title}</h3>
                            <p className="mt-6 2xl:text-xl">{item.description}</p>
                            <p className="mt-10 2xl:text-xl">{item.author}</p>
                        </div>
                    ))}
                </div>
            </div>

            <br />
            {/* --------------contact page------------- */}
            <Contact />
        </>
    );
};

export default Home;
