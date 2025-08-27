'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-bg border border-gray-300 md:p-10 py-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat ">
          <Image
            src="/images/main/Background (4).png"
            alt="Footer background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
          <div>
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="text-xl md:text-2xl">
                <p>
                  Have any questions? <br className="hidden md:block" />
                  Contact Us
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-auto">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-xs">Phone Number</p>
                    <p className="text-sm font-semibold">
                      <a href="tel:+923151427899">+92 315 1427899</a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-xs">Email Address</p>
                    <p className="text-sm font-semibold">
                      <a href="mailto:hello@mig.com">hello@mig.com</a>
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-xs">Location</p>
                    <p className="text-sm font-semibold">
                      Main GT Road, near Model Town, Gujranwala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="my-10">
              {/* Mobile: 2 columns, Desktop: 4 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Products */}
                <div>
                  <p className="font-medium text-lg md:text-xl mb-4">Products</p>
                  <ul className="space-y-2 text-sm">
                    <li>Filling Machines</li>
                    <li>Bottle Filling Series</li>
                    <li>Package Machines</li>
                    <li>Linear Machines</li>
                    <li>Rotary Machines</li>
                  </ul>
                </div>
                {/* Industries */}
                <div>
                  <p className="font-medium text-lg md:text-xl mb-4">Industries</p>
                  <ul className="space-y-2 text-sm">
                    <li>Plastic Industry</li>
                    <li>Steel Industry</li>
                    <li>Automobile Industry</li>
                    <li>Ceramics Industry</li>
                    <li>Real Estate Industry</li>
                  </ul>
                </div>
                {/* Quick Links */}
                <div>
                  <p className="font-medium text-lg md:text-xl mb-4">Quick Links</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link href="/business-center">Gujranwala Business Center</Link>
                    </li>
                    <li>
                      <Link href="/chairman-message">Chairman Message</Link>
                    </li>
                    <li>
                      <Link href="/news">News</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* Connect With Us */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="hidden md:block">
                    <Image
                      src="/images/main/Icon.png"
                      width={128}
                      height={128}
                      alt="Logo"
                      className="w-24 md:w-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg md:text-xl font-medium mb-2 md:mb-4">Connect with Us</p>
                    <p className="text-xs md:text-sm">
                      Cake pudding lollipop pastry cupcake chocolate. Gummi
                      bears halvah sesame snaps.
                    </p>
                    <div className="flex mt-4">
                      <Link
                        href="/contactus"
                        className="bg-[#FCD900] text-black flex items-center gap-6 md:gap-10 px-6 md:px-8 py-2 rounded 
                                   transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg text-sm md:text-base"
                      >
                        Contact Us <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* Bottom Bar */}
      <div className="p-4 w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left gap-2">
          <p>Copyright by Made in Gujranwala | All rights reserved</p>
          <p className="md:block">
            Our Privacy and Personal Data Protection Policy | Terms and Conditions of Use
          </p>
        </div>
      </div>
    </footer>
  );
}
