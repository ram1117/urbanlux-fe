import ImageWrapper from "@/atoms/ImageWrapper";
import { IFeatureItem } from "@/interfaces";

interface FeaturesItemProps {
  item: IFeatureItem;
}

const FeaturesItem = ({ item }: FeaturesItemProps) => {
  return (
    <li className="flex flex-col gap-4 items-center justify-center p-4">
      <ImageWrapper
        src={item.icon}
        alt={item.alt}
        imageSize={"h-8 w-8"}
        sizes="(max-width:768):40vw,20vw"
      ></ImageWrapper>
      <h4 className="text-base font-light">{item.title}</h4>
    </li>
  );
};

export default FeaturesItem;
