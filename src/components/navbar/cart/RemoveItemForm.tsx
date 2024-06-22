"use client";

import ImageWrapper from "@/atoms/ImageWrapper";
import IconDelete from "@public/icons/icondelete.svg";
import LoadingSpinner from "@/components/ui/loadingspinner";
import { useFormStatus } from "react-dom";
import RemoveCartAction from "@/actions/merchandise/removecart.action";

interface RemoveItemFormProps {
  id: string;
}

const RemoveItemForm = ({ id }: RemoveItemFormProps) => {
  const { pending } = useFormStatus();

  const buttonContent = pending ? (
    <LoadingSpinner color="#0d1326"></LoadingSpinner>
  ) : (
    <ImageWrapper
      src={IconDelete}
      alt={"delete icon"}
      imageSize={"h-6 w-6"}
    ></ImageWrapper>
  );

  const bindedAction = RemoveCartAction.bind(null, id);

  return (
    <form action={bindedAction}>
      <button type="submit">{buttonContent}</button>
    </form>
  );
};

export default RemoveItemForm;
