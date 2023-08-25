import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 16px;
  border: none;
  outline: none;
  margin: 0 auto;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.white20};
  color: ${(props) => props.theme.colors.white};

  &::placeholder {
    font-size: 16px;
    letter-spacing: normal;
    color: ${(props) => props.theme.colors.white70};
  }
  color-scheme: dark;

  &[type="datetime-local"] {
    border: none;
    box-sizing: border-box;
    outline: 0;
    padding-left: 0.75rem;
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  flex: 1 1 auto;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-left: 8px;
  color: ${(props) => props.theme.colors.white};
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 16px;
  gap: 4px;
`;
