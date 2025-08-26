'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LatestNews() {
  return (
    <section className="latest border-t border-gray-200 py-10 md:py-20 md:px-10  ">
      <section className="w-[90%] md:w-[85%] mx-auto my-10">
    
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center transform transition-all duration-500 ease-out animate-fade-in-up">
          <div>
            <p className="text-gray-500 font-semibold">LATEST NEWS</p>
            <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 
              after:content-[''] after:absolute after:bottom-[-8px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
              NEWS FROM GUJRANWALA
            </p>
            <p>
              Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
              sesame snaps <br />
              chocolate cake gummies sugar plum cotton candy cupcake sweet
            </p>
          </div>
          <div className="transform transition-all duration-500 ease-out animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link
              href="/news"
              className="bg-[#FCD900] flex items-center gap-4 px-10 py-2 font-medium hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
            >
              View All <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-4 gap-6 my-10">
          {/* News Item 1 */}
          <div className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {/* Image above */}
            <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/newsdetail/image.jpg"
                alt="News Image 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
              />
            </div>
            {/* Details and button below */}
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold line-clamp-2 transform transition-all duration-300 hover:text-[#2947A9]">
                Crosson Holding&apos;s 58th ordinary general assembly convened
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                Toffee sweet roll caramels oat cake lemon drops cupcake sweet
                roll halvah ice cream.
              </p>
              <Link
                href="/news/assembly"
                className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
              >
                Read More <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Image above */}
            <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/newsdetail/image.jpg"
                alt="News Image 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
              />
            </div>
            {/* Details and button below */}
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold line-clamp-2 transform transition-all duration-300 hover:text-[#2947A9]">
                Crosson Holding&apos;s new Board of Directors has been determined.
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                Toffee sweet roll caramels oat cake lemon drops cupcake sweet
                roll halvah ice cream.
              </p>
              <Link
                href="/news/board"
                className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
              >
                Read More <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {/* Image above */}
            <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/newsdetail/image.jpg"
                alt="News Image 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
              />
            </div>
            {/* Details and button below */}
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold line-clamp-2 transform transition-all duration-300 hover:text-[#2947A9]">
                Gujranwala Industrial Growth Reaches New Heights
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                The industrial sector in Gujranwala continues to expand with new
                manufacturing units and increased export opportunities.
              </p>
              <Link
                href="/news/industrial-growth"
                className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
              >
                Read More <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* News Item 4 */}
          <div className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {/* Image above */}
            <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/newsdetail/image.jpg"
                alt="News Image 4"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
              />
            </div>
            {/* Details and button below */}
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold line-clamp-2 transform transition-all duration-300 hover:text-[#2947A9]">
                Business Community Strengthens Local Partnerships
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                Local businesses are forming strategic alliances to enhance
                market presence and drive economic development.
              </p>
              <Link
                href="/news/business-partnerships"
                className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded hover:bg-yellow-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 transform group"
              >
                Read More <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
