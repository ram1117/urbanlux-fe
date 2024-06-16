"use client";

import { IMerchandiseItem } from "@/interfaces";
import MerchandiseItem from "./MerchandiseItem";

interface BrandSectionProps {
  items: IMerchandiseItem[];
}

const BrandSection = ({ items }: BrandSectionProps) => {
  const sizes = new Set<string>([]);
  items.forEach((item: IMerchandiseItem) => {
    item.inventory.forEach((inventory: any) => {
      sizes.add(inventory.size);
    });
  });

  console.log(sizes);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-4">
      <div className="lg:col-span-1"></div>
      <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item: IMerchandiseItem) => (
          <MerchandiseItem key={item._id} item={item}></MerchandiseItem>
        ))}
      </ul>
    </div>
  );
};

export default BrandSection;
