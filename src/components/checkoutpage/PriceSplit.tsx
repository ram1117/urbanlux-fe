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

interface PriceSplitProps {
  cartitems: ICartItem[];
}

const PriceSplit = ({ cartitems }: PriceSplitProps) => {
  let total: number = 0;
  const itemTotal = cartitems
    .map((item) => item.price * parseInt(item.quantity))
    .reduce((a, b) => a + b);

  total += itemTotal;

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
                imageSize={"w-10 lg:w-20 aspect-square"}
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
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell></TableCell>
          <TableCell colSpan={3} className="">
            Total
          </TableCell>
          <TableCell>$ {total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default PriceSplit;
