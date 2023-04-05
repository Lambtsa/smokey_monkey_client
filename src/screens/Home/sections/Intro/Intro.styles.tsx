import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroContent = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const IntroList = styled.ul`
  list-style: none;
`;

export const IntroListElement = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;
