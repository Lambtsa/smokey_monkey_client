import type { ButtonHTMLAttributes, ReactNode } from "react";

/* primary: filled brass; outline: a cream border */
export type ButtonType = "primary" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: ButtonType;
  children: ReactNode;
}
