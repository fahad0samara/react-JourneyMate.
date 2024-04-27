import React from 'react';
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full py-10 bg-gray-950 text-gray-200'>
      <div className='w-11/12 md:w-4/5 xl:w-3/4 m-auto flex flex-col justify-center items-center space-y-10'>
        <h1 className='text-4xl md:text-5xl font-bold'>JourneyMate</h1>
        <div>
          <ul className='flex space-x-5 text-lg'>
            <li>Home</li>
            <li>Places</li>
            <li>Trips</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex items-center space-x-10'>
          <AiOutlineInstagram size={'2rem'} />
          <AiOutlineYoutube size={'2rem'} />
          <AiOutlineGithub size={'2rem'} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
