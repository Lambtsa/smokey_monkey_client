import Image from "next/image";
import { CONTAINER, MEDIA } from "@constants/layout";
import Link from "next/link";
import styled from "styled-components";

export const SplitScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGreen};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const SplitScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 32px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.eerieBlack};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled(Image)`
  object-fit: cover;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  max-width: ${CONTAINER.TABLET}px;
  margin: 0 auto;
  height: 100%;
  gap: 32px;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListElement = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const LinkBtn = styled(Link)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkGreen};
  padding: 12px 24px;
  border-radius: 7px;

  &:hover {
    background-color: ${(props) => props.theme.colors.eerieBlack};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const TextLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};

  &:hover {
    color: ${(props) => props.theme.colors.eerieBlack};
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white70};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  font-family: ${(props) => props.theme.fonts.notoSans};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-style: italic;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  /* Note: This allows \n to work */
  white-space: pre-line;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;
