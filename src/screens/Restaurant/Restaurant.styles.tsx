import styled from "styled-components";

export const RestaurantContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.eerieBlack};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
