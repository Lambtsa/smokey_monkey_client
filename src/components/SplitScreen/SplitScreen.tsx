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
  showImage = true,
  order = "regular",
  background = "green",
  noImg = false,
}: SplitScreenProps): JSX.Element => {
  return (
    <SplitScreenContainer background={background} id={id}>
      <SplitScreenWrapper noImg={noImg} showImage={showImage}>
        <InnerContainer order={order === "regular" ? 1 : 2}>
          {leftBlock}
        </InnerContainer>
        <InnerContainer order={order === "regular" ? 2 : 1}>
          {rightBlock}
        </InnerContainer>
      </SplitScreenWrapper>
    </SplitScreenContainer>
  );
};
