import React from 'react'
import Aboutimg from "../../public/about.jpg"
const About = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white text-center border-t pt-8 sm:text-4xl">
        ABOUT US
      </h1>
      <div className="my-8 flex flex-col md:flex-row gap-8 lg:gap-16">
        <img 
          className="w-full md:w-1/2 lg:max-w-[480px] h-64 sm:h-80 object-cover rounded-lg" 
          src={Aboutimg}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          
          <p className="text-sm sm:text-base">
          This application demonstrates a multi-page setup using React Router. It includes a Home page,
        an About page, and a Users section with individual user details. The app is styled with Tailwind CSS
        for a responsive and modern look.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About