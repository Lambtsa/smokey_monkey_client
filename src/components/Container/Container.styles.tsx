import { CONTAINER, MEDIA } from "@constants/layout";
import styled, { css } from "styled-components";
import { Alignment } from "./Container.types";

export const StyledContainer = styled.div<{
  alignment: Alignment;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 32px;
  padding: 48px;
  flex-direction: column;
  max-width: ${CONTAINER.TABLET}px;

  ${(props) => {
    switch (props.alignment) {
      case "left": {
        return css`
          justify-content: center;
          align-items: flex-start;
        `;
      }
      case "right": {
        return css`
          justify-content: center;
          align-items: flex-end;
        `;
      }
      case "center": {
        return css`
          justify-content: center;
          align-items: center;
        `;
      }
    }
  }};

  @media ${MEDIA.TABLET} {
    padding: 48px 16px;
  }
`;

export const TitleContainer = styled.div<{
  alignment: Alignment;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  ${(props) => {
    switch (props.alignment) {
      case "left": {
        return css`
          justify-content: center;
          align-items: flex-start;
        `;
      }
      case "right": {
        return css`
          justify-content: center;
          align-items: flex-end;
        `;
      }
      case "center": {
        return css`
          justify-content: center;
          align-items: center;
        `;
      }
    }
  }};
`;

export const Title = styled.h2<{
  alignment: Alignment;
}>`
  color: ${(props) => props.theme.colors.white50};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-family: ${(props) => props.theme.fonts.notoSans};

  text-align: ${(props) => {
    switch (props.alignment) {
      case "left": {
        return "left";
      }
      case "right": {
        return "right";
      }
      case "center": {
        return "center";
      }
    }
  }};
`;

export const Subtitle = styled.p<{
  alignment: Alignment;
}>`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 16px;

  text-align: ${(props) => {
    switch (props.alignment) {
      case "left": {
        return "left";
      }
      case "right": {
        return "right";
      }
      case "center": {
        return "center";
      }
    }
  }};
`;

export const Content = styled.p<{
  alignment: Alignment;
}>`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  width: 100%;
  /* Note: This allows \n to work */
  white-space: pre-line;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};

  text-align: ${(props) => {
    switch (props.alignment) {
      case "left": {
        return "left";
      }
      case "right": {
        return "right";
      }
      case "center": {
        return "center";
      }
    }
  }};
`;
