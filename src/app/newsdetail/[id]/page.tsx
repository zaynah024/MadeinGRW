import { notFound } from "next/navigation";
import NewsDetail from "@/app/newsdetail/components/main";
import { newsData } from "@/data/news";
import Header from '../../home/components/header'
import Footer from '../../home/components/footer'

  
type Props = { params: { id: string } };

export default function NewsDetailPage({ params }: Props) {
  const article = newsData.find((n) => n.id === params.id);
  if (!article) return notFound();

  return (
  <>
  <Header/>
  <NewsDetail article={article} />
  <Footer/>
  </>);
}