import { type ReactElement } from "react";

import type { IconProps, IconType } from "./Icon.types";
import {
  BurgerIcon,
  CaretIcon,
  CloseIcon,
  EnFlagIcon,
  FacebookIcon,
  FrFlagIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TimesIcon,
} from "./icons";

export const icons: Record<IconType, (props: Omit<IconProps, "children">) => ReactElement> = {
  burger: BurgerIcon,
  caret: CaretIcon,
  close: CloseIcon,
  en: EnFlagIcon,
  facebook: FacebookIcon,
  fr: FrFlagIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  times: TimesIcon,
};

/*
 * The site's SVG icons as components. Size defaults to the icon's own size;
 * color, when given, replaces the icon's main fill.
 */
export const Icon = ({
  icon,
  ...props
}: Omit<IconProps, "children"> & { icon: IconType }): ReactElement => {
  const IconComponent = icons[icon];

  return <IconComponent {...props} />;
};
