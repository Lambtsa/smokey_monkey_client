import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

import { BaseIcon } from "./BaseIcon";

export const BurgerIcon = (props: Omit<IconProps, "children">): ReactElement => {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
};
