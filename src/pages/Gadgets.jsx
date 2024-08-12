import React from 'react';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

const Gadgets = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6  text-[19px]">
          BROWSING: GADGETS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="relative">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg"
                alt="DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts"
                className="w-full h-[227px] object-cover rounded-t-lg cursor-pointer"
              />
              <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                Gadgets
              </div>
              <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                8.9
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">
                DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
              </h2>
              <p className="text-sm text-gray-500 mb-4">Shane Doe • Jan 15, 2021</p>
              <p className="text-gray-700 text-sm flex-grow">
                To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
              </p>
              <div className="flex justify-between mt-4">
                <button className="flex items-center text-blue-500 hover:text-blue-700">
                  <AiOutlinePlus className="mr-1" /> Create
                </button>
                <button className="flex items-center text-red-500 hover:text-red-700">
                  <AiOutlineDelete className="mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="relative">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg"
                alt="Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed"
                className="w-full h-[227px] object-cover rounded-t-lg"
              />
              <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                Gadgets
              </div>
              <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                8.9
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">
                Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed
              </h2>
              <p className="text-sm text-gray-500 mb-4">Shane Doe • Jan 15, 2021</p>
              <p className="text-gray-700 text-sm flex-grow">
                To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
              </p>
              <div className="flex justify-between mt-4">
                <button className="flex items-center text-blue-500 hover:text-blue-700">
                  <AiOutlinePlus className="mr-1" /> Create
                </button>
                <button className="flex items-center text-red-500 hover:text-red-700">
                  <AiOutlineDelete className="mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
