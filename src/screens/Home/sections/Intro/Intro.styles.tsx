import Link from "next/link";
import styled from "styled-components";

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
