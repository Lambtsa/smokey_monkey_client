import { ReactNode } from "react";
import {
  CentreScreenContainer,
  CentreScreenWrapper,
} from "./CentreScreen.styles";

interface CentreScreenProps {
  children: ReactNode;
}

export const CentreScreen = ({ children }: CentreScreenProps): JSX.Element => {
  return (
    <CentreScreenContainer>
      <CentreScreenWrapper>{children}</CentreScreenWrapper>
    </CentreScreenContainer>
  );
};
