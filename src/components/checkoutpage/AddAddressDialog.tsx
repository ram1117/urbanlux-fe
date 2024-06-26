"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import AddAddressForm from "./AddAddressForm";

interface AddAddressDialogProps {
  label?: string;
}

const AddAddressDialog = ({ label = "Add Address" }: AddAddressDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="w-max" variant={"outline"}>
          {label}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Add Address</DialogTitle>
          <DialogDescription>for billing and delivery</DialogDescription>
        </DialogHeader>
        <AddAddressForm setOpen={setOpen}></AddAddressForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressDialog;
