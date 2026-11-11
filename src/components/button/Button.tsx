import type { ReactElement } from "react";

import type { ButtonProps, ButtonType } from "./Button.types";

export const buttonClassName = (btnType: ButtonType): string => {
  const base = "w-full px-6 py-3.5 rounded-[7px]";
  switch (btnType) {
    case "primary": {
      return `${base} bg-ivory text-dark-green hover:bg-eerie-black hover:text-ivory`;
    }
    case "secondary": {
      return `${base} border border-ivory bg-transparent text-ivory hover:bg-ivory hover:text-eerie-black`;
    }
  }
};

export const Button = ({
  children,
  btnType,
  className,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button {...rest} className={`${buttonClassName(btnType)} ${className ?? ""}`}>
      {children}
    </button>
  );
};
