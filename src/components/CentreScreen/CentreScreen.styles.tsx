import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const CentreScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGreen};
  width: 100%;
  min-height: 100dvh;
`;

export const CentreScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
  max-width: ${CONTAINER.TABLET}px;
  height: 100%;
  overflow: hidden;

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  font-family: ${(props) => props.theme.fonts.notoSans};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  margin-bottom: 16px;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  /* Note: This allows \n to work */
  white-space: pre-line;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;
