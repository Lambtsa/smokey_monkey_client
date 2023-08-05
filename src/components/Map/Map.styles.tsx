import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100dvh;

  @media ${MEDIA.TABLET} {
    min-height: 300px;
  }
`;
