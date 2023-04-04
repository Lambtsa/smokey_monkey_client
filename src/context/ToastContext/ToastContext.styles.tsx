import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const ToastsWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 0px;
  right: 0px;
  margin: 16px;
  /* padding: 16px; */
  max-width: 500px;
  overflow-x: hidden;

  @media ${MEDIA.MOBILE} {
    max-width: 100%;
  }
`;
