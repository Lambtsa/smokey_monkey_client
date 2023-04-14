import styled, { css } from "styled-components";
import { ButtonType } from "./Button.types";

export const ButtonStyled = styled.button<{
  btnType: ButtonType;
}>`
  ${(props) => {
    switch (props.btnType) {
      case "primary": {
        return css`
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.darkGreen};

          /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
          @media (hover: hover) {
            /* when hover is supported */
            &:hover {
              background-color: ${(props) => props.theme.colors.eerieBlack};
              color: ${(props) => props.theme.colors.white};
            }
          }
        `;
      }
      case "secondary": {
        return css`
          background-color: ${(props) => props.theme.colors.darkGreen};
          color: ${(props) => props.theme.colors.white};
        `;
      }
    }
  }};
  padding: 14px 24px;
  width: 100%;
  border-radius: 7px;
`;
