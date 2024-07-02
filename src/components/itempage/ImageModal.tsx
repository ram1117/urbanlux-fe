import ImageWrapper from "@/atoms/ImageWrapper";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

interface ImageModalProps {
  image: string;
}

const ImageModal = ({ image }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ImageWrapper
          src={image}
          alt={"product image"}
          imageSize={"w-full aspect-square"}
          sizes="(max-width:768px) 90vw,40vw"
        ></ImageWrapper>
      </DialogTrigger>

      <DialogContent className="w-screen h-screen max-w-screen p-4 overflow-auto z-[999]">
        <DialogHeader className="hidden">
          <DialogTitle>Product image</DialogTitle>
          <DialogDescription>Product image</DialogDescription>
        </DialogHeader>
        <section>
          <ImageWrapper
            src={image}
            alt={"product image"}
            imageSize={"w-full aspect-square"}
            sizes="100vw"
          ></ImageWrapper>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
