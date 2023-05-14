"use client";

import clsx from "clsx";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  register,
  required,
  errors,
  disabled,
}) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Input;
