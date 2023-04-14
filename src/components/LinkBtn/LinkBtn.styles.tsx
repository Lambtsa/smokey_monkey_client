import Link from "next/link";
import styled from "styled-components";

export const Btn = styled(Link)`
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
