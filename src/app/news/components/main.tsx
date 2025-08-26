"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 2,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 3,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 4,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 5,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 6,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 7,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
    {
      id: 8,
      title: "Crosson Holding's 58th ordinary general assembly convened",
      desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
      img: "/images/newsdetail/image.jpg",
    },
  ];

  return (
    <section className="news relative">
      {/* Background Image */}
      <Image
        src="/images/Background.png"
        alt="Background"
        fill
        className="absolute -z-10 object-cover"
      />

      <main className="w-[90%] md:w-[80%] mx-auto py-6 md:py-20">
        {/* Heading */}
        <div className="my-10">
          <p className="text-4xl font-medium">News</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Home</span>
            <FaArrowRight />
            <span>News</span>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {news.map((item) => (
            <div key={item.id} className="w-full flex flex-col">
              {/* Image above */}
              <div className="w-full mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              {/* Details and button below */}
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
                <a
                  href="#"
                  className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded hover:bg-yellow-500 transition-colors"
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
