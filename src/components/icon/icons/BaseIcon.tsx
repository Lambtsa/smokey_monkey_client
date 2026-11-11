import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

export const BaseIcon = ({ children, ...props }: IconProps): ReactElement => {
  return <svg {...props}>{children}</svg>;
};
