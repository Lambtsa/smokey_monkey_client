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
  padding: 16px 32px;
  border-radius: 10px;
  width: 240px;
`;
