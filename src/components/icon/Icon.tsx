import type { ReactElement } from "react";

import type { IconProps, IconType } from "./Icon.types";
import {
  BurgerIcon,
  ClockIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";

export const icons: Record<IconType, (props: Omit<IconProps, "children">) => ReactElement> = {
  burger: BurgerIcon,
  clock: ClockIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  pin: PinIcon,
};

/*
 * The site's line icons, drawn in the current text colour: set the colour with
 * a text-* class on the icon or its parent.
 */
export const Icon = ({
  icon,
  ...props
}: Omit<IconProps, "children"> & { icon: IconType }): ReactElement => {
  const IconComponent = icons[icon];

  return <IconComponent {...props} />;
};
