import React, { ChangeEvent } from "react";
import { IconType } from "react-icons";

interface FormInputProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  icon: IconType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type,
  name,
  value,
  icon: Icon,
  onChange,
}) => {
  return (
    <div className="w-full relative text-center">
      <Icon className="absolute fill-very-light-grey top-4 left-4" />
      <input
        className="border border-very-light-grey rounded-md w-full h-[50px] bg-medium-grey pl-10 text-input-medium outline-none text-white placeholder:text-input-medium"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
