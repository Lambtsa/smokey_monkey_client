import React from "react";
import { ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = ({
  text,
  btnType,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled {...rest} btnType={btnType}>
      {text}
    </ButtonStyled>
  );
};
