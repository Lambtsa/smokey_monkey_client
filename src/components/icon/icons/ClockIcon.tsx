import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

import { BaseIcon } from "./BaseIcon";

export const ClockIcon = (props: Omit<IconProps, "children">): ReactElement => {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </BaseIcon>
  );
};
