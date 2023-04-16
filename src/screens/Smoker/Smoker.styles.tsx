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
  grid-template-rows: 1fr;
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

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    &:hover {
      background-color: ${(props) => props.theme.colors.eerieBlack};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const TextLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    &:hover {
      color: ${(props) => props.theme.colors.eerieBlack};
      text-decoration: underline;
    }
  }
`;
