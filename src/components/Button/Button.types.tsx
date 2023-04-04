import { ButtonHTMLAttributes } from "react";

export type ButtonType = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  btnType: ButtonType;
}
