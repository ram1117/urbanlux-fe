import ImageWrapper from "@/atoms/ImageWrapper";
import { ISavedItem } from "@/interfaces";
import { SAVED_KEY } from "@/lib/constants";
import { cookies } from "next/headers";
import Link from "next/link";

const Page = () => {
  let savedItems: ISavedItem[] = [];
  const savedItemCookie = cookies().get(SAVED_KEY);
  if (savedItemCookie) {
    savedItems = [...JSON.parse(savedItemCookie.value)];
  }
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto p-4">
      <section className="my-10">
        <h1 className="text-xl md:text-3xl font-cantarell text-left md:text-center">
          Saved Items
        </h1>
        {savedItems.length === 0 && (
          <p className="text-center my-4 italic">No saved items</p>
        )}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4">
          {savedItems.map((item) => (
            <li key={item.id} className="border rounded-md p-4">
              <Link href={`/item/${item.id}`}>
                <ImageWrapper
                  src={item.thumbnail}
                  alt={"item thumbnail"}
                  imageSize={"w-full aspect-square"}
                ></ImageWrapper>
                <h4 className="text-sm font-medium mt-4">{item.name}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Page;
