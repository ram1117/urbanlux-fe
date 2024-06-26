import { IFormAddressItem, IAddressItems } from "@/interfaces";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import AddAddressDialog from "./AddAddressDialog";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface AddressProps {
  addressList: IAddressItems;
  setAddress: React.Dispatch<React.SetStateAction<IFormAddressItem>>;
  selectedAddress: IFormAddressItem;
  errors:
    | { billing?: string | undefined; delivery?: string | undefined }
    | undefined;
}

const Address = ({
  selectedAddress,
  addressList,
  setAddress,
  errors,
}: AddressProps) => {
  const handleDeliveryChange = (value: string) => {
    setAddress((prev) => ({ ...prev, delivery: value }));
  };

  const handleBillingChange = (value: string) => {
    setAddress((prev) => ({ ...prev, billing: value }));
  };

  const handleCheckBox = (checked: boolean) => {
    if (checked) {
      setAddress((prev) => ({ ...prev, billing: prev.delivery }));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-medium font-cantarell border-b-2">
            Delivery Address
          </h3>
          {addressList.delivery.length === 0 && (
            <p className="italic">Please add a delivery address</p>
          )}
          <RadioGroup
            name="delivery"
            className="my-4"
            onValueChange={handleDeliveryChange}
          >
            {addressList.delivery.map((address) => (
              <div className="flex gap-4 items-center" key={address._id}>
                <RadioGroupItem
                  value={address._id}
                  id={address._id}
                ></RadioGroupItem>
                <Label className="text-lg">
                  <h6>{address.label}</h6>
                  <p className="font-light">{address.line1}</p>
                  <p className="font-light">{address.line2}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>
          <AddAddressDialog label="Add Delivery address"></AddAddressDialog>
          <p className="text-sm text-red-800">{errors?.delivery}</p>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-medium font-cantarell border-b-2">
            Billing Address
          </h3>
          <div className="flex gap-2 items-center my-4">
            <Checkbox
              id="sameasdelivery"
              onCheckedChange={handleCheckBox}
              disabled={selectedAddress.delivery.length === 0}
            ></Checkbox>
            <Label className="text-base font-light" htmlFor="sameasdelivery">
              Same as delivery address
            </Label>
          </div>

          <RadioGroup
            name="billing"
            className="my-4"
            onValueChange={handleBillingChange}
          >
            {addressList.billing.map((address) => (
              <div className="flex gap-4 items-center" key={address._id}>
                <RadioGroupItem
                  value={address._id}
                  id={address._id}
                ></RadioGroupItem>
                <Label className="text-lg">
                  <h6>{address.label}</h6>
                  <p className="font-light">{address.line1}</p>
                  <p className="font-light">{address.line2}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>
          <AddAddressDialog label="Add Billing address"></AddAddressDialog>
          <p className="text-sm text-red-800">{errors?.billing}</p>
        </div>
      </div>
    </div>
  );
};

export default Address;