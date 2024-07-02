"use client";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import {
  JeansSizes,
  JeansLengths,
  OuterWearSizes,
  TShirtSizes,
} from "@/data/SizeChartData";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";

const SizeChartDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-max text-base underline underline-offset-4 my-4">
        Size Chart
      </DialogTrigger>
      <DialogContent className="z-[999]">
        <DialogHeader>
          <DialogTitle>Size Chart</DialogTitle>
          <DialogDescription>Sizes in inches</DialogDescription>
        </DialogHeader>
        <section className="flex flex-col gap-4 p-1 lg:p-4 max-h-[80vh] overflow-auto">
          <div className="my-2">
            <h4 className="text-lg font-semibold">Outerwears / Sweatshirts</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Chest</TableHead>
                  <TableHead>Length</TableHead>
                  <TableHead>Sleeve</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {OuterWearSizes.map((item) => (
                  <TableRow key={item.size}>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.chest_size}</TableCell>
                    <TableCell>{item.length}</TableCell>
                    <TableCell>{item.sleeve}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="my-2">
            <h4 className="text-lg font-semibold">T-Shirts</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Chest</TableHead>
                  <TableHead>Waist</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TShirtSizes.map((item) => (
                  <TableRow key={item.size}>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.chest}</TableCell>
                    <TableCell>{item.waist}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="my-2">
            <h4 className="text-lg font-semibold">Jeans / Trousers</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Waist</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {JeansSizes.map((item) => (
                  <TableRow key={item.size}>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.waist}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="my-2">
            <h4 className="text-lg font-semibold">Jeans / Trousers Lengths</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Length</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {JeansLengths.map((item) => (
                  <TableRow key={item.length}>
                    <TableCell>{item.length}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default SizeChartDialog;
