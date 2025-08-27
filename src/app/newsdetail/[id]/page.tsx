import { notFound } from "next/navigation";
import NewsDetail from "@/app/newsdetail/components/main";
import { newsData } from "@/data/news";
import Header from "../../home/components/header";
import Footer from "../../home/components/footer";

type Props = { params: Promise<{ id: string }> };

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params; // ✅ must await params

  const article = newsData.find((n) => n.id === id);

  if (!article) return notFound();

  return (
    <>
      <Header />
      <NewsDetail article={article} />
      <Footer />
    </>
  );
}
