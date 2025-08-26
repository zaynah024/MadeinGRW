import CompanyDetails from './main';
import Header from '../../home/components/header';
import Footer from '../../home/components/footer';

export default async function CompanyDetailsPage(props: any) {
  const companyId = props?.params?.id as string;

  return (
    <>
      <Header />
      <CompanyDetails />
      <Footer />
    </>
  );
}
