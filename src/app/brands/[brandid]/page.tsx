import BrandsNav from "@/components/brands/BrandsNav";
import BrandSection from "@/components/brands/brand/BrandSection";

const Page = async ({ params }: { params: { brandid: string } }) => {
  const brandid = params.brandid;

  return (
    <section className="min-h-screen text-dark bg-light max-w-[1440px] mx-auto">
      <BrandsNav></BrandsNav>
      <BrandSection brandid={brandid}></BrandSection>
    </section>
  );
};

export default Page;
