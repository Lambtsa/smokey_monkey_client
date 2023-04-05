import {
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./SplitScreen.styles";
import { ReactNode } from "react";

interface SplitScreenProps {
  leftBlock: ReactNode;
  rightBlock: ReactNode;
}

export const SplitScreen = ({
  leftBlock,
  rightBlock,
}: SplitScreenProps): JSX.Element => {
  return (
    <SplitScreenContainer>
      <SplitScreenWrapper>
        <InnerContainer>{leftBlock}</InnerContainer>
        <InnerContainer>{rightBlock}</InnerContainer>
      </SplitScreenWrapper>
    </SplitScreenContainer>
  );
};
