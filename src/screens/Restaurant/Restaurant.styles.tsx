import { MEDIA } from "@constants/layout";
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

export const PensionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.darkGreen};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
