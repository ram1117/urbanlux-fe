"use client";

import { IMerchandiseItem } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getItemClient } from "@/lib/api/apiurls";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ImageWrapper from "@/atoms/ImageWrapper";
import FeaturesAccordion from "./FeaturesAccordion";
import AddCartForm from "./AddCartForm";
import ItemMobileCarousel from "./ItemMobileCarousel";

interface ItemSectionProps {
  itemid: string;
}

const LoadingSkeleton = (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
    <Skeleton className="bg-slate-200 col-span-1 w-full aspect-square"></Skeleton>
    <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
      <Skeleton className="bg-slate-200 w-full aspect-[10/2]"></Skeleton>
      <Skeleton className="bg-slate-200 w-full aspect-[10/2]"></Skeleton>
    </div>
    <></>
  </div>
);

const ItemSection = ({ itemid }: ItemSectionProps) => {
  const [item, setItem] = useState<IMerchandiseItem | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);
  useEffect(() => {
    makeApiRequest(API_METHODS.GET, getItemClient(itemid))
      .then((response) => {
        if (!response?.ok) {
          response?.json().then((error) => setError(error.message));
          setLoading(false);
          return;
        } else return response?.json();
      })
      .then((data) => {
        if (data) {
          setItem(data);
          setPrice(data.base_price);
          setLoading(false);
        }
      })
      .catch((error) => setError(error.message));
  }, [itemid]);

  return (
    <section className="max-w-[1440px] mx-auto my-4">
      {error && <p className="text-lg text-center italic">{error}</p>}
      {loading && LoadingSkeleton}
      {item && (
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <ItemMobileCarousel images={item.images}></ItemMobileCarousel>
          <div className="w-full lg:w-1/2  grid-cols-2 h-max hidden lg:grid">
            {item.images.map((image) => (
              <ImageWrapper
                src={image}
                alt={"product image"}
                imageSize={"w-full aspect-square"}
                key={image}
              ></ImageWrapper>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="">{item.brand.name}</h2>
            <h1 className="text-2xl font-semibold font-cantarell my-2">
              {item.name}
            </h1>
            <p>{item.description}</p>
            <p className="my-4">
              Price: <span className="text-lg font-medium">$ {price}</span>
            </p>
            <p className="my-4">
              Color:{" "}
              <span className="text-lg font-medium uppercase">
                {item.color}
              </span>
            </p>
            <AddCartForm
              inventory={item.inventory}
              setPrice={setPrice}
              itemid={item._id}
              name={item.name}
              image={item.thumbnail}
            ></AddCartForm>
            <FeaturesAccordion items={item.features}></FeaturesAccordion>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemSection;
