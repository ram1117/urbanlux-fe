"use client";

import NoData from "@/atoms/NoData";
import { IAddressItems } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getAddresses } from "@/lib/api/apiurls";
import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";
import AddAddressDialog from "../checkoutpage/AddAddressDialog";
import { useFetchDataClient } from "@/hooks/usersession.hooks";
import LogoLoadingSkeleton from "@/atoms/LogoLoadingSkeleton";

const AddressSection = () => {
  const { data, error, loading } = useFetchDataClient(
    API_METHODS.GET,
    getAddresses(),
    {},
  ) as { data: IAddressItems; error: string; loading: boolean };

  if (error) {
    return <NoData>{error}</NoData>;
  }
  return (
    <>
      {loading && <LogoLoadingSkeleton></LogoLoadingSkeleton>}
      {data && (
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
                {data.delivery.map((item) => (
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
                {data.billing.map((item) => (
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
      )}
    </>
  );
};
export default AddressSection;
