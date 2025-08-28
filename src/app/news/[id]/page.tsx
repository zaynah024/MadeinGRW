import Image from "next/image";
import { newsData, NewsArticle } from "@/data/news";
import Header from '../../home/components/header';
import Footer from '../../home/components/footer';

// Make the page async — Next.js expects async for dynamic routes / static params
export default async function NewsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const article: NewsArticle | undefined = newsData.find((n) => n.id === id);

  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/images/Background.png"
          alt="Background"
          fill
          className="absolute -z-10 object-cover"
        />

        <div className="w-[80%] mx-auto py-20">
          {!article ? (
            <h2 className="text-2xl font-semibold">News not found</h2>
          ) : (
            <>
              <h1 className="text-4xl font-semibold mb-2">{article.title}</h1>
              <p className="flex items-center gap-2 text-xs text-gray-700 mb-6">
                Home / News / {article.title}
              </p>

              <div className="my-4">
                <Image
                  src={article.imageUrl || "/images/newsdetail/Rectangle 7.png"}
                  alt={article.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-4">
                {article.content?.map((p, idx) => (
                  <p
                    key={idx}
                    className="leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

// Generate static paths for SSG
export function generateStaticParams() {
  return newsData.map((article) => ({ id: article.id }));
}
