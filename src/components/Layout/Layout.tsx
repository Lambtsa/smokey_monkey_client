import { ReactNode } from "react";
import { LayoutContainer } from "./Layout.styles";
import { Nav } from "@components/Nav";
import { Footer } from "@components/Footer";
import { Main } from "@components/Main";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <LayoutContainer>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};
