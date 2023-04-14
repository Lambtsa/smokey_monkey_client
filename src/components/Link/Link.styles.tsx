import styled from "styled-components";

export const StyledLink = styled.a`
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
