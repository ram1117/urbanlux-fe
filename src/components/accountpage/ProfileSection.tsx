import { IUserInfo } from "@/interfaces";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface ProfileSectionProps {
  userinfo: IUserInfo;
}

const ProfileSection = ({ userinfo }: ProfileSectionProps) => {
  return (
    <Card>
      <CardHeader className="">
        <CardTitle className="text-lg border-b py-2">Account Details</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 my-4">
        <div className="grid grid-cols-2 gap-2">
          <p>First Name</p>
          <p className="capitalize">{userinfo.firstname}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>Last Name</p>
          <p className="capitalize">{userinfo.lastname}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>Email</p>
          <p>{userinfo.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>Mobile</p>
          <p>{userinfo.mobile}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
