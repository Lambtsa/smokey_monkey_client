import Link from "next/link";
import styled, { css } from "styled-components";
import { NavPosition } from "./Nav.types";
import { MEDIA } from "@constants/layout";

export const NavContainer = styled.div<{
  $isScrolled: boolean;
  $position: NavPosition;
}>`
  position: ${(props) => props.$position};
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 16px;
  width: 100%;
  z-index: 1000;
  ${(props) => {
    switch (props.$position) {
      case "fixed": {
        return css`
          background-color: ${props.$isScrolled
            ? props.theme.colors.eerieBlack80
            : "transparent"};
        `;
      }
      case "unset": {
        return css`
          background-color: ${props.theme.colors.eerieBlack80};
          a {
            color: ${props.theme.colors.white};
          }
        `;
      }
      default: {
        return css`
          background-color: ${props.$isScrolled
            ? props.theme.colors.eerieBlack80
            : "transparent"};
        `;
      }
    }
  }};
`;

export const NavList = styled.ul<{
  $isOpen: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media ${MEDIA.TABLET} {
    position: fixed;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    left: 0;
    top: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.night};
    z-index: 10;
    width: 100vw;
    height: 100dvh;
    scroll-behavior: none;

    a {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const NavElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const NavLanguages = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  line-height: 16px;
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

export const HomeButton = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  line-height: 16px;
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

export const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.eerieBlack};
`;

export const MobileNavLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  line-height: 16px;
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

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    :hover > div {
      display: block;
    }
  }

  button {
    background-color: #3e8e41;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.colors.eerieBlack};
  min-width: 160px;
  border-radius: 0 0 4px 4px;
  width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    a:hover {
      background-color: ${(props) => props.theme.colors.hunterGreen};
    }
  }
`;

export const DropdownLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  :last-child {
    border-radius: 0 0 4px 4px;
  }
`;

export const BurgerMenuBtn = styled.button`
  display: none;

  svg {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  @media ${MEDIA.TABLET} {
    display: block;
  }
`;

export const CloseBtn = styled.button<{
  $isOpen: boolean;
}>`
  display: none;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 20;

  svg {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  @media ${MEDIA.TABLET} {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;
