import CategoriesSection from "@/components/categoriespage/CategoriesSection";

const Page = ({ params }: { params: { categoryid: string } }) => {
  return (
    <main className="min-h-screen text-dark max-w-[1440px] mx-auto">
      <CategoriesSection categoryid={params.categoryid}></CategoriesSection>
    </main>
  );
};

export default Page;