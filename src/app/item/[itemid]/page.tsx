const Page = ({ params }: { params: { itemid: string } }) => {
  const itemid = params.itemid;
  return <section className="min-h-screen">{itemid}</section>;
};

export default Page;
