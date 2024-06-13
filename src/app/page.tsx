import Brands from "@/components/mainpage/Brands";
import Hero from "@/components/mainpage/Hero";

const HomePage = async () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Brands />
    </main>
  );
};

export default HomePage;
