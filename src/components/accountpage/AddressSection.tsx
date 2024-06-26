import NoData from "@/atoms/NoData";
import { IAddressItems } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getAddresses } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";
import AddAddressDialog from "../checkoutpage/AddAddressDialog";

const AddressSection = async () => {
  const { currentUser } = await getAuthenticatedAppForUser();
  const addressResponse = await makeApiRequest(
    API_METHODS.GET,
    getAddresses(),
    null,
    await currentUser?.getIdToken(),
  );

  if (!addressResponse?.ok) {
    return <NoData></NoData>;
  }
  const addressData: IAddressItems = await addressResponse?.json();
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center border-b py-2">
          <CardTitle className="text-lg">Addresses</CardTitle>
          <AddAddressDialog></AddAddressDialog>
        </div>
      </CardHeader>
      <CardContent className="my-4 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h4 className="my-2 font-semibold">Delivery Addresses</h4>
          <ul className="flex flex-col gap-4 list-disc ps-4">
            {addressData.delivery.map((item) => (
              <li key={item._id} className="capitalize">
                <p>{item.label}</p>
                <p>{item.line1}</p>
                <p>{item.line2}</p>
                <p>
                  {item.city}, {item.state}
                </p>
                <p>{item.country}</p>
                <p>{item.postal_code}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="my-2 font-semibold">Billing Addresses</h4>
          <ul className="flex flex-col gap-4  list-disc ps-4">
            {addressData.billing.map((item) => (
              <li key={item._id} className="capitalize">
                <p>{item.label}</p>
                <p>{item.line1}</p>
                <p>{item.line2}</p>
                <p>
                  {item.city}, {item.state}
                </p>
                <p>{item.country}</p>
                <p>{item.postal_code}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
export default AddressSection;
