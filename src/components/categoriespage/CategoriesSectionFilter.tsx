import { IMerchandiseItem } from "@/interfaces";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";
import CatSectionFilterForm from "./CatSectionFilterForm";

interface CategoriesSectionFilterProps {
  categoryid: string;
  setMerchItems: React.Dispatch<React.SetStateAction<IMerchandiseItem[]>>;
}

const CategoriesSectionFilter = ({
  categoryid,
  setMerchItems,
}: CategoriesSectionFilterProps) => {
  return (
    <>
      <Accordion type="single" collapsible className="lg:hidden">
        <AccordionItem value={"filter-1"}>
          <AccordionTrigger>Filter</AccordionTrigger>
          <AccordionContent>
            <CatSectionFilterForm
              setMerchItems={setMerchItems}
              categoryid={categoryid}
            ></CatSectionFilterForm>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="p-4 lg:block hidden">
        <div className="flex gap-4 justify-between items-center">
          <h4 className="py-2 text-lg font-semibold">Filter</h4>
        </div>
        <CatSectionFilterForm
          setMerchItems={setMerchItems}
          categoryid={categoryid}
        ></CatSectionFilterForm>
      </div>
    </>
  );
};

export default CategoriesSectionFilter;
