import styled from "styled-components";

export const PricesContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.darkGreen};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
`;
