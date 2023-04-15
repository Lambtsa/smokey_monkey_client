import { MEDIA } from "@constants/layout";
import Link from "next/link";
import styled from "styled-components";

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 1fr 1fr;
  gap: 32px;
  width: 100%;

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 48px 16px;
  background-color: ${(props) => props.theme.colors.white20};
  border-radius: 7px;
`;

export const ContactContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.darkGreen};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white50};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-family: ${(props) => props.theme.fonts.notoSans};
  text-align: "center";
`;

export const Content = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  width: 100%;
  /* Note: This allows \n to work */
  white-space: pre-line;
  line-height: 20px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  text-align: center;
`;

export const ContactLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  line-height: 20px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    &:hover {
      text-decoration: underline;
    }
  }
`;
