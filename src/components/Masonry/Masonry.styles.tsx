import styled from "styled-components";
import Image from "next/image";
import { CONTAINER } from "@constants/layout";

export const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: masonry;
  max-width: ${CONTAINER.PC}px;
  margin: 0 auto;
  padding: 16px;
`;

export const Img = styled(Image)`
  object-fit: cover;
  height: 100%;
  max-width: 100%;
  object-position: center;
`;
