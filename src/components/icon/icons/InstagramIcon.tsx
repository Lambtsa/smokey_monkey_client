import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

import { BaseIcon } from "./BaseIcon";

export const InstagramIcon = (props: Omit<IconProps, "children">): ReactElement => {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </BaseIcon>
  );
};
