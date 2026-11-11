import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

import { BaseIcon } from "./BaseIcon";

export const FrFlagIcon = ({
  width = 22,
  height = 16,
  color: _color,
  ...props
}: Omit<IconProps, "children">): ReactElement => {
  return (
    <BaseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" fill="none" width={width} height={height} {...props}>
      <g clipPath="url(#clip-flag-fr)">
        <rect width="22" height="16" rx="2" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H7V16H0V0Z" fill="#1A47B8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 0H22V16H15V0Z" fill="#F93939" />
      </g>
      <defs>
        <clipPath id="clip-flag-fr">
          <rect width="22" height="16" rx="2" fill="white" />
        </clipPath>
      </defs>
    </BaseIcon>
  );
};
