import React from 'react';
import { GoClock } from 'react-icons/go';


const Main = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      
      <div className='relative col-span-2 ml-[120px] h-[488px]'>
  <img
    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg"
    alt="Headphones"
    className='w-[858px] h-[480px] object-cover cursor-pointer rounded-[10px] '
  />

  <div className='absolute bottom-0 left-0 p-4 flex flex-col gap-4'>
    <div className='relative z-10'>
      <p className='bg-[#ab07ab] pt-[5px] text-[#fff] text-[11px] p-2 text-center rounded-md cursor-pointer w-[77px] h-[26px]'>
        GADGETS
      </p>
      <h2 className='bg-[#000000] text-[#fff] text-[29px] p-4 max-w-[639px] leading-tight cursor-pointer mt-2'>
        Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone
      </h2>
    </div>
    <div className='flex'>
      <img
        className='h-[21px] w-[21px] z-20 rounded-full border-2 border-white cursor-pointer'
        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        alt="Author"
      />
      <h1 className='text-[#fff] text-[12px] pl-3'>Shane Doe    Jan 12,20</h1>
    </div>
  </div>

  <div className='col-span-3 grid grid-cols-2 gap-4 mt-8'>
    <div className='flex flex-col items-center'>
      <img
        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
        alt="Bottom Image 1"
        className='w-[411px] h-[228px] object-cover rounded-[10px] '
      />
      <h2 className='text-[#000000] text-[20px] font-bold mt-2 text-center'>
        Tablet PC Market to Witness Exponential Growth by 2028, Sources Say
      </h2>
      <p className='text-[#161616] text-[14px] text-center mt-1'>
        Shane DoeJan 11, 2020
      </p>
    </div>

    <div className='flex flex-col items-center'>
      <img
        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
        alt="Bottom Image 2"
        className='w-[411px] h-[228px] object-cover rounded-[10px] '
      />
      <h2 className='text-[#000000] text-[20px] font-bold mt-2 text-center'>
        Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks
      </h2>
      <p className='text-[#161616] text-[14px] text-center mt-1'>
        Shane DoeJan 11, 2020
      </p>
    </div>
  </div>
</div>



<div className='space-y-3 w-[340px] h-[882px]'> 
  <h2 className='text-[#161616] text-[19px] font-semibold'>People's Favorite</h2>

  <div className='flex items-center space-x-4 w-full h-[133px]'>
    <div className='flex flex-col justify-center'>
      <h3 className='text-[#3c3fde] text-[15px] font-medium cursor-pointer'>Technology</h3>
      <p className='text-[#161616] text-[17px]'>
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
      <p className='text-[#161616] text-[17px]'>
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
      <p className='text-[#161616] text-[17px]'>
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
      <p className='text-[#161616] text-[17px]'>
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
      <p className='text-[#161616] text-[17px]'>
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

     

      <div className='col-span-3 flex flex-col items-center mt-8 cursor-pointer'>
        <h2 className='text-center text-[12px] font-bold text-[#8A8A8A] mb-1'>Sponsored</h2>
        <img
          className='w-[975px] h-[125px] object-cover'
          src="https://smartmag.theme-sphere.com/tech-drop/wp-content/uploads/sites/33/2022/10/Wide-Top.jpg"
          alt="Sponsored Banner"
        />
      </div>


      <div className='mt-8 flex flex-col items-center'>
  {/* Editor's Picks Title */}
  <h1 className='text-[28px] mb-[20px]  text-[#161616] font-bold'>Editor's Picks</h1>

  {/* Card Section */}
  <div className='flex pl-[940px] justify-center'>
    <div className='flex gap-8 mt-6'>
      {/* First Card */}
      <div className='relative w-[286px] justify-center'>
        <img
          src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg'
          alt='Study: Earbuds Use, Youngsters at High Risk of Hearing Loss'
          className='w-[286px] h-[190px] object-cover rounded-lg cursor-pointer'
        />
        <div className='absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded'>
          Gadgets
        </div>
        <div className='mt-2'>
          <h3 className='text-[24px] text-[#161616] font-semibold'>1</h3>
          <p className='text-[16px] text-[#161616] font-medium'>
            Study: Earbuds Use, Youngsters at High Risk of Hearing Loss
          </p>
          <p className='text-[#6b6b6b] text-sm'>Shane Doe • Mar 15, 2020</p>
        </div>
      </div>

      {/* Second Card */}
      <div className='relative w-[286px]'>
        <img
          src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-450x300.jpg'
          alt='Telescope is Revealing the Galaxies of the Universe Like Never Before'
          className='w-[286px] h-[190px] object-cover rounded-lg cursor-pointer'
        />
        <div className='absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded'>
          Technology
        </div>
        <div className='mt-2'>
          <h3 className='text-[24px] text-[#161616] font-semibold'>2</h3>
          <p className='text-[16px] text-[#161616] font-medium'>
            Telescope is Revealing the Galaxies of the Universe Like Never Before
          </p>
          <p className='text-[#6b6b6b] text-sm'>Shane Doe • Mar 15, 2020</p>
        </div>
      </div>

      {/* Third Card */}
      <div className='relative w-[286px]'>
        <img
          src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_429887216_XL-1-450x289.jpg'
          alt='CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design'
          className='w-[286px] h-[190px] object-cover rounded-lg cursor-pointer'
        />
        <div className='absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded'>
          Phones
        </div>
        <div className='mt-2'>
          <h3 className='text-[24px] text-[#161616] font-semibold'>3</h3>
          <p className='text-[16px] text-[#161616] font-medium'>
            CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design
          </p>
          <p className='text-[#6b6b6b] text-sm'>Shane Doe • Mar 15, 2020</p>
        </div>
      </div>

      {/* Fourth Card */}
      <div className='relative w-[286px]'>
        <img
          src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sunrise-king-NK-cB-l1cv0-unsplash-1-450x271.jpg'
          alt='Latest Windows 11 Preview Build Finally Lets You Search for Copied Text'
          className='w-[286px] h-[190px] object-cover rounded-lg cursor-pointer'
        />
        <div className='absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded'>
          Technology
        </div>
        <div className='mt-2'>
          <h3 className='text-[24px] text-[#161616] font-semibold'>4</h3>
          <p className='text-[16px] text-[#161616] font-medium'>
            Latest Windows 11 Preview Build Finally Lets You Search for Copied Text
          </p>
          <p className='text-[#6b6b6b] text-sm'>Shane Doe • Mar 15, 2020</p>
        </div>
      </div>
    </div>
  </div>
</div>



<div className='col-span-3 mt-8'>
  <h1 className='text-center text-[28px] mb-6 text-[#161616] font-bold'>Featured Reviews</h1>
  <div className='flex justify-center	'>
  <div className='w-[586px] h-[445px] bg-blue-900 text-white'></div>
    <img className=' w-[623px] h-[445px]' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-768x513.jpg" alt="" />
    
  </div>
  <div className='flex gap-8 mt-8 flex justify-center'>
    <div className='relative w-[286px] '>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
        alt='Pico 4 Review'
        className='w-full h-[190px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute top-2 left-2 bg-[#3c3fde] text-white text-xs px-2 py-1 rounded'>
        GAMING
      </div>
      <div className='mt-2'>
        <h3 className='text-[20px] text-[#161616] font-semibold'>Pico 4 Review</h3>
        <p className='text-[14px] text-[#6b6b6b]'>
          Should You Actually Buy One Instead Of Quest 2?
        </p>
      </div>
    </div>

    <div className='relative w-[286px]'>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg'
        alt='Telescope Review'
        className='w-full h-[190px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute top-2 left-2 bg-[#009b9b] text-white text-xs px-2 py-1 rounded'>
        TECHNOLOGY
      </div>
      <div className='mt-2'>
        <h3 className='text-[20px] text-[#161616] font-semibold'>Telescope Review</h3>
        <p className='text-[14px] text-[#6b6b6b]'>
          Revealing the Galaxies of the Universe Like Never Before
        </p>
      </div>
    </div>

    <div className='relative w-[286px]'>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg'
        alt='CarPlay Review'
        className='w-full h-[190px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute top-2 left-2 bg-[#3c3fde] text-white text-xs px-2 py-1 rounded'>
        PHONES
      </div>
      <div className='mt-2'>
        <h3 className='text-[20px] text-[#161616] font-semibold'>CarPlay Review</h3>
        <p className='text-[14px] text-[#6b6b6b]'>
          Modular UI Inspired by Next-Gen Design
        </p>
      </div>
    </div>

    <div className='relative w-[286px]'>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1-450x253.jpg'
        alt='Windows 11 Review'
        className='w-full h-[190px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute top-2 left-2 bg-[#009b9b] text-white text-xs px-2 py-1 rounded'>
        TECHNOLOGY
      </div>
      <div className='mt-2'>
        <h3 className='text-[20px] text-[#161616] font-semibold'>Windows 11 Review</h3>
        <p className='text-[14px] text-[#6b6b6b]'>
          Search for Copied Text Finally Available
        </p>
      </div>
    </div>
  </div>

  <div className='ml-[120px]'>
  <div className='relative flex items-start gap-4 w-[600px] mb-8'>
    <div className='relative'>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-450x300.jpg'
        alt='Windows 11 Review'
        className='w-[1020px] h-[234px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute bottom-2 left-2 bg-[#e40666] text-white text-xs px-2 py-1 rounded'>
        GAMING
      </div>
    </div>
    
    <div className='flex flex-col justify-between ml-[30px]'>
      <h3 className='text-[20px] text-[#161616] font-semibold mb-2'>
        Game Development This Week: Save On Essential Tools and More
      </h3>
      <div className='flex items-center'>
        <img
          className='h-[21px] w-[21px] z-20 rounded-full border-2 border-white cursor-pointer'
          src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
          alt="Author"
        />
        <p className='text-[14px] text-[#6b6b6b] ml-2'>
          To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified…
        </p>
      </div>
    </div>
  </div>

  <div className='relative flex items-start gap-4 w-[600px] mb-8'>
    <div className='relative'>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg'
        alt='Windows 11 Review'
        className='w-[1020px] h-[234px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute bottom-2 left-2 bg-[#009b9b] text-white text-xs px-2 py-1 rounded'>
        TECHNOLOGY
      </div>
    </div>
    
    <div className='flex flex-col justify-between ml-[30px]'>
      <h3 className='text-[20px] text-[#161616] font-semibold mb-2'>
        Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means
      </h3>
      <div className='flex items-center'>
        <img
          className='h-[21px] w-[21px] z-20 rounded-full border-2 border-white cursor-pointer'
          src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
          alt="Author"
        />
        <p className='text-[14px] text-[#6b6b6b] ml-2'>
          To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified…
        </p>
      </div>
    </div>
  </div>

  <div className='relative flex items-start gap-4 w-[600px]'>
    <div className='relative'>
      <img
        src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg'
        alt='Windows 11 Review'
        className='w-[1020px] h-[234px] object-cover rounded-lg cursor-pointer'
      />
      <div className='absolute bottom-2 left-2 bg-[#009b9b] text-white text-xs px-2 py-1 rounded'>
        TECHNOLOGY
      </div>
    </div>
    
    <div className='flex flex-col justify-between ml-[30px]'>
      <h3 className='text-[20px] text-[#161616] font-semibold mb-2'>
        The Best Early Black Friday Deals on Gaming Laptops and Accessories
      </h3>
      <div className='flex items-center'>
        <img
          className='h-[21px] w-[21px] z-20 rounded-full border-2 border-white cursor-pointer'
          src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
          alt="Author"
        />
        <p className='text-[14px] text-[#6b6b6b] ml-2'>
          To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified…
        </p>
      </div>
    </div>
  </div>
</div>



</div>


    </div>

    
   
     

  );
};

export default Main;
