"use client";

import { Phone, ChevronDown, Linkedin, Instagram, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 w-full">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="grid grid-cols-3 items-center py-3">
            {/* Contact Info - Extreme left */}
            <div className="flex items-center space-x-2 text-sm justify-start -ml-30 animate-fade-in-left">
              <Phone size={16} className="text-gray-600" />
              <div className="flex flex-col items-start">
                 <span className="text-gray-500 text-xs">Do you want to contact us?</span>
                 <a href="tel:+923151427899" className="text-gray-800 font-medium hover:text-[#FCD900] transition-colors">
                    +92 315 1427899
                 </a>
              </div>
            </div>

            {/* Logo - Center */}
            <a href='/'>
              <div className="flex justify-center animate-fade-in-center">
               <img src="/images/logo.png" alt="MadeinGRW Logo" className="h-12 w-auto" />
            </div>
            </a>

            {/* Social Icons - Extreme right */}
            <div className="flex items-center space-x-4 justify-end -mr-30 animate-fade-in-right">
              <a href="#" className="text-gray-600 hover:text-[#FCD900] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FCD900] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FCD900] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <ul className="flex items-center space-x-10 text-sm font-medium animate-fade-in-up">
              <li>
                <a href="/sectordetail" className="text-gray-700 hover:text-[#FCD900] transition-colors">
                  Sectors
                </a>
              </li>
              <li>
                <a href="industrydetail" className="text-gray-700 hover:text-[#FCD900] transition-colors">
                  Industries
                </a>
              </li>
              <li className="flex items-center space-x-1 cursor-pointer group">
                <a href="/productdetail" className="text-gray-700 group-hover:text-[#FCD900] transition-colors">
                  Products
                </a>
                {/* <ChevronDown size={16} className="text-gray-700 group-hover:text-[#FCD900] transition-transform duration-300 group-hover:rotate-180" /> */}
              </li>
              <li>
                <a href="news" className="text-gray-700 hover:text-[#FCD900] transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="aboutus" className="text-gray-700 hover:text-[#FCD900] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="mission" className="text-gray-700 hover:text-[#FCD900] transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="contactus" className="text-gray-700 hover:text-[#FCD900] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
