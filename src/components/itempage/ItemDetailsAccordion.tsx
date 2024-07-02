import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";

interface ItemDetailsAccordionProp {
  items: string[];
}

const ItemDetailsAccordion = ({ items }: ItemDetailsAccordionProp) => {
  return (
    <Accordion collapsible type="single">
      <AccordionItem value={"features"}>
        <AccordionTrigger className="text-lg">Product Details</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-2 text-base">
            {items.map((item) => (
              <li key={item} className="list-disc mx-4">
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={"deliveryeta"}>
        <AccordionTrigger className="text-lg">Shipping</AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Standart delivery time of 5-7 business days. Please note that
            weekends and holidays are not included in this timeframe. You will
            receive a notification once the item has been shipped, along with
            tracking details to monitor its progress.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ItemDetailsAccordion;
