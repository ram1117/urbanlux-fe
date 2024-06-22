import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";

interface FeaturesAccordionProps {
  items: string[];
}

const FeaturesAccordion = ({ items }: FeaturesAccordionProps) => {
  return (
    <Accordion collapsible type="single">
      <AccordionItem value={"accordion-1"}>
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
    </Accordion>
  );
};

export default FeaturesAccordion;
