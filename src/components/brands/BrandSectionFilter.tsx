"use client";

import { IMerchandiseItem } from "@/interfaces";
import BrandSectionFilterForm from "./brand/BrandSectionFilterForm";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";
import ResetFilterButton from "@/atoms/ResetFilterButton";

interface BrandSectionFilterProps {
  setMerchItems: React.Dispatch<React.SetStateAction<IMerchandiseItem[]>>;
  brandid: string;
}

const BrandSectionFilter = ({
  setMerchItems,
  brandid,
}: BrandSectionFilterProps) => {
  return (
    <>
      <Accordion type="single" collapsible className="lg:hidden">
        <AccordionItem value={"filter-1"}>
          <AccordionTrigger>Filter</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-end">
              <ResetFilterButton></ResetFilterButton>
            </div>
            <BrandSectionFilterForm
              setMerchItems={setMerchItems}
              brandid={brandid}
            ></BrandSectionFilterForm>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="p-4 lg:block hidden">
        <div className="flex gap-4 justify-between items-center">
          <h4 className="py-2 text-lg font-semibold">Filter</h4>
          <ResetFilterButton></ResetFilterButton>
        </div>
        <BrandSectionFilterForm
          setMerchItems={setMerchItems}
          brandid={brandid}
        ></BrandSectionFilterForm>
      </div>
    </>
  );
};

export default BrandSectionFilter;
