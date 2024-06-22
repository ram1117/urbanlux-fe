import Brands from "@/components/mainpage/Brands";
import Features from "@/components/mainpage/Features";
import Hero from "@/components/mainpage/Hero";
import Latest from "@/components/mainpage/Latest";
import NewsLetter from "@/components/mainpage/NewsLetter";

const HomePage = async () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Latest />
      <Brands />
      <NewsLetter />
      <Features />
    </main>
  );
};

export default HomePage;
