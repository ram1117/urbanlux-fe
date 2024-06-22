import ImageWrapper from "@/atoms/ImageWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ItemMobileCarouselProps {
  images: string[];
}

const ItemMobileCarousel = ({ images }: ItemMobileCarouselProps) => {
  return (
    <Carousel className="lg:hidden w-full mx-auto">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <ImageWrapper
              src={image}
              alt={"product image"}
              imageSize={"w-11/12 aspect-square max-w-[600px] mx-auto"}
            ></ImageWrapper>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="!right-0" />
      <CarouselNext />
    </Carousel>
  );
};

export default ItemMobileCarousel;
