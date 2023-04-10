import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const JumbotronContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.eerieBlack};
`;

export const JumbotronInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  max-width: ${CONTAINER.TABLET}px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.darkGreen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  font-family: ${(props) => props.theme.fonts.notoSans};
  margin-bottom: 8px;

  @media ${MEDIA.MOBILE} {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.darkGreen};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
`;
