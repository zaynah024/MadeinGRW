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
        
        <div className="w-[80%] mx-auto relative z-10">
          <div>
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl mb-4">
                <p>
                  Have any questions? <br />
                  Contact Us
                </p>
              </div>
              <div className="flex flex-row gap-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="text-2xl" />
                  <div>
                    <p className="text-xs">Phone Number</p>
                    <p className="text-xs font-semibold">
                      <a href="tel:+923151427899">+92 315 1427899</a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="text-2xl" />
                  <div>
                    <p className="text-xs">Email Address</p>
                    <p className="text-xs font-semibold">
                      <a href="mailto:hello@mig.com">hello@mig.com</a>
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center gap-4">
                  <MapPin className="text-2xl" />
                  <div>
                    <p className="text-xs">Location</p>
                    <p className="text-xs font-semibold">
                      Main GT Road, near Model Town, Gujranwala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="my-10">
              <div className="grid gap-10 md:gap-0 md:grid-cols-4">
                {/* Products */}
                <div>
                  <p className="font-medium text-xl mb-4">Products</p>
                  <ul className="space-y-2">
                    <li>Filling Machines</li>
                    <li>Bottle Filling Series</li>
                    <li>Package Machines</li>
                    <li>Linear Machines</li>
                    <li>Rotary Machines</li>
                  </ul>
                </div>
                {/* Industries */}
                <div>
                  <p className="font-medium text-xl mb-4">Industries</p>
                  <ul className="space-y-2">
                    <li>Plastic Industry</li>
                    <li>Steel Industry</li>
                    <li>Automobile Industry</li>
                    <li>Ceramics Industry</li>
                    <li>Real Estate Industry</li>
                  </ul>
                </div>
                {/* Quick Links */}
                <div>
                  <p className="font-medium text-xl mb-4">Quick Links</p>
                  <ul className="space-y-2">
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
                <div className="flex gap-4">
                  <div className="hidden md:block">
                    <Image
                      src="/images/main/Icon.png"
                      width={128}
                      height={128}
                      alt="Logo"
                      className="w-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-medium mb-4">Connect with Us</p>
                    <p className="text-xs">
                      Cake pudding lollipop pastry cupcake chocolate. Gummi
                      bears halvah sesame snaps.
                    </p>
                    <div className="flex mt-4 items-center ">
                    <Link
  href="/contactus"
  className="bg-[#FCD900] text-black flex items-center gap-10 px-8 py-2 rounded 
             transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg"
>
  Contact Us <ArrowRight className="text-lg" />
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
      <div className="p-4 w-[80%] mx-auto">
        <div className="flex justify-between text-xs">
          <p>Copyright by Made in Gujranwala | All rights reserved</p>
          <p className="hidden md:block">
            Our Privacy and Personal Data Protection Policy | Terms and Conditions of Use
          </p>
        </div>
      </div>
    </footer>
  );
}
