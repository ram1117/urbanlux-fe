import Brands from "@/components/mainpage/Brands";
import Categories from "@/components/mainpage/Categories";
import Features from "@/components/mainpage/Features";
import Hero from "@/components/mainpage/Hero";
import NewsLetter from "@/components/mainpage/NewsLetter";

const HomePage = async () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Categories />
      <Brands />
      <NewsLetter />
      <Features />
    </main>
  );
};

export default HomePage;
