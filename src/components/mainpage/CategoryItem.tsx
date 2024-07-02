import ImageWrapper from "@/atoms/ImageWrapper";
import { ICategory } from "@/interfaces";
import Link from "next/link";

interface CategoryItemProps {
  category: ICategory;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <li className="w-full p-4 rounded-md border ">
      <Link href={`/categories/${category._id}`}>
        <ImageWrapper
          src={category.thumbnail}
          alt={"category thumbnail"}
          imageSize="w-full aspect-square"
          sizes="(max-width:768px) 50vw,30vw"
        ></ImageWrapper>
        <h4 className="capitalize mt-4 text-sm md:text-base font-semibold">
          {category.name}
        </h4>
      </Link>
    </li>
  );
};

export default CategoryItem;
