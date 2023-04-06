import { ReactNode } from "react";
import { StyledLink } from "./Link.styles";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export const Link = ({ href, children }: LinkProps): JSX.Element => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
