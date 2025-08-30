"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import type { NewsArticle } from "@/data/news";

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: NewsArticle[] = await res.json();
        if (mounted) setNews(data);
      } catch (err) {
        console.error("Failed to load news", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchNews();
    return () => {
      mounted = false;
    };
  }, []);

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
          <p className="text-5xl font-semibold">News</p>
          <div>
            
            <div className="flex items-center gap-2 text-m text-gray-600 mt-2">
              <span>Home</span>
              <span className="mx-1">&rarr;</span>
              <span>News</span>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            {news.map((item) => (
              <div key={item.id} className="w-full flex flex-col">
                {/* Image above */}
                <div className="w-full mb-4">
                  <Image
                    src={item.imageUrl || "/images/newsdetail/image.jpg"}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                {/* Details and button below */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded hover:bg-yellow-500 transition-colors"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </section>
  );
}
