import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonType = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: ButtonType;
  children: ReactNode;
}
