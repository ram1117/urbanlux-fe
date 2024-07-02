"use client";

import { ICartItem, IMerchandiseItem, ISavedItem } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getItem } from "@/lib/api/apiurls";
import ItemDetailsAccordion from "./ItemDetailsAccordion";
import AddCartForm from "./AddCartForm";
import ItemMobileCarousel from "./ItemMobileCarousel";
import ImageModal from "./ImageModal";
import SaveItemForm from "./SaveItemForm";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import LogoLoadingSkeleton from "@/atoms/LogoLoadingSkeleton";
import SizeChartDialog from "./SizeChartDialog";

interface ItemSectionProps {
  itemid: string;
  existingItem: ICartItem | undefined;
  savedItem: ISavedItem | undefined;
}

const ItemSection = ({ itemid, existingItem, savedItem }: ItemSectionProps) => {
  const {
    data: item,
    loading,
    error,
  } = useFetchDataPublic(API_METHODS.GET, getItem(itemid), {}) as {
    data: IMerchandiseItem;
    error: string;
    loading: boolean;
  };

  return (
    <section className="max-w-[1440px] mx-auto my-4">
      {error && <p className="text-lg text-center italic">{error}</p>}
      {loading && <LogoLoadingSkeleton></LogoLoadingSkeleton>}
      {item && (
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <ItemMobileCarousel images={item.images}></ItemMobileCarousel>
          <div className="w-full lg:w-1/2  grid-cols-2 gap-4 h-max hidden lg:grid">
            {item.images.map((image) => (
              <ImageModal image={image} key={image}></ImageModal>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex gap-4 items-center justify-between">
              <div>
                <h2 className="">{item.brand.name}</h2>
                <h1 className="text-xl lg:text-2xl font-semibold font-cantarell my-1">
                  {item.name}
                </h1>
              </div>
              <SaveItemForm
                saved={savedItem ? true : false}
                id={item._id}
                name={item.name}
                thumbnail={item.thumbnail}
              ></SaveItemForm>
            </div>

            <p>{item.description}</p>
            <p className="my-4">
              Price from:{" "}
              <span className="text-lg font-medium uppercase">
                ${item.base_price}
              </span>
            </p>
            <p className="my-4">
              Color:{" "}
              <span className="text-lg font-medium uppercase">
                {item.color}
              </span>
            </p>
            <SizeChartDialog></SizeChartDialog>
            <AddCartForm item={item} existingItem={existingItem}></AddCartForm>
            <ItemDetailsAccordion items={item.features}></ItemDetailsAccordion>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemSection;
