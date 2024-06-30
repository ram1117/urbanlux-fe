import NoData from "@/atoms/NoData";
import AddressSection from "@/components/accountpage/AddressSection";
import ProfileSection from "@/components/accountpage/ProfileSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getUserProfile } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";

const Page = async () => {
  const { currentUser } = await getAuthenticatedAppForUser();
  const response = await makeApiRequest(
    API_METHODS.GET,
    getUserProfile(),
    {},
    await currentUser?.getIdToken(),
  );
  if (!response?.ok) return <NoData></NoData>;
  const data = await response.json();

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      <section className="my-10 lg:my-20">
        <Tabs defaultValue="account" className="w-11/12 max-w-[1024px] mx-auto">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="address">Addresses</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="">
            <ProfileSection userinfo={data}></ProfileSection>
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
