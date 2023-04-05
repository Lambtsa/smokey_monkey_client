import Link from "next/link";
import styled from "styled-components";

export const NavContainer = styled.div<{
  isScrolled: boolean;
}>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 16px;
  width: 100%;
  z-index: 100;
  background-color: ${(props) =>
    props.isScrolled ? props.theme.colors.black80 : "transparent"};
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NavElement = styled.li``;

export const NavLink = styled(Link)<{
  isScrolled: boolean;
}>`
  color: ${(props) =>
    props.isScrolled ? props.theme.colors.white : props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  line-height: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavLanguages = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
`;
