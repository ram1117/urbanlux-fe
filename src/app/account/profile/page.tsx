import AddressSection from "@/components/accountpage/AddressSection";
import ProfileSection from "@/components/accountpage/ProfileSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      <section className="my-10 lg:my-20">
        <Tabs defaultValue="account" className="w-11/12 max-w-[1024px] mx-auto">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="address">Addresses</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="">
            <ProfileSection></ProfileSection>
          </TabsContent>
          <TabsContent value="address">
            <AddressSection></AddressSection>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Page;
