import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 48px;
  max-width: ${CONTAINER.MOBILE}px;

  @media ${MEDIA.TABLET} {
    padding: 48px 16px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white50};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-family: ${(props) => props.theme.fonts.notoSans};
  text-align: "left";
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 16px;
  text-align: "left";
`;
