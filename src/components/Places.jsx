import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

const Places = () => {
  return (
    <div className='py-10 bg-green-100'>
      <div className='w-11/12 md:w-4/5 xl:w-3/4 m-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold'>Explore Popular Destinations</h1>
          <button className='px-5 py-2 rounded-md border border-green-500 text-green-600'>View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image2.jpg" alt="Moscow" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Moscow</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>4.5</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Moscow, Russia</span></p>
              <p className='text-sm text-gray-700'>Explore the vibrant culture and rich history of Russia's capital city.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image1.jpg" alt="Petra" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Petra</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>2.5</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Petra, Jordan</span></p>
              <p className='text-sm text-gray-700'>Explore the ancient city of Petra, a UNESCO World Heritage Site and one of the new Seven Wonders of the World.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image3.jpg" alt="Greece" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Greece</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>3.6</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Greece</span></p>
              <p className='text-sm text-gray-700'>Experience the beauty of Greece with its stunning beaches, ancient ruins, and picturesque islands.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image4.jpg" alt="Rio de Janeiro" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Rio de Janeiro</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>4.2</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Rio de Janeiro, Brazil</span></p>
              <p className='text-sm text-gray-700'>Explore the vibrant city of Rio de Janeiro, known for its stunning beaches, iconic landmarks, and lively culture.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image5.jpg" alt="Madrid" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Madrid</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>3.9</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Madrid, Spain</span></p>
              <p className='text-sm text-gray-700'>Experience the vibrant culture and rich history of Madrid, Spain's capital city.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image7.jpg" alt="Venice" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Venice</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>3.5</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Venice, Italy</span></p>
              <p className='text-sm text-gray-700'>Experience the magic of Venice, known for its romantic canals, historic architecture, and vibrant culture.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image8.jpg" alt="Dubai" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>Dubai</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>2.5</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>Dubai, UAE</span></p>
              <p className='text-sm text-gray-700'>Discover the luxury and glamour of Dubai, known for its futuristic architecture, vibrant nightlife, and extravagant shopping malls.</p>
            </div>
          </div>
          <div className="place bg-white border rounded-lg overflow-hidden">
            <img src="./image10.jpg" alt="London" className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>London</h1>
              <div className='flex items-center space-x-2'>
                <span className='text-yellow-500'><AiFillStar/></span>
                <span>2.2</span>
              </div>
              <p className='flex items-center space-x-2 text-gray-500'><IoLocationOutline/> <span>London, UK</span></p>
              <p className='text-sm text-gray-700'>Explore the iconic city of London, known for its rich history, world-class museums, and diverse culture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
