"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { newsData } from "@/data/news";
import type { NewsArticle } from "@/data/news";

export default function NewsDetail({ article }: { article: NewsArticle }) {
  // derive related items: prefer explicit related list if present, otherwise show other latest items
  const relatedItems = (() => {
    const rel = (article as any)?.related;
    if (Array.isArray(rel) && rel.length) {
      // related may contain objects with id or plain ids
      const ids = rel.map((r: any) => (typeof r === "string" ? r : String(r.id))).filter(Boolean);
      return newsData.filter((n) => ids.includes(n.id));
    }
    // fallback: take up to 4 other articles
    return newsData.filter((n) => n.id !== article.id).slice(0, 4);
  })();

  return (
    // make detail act like a full page
    <div className="relative min-h-screen bg-white">
      {/* Background */}
      <Image
        src="/images/Background.png"
        alt="Background"
        fill
        className="absolute -z-10 object-cover"
      />

      <div className="w-[90%] sm:w-[80%] mx-auto py-12 sm:py-20">
        {/* Title + Breadcrumb */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-semibold">{article.title}</h1>
          <p className="flex items-center gap-2 text-xs text-gray-700">
            <span>Home</span> <ArrowRight /> <span>News</span> <ArrowRight />{" "}
            <span className="truncate max-w-xs">{article.title}</span>
          </p>
        </div>

        {/* Main Image */}
        {article.imageUrl && (
          <div className="my-6">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          {article.content?.map((p, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {/* Related News placeholder */}
        <div className="my-10">
          <h2 className="text-2xl mb-6">Related News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedItems.map((it) => (
              <div
                key={it.id}
                className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={it.imageUrl || "/images/newsdetail/image.jpg"}
                    alt={it.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
                  />
                </div>
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold line-clamp-2">{it.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{it.desc}</p>
                  <Link
                    href={`/newsdetail/${it.id}`}
                    className="bg-[#FCD900] w-full flex items-center justify-between px-6 py-3 font-medium rounded"
                  >
                    Read More <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
