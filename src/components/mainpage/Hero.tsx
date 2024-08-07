import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center w-full relative">
      <ImageCarousel />
      <div className="text-light flex flex-col gap-4 items-center justify-center max-w-[1200px] w-5/6 mt-16 md:mt-0">
        <h1 className="font-bold text-4xl lg:text-6xl uppercase tracking-widest text-center">
          Urban Trend
        </h1>
        <p className="text-lg lg:text-xl font-medium text-center leading-2 lg:leading-8">
          Discover the latest in urban fashion at Urban Trend! We&apos;re your
          go-to destination for cutting-edge streetwear, offering a curated
          collection of trendy apparel, bold accessories, and must-have
          footwear. Our styles are inspired by the vibrant energy of city life,
          ensuring you stay ahead of the fashion curve.
        </p>
      </div>
    </section>
  );
};

export default Hero;
