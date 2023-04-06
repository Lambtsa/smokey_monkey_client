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
          color: ${(props) => props.theme.colors.primary};

          &:hover {
            background-color: ${(props) => props.theme.colors.black};
            color: ${(props) => props.theme.colors.white};
          }
        `;
      }
      case "secondary": {
        return css`
          background-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.white};
        `;
      }
    }
  }};
  padding: 12px 24px;
  border-radius: 7px;
`;
