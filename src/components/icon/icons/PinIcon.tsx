import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

import { BaseIcon } from "./BaseIcon";

export const PinIcon = (props: Omit<IconProps, "children">): ReactElement => {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </BaseIcon>
  );
};
