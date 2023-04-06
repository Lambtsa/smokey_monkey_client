import Link from "next/link";
import styled, { css } from "styled-components";
import { NavPosition } from "./Nav.types";

export const NavContainer = styled.div<{
  isScrolled: boolean;
  position: NavPosition;
}>`
  position: ${(props) => props.position};
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 16px;
  width: 100%;
  z-index: 100;
  ${(props) => {
    switch (props.position) {
      case "fixed": {
        return css`
          background-color: ${props.isScrolled
            ? props.theme.colors.black80
            : "transparent"};
        `;
      }
      case "unset": {
        return css`
          background-color: ${props.theme.colors.black80};
          a {
            color: ${props.theme.colors.white};
          }
        `;
      }
      default: {
        return css`
          background-color: ${props.isScrolled
            ? props.theme.colors.black80
            : "transparent"};
        `;
      }
    }
  }};
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NavElement = styled.li``;

export const NavLanguages = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a<{
  isScrolled: boolean;
}>`
  color: ${(props) =>
    props.isScrolled ? props.theme.colors.white : props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  line-height: 16px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  :hover > div {
    display: block;
  }

  button {
    background-color: #3e8e41;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.colors.black};
  min-width: 160px;
  width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a:hover {
    background-color: ${(props) => props.theme.colors.black};
  }
`;

export const DropdownLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  :hover {
    text-decoration: underline;
  }
`;
