import React from "react";

const Hero = () => {
  return (
    <div className="py-10">
      <div className="w-full h-[500px] rounded-md bg-[url('./back.jpg')] bg-cover">
        <div className="w-full md:w-4/5 lg:w-1/2 2xl:w-1/3 bg-gradient-to-r from-gray-600 h-full flex flex-col justify-center space-y-5 p-5 text-white rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold">Explore The World With Us</h1>
          <p className="text-sm md:text-base 
            w-4/5 lg:w-3/5 2xl:w-2/3
            bg-white bg-opacity-10 p-5 rounded-md

          ">
            Discover new destinations, find amazing experiences, 
            and book your dream vacation with us. Explore the world
            today!
          </p>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Search place"
              className="px-5 py-2 bg-white rounded-l-md text-gray-500 outline-0" 
            />
            <button className="px-5 py-2 bg-green-500 font-bold rounded-r-md">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
