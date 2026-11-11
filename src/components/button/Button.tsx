import type { ReactElement } from "react";

import type { ButtonProps, ButtonType } from "./Button.types";

/* Shared with links that look like buttons (LinkBtn) */
export const buttonClassName = (btnType: ButtonType): string => {
  const base = "inline-flex justify-center items-center min-h-12 px-7 py-4 caps text-sm font-bold leading-none transition-colors disabled:opacity-60";
  switch (btnType) {
    case "primary": {
      return `${base} bg-brass text-forest hover:bg-brass-light`;
    }
    case "outline": {
      return `${base} border border-cream/50 text-cream hover:border-brass hover:text-brass`;
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
