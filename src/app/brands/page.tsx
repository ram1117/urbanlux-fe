import AllBrands from "@/components/brands/AllBrands";
import TopBrands from "@/components/brands/TopBrands";

const Page = async () => {
  return (
    <section className="min-h-screen p-8 max-w-[1440px] mx-auto">
      <TopBrands />
      <AllBrands />
    </section>
  );
};

export default Page;
