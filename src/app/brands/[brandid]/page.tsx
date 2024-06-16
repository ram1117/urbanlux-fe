import BrandSection from "@/components/brands/brand/BrandSection";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getBrandItems } from "@/lib/api/apiurls";
export const validate = 1;

const Page = async ({ params }: { params: { brandid: string } }) => {
  const brandid = params.brandid;

  const response = await makeApiRequest(
    API_METHODS.GET,
    getBrandItems(brandid),
  );

  if (!response?.ok) {
    return <></>;
  }
  const data = await response.json();

  return (
    <section className="min-h-screen">
      <BrandSection items={data}></BrandSection>
    </section>
  );
};

export default Page;
