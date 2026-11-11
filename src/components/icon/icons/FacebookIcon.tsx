import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

import { BaseIcon } from "./BaseIcon";

export const FacebookIcon = (props: Omit<IconProps, "children">): ReactElement => {
  return (
    <BaseIcon {...props}>
      <path d="M14 21v-7.5h2.6l.4-3H14V8.6c0-.9.3-1.5 1.5-1.5H17V4.4A20 20 0 0 0 14.8 4.3C12.6 4.3 11 5.6 11 8.1v2.4H8.5v3H11V21" />
    </BaseIcon>
  );
};
