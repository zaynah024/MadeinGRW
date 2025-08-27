import { notFound } from "next/navigation";
import CompanyDetails from "@/app/companydetails/[id]/main";
import Header from '../../home/components/header';
import Footer from '../../home/components/footer';

export default async function CompanyDetailsPage(props: any) {
  // props.params may be a promise in some Next.js execution contexts — await it first
  const params = await props?.params;
  const companyId = String(params?.id || "");

  return (
    <>
      <Header />
      <CompanyDetails />
      <Footer />
    </>
  );
}
