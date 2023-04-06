import { ReactNode } from "react";
import { LayoutContainer } from "./Layout.styles";
import { Nav } from "@components/Nav";
import { Footer } from "@components/Footer";
import { Main } from "@components/Main";
import { NavPosition } from "@components/Nav/Nav.types";

interface LayoutProps {
  children: ReactNode;
  position?: NavPosition;
}

export const Layout = ({
  children,
  position = "fixed",
}: LayoutProps): JSX.Element => {
  return (
    <LayoutContainer>
      <Nav position={position} />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};
