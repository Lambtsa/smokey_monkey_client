import Image from "next/image";
import { MEDIA } from "@constants/layout";
import styled from "styled-components";

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

export const Img = styled(Image)`
  object-fit: cover;
  height: 100%;
`;

export const IntroList = styled.ul`
  list-style: none;
`;

export const IntroListElement = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;
