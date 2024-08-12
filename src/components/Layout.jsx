import React from 'react';
import { GoClock } from 'react-icons/go';

const Main = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      <div className='relative col-span-2 h-[488px]'>
        <img
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg"
          alt="Headphones"
          className='w-full h-[480px] object-cover cursor-pointer rounded-[10px]'
        />

        <div className='absolute bottom-0 left-0 p-4 flex flex-col gap-4'>
          <div className='relative z-10'>
            <p className='bg-[#ab07ab] text-[#fff] text-[11px] p-2 text-center rounded-md cursor-pointer w-[77px] h-[26px]'>
              GADGETS
            </p>
            <h2 className='bg-[#000000] text-[#fff] text-[29px] p-4 max-w-[639px] leading-tight cursor-pointer mt-2'>
              Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone
            </h2>
          </div>
          
          <img
            className='h-[32px] w-[32px] z-20 rounded-full border-2 border-white cursor-pointer'
            src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
            alt="Author"
          />
        </div>
      </div>

      <div className='space-y-6'>
        <h2 className='text-[#161616] text-[19px] font-semibold'>People's Favorite</h2>

        <div className='flex items-center space-x-4 w-full h-[133px]'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-[#3c3fde] text-[15px] font-medium cursor-pointer'>Technology</h3>
            <p className='text-[#161616] text-[14px]'>
              Schools, Parents Disagree over Bans on Student Mobile Phones
            </p>
            <div className='flex items-center space-x-1 text-[#161616] text-[12px]'>
              <p className='cursor-pointer'>Shane Doe</p>
              <GoClock />
              <p>6 Mins Read</p>
            </div>
          </div>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"
            alt="Technology"
            className='h-[87px] w-[87px] rounded-[10px] object-cover'
          />
        </div>

        <div className='flex items-center space-x-4 w-full h-[133px]'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-[#ab07ab] text-[15px] font-medium cursor-pointer'>Gadgets</h3>
            <p className='text-[#161616] text-[14px]'>
              PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More
            </p>
            <div className='flex items-center space-x-1 text-[#161616] text-[12px]'>
              <p className='cursor-pointer'>Shane Doe</p>
              <GoClock />
              <p>6 Mins Read</p>
            </div>
          </div>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-450x267.jpg"
            alt="Gadgets"
            className='h-[87px] w-[87px] rounded-[10px] object-cover'
          />
        </div>

        <div className='flex items-center space-x-4 w-full h-[133px]'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-[#3c3fde] text-[15px] font-medium cursor-pointer'>Technology</h3>
            <p className='text-[#161616] text-[14px]'>
              Electric Car Owners to Pay Road Tax from 2025, Hunt Announces
            </p>
            <div className='flex items-center space-x-1 text-[#161616] text-[12px]'>
              <p className='cursor-pointer'>Shane Doe</p>
              <GoClock />
              <p>6 Mins Read</p>
            </div>
          </div>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-300x200.jpg"
            alt="Technology"
            className='h-[87px] w-[87px] rounded-[10px] object-cover'
          />
        </div>

        <div className='flex items-center space-x-4 w-full h-[133px]'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-[#009b9b] text-[15px] font-medium cursor-pointer'>Phones</h3>
            <p className='text-[#161616] text-[14px]'>
              Tackling Smartphone Addiction: Village Bans Mobiles for Minors
            </p>
            <div className='flex items-center space-x-1 text-[#161616] text-[12px]'>
              <p className='cursor-pointer'>Shane Doe</p>
              <GoClock />
              <p>6 Mins Read</p>
            </div>
          </div>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-450x270.jpg"
            alt="Phones"
            className='h-[87px] w-[87px] rounded-[10px] object-cover'
          />
        </div>

        <div className='flex items-center space-x-4 w-full h-[133px]'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-[#3c3fde] text-[15px] font-medium cursor-pointer'>Technology</h3>
            <p className='text-[#161616] text-[14px]'>
              Epic Games Store Gives Away One of The Best VR Games
            </p>
            <div className='flex items-center space-x-1 text-[#161616] text-[12px]'>
              <p className='cursor-pointer'>Shane Doe</p>
              <GoClock />
              <p>6 Mins Read</p>
            </div>
          </div>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-450x196.jpg"
            alt="Technology"
            className='h-[87px] w-[87px] rounded-[10px] object-cover'
          />
        </div>
      </div>

      <div className='col-span-3 grid grid-cols-2 gap-4 mt-8'>
        <div className='flex flex-col items-center'>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
            alt="Bottom Image 1"
            className='w-[411px] h-[228px] object-cover rounded-[10px]'
          />
          <h2 className='text-[#000000] text-[20px] font-bold mt-2 text-center'>
          Tablet PC Market to Witness Exponential Growth by 2028, Sources Say  </h2>
          <p className='text-[#161616] text-[14px] text-center mt-1'>
          Shane DoeJan 11, 2020
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
            alt="Bottom Image 2"
            className='w-[411px] h-[228px] object-cover rounded-[10px]'
          />
          <h2 className='text-[#000000] text-[20px] font-bold mt-2 text-center'>
          Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks  </h2>
          <p className='text-[#161616] text-[14px] text-center mt-1'>
          Shane DoeJan 11, 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
