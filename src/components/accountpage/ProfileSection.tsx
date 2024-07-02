"use client";

import { IUserInfo } from "@/interfaces";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useFetchDataClient } from "@/hooks/usersession.hooks";
import { API_METHODS } from "@/lib/api/apiservice";
import { getUserProfile } from "@/lib/api/apiurls";
import NoData from "@/atoms/NoData";
import LogoLoadingSkeleton from "@/atoms/LogoLoadingSkeleton";

const ProfileSection = () => {
  const { data, loading, error } = useFetchDataClient(
    API_METHODS.GET,
    getUserProfile(),
    {},
  ) as { data: IUserInfo; loading: boolean; error: string };
  if (error) {
    return <NoData>{error}</NoData>;
  }

  return (
    <>
      {loading && <LogoLoadingSkeleton></LogoLoadingSkeleton>}
      {data && (
        <Card>
          <CardHeader className="">
            <CardTitle className="text-lg border-b py-2">
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 my-4">
            <div className="grid grid-cols-2 gap-2">
              <p>First Name</p>
              <p className="capitalize">{data.firstname}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p>Last Name</p>
              <p className="capitalize">{data.lastname}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p>Email</p>
              <p>{data.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p>Mobile</p>
              <p>{data.mobile}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProfileSection;
