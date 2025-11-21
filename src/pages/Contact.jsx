import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wgpy9hw", // EmailJS Service ID
                "template_qtwg46d", // EmailJS Template ID
                form.current,
                "7aKLUOXWf-nIxGGA7" // EmailJS Public Key
            )
            .then(
                (result) => {
                   
                    toast.success("Message sent successfully");
                    form.current.reset(); // Form reset
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 py-12 flex items-center justify-center">
            <div className="max-w-6xl w-full mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
                    We will contact you to discuss the details
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Please leave your Request
                </h1>

                {/* Form Start */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Name */}
                    <div>
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="user_name" // Must match EmailJS template variable
                            className="w-full bg-black border-b-2 border-yellow-500 py-2 outline-none"
                            placeholder="Name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1">E-mail</label>
                        <input
                            type="email"
                            name="user_email"
                            className="w-full bg-black border-b-2 border-yellow-500 py-2 outline-none"
                            placeholder="E-mail"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full bg-black border-b-2 border-yellow-500 py-2 outline-none"
                            placeholder="Location"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1">Phone No.</label>
                        <div className="flex items-center border-b-2 border-yellow-500">
                            <span className="flex items-center gap-1 pr-2">+91</span>
                            <input
                                type="tel"
                                name="phone"
                                className="bg-black py-2 outline-none w-full"
                                placeholder="Phone No."
                            />
                        </div>
                    </div>

                    {/* Property Type */}
                    <div>
                        <label className="block mb-1">Property Type</label>
                        <input
                            type="text"
                            name="property_type"
                            className="w-full bg-black border-b-2 border-yellow-500 py-2 outline-none"
                            placeholder="Plot / Appartment / Villa"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1">Budget</label>
                        <input
                            name="budget"
                            type="number"
                            className="w-full bg-black border-b-2 border-yellow-500 py-2 outline-none"
                            placeholder="budget"
                            rows="3"
                        />
                    </div>
                </form>

                {/* Submit Button */}
                <div className="mt-10 text-center">
                    <button
                        type="submit"
                        onClick={sendEmail}
                        className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
