import NoData from "@/atoms/NoData";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getBrands } from "@/lib/api/apiurls";

const Brands = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getBrands());
  if (!response?.ok) {
    return <NoData />;
  }
  // const brandData = await response?.json();
  return (
    <div className="min-h-screen border-2 border-light">
      <ul>Brands</ul>
    </div>
  );
};

export default Brands;
