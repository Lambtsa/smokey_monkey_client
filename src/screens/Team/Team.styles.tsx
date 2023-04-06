import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 32px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListElement = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const LinkBtn = styled(Link)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  padding: 12px 24px;
  border-radius: 7px;

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const TextLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};

  &:hover {
    color: ${(props) => props.theme.colors.black};
    text-decoration: underline;
  }
`;
