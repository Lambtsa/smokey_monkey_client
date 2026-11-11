import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

/* A 24×24 line icon drawn in the text colour (currentColor) */
export const BaseIcon = ({
  children,
  size = 24,
  strokeWidth = 1.5,
  ...props
}: IconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
};
