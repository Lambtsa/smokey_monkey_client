import { MEDIA } from "@constants/layout";
import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 3fr 2fr;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.eerieBlack};
  padding: 48px;
  font-size: 12px;

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 48px 16px;
  }
`;

export const CopyrightContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 32px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.night};
  padding: 16px;
  font-size: 12px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  /* text-transform: uppercase; */
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const SmallTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const FooterSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  gap: 48px;
`;

export const FooterList = styled.ul`
  list-style: none;
`;

export const FooterListItem = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 16px;
`;

export const FooterLink = styled(Link)`
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

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  line-height: 20px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;
`;

export const FooterContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;
