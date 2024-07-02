"use client";

import AddFavoriteAction from "@/actions/merchandise/addfavorite.action";
import ImageWrapper from "@/atoms/ImageWrapper";
import IconSave from "@public/icons/IconSave.svg";
import IconSaved from "@public/icons/IconSaved.svg";

interface SaveItemFormProps {
  saved: boolean;
  id: string;
  name: string;
  thumbnail: string;
}

const SaveItemForm = ({ saved, id, name, thumbnail }: SaveItemFormProps) => {
  const icon = saved ? IconSaved : IconSave;
  const bindedAction = AddFavoriteAction.bind(null, id, name, thumbnail);
  return (
    <form action={bindedAction}>
      <button type="submit">
        <ImageWrapper
          src={icon}
          alt={`${saved ? "saved icon" : "save icon"}`}
          imageSize={"h-6 w-6 lg:h-8 lg:w-8"}
          sizes="15vw"
        ></ImageWrapper>
      </button>
    </form>
  );
};

export default SaveItemForm;
