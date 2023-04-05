import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  svg {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;
