import Image from "next/image";
import { newsData } from "@/data/news";

type Props = { params: { id: string } };

export default function NewsPage({ params }: Props) {
  const article = newsData.find((n) => n.id === params.id);

  if (!article) {
    return (
      <div className="w-[80%] mx-auto py-20">
        <h2 className="text-2xl font-semibold">News not found</h2>
      </div>
    );
  }

  return (
    <div className="relative">
      <Image src="/images/Background.png" alt="Background" fill className="absolute -z-10 object-cover" />
      <div className="w-[80%] mx-auto py-20">
        <div className="space-y-2">
          <h1 className="text-4xl">{article.title}</h1>
          <p className="flex items-center gap-2 text-xs text-gray-700">
            <span>Home</span> &nbsp;/&nbsp; <span>News</span> &nbsp;/&nbsp; <span>{article.title}</span>
          </p>
        </div>

        <div className="my-4">
          <Image src={article.imageUrl || "/images/newsdetail/Rectangle 7.png"} alt={article.title} width={1200} height={600} className="w-full" />
        </div>

        <div>
          {article.content?.map((p, idx) => (
            <p key={idx} className="leading-relaxed text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </div>
  );
}