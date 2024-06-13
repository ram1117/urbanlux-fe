import NoData from "@/atoms/NoData";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getBrands } from "@/lib/api/apiurls";

const Brands = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getBrands());
  if (!response?.ok) {
    return <NoData />;
  }
  const brandData = await response?.json();
  console.log(brandData);
  return (
    <div className="min-h-screen">
      <ul>Brands</ul>
    </div>
  );
};

export default Brands;
