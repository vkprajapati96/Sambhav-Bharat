
function Form() {

  
  

  
  
  return (
   <div className="mt-[8rem] flex flex-col gap-3 items-center">
  <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    We will contact you to discuss the details
  </h1>
  <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
    Please leave your Request
  </h2>

  <form className="flex flex-col mt-8 gap-10 w-full max-w-6xl mx-auto px-4">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Name</label>
        <input
          className="pb-2 outline-none bg-transparent w-full text-gray-300 font-medium border-b-2 border-amber-400 placeholder-gray-500"
          placeholder="Name"
          type="text"
          name="name"
        />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Email</label>
        <input
          className="pb-2 outline-none bg-transparent w-full text-gray-300 font-medium border-b-2 border-amber-400 placeholder-gray-500"
          placeholder="Email"
          type="email"
          name="email"
        />
      </div>
      {/* Location */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Location</label>
        <input
          className="pb-2 outline-none bg-transparent w-full text-gray-300 font-medium border-b-2 border-amber-400 placeholder-gray-500"
          placeholder="Location"
          type="text"
          name="location"
        />
      </div>
      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Phone Number</label>
        <input
          className="pb-2 outline-none bg-transparent w-full text-gray-300 font-medium border-b-2 border-amber-400 placeholder-gray-500"
          placeholder="91+ Phone no."
          type="tel"
          name="phone"
        />
      </div>
      {/* Property Type */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Property Type</label>
        <input
          className="pb-2 outline-none bg-transparent w-full text-gray-300 font-medium border-b-2 border-amber-400 placeholder-gray-500"
          placeholder="Plot / Apartment / Villa"
          type="text"
          name="propertyType"
        />
      </div>
      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Message</label>
        <input
          className="pb-2 outline-none bg-transparent w-full text-gray-300 font-medium border-b-2 border-amber-400 placeholder-gray-500"
          placeholder="Message"
          type="text"
          name="message"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="mx-auto mt-4 text-black font-bold bg-amber-400 w-32 h-10 rounded-lg hover:bg-yellow-500 transition-all"
    >
      Submit
    </button>
  </form>
</div>

  );
}

export default Form;