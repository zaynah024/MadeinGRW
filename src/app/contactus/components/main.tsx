"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="news relative">
      {/* Background Image */}
      <Image
        src="/images/Background.png"
        alt="Background"
        fill
        className="absolute -z-10 object-cover"
      />

      <main className="w-[90%] md:w-[80%] mx-auto py-20">
        {/* Heading */}
        <div className="my-10">
          <p className="text-4xl font-medium">Contact Us</p>
          <div className="flex items-center text-xs mt-2 gap-2">
            <span>Home</span>
            <span>
              <FaArrowRight />
            </span>
            <span>Contact us</span>
          </div>
        </div>

        {/* Intro Text */}
        <div>
          <p className="text-2xl mb-4 font-medium">
            Interested in the{' '}
            <span className="relative inline-block">
              <span className="absolute top-5 left-0 w-full h-2 bg-[#FCD900] opacity-100"></span>
              <span className="relative z-10">Made in Gujranwala</span>
            </span>{' '}
            products or need help? Then please <br />
            get in touch with us.
          </p>
        </div>

        {/* Content Section */}
        <div className="my-10">
          <div className="flex gap-10 flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-[35%] grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-1">
              <div>
                <p className="text-xl font-medium">Contact Information</p>
                <p>Get in touch and let us know how we can help</p>
              </div>

              <div>
                <p className="text-gray-500 font-medium">PHONE</p>
                <p className="font-medium">+0(850) 544 7514</p>
              </div>

              <div>
                <p className="text-gray-500 font-medium">MAIL</p>
                <p className="font-medium">hello@madeingrw.com</p>
              </div>

              <div>
                <p className="text-gray-500 font-medium">ADDRESS</p>
                <p className="font-medium">
                  Main GT Road, Opposite Mall of Gujranwala
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <a
                  href="#"
                  className="py-2 px-2 md:px-4 flex w-3/4 md:w-1/2 justify-between items-center font-medium rounded-md bg-[#FCD900]"
                >
                  Get Direction
                  <FaArrowRight />
                </a>
                <a href="#" className="underline">
                  See On Map
                </a>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="md:w-[65%]">
              <div>
                <div className="mb-10">
                  <p className="text-2xl font-semibold">Contact Form</p>
                  <p className="text-sm text-gray-500">
                    Get in touch and let us know how we can help
                  </p>
                </div>

                <form>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
                    />
                  </div>

                  <textarea
                    className="w-full border border-gray-300 p-4 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCD900] focus:border-transparent"
                    cols={14}
                    rows={6}
                    placeholder="Your Message"
                  ></textarea>

                  <div className="flex items-end justify-end mt-2">
                    <button
                      type="submit"
                      className="py-2 px-8 flex gap-6 items-center font-medium rounded-md bg-[#FCD900]"
                    >
                      Submit
                      <FaArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
