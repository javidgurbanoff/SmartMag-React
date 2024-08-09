import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-0 bg-[#151515] w-full">
      <div className="w-full h-[490px] bg-[#151515] flex flex-col justify-center items-center">
        <h5 className="text-white text-lg mb-4">Most Popular</h5>
      </div>
      <div className="w-full h-[266px] bg-[#070707] flex flex-col justify-center items-center gap-4">
        <div className="text-white flex gap-6 text-lg">
          <div className="p-3 bg-[#333] rounded-full">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          </div>
          <div className="p-3 bg-[#333] rounded-full">
            <FaXTwitter className="cursor-pointer hover:text-[#1DA1F2]" />
          </div>
          <div className="p-3 bg-[#333] rounded-full">
            <FaInstagram className="cursor-pointer hover:text-[#E1306C]" />
          </div>
          <div className="p-3 bg-[#333] rounded-full">
            <FaPinterestP className="cursor-pointer hover:text-[#E60023]" />
          </div>
        </div>
        <div className="text-white text-sm flex gap-5">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">PHONES</p>
          <p className="cursor-pointer">ABOUT</p>
          <p className="cursor-pointer">CONTACT</p>
        </div>
        <p className="text-white text-xs mt-4">© 2024 ThemeSphere. Designed by ThemeSphere.</p>
      </div>
    </div>
  );
};

export default Footer;
