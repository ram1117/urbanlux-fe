"use client";

import { Button } from "@/components/ui/button";
import ImageWrapper from "./ImageWrapper";
import IconReset from "@public/icons/iconreset.svg";

const ResetFilterButton = () => {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <Button onClick={handleReset} variant={"link"} className="text-base">
      <ImageWrapper
        src={IconReset}
        alt={"reset filter icon"}
        imageSize={"h-5 w-5 mx-1"}
        sizes="(max-width):15vw,10vw"
      ></ImageWrapper>
      Reset
    </Button>
  );
};

export default ResetFilterButton;
