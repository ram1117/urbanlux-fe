import { FeaturesData } from "@/data/FeaturesData";
import { IFeatureItem } from "@/interfaces";
import FeaturesItem from "./FeaturesItem";

const Features = () => {
  return (
    <section className="flex flex-col justify-center p-4">
      <ul className="w-full h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {FeaturesData.map((item: IFeatureItem) => (
          <FeaturesItem item={item} key={item.title} />
        ))}
      </ul>
    </section>
  );
};

export default Features;
