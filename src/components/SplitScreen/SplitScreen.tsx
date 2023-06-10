import {
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./SplitScreen.styles";
import { SplitScreenProps } from "./SplitScreen.types";

export const SplitScreen = ({
  id,
  leftBlock,
  rightBlock,
  background = "green",
}: SplitScreenProps): JSX.Element => {
  return (
    <SplitScreenContainer background={background} id={id}>
      <SplitScreenWrapper>
        <InnerContainer>{leftBlock}</InnerContainer>
        <InnerContainer>{rightBlock}</InnerContainer>
      </SplitScreenWrapper>
    </SplitScreenContainer>
  );
};
