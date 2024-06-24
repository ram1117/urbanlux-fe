import { ICartItem } from "@/interfaces";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow,
  TableFooter,
} from "../ui/table";
import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";
import { CHARGES } from "@/lib/constants";

interface PriceSplitProps {
  cartitems: ICartItem[];
}

const PriceSplit = ({ cartitems }: PriceSplitProps) => {
  let total: number = 0;
  const itemTotal = cartitems
    .map((item) => item.price * parseInt(item.quantity))
    .reduce((a, b) => a + b);
  const tax = Math.ceil(itemTotal * CHARGES.TAX);

  total += itemTotal;
  total += CHARGES.SHIPPING;
  total += tax;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>$</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartitems.map((item) => (
          <TableRow key={item.merchandise}>
            <TableCell>
              <ImageWrapper
                src={item.image}
                alt={"product thumbnail"}
                imageSize={"w-10 aspect-square"}
              ></ImageWrapper>
            </TableCell>
            <TableCell>
              <Link
                href={`/item/${item.merchandise}`}
                key={item.merchandise}
                className=" underline"
              >
                {item.name}
              </Link>
            </TableCell>
            <TableCell className="uppercase">{item.size}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.price * parseInt(item.quantity)}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell></TableCell>
          <TableCell className="" colSpan={3}>
            Shipping
          </TableCell>
          <TableCell>{CHARGES.SHIPPING}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell className="" colSpan={2}>
            Tax
          </TableCell>
          <TableCell>{CHARGES.TAX * 100}%</TableCell>
          <TableCell>{tax}</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell></TableCell>
          <TableCell colSpan={3} className="">
            Total
          </TableCell>
          <TableCell>{total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default PriceSplit;
