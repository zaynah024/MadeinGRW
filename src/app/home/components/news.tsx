"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { NewsArticle } from "@/data/news";

export default function LatestNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        if (!res.ok) throw new Error("Failed");
        const data: NewsArticle[] = await res.json();
        if (mounted) setNews(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="latest border-t border-gray-200 py-10 md:py-20 md:px-10">
      <section className="w-[90%] md:w-[85%] mx-auto my-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center transform transition-all duration-500 ease-out animate-fade-in-up">
          <div>
            <p className="text-gray-500 font-semibold">LATEST NEWS</p>
            <p className="text-2xl md:text-4xl mb-4 relative inline-block pb-2 
              after:content-[''] after:absolute after:bottom-[-8px] after:left-10 after:w-[60%] after:h-[8px] after:bg-yellow-400">
              NEWS FROM GUJRANWALA
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
          {news.slice(0, 4).map((item, i) => (
            <div key={item.id} className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${100 * (i + 1)}ms` }}>
              {/* Image above */}
              <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.imageUrl || "/images/newsdetail/image.jpg"}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
                />
              </div>
              {/* Details and button below */}
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold line-clamp-2 transform transition-all duration-300 hover:text-[#2947A9]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  {item.desc}
                </p>
                <Link
                  href={`/newsdetail/${item.id}`}
                  className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded"
                >
                  Read More <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
