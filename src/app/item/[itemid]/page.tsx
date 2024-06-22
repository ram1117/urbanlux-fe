import ItemSection from "@/components/itempage/ItemSection";

const Page = ({ params }: { params: { itemid: string } }) => {
  const itemid = params.itemid;
  return (
    <main className="min-h-screen bg-light text-dark">
      <ItemSection itemid={itemid}></ItemSection>
    </main>
  );
};

export default Page;
