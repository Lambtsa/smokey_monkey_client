import { MEDIA } from "@constants/layout";
import styled from "styled-components";
import { BackgroundType } from "./SplitScreen.types";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 32px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SplitScreenContainer = styled.section<{
  background: BackgroundType;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    switch (props.background) {
      case "black": {
        return props.theme.colors.eerieBlack;
      }
      case "blue": {
        return props.theme.colors.moonstone;
      }
      case "green": {
        return props.theme.colors.darkGreen;
      }
      case "red": {
        return props.theme.colors.chocolateCosmos;
      }
    }
  }};
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.darkGreen};

  @media ${MEDIA.TABLET} {
    height: 100%;
  }
`;

export const SplitScreenWrapper = styled.div<{
  showImage: boolean;
  isForm: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) =>
      props.isForm ? "1fr" : props.showImage ? "1fr 2fr" : "1fr"};
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  height: 100vh;
  width: 100%;

  @media ${MEDIA.TABLET} {
    order: 2;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  height: 100vh;
  width: 100%;

  @media ${MEDIA.TABLET} {
    order: 1;
    height: 50%;
  }
`;
