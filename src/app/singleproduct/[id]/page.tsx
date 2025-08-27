import SingleProduct from "@/app/singleproduct/components/main";
import { productsData } from "@/data/products";
import Header from "@/app/home/components/header";
import Footer from "@/app/home/components/footer";

export default async function SingleProductPage(props: any) {
  const params = await props?.params;
  const id = Number(params?.id || 0);
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <div className="w-[90%] mx-auto py-20 text-center">
          <h2 className="text-2xl font-semibold">Product not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <SingleProduct product={product} />
      <Footer />
    </>
  );
}