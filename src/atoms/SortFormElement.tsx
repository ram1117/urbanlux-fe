import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SORT_VALUES } from "@/lib/constants";

const SortFormElement = () => {
  return (
    <>
      <h4 className="border-b-2">Sort by</h4>
      <RadioGroup
        className="max-h-[50vh] overflow-auto gap-1 py-4"
        name="sortby"
      >
        <li key={SORT_VALUES.DATEDSC} className="flex items-center gap-2">
          <RadioGroupItem
            id={SORT_VALUES.DATEDSC}
            value={SORT_VALUES.DATEDSC}
          ></RadioGroupItem>
          <Label htmlFor={SORT_VALUES.DATEDSC} className="text-lg font-light">
            Latest
          </Label>
        </li>
        <li key={SORT_VALUES.PRICEASC} className="flex items-center gap-2">
          <RadioGroupItem
            id={SORT_VALUES.PRICEASC}
            value={SORT_VALUES.PRICEASC}
          ></RadioGroupItem>
          <Label htmlFor={SORT_VALUES.PRICEASC} className="text-lg font-light">
            Price Low-High
          </Label>
        </li>
        <li key={SORT_VALUES.PRICEDSC} className="flex items-center gap-2">
          <RadioGroupItem
            id={SORT_VALUES.PRICEDSC}
            value={SORT_VALUES.PRICEDSC}
          ></RadioGroupItem>
          <Label htmlFor={SORT_VALUES.PRICEDSC} className="text-lg font-light">
            Price High-Low
          </Label>
        </li>

        <li key={SORT_VALUES.ALPHASC} className="flex items-center gap-2">
          <RadioGroupItem
            id={SORT_VALUES.ALPHASC}
            value={SORT_VALUES.ALPHASC}
          ></RadioGroupItem>
          <Label htmlFor={SORT_VALUES.ALPHASC} className="text-lg font-light">
            A-Z
          </Label>
        </li>
        <li key={SORT_VALUES.ALPHDSC} className="flex items-center gap-2">
          <RadioGroupItem
            id={SORT_VALUES.ALPHDSC}
            value={SORT_VALUES.ALPHDSC}
          ></RadioGroupItem>
          <Label htmlFor={SORT_VALUES.ALPHDSC} className="text-lg font-light">
            Z-A
          </Label>
        </li>
      </RadioGroup>
    </>
  );
};

export default SortFormElement;
