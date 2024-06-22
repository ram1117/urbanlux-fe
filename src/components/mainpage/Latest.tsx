import ImageWrapper from "@/atoms/ImageWrapper";
import { IMerchandiseItem } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getLatest } from "@/lib/api/apiurls";
import Link from "next/link";

const Latest = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getLatest());
  if (!response?.ok) {
    return <></>;
  }
  const data = await response.json();
  return (
    <section className="p-4 bg-dark text-light">
      <h2 className="text-2xl my-4 font-semibold font-cantarell">
        Latest Arrivals
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-4">
        {data.map((item: Partial<IMerchandiseItem>) => (
          <li key={item._id} className="p-1 md:p-4">
            <Link href={`/item/${item._id}`}>
              <ImageWrapper
                src={item.thumbnail!}
                alt={"Merchandise thumbnail"}
                imageSize={"w-full aspect-square"}
              ></ImageWrapper>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Latest;
