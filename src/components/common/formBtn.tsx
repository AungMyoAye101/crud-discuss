"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormBtnProp {
  children: React.ReactNode;
}
const FormBtn = ({ children }: FormBtnProp) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
};

export default FormBtn;
