import { StaticImageData } from "next/image";
import ImageWrapper from "@/atoms/ImageWrapper";
import { motion } from "framer-motion";

interface MainImageItemProps {
  src: string | StaticImageData;
}

const MainImageItem = ({ src }: MainImageItemProps) => {
  return (
    <motion.div
      className="w-full h-full z-20"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
    >
      <ImageWrapper
        src={src}
        alt="fashion image"
        imageSize="h-full w-full"
        className="object-cover lg:object-fill"
        sizes="100vw"
      ></ImageWrapper>
    </motion.div>
  );
};

export default MainImageItem;
