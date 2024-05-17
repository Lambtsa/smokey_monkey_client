import {
  ImgContainer,
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./SplitScreen.styles";
import { SplitScreenProps } from "./SplitScreen.types";

export const SplitScreen = ({
  id,
  imgBlock,
  contentBlock,
  isForm = false,
  showImage = true,
  order = "regular",
  background = "green",
}: SplitScreenProps): JSX.Element => {
  return (
    <SplitScreenContainer $background={background} id={id}>
      <SplitScreenWrapper $isForm={isForm} $showImage={showImage}>
        {order === "reversed" && (
          <>
            <ImgContainer>{imgBlock}</ImgContainer>
            <InnerContainer>{contentBlock}</InnerContainer>
          </>
        )}
        {order === "regular" && (
          <>
            <InnerContainer>{contentBlock}</InnerContainer>
            <ImgContainer>{imgBlock}</ImgContainer>
          </>
        )}
      </SplitScreenWrapper>
    </SplitScreenContainer>
  );
};
