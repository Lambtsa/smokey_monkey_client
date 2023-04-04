import { ReactNode } from "react";
import { MainSection } from "./Main.styles";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps): JSX.Element => {
  return <MainSection>{children}</MainSection>;
};
