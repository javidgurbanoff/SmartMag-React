import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";





const Footer = () => {
  return (
    <div className="p-0 bg-[#151515] w-full">
      <div className="w-full h-[490px] bg-[#151515] ">
        <h5 className="text-white pl-30px">Most Popular</h5>
      </div>
      <div className="w-full h-[266px] bg-[#070707] ">
        <div className=' text-white flex'>
      <FaFacebookF />
      <FaXTwitter />
      <FaInstagram />
      <FaPinterestP />
      </div>
      <div className='text-white text-sm flex gap-5'>
      <p>HOME</p>
      <p>PHONES</p>
      <p>ABOUT</p>
      <p>CONTACT</p>
      </div>

      </div>
    </div>
  );
};

export default Footer;
