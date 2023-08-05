import { CONTAINER, MEDIA } from "@constants/layout";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100dvh;
  color: ${(props) => props.theme.colors.eerieBlack};
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  z-index: 200;
  max-width: ${CONTAINER.TABLET}px;
  width: 100%;

  @media ${MEDIA.TABLET} {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 56px;
  line-height: 56px;
  font-family: ${(props) => props.theme.fonts.royalSignage};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white50};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;
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
