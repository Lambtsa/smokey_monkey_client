import styled from "styled-components";

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const TableHead = styled.thead`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  width: 100%;
  gap: 16px;
`;

export const TableHeader = styled.th`
  padding: 16px;
  /* border: 1px solid black; */
  background-color: ${(props) => props.theme.colors.white20};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  flex: 1;
`;

export const TableCell = styled.td`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white20};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  flex: 1;
`;
