import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  label: string;
  name: string;
  type: "text" | "password" | "email";
  readonly?: boolean;
  disabled?: boolean;
  errorMsg?: string;
}

const FormInput = ({
  label,
  type,
  name,
  readonly = false,
  disabled = false,
  errorMsg = "",
}: FormInputProps) => {
  return (
    <div className="w-full">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        id={name}
        className="rounded-none border-dark"
        type={type}
        disabled={disabled}
        readOnly={readonly}
      ></Input>
      <p className="text-red-800 text-xs">{errorMsg}</p>
    </div>
  );
};

export default FormInput;
