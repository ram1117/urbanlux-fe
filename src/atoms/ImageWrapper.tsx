import Image, { StaticImageData } from "next/image";

interface ImageWrapperProps {
  src: string | StaticImageData;
  alt: string;
  imageSize: string;
  sizes?: string;
  className?: string;
}

const ImageWrapper = ({
  src,
  alt,
  imageSize,
  sizes = "(max-width:768px)90vw,50vw",
  className = "",
}: ImageWrapperProps) => {
  return (
    <div className={`${imageSize} relative`}>
      <Image
        src={src}
        alt={alt}
        className={`${className}`}
        sizes={`${sizes}`}
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fPlEPQAH3gLvrydgQQAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

export default ImageWrapper;
