import {
  ErrorMessage,
  InputWrap,
  MessageWrapper,
  StyledInput,
} from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = ({
  type = "text",
  error,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <InputWrap>
      <StyledInput {...rest} type={type} />
      <MessageWrapper>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </MessageWrapper>
    </InputWrap>
  );
};
