"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* About Us Section - with background image */}
      <section className="relative">
        {/* Background Image */}
        <Image
          src="/images/Background.png"
          alt="Background"
          fill
          className="absolute -z-10 object-cover"
        />
        
        <div className="w-[90%] md:w-[80%] mx-auto py-20 relative z-10">
          {/* Heading */}
          <div className="my-10">
            <p className="text-4xl font-medium text-gray">About Us</p>
            <div className="flex items-center text-xs mt-2 gap-2 text-gray">
              <span>Home</span>
              <FaArrowRight />
              <span>Corporate</span>
              <FaArrowRight />
              <span>About Crosson</span>
            </div>
          </div>

          {/* Intro */}
          <div>
            <p className="text-xl mb-4 font-medium text-gray">
              Products made in Gujranwala are a true reflection of{' '}
              <span className="relative inline-block">
                <span className="absolute top-4.5 left-0 w-full h-1.5 bg-[#FCD900] opacity-100"></span>
                <span className="relative z-10">craftsmanship, durability, and local pride.</span>
              </span>{' '}
              Known for their strength and
              reliability, GRW-made goods represent generations of skilled
              workmanship and innovation.
            </p>
            <p className="text-gray">
              Donut candy shortbread toffee dragée apple pie brownie. Muffin
              chocolate halvah bonbon gummies cake apple pie. Croissant dessert
              candy canes chocolate bar topping jujubes cupcake toffee dragée.
              Fruitcake danish tart gummies tootsie roll dragée cheesecake
              jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
              Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
              brownie danish pudding jelly gummies. <br />
              <br />
              Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
              icing gingerbread sugar plum powder marzipan. Cotton candy carrot
              cake pastry carrot cake jelly danish. Ice cream muffin marshmallow
              sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops
              chocolate cookie cupcake marshmallow donut. Cotton candy candy canes
              cake oat cake jelly.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section - with light background */}
      <section className="bg-gray-50 py-20">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="space-y-2 w-full md:w-[40%]">
              <p className="text-gray-500 font-semibold">OUR VALUES</p>
              <p className="text-4xl font-medium">
                Gujranwala has adopted Quality Production as its{' '}
                <span className="relative inline-block">
                  <span className="absolute top-7 left-0 w-full h-2 bg-[#FCD900] opacity-100"></span>
                  <span className="relative z-10">basic principle.</span>
                </span>
              </p>
              <p className="text-s text-gray-700">
                To be one of the pioneering, dynamic and leading companies that
                offer quality products and services with an understanding of
                continuous improvement in the fields in which it operates.
              </p>
            </div>

            <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-6">
              {/* Card 1 */}
              <div>
                <Image
                  src="/images/about/Image (1).png"
                  width={288}
                  height={288}
                  alt="Mission Image"
                  className="w-72"
                />
                <div className="space-y-2">
                  <p className="text-lg font-medium mt-2">Our Mission</p>
                  <p className="text-xs">
                    Center we have developed many patents in filling and
                    packaging technology.
                  </p>
                  <a href="#" className="flex items-center gap-4">
                    <span>Read More</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div>
                <Image
                  src="/images/about/Image (17).png"
                  width={288}
                  height={288}
                  alt="Mission Image"
                  className="w-72"
                />
                <div className="space-y-2">
                  <p className="text-lg font-medium mt-2">Our Vision</p>
                  <p className="text-xs">
                    Center we have developed many patents in filling and
                    packaging technology.
                  </p>
                  <a href="#" className="flex items-center gap-4">
                    <span>Read More</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Partners Section */}
<section className="w-[90%] mx-auto my-20">
  {/* Heading */}
  <div className="text-center">
    <h2 className="text-3xl font-bold">Our Partners</h2>
    <p className="text-gray-500 mt-2">Trusted by industry leaders worldwide</p>
  </div>

  {/* Logos */}
  <div className="flex flex-wrap items-center justify-center mt-10 gap-4">
    {[
      "Ellipse 10.png",
      "Ellipse 11.png",
      "Ellipse 8.png",
      "Ellipse 10.png",
      "Ellipse 11.png",
      "Ellipse 8.png",
      "Ellipse 10.png",
      "Ellipse 11.png",
      "Ellipse 8.png",
      "Ellipse 10.png",
      "Ellipse 11.png",
      "Ellipse 8.png",
      "Ellipse 8.png",
      "Ellipse 10.png",
      "Ellipse 11.png",
      "Ellipse 8.png",
      "become-partner", // special circle
    ].map((img, idx) =>
      img === "become-partner" ? (
        // ✅ Become Partner button
        <a
          key={idx}
          href="/contactus"
          className="w-[60px] h-[60px] bg-[#FCD900] rounded-full flex items-center justify-center 
                     text-center text-xs font-semibold text-black leading-tight p-2 
                     hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
        >
          Become
          <br />
          Partner
        </a>
      ) : (
        // Regular partner logos
        <Image
          key={idx}
          src={`/images/about/${img}`}
          alt={`Partner logo ${idx}`}
          width={60}
          height={60}
        />
      )
    )}
  </div>
</section>
    </div>
  );
}
