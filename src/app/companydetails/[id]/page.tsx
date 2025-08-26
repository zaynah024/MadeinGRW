import CompanyDetails from './main';
import Header from '../../home/components/header';
import Footer from '../../home/components/footer';

export default function CompanyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <CompanyDetails />
      <Footer />
    </>
  );
}
