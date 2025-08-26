"use client";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function MissionSection() {
  return (
    <div className="relative">
      {/* Background */}
      <Image
        src="/images/Background.png"
        alt="Background"
        fill
        className="absolute -z-10 object-cover"
      />

      <div className="w-[80%] mx-auto py-20">
        <div className="space-y-2">
          <p className="text-gray-500 font-semibold">WHAT WE ARE FOCUSED ON</p>
          <p className="text-4xl mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-[-11px] after:left-0 after:w-[40%] after:h-[8px] after:bg-yellow-400">
            OUR MISSION AND CORE <br />
            VALUES
          </p>

          {/* First Block */}
          <div className="my-10">
            <div className="flex flex-col md:flex-row">
              {/* Text + Accordions */}
              <div className="w-full">
                <p className="text-gray-600 mt-6">
                  We are focused on Made in Gujranwala Promotion, Global
                  Business Networking, Strengthening Businesses, Bilateral &
                  Multilateral Trade Promotion, Export Promotion and Fostering
                  Industry-Academia Linkages
                </p>

                {/* Accordions */}
                <section className="my-10">
                  <div className="mx-auto">
                    <div>
                      {[1, 2, 3].map((i) => (
                        <details
                          key={i}
                          className="mb-4 shadow rounded-md p-4 group"
                        >
                          <summary className="font-semibold rounded-md py-2 flex justify-between items-center cursor-pointer">
                            Made in Gujranwala Promotion
                            <span className="transition-transform duration-300 group-open:rotate-90">
                              <FaChevronRight className="bg-[#FFF4E5] p-2 rounded w-8 h-8" />
                            </span>
                          </summary>
                          <span>
                            Gujranwala has a diverse range of industries that
                            contribute significantly to the national economy.
                            One of the GBC&apos;s primary objectives is to
                            promote made in Gujranwala Products.
                          </span>
                        </details>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Side Image */}
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/newsdetail/3.png"
                  alt="Mission"
                  width={400}
                  height={400}
                  className="w-96"
                />
              </div>
            </div>
          </div>

          {/* Second Block (Image Left) */}
          <div className="my-10">
            <div className="flex flex-col md:flex-row">
              {/* Left Side Image */}
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/newsdetail/2.png"
                  alt="Mission"
                  width={400}
                  height={400}
                  className="w-96"
                />
              </div>

              {/* Right Side Accordions */}
              <div className="w-full">
                <section className="my-10">
                  <div className="mx-auto">
                    <div>
                      {[1, 2, 3].map((i) => (
                        <details
                          key={i}
                          className="mb-4 shadow rounded-md p-4 group"
                        >
                          <summary className="font-semibold rounded-md py-2 flex justify-between items-center cursor-pointer">
                            Made in Gujranwala Promotion
                            <span className="transition-transform duration-300 group-open:rotate-90">
                              <FaChevronRight className="bg-[#FFF4E5] p-2 rounded w-8 h-8" />
                            </span>
                          </summary>
                          <span>
                            Gujranwala has a diverse range of industries that
                            contribute significantly to the national economy.
                            One of the GBC&apos;s primary objectives is to
                            promote made in Gujranwala Products.
                          </span>
                        </details>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
