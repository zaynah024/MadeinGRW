"use client";

import { useState } from "react";
import { Phone, Linkedin, Instagram, Twitter, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 z-50 bg-white text-gray-800 w-full shadow-sm">
        {/* Top Bar (hidden on mobile) */}
        <div className="border-b border-gray-200 hidden lg:block">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans">
            <div className="grid grid-cols-3 items-center py-3">
              {/* Contact Info - Left */}
              <div className="flex items-center space-x-2 text-sm justify-start animate-fade-in-left">
                <Phone size={16} className="text-gray-600" />
                <div className="flex flex-col items-start">
                  <span className="text-gray-500 text-xs">
                    Do you want to contact us?
                  </span>
                  <a
                    href="tel:+923151427899"
                    className="text-gray-800 font-medium hover:text-[#FCD900] transition-colors"
                  >
                    +92 315 1427899
                  </a>
                </div>
              </div>

              {/* Logo - Center */}
              <a href="/" className="flex justify-center animate-fade-in-center">
                <img
                  src="/images/logo.png"
                  alt="MadeinGRW Logo"
                  className="h-12 w-auto"
                />
              </a>

              {/* Social Icons - Right */}
              <div className="flex items-center space-x-4 justify-end animate-fade-in-right">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FCD900] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FCD900] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FCD900] transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <nav className="lg:border-b lg:border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop Nav */}
            <div className="hidden lg:flex justify-center items-center h-16">
              <ul className="flex items-center space-x-10 text-sm font-medium animate-fade-in-up">
                <li>
                  <a
                    href="/sectordetail"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    Sectors
                  </a>
                </li>
                <li>
                  <a
                    href="/industrydetail"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/productdetail"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutus"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/mission"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="/contactus"
                    className="text-gray-700 hover:text-[#FCD900] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Nav */}
            <div className="flex justify-between items-center h-14 lg:hidden">
              {/* Logo only */}
              <a href="/">
                <img
                  src="/images/logo.png"
                  alt="MadeinGRW Logo"
                  className="h-6 sm:h-10 w-auto"
                />
              </a>

              {/* Hamburger */}
              <button
                className="text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
              <div className="lg:hidden absolute top-14 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
                <ul className="flex flex-col space-y-4 px-6 py-6 text-sm font-medium">
                  <li>
                    <a
                      href="/sectordetail"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      Sectors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industrydetail"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      Industries
                    </a>
                  </li>
                  <li>
                    <a
                      href="/productdetail"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/news"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aboutus"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mission"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contactus"
                      className="block text-gray-700 hover:text-[#FCD900] transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>

                {/* Socials & Contact inside mobile menu */}
                <div className="border-t border-gray-200 px-6 py-4 flex flex-col space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone size={16} className="text-gray-600" />
                    <a
                      href="tel:+923151427899"
                      className="text-gray-800 hover:text-[#FCD900]"
                    >
                      +92 315 1427899
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-[#FCD900]">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#FCD900]">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#FCD900]">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Add padding so content isn't hidden behind fixed header */}
      <main className="pt-4 lg:pt-28">
        {/* ✅ Page content goes here */}
      </main>
    </>
  );
};

export default Header;
